import { ORMCommBase } from './comm.types';

export interface KitCssMap extends Record<string, any> {
  root?: Record<string, any>;
  animations?: Record<string, any>;
  [k: string]: any;
}

/**
 *
 */
export type KitBasic<D extends Record<string, any> = any, S extends KitCssMap = KitCssMap> = {
  liveid: string;
  name: string;
  show: boolean;
  data: D;
  cssMap: S;
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
