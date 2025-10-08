import { GameType } from './game.types';

export interface MessageBase<D = any> {
  id?: number | string;
  type?: GameType;
  message: D;
  [k: string]: any;
}

export interface BarrageMessage {
  msg: string;
  from: string; // 发送人
  time: string; // 发送时间戳
}

export type BarrageMessagePayload = Partial<Omit<BarrageMessage, 'msg'>> & {
  msg: string;
};
