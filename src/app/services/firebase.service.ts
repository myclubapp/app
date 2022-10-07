import { Injectable } from '@angular/core';
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
  setDoc
} from '@angular/fire/firestore';

import {
  Storage,
  ref,
  uploadString,
  getDownloadURL
} from '@angular/fire/storage';

// import firebase from 'firebase/compat/app';
import { Observable, Observer } from 'rxjs';

import {
  Club,
  SwissHandballClub,
  SwissUnihockeyClub,
  SwissVolleyClub,
  SwissTurnverbandClub
} from '../models/club';
import { Team } from '../models/team';
import { User, UserProfile } from '@angular/fire/auth';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  inviteList: any = [];
  constructor (
    private readonly firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService
  ) {}

  /* CLUBS */
  getClubRef (clubId: string) {
    const clubRef = doc(this.firestore, `club/${clubId}`);
    return docData(clubRef, { idField: 'id' }) as unknown as Observable<Club>;
  }

  getUserClubRefs (user: User): Observable<Club> {
    const clubRefList = collection(
      this.firestore,
      `userProfile/${user.uid}/clubs`
    );
    return collectionData(clubRefList, {
      idField: 'id',
    }) as unknown as Observable<any>;
  }

  getClubMemberRefs (clubId: string): Observable<any> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/members`
    );
    return collectionData(clubMemberRefList, {
      idField: 'id',
    }) as unknown as Observable<any>;
  }

  getClubAdminRefs (clubId: string): Observable<any> {
    const clubMemberRefList = collection(
      this.firestore,
      `club/${clubId}/admins`
    );
    return collectionData(clubMemberRefList, {
      idField: 'id',
    }) as unknown as Observable<any>;
  }

  /* TEAMS */
  getTeamRef (teamId) {
    // console.log(`Read team ${teamId}`);
    const teamRef = doc(this.firestore, `/teams/${teamId}`);
    return docData(teamRef, { idField: 'id' }) as Observable<Team>;
  }

  getUserTeamRefs (user: User): Observable<Team> {
    const teamRefLIst = collection(
      this.firestore,
      `userProfile/${user.uid}/teams`
    );
    return collectionData(teamRefLIst, {
      idField: 'id',
    }) as unknown as Observable<Team>;
  }

  getTeamMemberRefs (teamId: string): Observable<any> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/members`
    );
    return collectionData(teamMemberRefList, {
      idField: 'id',
    }) as unknown as Observable<any>;
  }

  getTeamAdminRefs (teamId: string): Observable<any> {
    const teamMemberRefList = collection(
      this.firestore,
      `teams/${teamId}/admins`
    );
    return collectionData(teamMemberRefList, {
      idField: 'id',
    }) as unknown as Observable<any>;
  }
}
