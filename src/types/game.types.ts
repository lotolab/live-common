export type GameType = 'football' | 'pingpong' | string;

/**
 *  @gameid from config yaml
 */
export interface GameBase {
  gameid: string;
  title: string;
  subtitle?: string;
  intro?: string;
  rounds?: string;
}
