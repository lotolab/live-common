export type PlayerSexy = 'male' | 'female';
/**
 *
 */
export interface PlayerBase {
  teamid: string;
  playerid?: string;
  name: string;
  no: string;
  sexy?: PlayerSexy;
  age?: number;
  printName?: string; // 球衣名称
  birthday?: string;
  intro: string;
}
