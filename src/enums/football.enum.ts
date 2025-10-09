export enum gameFBProcessEnum {
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
  LeftMidfielder = 'LM',
  LeftMiddleField = 'LMF',
  RightMidfielder = 'RM',
  RightMiddleField = 'RMF',
  AttackMidfield = 'AM', // CAM 古典打法442 中场菱形站位
  OffenceMidfielder = 'OMF', //
  // 锋线
  LeftForward = 'LF',
  CenterForward = 'CF',
  RightForward = 'RF',
  LeftWing = 'LW', // 左边锋
  LeftStriker = 'LS', // 左中锋
  Striker = 'ST', // 中锋
  SecondStriker = 'SS', // 影子中锋
  RightWing = 'RW',
  RightStriker = 'RS',
}
