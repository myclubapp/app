import { TrainingChangePage } from './../training-change/training-change.page';
import { AuthService } from 'src/app/services/auth.service';
import { TeamService } from './../../services/club/team.service';
import {
  TrainingService
} from './../../services/training/training.service';
import {
  TrainingDetailPage
} from './../training-detail/training-detail.page';
import {
  TrainingCreatePage
} from './../training-create/training-create.page';
import {
  IonRouterOutlet,
  ModalController,
  ToastController
} from '@ionic/angular';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  public showButton: boolean = false;
  public trainingList: Array < any > = [];
  public trainingListPast: Array < any > = [];
  skeletonList = ["","","","","",""];
  constructor(
    private trainingService: TrainingService,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    public toastController: ToastController,
    private teamSerivice: TeamService,
    private authService: AuthService
  ) {

    this.authService.checkUserhasTeamAdmin().then(status=>{
      //console.log(status);
      this.showButton = status;
    })

  }

  ngOnInit() {
    this.loadTraining();
  }
  async openCreate() {
    //console.log("clicked");
    const modal = await this.modalController.create({
      component: TrainingCreatePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    await modal.present();
    const {
      data
    } = await modal.onWillDismiss();

  }
  async openDetail(training) {
    const modal = await this.modalController.create({
      component: TrainingDetailPage,
      componentProps: {
        training: training
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    await modal.present();
    modal.onDidDismiss().then(async (data:any)=>{
      console.log(data);
      if (data.data && data.data.training) {

        const modal = await this.modalController.create({
          component: TrainingChangePage,
          componentProps: {
            training: data.data.training
          },
          swipeToClose: true,
          presentingElement: this.routerOutlet.nativeEl
        });
        await modal.present();    
      }

    })
  }

  doRefresh(event) {
    this.skeletonList = ["","","","","",""];
    this.trainingList = [];
    this.loadTraining();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

 async  loadTraining() {
    let teamList = await this.teamSerivice.getTeamList();
    for(let team of teamList){
      //future
      let trainingRef = this.trainingService.getTeamTraining(team.id);
      trainingRef.onSnapshot(async querySnapshot=>{
       

        let trainings = querySnapshot.docChanges();
        this.skeletonList = [];
        for (let training of trainings){
          let team = await training.doc.data().teamRef.get();
          let club = await training.doc.data().clubRef.get();
          let preStatus: any = await this.trainingService.getTrainingStatus(training.doc);
      
          let status;

          if (preStatus.exists){
            status = String(preStatus.data().status);
          }else{
            status = "undefined";
          }
          if (training.type==="added"){
            this.trainingList.push({
              ...training.doc.data(),
              ...{"status": status},
              ...{"team": team.data()},
              ...{"club": club.data()},
              ...{
                "id": training.doc.id
              }
            });
          }else if (training.type==="modified"){
            
            this.trainingList.find((element, index)=>{

              if(element.id === training.doc.id){
                this.trainingList[index] = {
                  ...training.doc.data(),
                  ...{"status": status},
                  ...{"team": team.data()},
                  ...{"club": club.data()},
                  ...{
                    "id": training.doc.id
                  }};
              }
            })
          }else if (training.type==="removed"){ 

            this.trainingList.find((element, index)=>{
              if(element.id === training.doc.id){
                this.trainingList.splice(index,1);
                return;
              }
            })
          }
        }
      });

      //past
      let trainingRefPast = this.trainingService.getPastTeamTraining(team.id);
      trainingRefPast.onSnapshot(async querySnapshot=>{
       

        let trainings = querySnapshot.docChanges();
        this.skeletonList = [];
        for (let training of trainings){
          let team = await training.doc.data().teamRef.get();
          let club = await training.doc.data().clubRef.get();
          let preStatus: any = await this.trainingService.getTrainingStatus(training.doc);
      
          let status;

          if (preStatus.exists){
            status = String(preStatus.data().status);
          }else{
            status = "undefined";
          }

          if (training.type==="added"){
            this.trainingListPast.push({
              ...training.doc.data(),
              ...{"status": status},
              ...{"team": team.data()},
              ...{"club": club.data()},
              ...{
                "id": training.doc.id
              }
            });
          }else if (training.type==="modified"){
            this.trainingListPast.find((element, index)=>{
              if(element.id === training.doc.id){
                this.trainingListPast[index] = {
                  ...training.doc.data(),
                  ...{"status": status},
                  ...{"team": team.data()},
                  ...{"club": club.data()},
                  ...{
                    "id": training.doc.id
                  }};
              }
            })
          }else if (training.type==="removed"){ 

            this.trainingListPast.find((element, index)=>{
              if(element.id === training.doc.id){
                this.trainingListPast.splice(index,1);
                return;
              }
            })
          }
        }
      });
      
    }
  }

  acceptTraining(training){
    this.trainingService.acceptTraining(training).then(value=>{
      this.toastController.create({
        message: 'Du bist angemeldet',
        color: "success",
        duration: 2000
      }).then(toast=>{
        toast.present();
      });
    });
  }

  rejectTraining(training){
    this.trainingService.rejectTraining(training).then(value=>{
      this.toastController.create({
        message: 'Du bist abgemeldet',
        color: "danger",
        duration: 2000
      }).then(toast=>{
        toast.present();
      });
    });
  }
}