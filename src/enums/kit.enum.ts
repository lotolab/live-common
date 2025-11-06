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
  LeftTopLivePlatform: 'LeftTopLivePlatform',
  LeftBottomKickoffBar: 'LeftBottomKickoffBar',
  CenterMiddleLiveup: 'CenterMiddleLiveup',
  CenterMiddleBigScores: 'CenterMiddleBigScores',
  RightTopTimingScores: 'RightTopTimingScores',
  RightTopShootScores: 'RightTopShootScores',
  RightBottomSponsorAds: 'RightBottomSponsorAds',
} as const;

export type KitNameType = (typeof KitNameEnum)[keyof typeof KitNameEnum] | string;
