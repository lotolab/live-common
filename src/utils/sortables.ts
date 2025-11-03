import { PlayerBase, ScoringEventData } from '../types';

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

  const { isXI: aIsXI = false } = a;
  const { isXI: bIsXi = false } = b;
  if (aIsXI !== bIsXi) {
    return aIsXI ? -1 : 1;
  }

  return a.no - b.no;
}

export function playerNoSortable<P extends PlayerBase = PlayerBase>(a: P, b: P) {
  return a.no - b.no;
}

/**
 *
 * @param a
 * @param b
 */
export function scoringEventSortable<E extends ScoringEventData = ScoringEventData>(a: E, b: E) {
  if (a.type !== b.type) return a.type.localeCompare(b.type);
  return a.evid - b.evid;
}
