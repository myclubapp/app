import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { User } from '@angular/fire/auth';

import { Observable } from 'rxjs';

import { Club, ClubRef } from '../models/club';
import { Team, TeamRef } from '../models/team';
import { QueryConstraint, where } from 'firebase/firestore';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private readonly firestore: Firestore) {}

  getClubRef(clubId: string): Observable<ClubRef> {
    return this.getDocData<ClubRef>(`club/${clubId}`);
  }

  getClubRefs(user: User): Observable<Array<ClubRef>> {
    return this.getCollectionData<ClubRef>(`userProfile/${user.uid}/clubs`);
  }

  queryClubs(clubIds: Array<string>): Observable<Array<Club>> {
    const queryConstraints = clubIds.length
      ? [where('id', 'array-contains-any', clubIds)]
      : [];
    return this.getCollectionData<Club>('club', queryConstraints);
  }

  getClubMemberRefs(clubId: string): Observable<Array<unknown>> {
    return this.getCollectionData<unknown>(`club/${clubId}/members`);
  }

  getClubAdminRefs(clubId: string): Observable<Array<unknown>> {
    return this.getCollectionData<unknown>(`club/${clubId}/admins`);
  }

  getTeamRef(teamId: string): Observable<TeamRef> {
    return this.getDocData<TeamRef>(`teams/${teamId}`);
  }

  getTeamRefs(user: User): Observable<Array<TeamRef>> {
    return this.getCollectionData<TeamRef>(`userProfile/${user.uid}/teams`);
  }

  getTeamMemberRefs(teamId: string): Observable<Array<unknown>> {
    return this.getCollectionData<unknown>(`teams/${teamId}/members`);
  }

  getTeamAdminRefs(teamId: string): Observable<Array<unknown>> {
    return this.getCollectionData<unknown>(`teams/${teamId}/admins`);
  }

  getNewsRefs(clubTypes: Array<string>): Observable<Array<News>> {
    const twentyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 20);
    let queryConstraints = [
      orderBy('date', 'desc'),
      where('date', '>=', twentyDaysAgo.toISOString()),
    ];
    if (clubTypes.length) {
      queryConstraints = [
        ...queryConstraints,
        where('type', 'array-contains-any', clubTypes),
      ];
    }
    return this.getCollectionData<News>('news', queryConstraints);
  }

  getClubNewsRefs(clubId: string): Observable<Array<News>> {
    const twentyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 20);
    return this.getCollectionData<News>(`club/${clubId}/news`, [
      orderBy('date', 'desc'),
      where('date', '>=', twentyDaysAgo.toISOString()),
    ]);
  }

  getTeamNewsRefs(teamId: string): Observable<Array<News>> {
    const twentyDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 20);
    return this.getCollectionData<News>(`teams/${teamId}/news`, [
      orderBy('date', 'desc'),
      where('date', '>=', twentyDaysAgo.toISOString()),
    ]);
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
