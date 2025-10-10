import { ORMCommBase } from './comm.types';

/**
 * lt_team_base
 * 团队信息
 * teamid: TM-xxxxxxx random
 */
export interface TeamBase extends ORMCommBase {
  teamid: string;
  gameid: string;
  name: string;
  enname?: string;
  short: string;
  city: string;
  stadium: string;
  slaveStadium?: string;
  manager?: string;
  establishment?: string; //成立日期
  logo?: string;
  logoid?: string;
  slogan?: string;
  officalSite?: string;
  sponsor?: string;
  intro?: string;
}

/**
 * @description
 * 球员信息
 * playerid: PU-xxxxxxx sequence number
 * @property avatar: player avatar img url
 * @property avatarid: avatar img id in db storage
 * @property 0 -lineup 首发 ;1-substitute 替补;2- injury 伤停;9: other 其他
 */
export interface PlayerBase extends ORMCommBase {
  playerid: string;
  teamid: string;
  name: string;
  short: string;
  enname?: string;
  no: number;
  shirtName?: string;
  height: string;
  weight: string;
  brithday?: string;
  age?: number;
  avatar?: string;
  avatarid?: string;
  gender?: string;
  position?: string;
  tags?: string;
  isXI?: boolean;
  playOrder: number;
  keyPlayer?: boolean;
  isLeader?: boolean;
  intro?: string;
}
