/**
 * 团队信息
 */
export interface TeamBase {
  teamid: string;
  name: string;
  shortName?: string;
  establishment?: string; //成立日期
  city?: string;
  logo?: string;
  intro?: string;
  officalSite?: string;
}
