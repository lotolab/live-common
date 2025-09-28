import { gameFBProcessEnum } from 'src/enums';
import { GameBase, GameTiming } from './game.types';

/**
 * 赛事基本信息
 * @gameid from config yaml
 */
export interface FBGameBase extends GameBase {
  type?: 'football';
  firstHalfMin: number;
  secondHalfMin: number;
  extraTimeMin: number;
  [k: string]: any;
}

/**
 * 比赛场次实时数据
 * @gameid from config yaml
 */
export interface FBGameLiveBase extends FBGameBase {
  liveid: string;
  gameDate: string;
  kickOffTime: string; // 开赛时间
  gameStartTime: string;
  subtitle?: string;
  city: string;
  soccerField: string;
  homeTeam: string;
  homeTeamShort?: string;
  awayTeam: string;
  awayTeamShort?: string;
  [k: string]: any;
}

export type GameLiveProgress =
  | 'unstart'
  | 'firstHalf'
  | 'internal'
  | 'secondHalf'
  | 'allowance'
  | 'extraTime'
  | 'shootOut'
  | 'gameover';

/**
 * 比赛结果：
 * Wins (W),Draws (D), Losses (L)：胜、平、负。
 */
export type GameResultType = 'W' | 'D' | 'L';

export interface FBGameTiming extends GameTiming {
  inprogressText: string;
  [k: string]: any;
}

/**
 * 单场比赛实况数据
 */
export interface FBGameLiveStatistics {
  gameid: string;
  liveid: string;
  progressCode?: GameLiveProgress;
  gameProgress?: number | gameFBProcessEnum; // 上下半场
  timingSumed?: boolean; // 是否累加计时
  timingStartTime?: string;
  homeTeamid: string;
  homeTeamGoals: number;
  homeRedCards: number;
  homeYellowCards: number;
  awayTeamid: string;
  awayTeamGoals: number;
  awayRedCards: number;
  awayYellowCards: number;
  injuryTime: string;
  firstHalfMin: number;
  secondHalfMin: number;
  extraTimeMin: number;
  [k: string]: any;
}
/**
 * 赛后统计信息
 */
export interface FBGameStatistics {
  teamid: string;
  gameDate: string;
  gameResult?: GameResultType;
  shots: number;
  shotsOnGoal: number;
  goalsSored: number;
  foulsCommitted: number;
  cornerKick: number;
  [k: string]: any;
}
