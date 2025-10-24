import { DateTime } from 'luxon';

export function formatDate(date: Date | string) {
  const dt = typeof date === 'string' ? DateTime.fromISO(date) : DateTime.fromJSDate(date);
  return dt.setLocale('en').toLocaleString(DateTime.DATE_MED);
}
