/**
 *
 */

import { FBMessageScopeType, SocketEmitNameType } from '../enums';

/**
 * uuid 消息的唯一ID
 */
export type SockCtrlMessage<S = FBMessageScopeType, P = any> = {
  uuid: string;
  type?: SocketEmitNameType;
  scope: S;
  liveid?: string;
  payload: P | null;
  [k: string]: any;
};
