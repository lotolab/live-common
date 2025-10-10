import { ToolkitNameEnum } from '../enums';

export type SelectionItem = {
  id?: string | number;
  label: string;
  value: string | number;
  extra?: any;
  [k: string]: any;
};

/**
 * PTL Position Top Left
 * PMC Position Middle Center
 * BMSG Barrage Message 底部到第二行剧中
 * PBR Position Bootom
 *
 */
export type PositionType =
  | 'NONA'
  | 'PTL'
  | 'PTC'
  | 'PMC'
  | 'PTR'
  | 'PML'
  | 'PMR'
  | 'PBL'
  | 'PBC'
  | 'PBR'
  | 'BMSG';

/**
 * Toolkit properties
 */
export interface UICSSProperties {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  color?: string;
  [k: string]: any;
}

export interface UIAnimations {
  enabled?: boolean;
  delay?: number;
  [k: string]: any;
}

export interface WidgetSetting<V = any> {
  name?: string;
  show?: boolean;
  value?: V;
  animation?: UIAnimations;
  cssProperties?: UICSSProperties;
  [k: string]: any;
}
/**
 * @property children Toolkit container widgets element
 */
export interface ToolkitSetting {
  liveid?: string;
  name: string | ToolkitNameEnum;
  type: PositionType;
  show: boolean;
  animation?: UIAnimations;
  editable?: boolean;
  children?: Record<string, WidgetSetting>;
  cssProperties?: UICSSProperties;
  [k: string]: any;
}

export type SomeToolkitSetting = Partial<Omit<ToolkitSetting, 'name' | 'type'>>;
