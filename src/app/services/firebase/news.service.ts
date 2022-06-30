import { Injectable } from '@angular/core';

import { limit, Timestamp } from "firebase/firestore";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where
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

  getNewsRef(): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `news`);
    const q = query(newssRefList, where("date", ">=", new Date(Date.now() - 1000 * 3600 * 24 * 20).toISOString())); // heute - 20 Tage
    return collectionData(q,  { idField: 'id' }) as unknown as Observable<News[]>;
  }
}
