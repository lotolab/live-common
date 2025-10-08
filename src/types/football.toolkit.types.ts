/** 足球插件 */
export interface TookitBase {
  id: string;
  name: string;
  code: string;
  gameid?: string;
  intro?: string;
}

/**
 *
 */
export interface FBToolkitBaseCache extends TookitBase {
  [k: string]: any;
}
