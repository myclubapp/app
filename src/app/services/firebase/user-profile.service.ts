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
  DocumentData,
} from "@angular/fire/firestore";
import {
  Storage,
  ref,
  uploadString,
  getDownloadURL,
} from "@angular/fire/storage";

import { Observable } from "rxjs";
import { Profile } from "../../models/user";
import { Photo } from "@capacitor/camera";

import { AuthService } from "../auth.service";
import { DeviceId, DeviceInfo } from "@capacitor/device";

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  constructor(
    private readonly firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService
  ) {

  }

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

  async setUserProfilePicture(photo: Photo) {
    const user = this.authService.auth.currentUser;
    const storageRef = ref(
      this.storage,
      `userProfile/${user.uid}/profilePicture/picture.${photo.format}`
    );
    await uploadString(storageRef, photo.base64String, "base64", {});
    const url = await getDownloadURL(storageRef);
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { profilePicture: url });
  }

  setUserProfile(userProfile: Profile) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { userProfile });
  }

  getPushDeviceList(): Observable<DocumentData[]> {
    const user = this.authService.auth.currentUser;
    const pushDeviceListRef = collection(
      this.firestore,
      `userProfile/${user.uid}/push`
    );
    return collectionData(pushDeviceListRef, {
      idField: "id",
    });
  }

  async addPushSubscriber(sub: PushSubscription, deviceId: DeviceId, deviceInfo: DeviceInfo) {
    const user = this.authService.auth.currentUser;
    const pushObject = JSON.stringify(sub);
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}/push/${deviceId.uuid}`);
    return setDoc(userProfileRef, 
      { pushObject : pushObject, 
        updated: new Date(), 
        model: deviceInfo.model  || "", 
        operatingSystem: deviceInfo.operatingSystem  || "", 
        osVersion: deviceInfo.osVersion || "", 
        platform: deviceInfo.platform || ""
      });
  }

  async deletePushDevice(deviceId) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}/push/${deviceId}`);
    return deleteDoc(userProfileRef);
  }

  async changeSettingsPush(state: boolean) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { settingsPush: state });
  }

  async changeSettingsEmail(state: boolean) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { settingsEmail: state });
  }

  async changeSettingsEmailReporting(state: boolean) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { settingsEmailReporting: state });
  }
}
