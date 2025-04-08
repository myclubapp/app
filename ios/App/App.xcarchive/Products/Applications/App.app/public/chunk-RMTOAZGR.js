import {
  AuthService,
  Firestore,
  Timestamp,
  addDoc,
  collection2 as collection,
  collectionData,
  deleteDoc2 as deleteDoc,
  doc2 as doc,
  docData,
  query2 as query,
  setDoc2 as setDoc,
  where2 as where
} from "./chunk-AMO7VPPH.js";
import {
  catchError,
  combineLatest,
  inject,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PZUQX53K.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// src/app/services/firebase.service.ts
var _FirebaseService = class _FirebaseService {
  constructor(firestore = inject(Firestore), authService) {
    this.firestore = firestore;
    this.authService = authService;
  }
  getProduct(productId) {
    const productRef = doc(this.firestore, `stripeProducts/${productId}`);
    return docData(productRef, { idField: "id" });
  }
  getProducts() {
    const productListRef = collection(this.firestore, `stripeProducts`);
    const q = query(productListRef, where("active", "==", true), where("stripe_metadata_type", "==", "base"));
    return collectionData(q, {
      idField: "id"
    });
  }
  getModules() {
    const productListRef = collection(this.firestore, `stripeProducts`);
    const q = query(productListRef, where("active", "==", true), where("stripe_metadata_type", "==", "module"));
    return collectionData(q, {
      idField: "id"
    });
  }
  getPrices(productId) {
    const productPricesListRef = collection(this.firestore, `stripeProducts/${productId}/prices`);
    const q = query(productPricesListRef, where("active", "==", true));
    return collectionData(q, {
      idField: "id"
    });
  }
  checkoutSubscription(clubId, price, product) {
    return addDoc(collection(this.firestore, `/club/${clubId}/checkout_sessions/`), {
      userId: this.authService.auth.currentUser.uid,
      subscriptionType: product.metadata.subscription,
      price: price.id,
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });
  }
  checkoutAddon(clubId, price, product) {
    return addDoc(collection(this.firestore, `/club/${clubId}/checkout_sessions/`), {
      userId: this.authService.auth.currentUser.uid,
      subscriptionType: product.metadata.type,
      addon: product.metadata.addon,
      price: price.id,
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });
  }
  getCheckoutSession(clubId, checkout_session_id) {
    const checkoutSessionRef = doc(this.firestore, `club/${clubId}/checkout_sessions/${checkout_session_id}`);
    return docData(checkoutSessionRef, { idField: "id" });
  }
  getClubList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user)
          return of([]);
        return this.getUserClubRefs(user);
      }),
      // tap((clubs) => console.log("Clubs:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0)
          return of([]);
        return combineLatest(clubs.map((club) => this.getClubRef(club.id).pipe(
          catchError(() => of(null))
          // In case of error, return null for this club
        )));
      }),
      map((clubsWithDetails) => clubsWithDetails.filter((club) => club !== null)),
      // Filter out null (error cases)
      // tap((results) => console.log("Final results with all clubs:", results)),
      catchError((err) => {
        console.error("Error in getClubList:", err);
        return of([]);
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
        if (!user)
          return of([]);
        return this.getUserClubAdminRefs(user);
      }),
      // tap((clubs) => console.log("Admin Clubs:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0)
          return of([]);
        return combineLatest(clubs.map((club) => this.getClubRef(club.id).pipe(
          catchError(() => of(null))
          // In case of error, return null for this club
        )));
      }),
      map((clubsWithDetails) => clubsWithDetails.filter((club) => club !== null)),
      // Filter out null (error cases)
      // tap((results) => console.log("Final results with all clubs:", results)),
      catchError((err) => {
        console.error("Error in getClubList:", err);
        return of([]);
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
        if (!user)
          return of([]);
        return this.getUserClubAdminRefs(user);
      }),
      mergeMap((clubs) => {
        if (clubs.length === 0)
          return of([]);
        return combineLatest(clubs.map((club) => this.getClubRef(club.id).pipe(
          catchError(() => of(null))
          // In case of error, return null for this club
        )));
      }),
      map((clubsWithDetails) => clubsWithDetails.filter((club) => club && club.id === clubId)),
      // Filter clubs by clubId and remove null entries
      catchError((err) => {
        console.error("Error in getClubAdminListByClubId:", err);
        return of([]);
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
        if (!user)
          return of([]);
        return this.getUserTeamRefs(user);
      }),
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0)
          return of([]);
        return combineLatest(teams.map((team) => this.getTeamRef(team.id).pipe(
          catchError(() => of(null))
          // In case of error, return null for this team
        )));
      }),
      map((teamsWithDetails) => teamsWithDetails.filter((team) => team !== null)),
      // Filter out null (error cases)
      // tap((results) => console.log("Final results with all teams:", results)),
      catchError((err) => {
        console.error("Error in getTeamList:", err);
        return of([]);
      })
    );
  }
  getClubTeamList(clubId) {
    return this.getClubTeamsRef(clubId).pipe(tap((teams) => {
      if (teams.length === 0) {
        console.log("No teams found for club");
      } else {
        console.log("Fetching details for teams in club:", teams.map((team) => team.id));
      }
    }), mergeMap((teams) => {
      if (teams.length === 0) {
        return of([]);
      }
      return combineLatest(teams.map((team) => this.getTeamRef(team.id).pipe(catchError((error) => {
        console.error(`Error fetching details for team ${team.id}:`, error.message);
        return of(null);
      }))));
    }), map((teamsWithDetails) => {
      const filteredTeams = teamsWithDetails.filter((team) => team !== null);
      return filteredTeams;
    }), catchError((err) => {
      console.error("Error in getClubTeamsWithDetails:", err);
      return of([]);
    }));
  }
  addClubTeam(team, clubId) {
    return addDoc(collection(this.firestore, `/club/${clubId}/teams/`), team);
  }
  addClubRole(clubId, roleArray) {
    return setDoc(doc(this.firestore, `club/${clubId}`), {
      roles: roleArray
    }, {
      merge: true
    });
  }
  addClubMemberRole(clubId, memberId, roleArray) {
    return setDoc(doc(this.firestore, `club/${clubId}/members/${memberId}`), {
      roles: roleArray
    }, {
      merge: true
    });
  }
  addTeamRole(teamId, roleArray) {
    return setDoc(doc(this.firestore, `teams/${teamId}`), {
      roles: roleArray
    }, {
      merge: true
    });
  }
  addTeamMemberRole(teamId, memberId, roleArray) {
    return setDoc(doc(this.firestore, `teams/${teamId}/members/${memberId}`), {
      roles: roleArray
    }, {
      merge: true
    });
  }
  getTeamAdminList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user)
          return of([]);
        return this.getUserTeamAdminRefs(user);
      }),
      // log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0)
          return of([]);
        return combineLatest(teams.map((team) => this.getTeamRef(team.id).pipe(
          catchError(() => of(null))
          // In case of error, return null for this team
        )));
      }),
      map((teamsWithDetails) => teamsWithDetails.filter((team) => team !== null)),
      // Filter out null (error cases)
      // tap((results) => console.log("Final results with all teams:", results)),
      catchError((err) => {
        console.error("Error in getTeamList:", err);
        return of([]);
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
        if (!user)
          return of([]);
        return this.getUserTeamAdminRefs(user);
      }),
      mergeMap((teams) => {
        if (teams.length === 0)
          return of([]);
        return combineLatest(teams.map((team) => this.getTeamRef(team.id).pipe(
          catchError(() => of(null))
          // In case of error, return null for this team
        )));
      }),
      map((teamsWithDetails) => teamsWithDetails.filter((team) => team && team.clubId === clubId)),
      // Filter teams by clubId and remove null entries
      catchError((err) => {
        console.error("Error in getTeamAdminListByClubId:", err);
        return of([]);
      })
    );
  }
  /* CLUBS */
  getClubCheckoutSessionsList(clubId) {
    const clubCheckoutSessionListRef = collection(this.firestore, `club/${clubId}/checkout_sessions`);
    return collectionData(clubCheckoutSessionListRef, {
      idField: "id"
    });
  }
  getClubSubscriptionList(clubId) {
    const clubSubscriptionistRef = collection(this.firestore, `club/${clubId}/subscriptions`);
    return collectionData(clubSubscriptionistRef, {
      idField: "id"
    });
  }
  getClubSubscriptionInvoiceList(clubId, subscriptionId) {
    const clubSubscriptionInvoiceistRef = collection(this.firestore, `club/${clubId}/subscriptions/${subscriptionId}/invoices`);
    return collectionData(clubSubscriptionInvoiceistRef, {
      idField: "id"
    });
  }
  getClubPaymentList(clubId) {
    const clubPaymentsListRef = collection(this.firestore, `club/${clubId}/payments`);
    return collectionData(clubPaymentsListRef, {
      idField: "id"
    });
  }
  getClubRef(clubId) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return docData(clubRef, { idField: "id" });
  }
  searchClubListRef(searchString) {
    const clubRefList = collection(this.firestore, `club/`);
    return collectionData(clubRefList, { idField: "id" });
  }
  getActiveClubList() {
    const clubRefList = collection(this.firestore, `club/`);
    const q = query(clubRefList, where("active", "==", true));
    return collectionData(q, { idField: "id" });
  }
  getUserClubRefs(user) {
    const clubRefList = collection(this.firestore, `userProfile/${user.uid}/clubs`);
    return collectionData(clubRefList, {
      idField: "id"
    });
  }
  getClubTeamsRef(clubId) {
    const clubTeamRefList = collection(this.firestore, `club/${clubId}/teams`);
    return collectionData(clubTeamRefList, {
      idField: "id"
    });
  }
  getClubMemberRefs(clubId) {
    const clubMemberRefList = collection(this.firestore, `club/${clubId}/members`);
    return collectionData(clubMemberRefList, {
      idField: "id"
    });
  }
  getClubAdminRefs(clubId) {
    const clubMemberRefList = collection(this.firestore, `club/${clubId}/admins`);
    return collectionData(clubMemberRefList, {
      idField: "id"
    });
  }
  getClubRequestRefs(clubId) {
    const clubRequestRefList = collection(this.firestore, `club/${clubId}/requests`);
    return collectionData(clubRequestRefList, {
      idField: "id"
    });
  }
  getTeamRequestRefs(teamId) {
    const teamRequestRefList = collection(this.firestore, `teams/${teamId}/requests`);
    return collectionData(teamRequestRefList, {
      idField: "id"
    });
  }
  /* TEAMS */
  getTeamRef(teamId) {
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return docData(teamRef, { idField: "id" });
  }
  getUserTeamRefs(user) {
    const teamRefLIst = collection(this.firestore, `userProfile/${user.uid}/teams`);
    return collectionData(teamRefLIst, {
      idField: "id"
    });
  }
  getUserTeamAdminRefs(user) {
    const teamRefLIst = collection(this.firestore, `userProfile/${user.uid}/teamAdmin`);
    return collectionData(teamRefLIst, {
      idField: "id"
    });
  }
  getUserClubAdminRefs(user) {
    const clubRefList = collection(this.firestore, `userProfile/${user.uid}/clubAdmin`);
    return collectionData(clubRefList, {
      idField: "id"
    });
  }
  getUserClubRequestRefs(user) {
    const requestRefList = collection(this.firestore, `userProfile/${user.uid}/clubRequests`);
    return collectionData(requestRefList, {
      idField: "id"
    });
  }
  getUserClubRequestRef(userId, requestId) {
    const requestRef = doc(this.firestore, `/userProfile/${userId}/clubRequests/${requestId}`);
    return docData(requestRef, { idField: "id" });
  }
  getUserTeamRequestRefs(user) {
    const requestRefList = collection(this.firestore, `userProfile/${user.uid}/teamRequests`);
    return collectionData(requestRefList, {
      idField: "id"
    });
  }
  getUserTeamRequestRef(userId, requestId) {
    const requestRef = doc(this.firestore, `/userProfile/${userId}/teamRequests/${requestId}`);
    return docData(requestRef, { idField: "id" });
  }
  approveUserClubRequest(clubId, userId) {
    return setDoc(doc(this.firestore, `/club/${clubId}/requests/${userId}`), {
      approveDateTime: Timestamp.now(),
      approve: true
    }, {
      merge: true
    });
  }
  approveUserTeamRequest(teamId, userId) {
    return __async(this, null, function* () {
      yield setDoc(doc(this.firestore, `teams/${teamId}/requests/${userId}`), {}, {
        merge: true
      });
      return setDoc(doc(this.firestore, `teams/${teamId}/requests/${userId}`), {
        approve: true
      }, {
        merge: true
      });
    });
  }
  deleteUserClubRequest(clubId, userId) {
    return __async(this, null, function* () {
      return setDoc(doc(this.firestore, `club/${clubId}/requests/${userId}`), {
        approve: false
      }, {
        merge: true
      });
    });
  }
  deleteUserTeamRequest(teamId, userId) {
    return __async(this, null, function* () {
      return setDoc(doc(this.firestore, `teams/${teamId}/requests/${userId}`), {
        approve: false
      }, {
        merge: true
      });
    });
  }
  getClubTeamRefs(clubId) {
    const teamRefLIst = collection(this.firestore, `club/${clubId}/teams`);
    return collectionData(teamRefLIst, {
      idField: "id"
    });
  }
  getTeamMemberRefs(teamId) {
    const teamMemberRefList = collection(this.firestore, `teams/${teamId}/members`);
    return collectionData(teamMemberRefList, {
      idField: "id"
    });
  }
  getTeamAdminRefs(teamId) {
    const teamMemberRefList = collection(this.firestore, `teams/${teamId}/admins`);
    return collectionData(teamMemberRefList, {
      idField: "id"
    });
  }
  // User Perspective via Requests
  setClubRequest(clubId, userId) {
    return __async(this, null, function* () {
      const clubRef = doc(this.firestore, `/club/${clubId}`);
      return setDoc(doc(this.firestore, `userProfile/${userId}/clubRequests`, clubId), {
        clubRef
      });
    });
  }
  setTeamRequest(teamId, userId) {
    return __async(this, null, function* () {
      const teamRef = doc(this.firestore, `/teams/${teamId}`);
      return setDoc(doc(this.firestore, `userProfile/${userId}/teamRequests`, teamId), {
        teamRef
      });
    });
  }
  setClubHelferReportingDate(clubId, fieldname, date) {
    const teamRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(teamRef, {
      [fieldname]: date
    }, {
      merge: true
    });
  }
  setTeamThreshold(teamId, fieldname, threshold) {
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return setDoc(teamRef, {
      [fieldname]: threshold
    }, {
      merge: true
    });
  }
  setClubThreshold(clubId, fieldname, threshold) {
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(clubRef, {
      [fieldname]: threshold
    }, {
      merge: true
    });
  }
  // User Perspective
  leaveTeam(teamId, userId) {
    return __async(this, null, function* () {
      return deleteDoc(doc(this.firestore, `userProfile/${userId}/teams/${teamId}`));
    });
  }
  deleteTeam(teamId) {
    return __async(this, null, function* () {
      return deleteDoc(doc(this.firestore, `teams/${teamId}`));
    });
  }
  // ADMIN PERSPECTIVE via direct add/delete -> Backend handels other assignments.
  deleteTeamMember(teamId, userId) {
    return __async(this, null, function* () {
      return deleteDoc(doc(this.firestore, `teams/${teamId}/members/${userId}`));
    });
  }
  deleteTeamAdmin(teamId, userId) {
    return __async(this, null, function* () {
      yield deleteDoc(doc(this.firestore, `teams/${teamId}/admins/${userId}`));
    });
  }
  addTeamAdmin(teamId, userId) {
    return __async(this, null, function* () {
      return setDoc(doc(this.firestore, `/teams/${teamId}/admins/${userId}`), {
        "userProfileRef": userId
      }, {
        merge: true
      });
    });
  }
  deleteClubember(clubId, userId) {
    return __async(this, null, function* () {
      yield deleteDoc(doc(this.firestore, `club/${clubId}/members/${userId}`));
    });
  }
  deleteClubAdmin(clubId, userId) {
    return __async(this, null, function* () {
      yield deleteDoc(doc(this.firestore, `club/${clubId}/admins/${userId}`));
    });
  }
  addClubAdmin(clubId, userId) {
    return __async(this, null, function* () {
      return setDoc(doc(this.firestore, `/club/${clubId}/admins/${userId}`), {
        "userProfileRef": userId
      }, {
        merge: true
      });
    });
  }
};
_FirebaseService.\u0275fac = function FirebaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseService)(\u0275\u0275inject(Firestore), \u0275\u0275inject(AuthService));
};
_FirebaseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FirebaseService, factory: _FirebaseService.\u0275fac, providedIn: "root" });
var FirebaseService = _FirebaseService;

export {
  FirebaseService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgRmlyZXN0b3JlLFxuICBhZGREb2MsXG4gIGNvbGxlY3Rpb24sXG4gIGNvbGxlY3Rpb25EYXRhLFxuICBkb2MsXG4gIGRvY0RhdGEsXG4gIGRlbGV0ZURvYyxcbiAgc2V0RG9jLFxuICBUaW1lc3RhbXAsXG59IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBjYXRjaEVycm9yLFxuICBjb21iaW5lTGF0ZXN0LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBvZixcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1xuICBDbHViLFxufSBmcm9tIFwiLi4vbW9kZWxzL2NsdWJcIjtcbmltcG9ydCB7IFRlYW0gfSBmcm9tIFwiLi4vbW9kZWxzL3RlYW1cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9hdXRoXCI7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcbiAgdXNlcjogVXNlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlc3RvcmU6IEZpcmVzdG9yZSA9IGluamVjdChGaXJlc3RvcmUpLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkgeyB9XG5cblxuICBnZXRQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKXtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0SWQpXG4gICAgLy8gL3N0cmlwZVByb2R1Y3RzL3Byb2RfUVBaODg2MnMwTzJLbGlcbiAgICBjb25zdCBwcm9kdWN0UmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgc3RyaXBlUHJvZHVjdHMvJHtwcm9kdWN0SWR9YCk7XG4gICAgcmV0dXJuIGRvY0RhdGEocHJvZHVjdFJlZiwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgdW5rbm93biBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cblxuXG4gIGdldFByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHByb2R1Y3RMaXN0UmVmID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYHN0cmlwZVByb2R1Y3RzYFxuICAgICk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KHByb2R1Y3RMaXN0UmVmLCB3aGVyZShcImFjdGl2ZVwiLCBcIj09XCIsIHRydWUpLCB3aGVyZShcInN0cmlwZV9tZXRhZGF0YV90eXBlXCIsIFwiPT1cIiwgXCJiYXNlXCIpKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEocSwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8YW55W10+O1xuICAgIFxuICB9XG4gIGdldE1vZHVsZXMoKSB7XG4gICAgY29uc3QgcHJvZHVjdExpc3RSZWYgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgc3RyaXBlUHJvZHVjdHNgXG4gICAgKTtcbiAgICBjb25zdCBxID0gcXVlcnkocHJvZHVjdExpc3RSZWYsIHdoZXJlKFwiYWN0aXZlXCIsIFwiPT1cIiwgdHJ1ZSksIHdoZXJlKFwic3RyaXBlX21ldGFkYXRhX3R5cGVcIiwgXCI9PVwiLCBcIm1vZHVsZVwiKSk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHEsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBcbiAgfVxuICBnZXRQcmljZXMocHJvZHVjdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwcm9kdWN0UHJpY2VzTGlzdFJlZiA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGBzdHJpcGVQcm9kdWN0cy8ke3Byb2R1Y3RJZH0vcHJpY2VzYFxuICAgICk7XG5cbiAgICBjb25zdCBxID0gcXVlcnkocHJvZHVjdFByaWNlc0xpc3RSZWYsIHdoZXJlKFwiYWN0aXZlXCIsIFwiPT1cIiwgdHJ1ZSkpO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHEsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBcbiAgfVxuXG4gIGNoZWNrb3V0U3Vic2NyaXB0aW9uKGNsdWJJZCwgcHJpY2UsIHByb2R1Y3Qpe1xuICAgIHJldHVybiBhZGREb2MoXG4gICAgICBjb2xsZWN0aW9uKHRoaXMuZmlyZXN0b3JlLCBgL2NsdWIvJHtjbHViSWR9L2NoZWNrb3V0X3Nlc3Npb25zL2ApLFxuICAgICAge1xuICAgICAgICB1c2VySWQ6IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlci51aWQsXG4gICAgICAgIHN1YnNjcmlwdGlvblR5cGU6IHByb2R1Y3QubWV0YWRhdGEuc3Vic2NyaXB0aW9uLFxuICAgICAgICBwcmljZTogcHJpY2UuaWQsXG4gICAgICAgIGFsbG93X3Byb21vdGlvbl9jb2RlczogdHJ1ZSxcbiAgICAgICAgc3VjY2Vzc191cmw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgIGNhbmNlbF91cmw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBjaGVja291dEFkZG9uKGNsdWJJZCwgcHJpY2UsIHByb2R1Y3Qpe1xuICAgIHJldHVybiBhZGREb2MoXG4gICAgICBjb2xsZWN0aW9uKHRoaXMuZmlyZXN0b3JlLCBgL2NsdWIvJHtjbHViSWR9L2NoZWNrb3V0X3Nlc3Npb25zL2ApLFxuICAgICAge1xuICAgICAgICB1c2VySWQ6IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlci51aWQsXG4gICAgICAgIHN1YnNjcmlwdGlvblR5cGU6IHByb2R1Y3QubWV0YWRhdGEudHlwZSxcbiAgICAgICAgYWRkb246IHByb2R1Y3QubWV0YWRhdGEuYWRkb24sXG4gICAgICAgIHByaWNlOiBwcmljZS5pZCxcbiAgICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLFxuICAgICAgICBzdWNjZXNzX3VybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgY2FuY2VsX3VybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZ2V0Q2hlY2tvdXRTZXNzaW9uKGNsdWJJZDogc3RyaW5nLCBjaGVja291dF9zZXNzaW9uX2lkOiBzdHJpbmcpe1xuICAgIGNvbnN0IGNoZWNrb3V0U2Vzc2lvblJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYGNsdWIvJHtjbHViSWR9L2NoZWNrb3V0X3Nlc3Npb25zLyR7Y2hlY2tvdXRfc2Vzc2lvbl9pZH1gKTtcbiAgICByZXR1cm4gZG9jRGF0YShjaGVja291dFNlc3Npb25SZWYsIHsgaWRGaWVsZDogXCJpZFwiIH0pIGFzIHVua25vd24gYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICB9XG5cbiAgZ2V0Q2x1Ykxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVc2VyQ2x1YlJlZnModXNlcik7XG4gICAgICB9KSxcbiAgICAgIC8vIHRhcCgoY2x1YnMpID0+IGNvbnNvbGUubG9nKFwiQ2x1YnM6XCIsIGNsdWJzKSksXG4gICAgICBtZXJnZU1hcCgoY2x1YnMpID0+IHtcbiAgICAgICAgaWYgKGNsdWJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgY2x1YnMubWFwKChjbHViKSA9PlxuICAgICAgICAgICAgdGhpcy5nZXRDbHViUmVmKGNsdWIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpIC8vIEluIGNhc2Ugb2YgZXJyb3IsIHJldHVybiBudWxsIGZvciB0aGlzIGNsdWJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgoY2x1YnNXaXRoRGV0YWlscykgPT5cbiAgICAgICAgY2x1YnNXaXRoRGV0YWlscy5maWx0ZXIoKGNsdWIpID0+IGNsdWIgIT09IG51bGwpXG4gICAgICApLCAvLyBGaWx0ZXIgb3V0IG51bGwgKGVycm9yIGNhc2VzKVxuICAgICAgLy8gdGFwKChyZXN1bHRzKSA9PiBjb25zb2xlLmxvZyhcIkZpbmFsIHJlc3VsdHMgd2l0aCBhbGwgY2x1YnM6XCIsIHJlc3VsdHMpKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0Q2x1Ykxpc3Q6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGdldENsdWJBZG1pbkxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVc2VyQ2x1YkFkbWluUmVmcyh1c2VyKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGFwKChjbHVicykgPT4gY29uc29sZS5sb2coXCJBZG1pbiBDbHViczpcIiwgY2x1YnMpKSxcbiAgICAgIG1lcmdlTWFwKChjbHVicykgPT4ge1xuICAgICAgICBpZiAoY2x1YnMubGVuZ3RoID09PSAwKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICBjbHVicy5tYXAoKGNsdWIpID0+XG4gICAgICAgICAgICB0aGlzLmdldENsdWJSZWYoY2x1Yi5pZCkucGlwZShcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSkgLy8gSW4gY2FzZSBvZiBlcnJvciwgcmV0dXJuIG51bGwgZm9yIHRoaXMgY2x1YlxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChjbHVic1dpdGhEZXRhaWxzKSA9PlxuICAgICAgICBjbHVic1dpdGhEZXRhaWxzLmZpbHRlcigoY2x1YikgPT4gY2x1YiAhPT0gbnVsbClcbiAgICAgICksIC8vIEZpbHRlciBvdXQgbnVsbCAoZXJyb3IgY2FzZXMpXG4gICAgICAvLyB0YXAoKHJlc3VsdHMpID0+IGNvbnNvbGUubG9nKFwiRmluYWwgcmVzdWx0cyB3aXRoIGFsbCBjbHViczpcIiwgcmVzdWx0cykpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRDbHViTGlzdDpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDbHViQWRtaW5MaXN0QnlDbHViSWQoY2x1YklkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJDbHViQWRtaW5SZWZzKHVzZXIpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWVyZ2VNYXAoKGNsdWJzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2x1YnMubGVuZ3RoID09PSAwKSByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgICAgY2x1YnMubWFwKChjbHViKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENsdWJSZWYoY2x1Yi5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpIC8vIEluIGNhc2Ugb2YgZXJyb3IsIHJldHVybiBudWxsIGZvciB0aGlzIGNsdWJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKGNsdWJzV2l0aERldGFpbHMpID0+IFxuICAgICAgICAgICAgY2x1YnNXaXRoRGV0YWlscy5maWx0ZXIoKGNsdWIpID0+IGNsdWIgJiYgY2x1Yi5pZCA9PT0gY2x1YklkKVxuICAgICAgICApLCAvLyBGaWx0ZXIgY2x1YnMgYnkgY2x1YklkIGFuZCByZW1vdmUgbnVsbCBlbnRyaWVzXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldENsdWJBZG1pbkxpc3RCeUNsdWJJZDpcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgICB9KVxuICAgICk7XG59XG5cbiAgZ2V0VGVhbUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVc2VyVGVhbVJlZnModXNlcik7XG4gICAgICB9KSxcbiAgICAgIC8vIHRhcCgodGVhbXMpID0+IGNvbnNvbGUubG9nKFwiVGVhbXM6XCIsIHRlYW1zKSksXG4gICAgICBtZXJnZU1hcCgodGVhbXMpID0+IHtcbiAgICAgICAgaWYgKHRlYW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgdGVhbXMubWFwKCh0ZWFtKSA9PlxuICAgICAgICAgICAgdGhpcy5nZXRUZWFtUmVmKHRlYW0uaWQpLnBpcGUoXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpIC8vIEluIGNhc2Ugb2YgZXJyb3IsIHJldHVybiBudWxsIGZvciB0aGlzIHRlYW1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgodGVhbXNXaXRoRGV0YWlscykgPT5cbiAgICAgICAgdGVhbXNXaXRoRGV0YWlscy5maWx0ZXIoKHRlYW0pID0+IHRlYW0gIT09IG51bGwpXG4gICAgICApLCAvLyBGaWx0ZXIgb3V0IG51bGwgKGVycm9yIGNhc2VzKVxuICAgICAgLy8gdGFwKChyZXN1bHRzKSA9PiBjb25zb2xlLmxvZyhcIkZpbmFsIHJlc3VsdHMgd2l0aCBhbGwgdGVhbXM6XCIsIHJlc3VsdHMpKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0VGVhbUxpc3Q6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0Q2x1YlRlYW1MaXN0KGNsdWJJZCkge1xuICAgIHJldHVybiB0aGlzLmdldENsdWJUZWFtc1JlZihjbHViSWQpLnBpcGUoXG4gICAgICB0YXAoKHRlYW1zKSA9PiB7XG4gICAgICAgIGlmICh0ZWFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHRlYW1zIGZvdW5kIGZvciBjbHViXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgZGV0YWlscyBmb3IgdGVhbXMgaW4gY2x1YjpcIiwgdGVhbXMubWFwKHRlYW0gPT4gdGVhbS5pZCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKCh0ZWFtcykgPT4ge1xuICAgICAgICBpZiAodGVhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICB0ZWFtcy5tYXAoKHRlYW0pID0+XG4gICAgICAgICAgICB0aGlzLmdldFRlYW1SZWYodGVhbS5pZCkucGlwZShcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBkZXRhaWxzIGZvciB0ZWFtICR7dGVhbS5pZH06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpOyAvLyBSZXR1cm4gbnVsbCBmb3IgdGhpcyB0ZWFtIGluIGNhc2Ugb2YgYW4gZXJyb3JcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgodGVhbXNXaXRoRGV0YWlscykgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFRlYW1zID0gdGVhbXNXaXRoRGV0YWlscy5maWx0ZXIoKHRlYW0pID0+IHRlYW0gIT09IG51bGwpOyAvLyBGaWx0ZXIgb3V0IG51bGwgKGVycm9yIGNhc2VzKVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRUZWFtcztcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRDbHViVGVhbXNXaXRoRGV0YWlsczpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KVxuICAgICk7XG59XG5cbiAgYWRkQ2x1YlRlYW0odGVhbSwgY2x1YklkKXtcbiAgICByZXR1cm4gYWRkRG9jKFxuICAgICAgY29sbGVjdGlvbih0aGlzLmZpcmVzdG9yZSwgYC9jbHViLyR7Y2x1YklkfS90ZWFtcy9gKSxcbiAgICAgIHRlYW1cbiAgICApO1xuICB9XG4gIGFkZENsdWJSb2xlKGNsdWJJZCwgcm9sZUFycmF5KXtcbiAgICByZXR1cm4gc2V0RG9jKFxuICAgICAgZG9jKHRoaXMuZmlyZXN0b3JlLCBgY2x1Yi8ke2NsdWJJZH1gKSxcbiAgICAgIHtcbiAgICAgICAgcm9sZXM6IHJvbGVBcnJheSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1lcmdlOiB0cnVlLFxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgYWRkQ2x1Yk1lbWJlclJvbGUoY2x1YklkLCBtZW1iZXJJZCwgcm9sZUFycmF5KXtcbiAgICByZXR1cm4gc2V0RG9jKFxuICAgICAgZG9jKHRoaXMuZmlyZXN0b3JlLCBgY2x1Yi8ke2NsdWJJZH0vbWVtYmVycy8ke21lbWJlcklkfWApLFxuICAgICAge1xuICAgICAgICByb2xlczogcm9sZUFycmF5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVyZ2U6IHRydWUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGFkZFRlYW1Sb2xlKHRlYW1JZCwgcm9sZUFycmF5KXtcbiAgICByZXR1cm4gc2V0RG9jKFxuICAgICAgZG9jKHRoaXMuZmlyZXN0b3JlLCBgdGVhbXMvJHt0ZWFtSWR9YCksXG4gICAgICB7XG4gICAgICAgIHJvbGVzOiByb2xlQXJyYXksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtZXJnZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGFkZFRlYW1NZW1iZXJSb2xlKHRlYW1JZCwgbWVtYmVySWQsIHJvbGVBcnJheSl7XG4gICAgcmV0dXJuIHNldERvYyhcbiAgICAgIGRvYyh0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS9tZW1iZXJzLyR7bWVtYmVySWR9YCksXG4gICAgICB7XG4gICAgICAgIHJvbGVzOiByb2xlQXJyYXksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtZXJnZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cblxuICBnZXRUZWFtQWRtaW5MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlclRlYW1BZG1pblJlZnModXNlcik7XG4gICAgICB9KSxcbiAgICAgIC8vIGxvZyhcIlRlYW1zOlwiLCB0ZWFtcykpLFxuICAgICAgbWVyZ2VNYXAoKHRlYW1zKSA9PiB7XG4gICAgICAgIGlmICh0ZWFtcy5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7XG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgIHRlYW1zLm1hcCgodGVhbSkgPT5cbiAgICAgICAgICAgIHRoaXMuZ2V0VGVhbVJlZih0ZWFtLmlkKS5waXBlKFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG51bGwpKSAvLyBJbiBjYXNlIG9mIGVycm9yLCByZXR1cm4gbnVsbCBmb3IgdGhpcyB0ZWFtXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKHRlYW1zV2l0aERldGFpbHMpID0+XG4gICAgICAgIHRlYW1zV2l0aERldGFpbHMuZmlsdGVyKCh0ZWFtKSA9PiB0ZWFtICE9PSBudWxsKVxuICAgICAgKSwgLy8gRmlsdGVyIG91dCBudWxsIChlcnJvciBjYXNlcylcbiAgICAgIC8vIHRhcCgocmVzdWx0cykgPT4gY29uc29sZS5sb2coXCJGaW5hbCByZXN1bHRzIHdpdGggYWxsIHRlYW1zOlwiLCByZXN1bHRzKSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldFRlYW1MaXN0OlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb24gZXJyb3JcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFRlYW1BZG1pbkxpc3RCeUNsdWJJZChjbHViSWQpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyJCgpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlclRlYW1BZG1pblJlZnModXNlcik7XG4gICAgICAgIH0pLFxuICAgICAgICBtZXJnZU1hcCgodGVhbXMpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZWFtcy5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgICB0ZWFtcy5tYXAoKHRlYW0pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGVhbVJlZih0ZWFtLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSkgLy8gSW4gY2FzZSBvZiBlcnJvciwgcmV0dXJuIG51bGwgZm9yIHRoaXMgdGVhbVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgodGVhbXNXaXRoRGV0YWlscykgPT4gXG4gICAgICAgICAgICB0ZWFtc1dpdGhEZXRhaWxzLmZpbHRlcigodGVhbSkgPT4gdGVhbSAmJiB0ZWFtLmNsdWJJZCA9PT0gY2x1YklkKVxuICAgICAgICApLCAvLyBGaWx0ZXIgdGVhbXMgYnkgY2x1YklkIGFuZCByZW1vdmUgbnVsbCBlbnRyaWVzXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldFRlYW1BZG1pbkxpc3RCeUNsdWJJZDpcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgICB9KVxuICAgICk7XG59XG5cbiAgLyogQ0xVQlMgKi9cbiAgZ2V0Q2x1YkNoZWNrb3V0U2Vzc2lvbnNMaXN0KGNsdWJJZDogc3RyaW5nKXtcbiAgICBjb25zdCBjbHViQ2hlY2tvdXRTZXNzaW9uTGlzdFJlZiA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGBjbHViLyR7Y2x1YklkfS9jaGVja291dF9zZXNzaW9uc2BcbiAgICApO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShjbHViQ2hlY2tvdXRTZXNzaW9uTGlzdFJlZiwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8YW55W10+O1xuICAgIFxuICB9XG4gIGdldENsdWJTdWJzY3JpcHRpb25MaXN0KGNsdWJJZDogc3RyaW5nKXtcbiAgICBjb25zdCBjbHViU3Vic2NyaXB0aW9uaXN0UmVmID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYGNsdWIvJHtjbHViSWR9L3N1YnNjcmlwdGlvbnNgXG4gICAgKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEoY2x1YlN1YnNjcmlwdGlvbmlzdFJlZiwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8YW55W10+O1xuICAgIFxuICB9XG5cbiAgZ2V0Q2x1YlN1YnNjcmlwdGlvbkludm9pY2VMaXN0KGNsdWJJZDogc3RyaW5nLCBzdWJzY3JpcHRpb25JZDogc3RyaW5nKXtcbiAgICBjb25zdCBjbHViU3Vic2NyaXB0aW9uSW52b2ljZWlzdFJlZiA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGBjbHViLyR7Y2x1YklkfS9zdWJzY3JpcHRpb25zLyR7c3Vic2NyaXB0aW9uSWR9L2ludm9pY2VzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKGNsdWJTdWJzY3JpcHRpb25JbnZvaWNlaXN0UmVmLCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgT2JzZXJ2YWJsZTxhbnlbXT47XG4gIH1cblxuICBnZXRDbHViUGF5bWVudExpc3QoY2x1YklkOiBzdHJpbmcpe1xuICAgIGNvbnN0IGNsdWJQYXltZW50c0xpc3RSZWYgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgY2x1Yi8ke2NsdWJJZH0vcGF5bWVudHNgXG4gICAgKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEoY2x1YlBheW1lbnRzTGlzdFJlZiwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8YW55W10+O1xuICB9XG5cblxuICBnZXRDbHViUmVmKGNsdWJJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgY2x1YlJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYGNsdWIvJHtjbHViSWR9YCk7XG4gICAgcmV0dXJuIGRvY0RhdGEoY2x1YlJlZiwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgdW5rbm93biBhcyBPYnNlcnZhYmxlPENsdWI+O1xuICB9XG5cbiAgc2VhcmNoQ2x1Ykxpc3RSZWYoc2VhcmNoU3RyaW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENsdWJbXT4ge1xuICAgIGNvbnN0IGNsdWJSZWZMaXN0ID0gY29sbGVjdGlvbih0aGlzLmZpcmVzdG9yZSwgYGNsdWIvYCk7XG5cbiAgICAvLyBjb25zdCBxID0gcXVlcnkoY2x1YlJlZkxpc3QsIHdoZXJlKFwibmFtZVwiLCBcIj09XCIsIHNlYXJjaFN0cmluZykpO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShjbHViUmVmTGlzdCwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgT2JzZXJ2YWJsZTxDbHViW10+O1xuICB9XG5cbiAgZ2V0QWN0aXZlQ2x1Ykxpc3QoKTogT2JzZXJ2YWJsZTxDbHViW10+IHtcbiAgICBjb25zdCBjbHViUmVmTGlzdCA9IGNvbGxlY3Rpb24odGhpcy5maXJlc3RvcmUsIGBjbHViL2ApO1xuXG4gICAgY29uc3QgcSA9IHF1ZXJ5KGNsdWJSZWZMaXN0LCB3aGVyZShcImFjdGl2ZVwiLCBcIj09XCIsIHRydWUpKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEocSwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgdW5rbm93biBhcyBPYnNlcnZhYmxlPFxuICAgICAgQ2x1YltdXG4gICAgPjtcbiAgfVxuXG4gIGdldFVzZXJDbHViUmVmcyh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxDbHViW10+IHtcbiAgICAvL2NvbnNvbGUubG9nKHVzZXIpO1xuICAgIGNvbnN0IGNsdWJSZWZMaXN0ID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9L2NsdWJzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKGNsdWJSZWZMaXN0LCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgT2JzZXJ2YWJsZTxDbHViW10+O1xuICB9XG5cbiAgZ2V0Q2x1YlRlYW1zUmVmKGNsdWJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUZWFtW10+IHtcbiAgICBjb25zdCBjbHViVGVhbVJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgY2x1Yi8ke2NsdWJJZH0vdGVhbXNgXG4gICAgKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEoY2x1YlRlYW1SZWZMaXN0LCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgT2JzZXJ2YWJsZTxUZWFtW10+O1xuICB9XG5cbiAgZ2V0Q2x1Yk1lbWJlclJlZnMoY2x1YklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2ZpbGVbXT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGNsdWJJZCk7XG4gICAgY29uc3QgY2x1Yk1lbWJlclJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgY2x1Yi8ke2NsdWJJZH0vbWVtYmVyc2BcbiAgICApO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShjbHViTWVtYmVyUmVmTGlzdCwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8UHJvZmlsZVtdPjtcbiAgfVxuXG4gIGdldENsdWJBZG1pblJlZnMoY2x1YklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2ZpbGVbXT4ge1xuICAgIGNvbnN0IGNsdWJNZW1iZXJSZWZMaXN0ID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYGNsdWIvJHtjbHViSWR9L2FkbWluc2BcbiAgICApO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShjbHViTWVtYmVyUmVmTGlzdCwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8UHJvZmlsZVtdPjtcbiAgfVxuXG4gIGdldENsdWJSZXF1ZXN0UmVmcyhjbHViSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZmlsZVtdPiB7XG4gICAgY29uc3QgY2x1YlJlcXVlc3RSZWZMaXN0ID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYGNsdWIvJHtjbHViSWR9L3JlcXVlc3RzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKGNsdWJSZXF1ZXN0UmVmTGlzdCwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIHVua25vd24gYXMgT2JzZXJ2YWJsZTxQcm9maWxlW10+O1xuICB9XG5cbiAgZ2V0VGVhbVJlcXVlc3RSZWZzKHRlYW1JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9maWxlW10+IHtcbiAgICBjb25zdCB0ZWFtUmVxdWVzdFJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdGVhbXMvJHt0ZWFtSWR9L3JlcXVlc3RzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHRlYW1SZXF1ZXN0UmVmTGlzdCwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIHVua25vd24gYXMgT2JzZXJ2YWJsZTxQcm9maWxlW10+O1xuICB9XG5cbiAgLyogVEVBTVMgKi9cbiAgZ2V0VGVhbVJlZih0ZWFtSWQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgUmVhZCBUZWFtICR7dGVhbUlkfWApO1xuICAgIGNvbnN0IHRlYW1SZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGAvdGVhbXMvJHt0ZWFtSWR9YCk7XG4gICAgcmV0dXJuIGRvY0RhdGEodGVhbVJlZiwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgT2JzZXJ2YWJsZTxUZWFtPjtcbiAgfVxuXG4gIGdldFVzZXJUZWFtUmVmcyh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxUZWFtW10+IHtcbiAgICBjb25zdCB0ZWFtUmVmTElzdCA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB1c2VyUHJvZmlsZS8ke3VzZXIudWlkfS90ZWFtc2BcbiAgICApO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YSh0ZWFtUmVmTElzdCwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8VGVhbVtdPjtcbiAgfVxuXG4gIGdldFVzZXJUZWFtQWRtaW5SZWZzKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFRlYW1bXT4ge1xuICAgIGNvbnN0IHRlYW1SZWZMSXN0ID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9L3RlYW1BZG1pbmBcbiAgICApO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YSh0ZWFtUmVmTElzdCwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8VGVhbVtdPjtcbiAgfVxuXG4gIGdldFVzZXJDbHViQWRtaW5SZWZzKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPENsdWJbXT4ge1xuICAgIGNvbnN0IGNsdWJSZWZMaXN0ID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9L2NsdWJBZG1pbmBcbiAgICApO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShjbHViUmVmTGlzdCwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8Q2x1YltdPjtcbiAgfVxuXG4gIGdldFVzZXJDbHViUmVxdWVzdFJlZnModXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdFJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH0vY2x1YlJlcXVlc3RzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHJlcXVlc3RSZWZMaXN0LCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgdW5rbm93biBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cbiAgZ2V0VXNlckNsdWJSZXF1ZXN0UmVmKHVzZXJJZDogc3RyaW5nLCByZXF1ZXN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdFJlZiA9IGRvYyhcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYC91c2VyUHJvZmlsZS8ke3VzZXJJZH0vY2x1YlJlcXVlc3RzLyR7cmVxdWVzdElkfWBcbiAgICApO1xuICAgIHJldHVybiBkb2NEYXRhKHJlcXVlc3RSZWYsIHsgaWRGaWVsZDogXCJpZFwiIH0pIGFzIE9ic2VydmFibGU8YW55PjtcbiAgfVxuXG4gIGdldFVzZXJUZWFtUmVxdWVzdFJlZnModXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdFJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH0vdGVhbVJlcXVlc3RzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHJlcXVlc3RSZWZMaXN0LCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgdW5rbm93biBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cbiAgZ2V0VXNlclRlYW1SZXF1ZXN0UmVmKHVzZXJJZDogc3RyaW5nLCByZXF1ZXN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdFJlZiA9IGRvYyhcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYC91c2VyUHJvZmlsZS8ke3VzZXJJZH0vdGVhbVJlcXVlc3RzLyR7cmVxdWVzdElkfWBcbiAgICApO1xuICAgIHJldHVybiBkb2NEYXRhKHJlcXVlc3RSZWYsIHsgaWRGaWVsZDogXCJpZFwiIH0pIGFzIE9ic2VydmFibGU8YW55PjtcbiAgfVxuXG4gIGFwcHJvdmVVc2VyQ2x1YlJlcXVlc3QoY2x1YklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImNsdWIgXCIgKyBjbHViSWQsIFwiIC8gdXNlcmlkIFwiICsgdXNlcklkKTtcbiAgICByZXR1cm4gc2V0RG9jKFxuICAgICAgZG9jKHRoaXMuZmlyZXN0b3JlLCBgL2NsdWIvJHtjbHViSWR9L3JlcXVlc3RzLyR7dXNlcklkfWApLFxuICAgICAgeyBcbiAgICAgICAgYXBwcm92ZURhdGVUaW1lOiBUaW1lc3RhbXAubm93KCksXG4gICAgICAgIGFwcHJvdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtZXJnZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGFzeW5jIGFwcHJvdmVVc2VyVGVhbVJlcXVlc3QodGVhbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyB0cmlnZ2VyIGNyZWF0ZSBldmVudCBvbiBiYWNrZW5kIC0+IG5vdCBoYW5kbGVkLCBiZWNhdXNlIG5vIHN0YXR1cyBmaWVsZCBmb3IgYXBwcm92ZVxuICAgIGF3YWl0IHNldERvYyhcbiAgICAgIGRvYyh0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS9yZXF1ZXN0cy8ke3VzZXJJZH1gKSxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBtZXJnZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICAgIC8vIHRoZW4gdHJpZ2dlciB1cGRhdGUgZXZlbnQgb24gYmFja2VuZCAtLT4gaGFuZGxlZFxuICAgIC8vIC0tPiBvbmx5IFwibW9kaWZ5XCIgZXZlbnQgaXMgaGFuZGxlZFxuICAgIHJldHVybiBzZXREb2MoXG4gICAgICBkb2ModGhpcy5maXJlc3RvcmUsIGB0ZWFtcy8ke3RlYW1JZH0vcmVxdWVzdHMvJHt1c2VySWR9YCksXG4gICAgICB7XG4gICAgICAgIGFwcHJvdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtZXJnZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlVXNlckNsdWJSZXF1ZXN0KGNsdWJJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICAgIHJldHVybiBzZXREb2MoXG4gICAgICBkb2ModGhpcy5maXJlc3RvcmUsIGBjbHViLyR7Y2x1YklkfS9yZXF1ZXN0cy8ke3VzZXJJZH1gKSxcbiAgICAgIHtcbiAgICAgICAgYXBwcm92ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtZXJnZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlVXNlclRlYW1SZXF1ZXN0KHRlYW1JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICAgIHJldHVybiBzZXREb2MoXG4gICAgICBkb2ModGhpcy5maXJlc3RvcmUsIGB0ZWFtcy8ke3RlYW1JZH0vcmVxdWVzdHMvJHt1c2VySWR9YCksXG4gICAgICB7XG4gICAgICAgIGFwcHJvdmU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVyZ2U6IHRydWUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldENsdWJUZWFtUmVmcyhjbHViSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VGVhbVtdPiB7XG4gICAgY29uc3QgdGVhbVJlZkxJc3QgPSBjb2xsZWN0aW9uKHRoaXMuZmlyZXN0b3JlLCBgY2x1Yi8ke2NsdWJJZH0vdGVhbXNgKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEodGVhbVJlZkxJc3QsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyBPYnNlcnZhYmxlPFRlYW1bXT47XG4gIH1cblxuICBnZXRUZWFtTWVtYmVyUmVmcyh0ZWFtSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZmlsZVtdPiB7XG4gICAgY29uc3QgdGVhbU1lbWJlclJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdGVhbXMvJHt0ZWFtSWR9L21lbWJlcnNgXG4gICAgKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEodGVhbU1lbWJlclJlZkxpc3QsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyBPYnNlcnZhYmxlPFByb2ZpbGVbXT47XG4gIH1cblxuICBnZXRUZWFtQWRtaW5SZWZzKHRlYW1JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9maWxlW10+IHtcbiAgICBjb25zdCB0ZWFtTWVtYmVyUmVmTGlzdCA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB0ZWFtcy8ke3RlYW1JZH0vYWRtaW5zYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHRlYW1NZW1iZXJSZWZMaXN0LCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgT2JzZXJ2YWJsZTxQcm9maWxlW10+O1xuICB9XG4gIC8vIFVzZXIgUGVyc3BlY3RpdmUgdmlhIFJlcXVlc3RzXG4gIGFzeW5jIHNldENsdWJSZXF1ZXN0KGNsdWJJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBjb25zdCBjbHViUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgL2NsdWIvJHtjbHViSWR9YCk7XG4gICAgcmV0dXJuIHNldERvYyhcbiAgICAgIGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlcklkfS9jbHViUmVxdWVzdHNgLCBjbHViSWQpLFxuICAgICAge1xuICAgICAgICBjbHViUmVmOiBjbHViUmVmLFxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgYXN5bmMgc2V0VGVhbVJlcXVlc3QodGVhbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIGNvbnN0IHRlYW1SZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGAvdGVhbXMvJHt0ZWFtSWR9YCk7XG4gICAgcmV0dXJuIHNldERvYyhcbiAgICAgIGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlcklkfS90ZWFtUmVxdWVzdHNgLCB0ZWFtSWQpLFxuICAgICAge1xuICAgICAgICB0ZWFtUmVmOiB0ZWFtUmVmLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZXRDbHViSGVsZmVyUmVwb3J0aW5nRGF0ZShjbHViSWQsIGZpZWxkbmFtZSwgZGF0ZSl7XG4gICAgY29uc3QgdGVhbVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYC9jbHViLyR7Y2x1YklkfWApO1xuICAgIHJldHVybiBzZXREb2MoXG4gICAgICB0ZWFtUmVmLFxuICAgICAge1xuICAgICAgICBbZmllbGRuYW1lXTogZGF0ZSxcbiAgICAgIH0se1xuICAgICAgICBtZXJnZTogdHJ1ZVxuICAgICAgfVxuICAgICk7XG5cbiAgfVxuXG5cbiAgc2V0VGVhbVRocmVzaG9sZCh0ZWFtSWQsIGZpZWxkbmFtZSwgdGhyZXNob2xkOiBudW1iZXIpe1xuICAgIGNvbnN0IHRlYW1SZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGAvdGVhbXMvJHt0ZWFtSWR9YCk7XG4gICAgcmV0dXJuIHNldERvYyhcbiAgICAgIHRlYW1SZWYsXG4gICAgICB7XG4gICAgICAgIFtmaWVsZG5hbWVdOiB0aHJlc2hvbGQsXG4gICAgICB9LHtcbiAgICAgICAgbWVyZ2U6IHRydWVcbiAgICAgIH1cbiAgICApO1xuICB9XG5cblxuICBzZXRDbHViVGhyZXNob2xkKGNsdWJJZCwgZmllbGRuYW1lLCB0aHJlc2hvbGQ6IG51bWJlcil7XG4gICAgY29uc3QgY2x1YlJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYC9jbHViLyR7Y2x1YklkfWApO1xuICAgIHJldHVybiBzZXREb2MoXG4gICAgICBjbHViUmVmLFxuICAgICAge1xuICAgICAgICBbZmllbGRuYW1lXTogdGhyZXNob2xkLFxuICAgICAgfSx7XG4gICAgICAgIG1lcmdlOiB0cnVlXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG5cbiAgLy8gVXNlciBQZXJzcGVjdGl2ZVxuICBhc3luYyBsZWF2ZVRlYW0odGVhbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKXtcbiAgICByZXR1cm4gZGVsZXRlRG9jKGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlcklkfS90ZWFtcy8ke3RlYW1JZH1gKSk7XG4gIH1cblxuICBhc3luYyBkZWxldGVUZWFtKHRlYW1JZDogc3RyaW5nKXtcbiAgICAgIHJldHVybiBkZWxldGVEb2MoZG9jKHRoaXMuZmlyZXN0b3JlLCBgdGVhbXMvJHt0ZWFtSWR9YCkpO1xuICB9XG4gIC8vIEFETUlOIFBFUlNQRUNUSVZFIHZpYSBkaXJlY3QgYWRkL2RlbGV0ZSAtPiBCYWNrZW5kIGhhbmRlbHMgb3RoZXIgYXNzaWdubWVudHMuXG4gIGFzeW5jIGRlbGV0ZVRlYW1NZW1iZXIodGVhbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZGVsZXRlRG9jKGRvYyh0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS9tZW1iZXJzLyR7dXNlcklkfWApKTtcbiAgfVxuICBhc3luYyBkZWxldGVUZWFtQWRtaW4odGVhbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKHRoaXMuZmlyZXN0b3JlLCBgdGVhbXMvJHt0ZWFtSWR9L2FkbWlucy8ke3VzZXJJZH1gKSk7XG4gIH1cbiAgYXN5bmMgYWRkVGVhbUFkbWluKHRlYW1JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHNldERvYyhcbiAgICAgIGRvYyh0aGlzLmZpcmVzdG9yZSwgYC90ZWFtcy8ke3RlYW1JZH0vYWRtaW5zLyR7dXNlcklkfWApLFxuICAgICAge1xuICAgICAgICBcInVzZXJQcm9maWxlUmVmXCI6IHVzZXJJZCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1lcmdlOiB0cnVlLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBhc3luYyBkZWxldGVDbHViZW1iZXIoY2x1YklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBhd2FpdCBkZWxldGVEb2MoXG4gICAgICBkb2ModGhpcy5maXJlc3RvcmUsIGBjbHViLyR7Y2x1YklkfS9tZW1iZXJzLyR7dXNlcklkfWApLFxuICAgICk7XG4gIH1cbiAgYXN5bmMgZGVsZXRlQ2x1YkFkbWluKGNsdWJJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgYXdhaXQgZGVsZXRlRG9jKFxuICAgICAgZG9jKHRoaXMuZmlyZXN0b3JlLCBgY2x1Yi8ke2NsdWJJZH0vYWRtaW5zLyR7dXNlcklkfWApLFxuICAgICk7XG4gIH1cbiAgYXN5bmMgYWRkQ2x1YkFkbWluKGNsdWJJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHNldERvYyhcbiAgICAgIGRvYyh0aGlzLmZpcmVzdG9yZSwgYC9jbHViLyR7Y2x1YklkfS9hZG1pbnMvJHt1c2VySWR9YCksXG4gICAgICB7XG4gICAgICAgIFwidXNlclByb2ZpbGVSZWZcIjogdXNlcklkLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVyZ2U6IHRydWUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ00sSUFBTyxtQkFBUCxNQUFPLGlCQUFlO0VBRTFCLFlBQ21CLFlBQXVCLE9BQU8sU0FBUyxHQUN2QyxhQUF3QjtBQUR4QixTQUFBLFlBQUE7QUFDQSxTQUFBLGNBQUE7RUFDZjtFQUdKLFdBQVcsV0FBaUI7QUFHMUIsVUFBTSxhQUFhLElBQUksS0FBSyxXQUFXLGtCQUFrQixTQUFTLEVBQUU7QUFDcEUsV0FBTyxRQUFRLFlBQVksRUFBRSxTQUFTLEtBQUksQ0FBRTtFQUM5QztFQUdBLGNBQVc7QUFDVCxVQUFNLGlCQUFpQixXQUNyQixLQUFLLFdBQ0wsZ0JBQWdCO0FBRWxCLFVBQU0sSUFBSSxNQUFNLGdCQUFnQixNQUFNLFVBQVUsTUFBTSxJQUFJLEdBQUcsTUFBTSx3QkFBd0IsTUFBTSxNQUFNLENBQUM7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
