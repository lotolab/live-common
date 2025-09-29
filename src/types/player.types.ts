export type PlayerSexy = 'male' | 'female';
/**
 *
 */
export interface PlayerBase {
  teamid: string;
  registDate?: string;
  playerid?: string;
  name: string;
  no: string;
  sexy?: PlayerSexy;
  age?: number;
  printName?: string; // 球衣名称
  birthday?: string;
  intro: string;
}

export interface LivePlayer {
  playerid: string;
  name: string;
  no: string;
  position: string;
  printName: string;
  age?: string;
  [k: string]: any;
}
