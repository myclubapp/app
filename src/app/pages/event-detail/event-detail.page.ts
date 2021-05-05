import { NavParams, ModalController } from '@ionic/angular';
import { EventService } from './../../services/event/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  public currentEvent: any = {};
  constructor(
    private navParams: NavParams,
    private eventService: EventService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {

    const eventId: string = this.navParams.get('eventId'); //this.route.snapshot.paramMap.get('id') || 
    this.eventService.getEventDetail(eventId).then(eventSnapshot => {
      this.currentEvent = eventSnapshot.data();
      this.currentEvent.id = eventSnapshot.id;
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
