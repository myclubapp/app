import { Injectable, inject } from "@angular/core";

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
    private firestore: Firestore = inject(Firestore),
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

  async addPushSubscriber(
    sub: PushSubscription, // WebPush
    deviceId: DeviceId,
    deviceInfo: DeviceInfo,
    token: string // native
  ) {
    const user = this.authService.auth.currentUser;
    const pushObject = JSON.stringify(sub);
    const userProfileRef: DocumentReference<DocumentData> = doc(
      this.firestore,
      // `userProfile/${user.uid}/push/${deviceId.identifier}`
      `userProfile/${user.uid}/push/${deviceInfo.model}`
    );

    return setDoc(userProfileRef, {
      identifier: deviceId.identifier,
      token: token || "", // Set token for native Web Push
      pushObject: pushObject || "{}", // Set token for web push
      model: deviceInfo.model || "",
      operatingSystem: deviceInfo.operatingSystem || "",
      osVersion: deviceInfo.osVersion || "",
      platform: deviceInfo.platform || "", // --> set to "Web" for Web Push from Backend or "Native" for Native Push from firebase
      updated: new Date(),
    });
  }

  async deletePushDevice(deviceId) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(
      this.firestore,
      `userProfile/${user.uid}/push/${deviceId}`
    );
    return deleteDoc(userProfileRef);
  }

  async changeSettingsPush(state: boolean) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { settingsPush: state });
  }
  async changeSettingsPushModule(state: boolean, module) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { ["settingsPush" + module]: state });
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

  changeProfileAttribute(value: any, fieldname) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { [fieldname]: value });
  }

  /*
  async changeLanguage(state: string) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { language: state });
  }

  async changeFavTeam(state: string) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { favTeam: state });
  }

  async changeFavClub(state: string) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { favClub: state });
  }*/
}
