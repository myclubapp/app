import { Injectable } from '@angular/core';

import { limit, Timestamp } from "firebase/firestore";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where, orderBy
} from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';

import { News } from 'src/app/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private firestore: Firestore
  ) {

   }

  getNewsRef(type: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `news`);
    const q = query(newssRefList, orderBy("date", "desc"), where("type", "==", type), where("date", ">=", new Date(Date.now() - 1000 * 3600 * 24 * 20).toISOString())); // heute - 20 Tage
    return collectionData(q,  { idField: 'id' }) as unknown as Observable<News[]>;
  }
  getClubNewsRef(clubId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `club/${clubId}/news`);
    const q = query(newssRefList, orderBy("date", "desc"), where("date", ">=", new Date(Date.now() - 1000 * 3600 * 24 * 20).toISOString())); // heute - 20 Tage
    return collectionData(q,  { idField: 'id' }) as unknown as Observable<News[]>;
  }
  getTeamNewsRef(teamId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `teams/${teamId}/news`);
    const q = query(newssRefList, orderBy("date", "desc"), where("date", ">=", new Date(Date.now() - 1000 * 3600 * 24 * 20).toISOString())); // heute - 20 Tage
    return collectionData(q,  { idField: 'id' }) as unknown as Observable<News[]>;
  }
}
