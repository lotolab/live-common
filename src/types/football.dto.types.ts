import { FBPlayerRealtimeCache, FBTeamRealtimeCache } from './football.cache.types';
import { FBGameBase } from './football.comm.types';
import { GameLive } from './game.types';
import { TeamStaff } from './person.types';
import { PlayerBase, TeamBase } from './team.types';

/* ========================== Models Dto start ============================== */
/**
 * @description 创建赛事信息 DTO
 *
 */
export type CreatedGameBaseDto = Omit<
  FBGameBase,
  'gameid' | 'createdAt' | 'updatedAt' | 'isDelete'
>;

export type UpdatedGameBaseDto = Partial<Omit<CreatedGameBaseDto, 'type'>> & { gameid: string };

export type CreatedGameLiveDto = Omit<GameLive, 'liveid' | 'createdAt' | 'updatedAt' | 'isDelete'>;

export type UpdatedGameLiveDto = Partial<Omit<CreatedGameLiveDto, 'gameid'>> & { liveid: string };

// player
export type CreatedPlayerBaseDto = Omit<
  PlayerBase,
  'playerid' | 'createdAt' | 'updatedAt' | 'isDelete'
>;
export type UpdatedPlayerBaseDto = Partial<CreatedPlayerBaseDto> & { playerid: string };

// team
export type CreatedTeamBaseDto = Omit<TeamBase, 'teamid' | 'createdAt' | 'updatedAt' | 'isDelete'>;

export type UpdatedSomeTeamBaseDto = Partial<CreatedTeamBaseDto> & { teamid: string };

//staff

export type UpsertTeamStaffDto = Partial<
  Omit<TeamStaff, 'staffid' | 'name' | 'teamid' | 'createdAt' | 'updatedAt' | 'isDelete'>
> & {
  staffid?: string;
  teamid: string;
  name: string;
};

/* ========================== Cache Dto start ============================== */

export type UpdatedTeamRealtime = Partial<Omit<FBTeamRealtimeCache, 'liveid' | 'teamid'>> & {
  liveid: string;
  teamid: string;
};

export type UpdatedPlayerRealtime = Partial<
  Omit<FBPlayerRealtimeCache, 'teamid' | 'playerid' | 'liveid'>
> & { playerid: string; teamid: string; liveid: string };
