/* Live */

import { gameFBProcessEnum } from '../enums';
import { FBGameBase, FBGameLive } from './game.types';

/**
 * @description 直播默认场次设定
 *  cache key fb:auth:${liveid}
 * @property liveid 当前要转播的场次id
 *  由前端Query传递liveid,未传递则使用服务端默认配置liveid
 * @property token 权限token
 */
export interface FBLiveTimeAuthCache {
  gameid: string;
  liveid: string;
  token: string;
  expires: string; //seconds
  largeScrennUrl: string;
  liveurl: string;
  adminurl: string;
  userIds: string[];
}

/**
 * @description Cache
 *    cacheKey: fb:base:${gameid}
 */
export interface FBGameBaseCache extends FBGameBase {
  [k: string]: any; // 扩展字段 不存储数据库
}

/**
 * @description 比赛单场信息
 *  cacheKey fb:live:${liveid}
 *   kickOffTime =>> gameDate
 * @property homeTeamLogo url or uuid
 */
export interface FBGameLiveCache extends FBGameLive {
  liveid: string;
  year: string;
  rounds: number;
  roundsTitle: string;
  gameDate: string;
  city: string;
  stadium: string;
  homeTeamid: string;
  homeTeam?: string;
  homeTeamShort?: string;
  homeTeamLogo?: string;
  awayTeamid: string;
  awayTeam?: string;
  awayTeamShort?: string;
  awayTeamLogo?: string;
  [k: string]: any;
}

/**
 * @description
 *      cachekey fb:timing:${liveid}
 * inprogress 比赛进行中
 * gameProgress 比赛进程 number or gameFBProcessEnum
 * gameStartTime 比赛日期格式 yyyy-MM-dd HH:mm
 * isCumulatived 是否累计阶段时间
 * consumedTime 已消耗时间 sconds
 * stageStarting 时间毫秒值
 * injuryTime: 补时时间 seconds
 */
export interface FBGameTimingCache {
  liveid: string;
  inprogress: boolean;
  gameProgress: number | gameFBProcessEnum;
  isCumulatived: boolean;
  gameStartTime: string;
  consumedTime: number;
  stageStarting: number;
  injuryTime: number;
  injuryEndMills: number;
  changedTS: number;
  [k: string]: any;
}

/**
 * @description 比赛裁判组
 *  cache key fb:gastaff:${liveid}
 * @property referee 主裁
 * @property lineman 边裁
 * @property assistant 助理裁判
 * @property masterCommentator 主评论员
 */
export interface FBGameStaffLiveCache {
  liveid: string;
  gameid: string;
  referee: string;
  refereeId: string;
  linemanOne: string;
  linemanOneId?: string;
  linemanTwo: string;
  linemanTwoId?: string;
  assistant: string;
  assistantId?: string;
  varAssistant: string;
  varAssistantId?: string;
  masterCommentator: string;
  slaveCommentator: string;
  [k: string]: any;
}
