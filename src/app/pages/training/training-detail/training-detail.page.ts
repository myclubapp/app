import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ModalController,
  NavParams,
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

@Component({
  selector: "app-training-detail",
  templateUrl: "./training-detail.page.html",
  styleUrls: ["./training-detail.page.scss"],
  standalone: false,
})
export class TrainingDetailPage implements OnInit {
  @Input("data") training: Training;
  @Input("isFuture") isFuture: boolean;

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

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private platform: Platform,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly toastController: ToastController,
    private readonly alertCtrl: AlertController,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly exerciseService: ExerciseService,
  ) {}

  ngOnInit() {
    this.training = this.navParams.get("data");
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
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  enableTrainingExercise(clubList) {
    return (
      clubList &&
      clubList.some((club) => club.hasFeatureTrainingExercise == true)
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
                                ? { ...detail, status: attendee.status }
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

                          const userAttendee = attendeeDetails.find(
                            (att) => att.id === this.user.uid,
                          );
                          const status = userAttendee
                            ? userAttendee.status
                            : null;
                          return {
                            ...training,
                            team, // Add team details here
                            attendees: attendeeDetails,
                            attendeeListTrue,
                            attendeeListFalse,
                            unrespondedMembers,
                            status,
                          };
                        }),
                        catchError((err) => {
                          console.error("Error fetching attendees:", err);
                          return of({
                            ...training,
                            team, // Add team details here
                            attendees: [],
                            attendeeListTrue: [],
                            attendeeListFalse: [],
                            unrespondedMembers: teamMembersWithDetails
                              .filter((member) => member !== null)
                              .map((member) => ({ ...member, status: null })), // Also ensure 'status: null' here for consistency
                            status: null,
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
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: null,
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
    const toast = await this.toastController.create({
      message: error.message,
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  async toggle(status: boolean, training: any) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`,
    );
    const newStartDate = training.date.toDate();
    newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ");
    const trainingThreshold = training.team.trainingThreshold || 0;
    console.log(trainingThreshold);
    // Verpätete Abmeldung?
    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * trainingThreshold &&
      status == false &&
      trainingThreshold
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      // OK
      await this.trainingService.setTeamTrainingAttendeeStatus(
        status,
        training.teamId,
        training.id,
      );
      this.presentToast();
    }
  }
  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    training: Training,
    memberId: string,
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${memberId} and team ${training.teamId} and training ${training.id}`,
    );
    await this.trainingService.setTeamTrainingAttendeeStatusAdmin(
      status,
      training.teamId,
      training.id,
      memberId,
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "success",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }
  async openMember(member: Profile) {
    console.log("openMember");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
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
