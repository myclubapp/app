import { ModalController } from '@ionic/angular';
import {
  EventService
} from './../../services/event/event.service';
import {
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  eventName: string;
  eventDate: string;
  eventPrice: number;
  eventCost: number;
  constructor(
    private router: Router, 
    private eventService: EventService,
    private modalCtrl: ModalController
    ) {}

  ngOnInit() {}

  createEvent(
    eventName: string,
    eventDate: string,
    eventPrice: number,
    eventCost: number
  ): void {
    if (
      eventName === undefined ||
      eventDate === undefined ||
      eventPrice === undefined ||
      eventCost === undefined
    ) {
      return;
    }
    this.eventService
      .createEvent(eventName, eventDate, eventPrice, eventCost)
      .then(() => {
        this.router.navigateByUrl('');
      });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}