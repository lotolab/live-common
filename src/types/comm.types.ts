export interface ORMCommBase {
  createdAt?: Date;
  updatedAt?: Date;
  isDelete?: boolean;
}

/**
 * @description game type
 * badminton 羽毛球
 * shuttlecock 毽球
 * tennis 网球
 * volleyball  排球
 */
export type GameType =
  | 'badminton'
  | 'basketball'
  | 'football'
  | 'pingpong'
  | 'shuttlecock'
  | 'tennis'
  | 'volleyball';

/**
 * 比赛结果：
 * Wins (W),Draws (D), Losses (L)：胜、平、负。
 */
export type MatchResultType = 'W' | 'D' | 'L' | '-';

export type GenderType = 'male' | 'female';

export type SysUserRole = 'User' | 'Producer' | 'Commentator' | 'Technical' | 'Screener' | string;

export type PlayOrderType = 0 | 1 | 2 | 9 | number;
