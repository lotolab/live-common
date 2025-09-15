export interface AnimationBase {
  id?: string;
  selector?: string; // class selector[.abc-ok] or id [#id]
  durations?: number;
  [k: string]: any;
}
