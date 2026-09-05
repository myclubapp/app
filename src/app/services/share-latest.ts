import { MonoTypeOperatorFunction, ReplaySubject, share, timer } from "rxjs";

/**
 * Grace period during which a Firestore listener stays open after its last
 * subscriber has left. Long enough to bridge the synchronous tear-down and
 * re-subscription of `switchMap`/`combineLatest` chains (which would otherwise
 * re-read the whole result set), short enough that abandoned streams are
 * actually released.
 */
export const SHARE_LATEST_GRACE_MS = 5000;

/**
 * Multicasts a Firestore stream to all subscribers and replays the latest
 * value, like `shareReplay({ bufferSize: 1, refCount: true })`, with one
 * addition: the underlying listener is released `graceMs` after the last
 * subscriber unsubscribes instead of immediately.
 *
 * Why not `shareReplay(1)`: without `refCount` the source subscription — and
 * therefore the Firestore snapshot listener — is never released. Every listener
 * created in a service lived until the app was killed, kept billing for each
 * document change, and was re-established (and re-read) on every reconnect.
 *
 * Why the grace period: the list pages tear down and immediately re-create
 * their inner listeners whenever an outer query emits. With a plain
 * `refCount: true` each of those cycles would remove and re-add the listener
 * on the server, which Firestore bills as a fresh read of every document.
 * Keeping the listener open for a few seconds lets the re-subscription reuse
 * it (the SDK deduplicates identical active listeners) at no cost.
 */
export function shareLatest<T>(
  graceMs: number = SHARE_LATEST_GRACE_MS,
): MonoTypeOperatorFunction<T> {
  return share<T>({
    connector: () => new ReplaySubject<T>(1),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: () => timer(graceMs),
  });
}
