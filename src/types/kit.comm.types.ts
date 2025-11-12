import { ORMCommBase } from './comm.types';

export interface KitCssMap extends Record<string, any> {
  root?: Record<string, any>;
  animations?: Record<string, any>;
  [k: string]: any;
}

/**
 * KitBasic Data Payload
 * realtime cache or admin ui set cache
 */
export interface SendKitRealData {
  liveid: string;
  // gameid: string;
  [key: string]: any;
}

/**
 * uuid time to 36
 * @property data save kit widget data
 * @property payload is Message pass_proxy match data,like match scores
 */
export type KitBasic<D extends Record<string, any> = any, S extends KitCssMap = KitCssMap> = {
  uuid?: string;
  gameid: string;
  liveid: string;
  name: string;
  show: boolean;
  data: D | null;
  matchPayload?: SendKitRealData;
  cssMap: S;
  bgimg?: string;
  exampleImg?: string;
  [k: string]: any;
};

export type KitBasicSome<D extends Record<string, any> = any, S extends KitCssMap = KitCssMap> = {
  uuid?: string;
  gameid: string;
  liveid: string;
  name: string;
  show: boolean;
  data?: D;
  matchPayload?: SendKitRealData;
  cssMap?: S;
  bgimg?: string;
  exampleImg?: string;
  [k: string]: any;
};

export interface ToolKitBase<
  D extends Record<string, any> = any,
  C extends Record<string, any> = any,
> extends ORMCommBase {
  id: string;
  name: string;
  gameid: string;
  liveid: string;
  show: boolean;
  position?: string;
  bgimg?: string;
  bgimgid?: string;
  exampleImg?: string;
  exampleImgid?: string;
  data?: D;
  cssMap?: C;
  intro?: string;
}

export type UpsertToolKitDto = Omit<ToolKitBase, 'id'>;

export type KitRepeatMessageForm = {
  uuid: string;
  ts: number;
};
