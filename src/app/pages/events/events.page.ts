import {EventDetailPage} from './../event-detail/event-detail.page';
import {EventCreatePage} from './../event-create/event-create.page';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {EventService} from './../../services/event/event.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  public eventList: Array<any>;
  constructor(private eventService: EventService, private routerOutlet: IonRouterOutlet, private modalController: ModalController) {}

  ngOnInit() {
    this.eventService.getEventList().then((eventListSnapshot) => {
      this.eventList = [];
      eventListSnapshot.forEach((snap) => {
        this.eventList.push({
          id: snap.id,
          name: snap.data().name,
          price: snap.data().price,
          date: snap.data().date,
        });
        return false;
      });
    });
  }

  async openCreate() {
    console.log('clicked');
    const modal = await this.modalController.create({
      component: EventCreatePage,

      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    console.log(data);
  }
  async openDetail(id) {
    console.log('clicked');
    const modal = await this.modalController.create({
      component: EventDetailPage,
      componentProps: {
        eventId: id,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    console.log(data);
  }
}
