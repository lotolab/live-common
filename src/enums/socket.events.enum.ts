/**
 * Message Score use for ctrl message scope property
 *  or event name
 * Like socket client emit('messageScope',message)
 *
 */
export const FBMessageScopeEnum = {
  ActivedMatchIds: 'ActivedMatchIds',
  AllRealtimeList: 'AllRealtimeList',
  AllKitBasicCache: 'AllKitBasicCache',
} as const;

export type FBMessageScopeType = (typeof FBMessageScopeEnum)[keyof typeof FBMessageScopeEnum];

/**
 * @description socket 消息分类，对应socket server subscribe
 * fetchCtrl 像服务端拉取 Message
 * postCtrl 发送更新 Message
 * message 发送通用消息
 */
export const SocketEmitNameEnum = {
  fetchCtrl: 'fetchCtrl',
  postCtrl: 'postCtrl',
  message: 'message',
} as const;

export type SocketEmitNameType = (typeof SocketEmitNameEnum)[keyof typeof SocketEmitNameEnum] | '';
