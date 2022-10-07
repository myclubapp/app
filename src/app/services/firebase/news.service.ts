import { Injectable } from '@angular/core';

import { limit, Timestamp } from "firebase/firestore";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where, orderBy
} from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';
import { QueryConstraint, where } from 'firebase/firestore';
import { News } from 'src/app/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  twentyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 20);

  constructor(
    private firestore: Firestore
  ) {

   }


  getNewsRef(type: string): Observable<News[]> {
    console.log("getNewsRef");
    console.log(type);
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `news`);
    const q = query(newssRefList, orderBy("date", "desc"), where("type", "==", type), where("date", ">=", this.twentyDaysAgo.toISOString())); // heute - 20 Tage
    return collectionData(q,  { idField: 'id' }) as unknown as Observable<News[]>;
  }
  getClubNewsRef(clubId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `club/${clubId}/news`);
    const q = query(newssRefList, orderBy("date", "desc"), where("date", ">=", this.twentyDaysAgo.toISOString())); // heute - 20 Tage
    return collectionData(q,  { idField: 'id' }) as unknown as Observable<News[]>;
  }
  getTeamNewsRef(teamId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `teams/${teamId}/news`);
    const q = query(newssRefList, orderBy("date", "desc"), where("date", ">=", this.twentyDaysAgo.toISOString())); // heute - 20 Tage
    return collectionData(q,  { idField: 'id' }) as unknown as Observable<News[]>;
  }


  private getDocData<T>(path: string, idField = 'id'): Observable<T> {
    const reference = doc(this.firestore, path);
    return docData(reference, { idField: idField }) as Observable<T>;
  }

  private getCollectionData<T>(
    path: string,
    queryConstraints: Array<QueryConstraint> = [],
    idField = 'id'
  ): Observable<Array<T>> {
    const reference = collection(this.firestore, path);
    const q = query(reference, ...queryConstraints);
    return collectionData(q, { idField: idField }) as Observable<Array<T>>;
  }


}
