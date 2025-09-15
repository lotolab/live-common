import { describe } from 'node:test';
import { sortable } from './common-utils';

describe('Common-Utils Unit Test', () => {
  const originObjArr = [
    { a: 'name3', sortno: 9 },
    { a: 'name4', sortno: 1 },
  ];

  const orderFirst = originObjArr[1];

  it(`Afteer sorted first element should a is name4 `, () => {
    const orderArr = originObjArr.sort(sortable);

    expect(orderArr[0].a).toBe(orderFirst.a);
  });
});
