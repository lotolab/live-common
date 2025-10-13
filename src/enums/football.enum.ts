import { SelectionItem } from 'src/types';

export enum FBMatchStagedEnum {
  unstart = 0,
  firstHalf = 1,
  internal = 2,
  secondHalf = 3,
  extraTime = 4,
  shootout = 5,
  allowance = 8,
  gameover = 9,
}

export enum footballPlayOrderEnum {
  lineup = 0,
  substitute = 1,
  injury = 2,
  other = 9,
}

export type MatchStagedType = (typeof FBMatchStagedEnum)[keyof typeof FBMatchStagedEnum];

export const matchStagedOptions = [
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
    id: 5,
    label: '点球',
    value: FBMatchStagedEnum.shootout,
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
] as SelectionItem[];

/** football Match position */
export enum FootballPositionEnum {
  GoalKeeper = 'GK',
  CenterBack = 'CB',
  LeftBack = 'LB',
  RightBack = 'RB',
  Sweeper = 'SW',
  LeftWingBack = 'LWB',
  RightWingBack = 'RWB',
  CenterDefensiveMidfielder = 'CDM',
  CenterMidfielder = 'CM',
  LeftMidfielder = 'LM', // 左前卫[422]
  LeftCentralMidfielder = 'LCM', //左中前卫
  RightMidfielder = 'RM',
  RightCentralMidfielder = 'RCM',
  //
  AttackMidfield = 'AM', // 攻击型中场
  CenterAttackMidfield = 'CAM', // CAM 古典打法442 中场菱形站位
  OffenceMidfielder = 'OMF', //
  // 锋线
  LeftForward = 'LF',
  CenterForward = 'CF',
  RightForward = 'RF',
  LeftWing = 'LW', // 左边锋  [433]
  LeftStriker = 'LS', // 左中锋
  Striker = 'ST', // 中锋
  SecondStriker = 'SS', // 影子中锋
  RightWing = 'RW',
  RightStriker = 'RS',
}
export type FBPositionType = (typeof FootballPositionEnum)[keyof typeof FootballPositionEnum] &
  string;

export const fbPositionOptions = [
  {
    id: 'GoalKeeper',
    label: '门将',
    sort: 1,
    value: FootballPositionEnum.GoalKeeper,
  },
  // 后卫线
  {
    id: 'Sweeper',
    label: '清道夫[中后卫后面]',
    sort: 2,
    value: FootballPositionEnum.Sweeper,
  },

  {
    id: 'LeftWingBack',
    label: '左边后卫',
    sort: 3,
    value: FootballPositionEnum.LeftWingBack,
  },
  {
    id: 'RightWingBack',
    label: '右边后卫',
    sort: 4,
    value: FootballPositionEnum.RightWingBack,
  },
  {
    id: 'CenterBack',
    label: '中后卫',
    sort: 5,
    value: FootballPositionEnum.CenterBack,
  },
  {
    id: 'LeftBack',
    label: '左后卫',
    sort: 6,
    value: FootballPositionEnum.LeftBack,
  },
  {
    id: 'RightBack',
    label: '右后卫',
    sort: 7,
    value: FootballPositionEnum.RightBack,
  },
  // 腰线
  {
    id: 'CenterDefensiveMidfielder',
    label: '后腰[442菱形站位]',
    sort: 8,
    value: FootballPositionEnum.CenterDefensiveMidfielder,
  },
  {
    id: 'CenterMidfielder',
    label: '中场[433阵型]',
    sort: 9,
    value: FootballPositionEnum.CenterMidfielder,
  },
  {
    id: 'LeftMidfielder',
    label: '左前卫[433阵型]',
    sort: 10,
    value: FootballPositionEnum.LeftMidfielder,
  },
  {
    id: 'RightMidfielder',
    label: '右前卫[433阵型]',
    sort: 11,
    value: FootballPositionEnum.RightMidfielder,
  },
  {
    id: 'LeftCentralMidfielder',
    label: '左中卫[442菱形站位]', //
    sort: 12,
    value: FootballPositionEnum.LeftCentralMidfielder,
  },

  {
    id: 'RightCentralMidfielder',
    label: '右中卫[442菱形站位]',
    sort: 13,
    value: FootballPositionEnum.RightCentralMidfielder,
  },
  {
    id: 'AttackMidfield',
    label: '攻击型中场',
    sort: 14,
    value: FootballPositionEnum.AttackMidfield,
  },
  {
    id: 'CenterAttackMidfield',
    label: '前腰[442菱形站位]',
    sort: 15,
    value: FootballPositionEnum.CenterAttackMidfield,
  },
  // 锋线
  {
    id: 'LeftForward',
    label: '左前锋',
    sort: 16,
    value: FootballPositionEnum.LeftForward,
  },
  {
    id: 'CenterForward',
    label: '中锋',
    sort: 17,
    value: FootballPositionEnum.CenterMidfielder,
  },
  {
    id: 'RightForward',
    label: '右前锋',
    sort: 18,
    value: FootballPositionEnum.RightForward,
  },
  {
    id: 'LeftWing',
    label: '左边锋',
    sort: 19,
    value: FootballPositionEnum.LeftWing,
  },
  {
    id: 'LeftStriker',
    label: '左中锋',
    sort: 20,
    value: FootballPositionEnum.LeftStriker,
  },
  {
    id: 'Striker',
    label: '中锋',
    sort: 21,
    value: FootballPositionEnum.Striker,
  },
  {
    id: 'SecondStriker',
    label: '影锋',
    sort: 22,
    value: FootballPositionEnum.SecondStriker,
  },
  {
    id: 'RightWing',
    label: '右边锋',
    sort: 23,
    value: FootballPositionEnum.RightWing,
  },
  {
    id: 'RightStriker',
    label: '右中锋',
    sort: 24,
    value: FootballPositionEnum.RightStriker,
  },
];
