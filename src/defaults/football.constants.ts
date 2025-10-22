import { FBMatchStagedEnum, TeamStaffRoleEnum } from '../enums';
import {
  ActivedMatchIds,
  FBGameBase,
  FBGameRealtimeCache,
  FBMatchTimingCache,
  FBPlayerRealtimeCache,
  FBTeamRealtimeCache,
  GameLive,
  MatchWeather,
  PlayerBase,
  SubstitutionEvent,
  TeamBase,
  TeamStaff,
} from '../types';

export const emptyActivedMatchIds: ActivedMatchIds = {
  liveid: '',
  gameid: '',
  homeTeamid: '',
  awayTeamid: '',
};

export const emptyFBGameBase: FBGameBase = {
  gameid: '',
  type: 'football',
  title: '',
  short: '',
  rounds: 0,
  halfMinutes: 45,
  extraMinutes: 0,
  gameStage: '',
  officalSite: '',
  slogan: '',
  logo: '',
  logoid: '',
  sponsor: '',
  sponsorid: '',
  intro: '',
};
export const emptyMatchWeather: MatchWeather = {
  summary: '',
  temperature: '',
  humidity: '',
  windSpeed: '',
};

export const emptyGameLive: GameLive = {
  liveid: '',
  gameid: '',
  gameStage: '',
  matchStaged: FBMatchStagedEnum.unstart,
  matchdate: '',
  matchtime: '',
  matchorder: 1,
  round: 1,
  roundText: '',
  city: '',
  stadium: '',
  homeTeamid: '',
  homeTeamName: '',
  awayTeamid: '',
  awayTeamName: '',
  aiForecasting: '',
  intro: '',
};

export const emptyFBGameLiveRealtime: FBGameRealtimeCache = {
  ...emptyGameLive,
  referee: '',
  lineman: '',
  varAssistant: '',
  commentator: '',
  weather: {
    ...emptyMatchWeather,
  },
};

export const emptyMatchTiming: FBMatchTimingCache = {
  liveid: '',
  inprogress: false,
  stoped: true,
  matchStaged: FBMatchStagedEnum.unstart,
  isCumulatived: true,
  matchStartTime: '',
  consumedTime: 0,
  stageStarting: 0,
  injuryTime: 0,
  injuryEndMills: 0,
  changedTS: 0,
};

/** Team */
export const emptyTeamBase: TeamBase = {
  teamid: '',
  gameid: '',
  name: '',
  enname: '',
  short: '',
  city: '',
  stadium: '',
  slaveStadium: '',
  manager: '',
  establishment: '',
  logo: '',
  logoid: '',
  officalSite: '',
  sponsor: '',
  intro: '',
};

export const emptyTeamRealtime: FBTeamRealtimeCache = {
  ...emptyTeamBase,
  liveid: '',
  isHome: false,
  headCoach: '',
  trainer: '',
  coach: '',
  guide: '',
  leader: '',
  goals: 0,
  yellowCards: 0,
  redCards: 0,
  fouls: 0,
  liveupNos: [],
  substituteNos: [],
  substitutions: [],
  lastSubstitutions: [],
  logo: '',
  matchResult: '-',
  summary: '',
};

/** Player */
export const emptyPlayerBase: PlayerBase = {
  playerid: '',
  teamid: '',
  name: '',
  short: '',
  enname: '',
  no: 0,
  shirtName: '',
  height: '',
  weight: '',
  birthday: '',
  age: 0,
  avatar: '',
  avatarid: '',
  gender: '',
  position: '',
  playOrder: 9,
  isXI: false,
  tags: '',
  keyPlayer: false,
  isLeader: false,
  intro: '',
};

export const emptyPlayerRealtime: FBPlayerRealtimeCache = {
  ...emptyPlayerBase,
  liveid: '',
  isXI: false,
  comeonTime: -1,
  takeoffTime: -1,
  playingTime: 0,
  goals: 0,
  yellowCards: 0,
  redCards: 0,
  fouls: 0,
};

/** others */
export const emptySubstitution: SubstitutionEvent = {
  batchid: '',
  time: '',
  timetext: '',
  downNo: '',
  downPlayer: '',
  upNo: '',
  upPlayer: '',
};

export const emptyTeamStaff: TeamStaff = {
  staffid: '',
  teamid: '',
  name: '',
  enname: '',
  short: '',
  gender: 'male',
  age: 0,
  officiatingYears: '',
  role: '',
  roleText: '',
  avatar: '',
  avatarid: '',
  intro: '',
};
