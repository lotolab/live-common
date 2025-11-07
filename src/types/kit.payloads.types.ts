import { KitPositionType } from 'src/enums';
import { CommonRespMap } from './comm.types';
import {
  FBMatchTimingCache,
  FBPlayerRealtimeCache,
  FBTeamRealtimeCache,
} from './football.cache.types';
import { KitBasic, SendKitRealData } from './kit.comm.types';

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

/**
 * TeamLiveup
 */
export interface MatchPlayer {
  playerid: string;
  sortno: number;
  name: string;
  no: number;
  position?: string;
}

/**
 * 球队大名单
 * liveup 首发
 * sub
 */
export interface MatchTeamRoster {
  teamid: string;
  teamName: string;
  logo?: string;
  isHome?: boolean;
  headCoach: string;
  liveup: MatchPlayer[];
  sub: MatchPlayer[];
}

/**
 *
 */
export interface MatchLiveupData extends SendKitRealData {
  title: string;
  roundText: string;
  home: MatchTeamRoster;
  away: MatchTeamRoster;
  vsScores: string;
  ads: string[];
}

export interface MatchInternalStaticsData extends SendKitRealData {
  title: string;
  subtitle: string;
  homeLive: FBTeamRealtimeCache | null;
  awayLive: FBTeamRealtimeCache | null;
  ads: string[];
}

export interface CommonCenterMiddleCssMap {
  top: string;
  width: string;
  logoSize: number;
  titleSize: string;
  bgColor: string;
  strokeColor: string;
  strokeWidth: number;
  adsHeight: number;
  [k: string]: any;
}

export interface KitTopBaseCssMap {
  kitPosition: KitPositionType;
  top: number;
  left: number;
  right: number;
  [k: string]: any;
}

/**
 *
 */
export interface PenaltyShootoutMultiData {
  homeLive: FBTeamRealtimeCache | null;
  awayLive: FBPlayerRealtimeCache | null;
  homeEvents: ScoringEventData[];
  awayEvents: ScoringEventData[];
  round: number;
  [k: string]: any;
}

export interface PenaltyShootoutRoundData {
  isHome: boolean;
  scoringEvent: ScoringEventData;
}

/**
 * Left 动效
 */
export type LeftAnimationAdsCssMap = {
  kitPosition: KitPositionType;
  left: number;
  bottom: number;
  top: number;
  width: string;
  height: string;
  conentSize: number;
  fontSize: number;
  fontWeight: number;
};
