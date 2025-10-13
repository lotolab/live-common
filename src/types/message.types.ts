import { LiveMessageScopeType } from '../enums/live.scope.enum';
import { GameType } from './comm.types';

export interface MessageBase<D = any> {
  id?: number | string;
  type: GameType;
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

/**
 *
 */
export interface LiveMessage<D = any> {
  id?: string;
  liveid: string;
  scope: LiveMessageScopeType;
  Data: D;
  [k: string]: any;
}
