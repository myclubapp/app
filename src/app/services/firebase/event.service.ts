import { Injectable } from '@angular/core';

import { limit, Timestamp } from 'firebase/firestore';
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
} from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private firestore: Firestore) {}

  /* TEAM EventS */
  getTeamEventsRef(teamId: string): Observable<Event[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const eventsRefList = collection(this.firestore, `teams/${teamId}/events`);
    const q = query(
      eventsRefList,
      where(
        'dateTime',
        '>=',
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 7))
      )
    ); // heute - 7 Tage
    return collectionData(q, { idField: 'id' }) as unknown as Observable<
      Event[]
    >;
  }

  // PAST 20 Entries
  getTeamEventsRefPast(teamId: string): Observable<Event[]> {
    // console.log(`Read Team Events List Ref ${teamId}`)
    const eventsRefList = collection(this.firestore, `teams/${teamId}/events`);
    const q = query(
      eventsRefList,
      where(
        'dateTime',
        '<',
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 7))
      ),
      limit(20)
    ); // heute - 7 Tage
    return collectionData(q, { idField: 'id' }) as unknown as Observable<
      Event[]
    >;
  }

  /* CLUB EventS */
  getClubEventsRef(clubId: string): Observable<Event> {
    const eventsRefList = collection(this.firestore, `club/${clubId}/events`);
    return collectionData(eventsRefList, {
      idField: 'id',
    }) as unknown as Observable<Event>;
  }

  /* TEAM EventS ATTENDEES */
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
      idField: 'id',
    }) as unknown as Observable<any[]>;
  }

  /* TEAM EventS ATTENDEE Status */
  setTeamEventAttendeeStatus(
    userId: string,
    status: boolean,
    teamId: string,
    eventId: string
  ) {
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/events/${eventId}/attendees/${userId}`
    );
    return setDoc(statusRef, { status: status });
  }
}
