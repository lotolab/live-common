/** 足球插件 */
/**
 * @deprecated
 */
export interface TookitBase {
  id: string;
  name: string;
  code: string;
  gameid?: string;
  intro?: string;
}

/**
 * @deprecated
 */
export interface FBToolkitBaseCache extends TookitBase {
  [k: string]: any;
}
