export const KitPositionEnum = {
  leftTopPosition: 'LTP',
  rightTopPosition: 'RTP',
  leftBottomPosition: 'LBP',
  rightBottomPosition: 'RBP',
  CenterBottomPosition: 'CBP',
  MiddleCenterPosition: 'MCP',
  CenterTopPosition: 'CTP',
} as const;

export type KitPositionType = (typeof KitPositionEnum)[keyof typeof KitPositionEnum] | string;

export const KitNameEnum = {
  CentralLiveup: 'CentralLiveup',
  CentralInteralScores: 'CentralInteralScores',

  LeftAnimationAds: 'LeftAnimationAds',
  LeftTopLivePlatform: 'LeftTopLivePlatform',
  LeftBottomKickoffBar: 'LeftBottomKickoffBar',

  //

  RightTopTimingScores: 'RightTopTimingScores',
  RightBottomSponsorAds: 'RightBottomSponsorAds',

  TopShootoutScores: 'TopShootoutScores',
} as const;

export type KitNameType = (typeof KitNameEnum)[keyof typeof KitNameEnum] | string;
