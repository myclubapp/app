import { TestBed } from "@angular/core/testing";
import { UserProfileService } from "./user-profile.service";
import { Firestore } from "@angular/fire/firestore";
import { Storage } from "@angular/fire/storage";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject, of, throwError } from "rxjs";

describe("UserProfileService", () => {
  let service: UserProfileService;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"], {
      logout$: of(),
    });

    TestBed.configureTestingModule({
      providers: [
        UserProfileService,
        { provide: Firestore, useValue: {} },
        { provide: Storage, useValue: {} },
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: Injector,
          useValue: jasmine.createSpyObj("Injector", ["get"]),
        },
        {
          provide: TranslateService,
          useValue: {
            instant: (key: string) =>
              key === "common.unknown" ? "Unknown" : key,
          },
        },
      ],
    });
    service = TestBed.inject(UserProfileService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getMemberProfiles", () => {
    const profile = (id: string, firstName: string) =>
      ({ id, firstName, lastName: "L", roles: ["profile-role"] }) as any;
    /** Answer for one batch: every id except "missing" has a profile. */
    const batch = (ids: string[], fromCache = false) => ({
      profiles: ids
        .filter((id) => id !== "missing")
        .map((id) => profile(id, "N-" + id)),
      fromCache,
    });
    let fetchSpy: jasmine.Spy;

    beforeEach(() => {
      fetchSpy = spyOn(service as any, "fetchProfiles").and.callFake(
        (ids: string[]) => of(batch(ids)),
      );
    });

    it("emits an empty list for no members without reading", (done) => {
      service.getMemberProfiles([]).subscribe((result) => {
        expect(result).toEqual([]);
        expect(fetchSpy).not.toHaveBeenCalled();
        done();
      });
    });

    it("merges profiles onto the member refs and falls back to Unknown", (done) => {
      const members = [
        { id: "a", roles: ["captain"] },
        { id: "missing", roles: undefined },
      ];
      service.getMemberProfiles(members).subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result[0].id).toBe("a");
        expect(result[0].firstName).toBe("N-a");
        // Team roles from the member doc win over the profile's roles.
        expect(result[0].roles).toEqual(["captain"] as any);
        expect(result[1].firstName).toBe("Unknown");
        expect(result[1].lastName).toBe("Unknown");
        expect(result[1].roles).toEqual([] as any);
        done();
      });
    });

    it("reads in batches of at most 30 ids and emits once", (done) => {
      const members = Array.from({ length: 65 }, (_, i) => ({ id: "u" + i }));
      let emissions = 0;
      service.getMemberProfiles(members).subscribe({
        next: (result) => {
          emissions++;
          expect(result.length).toBe(65);
          expect(result[64].firstName).toBe("N-u64");
        },
        complete: () => {
          expect(emissions).toBe(1);
          expect(fetchSpy).toHaveBeenCalledTimes(3);
          expect(fetchSpy.calls.argsFor(0)[0].length).toBe(30);
          expect(fetchSpy.calls.argsFor(1)[0].length).toBe(30);
          expect(fetchSpy.calls.argsFor(2)[0].length).toBe(5);
          done();
        },
      });
    });

    it("memoises profiles, so a second read within the grace period costs nothing", (done) => {
      service
        .getMemberProfiles([{ id: "a" }, { id: "missing" }])
        .subscribe(() => {
          service
            .getMemberProfiles([{ id: "a" }, { id: "b" }, { id: "missing" }])
            .subscribe((result) => {
              // Only the unknown id "b" is read again; "a" and the known-missing
              // "missing" come from the memo.
              expect(fetchSpy).toHaveBeenCalledTimes(2);
              expect(fetchSpy.calls.argsFor(1)[0]).toEqual(["b"]);
              expect(result.map((m) => m.firstName)).toEqual([
                "N-a",
                "N-b",
                "Unknown",
              ]);
              done();
            });
        });
    });

    it("degrades a failed batch to Unknown without memoising it", (done) => {
      spyOn(console, "error");
      fetchSpy.and.returnValue(throwError(() => new Error("offline")));
      service.getMemberProfiles([{ id: "a" }]).subscribe((result) => {
        expect(result[0].firstName).toBe("Unknown");
        fetchSpy.and.callFake((ids: string[]) => of(batch(ids)));
        service.getMemberProfiles([{ id: "a" }]).subscribe((retry) => {
          expect(fetchSpy).toHaveBeenCalledTimes(2);
          expect(retry[0].firstName).toBe("N-a");
          done();
        });
      });
    });

    it("forgets memoised profiles on clearCache", (done) => {
      service.getMemberProfiles([{ id: "a" }]).subscribe(() => {
        service.clearCache();
        service.getMemberProfiles([{ id: "a" }]).subscribe(() => {
          expect(fetchSpy).toHaveBeenCalledTimes(2);
          done();
        });
      });
    });

    // #259: club member and attendee documents carry the names already.
    it("takes denormalised names from the member doc without reading them", (done) => {
      const members = [
        { id: "a", firstName: "Anna", lastName: "Alpha", roles: ["captain"] },
        { id: "b" },
      ];
      service.getMemberProfiles(members).subscribe((result) => {
        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy.calls.argsFor(0)[0]).toEqual(["b"]);
        expect(result[0].firstName).toBe("Anna");
        expect(result[0].lastName).toBe("Alpha");
        expect(result[0].roles).toEqual(["captain"] as any);
        expect(result[1].firstName).toBe("N-b");
        done();
      });
    });

    it("emits without any read when every member carries a name", (done) => {
      service
        .getMemberProfiles([{ id: "a", firstName: "Anna", lastName: "" }])
        .subscribe((result) => {
          expect(fetchSpy).not.toHaveBeenCalled();
          expect(result[0].firstName).toBe("Anna");
          expect(result[0].lastName).toBe("Unknown");
          done();
        });
    });

    it("still reads a member whose denormalised names are empty", (done) => {
      service
        .getMemberProfiles([{ id: "a", firstName: "", lastName: " " }])
        .subscribe((result) => {
          expect(fetchSpy).toHaveBeenCalledTimes(1);
          expect(result[0].firstName).toBe("N-a");
          done();
        });
    });

    it("prefers the member doc's names over a memoised profile", (done) => {
      service.getMemberProfiles([{ id: "a" }]).subscribe(() => {
        service
          .getMemberProfiles([{ id: "a", firstName: "Renamed", lastName: "R" }])
          .subscribe((result) => {
            expect(fetchSpy).toHaveBeenCalledTimes(1);
            expect(result[0].firstName).toBe("Renamed");
            done();
          });
      });
    });

    it("does not memoise ids missing from a cache-served answer", (done) => {
      // Offline (or reconnecting) Firestore answers from IndexedDB with the
      // profiles it happens to hold; "b" may well exist on the server.
      fetchSpy.and.returnValue(
        of({ profiles: [profile("a", "N-a")], fromCache: true }),
      );
      service
        .getMemberProfiles([{ id: "a" }, { id: "b" }])
        .subscribe((first) => {
          expect(first.map((m) => m.firstName)).toEqual(["N-a", "Unknown"]);
          fetchSpy.and.callFake((ids: string[]) => of(batch(ids)));
          service
            .getMemberProfiles([{ id: "a" }, { id: "b" }])
            .subscribe((second) => {
              // "a" comes from the memo, only "b" is asked again.
              expect(fetchSpy).toHaveBeenCalledTimes(2);
              expect(fetchSpy.calls.argsFor(1)[0]).toEqual(["b"]);
              expect(second.map((m) => m.firstName)).toEqual(["N-a", "N-b"]);
              done();
            });
        });
    });

    it("shares an in-flight read between concurrent calls", (done) => {
      const pending = new Subject<any>();
      fetchSpy.and.returnValue(pending);
      const names: string[] = [];
      const collect = (result: any[]) => {
        names.push(result[0].firstName);
        if (names.length === 2) {
          expect(fetchSpy).toHaveBeenCalledTimes(1);
          expect(names).toEqual(["N-a", "N-a"]);
          done();
        }
      };
      service.getMemberProfiles([{ id: "a" }]).subscribe(collect);
      service.getMemberProfiles([{ id: "a" }]).subscribe(collect);
      expect(fetchSpy).toHaveBeenCalledTimes(1);
      pending.next(batch(["a"]));
      pending.complete();
    });

    it("keeps the result of a read whose subscriber went away", (done) => {
      const pending = new Subject<any>();
      fetchSpy.and.returnValue(pending);
      // A switchMap on a live member list tears the read down mid-flight;
      // the read is billed either way, so its result must land in the memo.
      service
        .getMemberProfiles([{ id: "a" }])
        .subscribe()
        .unsubscribe();
      pending.next(batch(["a"]));
      pending.complete();
      fetchSpy.and.callFake((ids: string[]) => of(batch(ids)));
      // The promise chain writes the memo in microtasks; read after them.
      setTimeout(() => {
        service.getMemberProfiles([{ id: "a" }]).subscribe((result) => {
          expect(fetchSpy).toHaveBeenCalledTimes(1);
          expect(result[0].firstName).toBe("N-a");
          done();
        });
      });
    });

    it("does not let a read started before clearCache repopulate the memo", (done) => {
      const pending = new Subject<any>();
      fetchSpy.and.returnValue(pending);
      service.getMemberProfiles([{ id: "a" }]).subscribe();
      service.clearCache(); // logout
      pending.next(batch(["a"]));
      pending.complete();
      fetchSpy.and.callFake((ids: string[]) => of(batch(ids)));
      setTimeout(() => {
        service.getMemberProfiles([{ id: "a" }]).subscribe(() => {
          expect(fetchSpy).toHaveBeenCalledTimes(2);
          done();
        });
      });
    });

    it("treats whitespace-only names as unknown without reading", (done) => {
      service
        .getMemberProfiles([{ id: "a", firstName: " ", lastName: "Müller" }])
        .subscribe((result) => {
          expect(fetchSpy).not.toHaveBeenCalled();
          expect(result[0].firstName).toBe("Unknown");
          expect(result[0].lastName).toBe("Müller");
          done();
        });
    });
  });
});
