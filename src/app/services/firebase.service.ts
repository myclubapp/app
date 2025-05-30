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
} from "rxjs";
import {
  Club,
} from "../models/club";
import { Team } from "../models/team";
import { User } from "@angular/fire/auth";

import { AuthService } from "src/app/services/auth.service";
import { query, where } from "@angular/fire/firestore";
import { Profile } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  user: User;
  constructor(
    private readonly firestore: Firestore,
    private readonly authService: AuthService
  ) { }


  getProduct(productId: string){
    // console.log(productId)
    // /stripeProducts/prod_QPZ8862s0O2Kli
    const productRef = doc(this.firestore, `stripeProducts/${productId}`);
    return docData(productRef, { idField: "id" }) as unknown as Observable<any>;
  }


  getProducts() {
    const productListRef = collection(
      this.firestore,
      `stripeProducts`
    );
    const q = query(productListRef, where("active", "==", true), where("stripe_metadata_type", "==", "base"));
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
    
  }
  getModules() {
    const productListRef = collection(
      this.firestore,
      `stripeProducts`
    );
    const q = query(productListRef, where("active", "==", true), where("stripe_metadata_type", "==", "module"));
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
    
  }
  getPrices(productId: string) {
    const productPricesListRef = collection(
      this.firestore,
      `stripeProducts/${productId}/prices`
    );

    const q = query(productPricesListRef, where("active", "==", true));

    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
    
  }

  checkoutSubscription(clubId, price, product){
    return addDoc(
      collection(this.firestore, `/club/${clubId}/checkout_sessions/`),
      {
        userId: this.authService.auth.currentUser.uid,
        subscriptionType: product.metadata.subscription,
        price: price.id,
        allow_promotion_codes: true,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
  }
  checkoutAddon(clubId, price, product){
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
      }
    );
  }

  getCheckoutSession(clubId: string, checkout_session_id: string){
    const checkoutSessionRef = doc(this.firestore, `club/${clubId}/checkout_sessions/${checkout_session_id}`);
    return docData(checkoutSessionRef, { idField: "id" }) as unknown as Observable<any>;
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
      // tap((clubs) => console.log("Clubs:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.getClubRef(club.id).pipe(
              catchError(() => of(null)) // In case of error, return null for this club
            )
          )
        );
      }),
      map((clubsWithDetails) =>
        clubsWithDetails.filter((club) => club !== null)
      ), // Filter out null (error cases)
      // tap((results) => console.log("Final results with all clubs:", results)),
      catchError((err) => {
        console.error("Error in getClubList:", err);
        return of([]); // Return an empty array on error
      })
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
      // tap((clubs) => console.log("Admin Clubs:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.getClubRef(club.id).pipe(
              catchError(() => of(null)) // In case of error, return null for this club
            )
          )
        );
      }),
      map((clubsWithDetails) =>
        clubsWithDetails.filter((club) => club !== null)
      ), // Filter out null (error cases)
      // tap((results) => console.log("Final results with all clubs:", results)),
      catchError((err) => {
        console.error("Error in getClubList:", err);
        return of([]); // Return an empty array on error
      })
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
                    this.getClubRef(club.id).pipe(
                        catchError(() => of(null)) // In case of error, return null for this club
                    )
                )
            );
        }),
        map((clubsWithDetails) => 
            clubsWithDetails.filter((club) => club && club.id === clubId)
        ), // Filter clubs by clubId and remove null entries
        catchError((err) => {
            console.error("Error in getClubAdminListByClubId:", err);
            return of([]); // Return an empty array on error
        })
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
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.getTeamRef(team.id).pipe(
              catchError(() => of(null)) // In case of error, return null for this team
            )
          )
        );
      }),
      map((teamsWithDetails) =>
        teamsWithDetails.filter((team) => team !== null)
      ), // Filter out null (error cases)
      // tap((results) => console.log("Final results with all teams:", results)),
      catchError((err) => {
        console.error("Error in getTeamList:", err);
        return of([]); // Return an empty array on error
      })
    );
  }

  getClubTeamList(clubId: string): Observable<Team[]> {
    return this.getClubTeamsRef(clubId).pipe(
      tap((teams) => {
        if (teams.length === 0) {
          console.log("Keine Teams für diesen Club gefunden");
        } else {
          console.log("Lade Details für Teams im Club:", teams.map(team => team.id));
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
                console.error(`Fehler beim Laden der Team-Details für Team ${team.id}:`, error.message);
                return of(null);
              })
            )
          )
        );
      }),
      map((teamsWithDetails) => {
        const filteredTeams = teamsWithDetails.filter((team): team is Team => team !== null);
        if (filteredTeams.length !== teamsWithDetails.length) {
          console.warn(`Einige Teams konnten nicht geladen werden. ${filteredTeams.length} von ${teamsWithDetails.length} Teams erfolgreich geladen.`);
        }
        return filteredTeams;
      }),
      catchError((err) => {
        console.error("Fehler beim Laden der Club-Teams:", err);
        return of([]);
      })
    );
  }

  addClubTeam(team, clubId){
    return addDoc(
      collection(this.firestore, `/club/${clubId}/teams/`),
      team
    );
  }
  addClubRole(clubId, roleArray){
    return setDoc(
      doc(this.firestore, `club/${clubId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      }
    );
  }
  addClubMemberRole(clubId, memberId, roleArray){
    return setDoc(
      doc(this.firestore, `club/${clubId}/members/${memberId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      }
    );
  }

  addTeamRole(teamId, roleArray){
    return setDoc(
      doc(this.firestore, `teams/${teamId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      }
    );
  }
  addTeamMemberRole(teamId, memberId, roleArray){
    return setDoc(
      doc(this.firestore, `teams/${teamId}/members/${memberId}`),
      {
        roles: roleArray,
      },
      {
        merge: true,
      }
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
      // log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.getTeamRef(team.id).pipe(
              catchError(() => of(null)) // In case of error, return null for this team
            )
          )
        );
      }),
      map((teamsWithDetails) =>
        teamsWithDetails.filter((team) => team !== null)
      ), // Filter out null (error cases)
      // tap((results) => console.log("Final results with all teams:", results)),
      catchError((err) => {
        console.error("Error in getTeamList:", err);
        return of([]); // Return an empty array on error
      })
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
            return combineLatest(
                teams.map((team) =>
                    this.getTeamRef(team.id).pipe(
                        catchError(() => of(null)) // In case of error, return null for this team
                    )
                )
            );
        }),
        map((teamsWithDetails) => 
            teamsWithDetails.filter((team) => team && team.clubId === clubId)
        ), // Filter teams by clubId and remove null entries
        catchError((err) => {
            console.error("Error in getTeamAdminListByClubId:", err);
            return of([]); // Return an empty array on error
        })
    );
}

  /* CLUBS */
  getClubCheckoutSessionsList(clubId: string){
    const clubCheckoutSessionListRef = collection(
      this.firestore,
      `club/${clubId}/checkout_sessions`
    );
    return collectionData(clubCheckoutSessionListRef, {
      idField: "id",
    }) as Observable<any[]>;
    
  }
  getClubSubscriptionList(clubId: string){
    const clubSubscriptionistRef = collection(
      this.firestore,
      `club/${clubId}/subscriptions`
    );
    return collectionData(clubSubscriptionistRef, {
      idField: "id",
    }) as Observable<any[]>;
    
  }

  getClubSubscriptionInvoiceList(clubId: string, subscriptionId: string){
    const clubSubscriptionInvoiceistRef = collection(
      this.firestore,
      `club/${clubId}/subscriptions/${subscriptionId}/invoices`
    );
    return collectionData(clubSubscriptionInvoiceistRef, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getClubPaymentList(clubId: string){
    const clubPaymentsListRef = collection(
      this.firestore,
      `club/${clubId}/payments`
    );
    return collectionData(clubPaymentsListRef, {
      idField: "id",
    }) as Observable<any[]>;
  }


  getClubRef(clubId: string) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return docData(clubRef, { idField: "id" }) as unknown as Observable<Club>;
  }

  searchClubListRef(searchString: string): Observable<Club[]> {
    const clubRefList = collection(this.firestore, `club/`);

    // const q = query(clubRefList, where("name", "==", searchString));
    return collectionData(clubRefList, { idField: "id" }) as Observable<Club[]>;
  }

  getActiveClubList(): Observable<Club[]> {
    const clubRefList = collection(this.firestore, `club/`);

    const q = query(clubRefList, where("active", "==", true));
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Club[]
    >;
  }

  getUserClubRefs(user: User): Observable<Club[]> {
    //console.log(user);
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubs`
    );
    return collectionData(clubRefList, {
      idField: "id",
    }) as Observable<Club[]>;
  }

  getClubTeamsRef(clubId: string): Observable<Team[]> {
    const clubTeamRefList = collection(
      this.firestore,
      `club/${clubId}/teams`
    );
    return collectionData(clubTeamRefList, {
      idField: "id",
    }) as Observable<Team[]>;
  }

  getClubMemberRefs(clubId: string): Observable<Profile[]> {
    // console.log(clubId);
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/members`
    );
    return collectionData(clubMemberRefList, {
      idField: "id",
    }) as Observable<Profile[]>;
  }

  getClubParentsRefs(clubId: string): Observable<Profile[]> {
    // console.log(clubId);
    const clubParentRefList = collection(
      this.firestore,
      `club/${clubId}/parents`
    );
    return collectionData(clubParentRefList, {
      idField: "id",
    }) as Observable<Profile[]>;
  }



  getClubMemberRef(clubId: string, userId: string): Observable<Profile> {
    const clubMemberRef = doc(this.firestore, `club/${clubId}/members/${userId}`);
    return docData(clubMemberRef, { idField: "id" }) as unknown as Observable<Profile>;
  }

  setHelferPunkte(clubId: string, userId: string, helferPunkte: number) {
    const clubMemberRef = doc(this.firestore, `club/${clubId}/members/${userId}`);
    console.log('helferPunkte', clubId, userId, helferPunkte);
    return updateDoc(clubMemberRef, { helferPunkte: helferPunkte});
  }



  getClubAdminRefs(clubId: string): Observable<Profile[]> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/admins`
    );
    return collectionData(clubMemberRefList, {
      idField: "id",
    }) as Observable<Profile[]>;
  }

  getClubRequestRefs(clubId: string): Observable<Profile[]> {
    const clubRequestRefList = collection(
      this.firestore,
      `club/${clubId}/requests`
    );
    return collectionData(clubRequestRefList, {
      idField: "id",
    }) as unknown as Observable<Profile[]>;
  }

  getTeamRequestRefs(teamId: string): Observable<Profile[]> {
    const teamRequestRefList = collection(
      this.firestore,
      `teams/${teamId}/requests`
    );
    return collectionData(teamRequestRefList, {
      idField: "id",
    }) as unknown as Observable<Profile[]>;
  }

  /* TEAMS */
  getTeamRef(teamId) {
    // console.log(`Read Team ${teamId}`);
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return docData(teamRef, { idField: "id" }) as Observable<Team>;
  }

  getUserTeamRefs(user: User): Observable<Team[]> {
    const teamRefLIst = collection(
      this.firestore,
      `userProfile/${user.uid}/teams`
    );
    return collectionData(teamRefLIst, {
      idField: "id",
    }) as Observable<Team[]>;
  }

  getUserTeamAdminRefs(user: User): Observable<Team[]> {
    const teamRefLIst = collection(
      this.firestore,
      `userProfile/${user.uid}/teamAdmin`
    );
    return collectionData(teamRefLIst, {
      idField: "id",
    }) as Observable<Team[]>;
  }

  getUserClubAdminRefs(user: User): Observable<Club[]> {
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubAdmin`
    );
    return collectionData(clubRefList, {
      idField: "id",
    }) as Observable<Club[]>;
  }

  getUserClubRequestRefs(user: User): Observable<any> {
    const requestRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubRequests`
    );
    return collectionData(requestRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }
  getUserClubRequestRef(userId: string, requestId: string): Observable<any> {
    const requestRef = doc(
      this.firestore,
      `/userProfile/${userId}/clubRequests/${requestId}`
    );
    return docData(requestRef, { idField: "id" }) as Observable<any>;
  }

  getUserTeamRequestRefs(user: User): Observable<any> {
    const requestRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/teamRequests`
    );
    return collectionData(requestRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }
  getUserTeamRequestRef(userId: string, requestId: string): Observable<any> {
    const requestRef = doc(
      this.firestore,
      `/userProfile/${userId}/teamRequests/${requestId}`
    );
    return docData(requestRef, { idField: "id" }) as Observable<any>;
  }

  approveUserClubRequest(clubId: string, userId: string, isParent: boolean): Promise<any> {
    // console.log("club " + clubId, " / userid " + userId);
    return setDoc(
      doc(this.firestore, `/club/${clubId}/requests/${userId}`),
      { 
        approveDateTime: Timestamp.now(),
        isParent: isParent,
        approve: true,
      },
      {
        merge: true,
      }
    );
  }

  async approveParentClubRequest(clubId: string, userId: string): Promise<any> {
    // console.log("club " + clubId, " / userid " + userId);
    // Trigger runs only for changed, so we need to set the parent to true first
    await setDoc(
      doc(this.firestore, `/club/${clubId}/requests/${userId}`),
      { },
      {
        merge: true,
      }
    );
    // Then trigger update event on backend --> handled
    return setDoc(
      doc(this.firestore, `/club/${clubId}/requests/${userId}`),
      { 
        approveDateTime: Timestamp.now(),
        isParent: true,
        approve: true,
      },
      {
        merge: true,
      }
    );
  }

  async approveUserTeamRequest(teamId: string, userId: string): Promise<any> {
    // trigger create event on backend -> not handled, because no status field for approve
    await setDoc(
      doc(this.firestore, `teams/${teamId}/requests/${userId}`),
      {},
      {
        merge: true,
      }
    );
    // then trigger update event on backend --> handled
    // --> only "modify" event is handled
    return setDoc(
      doc(this.firestore, `teams/${teamId}/requests/${userId}`),
      {
        approve: true,
      },
      {
        merge: true,
      }
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
      }
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
      }
    );
  }

  getClubTeamRefs(clubId: string): Observable<Team[]> {
    const teamRefLIst = collection(this.firestore, `club/${clubId}/teams`);
    return collectionData(teamRefLIst, {
      idField: "id",
    }) as Observable<Team[]>;
  }

  getTeamMemberRefs(teamId: string): Observable<Profile[]> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/members`
    );
    return collectionData(teamMemberRefList, {
      idField: "id",
    }) as Observable<Profile[]>;
  }

  getTeamAdminRefs(teamId: string): Observable<Profile[]> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/admins`
    );
    return collectionData(teamMemberRefList, {
      idField: "id",
    }) as Observable<Profile[]>;
  }
  // User Perspective via Requests
  async setClubRequest(clubId: string, userId: string, isParent: boolean) {
    // const user = await this.authService.getUser();
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      doc(this.firestore, `userProfile/${userId}/clubRequests`, clubId),
      {
        clubRef: clubRef,
        isParent: isParent,
      }
    );
  }
  async setTeamRequest(teamId: string, userId: string) {
    // const user = await this.authService.getUser();
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return setDoc(
      doc(this.firestore, `userProfile/${userId}/teamRequests`, teamId),
      {
        teamRef: teamRef,
      }
    );
  }

  setClubHelferReportingDate(clubId, fieldname, date){
    const teamRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      teamRef,
      {
        [fieldname]: date,
      },{
        merge: true
      }
    );

  }


  setTeamThreshold(teamId, fieldname, threshold: number){
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return setDoc(
      teamRef,
      {
        [fieldname]: threshold,
      },{
        merge: true
      }
    );
  }


  setClubThreshold(clubId, fieldname, threshold: number){
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      clubRef,
      {
        [fieldname]: threshold,
      },{
        merge: true
      }
    );
  }


  // User Perspective
  async leaveTeam(teamId: string, userId: string){
    return deleteDoc(doc(this.firestore, `userProfile/${userId}/teams/${teamId}`));
  }

  async deleteTeam(teamId: string){
      return deleteDoc(doc(this.firestore, `teams/${teamId}`));
  }
  // ADMIN PERSPECTIVE via direct add/delete -> Backend handels other assignments.
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
        "userProfileRef": userId,
      },
      {
        merge: true,
      }
    );
  }

  async deleteClubParent(clubId: string, userId: string): Promise<any> {
    await deleteDoc(
      doc(this.firestore, `club/${clubId}/parents/${userId}`),
    );
  }

  async deleteClubember(clubId: string, userId: string): Promise<any> {
    await deleteDoc(
      doc(this.firestore, `club/${clubId}/members/${userId}`),
    );
  }
  async deleteClubAdmin(clubId: string, userId: string): Promise<any> {
    await deleteDoc(
      doc(this.firestore, `club/${clubId}/admins/${userId}`),
    );
  }
  async addClubAdmin(clubId: string, userId: string): Promise<any> {
    return setDoc(
      doc(this.firestore, `/club/${clubId}/admins/${userId}`),
      {
        "userProfileRef": userId,
      },
      {
        merge: true,
      }
    );
  }
}
