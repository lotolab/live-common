/**
 * @description 直播默认场次设定
 *  cache key fb:auth:${liveid}
 * @property liveid 当前要转播的场次id
 *  由前端Query传递liveid,未传递则使用服务端默认配置liveid
 * @property token 权限token
 */
export interface AuthCache {
  gameid: string;
  liveid: string;
  token: string;
  expires: string; //seconds
  largeScrennUrl: string;
  liveurl: string;
  adminurl: string;
  userIds: string[];
}
