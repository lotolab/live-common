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

/**
 *
 * @param seconds
 * @returns
 */
export function secondToText(seconds: number = 0) {
  if (seconds <= 0) return '00:00';
  const min = Math.floor(seconds / 60);
  const sec = seconds - min * 60;

  let text: string = min < 10 ? `0${min}` : `${min}`;
  text = text + ':' + (sec < 10 ? `0${sec}` : `${sec}`);
  return text;
}

/**
 * 计算当前与
 * @param stageStarting
 * @returns
 */
export function diffNowSeconds(stageStarting: number = 0) {
  const diff = Date.now() - stageStarting;
  if (diff === 0) return diff;

  return Math.round(diff / 1000);
}

/**
 *
 * @param costTimeText mm:ss
 * @returns number
 */
export function calcTimingStartTime(costTimeText: string = '00:00') {
  const [minText, secText] = costTimeText.split(':');
  const min = parseInt(minText || '0', 10);
  const sec = parseInt(secText || '0', 10);
  const costSeconds = min * 60 + sec;
  const start = Date.now() - costSeconds * 1000;
  return start;
}

/**
 *
 * @param gameStartTime yyyy-MM-dd HH:mm
 * @param consumedTime seconds
 * @returns {stageStarting:number,timeText:string}
 */
export function recheckTime(gameStartTime: string, consumedTime: number = 0) {
  const startTime = new Date(gameStartTime).setSeconds(0, 0);
  const now = Date.now();
  if (startTime > now) {
    return {
      stageStarting: now,
      timeText: '00:00',
    };
  }

  const diff = Math.round((now - startTime) / 1000);

  return {
    stageStarting: startTime,
    timeText: secondToText(diff + consumedTime),
  };
}
