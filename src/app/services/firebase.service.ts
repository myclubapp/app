import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';


// import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user';
import {
  User
} from "@angular/fire/auth";
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  inviteList: any = [];
  constructor(
    private firestore: Firestore,
    private storage: Storage
  ) {

  }

  getUserProfile(user: User): Observable<UserProfile> {
    const userProfileRef = doc(this.firestore,`userProfile/${user.uid}`);
    return docData(userProfileRef, {idField: 'id'}) as Observable<UserProfile>
  }

  async setUserProfilePicture(user: User, photo: Photo){

    const storageRef = ref(this.storage,`userProfile/${user.uid}/profilePicture.${photo.format}`);

    await uploadString(storageRef, photo.base64String, 'base64', {});

    const url = await getDownloadURL(storageRef);

    const userProfileRef = doc(this.firestore,`userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { profilePicture: url });
  }

  setUserProfile(userProfile: UserProfile){
    const userProfileRef = doc(this.firestore,`userProfile/${userProfile.id}`);
    return updateDoc(userProfileRef, {userProfile});
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
