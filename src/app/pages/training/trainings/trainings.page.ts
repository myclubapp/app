import { Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  IonRouterOutlet,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, finalize, forkJoin, from,  map,  of, switchMap, take, tap, timeout} from "rxjs";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { TrainingCreatePage } from "../training-create/training-create.page";
import { Timestamp } from "firebase/firestore";

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

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly menuCtrl: MenuController
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
                  date: new Date(training.date.seconds),
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
          return new Date(a.date).getTime() < new Date(b.date).getTime();
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
          return new Date(a.date).getTime() > new Date(b.date).getTime();
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
/*
  getTrainingsList() {
    this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest(
            allTeams.map((team) =>
              combineLatest(
                of(team),
                // Loop over Trainings
                // this.trainingService.getTeamTrainingsRef(team.id),
                this.trainingService
                  .getTeamTrainingsRef(team.id)
                  .pipe(
                    switchMap((allTrainings: any) =>
                      combineLatest(
                        allTrainings.map((training) =>
                          combineLatest(
                            of(training),
                            this.trainingService.getTeamTrainingsAttendeesRef(
                              team.id,
                              training.id
                            )
                          )
                        )
                      )
                    )
                  ),
                this.fbService.getTeamRef(team.id)
              )
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        const trainingListNew = [];
        for (const team of data) {
          // loop over teams

          const trainings = team[1];
          const teamDetails = team[2];
          for (const trainingObject of trainings) {
            const training = trainingObject[0];
            const attendees = trainingObject[1];

            training.teamName = teamDetails.name;
            training.teamId = teamDetails.id;
            training.attendees = attendees.filter(
              (e) => e.status === true
            ).length;

            if (
              attendees &&
              attendees.filter((e) => e.id === this.user.uid).length === 1
            ) {
              training.status = attendees.filter(
                (e) => e.id === this.user.uid
              )[0].status;
            } else {
              training.status = null;
            }

            trainingListNew.push(training);
          }
        }
        this.trainingList = [...new Set([].concat(...trainingListNew))];
        this.trainingList = this.trainingList.sort(
          (a, b) => a.date.getMilliseconds() - b.date.getMilliseconds()
        );
      });
  }

  getTrainingsListPast() {
    this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest(
            allTeams.map((team) =>
              combineLatest(
                of(team),
                // Loop over Trainings
                // this.trainingService.getTeamTrainingsRef(team.id),
                this.trainingService
                  .getTeamTrainingsRefPast(team.id)
                  .pipe(
                    switchMap((allTrainings: any) =>
                      combineLatest(
                        allTrainings.map((training) =>
                          combineLatest(
                            of(training),
                            this.trainingService.getTeamTrainingsAttendeesRef(
                              team.id,
                              training.id
                            )
                          )
                        )
                      )
                    )
                  ),
                this.fbService.getTeamRef(team.id)
              )
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        const trainingListNew = [];
        for (const team of data) {
          // loop over teams

          const trainings = team[1];
          const teamDetails = team[2];
          for (const trainingObject of trainings) {
            const training = trainingObject[0];
            const attendees = trainingObject[1];

            training.teamName = teamDetails.name;
            training.teamId = teamDetails.id;
            training.attendees = attendees.filter(
              (e) => e.status === true
            ).length;

            if (
              attendees &&
              attendees.filter((e) => e.id === this.user.uid).length === 1
            ) {
              training.status = attendees.filter(
                (e) => e.id === this.user.uid
              )[0].status;
            } else {
              training.status = null;
            }

            trainingListNew.push(training);
          }
        }
        this.trainingListPast = [...new Set([].concat(...trainingListNew))];
        this.trainingListPast = this.trainingListPast.sort(
          (a, b) => b.date.getMilliseconds() - a.date.getMilliseconds()
        );
      });
  }*/
}
