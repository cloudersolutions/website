import { DateTime } from 'luxon';

export function formatDate(date: Date) {
  return DateTime.fromJSDate(date).setLocale('en').toLocaleString(DateTime.DATE_MED);
}
