import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Optional,
} from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
  MenuController,
  ModalController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  lastValueFrom,
  map,
  mergeMap,
  of,
  shareReplay,
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
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { Profile } from "src/app/models/user";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-trainings",
  templateUrl: "./trainings.page.html",
  styleUrls: ["./trainings.page.scss"],
  standalone: false,
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

  children: Profile[] = [];
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
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly menuCtrl: MenuController,
    private readonly alertCtrl: AlertController,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private navCtrl: NavController,
    // private filterService: FilterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService,
    private userProfileService: UserProfileService,
    private uiService: UiService,
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

    /*this.subscription = this.trainingList$.pipe(
    /*this.subscription = this.trainingList$.pipe(
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
    ).subscribe();*/
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
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }

  async close() {
    return await this.modalController.dismiss(null, "close");
  }
  handleNavigationData() {
    this.activatedRouteSub = this.activatedRoute.url.subscribe((data) => {
      if (
        this.router &&
        this.router.getCurrentNavigation() &&
        this.router.getCurrentNavigation().extras &&
        this.router.getCurrentNavigation().extras.state &&
        this.router.getCurrentNavigation().extras.state["type"] === "training"
      ) {
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
          children: undefined,
          cancelled: false,
          cancelledReason: "",
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
        // Get user's teams and children's teams
        return combineLatest([
          this.fbService.getUserTeamRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            tap((children) => {
              this.children = children;
            }),
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      return this.fbService.getUserTeamRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenTeams) => childrenTeams.flat()),
            catchError((error) => {
              console.error("Error fetching children teams:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userTeams, childrenTeams]) => {
            const allTeams = [...userTeams, ...childrenTeams];
            return allTeams.filter(
              (team, index, self) =>
                index === self.findIndex((t) => t.id === team.id),
            );
          }),
        );
      }),
      mergeMap((teams) => {
        if (this.team && this.team.id) {
          teams.push({ id: this.team.id });
        } else if (teams.length === 0) {
          return of([]);
        }

        const relevantTeams =
          this.team && this.team.id
            ? teams.filter((team) => team.id === this.team.id)
            : teams;

        // Hole Team-Mitglieder einmalig pro Team
        const teamMembersMap$ = combineLatest(
          relevantTeams.map((team) =>
            this.fbService
              .getTeamMemberRefs(team.id)
              .pipe(map((members) => ({ teamId: team.id, members }))),
          ),
        ).pipe(
          map((teamMembers) =>
            teamMembers.reduce((acc, curr) => {
              acc[curr.teamId] = curr.members;
              return acc;
            }, {}),
          ),
          shareReplay(1),
        );

        return combineLatest([
          teamMembersMap$,
          combineLatest(
            relevantTeams.map((team) => {
              return this.trainingService.getTeamTrainingsRefs(team.id).pipe(
                switchMap((teamTrainings) => {
                  if (teamTrainings.length === 0) return of([]);
                  return combineLatest(
                    teamTrainings.map((training) =>
                      combineLatest([
                        this.trainingService
                          .getTeamTrainingsAttendeesRef(team.id, training.id)
                          .pipe(
                            catchError((err) => {
                              console.error(
                                "Permission error in fetching getTeamTrainingsAttendeesRef:",
                                err,
                              );
                              return of([]);
                            }),
                          ),
                        this.exerciseService
                          .getTeamTrainingExerciseRefs(team.id, training.id)
                          .pipe(
                            catchError((err) => {
                              console.error(
                                "Permission error in fetching getTeamTrainingExerciseRefs:",
                                err,
                              );
                              return of([]);
                            }),
                          ),
                        this.fbService.getTeamRef(team.id).pipe(
                          catchError((err) => {
                            console.error(
                              "Permission error in fetching getTeamRef:",
                              err,
                            );
                            return of({});
                          }),
                        ),
                        of(team.id),
                      ]).pipe(
                        map(([attendees, exercises, teamDetails, teamId]) => ({
                          training,
                          attendees,
                          exercises,
                          teamDetails,
                          teamId,
                        })),
                      ),
                    ),
                  );
                }),
              );
            }),
          ),
        ]).pipe(
          map(([teamMembersMap, teamsTrainings]) => {
            const flattenedTrainings = teamsTrainings.flat();
            return flattenedTrainings.map((item) => {
              const teamMembers = teamMembersMap[item.teamId] || [];
              const validAttendees = item.attendees.filter(
                (att) =>
                  att.status === true &&
                  teamMembers.some((member) => member.id === att.id),
              );

              const relevantChildren = teamMembers
                .filter((att) =>
                  this.children.some((child) => child.id === att.id),
                )
                .map((att) => {
                  const child = this.children.find(
                    (child) => child.id === att.id,
                  );
                  return child
                    ? { firstName: child.firstName, lastName: child.lastName }
                    : {};
                });

              return {
                ...item.training,
                cancelled: item.training.cancelled ?? false,
                attendees: item.attendees,
                exercises: item.exercises,
                team: item.teamDetails || {},
                status:
                  item.attendees.find((att) =>
                    [
                      this.user.uid,
                      ...this.children.map((child) => child.id),
                    ].includes(att.id),
                  )?.status ?? null,
                countAttendees: validAttendees.length,
                teamId: item.teamId,
                children: relevantChildren,
              };
            });
          }),
          map((allTrainings) =>
            allTrainings.sort(
              (a, b) =>
                Timestamp.fromMillis(a.startDate).seconds -
                Timestamp.fromMillis(b.startDate).seconds,
            ),
          ),
        );
      }),
      catchError((err) => {
        console.error("Error in getTeamTrainingsUpcoming:", err);
        return of([]);
      }),
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
        // Get user's teams and children's teams
        return combineLatest([
          this.fbService.getUserTeamRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      console.log("Child User:", childUser);
                      return this.fbService.getUserTeamRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenTeams) => childrenTeams.flat()),
            tap((teams) => console.log("Children Teams:", teams)),
            catchError((error) => {
              console.error("Error fetching children teams:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userTeams, childrenTeams]) => {
            const allTeams = [...userTeams, ...childrenTeams];
            return allTeams.filter(
              (team, index, self) =>
                index === self.findIndex((t) => t.id === team.id),
            );
          }),
        );
      }),
      mergeMap((teams) => {
        if (this.team && this.team.id) {
          teams.push({ id: this.team.id });
        } else if (teams.length === 0) {
          return of([]);
        }

        const relevantTeams =
          this.team && this.team.id
            ? teams.filter((team) => team.id === this.team.id)
            : teams;

        // Hole Team-Mitglieder einmalig pro Team
        const teamMembersMap$ = combineLatest(
          relevantTeams.map((team) =>
            this.fbService
              .getTeamMemberRefs(team.id)
              .pipe(map((members) => ({ teamId: team.id, members }))),
          ),
        ).pipe(
          map((teamMembers) =>
            teamMembers.reduce((acc, curr) => {
              acc[curr.teamId] = curr.members;
              return acc;
            }, {}),
          ),
          shareReplay(1),
        );

        return combineLatest([
          teamMembersMap$,
          combineLatest(
            relevantTeams.map((team) => {
              return this.trainingService
                .getTeamTrainingsPastRefs(team.id)
                .pipe(
                  catchError((err) => {
                    console.error(
                      "Permission error in fetching getTeamTrainingsRefs:",
                      team.id,
                      err,
                    );
                    return of([]);
                  }),
                  switchMap((teamTrainings) => {
                    if (teamTrainings.length === 0) return of([]);
                    return combineLatest(
                      teamTrainings.map((training) =>
                        combineLatest([
                          this.trainingService
                            .getTeamTrainingsAttendeesRef(team.id, training.id)
                            .pipe(
                              catchError((err) => {
                                console.error(
                                  "Permission error in fetching getTeamTrainingsAttendeesRef:",
                                  err,
                                );
                                return of([]);
                              }),
                            ),
                          this.exerciseService
                            .getTeamTrainingExerciseRefs(team.id, training.id)
                            .pipe(
                              catchError((err) => {
                                console.error(
                                  "Permission error in fetching getTeamTrainingExerciseRefs:",
                                  err,
                                );
                                return of([]);
                              }),
                            ),
                          this.fbService.getTeamRef(team.id).pipe(
                            catchError((err) => {
                              console.error(
                                "Permission error in fetching getTeamRef:",
                                err,
                              );
                              return of({});
                            }),
                          ),
                          of(team.id), // Übergebe die teamId statt erneut Members zu laden
                        ]).pipe(
                          map(
                            ([attendees, exercises, teamDetails, teamId]) => ({
                              training,
                              attendees,
                              exercises,
                              teamDetails,
                              teamId,
                            }),
                          ),
                        ),
                      ),
                    );
                  }),
                );
            }),
          ),
        ]).pipe(
          map(([teamMembersMap, teamsTrainings]) => {
            const flattenedTrainings = teamsTrainings.flat();
            return flattenedTrainings.map((item) => {
              const teamMembers = teamMembersMap[item.teamId] || [];
              const validAttendees = item.attendees.filter(
                (att) =>
                  att.status === true &&
                  teamMembers.some((member) => member.id === att.id),
              );

              const relevantChildren = teamMembers
                .filter((att) =>
                  this.children.some((child) => child.id === att.id),
                )
                .map((att) => {
                  const child = this.children.find(
                    (child) => child.id === att.id,
                  );
                  return child
                    ? { firstName: child.firstName, lastName: child.lastName }
                    : {};
                });

              return {
                ...item.training,
                cancelled: item.training.cancelled ?? false,
                attendees: item.attendees,
                exercises: item.exercises,
                team: item.teamDetails || {},
                children: relevantChildren,
                status:
                  item.attendees.find((att) =>
                    [
                      this.user.uid,
                      ...this.children.map((child) => child.id),
                    ].includes(att.id),
                  )?.status ?? null,
                // status: item.attendees.find((att) => att.id == this.user.uid)?.status ?? null,
                countAttendees: validAttendees.length,
                teamId: item.teamId,
              };
            });
          }),
          map((allTrainings) =>
            allTrainings.sort(
              (b, a) =>
                Timestamp.fromMillis(a.startDate).seconds -
                Timestamp.fromMillis(b.startDate).seconds,
            ),
          ),
        );
      }),
      catchError((err) => {
        console.error("Error in getTeamTrainingPast:", err);
        return of([]);
      }),
    );
  }

  async openTrainingDetailModal(training: Training, isFuture: boolean) {
    const topModal = await this.modalController.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalController.create({
      component: TrainingDetailPage,
      presentingElement,
      // presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: training,
        isFuture: isFuture,
      },
    });
    /*let modal;
    if (topModal) {
      // const presentingElement = await this.modalCtrl.getTop();
     
    } else {

       modal = await this.modalController.create({
        component: TrainingDetailPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: training,
          isFuture: isFuture,
        },
      });
    }*/

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openTrainingCreateModal() {
    const topModal = await this.modalController.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalController.create({
      component: TrainingCreatePage,
      // presentingElement: this.routerOutlet.nativeEl,
      presentingElement,
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
    const topModal = await this.modalController.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalController.create({
      component: TrainingCreatePage,
      presentingElement,
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
      message: await lastValueFrom(
        this.translate.get("common.success__training_deleted"),
      ),
      color: "danger",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async toggleAll() {
    try {
      const trainingList = await lastValueFrom(
        this.trainingList$.pipe(take(1)),
      );

      for (const training of trainingList) {
        console.log(
          `Set Status true for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`,
        );
        await this.trainingService.setTeamTrainingAttendeeStatus(
          true,
          training.teamId,
          training.id,
        );
      }
      await this.presentToast();
    } catch (error) {
      console.error("Error during toggleAll operation:", error);
      // Optionally handle the error, e.g., show an error message
    }
  }

  toggleItem(slidingItem: IonItemSliding, status: boolean, training: any) {
    console.log("toggleItem", training);
    slidingItem.closeOpened();
    this.toggle(status, training);
  }

  async toggle(status: boolean, training: any) {
    // console.log("toggle", training, status);
    // Hole die Team-Mitglieder
    const teamMembers = await lastValueFrom(
      this.fbService.getTeamMemberRefs(training.teamId).pipe(take(1)),
    );
    // console.log("teamMembers", teamMembers);
    // Hole die Kinder des aktuellen Benutzers
    const children = await lastValueFrom(
      this.userProfileService.getChildren(this.user.uid).pipe(take(1)),
    );
    // console.log("children", children);
    // Sammle alle möglichen Team-Mitglieder (aktueller Benutzer + Kinder)
    const possibleMembers = [
      this.user,
      ...children.map((child) => ({ uid: child.id })),
    ];

    // Filtere die tatsächlichen Team-Mitglieder
    const teamMemberIds = teamMembers.map((member) => member.id);
    const validMembers = possibleMembers.filter((member) =>
      teamMemberIds.includes(member.uid),
    );

    if (validMembers.length === 0) {
      const toast = await this.toastController.create({
        message: await lastValueFrom(
          this.translate.get("common.error__no_team_member"),
        ),
        color: "danger",
        duration: 1500,
        position: "top",
      });
      toast.present();
      return;
    }
    // console.log("validMembers", validMembers);

    let selectedUserId: string;

    if (validMembers.length === 1) {
      // Wenn nur ein Mitglied gefunden wurde, verwende dieses
      selectedUserId = validMembers[0].uid;
      await this.processToggle(selectedUserId, status, training);
    } else {
      // Wenn mehrere Mitglieder gefunden wurden, zeige einen Auswahlalert
      const alert = await this.alertCtrl.create({
        header: await lastValueFrom(this.translate.get("common.select_member")),
        inputs: await Promise.all(
          validMembers.map(async (member) => {
            const profile =
              member.uid === this.user.uid
                ? { firstName: "Ich", lastName: "" } // Für den aktuellen Benutzer
                : await lastValueFrom(
                    this.userProfileService
                      .getUserProfileById(member.uid)
                      .pipe(take(1)),
                  );

            return {
              type: "radio",
              label: `${profile.firstName} ${profile.lastName}`,
              value: member.uid,
            };
          }),
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel",
          },
          {
            text: await lastValueFrom(this.translate.get("common.ok")),
            role: "confirm",
            handler: (selectedId) => {
              if (selectedId) {
                this.processToggle(selectedId, status, training);
              }
            },
          },
        ],
      });
      await alert.present();
    }
  }

  private async processToggle(userId: string, status: boolean, training: any) {
    console.log(
      `Set Status ${status} for user ${userId} and team ${training.teamId} and training ${training.id}`,
    );
    const newStartDate = training.date.toDate();
    newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));

    const trainingThreshold = training.team.trainingThreshold || 0;

    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * trainingThreshold &&
      status == false &&
      trainingThreshold
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      await this.trainingService.setTeamTrainingAttendeeStatusAdmin(
        status,
        training.teamId,
        training.id,
        userId,
      );
      this.presentToast();
    }
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }

  private async showDeleteTrainingConfirmationAlert() {
    await this.uiService.showConfirmDialog({
      header: "Training löschen",
      message: "Möchten Sie dieses Training wirklich löschen?",
      confirmText: "Ja",
      cancelText: "Nein",
    });
  }

  private async showDeleteTrainingSuccessAlert() {
    await this.uiService.showInfoDialog({
      header: "Erfolg",
      message: "Das Training wurde erfolgreich gelöscht.",
    });
  }

  private async showDeleteTrainingErrorAlert() {
    await this.uiService.showInfoDialog({
      header: "Fehler",
      message:
        "Beim Löschen des Trainings ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    });
  }

  private async showCancelTrainingConfirmationAlert() {
    await this.uiService.showConfirmDialog({
      header: "Training absagen",
      message: "Möchten Sie dieses Training wirklich absagen?",
      confirmText: "Ja",
      cancelText: "Nein",
    });
  }

  private async showCancelTrainingSuccessAlert() {
    await this.uiService.showInfoDialog({
      header: "Erfolg",
      message: "Das Training wurde erfolgreich abgesagt.",
    });
  }

  private async showCancelTrainingErrorAlert() {
    await this.uiService.showInfoDialog({
      header: "Fehler",
      message:
        "Beim Absagen des Trainings ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    });
  }

  async tooLateToggle() {
    await this.uiService.showInfoDialog({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
    });
  }

  async cancelTraining(training: any) {
    const result = await this.uiService.showFormDialog({
      header: await lastValueFrom(
        this.translate.get("training.cancel_training"),
      ),
      inputs: [
        {
          name: "reason",
          type: "textarea",
          placeholder: await lastValueFrom(
            this.translate.get("training.cancel_reason_placeholder"),
          ),
          attributes: {
            maxlength: 200,
          },
        },
      ],
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    console.log("Dialog result:", result);

    const reason = result?.reason ?? result?.values?.reason;
    if (reason) {
      try {
        await this.trainingService.updateTraining(
          training.teamId,
          training.id,
          {
            cancelled: true,
            cancelledReason: reason,
          },
        );
        await this.uiService.showSuccessToast(
          await lastValueFrom(
            this.translate.get("training.training_cancelled"),
          ),
        );
      } catch (error) {
        console.error("Error cancelling training:", error);
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("common.error")),
        );
      }
    } else {
      await this.uiService.showErrorToast(
        await lastValueFrom(
          this.translate.get("training.cancel_reason_required"),
        ),
      );
    }
  }

  async sendReminder(training: any) {
    // Hole alle Teammitglieder
    const teamMembers = await lastValueFrom(
      this.fbService.getTeamMemberRefs(training.teamId).pipe(take(1)),
    );

    // Hole alle Teilnehmer des Trainings
    const attendees = await lastValueFrom(
      this.trainingService
        .getTeamTrainingsAttendeesRef(training.teamId, training.id)
        .pipe(take(1)),
    );

    // Filtere Mitglieder, die noch nicht geantwortet haben
    const pendingMembers = teamMembers.filter(
      (member) => !attendees.some((attendee) => attendee.id === member.id),
    );

    if (pendingMembers.length === 0) {
      await this.uiService.showErrorToast(
        await lastValueFrom(
          this.translate.get("training.all_members_responded"),
        ),
      );
      return;
    }
    console.log("pendingMembers", pendingMembers.length);

    const result = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(this.translate.get("training.send_reminder")),
      message: await lastValueFrom(
        this.translate.get("training.send_reminder_confirm", {
          count: pendingMembers.length,
        }),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    if (result) {
      try {
        await this.trainingService.sendReminder(training.teamId, training.id);
        await this.uiService.showSuccessToast(
          await lastValueFrom(this.translate.get("training.reminder_sent")),
        );
      } catch (error) {
        console.error("Error sending reminder:", error);
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("common.error")),
        );
      }
    }
  }

  async openTrainingActions(slidingItem: IonItemSliding, training: any) {
    slidingItem.closeOpened();

    const actionSheet = await this.uiService.showActionSheet({
      header: await lastValueFrom(this.translate.get("training.actions")),
      buttons: [
        {
          text: await lastValueFrom(
            this.translate.get("training.cancel_training"),
          ),
          icon: "alert-circle-outline",
          handler: () => {
            this.cancelTraining(training);
          },
        },
        {
          text: await lastValueFrom(
            this.translate.get("training.send_reminder"),
          ),
          icon: "notifications-outline",
          handler: () => {
            this.sendReminder(training);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          // icon: "close",
          role: "destructive",
        },
      ],
    });
  }
}
