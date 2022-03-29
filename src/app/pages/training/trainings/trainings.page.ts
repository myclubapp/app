import { Component, OnInit } from '@angular/core';
import { IonItemSliding, IonRouterOutlet, ModalController } from '@ionic/angular';
import { TrainingAddPage } from '../training-add/training-add.page';
import { TrainingDetailPage } from '../training-detail/training-detail.page';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    ) { }

  ngOnInit() {
  }

  toggleTraining(){
    console.log("toggle");
  }


  unsubscribe(slidingItem: IonItemSliding){
    slidingItem.closeOpened();
    console.log("NO");
  }

  subscribe(slidingItem: IonItemSliding){
    slidingItem.closeOpened();
    console.log("YES");
  }

  async openTraining(){
    const modal = await this.modalController.create({
      component: TrainingDetailPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      backdropDismiss: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
  async openAddTraining(){
    const modal = await this.modalController.create({
      component: TrainingAddPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      backdropDismiss: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
}
