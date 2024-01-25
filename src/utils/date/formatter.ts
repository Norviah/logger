import { days, months } from './constants';

/**
 * Returns the year of the date as a four-digit number.
 *
 * @param date The date to be formatted.
 * @returns The full year of the date.
 */
export const YYYY = (date: Date): string => {
  return String(date.getFullYear()).slice(-4);
};

/**
 * Returns the year of the date as a two-digit number.
 *
 * @param date The date to be formatted.
 * @returns The last two digits of the year.
 */
export const YY = (date: Date): string => {
  return String(date.getFullYear()).slice(-2);
};

/**
 * Returns the year of the date.
 *
 * @param date The date to be formatted.
 * @returns The year of the date.
 */
export const Y = (date: Date): string => {
  return String(date.getFullYear());
};

/**
 * Returns the full month name of the date.
 *
 * @param date The date to be formatted.
 * @returns The full month name of the date.
 */
export const MMMM = (date: Date): string => {
  return months[date.getMonth()].full;
};

/**
 * Returns the abbreviated month name of the date.
 *
 * @param date The date to be formatted.
 * @returns The abbreviated month name of the date.
 */
export const MMM = (date: Date): string => {
  return months[date.getMonth()].abbreviated;
};

/**
 * Returns the month of the date with zero-padding.
 *
 * @param date The date to be formatted.
 * @returns The month of the date with zero-padding.
 */
export const MM = (date: Date): string => {
  return String(date.getMonth() + 1).padStart(2, '0');
};

/**
 * Returns the month of the date.
 *
 * @param date The date to be formatted.
 * @returns The month of the date.
 */
export const M = (date: Date): string => {
  return String(date.getMonth() + 1);
};

/**
 * Returns the day of the date with zero-padding.
 *
 * @param date The date to be formatted.
 * @returns The day of the month with zero-padding.
 */
export const DD = (date: Date): string => {
  return String(date.getDate()).padStart(2, '0');
};

/**
 * Returns the day of the month.
 *
 * @param date The date to be formatted.
 * @returns The day of the month.
 */
export const D = (date: Date): string => {
  return String(date.getDate());
};

/**
 * Returns the hour of the date with zero-padding.
 *
 * @param date The date to be formatted.
 * @returns The hour of the date as a two-digit number.
 */
export const HH = (date: Date): string => {
  return String(date.getHours()).padStart(2, '0');
};

/**
 * Returns the hour of the date.
 *
 * @param date The date to be formatted.
 * @returns The hour of the date.
 */
export const H = (date: Date): string => {
  return String(date.getHours());
};

/**
 * Returns the meridiem indicator of the date.
 *
 * @param date The date to be formatted.
 * @returns The meridiem indicator of the date.
 */
export const A = (date: Date): string => {
  return date.getHours() > 11 ? 'PM' : 'AM';
};

/**
 * Returns the 12-hour clock hour of the date with zero-padding.
 *
 * @param date The date to be formatted.
 * @returns The 12-hour clock hour of the date with zero-padding.
 */
export const hh = (date: Date): string => {
  return String(date.getHours() % 12 || 12).padStart(2, '0');
};

/**
 * Returns the 12-hour clock hour of the date.
 *
 * @param date The date to be formatted.
 * @returns The 12-hour clock hour of the date.
 */
export const h = (date: Date): string => {
  return String(date.getHours() % 12 || 12);
};

/**
 * Returns the minute of the date with zero-padding.
 *
 * @param date The date to be formatted.
 * @returns The minute of the date with zero-padding.
 */
export const mm = (date: Date): string => {
  return String(date.getMinutes()).padStart(2, '0');
};

/**
 * Returns the minute of the date.
 *
 * @param date The date to be formatted.
 * @returns The minute of the date.
 */
export const m = (date: Date): string => {
  return String(date.getMinutes());
};

/**
 * Returns the second of the date with zero-padding.
 *
 * @param date The date to be formatted.
 * @returns The second of the date with zero-padding.
 */
export const ss = (date: Date): string => {
  return String(date.getSeconds()).padStart(2, '0');
};

/**
 * Returns the second of the date.
 *
 * @param date The date to be formatted.
 * @returns The second of the date.
 */
export const s = (date: Date): string => {
  return String(date.getSeconds());
};

/**
 * Returns the millisecond of the date with high precision.
 *
 * @param date The date to be formatted.
 * @returns The millisecond of the date with high precision.
 */
export const SSS = (date: Date): string => {
  return String(date.getMilliseconds()).padStart(3, '0');
};

/**
 * Returns the millisecond of the date with middle precision.
 *
 * @param date The date to be formatted.
 * @returns The millisecond of the date with middle precision.
 */
export const SS = (date: Date): string => {
  return String((date.getMilliseconds() / 10) | 0).padStart(2, '0');
};

/**
 * Returns the millisecond of the date with low precision.
 *
 * @param date The date to be formatted.
 * @returns The millisecond of the date with low precision.
 */
export const S = (date: Date): string => {
  return String((date.getMilliseconds() / 100) | 0);
};

/**
 * Returns the day of the week.
 *
 * @param date The date to be formatted.
 * @returns The day of the week.
 */
export const dddd = (date: Date): string => {
  return days[date.getDay()].full;
};

/**
 * Returns the day of the week as an abbreviation.
 *
 * @param date The date to be formatted.
 * @returns The abbreviated day of the week.
 */
export const ddd = (date: Date): string => {
  return days[date.getDay()].abbreviated;
};

/**
 * Returns the day of the week as a short abbreviation.
 *
 * @param date The date to be formatted.
 * @returns The short abbreviated day of the week.
 */
export const dd = (date: Date): string => {
  return days[date.getDay()].short;
};

/**
 * Returns the timezone offset of the date.
 *
 * @param date The date to be formatted.
 * @returns The timezone offset of the date.
 */
export const Z = (date: Date): string => {
  const offset = (date.getTimezoneOffset() / 0.6) | 0;
  return (offset > 0 ? '-' : '+') + ('000' + Math.abs(offset - (((offset % 100) * 0.4) | 0))).slice(-4);
};

/**
 * Returns the timezone offset of the date with a colon.
 *
 * @param date The date to be formatted.
 * @returns The timezone offset of the date with a colon.
 */
export const ZZ = (date: Date): string => {
  const offset = date.getTimezoneOffset();
  const mod = Math.abs(offset);
  return (offset > 0 ? '-' : '+') + ('0' + ((mod / 60) | 0)).slice(-2) + ':' + ('0' + (mod % 60)).slice(-2);
};
