import {AuthService} from './../../services/auth.service';
import {Injectable} from '@angular/core';
import firebase from 'firebase';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  public eventListRef: firebase.firestore.CollectionReference;
  constructor(public authService: AuthService) {}

  async createEvent(eventName: string, eventDate: string, eventPrice: number, eventCost: number): Promise<firebase.firestore.DocumentReference> {
    const user: firebase.User = await this.authService.getUser();
    this.eventListRef = firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.eventListRef.add({
      name: eventName,
      date: eventDate,
      price: eventPrice * 1,
      cost: eventCost * 1,
      revenue: eventCost * -1,
    });
  }
  async getEventList(): Promise<firebase.firestore.QuerySnapshot> {
    const user: firebase.User = await this.authService.getUser();
    this.eventListRef = firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.eventListRef.get();
  }
  async getEventDetail(eventId: string): Promise<firebase.firestore.DocumentSnapshot> {
    const user: firebase.User = await this.authService.getUser();
    this.eventListRef = firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.eventListRef.doc(eventId).get();
  }
}
