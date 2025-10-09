import { GenderType } from '../enums';

/**
 * lt_team_base
 * 团队信息
 */
export interface GATeamBase {
  teamid: string;
  gameid: string;
  name: string;
  short: string;
  type?: String;
  establishment?: string; //成立日期
  city: string;
  stadium: string;
  logo?: string;
  logopath?: string;
  officalSite?: string;
  intro?: string;
}

/**
 * 球员信息
 */
export interface GAPlayerBase {
  playerid: string;
  teamid: string;
  name: string;
  short: string;
  no: number;
  height: string | null;
  weight: string | null;
  brithday?: string | null;
  age: number | null;
  photo: string | null;
  gender: string | null;
  printName: string;
  position: string | null;
  playOrder: number | null;
  isLeader: boolean | null;
  intro: string | null;
}

/**
 * lt_team_staff
 */
export interface GATeamStaff {
  staffid: string;
  teamid: string;
  name: string;
  short: string;
  gender?: string;
  age?: number;
  experience?: string;
  position: string;
  intro: string;
}
