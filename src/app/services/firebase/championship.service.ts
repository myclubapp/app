import { Injectable, inject } from "@angular/core";

import {
  limit,
  Timestamp,
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  setDoc,
  query,
  where,
} from "@angular/fire/firestore";
import { orderBy } from "firebase/firestore";
import { Observable, shareReplay } from "rxjs";
import { Game } from "src/app/models/game";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class ChampionshipService {
  constructor(
    private readonly authService: AuthService,
    private firestore: Firestore,
  ) {}

  /* TEAM GAME */

  getTeamRankingTable(teamId: string, year: string): Observable<any[]> {
    const tableRef = collection(
      this.firestore,
      `teams/${teamId}/ranking/${year}/table`,
    );
    return collectionData(tableRef, { idField: "id" }) as Observable<any[]>;
  }

  getTeamRanking(teamId: string, year: string): Observable<any> {
    const tableRef = doc(this.firestore, `teams/${teamId}/ranking/${year}`);
    return docData(tableRef, { idField: "id" }) as Observable<any>;
  }

  getTeamGameRef(teamId: string, gameId: string): Observable<Game> {
    // console.log(`Read Team Games Attendees List Ref ${teamId} with game ${gameId}`)
    const gameRef = doc(this.firestore, `teams/${teamId}/games/${gameId}`);
    return docData(gameRef, { idField: "id" }).pipe(
      shareReplay(10),
    ) as Observable<Game>;
  }

  /* TEAM GAMES */
  getTeamGamesRefs(teamId: string): Observable<Game[]> {
    // console.log(`Read Team Games List Ref ${teamId}`)
    const gamesRefList = collection(this.firestore, `teams/${teamId}/games`);
    const q = query(
      gamesRefList,
      where(
        "dateTime",
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 2)), // 2h lang das "alte Spiel" anzeigen
      ),
      orderBy("dateTime", "asc"),
    ); // heute - 1 Tag
    return collectionData(q, { idField: "id" }).pipe(
      shareReplay(1),
    ) as Observable<Game[]>;
  }

  // PAST 20 Entries
  getTeamGamesPastRefs(teamId: string): Observable<Game[]> {
    //console.log(`Read Team Games List Ref ${teamId}`)
    const gamesRefList = collection(this.firestore, `teams/${teamId}/games`);
    const q = query(
      gamesRefList,
      where(
        "dateTime",
        "<",
        Timestamp.fromDate(new Date(Date.now())), // sofort in "vergangen" anzeigen
      ),
      limit(30),
      orderBy("dateTime", "desc"),
    ); // heute - 1 Tag
    return collectionData(q, { idField: "id" }).pipe(
      shareReplay(1),
    ) as Observable<Game[]>;
  }

  getTeamGamesByDateRange(
    teamId: string,
    startDate: Date,
    endDate: Date,
  ): Observable<Game[]> {
    const gamesRefList = collection(this.firestore, `teams/${teamId}/games`);
    const q = query(
      gamesRefList,
      where("dateTime", ">=", Timestamp.fromDate(startDate)),
      where("dateTime", "<=", Timestamp.fromDate(endDate)),
      orderBy("dateTime", "asc"),
    );
    return collectionData(q, { idField: "id" }).pipe(
      shareReplay(1),
    ) as Observable<Game[]>;
  }

  /* CLUB GAMES */
  getClubGamesRef(clubId: string): Observable<Game[]> {
    const gamesRefList = collection(this.firestore, `club/${clubId}/games`);
    const q = query(
      gamesRefList,
      where(
        "dateTime",
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 2)), // 2h lang das "alte Spiel" anzeigen
      ),
      orderBy("dateTime", "asc"),
    ); // heute - 1 Tag
    return collectionData(q, { idField: "id" }).pipe(
      shareReplay(1),
    ) as Observable<Game[]>;
  }

  /* TEAM GAMES ATTENDEES */
  getTeamGameAttendeesRef(teamId: string, gameId: string): Observable<any[]> {
    // console.log(`Read Team Games Attendees List Ref ${teamId} with game ${gameId}`)
    const attendeesRefList = collection(
      this.firestore,
      `teams/${teamId}/games/${gameId}/attendees`,
    );
    return collectionData(attendeesRefList, {
      idField: "id",
    }).pipe(shareReplay(1)) as Observable<any[]>;
  }

  /* SET TEAM GAMES ATTENDEE Status */
  setTeamGameAttendeeStatus(status: boolean, teamId: string, gameId: string) {
    const user = this.authService.auth.currentUser;
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/games/${gameId}/attendees/${user.uid}`,
    );
    return setDoc(statusRef, { status });
  }
  setTeamGameAttendeeStatusAdmin(
    status: boolean,
    teamId: string,
    gameId: string,
    memberId: string,
  ) {
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/games/${gameId}/attendees/${memberId}`,
    );
    return setDoc(statusRef, { status });
  }

  deleteTeamGame(teamId: string, gameId: string) {
    const gameRef = doc(this.firestore, `teams/${teamId}/games/${gameId}`);

    const attendeesRefList = collection(
      this.firestore,
      `teams/${teamId}/games/${gameId}/attendees`,
    );

    return deleteDoc(gameRef);
  }
}
