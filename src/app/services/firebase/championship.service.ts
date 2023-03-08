import { Injectable } from "@angular/core";

import { limit, Timestamp } from "firebase/firestore";
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
  query,
  where,
} from "@angular/fire/firestore";
import { Observable, Observer } from "rxjs";
import { Game } from "src/app/models/game";

@Injectable({
  providedIn: "root",
})
export class ChampionshipService {
  constructor(private readonly firestore: Firestore) {}

  /* TEAM GAME */

  getTeamGameRef(teamId: string, gameId: string): Observable<Game> {
    // console.log(`Read Team Games Attendees List Ref ${teamId} with game ${gameId}`)
    const gameRef = doc(this.firestore, `teams/${teamId}/games/${gameId}`);
    return docData(gameRef, { idField: "id" }) as unknown as Observable<Game>;
  }

  /* TEAM GAMES */
  getTeamGamesRef(teamId: string): Observable<Game[]> {
    // console.log(`Read Team Games List Ref ${teamId}`)
    const gamesRefList = collection(this.firestore, `teams/${teamId}/games`);
    const q = query(
      gamesRefList,
      where(
        "dateTime",
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 1))
      )
    ); // heute - 1 Tag
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Game[]
    >;
  }

  // PAST 20 Entries
  getTeamGamesRefPast(teamId: string): Observable<Game[]> {
    // console.log(`Read Team Games List Ref ${teamId}`)
    const gamesRefList = collection(this.firestore, `teams/${teamId}/games`);
    const q = query(
      gamesRefList,
      where(
        "dateTime",
        "<",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 1))
      ),
      limit(20)
    ); // heute - 1 Tag
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Game[]
    >;
  }

  /* CLUB GAMES */
  getClubGamesRef(clubId: string): Observable<Game> {
    const gamesRefList = collection(this.firestore, `club/${clubId}/games`);
    return collectionData(gamesRefList, {
      idField: "id",
    }) as unknown as Observable<Game>;
  }

  /* TEAM GAMES ATTENDEES */
  getTeamGameAttendeesRef(teamId: string, gameId: string): Observable<any[]> {
    // console.log(`Read Team Games Attendees List Ref ${teamId} with game ${gameId}`)
    const attendeesRefList = collection(
      this.firestore,
      `teams/${teamId}/games/${gameId}/attendees`
    );
    return collectionData(attendeesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }

  /* SET TEAM GAMES ATTENDEE Status */
  async setTeamGameAttendeeStatus(
    userId: string,
    status: boolean,
    teamId: string,
    gameId: string
  ) {
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/games/${gameId}/attendees/${userId}`
    );
    return setDoc(statusRef, {
      id: userId,
      status: status,
    });
  }
}
