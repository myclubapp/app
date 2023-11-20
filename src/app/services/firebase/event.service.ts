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

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private firestore: Firestore = inject(Firestore)) { }

  /* CLUB EventS */
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
    const attendeesRefList = collection(this.firestore, `club/${clubId}/events/${eventId}/attendees`);
    return collectionData(attendeesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }
  async setClubEventAttendeeStatus(
    userId: string,
    status: boolean,
    clubId: string,
    eventId: string
  ) {
    const statusRef = doc(
      this.firestore,
      `club/${clubId}/events/${eventId}/attendees/${userId}`
    );
    return await setDoc(statusRef, { status });
  }

  async setCreateClubEvent(event: Veranstaltung, user: User) {
    console.log("event");
    console.log(event);
    return addDoc(
      collection(this.firestore, `userProfile/${user.uid}/clubEvents`),
      event
    );
  }

  /* HELFER EVENTS */



  getClubHelferEventRefs(clubId: string): Observable<HelferEvent[]> {
    const eventsRefList = collection(this.firestore, `club/${clubId}/helferEvents`);
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
    const eventsRefList = collection(this.firestore, `club/${clubId}/helferEvents`);
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
    }) as unknown as Observable<HelferEvent[]>;
  }

  getClubHelferEventAttendeesRef(clubId: string, eventId: string): Observable<any[]> {
    const attendeesRefList = collection(this.firestore, `club/${clubId}/helferEvents/${eventId}/attendees`);
    return collectionData(attendeesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }

  async setHelferEventAttendeeStatus(
    userId: string,
    status: boolean,
    clubId: string,
    eventId: string
  ) {
    const statusRef = doc(
      this.firestore,
      `club/${clubId}/helferEvents/${eventId}/attendees/${userId}`
    );
    return await setDoc(statusRef, { status });
  }


  async setCreateHelferEvent(event: HelferEvent, user: User) {
    console.log("Helferevent");
    console.log(event);
    return addDoc(
      collection(this.firestore, `userProfile/${user.uid}/helferEvents`),
      event
    );
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
