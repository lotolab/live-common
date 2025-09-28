import { LivePlayer, PlayerBase } from './player.types';
import { TeamBase } from './team.types';

/**
 *
 */
export interface FBGamePlayer extends PlayerBase {
  jerseyNumber?: string; // 球员号码
  position?: string; //
  isStarting?: boolean;
  [k: string]: any;
}

/** Football team */
export interface FBTeamStatics extends TeamBase {
  type: 'football';
  homeField?: string; // 主场 场地名称
  [k: string]: any;
}

/**
 * @property manager 主教练
 */
export interface FBGameLiveInfo {
  teamid: string;
  teamName: string;
  manager: string;
  lineup: Array<LivePlayer>; // 首发
  bench: Array<LivePlayer>; // 替补
}
