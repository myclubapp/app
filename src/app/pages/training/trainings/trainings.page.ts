import { Component, Input, OnInit, Optional } from "@angular/core";
import {
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
import { Timestamp } from "@angular/fire/firestore";
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
  @Input() team!: Team;
  @Input() isModal!: boolean;
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
    private translate: TranslateService,
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
    this.trainingList$ = this.getTeamTraining().pipe(shareReplay(1));
    this.trainingListPast$ = this.getTeamTrainingPast().pipe(shareReplay(1));
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
    this.activatedRouteSub = this.activatedRoute.url.subscribe(() => {
      if (
        this.router &&
        this.router.currentNavigation() &&
        this.router.currentNavigation().extras &&
        this.router.currentNavigation().extras.state &&
        this.router.currentNavigation().extras.state["type"] === "training"
      ) {
        const pushData = this.router.currentNavigation().extras.state;
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
          isMember: true,
          countAttendees: 0,
          attendees: undefined,
          exercises: undefined,
          children: undefined,
          cancelled: false,
          cancelledReason: "",
        };
        this.openTrainingDetailModal(training, true);
      } else {
        // console.log("no data");
      }
    });
  }

  getTeamTraining() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's teams and children's teams
        return combineLatest([
          this.fbService.getUserTeamRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            tap((children) => {
              this.children = children;
              // console.log("children", this.children);
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

            // Remove duplicate trainings by ID
            const uniqueTrainings = flattenedTrainings.filter(
              (training, index, self) =>
                index ===
                self.findIndex((t) => t.training.id === training.training.id),
            );

            return uniqueTrainings.map((item) => {
              const teamMembers = teamMembersMap[item.teamId] || [];
              const validAttendees = item.attendees.filter(
                (att) =>
                  att.status === true &&
                  teamMembers.some((member) => member.id === att.id),
              );

              // Finde den Status des aktuellen Benutzers
              const userStatus =
                item.attendees.find((att) => att.id === this.user.uid)
                  ?.status ?? null;

              // Finde die relevanten Kinder mit ihren Status
              const relevantChildren = teamMembers
                .filter((att) =>
                  this.children.some((child) => child.id === att.id),
                )
                .map((att) => {
                  const child = this.children.find(
                    (child) => child.id === att.id,
                  );
                  const childStatus =
                    item.attendees.find((attendee) => attendee.id === att.id)
                      ?.status ?? null;
                  return child
                    ? {
                        firstName: child.firstName,
                        lastName: child.lastName,
                        status: childStatus,
                        id: child.id,
                      }
                    : {};
                });

              return {
                ...item.training,
                cancelled: item.training.cancelled ?? false,
                attendees: item.attendees,
                exercises: item.exercises,
                isMember: teamMembers.some(
                  (member) => member.id === this.user.uid,
                ),
                team: item.teamDetails || {},
                status: userStatus,
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
                      return this.fbService.getUserTeamRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenTeams) => childrenTeams.flat()),
            // tap((teams) => console.log("Children Teams:", teams)),
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

            // Remove duplicate trainings by ID
            const uniqueTrainings = flattenedTrainings.filter(
              (training, index, self) =>
                index ===
                self.findIndex((t) => t.training.id === training.training.id),
            );

            return uniqueTrainings.map((item) => {
              const teamMembers = teamMembersMap[item.teamId] || [];
              const validAttendees = item.attendees.filter(
                (att) =>
                  att.status === true &&
                  teamMembers.some((member) => member.id === att.id),
              );

              // Finde den Status des aktuellen Benutzers
              const userStatus =
                item.attendees.find((att) => att.id === this.user.uid)
                  ?.status ?? null;

              // Finde die relevanten Kinder mit ihren Status
              const relevantChildren = teamMembers
                .filter((att) =>
                  this.children.some((child) => child.id === att.id),
                )
                .map((att) => {
                  const child = this.children.find(
                    (child) => child.id === att.id,
                  );
                  const childStatus =
                    item.attendees.find((attendee) => attendee.id === att.id)
                      ?.status ?? null;
                  return child
                    ? {
                        firstName: child.firstName,
                        lastName: child.lastName,
                        status: childStatus,
                        id: child.id,
                      }
                    : {};
                });

              return {
                ...item.training,
                cancelled: item.training.cancelled ?? false,
                attendees: item.attendees,
                exercises: item.exercises,
                isMember: teamMembers.some(
                  (member) => member.id === this.user.uid,
                ),
                team: item.teamDetails || {},
                children: relevantChildren,
                status: userStatus,
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

    await modal.present();

    const { role } = await modal.onWillDismiss();

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

    const { role } = await modal.onWillDismiss();

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

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async deleteTraining(slidingItem: IonItemSliding, training) {
    slidingItem.closeOpened();

    const result = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(
        this.translate.get("training.delete_training"),
      ),
      message: await lastValueFrom(
        this.translate.get("training.delete_training_confirm"),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    if (result) {
      try {
        // Zuerst das Training absagen
        await this.trainingService.updateTraining(
          training.teamId,
          training.id,
          {
            cancelled: true,
            cancelledReason: await lastValueFrom(
              this.translate.get("training.deleted_reason"),
            ),
          },
        );

        // Dann das Training löschen
        await this.trainingService.deleteTeamTraining(
          training.teamId,
          training.id,
        );
        await this.uiService.showSuccessToast(
          await lastValueFrom(
            this.translate.get("common.success__training_deleted"),
          ),
        );
      } catch (error) {
        console.error("Error deleting training:", error);
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("common.error")),
        );
      }
    }
  }

  async toggleAll() {
    // User meldet sich für alle Trainings an
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

  async trainingListActions() {
    const actionSheet = await this.uiService.showActionSheet({
      header: await lastValueFrom(this.translate.get("training.actions")),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.alle_anmelden")),
          handler: () => {
            this.toggleAll();
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "destructive",
        },
      ],
    });
  }

  toggleItem(slidingItem: IonItemSliding, status: boolean, training: any) {
    console.log("toggleItem", training);
    slidingItem.closeOpened();
    this.processToggle(this.user.uid, status, training);
  }

  toggleChildren(status: boolean, training: any, childrenId) {
    //console.log("toggleChildren", training);

    this.processToggle(childrenId, status, training);
  }

  toggleChildrenItem(
    slidingItem: IonItemSliding,
    status: boolean,
    training: any,
    childrenId,
  ) {
    //console.log("toggleChildrenItem", training);
    slidingItem.closeOpened();
    this.processToggle(childrenId, status, training);
  }

  toggle(status: boolean, training: any) {
    this.processToggle(this.user.uid, status, training);
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
