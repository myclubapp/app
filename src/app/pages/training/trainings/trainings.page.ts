import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
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
import { FilterService } from "src/app/services/filter.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ExerciseService } from "src/app/services/firebase/exercise.service";

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

  teamAdminList$: Observable<Team[]>;
  toggleAllSubscription: Subscription;

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
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly menuCtrl: MenuController,
    private readonly alertCtrl: AlertController,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private filterService: FilterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService
  ) {
    this.menuCtrl.enable(true, "menu");

    this.activatedRoute.url.subscribe(data => {
      if (this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.type === "training") {
        const pushData = this.router.getCurrentNavigation().extras.state;
        console.log("PUSHDATA " + pushData);
        let training: Training = {
          id: pushData.id,
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
          teamId: pushData.teamId,
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

  ngOnInit() {
    // DATA
    this.trainingList$ = this.getTeamTraining();
    this.trainingListPast$ = this.getTeamTrainingPast();
    // CREATE
    this.teamAdminList$ = this.fbService.getTeamAdminList();

    /*this.trainingListBackup$ = this.getTeamTraining();
    this.trainingListBackupSub = this.trainingListBackup$.subscribe({
      next: () => {
        console.log("Training Backup Data received");

        this.cdr.detectChanges();
      },
      error: (err) => console.error("Training Error in subscription:", err),
      complete: () => console.log("Training Observable completed"),
    });


    this.trainingListPastBackup$ = this.getTeamTrainingPast();
    this.trainingListPastBackup$.subscribe({
      next: () => {
        console.log("Training PAST Backup Data received");
        this.cdr.detectChanges();
      },
      error: (err) =>
        console.error("Training PAST Backup Error in subscription:", err),
      complete: () => console.log("Training PAST Backup Observable completed"),
    });
    */

    // Filterlist
    /*
    this.teamList$ = this.fbService.getTeamList();
    this.teamList$.subscribe({
      next: (data) => {
        this.filterList = data;
        console.log("Team Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Team Error in subscription:", err),
      complete: () => console.log("Team Observable completed"),
    });

    //Filter
    this.teamFilterSubscription = this.filterService.teamFilter$.subscribe(
      (newTeamFilterValue) => {
        console.log("Set new filter value: " + newTeamFilterValue);
        this.filterValue = newTeamFilterValue;
      }
    );*/
  }

  ngOnDestroy(): void {
    if (this.toggleAllSubscription){
      this.toggleAllSubscription.unsubscribe();
    }
    /*if (this.trainingListPastBackupSub){
      this.trainingListPastBackupSub.unsubscribe();
    }
    if (this.trainingListBackupSub){
      this.trainingListBackupSub.unsubscribe();
    }

    // Unsubscribe to prevent memory leaks
    if (this.teamFilterSubscription) {
      this.teamFilterSubscription.unsubscribe();
    }*/
  }
  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return teamAdminList && teamAdminList.some(team => team.id === teamId);
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
      tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.trainingService.getTeamTrainingsRefs(team.id).pipe(
              switchMap((teamTrainings) => {
                if (teamTrainings.length === 0) return of([]);
                return combineLatest(
                  teamTrainings.map((training) =>
                    combineLatest([
                      this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id),
                      this.exerciseService.getTeamTrainingExerciseRefs(team.id, training.id),
                    ]).pipe(

                      map(([attendees, exercises]) => {
                        const userAttendee = attendees.find(
                          (att) => att.id == this.user.uid
                        );
                        const status = userAttendee
                          ? userAttendee.status
                          : null; // default to null if user is not found in attendees list
                        return {
                          ...training,
                          attendees,
                          exercises,
                          status: status,
                          countAttendees: attendees.filter(
                            (att) => att.status == true
                          ).length,
                          teamId: team.id,
                        };
                      }),
                      catchError(() =>
                        of({
                          ...training,
                          attendees: [],
                          exercises: [],
                          status: null,
                          countAttendees: 0,
                          teamId: team.id,
                        })
                      ) // If error, return training with empty attendees
                    )
                  )
                );
              }),
              map((trainingsWithAttendees) => trainingsWithAttendees), // Flatten trainings array for each team
              catchError(() => of([])) // If error in fetching trainings, return empty array
            )
          )
        ).pipe(
          map((teamsTrainings) => teamsTrainings.flat()), // Flatten to get all trainings across all teams
          tap(teamsTrainings => console.log(teamsTrainings)),
          map(
            (allTrainings) =>
              allTrainings.sort(
                (a, b) =>
                  Timestamp.fromMillis(a.startDate).seconds -
                  Timestamp.fromMillis(b.startDate).seconds
              ) // Sort trainings by date
          )
        );
      }),
      tap((results) =>
        console.log("Final results with all trainings:", results)
      ),
      catchError((err) => {
        console.error("Error in getTeamTrainingsUpcoming:", err);
        return of([]); // Return an empty array on error
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
      tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.trainingService.getTeamTrainingsPastRefs(team.id).pipe(
              switchMap((teamTrainings) => {
                if (teamTrainings.length === 0) return of([]);
                return combineLatest(
                  teamTrainings.map((training) =>
                    this.trainingService
                      .getTeamTrainingsAttendeesRef(team.id, training.id)
                      .pipe(
                        map((attendees) => {
                          const userAttendee = attendees.find(
                            (att) => att.id == this.user.uid
                          );
                          const status = userAttendee
                            ? userAttendee.status
                            : null; // default to false if user is not found in attendees list
                          return {
                            ...training,
                            attendees,
                            status: status,
                            countAttendees: attendees.filter(
                              (att) => att.status == true
                            ).length,
                            teamId: team.id,
                          };
                        }),
                        catchError(() =>
                          of({
                            ...training,
                            attendees: [],
                            status: null,
                            countAttendees: 0,
                            teamId: team.id,
                          })
                        ) // If error, return training with empty attendees
                      )
                  )
                );
              }),
              map((trainingsWithAttendees) => trainingsWithAttendees), // Flatten trainings array for each team
              catchError(() => of([])) // If error in fetching trainings, return empty array
            )
          )
        ).pipe(
          map((teamsTrainings) => teamsTrainings.flat()), // Flatten to get all trainings across all teams
          map(
            (allTrainings) =>
              allTrainings.sort(
                (a, b) =>
                  Timestamp.fromMillis(b.startDate).seconds -
                  Timestamp.fromMillis(a.startDate).seconds
              ) // Sort trainings by date
          )
        );
      }),
      tap((results) =>
        console.log("Final results with all trainings:", results)
      ),
      catchError((err) => {
        console.error("Error in getTeamTrainingsUpcoming:", err);
        return of([]); // Return an empty array on error
      })
    );
  }


  async openTrainingDetailModal(training: Training, isFuture: boolean) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalController.create({
      component: TrainingDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
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

  async copyTraining(slidingItem: IonItemSliding, training) {
    slidingItem.closeOpened();

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

  async deleteTraining(slidingItem: IonItemSliding, training) {
    slidingItem.closeOpened();
    await this.trainingService.deleteTeamTraining(training.teamId, training.id);
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__training_deleted")),
      color: "danger",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async toggleAll() {

    this.toggleAllSubscription = this.trainingList$.pipe(
      take(1),
      map(async (trainingList: any) => {
        for (const training of trainingList) {
          console.log(
            `Set Status ${true} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`
          );
          await this.trainingService.setTeamTrainingAttendeeStatus(
            true,
            training.teamId,
            training.id
          );
        }
        this.presentToast();
      })

    ).subscribe();
   

  }

  async toggle(status: boolean, training: Training) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`
    );
    await this.trainingService.setTeamTrainingAttendeeStatus(
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
      status,
      training.teamId,
      training.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  /* async openFilter(ev: Event) {
    const alertInputs = [];
    for (const item of this.filterList) {
      alertInputs.push({
        label: item.name,
        type: "radio",
        checked: item.id == this.filterValue,
        value: item.id,
      });
    }

    let alert = await this.alertCtrl.create({
      header: await lastValueFrom(this.translate.get("training.news__filter")),
      message: await lastValueFrom(
        this.translate.get("training.news__filer__desc")
      ),
      // subHeader: 'Nach Verein oder Teams filtern.',
      inputs: alertInputs,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.ok")),
          role: "confirm",
          handler: async (value) => {
            console.log("update filter " + value);
            this.filterService.updateTeamFilter(value);

            this.trainingList$ = this.trainingListBackup$.pipe(
              map((items) => {
                return items.filter((element) => element.teamId == value);
              })
            );
            this.trainingListPast$ = this.trainingListPastBackup$.pipe(
              map((items) => {
                return items.filter((element) => element.teamId == value);
              })
            );
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
          handler: async (value) => {
            console.log("update filter " + value);
            this.filterService.updateTeamFilter(value);

            this.trainingList$ = this.trainingListBackup$;
            this.trainingListPast$ = this.trainingListPastBackup$;
          },
        },
      ],
      htmlAttributes: { "aria-label": "alert dialog" },
    });
    alert.present();
  }*/
}
