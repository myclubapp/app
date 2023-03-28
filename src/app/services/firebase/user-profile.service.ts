import { Injectable } from "@angular/core";

import { User } from "@angular/fire/auth";
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

import { getAuth } from "@angular/fire/auth";

import { Observable, Observer } from "rxjs";
import { Profile } from "../../models/user";
import { Photo } from "@capacitor/camera";

import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  constructor(
    private readonly firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService
  ) {}

  getUserProfile(user: User): Observable<Profile> {
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return docData(userProfileRef, { idField: "id" }) as Observable<Profile>;
  }

  getUserProfileById(userId: string): Observable<Profile> {
    const userProfileRef: DocumentReference = doc(
      this.firestore,
      `userProfile/${userId}`
    );
    // if (userProfileRef.id) {
    return docData(userProfileRef, { idField: "id" }) as Observable<Profile>;
  }

  async setUserProfilePicture(user: User, photo: Photo) {
    const storageRef = ref(
      this.storage,
      `userProfile/${user.uid}/profilePicture/picture.${photo.format}`
    );
    await uploadString(storageRef, photo.base64String, "base64", {});
    const url = await getDownloadURL(storageRef);
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return await updateDoc(userProfileRef, { profilePicture: url });
  }

  async setUserProfile(userProfile: Profile) {
    const userProfileRef = doc(this.firestore, `userProfile/${userProfile.id}`);
    return await updateDoc(userProfileRef, { userProfile });
  }

  async addPushSubscriber(sub: PushSubscription) {
    const auth = getAuth();
    const user = auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return await updateDoc(userProfileRef, { pushSub: sub });
  }

  async changeSettingsPush(state: boolean) {
    const auth = getAuth();
    const user = auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return await updateDoc(userProfileRef, { settingsPush: state });
  }

  async changeSettingsEmail(state: boolean) {
    const auth = getAuth();
    const user = auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return await updateDoc(userProfileRef, { settingsEmail: state });
  }
}
