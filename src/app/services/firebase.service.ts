import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  inviteList: any = [];
  constructor(
    private firestore: Firestore,
  ) {

  }

  getUserProfile(user: firebase.User): Observable<UserProfile> {
    const userProfileRef = doc(this.firestore,`userProfile/${user.uid}`);
    return docData(userProfileRef, {idField: 'id'}) as Observable<UserProfile>

  }

  getInvites(user: firebase.User) {
    const inviteListRef = collection(this.firestore, `userProfile/${user.uid}/inviteList`);
    return collectionData(inviteListRef,  {idField: 'id'}) as Observable<any>;
  }

  async acceptInvite(user: firebase.User, invite){
    const inviteListDocRef = doc(this.firestore,`userProfile/${user.uid}/inviteList`);
    return updateDoc(inviteListDocRef, { status: "accepted" });
  }

  getTrainings(){

  }

  getEvents(){

  }

  getGames(){

  }

}
