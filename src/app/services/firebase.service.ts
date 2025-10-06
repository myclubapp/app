import {
  Injectable,
  inject,
  Injector,
  runInInjectionContext,
} from "@angular/core";
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  setDoc,
  updateDoc,
  orderBy,
  query,
  where,
  writeBatch,
  DocumentReference,
  getDocs,
  collectionGroup,
  Timestamp,
} from "@angular/fire/firestore";
import {
  Observable,
  catchError,
  combineLatest,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
  shareReplay,
} from "rxjs";
import { Club } from "../models/club";
import { Team } from "../models/team";
import { User } from "@angular/fire/auth";
import { AuthService } from "src/app/services/auth.service";
import { Profile } from "../models/user";
import { UserProfileService } from "./firebase/user-profile.service";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "@angular/fire/storage";
import { ClubLink } from "../models/club-link";
import { Storage } from "@angular/fire/storage";
import { Photo } from "@capacitor/camera";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  user: User;
  private injector = inject(Injector);

  constructor(
    private readonly firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService,
    private readonly userProfileService: UserProfileService,
  ) {}

  getProduct(productId: string) {
    const productRef = doc(this.firestore, `stripeProducts/${productId}`);
    return runInInjectionContext(this.injector, () =>
      docData(productRef, { idField: "id" }),
    ) as unknown as Observable<any>;
  }

  getProducts() {
    return runInInjectionContext(this.injector, () => {
      const productListRef = collection(this.firestore, `stripeProducts`);
      const q = query(
        productListRef,
        where("active", "==", true),
        where("stripe_metadata_type", "==", "base"),
      );
      return collectionData(q, {
        idField: "id",
      });
    }) as Observable<any[]>;
  }

  getModules() {
    return runInInjectionContext(this.injector, () => {
      const productListRef = collection(this.firestore, `stripeProducts`);
      const q = query(
        productListRef,
        where("active", "==", true),
        where("stripe_metadata_type", "==", "module"),
      );
      return collectionData(q, {
        idField: "id",
      });
    }) as Observable<any[]>;
  }

  getPrices(productId: string) {
    return runInInjectionContext(this.injector, () => {
      const productPricesListRef = collection(
        this.firestore,
        `stripeProducts/${productId}/prices`,
      );

      const q = query(productPricesListRef, where("active", "==", true));

      return collectionData(q, {
        idField: "id",
      });
    }) as Observable<any[]>;
  }

  getClubList(): Observable<Club[]> {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return combineLatest([
          this.getUserClubRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            tap((children) => {}),
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      const childUser = { uid: child.id } as User;
                      return this.getUserClubRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenClubs) => childrenClubs.flat()),
            catchError((error) => {
              console.error("Error fetching children clubs:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userClubs, childrenClubs]) => {
            const allClubs = [...userClubs, ...childrenClubs];
            return allClubs.filter(
              (club, index, self) =>
                index === self.findIndex((c) => c.id === club.id),
            );
          }),
        );
      }),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.getClubRef(club.id).pipe(catchError(() => of(null))),
          ),
        );
      }),
      map((clubsWithDetails) =>
        clubsWithDetails
          .filter((club): club is Club => club !== null && club !== undefined)
          .sort((a, b) => a.name.localeCompare(b.name)),
      ),
      catchError((err) => {
        console.error("Error in getClubList:", err);
        return of([]);
      }),
    );
  }

  getClubAdminList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.getUserClubAdminRefs(user);
      }),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.getClubRef(club.id).pipe(catchError(() => of(null))),
          ),
        );
      }),
      map((clubsWithDetails) =>
        clubsWithDetails
          .filter((club): club is Club => club !== null && club !== undefined)
          .sort((a, b) => a.name.localeCompare(b.name)),
      ),
      shareReplay(1),
      catchError((err) => {
        console.error("Error in getClubList:", err);
        return of([]);
      }),
    );
  }

  getClubAdminListByClubId(clubId) {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.getUserClubAdminRefs(user);
      }),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.getClubRef(club.id).pipe(catchError(() => of(null))),
          ),
        );
      }),
      map((clubsWithDetails) =>
        clubsWithDetails
          .filter(
            (club): club is Club =>
              club !== null && club !== undefined && club.id === clubId,
          )
          .sort((a, b) => a.name.localeCompare(b.name)),
      ),
      shareReplay(1),
      catchError((err) => {
        console.error("Error in getClubAdminListByClubId:", err);
        return of([]);
      }),
    );
  }

  getTeamList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's teams and children's teams
        return combineLatest([
          this.getUserTeamRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            tap((children) => {}),
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      return this.getUserTeamRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenTeams) => childrenTeams.flat()),
            catchError((error) => {
              console.error("Error fetching children teams:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userTeams, childrenTeams]) => {
            const allTeams = [...userTeams, ...childrenTeams];
            return allTeams.filter(
              (team, index, self) =>
                index === self.findIndex((t) => t.id === team.id),
            );
          }),
        );
      }),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        const validTeams = teams.filter((team) => team && team.id);
        if (validTeams.length === 0) return of([]);
        return combineLatest(
          validTeams.map((team) =>
            this.getTeamRef(team.id).pipe(
              catchError((error) => {
                console.error(
                  `Fehler beim Laden der Team-Details für Team ${team.id}:`,
                  error.message,
                );
                return of(null);
              }),
            ),
          ),
        );
      }),
      map((teamsWithDetails) =>
        teamsWithDetails
          .filter((team): team is Team => team !== null && team !== undefined)
          .sort((a, b) => a.name.localeCompare(b.name)),
      ),
      shareReplay(1),
      catchError((err) => {
        console.error("Error in getTeamList:", err);
        return of([]);
      }),
    );
  }

  getTeamAdminList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.getUserTeamAdminRefs(user);
      }),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        const validTeams = teams.filter((team) => team && team.id);
        if (validTeams.length === 0) return of([]);
        return combineLatest(
          validTeams.map((team) =>
            this.getTeamRef(team.id).pipe(
              catchError((error) => {
                console.error(
                  `Fehler beim Laden der Team-Admin-Details für Team ${team.id}:`,
                  error.message,
                );
                return of(null);
              }),
            ),
          ),
        );
      }),
      map((teamsWithDetails) =>
        teamsWithDetails
          .filter((team): team is Team => team !== null && team !== undefined)
          .sort((a, b) => a.name.localeCompare(b.name)),
      ),
      shareReplay(1),
      catchError((err) => {
        console.error("Error in getTeamAdminList:", err);
        return of([]);
      }),
    );
  }

  getTeamAdminListByClubId(clubId) {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.getUserTeamAdminRefs(user);
      }),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        const validTeams = teams.filter((team) => team && team.id);
        if (validTeams.length === 0) return of([]);
        return combineLatest(
          validTeams.map((team) =>
            this.getTeamRef(team.id).pipe(
              catchError((error) => {
                console.error(
                  `Fehler beim Laden der Team-Admin-Details für Club ${clubId}, Team ${team.id}:`,
                  error.message,
                );
                return of(null);
              }),
            ),
          ),
        );
      }),
      map((teamsWithDetails) =>
        teamsWithDetails
          .filter(
            (team): team is Team =>
              team !== null && team !== undefined && team.clubId === clubId,
          )
          .sort((a, b) => a.name.localeCompare(b.name)),
      ),
      shareReplay(1),
      catchError((err) => {
        console.error("Error in getTeamAdminListByClubId:", err);
        return of([]);
      }),
    );
  }

  getClubTeamList(clubId: string): Observable<Team[]> {
    return this.getClubTeamsRef(clubId).pipe(
      tap((teams) => {
        if (teams.length === 0) {
          console.log("Keine Teams für diesen Club gefunden");
        } else {
          console.log(
            "Lade Details für Teams im Club:",
            teams.map((team) => team.id),
          );
        }
      }),
      mergeMap((teams) => {
        if (teams.length === 0) {
          return of([]);
        }
        return combineLatest(
          teams.map((team) =>
            this.getTeamRef(team.id).pipe(
              catchError((error) => {
                console.error(
                  `Fehler beim Laden der Team-Details für Team ${team.id}:`,
                  error.message,
                );
                return of(null);
              }),
            ),
          ),
        );
      }),
      map((teamsWithDetails) => {
        // console.log("teamsWithDetails", teamsWithDetails);
        const filteredTeams = teamsWithDetails.filter(
          (team): team is Team => team !== null && team !== undefined,
        );
        if (filteredTeams.length !== teamsWithDetails.length) {
          console.warn(
            `Einige Teams konnten nicht geladen werden. ${filteredTeams.length} von ${teamsWithDetails.length} Teams erfolgreich geladen.`,
          );
        }
        return filteredTeams.sort((a, b) => a.name.localeCompare(b.name));
      }),
      shareReplay(1),
      catchError((err) => {
        console.error("Fehler beim Laden der Club-Teams:", err);
        return of([]);
      }),
    );
  }

  getClubMemberRefs(clubId: string): Observable<Profile[]> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/members`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubMemberRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Profile[]>;
  }

  getClubParentsRefs(clubId: string): Observable<Profile[]> {
    const clubParentRefList = collection(
      this.firestore,
      `club/${clubId}/parents`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubParentRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Profile[]>;
  }

  getClubMemberRef(clubId: string, userId: string): Observable<Profile> {
    const clubMemberRef = doc(
      this.firestore,
      `club/${clubId}/members/${userId}`,
    );
    return runInInjectionContext(this.injector, () =>
      docData(clubMemberRef, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as unknown as Observable<Profile>;
  }

  getClubAdminRefs(clubId: string): Observable<Profile[]> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/admins`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubMemberRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Profile[]>;
  }

  getClubRequestRefs(clubId: string): Observable<Profile[]> {
    const clubRequestRefList = collection(
      this.firestore,
      `club/${clubId}/requests`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubRequestRefList, {
        idField: "id",
      }),
    ) as Observable<Profile[]>;
  }

  getTeamRequestRefs(teamId: string): Observable<Profile[]> {
    const teamRequestRefList = collection(
      this.firestore,
      `teams/${teamId}/requests`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(teamRequestRefList, {
        idField: "id",
      }),
    ) as Observable<Profile[]>;
  }

  getTeamRef(teamId) {
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return runInInjectionContext(this.injector, () =>
      docData(teamRef, { idField: "id" }).pipe(shareReplay(10)),
    ) as Observable<Team>;
  }

  getUserTeamRefs(user: User): Observable<Team[]> {
    const teamRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/teams`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(teamRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Team[]>;
  }

  getUserTeamAdminRefs(user: User): Observable<Team[]> {
    const teamRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/teamAdmin`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(teamRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Team[]>;
  }

  getUserClubAdminRefs(user: User): Observable<Club[]> {
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubAdmin`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Club[]>;
  }

  getUserClubRequestRefs(user: User): Observable<any> {
    const requestRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubRequests`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(requestRefList, {
        idField: "id",
      }),
    ) as unknown as Observable<any>;
  }

  getUserClubRequestRef(userId: string, requestId: string): Observable<any> {
    const requestRef = doc(
      this.firestore,
      `/userProfile/${userId}/clubRequests/${requestId}`,
    );
    return runInInjectionContext(this.injector, () =>
      docData(requestRef, { idField: "id" }),
    ) as Observable<any>;
  }

  getUserTeamRequestRefs(user: User): Observable<any> {
    const requestRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/teamRequests`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(requestRefList, {
        idField: "id",
      }),
    ) as unknown as Observable<any>;
  }

  getUserTeamRequestRef(userId: string, requestId: string): Observable<any> {
    const requestRef = doc(
      this.firestore,
      `/userProfile/${userId}/teamRequests/${requestId}`,
    );
    return runInInjectionContext(this.injector, () =>
      docData(requestRef, { idField: "id" }),
    ) as Observable<any>;
  }

  getClubTeamRefs(clubId: string): Observable<Team[]> {
    const teamRefList = collection(this.firestore, `club/${clubId}/teams`);
    return runInInjectionContext(this.injector, () =>
      collectionData(teamRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Team[]>;
  }

  getTeamMemberRefs(teamId: string): Observable<Profile[]> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/members`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(teamMemberRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Profile[]>;
  }

  getTeamAdminRefs(teamId: string): Observable<Profile[]> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/admins`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(teamMemberRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Profile[]>;
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }

  getClubRef(clubId: string) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return runInInjectionContext(this.injector, () =>
      docData(clubRef, { idField: "id" }).pipe(shareReplay(1)),
    ) as unknown as Observable<Club>;
  }

  getUserClubRefs(user: User): Observable<Club[]> {
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubs`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Club[]>;
  }

  getClubTeamsRef(clubId: string): Observable<Team[]> {
    const clubTeamRefList = collection(this.firestore, `club/${clubId}/teams`);
    return runInInjectionContext(this.injector, () =>
      collectionData(clubTeamRefList, {
        idField: "id",
      }).pipe(shareReplay(1)),
    ) as Observable<Team[]>;
  }

  addClubTeam(team, clubId) {
    return addDoc(collection(this.firestore, `/club/${clubId}/teams/`), team);
  }

  addClubRole(clubId, roleArray) {
    return setDoc(
      doc(this.firestore, `club/${clubId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      },
    );
  }

  addClubMemberRole(clubId, memberId, roleArray) {
    return setDoc(
      doc(this.firestore, `club/${clubId}/members/${memberId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      },
    );
  }

  addTeamRole(teamId, roleArray) {
    return setDoc(
      doc(this.firestore, `teams/${teamId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      },
    );
  }

  addTeamMemberRole(teamId, memberId, roleArray) {
    return setDoc(
      doc(this.firestore, `teams/${teamId}/members/${memberId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      },
    );
  }

  setClubHelferReportingDate(clubId, fieldname, date) {
    const teamRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      teamRef,
      {
        [fieldname]: date,
      },
      {
        merge: true,
      },
    );
  }

  setTeamThreshold(teamId, fieldname, threshold: number) {
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return setDoc(
      teamRef,
      {
        [fieldname]: threshold,
      },
      {
        merge: true,
      },
    );
  }

  setClubThreshold(clubId, fieldname, threshold: number) {
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      clubRef,
      {
        [fieldname]: threshold,
      },
      {
        merge: true,
      },
    );
  }

  async leaveTeam(teamId: string, userId: string) {
    return deleteDoc(
      doc(this.firestore, `userProfile/${userId}/teams/${teamId}`),
    );
  }

  async deleteTeam(teamId: string) {
    return deleteDoc(doc(this.firestore, `teams/${teamId}`));
  }

  async deleteTeamMember(teamId: string, userId: string): Promise<any> {
    return deleteDoc(doc(this.firestore, `teams/${teamId}/members/${userId}`));
  }

  async deleteTeamAdmin(teamId: string, userId: string): Promise<any> {
    await deleteDoc(doc(this.firestore, `teams/${teamId}/admins/${userId}`));
  }

  async addTeamAdmin(teamId: string, userId: string): Promise<any> {
    return setDoc(
      doc(this.firestore, `/teams/${teamId}/admins/${userId}`),
      {
        userProfileRef: userId,
      },
      {
        merge: true,
      },
    );
  }

  async deleteClubParent(clubId: string, userId: string): Promise<any> {
    await deleteDoc(doc(this.firestore, `club/${clubId}/parents/${userId}`));
  }

  async deleteClubember(clubId: string, userId: string): Promise<any> {
    await deleteDoc(doc(this.firestore, `club/${clubId}/members/${userId}`));
  }

  async deleteClubAdmin(clubId: string, userId: string): Promise<any> {
    await deleteDoc(doc(this.firestore, `club/${clubId}/admins/${userId}`));
  }

  async addClubAdmin(clubId: string, userId: string): Promise<any> {
    return setDoc(
      doc(this.firestore, `/club/${clubId}/admins/${userId}`),
      {
        userProfileRef: userId,
      },
      {
        merge: true,
      },
    );
  }

  approveUserClubRequest(
    clubId: string,
    userId: string,
    isParent: boolean,
  ): Promise<any> {
    return setDoc(
      doc(this.firestore, `/club/${clubId}/requests/${userId}`),
      {
        approveDateTime: Timestamp.now(),
        isParent: isParent,
        approve: true,
      },
      {
        merge: true,
      },
    );
  }

  async approveParentClubRequest(clubId: string, userId: string): Promise<any> {
    await setDoc(
      doc(this.firestore, `/club/${clubId}/requests/${userId}`),
      { isParent: true },
      {
        merge: true,
      },
    );
    return setDoc(
      doc(this.firestore, `/club/${clubId}/requests/${userId}`),
      {
        approveDateTime: Timestamp.now(),
        isParent: true,
        approve: true,
      },
      {
        merge: true,
      },
    );
  }

  async approveUserTeamRequest(teamId: string, userId: string): Promise<any> {
    await setDoc(
      doc(this.firestore, `teams/${teamId}/requests/${userId}`),
      {},
      {
        merge: true,
      },
    );
    return setDoc(
      doc(this.firestore, `teams/${teamId}/requests/${userId}`),
      {
        approve: true,
      },
      {
        merge: true,
      },
    );
  }

  async deleteUserClubRequest(clubId: string, userId: string) {
    return setDoc(
      doc(this.firestore, `club/${clubId}/requests/${userId}`),
      {
        approve: false,
      },
      {
        merge: true,
      },
    );
  }

  async deleteUserTeamRequest(teamId: string, userId: string) {
    return setDoc(
      doc(this.firestore, `teams/${teamId}/requests/${userId}`),
      {
        approve: false,
      },
      {
        merge: true,
      },
    );
  }

  async setNewClubRequest(
    userId: string,
    name: string,
    type: string,
    sportType: string,
    data: any,
  ) {
    return addDoc(
      collection(this.firestore, `userProfile/${userId}/clubRequests`),
      {
        clubId: "newClub",
        name: name,
        type: type,
        sportType: sportType,
        ...data,
      },
    );
  }

  async setClubRequest(
    clubId: string,
    userId: string,
    isParent: boolean,
    teamId: string,
  ) {
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      doc(this.firestore, `userProfile/${userId}/clubRequests`, clubId),
      {
        clubRef: clubRef,
        isParent: isParent,
        requestTeamId: teamId,
      },
    );
  }

  async setTeamRequest(teamId: string, userId: string) {
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return setDoc(
      doc(this.firestore, `userProfile/${userId}/teamRequests`, teamId),
      {
        teamRef: teamRef,
      },
    );
  }

  setHelferPunkte(clubId: string, userId: string, helferPunkte: number) {
    const clubMemberRef = doc(
      this.firestore,
      `club/${clubId}/members/${userId}`,
    );
    return updateDoc(clubMemberRef, { helferPunkte: helferPunkte });
  }

  getClubCheckoutSessionsList(clubId: string) {
    const clubCheckoutSessionListRef = collection(
      this.firestore,
      `club/${clubId}/checkout_sessions`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubCheckoutSessionListRef, {
        idField: "id",
      }),
    ) as Observable<any[]>;
  }

  getClubSubscriptionList(clubId: string) {
    const clubSubscriptionistRef = collection(
      this.firestore,
      `club/${clubId}/subscriptions`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubSubscriptionistRef, {
        idField: "id",
      }),
    ) as Observable<any[]>;
  }

  getClubSubscriptionInvoiceList(clubId: string, subscriptionId: string) {
    const clubSubscriptionInvoiceistRef = collection(
      this.firestore,
      `club/${clubId}/subscriptions/${subscriptionId}/invoices`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubSubscriptionInvoiceistRef, {
        idField: "id",
      }),
    ) as Observable<any[]>;
  }

  getClubPaymentList(clubId: string) {
    const clubPaymentsListRef = collection(
      this.firestore,
      `club/${clubId}/payments`,
    );
    return runInInjectionContext(this.injector, () =>
      collectionData(clubPaymentsListRef, {
        idField: "id",
      }),
    ) as Observable<any[]>;
  }

  searchClubListRef(searchString: string): Observable<Club[]> {
    console.log("DEBUG: Suche nach:", searchString);
    const clubRefList = collection(this.firestore, "club");

    return runInInjectionContext(this.injector, () =>
      collectionData(clubRefList, { idField: "id" }).pipe(
        tap((clubs) => {
          // console.log("DEBUG: Alle Clubs aus Firebase:", clubs);
          console.log("DEBUG: Anzahl gefundener Clubs:", clubs.length);
          console.log("DEBUG: Clubs:", clubs);
        }),
        shareReplay(1),
        map((clubs) => {
          const filteredClubs = clubs.filter(
            (club) =>
              club["name"] &&
              club["name"].toLowerCase().includes(searchString.toLowerCase()),
          );
          console.log("DEBUG: Gefilterte Clubs:", filteredClubs);
          return filteredClubs;
        }),
        // take(1),
        //takeLast(1),
        catchError((error) => {
          console.error("Fehler beim Laden der Clubs:", error);
          return of([]);
        }),
      ),
    ) as Observable<Club[]>;
  }

  getClubsByContactEmail(): Observable<Club[]> {
    return this.authService.getUser$().pipe(
      take(1),
      switchMap((user) => {
        if (!user) return of([]);
        return runInInjectionContext(this.injector, () => {
          const q = query(
            collectionGroup(this.firestore, "contacts"),
            where("email", "==", user.email),
          );
          return collectionData(q, { idField: "id" }).pipe(
            tap((contacts) => {
              console.log("DEBUG: Gefundene Kontakte:", contacts);
            }),
            mergeMap((contacts) => {
              if (contacts.length === 0) return of([]);
              return combineLatest(
                contacts.map((contact) => {
                  const clubId = contact["clubId"];
                  if (!clubId) {
                    console.warn("Kontakt ohne clubId gefunden:", contact);
                    return of(null);
                  }
                  return this.getClubRef(clubId).pipe(
                    catchError((error) => {
                      console.error(
                        `Fehler beim Laden des Clubs ${clubId}:`,
                        error,
                      );
                      return of(null);
                    }),
                  );
                }),
              );
            }),
            map((clubs) => clubs.filter((club): club is Club => club !== null)),
            tap((clubs) => {
              console.log("DEBUG: Gefundene Clubs:", clubs);
            }),
            catchError((error) => {
              console.error("Fehler beim Laden der Clubs:", error);
              return of([]);
            }),
          );
        });
      }),
    );
  }

  getActiveClubList(): Observable<Club[]> {
    return runInInjectionContext(this.injector, () => {
      const clubRefList = collection(this.firestore, `club/`);
      const q = query(clubRefList, where("active", "==", true));
      return collectionData(q, { idField: "id" });
    }) as Observable<Club[]>;
  }

  checkoutSubscription(clubId, price, product) {
    return addDoc(
      collection(this.firestore, `/club/${clubId}/checkout_sessions/`),
      {
        userId: this.authService.auth.currentUser.uid,
        subscriptionType: product.metadata.subscription,
        price: price.id,
        allow_promotion_codes: true,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      },
    );
  }

  checkoutAddon(clubId, price, product) {
    return addDoc(
      collection(this.firestore, `/club/${clubId}/checkout_sessions/`),
      {
        userId: this.authService.auth.currentUser.uid,
        subscriptionType: product.metadata.type,
        addon: product.metadata.addon,
        price: price.id,
        allow_promotion_codes: true,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      },
    );
  }

  getCheckoutSession(clubId: string, checkout_session_id: string) {
    const checkoutSessionRef = doc(
      this.firestore,
      `club/${clubId}/checkout_sessions/${checkout_session_id}`,
    );
    return runInInjectionContext(this.injector, () =>
      docData(checkoutSessionRef, {
        idField: "id",
      }),
    ) as unknown as Observable<any>;
  }

  getTeamTrainings(teamId: string): Observable<any[]> {
    return runInInjectionContext(this.injector, () => {
      const trainingsRef = collection(
        this.firestore,
        "teams",
        teamId,
        "trainings",
      );
      const q = query(trainingsRef, orderBy("date", "desc"));
      return collectionData(q);
    }) as Observable<any[]>;
  }

  // Club Links
  getClubLinks(clubId: string): Observable<ClubLink[]> {
    return runInInjectionContext(this.injector, () => {
      return collectionData(
        query(
          collection(this.firestore, `club/${clubId}/links`),
          orderBy("order"),
        ),
        { idField: "id" },
      );
    }) as Observable<ClubLink[]>;
  }

  getClubLinksShowOnCard(clubId: string): Observable<ClubLink[]> {
    return runInInjectionContext(this.injector, () => {
      return collectionData(
        query(
          collection(this.firestore, `club/${clubId}/links`),
          where("showOnCard", "==", true),
          orderBy("order"),
        ),
        { idField: "id" },
      ).pipe(shareReplay(1));
    }) as Observable<ClubLink[]>;
  }

  async addClubLink(clubId: string, link: any): Promise<DocumentReference> {
    const linksRef = collection(this.firestore, `club/${clubId}/links`);

    // Hole alle existierenden Links
    const linksSnapshot = await getDocs(linksRef);
    const currentOrder = linksSnapshot.size; // Die Größe der Collection gibt uns die Anzahl der Links

    const newLink = {
      order: currentOrder || 0,
      ...link,
    };
    return addDoc(linksRef, newLink);
  }

  async updateClubLink(
    clubId: string,
    linkId: string,
    link: any,
  ): Promise<void> {
    const linkRef = doc(this.firestore, `club/${clubId}/links/${linkId}`);
    await updateDoc(
      linkRef,
      {
        ...link,
      },
      {
        merge: true,
      },
    );
  }

  async deleteClubLink(clubId: string, linkId: string): Promise<void> {
    const linkRef = doc(this.firestore, `club/${clubId}/links/${linkId}`);
    try {
      const storageRef = ref(this.storage, `club/${clubId}/links/${linkId}`);
      await deleteObject(storageRef);
    } catch (error) {
      console.error("Fehler beim Löschen des Links:", error);
    }
    return deleteDoc(linkRef);
  }

  async updateLinkOrder(
    clubId: string,
    links: { id: string; order: number }[],
  ): Promise<void> {
    const batch = writeBatch(this.firestore);

    links.forEach((link) => {
      const linkRef = doc(this.firestore, `club/${clubId}/links/${link.id}`);
      batch.update(linkRef, { order: link.order, updatedAt: new Date() });
    });

    return batch.commit();
  }

  async uploadClubLinkFile(
    clubId: string,
    linkId: string,
    file: File,
  ): Promise<string> {
    const filePath = `club/${clubId}/links/${linkId}`;
    const storageRef = ref(this.storage, filePath);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  }

  /**
   * Setzt das Team-Logo (upload + update Firestore)
   */
  async setTeamLogo(teamId: string, photo: Photo) {
    // Bild im Storage ablegen
    const storageRef = ref(
      this.storage,
      `teams/${teamId}/logo.${photo.format}`,
    );
    await uploadBytes(storageRef, this.base64ToUint8Array(photo.base64String), {
      contentType: `image/${photo.format}`,
    });
    const url = await getDownloadURL(storageRef);
    // Firestore-Dokument aktualisieren
    const teamRef = doc(this.firestore, `teams/${teamId}`);
    await updateDoc(teamRef, { logo: url });
    return url;
  }

  /**
   * Setzt das Club-Logo (upload + update Firestore)
   */
  async setClubLogo(clubId: string, photo: Photo) {
    // Bild im Storage ablegen
    const storageRef = ref(this.storage, `club/${clubId}/logo.${photo.format}`);
    await uploadBytes(storageRef, this.base64ToUint8Array(photo.base64String), {
      contentType: `image/${photo.format}`,
    });
    const url = await getDownloadURL(storageRef);
    // Firestore-Dokument aktualisieren
    const clubRef = doc(this.firestore, `club/${clubId}`);
    await updateDoc(clubRef, { logo: url });
    return url;
  }

  /**
   * Hilfsfunktion: base64 zu Uint8Array
   */
  private base64ToUint8Array(base64: string): Uint8Array {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  async setClubAttribute(clubId: string, fieldname: string, value: any) {
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return updateDoc(clubRef, { [fieldname]: value });
  }

  async setClubCreditor(clubId: string, creditor: any) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    await updateDoc(clubRef, { creditor });
  }

  async setClubSurcharges(
    clubId: string,
    surcharges: { name: string; amount: number; currency: string }[],
  ) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return updateDoc(clubRef, { surcharges });
  }

  // Teams eines Clubs anhand der clubId laden (für Club-Abrechnungsseite)
  getTeamsByClubId(clubId: string) {
    return this.getClubTeamList(clubId);
  }
}
