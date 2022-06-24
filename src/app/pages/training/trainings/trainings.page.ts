import { Component, OnInit } from '@angular/core';
import { IonItemSliding, IonRouterOutlet, ModalController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TrainingService } from 'src/app/services/firebase/training.service';
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
    private authService: AuthService,
    private trainingService: TrainingService,
    private fbService: FirebaseService,
    ) { }

  ngOnInit() {
    this.getTeamList();
  }

  toggleTraining(){
    console.log("toggle");
  }


  async getTeamList(){
    const user: User = await this.authService.getUser();
    let teamList$ = this.fbService.getTeamList(user);
    teamList$.subscribe(teamListDataArray=>{
      for(let team of teamListDataArray){

        this.trainingService.getTrainings(team.id).subscribe(trainingData=>{
          console.log(trainingData);
        });
      }

    })
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
