import { Injectable, inject } from '@angular/core';
import { AuthService } from '../auth.service';
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
  Observable,
  Observer,
  catchError,
  combineLatest,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
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

  getUserHelferPunkteRefs(userId: any, clubId: string): Observable<any[]> {
    // console.log(userId, clubId)
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

}
