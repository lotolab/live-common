import { FBMatchTimingCache, FBTeamRealtimeCache } from './football.cache.types';
import { KitBasic } from './kit.comm.types';

/**
 * LeftTop Kits
 *
 */
export interface LeftTopLivePlatformDataType {
  logos: string[];
}
export interface LeftTopLivePlatformCssMap {
  top: number;
  left: number;
  logoSize: number;
  space: number;
  [k: string]: any;
}

export type LeftTopLivePlatformMessage = KitBasic<
  LeftTopLivePlatformDataType,
  LeftTopLivePlatformCssMap
>;

/**
 * Left Bottom
 */
export type LeftBottomKickoffData = {
  upTitle: string;
  downTitle: string;
};
export interface LeftBottomKickoffCssMap {
  left: number;
  bottom: number;
  bgWidth: string;
  height: number;
  up: {
    color: string;
    fontSize: number;
  };
  down: {
    color: string;
    fontSize: number;
  };
}

export type LeftBottomKickoffMessage = KitBasic<LeftBottomKickoffData, LeftBottomKickoffCssMap>;

/**
 * RightTopTimingScroes
 */
export interface RightTopTimingScoresCssMap {
  top: number;
  right: number;
  height: number;
  width?: string;
  fontSize: number;
  timing: {
    width: number;
    fontSize: number;
    color: string;
  };
  home: {
    fontColor: string;
    teamColor: string;
  };
  away: {
    fontColor: string;
    teamColor: string;
  };
}

export interface RightTopTimingScoresData {
  matchTiming?: FBMatchTimingCache;
  homeTeamLive?: FBTeamRealtimeCache;
  awayTeamLive?: FBTeamRealtimeCache;
}

export type RightTopTimingScoresMessage = KitBasic<
  RightTopTimingScoresData,
  RightTopTimingScoresCssMap
>;

/**
 * Right bottom kits
 * bgColor transparent
 */
export interface RightBottomSponsorAdsCssMap {
  right: number;
  bottom: number;
  height: number;
  width: number;
  bgColor: string | 'transparent';
  opacity: number;
}

export type RightBottomAdsMessage = KitBasic<any, RightBottomSponsorAdsCssMap>;
