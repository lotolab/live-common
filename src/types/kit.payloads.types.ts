import { CommonRespMap } from './comm.types';
import {
  FBMatchTimingCache,
  FBPlayerRealtimeCache,
  FBTeamRealtimeCache,
} from './football.cache.types';
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

/**
 * 计分事件数据
 */
export type ScoringType = 'Goals' | 'KickGoals' | 'RedCard' | 'YellowCard' | 'Shootout';

/**
 * cache 4 hours
 */
export interface ScoringEventData {
  evid: number;
  eventName: string;
  liveid: string;
  teamid: string;
  playerid?: string;
  type: ScoringType;
  value: number;
  stagedTime: string;
  playerName: string;
  playerPosition?: string;
  playerNo?: number;
  time: number;
  shootStatus: number;
  sendImmediate?: boolean;
  [k: string]: any;
}

export interface PutScoringEventResp extends CommonRespMap {
  teamReal: FBTeamRealtimeCache;
  playerReal?: FBPlayerRealtimeCache;
  scoringEventList?: ScoringEventData[];
}
