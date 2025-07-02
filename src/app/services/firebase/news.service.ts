import { Injectable } from "@angular/core";

import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  docData,
  doc,
  limit,
  setDoc,
  addDoc,
} from "@angular/fire/firestore";
import { Observable, shareReplay } from "rxjs";
import { News } from "src/app/models/news";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  twentyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 20);
  fourtyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 40);
  sixtyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 60);

  constructor(private firestore: Firestore) {}

  getNewsDetail(newsId: string): Observable<News> {
    const newsRef = doc(this.firestore, `news/${newsId}`);
    return docData(newsRef, { idField: "id" }).pipe(
      shareReplay(10),
    ) as Observable<News>;
  }

  getClubNewsDetail(clubId: string, newsId: string): Observable<News> {
    const newsRef = doc(this.firestore, `club/${clubId}/news/${newsId}`);
    return docData(newsRef, { idField: "id" }).pipe(
      shareReplay(10),
    ) as Observable<News>;
  }

  getNewsRef(type: string): Observable<News[]> {
    // console.log('getNewsRef');
    // console.log(type);
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, "news");
    const q = query(
      newssRefList,
      orderBy("date", "desc"),
      where("type", "==", type),
      where("date", ">=", this.fourtyDaysAgo.toISOString()),
      limit(30),
    ); // heute - 20 Tage
    return collectionData(q, { idField: "id" }).pipe(
      shareReplay(1),
    ) as unknown as Observable<News[]>;
  }

  getClubNewsRef(clubId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `club/${clubId}/news`);
    const q = query(
      newssRefList,
      orderBy("date", "desc"),
      where("date", ">=", this.sixtyDaysAgo.toISOString()),
      limit(30),
    ); // heute - 20 Tage
    return collectionData(q, { idField: "id" }).pipe(
      shareReplay(1),
    ) as unknown as Observable<News[]>;
  }

  getTeamNewsRef(teamId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const newssRefList = collection(this.firestore, `teams/${teamId}/news`);
    const q = query(
      newssRefList,
      orderBy("date", "desc"),
      where("date", ">=", this.sixtyDaysAgo.toISOString()),
      limit(30),
    ); // heute - 20 Tage
    return collectionData(q, { idField: "id" }).pipe(
      shareReplay(1),
    ) as unknown as Observable<News[]>;
  }

  async createClubNews(clubId: string, news: any): Promise<void> {
    const newsCollection = collection(this.firestore, `club/${clubId}/news`);
    await addDoc(newsCollection, {
      ...news,
      date: new Date(),
    });
  }
}
