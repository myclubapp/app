import { Injectable, inject } from "@angular/core";
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
import { DocumentData, query, where } from "@angular/fire/firestore";
import { Profile } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  inviteList: any = [];
  constructor(
    private readonly firestore: Firestore = inject(Firestore)
  ) {}

  /* CLUBS */
  getClubRef(clubId: string) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return docData(clubRef, { idField: "id" }) as unknown as Observable<Club>;
  }

  searchClubListRef(searchString: string): Observable<Club[]> {
    const clubRefList = collection(this.firestore, `club/`);

    const q = query(clubRefList, where("name", "==", searchString));
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Club[]
    >;
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

  getClubMemberRefs(clubId: string): Observable<Profile> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/members`
    );
    return collectionData(clubMemberRefList, {
      idField: "id",
    }) as unknown as Observable<Profile>;
  }

  getClubAdminRefs(clubId: string): Observable<Profile> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/admins`
    );
    return collectionData(clubMemberRefList, {
      idField: "id",
    }) as unknown as Observable<Profile>;
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

  getTeamRequestRefs(teamId: string): Observable<any> {
    const teamRequestRefList = collection(
      this.firestore,
      `teams/${teamId}/requests`
    );
    return collectionData(teamRequestRefList, {
      idField: "id",
    }) as unknown as Observable<any>;
  }

  /* TEAMS */
  getTeamRef(teamId) {
    // console.log(`Read team ${teamId}`);
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

  approveUserClubRequest(clubId: string, userId: string): Promise<any> {
    return setDoc(doc(this.firestore, `/club/${clubId}/requests/${userId}`), {
      approve: true,
    },{
      merge: true
    });
  }
  async approveUserTeamRequest(teamId: string, userId: string): Promise<any> {
    // trigger create event on backend -> not handled
    await setDoc(doc(this.firestore, `teams/${teamId}/requests/${userId}` ), {
    },{
      merge: true
    });
    // then trigger update event on backend --> handled
    return setDoc(doc(this.firestore, `teams/${teamId}/requests/${userId}` ), {
      approve: true,
    },{
      merge: true
    });
  }

  async deleteUserClubRequest(clubId: string, userId: string) {
    return setDoc(doc(this.firestore, `club/${clubId}/requests/${userId}` ), {
      approve: false,
    },{
      merge: true
    });
  }

  async deleteUserTeamRequest(teamId: string, userId: string) {
    return setDoc(doc(this.firestore, `teams/${teamId}/requests/${userId}` ), {
      approve: false,
    },{
      merge: true
    });
  }

  getClubTeamRefs(clubId: string): Observable<Team[]> {
    const teamRefLIst = collection(this.firestore, `club/${clubId}/teams`);
    return collectionData(teamRefLIst, {
      idField: "id",
    }) as unknown as Observable<Team[]>;
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

  async setClubRequest(clubId: string, userId: string) {
    // const user = await this.authService.getUser();
    const clubRef = doc(this.firestore, `/club/${clubId}`);
    return setDoc(
      doc(this.firestore, `userProfile/${userId}/clubRequests`, clubId),
      {
        clubRef: clubRef,
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

  async deleteTeamMember(teamId: string, userId: string): Promise<any> {
    return deleteDoc(doc(this.firestore, `teams/${teamId}/members/${userId}` ));
  }
  async deleteTeamAdmin(teamId: string, userId: string): Promise<any> {
    await deleteDoc(doc(this.firestore, `teams/${teamId}/admins/${userId}` ));
  }

  async deleteClubember(clubId: string, userId: string): Promise<any> {
    
    await setDoc(doc(this.firestore, `club/${clubId}/members/${userId}` ), {
      remove: true,
    },{
      merge: true
    });
  }
  async deleteClubAdmin(clubId: string, userId: string): Promise<any> {
   
    await setDoc(doc(this.firestore, `club/${clubId}/admins/${userId}` ), {
      remove: true,
    },{
      merge: true
    });
  }

}
