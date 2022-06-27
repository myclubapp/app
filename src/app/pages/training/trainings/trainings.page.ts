import { Component, OnInit } from '@angular/core';
import { IonItemSliding, IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { of,combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Training } from 'src/app/models/training';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TrainingService } from 'src/app/services/firebase/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  user: User;

  TrainingList: Training[];
  trainingListPast: Training[];
  constructor(
    public toastController: ToastController,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private authService: AuthService,
    private fbService: FirebaseService,
    private trainingService: TrainingService,
    ) { }
    ngOnInit() {
      this.getUser();
      this.getTrainingsList();
      this.getTrainingsListPast();
    }
  
    async getUser(){
      this.user = await this.authService.getUser();
    }
  
  
    async toggle(status: boolean, training: Training){
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}` );
      await this.trainingService.setTeamTrainingAttendeeStatus(this.user.uid, status, training.teamId,  training.id);
      this.presentToast();
    }
    async toggleItem(slidingItem: IonItemSliding, status: boolean, training: Training){
      slidingItem.closeOpened();
  
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}` );
      await this.trainingService.setTeamTrainingAttendeeStatus(this.user.uid, status, training.teamId,  training.id);
      this.presentToast();
    }
  
    async presentToast() {
     
      const toast = await this.toastController.create({
        message: 'changes has been saved',
        color: "primary",
        duration: 2000,
        position: "top"
      });
      toast.present();
    }
  
     getTrainingsList(){
      
      this.authService.getUser$().pipe(
        // GET TEAMS
        switchMap((user:User) => this.fbService.getTeamRefs(user)),
        // Loop Over Teams  
        switchMap((allTeams:any) => combineLatest(
          allTeams.map((team) => combineLatest(
            of(team),
            // Loop over Trainings
            // this.trainingService.getTeamTrainingsRef(team.id), 
            this.trainingService.getTeamTrainingsRef(team.id).pipe(
              switchMap((allTrainings:any)=>combineLatest(
                allTrainings.map((training)=> combineLatest(
                  of(training),
                  this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id),
                ))
              )),
            ), 
            this.fbService.getTeam(team.id),  
          )),
        )),
        )
        .subscribe(async (data:any)=>{
  
          let TrainingListNew = [];
          for (let team of data){ // loop over teams
  
            let trainings = team[1];
            let teamDetails = team[2];
            for (let trainingObject of trainings){
              let training = trainingObject[0];
              let attendees = trainingObject[1];
  
              training.teamName = teamDetails.name; 
              training.teamId = teamDetails.id;
              training.attendees = attendees.filter(e=>e.status === true).length;
  
              if (attendees && attendees.filter(e=>e.id === this.user.uid).length === 1){
                training.status = attendees.filter(e=>e.id === this.user.uid)[0].status
              } else {
                training.status = null;
              }
              
              TrainingListNew.push(training);
            }
          }
          this.TrainingList = [...new Set([].concat(...TrainingListNew))];
          this.TrainingList = this.TrainingList.sort((a,b)=>a.dateTime.toMillis()-b.dateTime.toMillis());
        });
    }
    
    getTrainingsListPast(){
      
      this.authService.getUser$().pipe(
        // GET TEAMS
        switchMap((user:User) => this.fbService.getTeamRefs(user)),
        // Loop Over Teams  
        switchMap((allTeams:any) => combineLatest(
          allTeams.map((team) => combineLatest(
            of(team),
            // Loop over Trainings
            // this.trainingService.getTeamTrainingsRef(team.id), 
            this.trainingService.getTeamTrainingsRefPast(team.id).pipe(
              switchMap((allTrainings:any)=>combineLatest(
                allTrainings.map((training)=> combineLatest(
                  of(training),
                  this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id),
                ))
              )),
            ), 
            this.fbService.getTeam(team.id),  
          )),
        )),
        )
        .subscribe(async (data:any)=>{
  
          let TrainingListNew = [];
          for (let team of data){ // loop over teams
  
            let trainings = team[1];
            let teamDetails = team[2];
            for (let trainingObject of trainings){
              let training = trainingObject[0];
              let attendees = trainingObject[1];
  
              training.teamName = teamDetails.name; 
              training.teamId = teamDetails.id;
              training.attendees = attendees.filter(e=>e.status === true).length;
  
              if (attendees && attendees.filter(e=>e.id === this.user.uid).length === 1){
                training.status = attendees.filter(e=>e.id === this.user.uid)[0].status
              } else {
                training.status = null;
              }
              
              TrainingListNew.push(training);
            }
          }
          this.trainingListPast = [...new Set([].concat(...TrainingListNew))];
          this.trainingListPast = this.trainingListPast.sort((a,b)=>b.dateTime.toMillis()-a.dateTime.toMillis());
        });
    }
  }
  