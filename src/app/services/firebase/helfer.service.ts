import { Injectable, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
} from "@angular/fire/firestore";
import { Timestamp } from 'firebase/firestore';
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

  deleteHelferPunkt(clubId: string, helferPunktId: string) {
    const helferPunktRef = doc(this.firestore, `club/${clubId}/helferPunkte/${helferPunktId}`);
    return deleteDoc(helferPunktRef); 
  }

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
}
