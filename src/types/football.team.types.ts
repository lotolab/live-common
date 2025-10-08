import { GameResultType } from './game.types';
import { GAPlayerBase, GATeamBase, GATeamStaff } from './team.types';

/**
 * @author lanbery
 * 定义球队、球员、随队人员信息
 */

export interface FBTeamStaff extends GATeamStaff {
  [k: string]: any;
}

export interface FBTeamBase extends GATeamBase {
  [k: string]: any;
}

/**
 * @description 球员信息
 * @property playOrder
 */
export interface FBGamePlayer extends GAPlayerBase {
  [k: string]: any;
}

/**
 * @description 球队比赛信息
 *  cache key: fb:livestat:${liveid}:${teamid}
 *
 * @property goals 进球
 * @property shots 射门
 * @property
 * @property offside 越位
 * @property fouls 犯规
 * @property penalty 头球
 * @property cornerKick 角球
 */
export interface FBTeamLiveStatCache {
  liveid: string;
  teamid: string;
  isHome: boolean;
  name: string;
  goals: number;
  shots: number;
  yellowCards: number;
  redCards: number;
  fouls: number;
  penalty: number;
  cornerKick: number;
  result: GameResultType;
  [k: string]: any;
}

/**
 * @description 球员实时数据缓存
 *    cacheKey fb:player:${liveid}:${playerid}
 * @property substituted 是否被换下
 * @property entryTime 上场时间
 * @property leaveTime 下场时间
 * @property playingTime = leaveTime - entryTime
 */
export interface FBLivePlayerStaticsCache extends FBGamePlayer {
  substituted?: boolean;
  entryTime?: number;
  leaveTime?: number;
  playingTime: string;
  [k: string]: any;
}

/**
 * @description
 *  球队主力信息
 *
 * @property headCoach 主教练
 * @property trainer 助理教练
 */
export interface FBTeamKeyPlayerCache {
  teamid: string;
  isHome: boolean;
  leader: string;
  lineup: FBGamePlayer[];
  substitute: FBGamePlayer[];
  headCoach: string;
  trainer: string;
  [k: string]: any;
}
