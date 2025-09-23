export const CommonAttributes: string[] = [
  'width',
  'height',
  'left',
  'right',
  'top',
  'bottom',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'padding',
  'margin',
  'paddingLeft',
  'paddingRight',
  'paddingBottom',
  'paddingTop',
  'marginLeft',
  'marginRight',
  'marginBottom',
  'marginTop',
];

export type CleanedRecursivePixelObject<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K] extends number
    ? string
    : T[K] extends object
      ? CleanedRecursivePixelObject<T[K]>
      : T[K];
};

/**
 *
 * @param obj
 * @param removeUndefined 是否移除 null 和 undefined
 * @param translateKeys 设置指定key
 * @returns Object
 */
export function deepConvertPixel<T extends Record<string, any>>(
  obj: T,
  removeUndefined: boolean = true,
  translateKeys: string[] = CommonAttributes,
): CleanedRecursivePixelObject<T> {
  const result: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let value = obj[key];

      if (removeUndefined && (value === null || value === undefined)) {
        continue;
      }

      if (
        translateKeys.some((k) => k === key) &&
        (typeof value === 'number' ||
          (typeof value === 'string' && /^[\d]+(\.[\d]+)?$/.test(value)))
      ) {
        result[key] = parseInt(`${value}`) + 'px';
      } else if (value && typeof value === 'object') {
        const nested = deepConvertPixel(value, removeUndefined, translateKeys);

        if (Object.keys(nested).length || Array.isArray(nested)) {
          result[key] = nested;
        }
      } else {
        result[key] = value;
      }
    }
  }

  return result as CleanedRecursivePixelObject<T>;
}
