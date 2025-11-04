import { FBMatchStagedEnum, matchStagedOptions, MatchStagedType } from '../enums';
import { FBMatchTimingCache } from '../types';

export const TimingTextRegex = /^[\d]{1,3}(:([0-4][\d]|5[0-9]|[\d]))?$/;
export const HourMinutesRegex = /^([0-1][0-9]|2[0-3]):([0-4][0-9]|5[0-9])$/;

/**
 * MatchTiming Utilities
 */
export const MatchTimingUtil = {
  /**
   * 校验比赛计时格式 xx:xx 98:56
   * @param text
   * @returns boolan valid
   */
  validateTimingText(text: string) {
    return TimingTextRegex.test(text);
  },
  /**
   * 校验比赛开始时间格式
   * @param text HH:mm min 00:00 max 23:59
   * @returns boolan valid
   */
  validateHourMinuteText(text: string) {
    return HourMinutesRegex.test(text);
  },
  /**
   * 获取当前日期
   * today yyyy-mm-dd
   * @returns
   */
  getTodayYMD() {
    const today = new Date();
    const m = today.getMonth() + 1;
    const d = today.getDate();
    return `${today.getFullYear()}-${d < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`;
  },
  /**
   * 获取当前时间
   * @returns hh:mm:ss
   */
  getCurrentHMS() {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();

    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  },
  translateMatchStagedName(matchStaged: MatchStagedType) {
    const find = matchStagedOptions.find((it) => it.value === matchStaged);
    return find ? find.label : matchStaged;
  },

  /**
   * 5:00 => 300 seconds
   * @param timeText like 16:32 ,6:5 or 06:00
   * @returns seconds number
   */
  timingTextToSeconds(timeText: string = ''): number {
    if (timeText?.length && !TimingTextRegex.test(timeText))
      throw new Error(`${timeText} invalid.`);

    if (timeText === '') timeText = '00:00';
    const [min = '00', sec = '00'] = timeText.split(':');
    const minutes = parseInt(min);
    const seconds = parseInt(sec);

    return minutes * 60 + seconds;
  },
  /**
   * 593 S => 09:53
   * @param seconds number
   * @returns timing text like 121:49
   */
  secondsToTimingText(seconds: number = 0): string {
    if (seconds <= 0) return '00:00';
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;

    let text: string = min < 10 ? `0${min}` : `${min}`;
    text = text + ':' + (sec < 10 ? `0${sec}` : `${sec}`);
    return text;
  },
  /**
   * 通过当前显示计时text
   * 计算比赛阶段开始时间
   */

  calculateStagedStartingByShowTime(
    showTime: string,
    timingCache: FBMatchTimingCache,
    matchStaged?: MatchStagedType,
  ): number {
    if (!TimingTextRegex.test(showTime)) {
      throw new Error(`显示时间格式不正确,请输入[ 15:00 ]示例格式！`);
    }
    if (matchStaged === undefined) {
      matchStaged = timingCache.matchStaged;
    }

    if (
      ![
        FBMatchStagedEnum.firstHalf,
        FBMatchStagedEnum.secondHalf,
        FBMatchStagedEnum.internal,
        FBMatchStagedEnum.extraTime,
        FBMatchStagedEnum.shootout,
      ].includes(matchStaged)
    ) {
      throw new Error(`请再常规比赛阶段【上下半场、中场休息或加时赛】校对时间！`);
    }
    // 已消耗时间，中场休息时 更新
    const { halfMinutes = 45, extraMinutes = 30 } = timingCache;
    let consumedTime = timingCache.consumedTime || 0;
    if (consumedTime === 0) {
      if ([FBMatchStagedEnum.secondHalf, FBMatchStagedEnum.internal].includes(matchStaged)) {
        consumedTime = halfMinutes * 60;
      } else if (matchStaged === FBMatchStagedEnum.extraTime) {
        consumedTime = halfMinutes * 2 * 60;
      } else if (matchStaged > 4) {
        consumedTime = halfMinutes * 2 * 60 + extraMinutes * 60;
      }
    }

    let showSeconds = MatchTimingUtil.timingTextToSeconds(showTime);
    if (showSeconds - consumedTime < 0) {
      throw new Error(
        `你输入的校对时间${showTime}小于[${MatchTimingUtil.translateMatchStagedName(matchStaged)}]` +
          `阶段的时间 ${MatchTimingUtil.secondsToTimingText(consumedTime)}.`,
      );
    }

    const stageStarting = Date.now() - (showSeconds - consumedTime) * 1000;
    return stageStarting;
  },
  /**
   * 用于刷新时重新计算计时累加秒数
   * 当matchStaged 不处于 常规赛[上下半场，加时赛，或点球]阶段时返回 -1
   * @param timingCache
   * @returns currentTimer start seconds number
   */
  calculateCurrentConsumedSeconds(timingCache: FBMatchTimingCache): number {
    const { matchStaged, halfMinutes = 45, extraMinutes = 0, stageStarting = 0 } = timingCache;
    if (
      ![
        FBMatchStagedEnum.firstHalf,
        FBMatchStagedEnum.secondHalf,
        FBMatchStagedEnum.extraTime,
        FBMatchStagedEnum.shootout,
      ].includes(matchStaged)
    )
      return -1;
    let consumedTime = timingCache.consumedTime;
    if (consumedTime === 0 && matchStaged === FBMatchStagedEnum.secondHalf) {
      consumedTime = halfMinutes * 60;
    } else if (consumedTime === 0 && matchStaged === FBMatchStagedEnum.extraTime) {
      consumedTime = halfMinutes * 60 * 2;
    } else if (consumedTime === 0 && matchStaged === FBMatchStagedEnum.shootout) {
      consumedTime = halfMinutes * 60 * 2 + extraMinutes * 60;
    }

    const now = new Date();
    // 四个小时的阈值
    const thresholdMills = 4 * 3600 * 1000;
    if (stageStarting === 0 || now.getTime() - stageStarting > thresholdMills) {
      return consumedTime;
    }

    return Math.ceil((now.getTime() - stageStarting) / 1000) + consumedTime;
  },
  /**
   *
   *
   */
  /**
   * 计算 计分事件发生在比赛进行的时间点
   * 当matchStaged 不处于 常规赛[上下半场，加时赛，或点球]阶段时返回 日期时间串 HH:mm:ss
   * 其他返回 5′37″ 格式
   * @param timingCache
   * @returns string
   */
  calculateScoringTimeText(timingCache: FBMatchTimingCache): string {
    const { matchStaged, halfMinutes = 45, extraMinutes = 0, stageStarting = 0 } = timingCache;
    const now = new Date();
    let h = now.getHours(),
      m = now.getMinutes(),
      s = now.getSeconds();
    let text = '';
    text = h < 10 ? `0${h}` : `${h}`;
    text = text + ':' + (m < 10 ? `0${m}` : `${m}`);
    text = text + ':' + (s < 10 ? `0${s}` : `${s}`);
    if (
      ![
        FBMatchStagedEnum.firstHalf,
        FBMatchStagedEnum.secondHalf,
        FBMatchStagedEnum.extraTime,
        FBMatchStagedEnum.shootout,
      ].includes(matchStaged)
    ) {
      return text;
    }

    let consumedTime = timingCache.consumedTime;
    if (consumedTime === 0 && matchStaged === FBMatchStagedEnum.secondHalf) {
      consumedTime = halfMinutes * 60;
    } else if (consumedTime === 0 && matchStaged === FBMatchStagedEnum.extraTime) {
      consumedTime = halfMinutes * 60 * 2;
    } else if (consumedTime === 0 && matchStaged === FBMatchStagedEnum.shootout) {
      consumedTime = halfMinutes * 60 * 2 + extraMinutes * 60;
    }

    // 四个小时的阈值
    const thresholdMills = 4 * 3600 * 1000;
    if (stageStarting === 0 || now.getTime() - stageStarting > thresholdMills) {
      return text;
    }

    const currentStartSeconds = Math.ceil((now.getTime() - stageStarting) / 1000) + consumedTime;
    if (currentStartSeconds <= 0) return text;

    const minutes = Math.floor(currentStartSeconds / 60);
    const seconds = currentStartSeconds - minutes * 60;

    return `${minutes}′${seconds}″`;
  },
};
