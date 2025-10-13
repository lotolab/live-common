/* Live realtime caches */

import { GameLive } from './game.types';
import { PlayerBase, TeamBase } from './team.types';
import { MatchResultType } from './comm.types';
import { FBMatchStagedEnum } from '../enums';

/**
 * @description 比赛实况信息
 *  cache key: fb:galive:${liveid}
 *  expires default 10days
 * @property matchStaged 比赛进程阶段
 * @property referee 主裁
 * @property lineman 边裁
 * @property varAssistant 助理裁判，视频裁判
 * @property commentator 解说
 */
export interface FBGameRealtimeCache extends GameLive {
  referee?: string;
  lineman?: string;
  varAssistant?: string;
  commentator?: string;
  weather?: MatchWeather;
  [k: string]: any;
}

/**
 * 天气
 */
export interface MatchWeather {
  summary: string; // 晴天、小雨
  temperature: string; // 温度
  humidity: string; // 湿度
  windSpeed: string; // 风速
  [k: string]: any;
}

/**
 * @description 比赛时间进度缓存记录
 *   cache key fb:rtlive:${liveid}
 *   expires default 10days
 * @property stoped 用于控制计时组件是否停止
 * @property inprogress 比赛进行中
 * @property matchStaged 比赛进程 number or FBMatchStagedEnum
 * @property matchStarting 比赛日期格式 yyyy-MM-dd HH:mm 初始化时取自 matchdate + matchtime
 * @property isCumulatived 是否累计阶段时间
 * @property consumedTime 已消耗时间 sconds
 * @property stageStarting 时间毫秒值
 * @property injuryTime: 补时时间 seconds
 */
export interface FBMatchTimingCache {
  liveid: string;
  inprogress: boolean;
  stoped?: boolean;
  matchStaged: FBMatchStagedEnum;
  isCumulatived: boolean;
  matchStartTime: string;
  consumedTime: number;
  stageStarting: number;
  injuryTime: number;
  injuryEndMills: number;
  changedTS: number;
  [k: string]: any;
}

/* ============================== Team ==================================== */
/**
 * @description 换人事件
 * @property batchid sometimes 用于区分批量换人,控制直播显示
 * @property time 实际时间 15:20
 * @property timetext 发生在第 X 分钟
 */
export interface SubstitutionEvent {
  batchid: string;
  time: string;
  timetext?: string;
  downPlayer: string;
  downNo: string;
  upPlayer: string;
  upNo: string;
}
/**
 * @description 比赛球队实况信息
 *  cache key: fb:tmlive:${liveid}:${teamid}
 *  expires default 10days
 *  logo force validate undefined overrider parent TeamBase
 * @property isHome 是否主队
 * @property headCoach 主教练
 * @property trainer 助理教练
 * @property coach 教练
 * @property guide 领队
 * @property leader 场上队长
 * @property fouls 犯规次数
 * @property liveupNos 首发号码清单
 * @property substituteNos 替补号码
 * @property substitutions 全场换人记录
 * @property lastSubstitutions overide update 用于显示最近一次换人信息
 * @property summary 球队摘要信息
 */
export interface FBTeamRealtimeCache extends TeamBase {
  liveid: string;
  isHome?: boolean;
  headCoach: string;
  trainer?: string;
  coach?: string;
  guide?: string;
  leader?: string;
  goals: number;
  yellowCards: number;
  redCards: number;
  fouls: number;
  liveupNos: number[];
  substituteNos: number[];
  substitutions: SubstitutionEvent[];
  lastSubstitutions: SubstitutionEvent[];
  logo: string;
  matchResult?: MatchResultType;
  summary?: string;
  [k: string]: any;
}

/**
 * @description 赛场球员信息
 *  cache key: fb:pulive:${liveid}:${playerid}
 *  通过设置
 * @property isXI 是否在首发阵容里
 * @property comeonTime 上场时间(比赛的第x分钟上场) 0 ,-1 代表未上场
 * @property takeoffTime 下场时间(比赛的第x分钟替换下场)
 * @property playingTime = takeoffTime - comeonTime
 */
export interface FBPlayerRealtimeCache extends PlayerBase {
  liveid: string;
  isXI: boolean;
  comeonTime?: number;
  takeoffTime?: number;
  playingTime?: number;
  goals?: number;
  yellowCards?: number;
  redCards?: number;
  fouls?: number;
  [k: string]: any;
}
