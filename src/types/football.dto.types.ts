import { FBGameBaseCache } from './football.live.types';
import { FBGamePlayer } from './football.team.types';
import { GAPlayerBase } from './team.types';

export type UpdateGameBaseCacheDto = Partial<Omit<FBGameBaseCache, 'gameid'>> & {
  gameid: string;
};

/** Player */
export type CreatedPlayerBase = Omit<GAPlayerBase, 'playerid'>;

export type UpdatedPlayerBaseDto = Partial<Omit<FBGamePlayer, 'playerid'>> & { playerid: string };
