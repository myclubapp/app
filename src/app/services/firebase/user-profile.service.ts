import {
  Injectable,
  inject,
  Injector,
  runInInjectionContext,
} from "@angular/core";

import { User, updateProfile } from "@angular/fire/auth";
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
  DocumentData,
  addDoc,
  documentId,
  getDocs,
  query,
  where,
} from "@angular/fire/firestore";
import {
  Storage,
  ref,
  uploadString,
  getDownloadURL,
} from "@angular/fire/storage";

import {
  Observable,
  defer,
  firstValueFrom,
  from,
  map,
  of,
  takeUntil,
} from "rxjs";
import { Profile } from "../../models/user";
import { Photo } from "@capacitor/camera";

import { AuthService } from "../auth.service";
import { DeviceId, DeviceInfo } from "@capacitor/device";
import { shareLatest } from "../share-latest";

/**
 * Club member and attendee documents carry `firstName`, `lastName` and
 * `profilePicture` copied from the profile (#259: backend trigger
 * denormalizeAttendee, kept current by syncProfileNames). Such a document
 * needs no profile read at all. Team member documents are not denormalised
 * yet and still go through the batched read.
 */
function hasDenormalizedName(member: object): boolean {
  const { firstName, lastName } = member as Partial<Profile>;
  return (
    (typeof firstName === "string" && firstName.trim() !== "") ||
    (typeof lastName === "string" && lastName.trim() !== "")
  );
}

/** Splits `items` into consecutive slices of at most `size` elements. */
function chunk<T>(items: T[], size: number): T[][] {
  const slices: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slices.push(items.slice(i, i + size));
  }
  return slices;
}

/** Result of one batched profile read, see UserProfileService.fetchProfiles. */
interface ProfileBatch {
  profiles: Profile[];
  /**
   * True when Firestore answered from the local cache (offline, or the
   * roughly 10 s reconnect window in which the SDK marks itself offline).
   * Such an answer proves only the profiles it contains — an id missing
   * from it may simply not have been cached yet.
   */
  fromCache: boolean;
}

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  /**
   * One shared profile stream per user id (#259). Detail pages and member
   * lists request the same profiles again and again, mostly with take(1);
   * without memoisation every call opened its own docData() listener and paid
   * a fresh read as soon as the previous one had been released. The shared
   * listener stays open PROFILE_GRACE_MS after its last subscriber, so
   * re-opening a detail within that window costs no reads at all.
   */
  private profileCache: Map<string, Observable<Profile>> = new Map();
  private readonly PROFILE_GRACE_MS = 10 * 60 * 1000; // 10 Minuten
  private injector = inject(Injector);

  /** Firestore accepts at most 30 values in a `documentId() in` filter. */
  private static readonly PROFILE_BATCH_SIZE = 30;
  /**
   * Profiles read by getMemberProfiles(), kept PROFILE_GRACE_MS like the
   * shared streams above so that re-opening a detail page costs no reads.
   * `null` records a member that has no profile document.
   */
  private memberProfileCache = new Map<
    string,
    { profile: Profile | null; readAt: number }
  >();
  /**
   * Batched reads still in flight, per member id. Concurrent callers await
   * the same read instead of issuing their own, and because the read writes
   * the memo itself, its result is kept even when the page that started it
   * has already moved on (switchMap on a live member list).
   */
  private pendingProfileReads = new Map<string, Promise<void>>();
  /**
   * Bumped by clearCache() so that a read started before a logout cannot
   * repopulate the memo afterwards.
   */
  private memberProfileGeneration = 0;

  /**
   * Clears all cached data - should be called on logout
   */
  clearCache(): void {
    this.profileCache.clear();
    this.memberProfileCache.clear();
    this.pendingProfileReads.clear();
    this.memberProfileGeneration++;
  }

  constructor(
    private firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService,
  ) {
    // Aktiviere Offline Persistenz
    // Listen to logout events to clear cache
    this.authService.logout$.subscribe(() => {
      this.clearCache();
    });
  }

  addKidRequest(userId: string, email: string) {
    const userKidsRef = collection(
      this.firestore,
      `userProfile/${userId}/kidsRequests`,
    );
    return addDoc(userKidsRef, {
      email: email,
      createdAt: new Date(),
      verified: false,
    });
  }

  getKidsRequests(userId: string) {
    const userKidsRef = collection(
      this.firestore,
      `userProfile/${userId}/kidsRequests`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(userKidsRef, { idField: "id" }),
    ) as Observable<any[]>;
  }

  getChildren(userId: string) {
    // console.log("getChildren: " + userId);
    const childrenRef = collection(
      this.firestore,
      `userProfile/${userId}/children`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(childrenRef, { idField: "id" }).pipe(shareLatest()),
    ) as Observable<any[]>;
  }

  getParents(userId: string) {
    const parentsRef = collection(
      this.firestore,
      `userProfile/${userId}/parents`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(parentsRef, { idField: "id" }),
    ) as Observable<any[]>;
  }

  async addParent(userId: string, parentId: string) {
    const parentRef = doc(
      this.firestore,
      `userProfile/${userId}/parents/${parentId}`,
    );
    return setDoc(parentRef, {
      addedAt: new Date(),
      parentId: parentId,
    });
  }

  async addChild(userId: string, childId: string) {
    const childRef = doc(
      this.firestore,
      `userProfile/${userId}/children/${childId}`,
    );
    return setDoc(childRef, {
      addedAt: new Date(),
      childId: childId,
    });
  }

  deleteKidRequest(userId: string, requestId: string) {
    const userKidsRef = collection(
      this.firestore,
      `userProfile/${userId}/kidsRequests`,
    );
    return deleteDoc(doc(userKidsRef, requestId));
  }

  getUserProfile(user: User): Observable<Profile> {
    return this.getUserProfileById(user.uid);
  }

  getUserProfileById(userId: string): Observable<Profile> {
    let profile$ = this.profileCache.get(userId);
    if (!profile$) {
      const userProfileRef: DocumentReference = doc(
        this.firestore,
        `userProfile/${userId}`,
      );
      profile$ = runInInjectionContext(this.injector, () =>
        docData(userProfileRef, { idField: "id" }).pipe(
          shareLatest(this.PROFILE_GRACE_MS),
        ),
      ) as Observable<Profile>;
      this.profileCache.set(userId, profile$);
    }
    return profile$;
  }

  /**
   * Resolves the profiles of club or team member refs in one shot and merges
   * them onto the refs: member fields first, profile fields on top, "Unknown"
   * names where no profile exists. Emits exactly once and completes, so it
   * replaces `forkJoin(members.map((m) => getUserProfileById(m.id).pipe(take(1))))`
   * on the detail pages — and unlike forkJoin it also emits for an empty list.
   *
   * Why not one listener per member: with the persistent cache every
   * docData() listener costs about five sequential IndexedDB transactions.
   * A club with a few hundred members therefore needed several seconds
   * (Firefox: more than 10 s) until the last profile arrived, and forkJoin
   * waits for the slowest one. Here the ids are read with `documentId() in`
   * queries of PROFILE_BATCH_SIZE — one remote event per batch — and the
   * results are memoised for PROFILE_GRACE_MS.
   *
   * Members whose document already carries the denormalised name (club
   * members, attendees) are not read at all: their names come from the live
   * member listener, so the detail pages of a club cost no profile reads.
   *
   * A batch that cannot be read (permission denied, no connection and no
   * cache) yields "Unknown" for its members and is not memoised, so the
   * next open retries. The same goes for ids missing from an answer that
   * Firestore served from its local cache: only a server answer proves that
   * a profile does not exist. Profiles must never block an attendee list.
   */
  getMemberProfiles<T extends { id: string }>(
    members: T[],
  ): Observable<(T & Profile)[]> {
    if (!members || members.length === 0) {
      return of([]);
    }
    return defer(() => {
      const now = Date.now();
      const missingIds = [
        ...new Set(
          members
            .filter((member) => !hasDenormalizedName(member))
            .map((member) => member.id)
            .filter((id) => {
              const cached = this.memberProfileCache.get(id);
              return !cached || now - cached.readAt > this.PROFILE_GRACE_MS;
            }),
        ),
      ];
      const reads = this.readProfiles(missingIds);
      return reads.length > 0 ? from(Promise.all(reads)) : of(null);
    }).pipe(
      map(() =>
        members.map((member) =>
          this.mergeMemberProfile(
            member,
            hasDenormalizedName(member)
              ? null
              : (this.memberProfileCache.get(member.id)?.profile ?? null),
          ),
        ),
      ),
    );
  }

  /**
   * Starts the batched reads for the `ids` that are not already in flight
   * and returns one promise per read to wait for. Each read memoises its
   * own result, so nothing is lost when the subscriber is gone by then.
   */
  private readProfiles(ids: string[]): Promise<void>[] {
    const reads = new Set<Promise<void>>();
    const idsToRead: string[] = [];
    for (const id of ids) {
      const inFlight = this.pendingProfileReads.get(id);
      if (inFlight) {
        reads.add(inFlight);
      } else {
        idsToRead.push(id);
      }
    }
    const generation = this.memberProfileGeneration;
    for (const batch of chunk(
      idsToRead,
      UserProfileService.PROFILE_BATCH_SIZE,
    )) {
      const read: Promise<void> = firstValueFrom(this.fetchProfiles(batch))
        .then((result) => {
          if (generation === this.memberProfileGeneration) {
            this.memoiseProfiles(batch, result);
          }
        })
        .catch((error) => {
          // Not memoised, so the next open retries.
          console.error(
            `Failed to fetch ${batch.length} member profiles:`,
            error,
          );
        })
        .finally(() => {
          for (const id of batch) {
            if (this.pendingProfileReads.get(id) === read) {
              this.pendingProfileReads.delete(id);
            }
          }
        });
      for (const id of batch) {
        this.pendingProfileReads.set(id, read);
      }
      reads.add(read);
    }
    return [...reads];
  }

  private memoiseProfiles(
    ids: string[],
    { profiles, fromCache }: ProfileBatch,
  ): void {
    const readAt = Date.now();
    const byId = new Map(profiles.map((profile) => [profile.id, profile]));
    for (const id of ids) {
      const profile = byId.get(id);
      // A cached answer may just not contain the profile yet — leave the id
      // unmemoised so the next open asks the server.
      if (!profile && fromCache) {
        continue;
      }
      this.memberProfileCache.set(id, { profile: profile ?? null, readAt });
    }
  }

  /** One `documentId() in` read for up to PROFILE_BATCH_SIZE ids. */
  protected fetchProfiles(ids: string[]): Observable<ProfileBatch> {
    return runInInjectionContext(this.injector, () =>
      from(
        getDocs(
          query(
            collection(this.firestore, "userProfile"),
            where(documentId(), "in", ids),
          ),
        ),
      ),
    ).pipe(
      map((snapshot) => ({
        profiles: snapshot.docs.map((document) => ({
          ...(document.data() as Profile),
          id: document.id,
        })),
        fromCache: snapshot.metadata.fromCache,
      })),
    );
  }

  private mergeMemberProfile<T extends { id: string }>(
    member: T,
    profile: Profile | null,
  ): T & Profile {
    // Without a profile read the names come from the member document itself
    // (denormalised by the backend) — or stay "Unknown".
    const names = profile ?? (member as Partial<Profile>);
    return {
      ...member,
      ...(profile ?? {}),
      id: member.id,
      firstName: names.firstName || "Unknown",
      lastName: names.lastName || "Unknown",
      // Team/club roles live on the member document, not on the profile.
      roles: (member as { roles?: string[] }).roles ?? [],
    } as unknown as T & Profile;
  }

  async setUserProfilePicture(photo: Photo) {
    const user = this.authService.auth.currentUser;
    const storageRef = ref(
      this.storage,
      `userProfile/${user.uid}/profilePicture.${photo.format}`,
    );
    await uploadString(storageRef, photo.base64String, "base64", {});
    const url = await getDownloadURL(storageRef);

    await updateProfile(user, { photoURL: url });

    return this.updateOwnProfile({ profilePicture: url });
  }

  async setUserProfile(userProfile: Profile) {
    const user = this.authService.auth.currentUser;
    await updateProfile(user, {
      displayName: userProfile.firstName + " " + userProfile.lastName,
    });

    return this.updateOwnProfile({ userProfile });
  }

  /**
   * Writes `fields` to the signed-in user's profile document and drops the
   * user's memoised member profile: getMemberProfiles() would otherwise show
   * the old name or picture on team pages for up to PROFILE_GRACE_MS.
   */
  private updateOwnProfile(fields: { [field: string]: unknown }) {
    const user = this.authService.auth.currentUser;
    this.memberProfileCache.delete(user.uid);
    return updateDoc(doc(this.firestore, `userProfile/${user.uid}`), fields);
  }

  getPushDeviceList(): Observable<DocumentData[]> {
    const user = this.authService.auth.currentUser;
    const pushDeviceListRef = collection(
      this.firestore,
      `userProfile/${user.uid}/push`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(pushDeviceListRef, {
        idField: "id",
      }),
    );
  }

  async addPushSubscriber(
    sub: PushSubscription, // WebPush
    deviceId: DeviceId,
    deviceInfo: DeviceInfo,
    token: string, // native
  ) {
    const user = this.authService.auth.currentUser;
    const pushObject = JSON.stringify(sub);
    const userProfileRef: DocumentReference<DocumentData> = doc(
      this.firestore,
      // `userProfile/${user.uid}/push/${deviceId.identifier}`
      `userProfile/${user.uid}/push/${deviceInfo.model}`,
    );

    return setDoc(userProfileRef, {
      identifier: deviceId.identifier,
      token: token || "", // Set token for native Web Push
      pushObject: pushObject || "{}", // Set token for web push
      model: deviceInfo.model || "",
      operatingSystem: deviceInfo.operatingSystem || "",
      osVersion: deviceInfo.osVersion || "",
      platform: deviceInfo.platform || "", // --> set to "Web" for Web Push from Backend or "Native" for Native Push from firebase
      updated: new Date(),
    });
  }

  async deletePushDevice(deviceId) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(
      this.firestore,
      `userProfile/${user.uid}/push/${deviceId}`,
    );
    return deleteDoc(userProfileRef);
  }

  async changeSettingsPush(state: boolean) {
    return this.updateOwnProfile({ settingsPush: state });
  }
  async changeSettingsPushModule(state: boolean, module) {
    return this.updateOwnProfile({ ["settingsPush" + module]: state });
  }

  async changeSettingsEmail(state: boolean) {
    return this.updateOwnProfile({ settingsEmail: state });
  }

  async changeSettingsEmailReporting(state: boolean) {
    return this.updateOwnProfile({ settingsEmailReporting: state });
  }

  async changeShowGamePreview(state: boolean) {
    return this.updateOwnProfile({ showGamePreview: state });
  }

  async changeGamePreviewDays(days: number) {
    return this.updateOwnProfile({ gamePreviewDays: days });
  }

  async changeHideEmail(state: boolean) {
    return this.updateOwnProfile({ hideEmail: state });
  }

  async changeHidePhoneNumber(state: boolean) {
    return this.updateOwnProfile({ hidePhoneNumber: state });
  }

  changeProfileAttribute(value: any, fieldname) {
    return this.updateOwnProfile({ [fieldname]: value });
  }

  async deleteChild(userId: string, childId: string) {
    const childRef = doc(
      this.firestore,
      `userProfile/${userId}/children/${childId}`,
    );
    return deleteDoc(childRef);
  }
}
