import { inject, Injectable } from "@angular/core";

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
import { HelferEvent, Veranstaltung } from "src/app/models/event";
import { User } from "firebase/auth";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(
    private firestore: Firestore = inject(Firestore),
    private readonly authService: AuthService
  ) {}

  /* CLUB EventS */

  getClubEventRef(clubId: string, eventId: string): Observable<Veranstaltung> {
    // console.log(`Read Team Games Attendees List Ref ${teamId} with game ${gameId}`)
    const eventRef = doc(this.firestore, `club/${clubId}/events/${eventId}`);
    return docData(eventRef, { idField: "id" }) as Observable<Veranstaltung>;
  }

  getClubEventsRef(clubId: string): Observable<Veranstaltung[]> {
    const eventsRefList = collection(this.firestore, `club/${clubId}/events`);
    const q = query(
      eventsRefList,
      where(
        "date",
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 1))
      )
    ); // heute - 1 Tag
    return collectionData(q, {
      idField: "id",
    }) as unknown as Observable<Veranstaltung[]>;
  }
  getClubEventsPastRef(clubId: string): Observable<Veranstaltung[]> {
    const eventsRefList = collection(this.firestore, `club/${clubId}/events`);
    const q = query(
      eventsRefList,
      where(
        "date",
        "<",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 1))
      ),
      limit(20)
    ); // heute - 1 Tag

    return collectionData(q, {
      idField: "id",
    }) as unknown as Observable<Veranstaltung[]>;
  }

  getClubEventAttendeesRef(clubId: string, eventId: string): Observable<any[]> {
    const attendeesRefList = collection(
      this.firestore,
      `club/${clubId}/events/${eventId}/attendees`
    );
    return collectionData(attendeesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }
  async setClubEventAttendeeStatus(
    status: boolean,
    clubId: string,
    eventId: string
  ) {
    const user = this.authService.auth.currentUser;
    const statusRef = doc(
      this.firestore,
      `club/${clubId}/events/${eventId}/attendees/${user.uid}`
    );
    return await setDoc(statusRef, { status });
  }

  async setCreateClubEvent(event: Veranstaltung) {
    const user = this.authService.auth.currentUser;
    console.log("event");
    console.log(event);
    return addDoc(
      collection(this.firestore, `userProfile/${user.uid}/clubEvents`),
      event
    );
  }

  /* HELFER EVENTS */
  getClubHelferEventRef(
    clubId: string,
    eventId: string
  ): Observable<HelferEvent> {
    // console.log(`Read Team Games Attendees List Ref ${teamId} with game ${gameId}`)
    const eventRef = doc(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}`
    );
    return docData(eventRef, { idField: "id" }) as Observable<HelferEvent>;
  }

  getClubHelferEventRefs(clubId: string): Observable<HelferEvent[]> {
    const eventsRefList = collection(
      this.firestore,
      `club/${clubId}/helferEvents`
    );
    const q = query(
      eventsRefList,
      where(
        "date",
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 1))
      )
    ); // heute - 1 Tag
    return collectionData(q, {
      idField: "id",
    }) as unknown as Observable<HelferEvent[]>;
  }
  getClubHelferEventPastRefs(clubId: string): Observable<HelferEvent[]> {
    const eventsRefList = collection(
      this.firestore,
      `club/${clubId}/helferEvents`
    );
    const q = query(
      eventsRefList,
      where(
        "date",
        "<",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 1))
      ),
      limit(20)
    ); // heute - 1 Tag

    return collectionData(q, {
      idField: "id",
    })  as Observable<HelferEvent[]>;
  }

  getClubHelferEventAttendeesRef(
    clubId: string,
    eventId: string
  ): Observable<any[]> {
    const attendeesRefList = collection(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}/attendees`
    );
    return collectionData(attendeesRefList, {
      idField: "id",
    }) as Observable<any[]>;
  }

  getClubHelferEventSchichtenRef(
    clubId: string,
    eventId: string
  ): Observable<any[]> {
    const schichtenRefList = collection(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}/schichten`
    );
    return collectionData(schichtenRefList, {
      idField: "id",
    })  as Observable<any[]>;
  }

  getClubHelferEventSchichtAttendeesRef(
    clubId: string,
    eventId: string,
    schichtId: string
  ): Observable<any[]> {
    console.log("getClubHelferEventSchichtAttendeesRef" , clubId,eventId, schichtId )
    const schichtAttendeesListRef = collection(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}/schichten/${schichtId}/attendees`
    );
    console.log(schichtAttendeesListRef.id, schichtAttendeesListRef.path);
    return collectionData(schichtAttendeesListRef, {
      idField: "id",
    }) as Observable<any[]>;
  }

  setClubHelferEventSchichtAttendeeStatus(
    status: boolean,
    clubId: string,
    eventId: string,
    schichtId: string
  ) {
    const user = this.authService.auth.currentUser;
    const statusRef = doc(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}/schichten/${schichtId}/attendees/${user.uid}`
    );
    return setDoc(statusRef, { status });
  }

  setClubHelferEventAttendeeStatus(
    status: boolean,
    clubId: string,
    eventId: string
  ) {
    const user = this.authService.auth.currentUser;
    const statusRef = doc(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}/attendees/${user.uid}`
    );
    return setDoc(statusRef, { status });
  }

  async setCreateHelferEvent(event: HelferEvent) {
    const user = this.authService.auth.currentUser;
    console.log("Helferevent");
    console.log(event);
    const newHelferevent = await addDoc(
      collection(this.firestore, `userProfile/${user.uid}/helferEvents`),
      event
    );
  }

  deleteClubEvent(clubId: string, eventId: string) {
    const eventRef = doc(this.firestore, `club/${clubId}/events/${eventId}`);
    return deleteDoc(eventRef);
  }

  deleteHelferEvent(clubId: string, eventId: string) {
    const eventRef = doc(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}`
    );
    return deleteDoc(eventRef);
  }

  /* TEAM EventS */
  /*
  getTeamEventsRef(teamId: string): Observable<Veranstaltung[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const eventsRefList = collection(this.firestore, `teams/${teamId}/events`);
    const q = query(
      eventsRefList,
      where(
        "dateTime",
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 7))
      )
    ); // heute - 7 Tage
    return collectionData(q, { idField: "id" }) as unknown as Observable<
    Veranstaltung[]
    >;
  }

  // PAST 20 Entries
  getTeamEventsRefPast(teamId: string): Observable<Veranstaltung[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const eventsRefList = collection(this.firestore, `teams/${teamId}/events`);
    const q = query(
      eventsRefList,
      where(
        "dateTime",
        "<",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 7))
      ),
      limit(20)
    ); // heute - 7 Tage
    return collectionData(q, { idField: "id" }) as unknown as Observable<
    Veranstaltung[]
    >;
  async setCreateTeamEvent(event: Veranstaltung, user: User) {
    console.log("event");
    console.log(event);
    return addDoc(
      collection(this.firestore, `userProfile/${user.uid}/teamEvent`),
      event
    );
  }
  }

  getTeamEventsAttendeesRef(
    teamId: string,
    eventId: string
  ): Observable<any[]> {
    // console.log(`Read Team Events Attendees List Ref ${teamId} with Event ${eventId}`)
    const attendeesRefList = collection(
      this.firestore,
      `teams/${teamId}/events/${eventId}/attendees`
    );
    return collectionData(attendeesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }
    async setTeamEventAttendeeStatus(
    userId: string,
    status: boolean,
    teamId: string,
    eventId: string
  ) {
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/events/${eventId}/attendees/${userId}`
    );
    return await setDoc(statusRef, { status });
  }

  */
}
