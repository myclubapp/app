import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { MyClubAppWidget } from 'myclub-widget-plugin';
import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
  // IonRouterOutlet,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  first,
  lastValueFrom,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { TrainingCreatePage } from "../training-create/training-create.page";
import { Timestamp } from "firebase/firestore";
import { TrainingDetailPage } from "../training-detail/training-detail.page";
import { TranslateService } from "@ngx-translate/core";
import { Team } from "src/app/models/team";
// import { FilterService } from "src/app/services/filter.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ExerciseService } from "src/app/services/firebase/exercise.service";
import { Club } from "src/app/models/club";

@Component({
  selector: "app-trainings",
  templateUrl: "./trainings.page.html",
  styleUrls: ["./trainings.page.scss"],
})
export class TrainingsPage implements OnInit {
  @Input("team") team: Team;
  @Input("isModal") isModal: boolean;
  skeleton = new Array(12);

  user: User;
  user$: Observable<User>;

  trainingList$: Observable<Training[]>;
  trainingListPast$: Observable<Training[]>;

  subscription: Subscription;


  teamAdminList$: Observable<Team[]>;
  activatedRouteSub: Subscription;
  // teamList$: Observable<Team[]>;
  // filterList: any[] = [];
  // filterValue: string = "";
  // private teamFilterSubscription: Subscription;
  // trainingListBackup$: Observable<Training[]>;
  // trainingListPastBackup$: Observable<Training[]>;

  // trainingListBackupSub: Subscription;
  // trainingListPastBackupSub: Subscription;

  constructor(
    public toastController: ToastController,
    // private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly menuCtrl: MenuController,
    private readonly alertCtrl: AlertController,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    // private filterService: FilterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService
  ) {
    this.menuCtrl.enable(true, "menu");


  }

  ngOnInit() {
    // DATA
    this.trainingList$ = this.getTeamTraining();
    this.trainingListPast$ = this.getTeamTrainingPast();
    // CREATE
    this.teamAdminList$ = this.fbService.getTeamAdminList();

    this.handleNavigationData();


    this.subscription = this.trainingList$.pipe(
      tap(async (trainings) => {
        const training = trainings[0];
        console.log('Widget Value for Key=nextTraining: ', training?.name);
        // MyClubAppWidget.echo({ value: event.name });

        try {
          await MyClubAppWidget.setItem({ key: 'nextTraining', value: training?.name, group: 'group.app.myclub.default' });
        } catch (error) {
          console.error('Widget Error setItem: ', error);
        }

        try {
          await MyClubAppWidget.reloadAllTimelines();
          await MyClubAppWidget.reloadTimelines({ ofKind: 'AppWidget' });

        } catch (error) {
          console.error('Widget Error reloadTimelines: ', error);
        }

      })
    ).subscribe();


  }


  ngOnDestroy() {
    if (this.activatedRouteSub) {
      this.activatedRouteSub.unsubscribe();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    // console.log(teamAdminList, teamId)
    return teamAdminList && teamAdminList.some(team => team.id === teamId);
  }


  async close() {

    return await this.modalController.dismiss(null, "close");
  }
  handleNavigationData() {
    this.activatedRouteSub = this.activatedRoute.url.subscribe(data => {
      if (this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state["type"] === "training") {
        const pushData = this.router.getCurrentNavigation().extras.state;
        console.log("PUSHDATA " + pushData);
        let training: Training = {
          id: pushData["id"],
          name: "",
          description: "",
          location: "",
          streetAndNumber: "",
          postalCode: "",
          city: "",
          date: Timestamp.now(),
          timeFrom: "",
          timeTo: "",
          startDate: "",
          endDate: "",
          repeatAmount: "",
          repeatFrequency: "",
          teamId: pushData["teamId"],
          teamName: "",
          liga: "",
          status: false,
          countAttendees: 0,
          attendees: undefined,
          exercises: undefined,
        };
        this.openTrainingDetailModal(training, true);
      } else {
        console.log("no data");
      }
    });
  }

  getTeamTraining() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserTeamRefs(user);
      }),
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {

        if (this.team && this.team.id) {
          teams.push({ id: this.team.id })
        } else if (teams.length === 0) {
          return of([])
        };
        // console.log(teams)
        const relevantTeams = this.team && this.team.id ? teams.filter(team => team.id === this.team.id) : teams;
        // console.log("relevant teams : ", relevantTeams);
        return combineLatest(
          relevantTeams.map((team) => {
            // console.log("Fetching trainings for team ID:", team.id);
            return this.trainingService.getTeamTrainingsRefs(team.id).pipe(
              catchError((err) => {
                console.error("Permission error in fetching getTeamTrainingsRefs:", team.id, err);
                return of([]); // Return an empty array if permission error occurs
              }),
              switchMap((teamTrainings) => {
                if (teamTrainings.length === 0) return of([]);
                return combineLatest(
                  teamTrainings.map((training) => combineLatest([
                    this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id).pipe(
                      catchError((err) => {
                        console.error("Permission error in fetching getTeamTrainingsAttendeesRef:", err);
                        return of([]); // Return an empty array if permission error occurs
                      }),
                    ),
                    this.exerciseService.getTeamTrainingExerciseRefs(team.id, training.id).pipe(
                      catchError((err) => {
                        console.error("Permission error in fetching getTeamTrainingExerciseRefs:", err);
                        return of([]); // Return an empty array if permission error occurs
                      }),
                    ),
                    this.fbService.getTeamRef(team.id).pipe(
                      catchError((err) => {
                        console.error("Permission error in fetching getTeamRef:", err);
                        return of({}); // Return an empty array if permission error occurs
                      }),
                    ),
                    this.fbService.getTeamMemberRefs(team.id), // Neue Zeile: Team-Mitglieder abrufen
                  ]).pipe(
                    map(([attendees, exercises, teamDetails, teamMembers]) => {
                      // console.log("TEAM DETAILS for " + team.id + ":", teamDetails);  // Detailed log
                      const userAttendee = attendees.find((att) => att.id == this.user.uid);
                      const status = userAttendee ? userAttendee.status : null;
                      // Nur Teilnehmer zählen, die auch Teammitglieder sind und status == true haben
                      const validAttendees = attendees.filter((att) =>
                        att.status === true &&
                        teamMembers.some(member => member.id === att.id)
                      );

                      return {
                        ...training,
                        attendees,
                        exercises,
                        team: teamDetails || {}, // Use empty object as a fallback
                        status,
                        countAttendees: validAttendees.length, // Aktualisierte Zählung
                        // countAttendees: attendees.filter((att) => att.status == true).length,
                        teamId: team.id,
                      };
                    }),
                    catchError((err) => {
                      console.error("ERR", err)
                      return of({
                        ...training,
                        team: {},
                        attendees: [],
                        exercises: [],
                        status: null,
                        countAttendees: 0,
                        teamId: team.id,
                      })
                    })
                  ))
                );
              }),
              catchError((err) => {
                console.error("ERR1", err)
                return of([])
              })
            )
          })
        ).pipe(
          map((teamsTrainings) => teamsTrainings.flat()),
          map((allTrainings) => allTrainings.sort((a, b) => Timestamp.fromMillis(a.startDate).seconds - Timestamp.fromMillis(b.startDate).seconds))
        );
      }),
      catchError((err) => {
        console.error("Error in getTeamTrainingsUpcoming:", err);
        return of([]);
      })
    );
  }

  getTeamTrainingPast() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserTeamRefs(user);
      }),
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {

        if (this.team && this.team.id) {
          teams.push({ id: this.team.id })
        } else if (teams.length === 0) {
          return of([])
        };
        // console.log(teams)
        const relevantTeams = this.team && this.team.id ? teams.filter(team => team.id === this.team.id) : teams;
        // console.log("relevant teams : ", relevantTeams);
        return combineLatest(
          relevantTeams.map((team) => {
            // console.log("Fetching trainings for team ID:", team.id);
            return this.trainingService.getTeamTrainingsPastRefs(team.id).pipe(
              catchError((err) => {
                console.error("Permission error in fetching getTeamTrainingsRefs:", team.id, err);
                return of([]); // Return an empty array if permission error occurs
              }),
              switchMap((teamTrainings) => {
                if (teamTrainings.length === 0) return of([]);
                return combineLatest(
                  teamTrainings.map((training) => combineLatest([
                    this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id).pipe(
                      catchError((err) => {
                        console.error("Permission error in fetching getTeamTrainingsAttendeesRef:", err);
                        return of([]); // Return an empty array if permission error occurs
                      }),
                    ),
                    this.exerciseService.getTeamTrainingExerciseRefs(team.id, training.id).pipe(
                      catchError((err) => {
                        console.error("Permission error in fetching getTeamTrainingExerciseRefs:", err);
                        return of([]); // Return an empty array if permission error occurs
                      }),
                    ),
                    this.fbService.getTeamRef(team.id).pipe(
                      catchError((err) => {
                        console.error("Permission error in fetching getTeamRef:", err);
                        return of({}); // Return an empty array if permission error occurs
                      }),
                    ),
                  ]).pipe(
                    map(([attendees, exercises, teamDetails]) => {
                      // console.log("TEAM DETAILS for " + team.id + ":", teamDetails);  // Detailed log
                      const userAttendee = attendees.find((att) => att.id == this.user.uid);
                      const status = userAttendee ? userAttendee.status : null;
                      return {
                        ...training,
                        attendees,
                        exercises,
                        team: teamDetails || {}, // Use empty object as a fallback
                        status,
                        countAttendees: attendees.filter((att) => att.status == true).length,
                        teamId: team.id,
                      };
                    }),
                    catchError((err) => {
                      console.error("ERR", err)
                      return of({
                        ...training,
                        team: {},
                        attendees: [],
                        exercises: [],
                        status: null,
                        countAttendees: 0,
                        teamId: team.id,
                      })
                    })
                  ))
                );
              }),
              catchError((err) => {
                console.error("ERR1", err)
                return of([])
              })
            )
          })
        ).pipe(
          map((teamsTrainings) => teamsTrainings.flat()),
          map((allTrainings) => allTrainings.sort((b, a) => Timestamp.fromMillis(a.startDate).seconds - Timestamp.fromMillis(b.startDate).seconds))
        );
      }),
      catchError((err) => {
        console.error("Error in getTeamTrainingsUpcoming:", err);
        return of([]);
      })
    );
  }


  async openTrainingDetailModal(training: Training, isFuture: boolean) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalController.create({
      component: TrainingDetailPage,
      presentingElement: await this.modalController.getTop(),
      // presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: training,
        isFuture: isFuture,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openTrainingCreateModal() {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalController.create({
      component: TrainingCreatePage,
      // presentingElement: this.routerOutlet.nativeEl,
      presentingElement: await this.modalController.getTop(),
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

  async copyTraining(slidingItem: IonItemSliding, training) {
    slidingItem.closeOpened();

    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalController.create({
      component: TrainingCreatePage,
      // presentingElement: this.routerOutlet.nativeEl,
      presentingElement: await this.modalController.getTop(),
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

  async deleteTraining(slidingItem: IonItemSliding, training) {
    slidingItem.closeOpened();
    await this.trainingService.deleteTeamTraining(training.teamId, training.id);
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__training_deleted")),
      color: "danger",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async toggleAll() {
    try {
      const trainingList = await lastValueFrom(this.trainingList$.pipe(take(1)));

      for (const training of trainingList) {
        console.log(`Set Status true for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`);
        await this.trainingService.setTeamTrainingAttendeeStatus(
          true,
          training.teamId,
          training.id
        );
      }
      await this.presentToast();
    } catch (error) {
      console.error("Error during toggleAll operation:", error);
      // Optionally handle the error, e.g., show an error message
    }
  }

  async toggle(status: boolean, training: any) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`
    );
    const newStartDate = training.date.toDate();
    newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ")
    const trainingThreshold = training.team.trainingThreshold || 0;
    console.log(trainingThreshold);
    // Verpätete Abmeldung?
    if (((newStartDate.getTime() - new Date().getTime()) < (1000 * 60 * 60 * trainingThreshold)) && status == false && trainingThreshold) {
      console.log("too late");
      await this.tooLateToggle();

    } else {
      // OK
      await this.trainingService.setTeamTrainingAttendeeStatus(
        status,
        training.teamId,
        training.id
      );
      this.presentToast();
    }

  }

  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    training: any
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`
    );
    const newStartDate = training.date.toDate();
    newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ")
    const trainingThreshold = training.team.trainingThreshold || 0;
    console.log(trainingThreshold);
    // Verpätete Abmeldung?
    if (((newStartDate.getTime() - new Date().getTime()) < (1000 * 60 * 60 * trainingThreshold)) && status == false && trainingThreshold) {
      console.log("too late");
      await this.tooLateToggle();

    } else {
      // OK
      await this.trainingService.setTeamTrainingAttendeeStatus(
        status,
        training.teamId,
        training.id
      );
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "primary",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async tooLateToggle() {
    const alert = await this.alertCtrl.create({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
      buttons: [{
        role: "",
        text: "OK",
        handler: (data) => {
          console.log(data)
        }
      }]
    })
    alert.present()
  }

}
