import { Injectable, inject } from "@angular/core";
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  setDoc,
  Timestamp,
  updateDoc,
  limit,
  orderBy,
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
  last,
  takeLast,
} from "rxjs";
import { Club } from "../models/club";
import { Team } from "../models/team";
import { User } from "@angular/fire/auth";

import { AuthService } from "src/app/services/auth.service";
import { query, where } from "@angular/fire/firestore";
import { Profile } from "../models/user";
import { collectionGroup } from "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  user: User;

  constructor(
    private readonly firestore: Firestore,
    private readonly authService: AuthService,
  ) {}

  getProduct(productId: string) {
    const productRef = doc(this.firestore, `stripeProducts/${productId}`);
    return docData(productRef, { idField: "id" }) as unknown as Observable<any>;
  }

  getProducts() {
    const productListRef = collection(this.firestore, `stripeProducts`);
    const q = query(
      productListRef,
      where("active", "==", true),
      where("stripe_metadata_type", "==", "base"),
    );
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getModules() {
    const productListRef = collection(this.firestore, `stripeProducts`);
    const q = query(
      productListRef,
      where("active", "==", true),
      where("stripe_metadata_type", "==", "module"),
    );
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getPrices(productId: string) {
    const productPricesListRef = collection(
      this.firestore,
      `stripeProducts/${productId}/prices`,
    );

    const q = query(productPricesListRef, where("active", "==", true));

    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getClubList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.getUserClubRefs(user);
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
        clubsWithDetails.filter(
          (club): club is Club => club !== null && club !== undefined,
        ),
      ),
      // shareReplay(),
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
        clubsWithDetails.filter(
          (club): club is Club => club !== null && club !== undefined,
        ),
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
        clubsWithDetails.filter(
          (club): club is Club => club && club.id === clubId,
        ),
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
        return this.getUserTeamRefs(user);
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
        console.log("teamsWithDetails", teamsWithDetails);
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
    return collectionData(clubMemberRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Profile[]>;
  }

  getClubParentsRefs(clubId: string): Observable<Profile[]> {
    const clubParentRefList = collection(
      this.firestore,
      `club/${clubId}/parents`,
    );
    return collectionData(clubParentRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Profile[]>;
  }

  getClubMemberRef(clubId: string, userId: string): Observable<Profile> {
    const clubMemberRef = doc(
      this.firestore,
      `club/${clubId}/members/${userId}`,
    );
    return docData(clubMemberRef, {
      idField: "id",
    }).pipe(shareReplay(1)) as unknown as Observable<Profile>;
  }

  getClubAdminRefs(clubId: string): Observable<Profile[]> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/admins`,
    );
    return collectionData(clubMemberRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Profile[]>;
  }

  getClubRequestRefs(clubId: string): Observable<Profile[]> {
    const clubRequestRefList = collection(
      this.firestore,
      `club/${clubId}/requests`,
    );
    return collectionData(clubRequestRefList, {
      idField: "id",
    }) as Observable<Profile[]>;
  }

  getTeamRequestRefs(teamId: string): Observable<Profile[]> {
    const teamRequestRefList = collection(
      this.firestore,
      `teams/${teamId}/requests`,
    );
    return collectionData(teamRequestRefList, {
      idField: "id",
    }) as Observable<Profile[]>;
  }

  getTeamRef(teamId) {
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return docData(teamRef, { idField: "id" }).pipe(
      shareReplay(10),
    ) as Observable<Team>;
  }

  getUserTeamRefs(user: User): Observable<Team[]> {
    const teamRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/teams`,
    );
    return collectionData(teamRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Team[]>;
  }

  getUserTeamAdminRefs(user: User): Observable<Team[]> {
    const teamRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/teamAdmin`,
    );
    return collectionData(teamRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Team[]>;
  }

  getUserClubAdminRefs(user: User): Observable<Club[]> {
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubAdmin`,
    );
    return collectionData(clubRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Club[]>;
  }

  getUserClubRequestRefs(user: User): Observable<any> {
    const requestRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubRequests`,
    );
    return collectionData(requestRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  getUserClubRequestRef(userId: string, requestId: string): Observable<any> {
    const requestRef = doc(
      this.firestore,
      `/userProfile/${userId}/clubRequests/${requestId}`,
    );
    return docData(requestRef, { idField: "id" }) as Observable<any>;
  }

  getUserTeamRequestRefs(user: User): Observable<any> {
    const requestRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/teamRequests`,
    );
    return collectionData(requestRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  getUserTeamRequestRef(userId: string, requestId: string): Observable<any> {
    const requestRef = doc(
      this.firestore,
      `/userProfile/${userId}/teamRequests/${requestId}`,
    );
    return docData(requestRef, { idField: "id" }) as Observable<any>;
  }

  getClubTeamRefs(clubId: string): Observable<Team[]> {
    const teamRefList = collection(this.firestore, `club/${clubId}/teams`);
    return collectionData(teamRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Team[]>;
  }

  getTeamMemberRefs(teamId: string): Observable<Profile[]> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/members`,
    );
    return collectionData(teamMemberRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Profile[]>;
  }

  getTeamAdminRefs(teamId: string): Observable<Profile[]> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/admins`,
    );
    return collectionData(teamMemberRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Profile[]>;
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }

  getClubRef(clubId: string) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return docData(clubRef, { idField: "id" }).pipe(
      shareReplay(1),
    ) as unknown as Observable<Club>;
  }

  getUserClubRefs(user: User): Observable<Club[]> {
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubs`,
    );
    return collectionData(clubRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Club[]>;
  }

  getClubTeamsRef(clubId: string): Observable<Team[]> {
    const clubTeamRefList = collection(this.firestore, `club/${clubId}/teams`);
    return collectionData(clubTeamRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<Team[]>;
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
      {},
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
    return collectionData(clubCheckoutSessionListRef, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getClubSubscriptionList(clubId: string) {
    const clubSubscriptionistRef = collection(
      this.firestore,
      `club/${clubId}/subscriptions`,
    );
    return collectionData(clubSubscriptionistRef, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getClubSubscriptionInvoiceList(clubId: string, subscriptionId: string) {
    const clubSubscriptionInvoiceistRef = collection(
      this.firestore,
      `club/${clubId}/subscriptions/${subscriptionId}/invoices`,
    );
    return collectionData(clubSubscriptionInvoiceistRef, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getClubPaymentList(clubId: string) {
    const clubPaymentsListRef = collection(
      this.firestore,
      `club/${clubId}/payments`,
    );
    return collectionData(clubPaymentsListRef, {
      idField: "id",
    }) as Observable<any[]>;
  }

  searchClubListRef(searchString: string): Observable<Club[]> {
    console.log("DEBUG: Suche nach:", searchString);
    const clubRefList = collection(this.firestore, "club");

    return collectionData(clubRefList, { idField: "id" }).pipe(
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
    ) as Observable<Club[]>;
  }

  getClubsByContactEmail(): Observable<Club[]> {
    return this.authService.getUser$().pipe(
      take(1),
      switchMap((user) => {
        if (!user) return of([]);
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
      }),
    );
  }

  getActiveClubList(): Observable<Club[]> {
    const clubRefList = collection(this.firestore, `club/`);
    const q = query(clubRefList, where("active", "==", true));
    return collectionData(q, { idField: "id" }) as Observable<Club[]>;
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
    return docData(checkoutSessionRef, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  getTeamTrainings(teamId: string): Observable<any[]> {
    const trainingsRef = collection(
      this.firestore,
      "teams",
      teamId,
      "trainings",
    );
    const q = query(trainingsRef, orderBy("date", "desc"));
    return collectionData(q) as Observable<any[]>;
  }
}
