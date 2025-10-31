export type SelectionItem = {
  id?: string | number;
  label: string;
  value: string | number;
  extra?: any;
  [k: string]: any;
};

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
