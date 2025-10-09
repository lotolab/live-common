export type GameType =
  | 'football'
  | 'pingpong'
  | 'badminton'
  | 'basketball'
  | 'shuttlecock'
  | 'tennis'
  | 'volleyball'
  | string;

/**
 * 比赛结果：
 * Wins (W),Draws (D), Losses (L)：胜、平、负。
 */
export type GameResultType = 'W' | 'D' | 'L' | '';

/**
 *  @gameid from config yaml
 */
export interface GameBase {
  gameid: string;
  type?: GameType;
  title: string;
  short?: string;
  intro?: string;
  sponsorsid?: string;
}

/**
 * game_base
 * 赛事基本信息
 * @gameid from config yaml
 * @private gameStage 比赛阶段： 小组循环赛（常规赛）、淘汰赛
 * @property totalRounds 比赛总轮数
 * @property halfMinutes 半场时间minutes
 * @property extraMinutes 加时时间
 */
export interface FBGameBase extends GameBase {
  type: 'football';
  gameStage: string;
  totalRounds: number;
  halfMinutes: number;
  extraMinutes: number;
}

/**
 * game_live
 */
export interface FBGameLive {
  liveid: string;
  gameid: string;
  year: string;
  rounds: number;
  roundsTitle: string;
  kickOffTime: string | Date | null;
  city: string;
  stadium: string;
  homeTeamid: string;
  awayTeamid: string;
}
