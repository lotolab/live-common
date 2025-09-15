import { GameType } from './game.types';

export interface MessageBase<D = any> {
  id?: number | string;
  type?: GameType;
  message: D;
  [k: string]: any;
}
