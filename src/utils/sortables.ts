import { PlayerBase } from '../types';

/**
 * 球员排序
 *  先按球队teamid
 *  再按是否首发或 playOrder
 *  最后按 no升序
 * @param a
 * @param b
 * @returns
 */
export function playerSortable<P extends PlayerBase = PlayerBase>(a: P, b: P) {
  const teamCompared = (a.teamid ?? '').localeCompare(b.teamid ?? '');
  if (teamCompared !== 0) return teamCompared;
  if (a.isXI !== undefined || b.isXI !== undefined) {
    const aXI = !!a.isXI,
      bXI = !!b.isXI;
    if (aXI !== bXI) return aXI ? 1 : -1; // True 在前
  } else {
    if (a.playOrder !== b.playOrder) return a.playOrder - b.playOrder;
  }
  return a.no.localeCompare(b.no);
}
