import { Injectable } from "@angular/core";
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
} from "@angular/fire/firestore";

import {
  Storage,
  ref,
  uploadString,
  getDownloadURL,
} from "@angular/fire/storage";

// import firebase from 'firebase/compat/app';
import { Observable, Observer } from "rxjs";

import {
  Club,
  SwissHandballClub,
  SwissUnihockeyClub,
  SwissVolleyClub,
  SwissTurnverbandClub,
} from "../models/club";
import { Team } from "../models/team";
import { User, UserProfile } from "@angular/fire/auth";

import { AuthService } from "src/app/services/auth.service";
import { query, where } from "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  inviteList: any = [];
  constructor(
    private readonly firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService
  ) {}

  /* CLUBS */
  getClubRef(clubId: string) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return docData(clubRef, { idField: "id" }) as unknown as Observable<Club>;
  }

  searchClubListRef(searchString: string): Observable<Club[]> {
    const clubRefList = collection(this.firestore, `club/`);

    const q = query(clubRefList, where("name", "==", searchString)); // heute - 1 Woche
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Club[]
    >;
  }

  getActiveClubList(): Observable<Club[]> {
    const clubRefList = collection(this.firestore, `club/`);

    const q = query(clubRefList, where("active", "==", true)); // heute - 1 Woche
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Club[]
    >;
  }

  getUserClubRefs(user: User): Observable<Club> {
    // console.log(user);
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubs`
    );
    return collectionData(clubRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  getClubMemberRefs(clubId: string): Observable<any> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/members`
    );
    return collectionData(clubMemberRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  getClubAdminRefs(clubId: string): Observable<any> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/admins`
    );
    return collectionData(clubMemberRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  getClubRequestRefs(clubId: string): Observable<any> {
    const clubRequestRefList = collection(
      this.firestore,
      `club/${clubId}/requests`
    );
    return collectionData(clubRequestRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  /* TEAMS */
  getTeamRef(teamId) {
    // console.log(`Read team ${teamId}`);
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return docData(teamRef, { idField: "id" }) as Observable<Team>;
  }

  getUserTeamRefs(user: User): Observable<Team> {
    const teamRefLIst = collection(
      this.firestore,
      `userProfile/${user.uid}/teams`
    );
    return collectionData(teamRefLIst, {
      idField: "id",
    }) as unknown as Observable<Team>;
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

  getClubTeamRefs(clubId: string): Observable<Team> {
    const teamRefLIst = collection(this.firestore, `club/${clubId}/teams`);
    return collectionData(teamRefLIst, {
      idField: "id",
    }) as unknown as Observable<Team>;
  }

  getTeamMemberRefs(teamId: string): Observable<any> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/members`
    );
    return collectionData(teamMemberRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  getTeamAdminRefs(teamId: string): Observable<any> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/admins`
    );
    return collectionData(teamMemberRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  async setClubRequest(clubId: string) {
    const user = await this.authService.getUser();
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      doc(this.firestore, `userProfile/${user.uid}/clubRequests`, clubId),
      {
        clubRef: clubRef,
      }
    );
  }
  async setTeamRequest(teamId: string) {
    const user = await this.authService.getUser();
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return setDoc(
      doc(this.firestore, `userProfile/${user.uid}/teamRequests`, teamId),
      {
        teamRef: teamRef,
      }
    );
  }
}
