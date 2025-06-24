import { Injectable } from "@angular/core";
import { User } from "@angular/fire/auth";
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  updateDoc,
  doc,
} from "@angular/fire/firestore";
import { Observable, shareReplay } from "rxjs";
import { AuthService } from "../auth.service";
import { limit } from "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(
    private firestore: Firestore,
    private readonly authService: AuthService,
  ) {}

  getNotifications(user: User): Observable<any[]> {
    const notificationsRef = collection(
      this.firestore,
      `userProfile/${user.uid}/notification`,
    );
    const queryRef = query(
      notificationsRef,
      where("opened", "==", false),
      orderBy("date", "desc"),
    );

    return collectionData(queryRef, { idField: "id" }).pipe(
      shareReplay(1),
    ) as Observable<any[]>;
  }

  getReadNotifications(user: User): Observable<any[]> {
    const notificationsRef = collection(
      this.firestore,
      `userProfile/${user.uid}/notification`,
    );
    const queryRef = query(
      notificationsRef,
      where("opened", "==", true),
      limit(20),
      orderBy("date", "desc"),
    );

    return collectionData(queryRef, { idField: "id" }).pipe(
      shareReplay(1),
    ) as Observable<any[]>;
  }

  toggleNotification(notification) {
    const user = this.authService.auth.currentUser;
    const notificationRef = doc(
      this.firestore,
      `userProfile/${user.uid}/notification/${notification.id}`,
    );
    updateDoc(notificationRef, { opened: !notification.opened });
  }
}
