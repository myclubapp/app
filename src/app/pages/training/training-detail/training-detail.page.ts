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
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Platform } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";

import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  defaultIfEmpty,
  forkJoin,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { TrainingExercisesPage } from "../training-exercises/training-exercises.page";
import { MemberPage } from "../../member/member.page";
import { Profile } from "src/app/models/user";
import { ExerciseService } from "src/app/services/firebase/exercise.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { Team } from "src/app/models/team";
import { Club } from "src/app/models/club";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-training-detail",
  templateUrl: "./training-detail.page.html",
  styleUrls: ["./training-detail.page.scss"],
  standalone: false,
})
export class TrainingDetailPage implements OnInit {
  @Input() data!: Training;
  @Input() isFuture!: boolean;

  training: Training;

  private backButtonSub: Subscription;

  training$: Observable<any>;
  exerciseList$: Observable<any[]>;

  mode = "yes";
  allowEdit: boolean = false;
  trainingHasChanged: any = {};

  user$: Observable<User>;
  user: User;
  teamAdminList$: Observable<Team[]>;
  clubList$: Observable<Club[]>;

  children: Profile[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    private platform: Platform,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly toastController: ToastController,
    private readonly alertCtrl: AlertController,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly exerciseService: ExerciseService,
    private readonly uiService: UiService,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input property directly
    this.training = this.data;

    if (!this.training) {
      console.error("Training data not provided");
      return;
    }

    this.training$ = this.getTraining(this.training.teamId, this.training.id);
    this.exerciseList$ = this.exerciseService.getTeamTrainingExerciseRefs(
      this.training.teamId,
      this.training.id,
    );

    this.clubList$ = this.fbService.getClubList();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }

  ionViewDidEnter() {}

  ngOnDestroy() {}

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }
  enableMyClubPro(clubList) {
    return (
      clubList && clubList.some((club) => club.hasFeatureMyClubPro == true)
    );
  }

  getTraining(teamId: string, trainingId: string) {
    console.log("getTraining", teamId, trainingId);
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap((user) => {
        return this.userProfileService.getChildren(user.uid).pipe(
          tap((children) => {
            this.children = children;
            // console.log("children", this.children);
          }),
        );
      }),

      switchMap(() =>
        this.trainingService.getTeamTrainingRef(teamId, trainingId),
      ),
      switchMap((training) => {
        if (!training) return of(null);

        // Fetch team details
        return this.fbService.getTeamRef(teamId).pipe(
          switchMap((team) => {
            if (!team) return of(null);

            // Fetch all team members first
            return this.fbService.getTeamMemberRefs(teamId).pipe(
              switchMap((teamMembers) => {
                const teamMemberProfiles$ = teamMembers.map((member) =>
                  this.userProfileService.getUserProfileById(member.id).pipe(
                    take(1),
                    map((profile) => ({
                      ...member, // Spread member to retain all original attributes
                      ...profile, // Spread profile to overwrite and add profile attributes
                      firstName: profile.firstName || "Unknown",
                      lastName: profile.lastName || "Unknown",
                      roles: member.roles || [],
                    })),
                    catchError((err) => {
                      console.log(
                        `Failed to fetch profile for team member ${member.id}:`,
                        err,
                      );
                      return of({
                        ...member,
                        firstName: "Unknown",
                        lastName: "Unknown",
                        roles: member.roles || [],
                        status: null,
                        changedAt: null,
                      });
                    }),
                  ),
                );
                // Fetch all attendees next
                return forkJoin(teamMemberProfiles$).pipe(
                  map((teamMembersWithDetails) =>
                    teamMembersWithDetails.filter(
                      (member) => member !== undefined,
                    ),
                  ), // Filtering out undefined entries
                  switchMap((teamMembersWithDetails) => {
                    return this.trainingService
                      .getTeamTrainingsAttendeesRef(teamId, trainingId)
                      .pipe(
                        map((attendees) => {
                          const attendeeDetails = attendees
                            .map((attendee) => {
                              const detail = teamMembersWithDetails.find(
                                (member) => member && member.id === attendee.id,
                              );
                              return detail
                                ? {
                                    ...detail,
                                    status: attendee.status,
                                    changedAt: attendee.changedAt,
                                  }
                                : null;
                            })
                            .filter((item) => item !== null);

                          const attendeeListTrue = attendeeDetails
                            .filter((att) => att.status === true)
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );
                          const attendeeListFalse = attendeeDetails
                            .filter((att) => att.status === false)
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );
                          const respondedIds = new Set(
                            attendeeDetails.map((att) => att.id),
                          );
                          // Modify here to add 'status: null' for each unresponded member
                          const unrespondedMembers = teamMembersWithDetails
                            .filter((member) => !respondedIds.has(member.id))
                            .map((member) => ({ ...member, status: null }))
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            ); // Ensuring 'status: null' is explicitly set

                          const relevantChildren = teamMembers
                            .filter((att) =>
                              this.children.some(
                                (child) => child.id === att.id,
                              ),
                            )
                            .map((att) => {
                              const child = this.children.find(
                                (child) => child.id === att.id,
                              );
                              return child
                                ? {
                                    firstName: child.firstName,
                                    lastName: child.lastName,
                                  }
                                : {};
                            });

                          return {
                            ...training,
                            team, // Add team details here
                            teamId: teamId,
                            attendees: attendeeDetails,
                            attendeeListTrue,
                            attendeeListFalse,
                            unrespondedMembers,
                            children: relevantChildren,
                            status: attendeeDetails
                              .filter((att) =>
                                [
                                  this.user.uid,
                                  ...this.children.map((child) => child.id),
                                ].includes(att.id),
                              )
                              .map((att) => ({
                                id: att.id,
                                status: att.status,
                                firstName: att.firstName,
                                lastName: att.lastName,
                                changedAt: att.changedAt,
                              })),
                          };
                        }),
                        catchError((err) => {
                          console.error("Error fetching attendees:", err);
                          return of({
                            ...training,
                            team, // Add team details here
                            teamId: teamId,
                            children: [],
                            attendees: [],
                            attendeeListTrue: [],
                            attendeeListFalse: [],
                            unrespondedMembers: teamMembersWithDetails
                              .filter((member) => member !== null)
                              .map((member) => ({ ...member, status: null })), // Also ensure 'status: null' here for consistency
                            status: [], // Empty array for status in case of error
                          });
                        }),
                      );
                  }),
                );
              }),
              catchError((err) => {
                console.error("Error fetching team members:", err);
                return of({
                  ...training,
                  team, // Add team details here
                  teamId: teamId,
                  children: [],
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: [], // Empty array for status in case of error
                });
              }),
            );
          }),
        );
      }),
      catchError((err) => {
        console.error("Error in getTrainingWithAttendees:", err);
        return of(null);
      }),
    );
  }

  async toggleAll(status: boolean, training: Training) {
    // Alle unrespondedMembers werden vom Admin für spezifisches Training angemeldet
    const alert = await this.alertCtrl.create({
      message: "Sollen alle angemeldet werden?",
      header: "Alle anmelden",
      buttons: [
        {
          text: "Nein",
          role: "cancel",
          handler: () => {},
        },
        {
          role: "",
          text: "OK",
          handler: async () => {
            for (let member of training["unrespondedMembers"]) {
              console.log(
                `Set Status ${status} for user ${this.user.uid} and team ${this.training.teamId} and training ${training.id}`,
              );
              await this.trainingService
                .setTeamTrainingAttendeeStatusAdmin(
                  status,
                  this.training.teamId,
                  training.id,
                  member.id,
                )
                .catch((e) => {
                  console.log(e.message);
                  this.toastActionError(e);
                });
            }
            this.presentToast();
          },
        },
      ],
    });
    alert.present();
  }

  async toastActionError(error) {
    await this.presentErrorToast(error);
  }

  /*async toggle(status: boolean, training: any) {
    // Hole die Team-Mitglieder
    const teamMembers = await lastValueFrom(
      this.fbService.getTeamMemberRefs(training.teamId).pipe(take(1)),
    );
    // Hole die Kinder des aktuellen Benutzers
    const children = await lastValueFrom(
      this.userProfileService.getChildren(this.user.uid).pipe(take(1)),
    );
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
          },
        ],
      });
      await alert.present();

      const { data, role } = await alert.onDidDismiss();
      if (role === 'confirm' && data) {
        await this.processToggle(data, status, training);
      }
    }
  } */

  async toggleItem(
    item: IonItemSliding,
    status: boolean,
    training: any,
    memberId: string,
  ) {
    console.log("toggleItem", item, status, training, memberId);
    await item.close();
    await this.processToggle(memberId, status, training);
  }

  async processToggle(userId: string, status: boolean, training: any) {
    console.log(
      `Set Status ${status} for user ${userId} and team ${training.teamId} and training ${training.id}`,
    );
    const newStartDate = training.date.toDate();
    newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));

    const team = await lastValueFrom(
      this.fbService.getTeamRef(training.teamId).pipe(take(1)),
    );

    const trainingThreshold = team.trainingThreshold || 0;

    // Überprüfe, ob der Benutzer ein Team-Administrator ist
    const teamAdminList = await lastValueFrom(
      this.teamAdminList$.pipe(take(1)),
    );
    const isAdmin = this.isTeamAdmin(teamAdminList, training.teamId);

    // console.log("newStartDate", newStartDate);

    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * trainingThreshold &&
      status == false &&
      trainingThreshold &&
      !isAdmin
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

  async openMember(member: Profile) {
    console.log("openMember");

    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  async openTrainingExerciseModal() {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: TrainingExercisesPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        training: this.training,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async tooLateToggle() {
    const alert = await this.alertCtrl.create({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
      buttons: [
        {
          role: "",
          text: "OK",
          handler: (data) => {
            console.log(data);
          },
        },
      ],
    });
    alert.present();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.training, "confirm");
  }

  async edit() {
    if (this.allowEdit) {
      this.allowEdit = false;

      if (Object.keys(this.trainingHasChanged).length > 0) {
        const updatedTraining = await this.trainingService
          .updateTraining(
            this.training.teamId,
            this.training.id,
            this.trainingHasChanged,
          )
          .catch((e) => {
            this.toastActionError(e);
          });
        this.presentToast();
      }
    } else {
      this.allowEdit = true;
    }
  }

  async updateTraining(event, field) {
    console.log(field, event.detail);
    this.trainingHasChanged[field] = event.detail.hasOwnProperty("checked")
      ? event.detail.checked
      : event.detail.value;
  }

  changeTimeFrom(ev) {
    console.log(ev.detail.value);
    if (this.training.timeFrom > this.training.timeTo) {
      this.training.timeTo = this.training.timeFrom;
    }
  }

  changeStartDate(ev) {
    console.log(ev.detail.value);
    if (this.training.startDate > this.training.endDate) {
      this.training.endDate = this.training.startDate;
    }
  }
}
