import { Injectable } from "@angular/core";

import { User, updateProfile } from "@angular/fire/auth";
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
  DocumentData,
  addDoc,
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
import { shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  private profileCache: Map<string, Observable<Profile>> = new Map();
  private readonly CACHE_DURATION = 10 * 60 * 1000; // 10 Minuten

  constructor(
    private firestore: Firestore,
    private readonly storage: Storage,
    private readonly authService: AuthService,
  ) {
    // Aktiviere Offline Persistenz
  }

  addKidRequest(userId: string, email: string) {
    const userKidsRef = collection(
      this.firestore,
      `userProfile/${userId}/kidsRequests`,
    );
    return addDoc(userKidsRef, {
      email: email,
      createdAt: new Date(),
      verified: false,
    });
  }

  getKidsRequests(userId: string) {
    const userKidsRef = collection(
      this.firestore,
      `userProfile/${userId}/kidsRequests`,
    );
    return collectionData(userKidsRef, { idField: "id" }) as Observable<any[]>;
  }

  getChildren(userId: string) {
    console.log("getChildren: " + userId);
    const childrenRef = collection(
      this.firestore,
      `userProfile/${userId}/children`,
    );
    return collectionData(childrenRef, { idField: "id" }) as Observable<any[]>;
  }

  getParents(userId: string) {
    const parentsRef = collection(
      this.firestore,
      `userProfile/${userId}/parents`,
    );
    return collectionData(parentsRef, { idField: "id" }) as Observable<any[]>;
  }

  async addParent(userId: string, parentId: string) {
    const parentRef = doc(
      this.firestore,
      `userProfile/${userId}/parents/${parentId}`,
    );
    return setDoc(parentRef, {
      addedAt: new Date(),
      parentId: parentId,
    });
  }

  async addChild(userId: string, childId: string) {
    const childRef = doc(
      this.firestore,
      `userProfile/${userId}/children/${childId}`,
    );
    return setDoc(childRef, {
      addedAt: new Date(),
      childId: childId,
    });
  }

  deleteKidRequest(userId: string, requestId: string) {
    const userKidsRef = collection(
      this.firestore,
      `userProfile/${userId}/kidsRequests`,
    );
    return deleteDoc(doc(userKidsRef, requestId));
  }

  getUserProfile(user: User): Observable<Profile> {
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return docData(userProfileRef, { idField: "id" }).pipe(
      shareReplay(40),
    ) as Observable<Profile>;
  }

  getUserProfileById(userId: string): Observable<Profile> {
    const userProfileRef: DocumentReference = doc(
      this.firestore,
      `userProfile/${userId}`,
    );

    return docData(userProfileRef, { idField: "id" }).pipe(
      shareReplay({ bufferSize: 50, refCount: true }),
    ) as Observable<Profile>;
  }

  async setUserProfilePicture(photo: Photo) {
    const user = this.authService.auth.currentUser;
    const storageRef = ref(
      this.storage,
      `userProfile/${user.uid}/profilePicture/picture.${photo.format}`,
    );
    await uploadString(storageRef, photo.base64String, "base64", {});
    const url = await getDownloadURL(storageRef);

    await updateProfile(user, { photoURL: url });

    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { profilePicture: url });
  }

  async setUserProfile(userProfile: Profile) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    await updateProfile(user, {
      displayName: userProfile.firstName + " " + userProfile.lastName,
    });

    return updateDoc(userProfileRef, { userProfile });
  }

  getPushDeviceList(): Observable<DocumentData[]> {
    const user = this.authService.auth.currentUser;
    const pushDeviceListRef = collection(
      this.firestore,
      `userProfile/${user.uid}/push`,
    );
    return collectionData(pushDeviceListRef, {
      idField: "id",
    });
  }

  async addPushSubscriber(
    sub: PushSubscription, // WebPush
    deviceId: DeviceId,
    deviceInfo: DeviceInfo,
    token: string, // native
  ) {
    const user = this.authService.auth.currentUser;
    const pushObject = JSON.stringify(sub);
    const userProfileRef: DocumentReference<DocumentData> = doc(
      this.firestore,
      // `userProfile/${user.uid}/push/${deviceId.identifier}`
      `userProfile/${user.uid}/push/${deviceInfo.model}`,
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
      `userProfile/${user.uid}/push/${deviceId}`,
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

  async deleteChild(userId: string, childId: string) {
    const childRef = doc(
      this.firestore,
      `userProfile/${userId}/children/${childId}`,
    );
    return deleteDoc(childRef);
  }
}
