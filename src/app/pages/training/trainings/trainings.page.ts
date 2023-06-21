import { Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  IonRouterOutlet,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { of, combineLatest, Observable, concat } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { TrainingCreatePage } from "../training-create/training-create.page";

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

  trainingList: Training[];
  trainingListPast: Training[];
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
   /* this.getUser();
    this.getTrainingsList();
    this.getTrainingsListPast();
    */

    this.authService.getUser$().subscribe((user) => {
      console.log(user.displayName);

      //TEAMS
      this.fbService.getUserTeamRefs(user).subscribe((userTeams) => {
        const teamTrainingObservables = [];
        for (let userTeam of userTeams) {
          console.log("Team: " + userTeam.id);
          // Push each team news observable into an array
          teamTrainingObservables.push(
            this.trainingService.getTeamTrainingsRef(userTeam.id)
          );
        }
        this.trainingList$ = concat(
          this.trainingList$,
          ...teamTrainingObservables
        ) as Observable<Training[]>;
      });
   

// PAST
      //TEAMS
      this.fbService.getUserTeamRefs(user).subscribe((userTeams) => {
        const teamTrainingPastObservables = [];
        for (let userTeam of userTeams) {
          console.log("Team: " + userTeam.id);
          // Push each team news observable into an array
          teamTrainingPastObservables.push(
            this.trainingService.getTeamTrainingsRef(userTeam.id)
          );
        }
        this.trainingListPast$ = concat(
          this.trainingListPast$,
          ...teamTrainingPastObservables
        ) as Observable<Training[]>;
      });
    });

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

  async getUser() {
    this.user$ = await this.authService.getUser$();
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }

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
