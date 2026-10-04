/**
 * Start of a training/event as a Date, used for the cancellation deadline
 * (trainingThreshold / eventThreshold in hours).
 *
 * `timeFrom` is stored as an ISO timestamp (e.g. "2026-10-04T18:30:00.000Z"),
 * not as "HH:mm" — reading its first two characters yields the year ("20").
 * The hours/minutes are taken from the parsed timestamp in local time;
 * if `timeFrom` is missing or unparsable, `date` is used as is.
 */
export function startDateTime(
  date: { toDate(): Date },
  timeFrom: string | undefined | null,
): Date {
  const start = date.toDate();
  const from = timeFrom ? new Date(timeFrom) : null;
  if (from && !isNaN(from.getTime())) {
    start.setHours(from.getHours(), from.getMinutes(), 0, 0);
  }
  return start;
}
