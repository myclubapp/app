import { Injectable } from '@angular/core';

import { User } from '@angular/fire/auth';
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

import { Observable, Observer } from 'rxjs';
import { Profile } from '../../models/user';
import { Photo } from '@capacitor/camera';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor (
    private readonly firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService
  ) {}

  getUserProfile (user: User): Observable<Profile> {
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return docData(userProfileRef, { idField: 'id' }) as Observable<Profile>;
  }

  getUserProfileById (userId: string): Observable<Profile> {
    const userProfileRef = doc(this.firestore, `userProfile/${userId}`);
    if (userProfileRef && userProfileRef.id){
      return docData(userProfileRef, { idField: 'id' }) as Observable<Profile>;
    }else{
      return docData() as Observable<Profile>;
    }
  }

  async setUserProfilePicture (user: User, photo: Photo) {
    const storageRef = ref(
      this.storage,
      `userProfile/${user.uid}/profilePicture/picture.${photo.format}`
    );
    await uploadString(storageRef, photo.base64String, 'base64', {});
    const url = await getDownloadURL(storageRef);
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return await updateDoc(userProfileRef, { profilePicture: url });
  }

  async setUserProfile (userProfile: Profile) {
    const userProfileRef = doc(this.firestore, `userProfile/${userProfile.id}`);
    return await updateDoc(userProfileRef, { userProfile });
  }
}
