import { SockCtrlMessage } from 'src/types';
import { FBMessageScopeType } from '../enums';

/**
 *
 * @param prefix
 * @returns string uuid
 */
export function genMessageUuid(prefix: string = 'FB'): string {
  const now = new Date();
  return prefix?.length
    ? `${prefix}_${now.getHours()}${now.getTime().toString(36)}`
    : `${now.getHours()}${now.getTime().toString(36)}`;
}

export function newSocketMessage<S = FBMessageScopeType, P = any>(
  scope: S,
  playload: P = null,
): SockCtrlMessage<S, P> {
  return {
    uuid: genMessageUuid(),
    scope,
    payload: playload,
  } as SockCtrlMessage<S, P>;
}
