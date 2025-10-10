/**
 * dateRegex: 校验 yyyy-MM-dd
 */
export const LiveValidator = {
  DateRegex: /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/,
  HourMinRegex: /^(?:[01]\d|2[0-3]):[0-5]\d?$/,
  validDateYMD: (date: string) => LiveValidator.DateRegex.test(date),
  validTimeHM: (time: string) => LiveValidator.HourMinRegex.test(time),
};
