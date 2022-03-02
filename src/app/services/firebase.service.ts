import { Injectable } from '@angular/core';
/*import {
  AngularFirestore, DocumentSnapshot
} from '@angular/fire/compat/firestore'*/

import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import firebase from 'firebase/compat/app';

import { Observable } from 'rxjs';

// import { AuthService } from './auth.service';
//models
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
    // const user: firebase.User = await this.authService.getUser();
    const userProfileRef = doc(this.firestore,`userProfile/${user.uid}`);
    return docData(userProfileRef, {idField: 'id'}) as Observable<UserProfile>
    // this.afStore.collection('userProfile').doc(`${user.uid}`).get();
  }

  getInvites(user: firebase.User) {

    const inviteListRef = collection(this.firestore, `userProfile/${user.uid}/inviteList`);
    return collectionData(inviteListRef,  {idField: 'id'}) as Observable<any>;

    // const user: firebase.User = await this.authService.getUser();
    // return this.afStore.collection('userProfile').doc(`${user.uid}`).collection('inviteList').get();
  }

  async acceptInvite(user: firebase.User, invite){
    // const user: firebase.User = await this.authService.getUser();

    const inviteListDocRef = doc(this.firestore,`userProfile/${user.uid}/inviteList`);

    return updateDoc(inviteListDocRef, { status: "accepted" });

    /* return docData(inviteListDocRef, {idField: 'id'}) as Observable<any>;

    return this.afStore.collection('userProfile').doc(`${user.uid}`).collection('inviteList').doc(`${id}`).set({
      status: "accepted"
    },
    {merge:true}); */ 
  }

  getTrainings(){

  }

  getEvents(){

  }

  getGames(){

  }

}
