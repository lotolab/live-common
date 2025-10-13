import { MatchStagedType } from '../enums';
import { GameType, ORMCommBase } from './comm.types';

/**
 * @gameid from config yaml
 * gameid: size=12 GA-xxxxxx random 9
 */
export interface GameBase extends ORMCommBase {
  gameid: string;
  type?: GameType;
  title: string;
  short: string;
  officalSite?: string;
  slogan?: string;
  logo?: string;
  logoid?: string;
  sponsorid?: string;
  sponsor?: string;
  intro?: string;
}

/**
 * game_live
 * 比赛场次数据 liveid: size=12 LV-xxxxxx random 9
 * @property matchdate yyyy-MM-dd
 * @property matchtime HH:mm
 * @property kickOffTime new Date(`${matchdate} ${matchtime}:00.000`)
 */
export interface GameLive extends ORMCommBase {
  liveid: string;
  gameid: string;
  gameStage: string;
  matchStaged: MatchStagedType;
  matchdate: string;
  matchtime: string;
  kickOffTime?: number;
  round: number;
  roundText: string;
  city: string;
  stadium: string;
  homeTeamid: string;
  awayTeamid: string;
  aiForecasting?: string;
  intro?: string;
}
