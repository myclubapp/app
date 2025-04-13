import { Injectable, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from "@angular/fire/firestore";
import { addDoc, Timestamp } from 'firebase/firestore';
import {
  Observable,
} from "rxjs";
import { User } from 'firebase/auth';
import { orderBy, query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HelferService {
  user: User;
  constructor(
    private readonly firestore: Firestore = inject(Firestore),
    private readonly authService: AuthService
  ) {

  }
  /*getHelferPunkteList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.getUserHelferPunkteRefs(user);
      }),
      tap((helferPunkte) => console.log("helferPunkte:", helferPunkte)),
      
      catchError((err) => {
        console.error("Error in getTeamList:", err);
        return of([]); // Return an empty array on error
      })
    );
  }*/

  async deleteHelferPunkt(clubId: string, helferPunktId: string): Promise<void> {
    const docRef = doc(this.firestore, `club/${clubId}/helferPunkte/${helferPunktId}`);
    await deleteDoc(docRef);
  }

  updateHelferPunkt(clubId: string, helferPunktId: string, data: any) {
    const helferPunktRef = doc(this.firestore, `club/${clubId}/helferPunkte/${helferPunktId}`);
    return updateDoc(helferPunktRef, data, {merge: true});
  }

  getHelferPunkteRefs(clubId: string): Observable<any[]> {
    // console.log(userId, clubId)
    const helferPunkteRefList = collection(
      this.firestore,
      `club/${clubId}/helferPunkte`
    );
    const q = query(
      helferPunkteRefList,
      
      orderBy("eventDate", "desc")
    )
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }


  getUserHelferPunkteRefs(userId: any, clubId: string): Observable<any[]> {
    console.log(userId, clubId)
    const helferPunkteRefList = collection(
      this.firestore,
      `club/${clubId}/helferPunkte`
    );
    const q = query(
      helferPunkteRefList,
      where("userId", "==", userId),
      orderBy("eventDate", "desc")
    )
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }


  getUserHelferPunkteRefsWithFilter(userId: any, clubId: string, dateFrom: Timestamp, dateTo: Timestamp): Observable<any[]> {
   //  console.log(userId, clubId, dateFrom, dateTo)
    const helferPunkteRefList = collection(
      this.firestore,
      `club/${clubId}/helferPunkte`
    );
    const q = query(
      helferPunkteRefList,
      where("userId", "==", userId),
      where("eventDate", ">=", dateFrom),
      where("eventDate", "<=", dateTo),
      orderBy("eventDate", "desc")
    )
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }

  createHelferPunkt(clubId: string, userId: string, name: string, eventDate: string, points: number) {
    console.log(clubId, userId, name, eventDate, points)
    const helferPunktRef = collection(this.firestore, `club/${clubId}/helferPunkte`);
    return addDoc(helferPunktRef, {
      userId: userId,
      userRef: doc(this.firestore, `userProfile/${userId}`),
      name: name,
      eventName: name,
      date: new Date(),
      eventDate: new Date(eventDate),
      points: points,
      status: true,
      confirmed: true,
      confirmedBy: doc(this.firestore, `userProfile/${this.authService.auth.currentUser?.uid}`)
    });
  }

  async getHelferPunkte(clubId: string): Promise<any[]> {
    const helferPunkteRef = collection(this.firestore, `clubs/${clubId}/helferPunkte`);
    const snapshot = await getDocs(helferPunkteRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
}
