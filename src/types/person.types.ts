import { GenderType, ORMCommBase } from './comm.types';

/**
 * 赛事工作人员
 * staffid: size=10 GAU-xxxxxx sequence number
 * avatar: avatar img url
 */
export interface GameStaff extends ORMCommBase {
  staffid: string;
  gameid: string;
  name: string;
  short: string;
  enname?: string;
  nickname: string;
  age?: number;
  officiatingYears?: number;
  role?: string;
  avatar?: string;
  avatarid?: string;
  intro?: string;
}

/**
 * 随队人员 len=10 TMU-xxxxxx sequence number
 */
export interface TeamStaff extends ORMCommBase {
  staffid: string;
  teamid: string;
  name: string;
  short: string;
  gender?: GenderType;
  age?: number;
  officiatingYears?: string;
  role: string;
  avatar?: string;
  avatarid?: string;
  intro?: string;
}
