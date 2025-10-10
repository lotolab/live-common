import { FBMatchStagedEnum } from '../enums';
import { SelectionItem } from '../types';

/**
 * @description selections
 * 足球比赛现场进程阶段
 */
export const fbMatchStagedOptions: SelectionItem[] = [
  {
    id: 0,
    label: '未开始',
    value: FBMatchStagedEnum.unstart,
  },
  {
    id: 1,
    label: '上半场',
    value: FBMatchStagedEnum.firstHalf,
  },
  {
    id: 2,
    label: '中场休息',
    value: FBMatchStagedEnum.internal,
  },
  {
    id: 3,
    label: '下半场',
    value: FBMatchStagedEnum.secondHalf,
  },
  {
    id: 4,
    label: '加时赛',
    value: FBMatchStagedEnum.extraTime,
  },
  {
    id: 8,
    label: '补时',
    value: FBMatchStagedEnum.allowance,
  },
  {
    id: 9,
    label: '完赛',
    value: FBMatchStagedEnum.gameover,
  },
];


export function translateFBMatchStagedName(v: number): string {
  const find = fbMatchStagedOptions.find((it) => it.value === v);
  return find?.label ?? '';
}
