import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';

// import firebase from 'firebase/compat/app';
import { Observable, Observer } from 'rxjs';
import { Profile } from '../models/user';
import { Club, SwissHandballClub, SwissUnihockeyClub, SwissVolleyClub, SwissTurnverbandClub } from '../models/club';
import { Team } from '../models/team';
import {
  User
} from "@angular/fire/auth";
import { Photo } from '@capacitor/camera';

import {AuthService} from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  inviteList: any = [];
  constructor(
    private firestore: Firestore,
    private storage: Storage,
    private authService: AuthService,

  ) {

  }

  getInvites(user: User) {
    const inviteListRef = collection(this.firestore, `userProfile/${user.uid}/inviteList`);
    return collectionData(inviteListRef,  {idField: 'id'}) as Observable<any>;
  }

  async acceptInvite(user: User, invite){
    const inviteListDocRef = doc(this.firestore,`userProfile/${user.uid}/inviteList`);
    return updateDoc(inviteListDocRef, { status: "accepted" });
  }


  getClub(clubId){
    const clubRef = doc(this.firestore,`club/${clubId}`);
    return docData(clubRef, {idField: 'id'}) as Observable<Club>
  }

  getClubs(user: User): Observable<Club>  {
      const clubRefList = collection(this.firestore, `userProfile/${user.uid}/clubs`);
      return collectionData(clubRefList, { idField: 'id' }) as unknown as Observable<Club>;
  }

  getTeam(teamId){
    const teamRef = doc(this.firestore,`/teams/${teamId}`);
    return docData(teamRef, {idField: 'id'}) as Observable<Team>
  }

  getTeams(user: User): Observable<Team> {
    const teamRefLIst = collection(this.firestore, `userProfile/${user.uid}/teams`);
    return collectionData(teamRefLIst,  {idField: 'id'}) as Observable<any>;
  }


}
