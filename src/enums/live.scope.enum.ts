export const LiveMessageScopeMap = {
  matchRealtime: 'matchRealtime', // FBGameRealtime
  matchTiming: 'mactchTiming',
  teamRealtime: 'teamRealtime',
  playerRealtime: 'playerRealtime',
} as const;

export type LiveMessageScopeType = (typeof LiveMessageScopeMap)[keyof typeof LiveMessageScopeMap];
