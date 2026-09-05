import { fakeAsync, tick } from "@angular/core/testing";
import { Observable, Subject } from "rxjs";
import { shareLatest } from "./share-latest";

describe("shareLatest", () => {
  let source$: Subject<number>;
  let subscribeCount: number;
  let unsubscribeCount: number;
  let shared$: Observable<number>;

  beforeEach(() => {
    source$ = new Subject<number>();
    subscribeCount = 0;
    unsubscribeCount = 0;
    const tracked$ = new Observable<number>((subscriber) => {
      subscribeCount++;
      const sub = source$.subscribe(subscriber);
      return () => {
        unsubscribeCount++;
        sub.unsubscribe();
      };
    });
    shared$ = tracked$.pipe(shareLatest(1000));
  });

  it("shares one source subscription and replays the latest value", () => {
    const first: number[] = [];
    const second: number[] = [];
    const subA = shared$.subscribe((v) => first.push(v));
    source$.next(1);
    source$.next(2);
    const subB = shared$.subscribe((v) => second.push(v));

    expect(subscribeCount).toBe(1);
    expect(first).toEqual([1, 2]);
    expect(second).toEqual([2]);

    subA.unsubscribe();
    subB.unsubscribe();
  });

  it("keeps the source alive across a tear-down/re-subscribe within the grace period", fakeAsync(() => {
    const subA = shared$.subscribe();
    source$.next(1);
    subA.unsubscribe();
    expect(unsubscribeCount).toBe(0);

    tick(500);
    const values: number[] = [];
    const subB = shared$.subscribe((v) => values.push(v));
    expect(subscribeCount).toBe(1);
    expect(values).toEqual([1]);

    tick(5000);
    expect(unsubscribeCount).toBe(0);
    subB.unsubscribe();
    tick(1000);
    expect(unsubscribeCount).toBe(1);
  }));

  it("releases the source once the grace period has elapsed", fakeAsync(() => {
    const subA = shared$.subscribe();
    subA.unsubscribe();
    tick(1000);
    expect(unsubscribeCount).toBe(1);

    const subB = shared$.subscribe();
    expect(subscribeCount).toBe(2);
    subB.unsubscribe();
    tick(1000);
  }));

  it("resets after an error so the next subscriber retries the source", fakeAsync(() => {
    const errors: unknown[] = [];
    const subA = shared$.subscribe({ error: (e) => errors.push(e) });
    source$.error(new Error("permission-denied"));
    expect(errors.length).toBe(1);
    subA.unsubscribe();

    source$ = new Subject<number>();
    const subB = shared$.subscribe({ error: (e) => errors.push(e) });
    expect(subscribeCount).toBe(2);
    subB.unsubscribe();
    tick(1000);
  }));
});
