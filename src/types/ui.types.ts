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

export interface WidgetSetting {
  name: string | ToolkitNameEnum;
  type: PositionType;
  show?: boolean;
  visiable?: boolean;
  position?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  style?: {
    width?: string | number;
    maxWidth?: string;
    height?: string | number;
    [k: string]: any;
  };
}
