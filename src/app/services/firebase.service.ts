import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

// import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user';
import {
  User
} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  inviteList: any = [];
  constructor(
    private firestore: Firestore,
  ) {

  }

  getUserProfile(user: User): Observable<UserProfile> {
    const userProfileRef = doc(this.firestore,`userProfile/${user.uid}`);
    return docData(userProfileRef, {idField: 'id'}) as Observable<UserProfile>

  }

  getInvites(user: User) {
    const inviteListRef = collection(this.firestore, `userProfile/${user.uid}/inviteList`);
    return collectionData(inviteListRef,  {idField: 'id'}) as Observable<any>;
  }

  async acceptInvite(user: User, invite){
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
