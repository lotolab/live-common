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

/**
 * liveid
 * inprogress 比赛进行中
 * gameProgress 比赛进程
 * gameStartTime 比赛日期格式 yyyy-MM-dd HH:mm
 * isCumulatived 是否累计阶段时间
 * consumedTime 已消耗时间 sconds
 * stageStarting 时间毫秒值
 */
export interface GameTiming {
  liveid: string;
  inprogress?: boolean;
  gameProgress: number;
  isCumulatived?: boolean;
  gameStartTime: string;
  consumedTime: number;
  stageStarting: number;
}
