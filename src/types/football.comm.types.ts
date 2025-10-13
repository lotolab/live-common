import { GameBase, GameLive } from './game.types';
import { TeamBase } from './team.types';

/**
 *
 */
export interface ActivedMatchIds {
  liveid: string;
  gameid: string;
  homeTeamid: string;
  awayTeamid: string;
}

/**
 * game_base
 * 赛事基本信息
 * @gameid from config yaml
 * @private gameStage 比赛阶段： 小组循环赛（常规赛）、淘汰赛
 * @property rounds 比赛总轮数
 * @property halfMinutes 半场时间minutes
 * @property extraMinutes 加时时间
 */
export interface FBGameBase extends GameBase {
  type: 'football';
  rounds: number;
  halfMinutes: number;
  extraMinutes: number;
  gameStage?: string;
  [k: string]: any;
}

/**
 * @description Football initialization configuration types
 *
 */
export type FBConfGameBase = Omit<
  FBGameBase,
  'gameid' | 'type' | 'intro' | 'createdAt' | 'updatedAt' | 'isDelete'
> & { gameid?: string };
export type FBConfGameLive = Omit<
  GameLive,
  | 'liveid'
  | 'gameid'
  | 'homeTeamid'
  | 'awayTeamid'
  | 'aiForecasting'
  | 'intro'
  | 'createdAt'
  | 'updatedAt'
  | 'isDelete'
>;

export type FBConfTeamBase = Omit<
  TeamBase,
  'teamid' | 'gameid' | 'createdAt' | 'updatedAt' | 'isDelete'
>;
