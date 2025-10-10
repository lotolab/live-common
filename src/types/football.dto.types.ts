import { FBGameBase } from './football.comm.types';
import { GameBase, GameLive } from './game.types';
import { PlayerBase } from './team.types';

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

/* ========================== Cache Dto start ============================== */
