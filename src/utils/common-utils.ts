export const TimingTextRegex = /^[\d]{1,3}(\:([0-4][\d]|5[0-9]|[\d]))?$/;
export const HourMinutesRegex = /^([0-1][0-9]|2[0-3])\:([0-4][0-9]|5[0-9])$/;

export const validTimingText = (text: string = '00:00') =>
  !text.length || TimingTextRegex.test(text);

/**
 *
 * @param text
 * @returns
 */
export const validTimingStart = (text: string) => HourMinutesRegex.test(text);

/**
 *
 * @param a any required sortno
 * @param b any required sortno
 * @param ascending
 * @returns -1,0,1
 */
export function sortable(a: any, b: any, ascending: boolean = true) {
  if (a.sortno === undefined && b.sortno) {
    return ascending ? -1 : 1;
  }
  if (a.sortno && b.sortno === undefined) {
    return ascending ? 1 : -1;
  }

  const ano = a.sortno || 0;
  const bno = b.sortno || 0;

  if (ano === bno) return 0;

  return ascending ? ano - bno : bno - ano;
}

/**
 *
 * @param seconds less than zero will return '00:00'
 * @returns
 */
export function secondToTimingText(seconds: number = 0) {
  if (seconds <= 0) return '00:00';
  const min = Math.floor(seconds / 60);
  const sec = seconds - min * 60;

  let text: string = min < 10 ? `0${min}` : `${min}`;
  text = text + ':' + (sec < 10 ? `0${sec}` : `${sec}`);
  return text;
}

/**
 *
 * @param timeText empty will default 00:00
 * @returns seconds
 */
export function timingTextToSeconds(timeText: string): number {
  if (timeText?.length && !TimingTextRegex.test(timeText)) throw new Error(`${timeText} invalid.`);
  if (timeText === '') timeText = '00:00';
  const [min = '00', sec = '00'] = timeText.split(':');
  const minutes = parseInt(min);
  const seconds = parseInt(sec);

  return minutes * 60 + seconds;
}

/**
 * 计算当前与
 * @param stageStarting
 * @returns
 */
export function diffNowSeconds(stageStarting: number = 0) {
  let diff = Date.now() - stageStarting;
  if (diff === 0) return diff;

  return Math.round(diff / 1000);
}

export function calcTimingStartTime(gameStartTime?: string, consumedSeconds: number = 0) {
  let start = gameStartTime?.length ? new Date(gameStartTime).setSeconds(0, 0) : Date.now();

  return start;
}
/**
 * 获取当前日期
 * @returns today yyyy-mm-dd
 */
export const getTodayYMD = () => {
  const today = new Date();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  return `${today.getFullYear()}-${d < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`;
};
/**
 * 获取当前时间
 * @returns hh:mm:ss
 */
export const getCurrentHMS = () => {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
};

/**
 *
 * @param start mill number or Date
 * @returns HH:mm
 */
export const getStartHM = (start: number | Date) => {
  const d: Date = new Date(start);
  const h = d.getHours();
  const m = d.getMinutes();
  return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`;
};
