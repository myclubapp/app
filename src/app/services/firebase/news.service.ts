import {
  Injectable,
  inject,
  Injector,
  runInInjectionContext,
} from "@angular/core";

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
  updateDoc,
  deleteDoc,
} from "@angular/fire/firestore";
import { Observable, shareReplay } from "rxjs";
import { DocumentReference } from "@angular/fire/firestore";
import { News } from "src/app/models/news";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  twentyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 20);
  fourtyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 40);
  sixtyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 60);
  private injector = inject(Injector);

  constructor(private firestore: Firestore) {}

  getNewsDetail(newsId: string): Observable<News> {
    const newsRef = doc(this.firestore, `news/${newsId}`);
    return runInInjectionContext(this.injector, () =>
      docData(newsRef, { idField: "id" }).pipe(shareReplay(10)),
    ) as Observable<News>;
  }

  getClubNewsDetail(clubId: string, newsId: string): Observable<News> {
    const newsRef = doc(this.firestore, `club/${clubId}/news/${newsId}`);
    return runInInjectionContext(this.injector, () =>
      docData(newsRef, { idField: "id" }).pipe(shareReplay(10)),
    ) as Observable<News>;
  }

  getNewsRef(type: string): Observable<News[]> {
    // console.log('getNewsRef');
    // console.log(type);
    // console.log(`Read Team Events List Ref ${teamId}`)
    return runInInjectionContext(this.injector, () => {
      const newssRefList = collection(this.firestore, "news");
      const q = query(
        newssRefList,
        orderBy("date", "desc"),
        where("type", "==", type),
        where("date", ">=", this.fourtyDaysAgo.toISOString()),
        limit(30),
      ); // heute - 20 Tage
      return collectionData(q, { idField: "id" }).pipe(shareReplay(1));
    }) as unknown as Observable<News[]>;
  }

  getClubNewsRef(clubId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    return runInInjectionContext(this.injector, () => {
      const newssRefList = collection(this.firestore, `club/${clubId}/news`);
      const q = query(
        newssRefList,
        orderBy("date", "desc"),
        where("date", ">=", this.sixtyDaysAgo.toISOString()),
        limit(30),
      ); // heute - 20 Tage
      return collectionData(q, { idField: "id" }).pipe(shareReplay(1));
    }) as unknown as Observable<News[]>;
  }

  getTeamNewsRef(teamId: string): Observable<News[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    return runInInjectionContext(this.injector, () => {
      const newssRefList = collection(this.firestore, `teams/${teamId}/news`);
      const q = query(
        newssRefList,
        orderBy("date", "desc"),
        where("date", ">=", this.sixtyDaysAgo.toISOString()),
        limit(30),
      ); // heute - 20 Tage
      return collectionData(q, { idField: "id" }).pipe(shareReplay(1));
    }) as unknown as Observable<News[]>;
  }

  async createClubNews(clubId: string, news: any): Promise<DocumentReference> {
    const newsCollection = collection(this.firestore, `club/${clubId}/news`);
    return await addDoc(newsCollection, {
      ...news,
      // Speichere Datum konsistent als ISO-String, damit die bestehenden where()-Filter mit ISO funktionieren
      date: new Date().toISOString(),
    });
  }

  async updateNews(newsId: string, changes: Partial<News>): Promise<void> {
    const newsRef = doc(this.firestore, `news/${newsId}`);
    await updateDoc(newsRef, changes as any);
  }

  async updateClubNews(
    clubId: string,
    newsId: string,
    changes: Partial<News>,
  ): Promise<void> {
    const newsRef = doc(this.firestore, `club/${clubId}/news/${newsId}`);
    await updateDoc(newsRef, changes as any);
  }

  async deleteNews(newsId: string): Promise<void> {
    const newsRef = doc(this.firestore, `news/${newsId}`);
    await deleteDoc(newsRef);
  }

  async deleteClubNews(clubId: string, newsId: string): Promise<void> {
    const newsRef = doc(this.firestore, `club/${clubId}/news/${newsId}`);
    await deleteDoc(newsRef);
  }
}
