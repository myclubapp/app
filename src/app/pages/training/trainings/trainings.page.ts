import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, defaultIfEmpty, finalize, forkJoin, from,  map,  of, switchMap, take, tap, timeout} from "rxjs";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { TrainingCreatePage } from "../training-create/training-create.page";
import { Team } from "src/app/models/team";

@Component({
  selector: "app-trainings",
  templateUrl: "./trainings.page.html",
  styleUrls: ["./trainings.page.scss"],
})
export class TrainingsPage implements OnInit {
  skeleton = new Array(12);
  user: User;
  user$: Observable<User>;

  trainingList$: Observable<Training[]>;
  trainingListPast$: Observable<Training[]>;

  trainingList: Training[] = [];
  trainingListPast: Training[] = [];

  private subscription: Subscription;
  private subscriptionPast: Subscription;

  filterList: any[] = [];
  filterValue: string = "";

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly menuCtrl: MenuController,
    private readonly alertCtrl: AlertController
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
      
  
    const TIMEOUT_DURATION = 1000; // 5 seconds, adjust as needed

    const teamtrainingList: Training[] = [];
    const teamtrainingPastList: Training[] = [];

    // CURRENT trainingS
    const teamtraining$ = this.authService.getUser$().pipe(
      take(1),
      tap(() => console.log("Fetching user...")),
      switchMap(user => {
        console.log("Got user:", user);
        this.user = user;
        return this.fbService.getUserTeamRefs(user);
      }),
      tap(teams => console.log("Fetched teams:", teams)),
      concatMap(teamsArray => from(teamsArray)),
      tap(team => console.log("Processing team:", team.id)),
      concatMap(team => this.trainingService.getTeamTrainingsRefs(team.id).pipe(
        timeout(TIMEOUT_DURATION), // Adding timeout here 
        take(1),
        tap(trainings => console.log(`Fetched trainings for team ${team.id}:`, trainings)),
        switchMap(trainings => {
          // Fetch attendees for each training and combine the results
          const trainingWithAttendees$ = trainings.map(training => 
            this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id).pipe(
              take(1),
              map(attendees => {
                const userAttendee = attendees.find(att => att.id == this.user.uid);
                const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                console.log(training.date);
                return {
                  ...training,
                  date: training.date,
                  teamId: team.id,
                  status: status,
                  countAttendees: attendees.filter(att => att.status == true).length,
                  attendees: attendees
                };
              })
            )
          );
          return forkJoin(trainingWithAttendees$);
        }),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            console.error(`Error fetching trainings for team ${team.id}:`);
            return of([]);
          } else {
          // Handle other errors, maybe rethrow or return a default object
            throw error;
          }
        })
      )),
      tap(trainings => trainings.forEach(training => teamtrainingList.push(training))),
      finalize(() => console.log("Team training fetching completed"))
    );

    // CURRENT trainingS
    const teamtrainingPast$ = this.authService.getUser$().pipe(
      take(1),
      tap(() => console.log("Fetching user...")),
      switchMap(user => {
        console.log("Got user:", user);
        this.user = user;
        return this.fbService.getUserTeamRefs(user);
      }),
      tap(teams => console.log("Fetched teams:", teams)),
      concatMap(teamsArray => from(teamsArray)),
      tap(team => console.log("Processing team:", team.id)),
      concatMap(team => this.trainingService.getTeamTrainingsPastRefs(team.id).pipe(
        timeout(TIMEOUT_DURATION), // Adding timeout here 
        take(1),
        tap(trainings => console.log(`Fetched trainings for team ${team.id}:`, trainings)),
        switchMap(trainings => {
          // Fetch attendees for each training and combine the results
          const trainingWithAttendees$ = trainings.map(training => 
            this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id).pipe(
              take(1),
              map(attendees => {
                const userAttendee = attendees.find(att => att.id == this.user.uid);
                const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                return {
                  ...training,
                  date: training.date,
                  teamId: team.id,
                  status: status,
                  countAttendees: attendees.filter(att => att.status == true).length,
                  attendees: attendees
                };
              }),
   
            )
          );
          return forkJoin(trainingWithAttendees$);
        }),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            console.error(`Error fetching trainings for team ${team.id}:`);
            return of([]);
          } else {
          // Handle other errors, maybe rethrow or return a default object
            throw error;
          }
        })
      )),
      tap(trainings => trainings.forEach(training => teamtrainingPastList.push(training))),
      finalize(() => console.log("Team training fetching completed"))
    );

    // Use combineLatest to get results when both observables have emitted
   this.subscription = combineLatest([teamtraining$]).subscribe({
      next: () => {
        this.trainingList = [...teamtrainingList].sort((a, b):any => {
          return a.date.toMillis() > b.date.toMillis() ;
        });
        this.trainingList = this.trainingList.filter((training, index, self) => 
          index === self.findIndex((t) => (t.id === training.id))
        );
        this.trainingList$ = of(this.trainingList);
        console.log("Combined training list created");
      },
      error: err => console.error('Error in the observable chain:', err.message)
    });

    this.subscriptionPast = combineLatest([teamtrainingPast$]).subscribe({
      next: () => {
        this.trainingListPast = [...teamtrainingPastList].sort((a, b):any => {
          return a.date.toMillis() < b.date.toMillis() ;
        });
        this.trainingListPast = this.trainingListPast.filter((training, index, self) => 
          index === self.findIndex((t) => (t.id === training.id))
        );
        this.trainingListPast$ = of(this.trainingListPast);
        console.log("Combined training list PAST created");
      },
      error: err => console.error('Error in the observable chain:', err.message)
    });

  }

  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
    if (this.subscriptionPast) {
      this.subscriptionPast.unsubscribe();
    }
  }
  async openTrainingCreateModal() {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalController.create({
      component: TrainingCreatePage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: "",
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  /*async getUser() {
    this.user$ = await this.authService.getUser$();
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }*/

  async toggle(status: boolean, training: Training) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`
    );
    await this.trainingService.setTeamTrainingAttendeeStatus(
      this.user.uid,
      status,
      training.teamId,
      training.id
    );
    this.presentToast();
  }

  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    training: Training
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`
    );
    await this.trainingService.setTeamTrainingAttendeeStatus(
      this.user.uid,
      status,
      training.teamId,
      training.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "changes has been saved",
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }


  async copyTraining(training) {
    const toast = await this.toastController.create({
      message: "Copy",
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();

      // const presentingElement = await this.modalCtrl.getTop();
      const modal = await this.modalController.create({
        component: TrainingCreatePage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: training,
        },
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === "confirm") {
      }



  }


  async deleteTraining(training) {
    const toast = await this.toastController.create({
      message: "Delete",
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }


  async openFilter(ev: Event){
    let filterList = [];

   
  const teams$ = this.authService.getUser$().pipe(
    take(1),
    switchMap(user => this.fbService.getUserTeamRefs(user).pipe(take(1))),
    concatMap(teamsArray =>  from(teamsArray)),
    tap((team:Team)=>console.log(team.id)),
    concatMap(team => 
      this.fbService.getTeamRef(team.id).pipe(
        take(1),
        defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
        map(result => [result]),
        catchError(error => {
          console.error('Error fetching TeamDetail:', error);
          return of([]);
      })
    )
    ),
    tap(teamList => teamList.forEach(team => filterList.push(team))),
    finalize(() => console.log("Get Teams completed"))
  );

  this.subscription = forkJoin([teams$]).subscribe({
    next: () => {
      const alertInputs = [];
      for (const item of filterList){
        alertInputs.push({
          label: item.name,
          type: 'radio',
          checked: item.id == this.filterValue,
          value: item.id,
        });
      }
    
      this.alertCtrl.create({
        header: 'News filtern',
        message: 'Nach Verein oder Teams filtern.',
       // subHeader: 'Nach Verein oder Teams filtern.',
        inputs: alertInputs,
        buttons: [
          { text: "OK",
            role: "confirm",
            handler: (value)=>{
              console.log(value)
              this.filterValue = value;
              this.trainingList$ = of(this.trainingList.filter((training: any) => training.teamId == value));
            } 
          },
          { text: "abbrechen",
            role: "cancel",
            handler: (value)=>{
              console.log(value);
              this.filterValue = "";
              this.trainingList$ = of(this.trainingList);
            } 
          }
        ],
        htmlAttributes: { 'aria-label': 'alert dialog' },
      }).then(alert => {
        alert.present();
      });
    },
    error: err => console.error('Error in the observable chain:', err)
  });
  
  }

}
