/**
 *
 * @param a any required sortno
 * @param b any required sortno
 * @param ascending
 * @returns -1,0,1
 */
export function sortable(a: any, b: any, ascending: boolean = true) {
  if (a.sortno === undefined && b.sortno) {
    return ascending ? -1 : 1;
  }
  if (a.sortno && b.sortno === undefined) {
    return ascending ? 1 : -1;
  }

  const ano = a.sortno || 0;
  const bno = b.sortno || 0;

  if (ano === bno) return 0;

  return ascending ? ano - bno : bno - ano;
}
