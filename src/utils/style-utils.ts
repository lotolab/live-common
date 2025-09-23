import { ToolkitSetting, WidgetSetting } from 'src/types';

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

/**
 *
 * @param some
 * @param origin
 * @returns ToolkitSetting
 */
export function mergeToolkitSetting(
  some: Partial<ToolkitSetting>,
  origin: ToolkitSetting,
): ToolkitSetting {
  const { name, type, animation = {}, children = {}, cssProperties = {}, ...others } = some;

  return {
    ...origin,
    name: origin.name || name,
    type: origin.type || type,
    animation: {
      ...origin.animation,
      ...animation,
    },
    children: {
      ...origin.children,
      ...children,
    },
    cssProperties: {
      ...origin.cssProperties,
      ...cssProperties,
    },
    ...others,
  } as ToolkitSetting;
}

export function updateToolkitWidget(
  widget: Partial<WidgetSetting> & { name: string },
  toolkit: ToolkitSetting,
): ToolkitSetting {
  const { name, value, ...others } = widget;

  if (!toolkit.children) {
    toolkit.children[name] = widget;

    return toolkit;
  }

  let val: any;
  if (toolkit.children[name]?.value) {
    if (typeof toolkit.children[name].value === 'object') {
      val = {
        ...toolkit.children[name].value,
      };
    } else {
      val = toolkit.children[name].value;
    }
  }

  if (typeof value === 'object' && typeof val === 'object') {
    val = {
      ...val,
      ...value,
    };
  } else if (typeof val !== 'object' && typeof value !== 'object') {
    val = value;
  }

  toolkit.children = {
    ...toolkit.children,
    [name]: {
      ...toolkit.children[name],
      name,
      value: val || undefined,
      ...others,
    },
  };

  return toolkit;
}
