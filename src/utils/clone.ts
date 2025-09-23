/**
 * 可处理 object ,date ,map,set,等等
 * @param source any
 * @param visited
 * @returns
 */
export function deepClone<T = any>(source: T, visited = new WeakMap<object, any>()): T {
  if (source === null || typeof source !== 'object') {
    return source;
  }

  // 处理循环引用
  if (visited.has(source)) {
    return visited.get(source);
  }

  // 处理正则表达式
  if (source instanceof Date) {
    return new Date(source.getTime()) as T;
  }

  if (source instanceof RegExp) {
    return new RegExp(source.source, source.flags) as T;
  }

  // 处理 Map
  if (source instanceof Map) {
    const clone = new Map();

    visited.set(source, clone);
    source.forEach((v, k) => {
      clone.set(deepClone(k, visited), deepClone(v, visited));
    });

    return clone as T;
  }

  // 处理数组
  if (Array.isArray(source)) {
    const clone: any[] = [];
    visited.set(source, clone);

    source.forEach((item, index) => {
      clone[index] = deepClone(item, visited);
    });

    return clone as T;
  }

  // 处理普通对象
  if (source instanceof Object) {
    const clone = Object.create(Object.getPrototypeOf(source));

    visited.set(source, clone);
    const allKeys = Reflect.ownKeys(source) as (string | symbol)[];
    allKeys.forEach((key) => {
      clone[key] = deepClone(source[key], visited);
    });

    return clone;
  }

  // 其他未处理的类型直接返回
  return source;
}
