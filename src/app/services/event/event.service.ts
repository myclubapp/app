import {AuthService} from './../../services/auth.service';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  public eventListRef: firebase.default.firestore.CollectionReference;
  constructor(public authService: AuthService) {}

  async createEvent(eventName: string, eventDate: string, eventPrice: number, eventCost: number): Promise<firebase.default.firestore.DocumentReference> {
    const user: firebase.default.User = await this.authService.getUser();
    this.eventListRef = firebase.default.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.eventListRef.add({
      name: eventName,
      date: eventDate,
      price: eventPrice * 1,
      cost: eventCost * 1,
      revenue: eventCost * -1,
    });
  }
  async getEventList(): Promise<firebase.default.firestore.QuerySnapshot> {
    const user: firebase.default.User = await this.authService.getUser();
    this.eventListRef = firebase.default.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.eventListRef.get();
  }
  async getEventDetail(eventId: string): Promise<firebase.default.firestore.DocumentSnapshot> {
    const user: firebase.default.User = await this.authService.getUser();
    this.eventListRef = firebase.default.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.eventListRef.doc(eventId).get();
  }
}
