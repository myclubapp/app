import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";

import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
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

@Component({
  selector: "app-training-detail",
  templateUrl: "./training-detail.page.html",
  styleUrls: ["./training-detail.page.scss"],
})
export class TrainingDetailPage implements OnInit {
  @Input("data") training: Training;
  @Input("isFuture") isFuture: boolean;

  training$: Observable<any>;
  exerciseList$: Observable<any[]>;

  mode = "yes";

  user$: Observable<User>;
  user: User;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly trainingService: TrainingService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly exerciseService: ExerciseService,
  ) { }

  ngOnInit() {
    this.training = this.navParams.get("data");
    this.training$ = of(this.training);
    this.training$ = this.getTraining(this.training.teamId, this.training.id);
    this.exerciseList$ = this.exerciseService.getTeamTrainingExerciseRefs(this.training.teamId, this.training.id);
  }


 getTraining(teamId: string, trainingId: string) {
    return this.authService.getUser$().pipe(
        take(1),
        tap((user) => {
            this.user = user;
            if (!user) throw new Error("User not found");
        }),
        switchMap(() => this.trainingService.getTeamTrainingRef(teamId, trainingId)),
        switchMap((training) => {
            if (!training) return of(null);

            // Fetch all team members first
            return this.fbService.getTeamMemberRefs(teamId).pipe(
                switchMap(teamMembers => {
                    const teamMemberProfiles$ = teamMembers.map(member =>
                        this.userProfileService.getUserProfileById(member.id).pipe(
                            take(1),
                            catchError(err => {
                                console.log(`Failed to fetch profile for team member ${member.id}:`, err);
                                return of({ ...member, firstName: "Unknown", lastName: "Unknown", status: null });
                            })
                        )
                    );
                    // Fetch all attendees next
                    return forkJoin(teamMemberProfiles$).pipe(
                        switchMap(teamMembersWithDetails => {
                            return this.trainingService.getTeamTrainingsAttendeesRef(teamId, trainingId).pipe(
                                map(attendees => {
                                    const attendeeDetails = attendees.map(attendee => {
                                        const detail = teamMembersWithDetails.find(member => member.id === attendee.id);
                                        return detail ? { ...detail, status: attendee.status } : null;
                                    }).filter(item => item !== null);

                                    const attendeeListTrue = attendeeDetails.filter(att => att.status === true);
                                    const attendeeListFalse = attendeeDetails.filter(att => att.status === false);
                                    const respondedIds = new Set(attendeeDetails.map(att => att.id));
                                    const unrespondedMembers = teamMembersWithDetails.filter(member => !respondedIds.has(member.id));

                                    const userAttendee = attendeeDetails.find(att => att.id === this.user.uid);
                                    const status = userAttendee ? userAttendee.status : null;

                                    return {
                                        ...training,
                                        attendees: attendeeDetails,
                                        attendeeListTrue,
                                        attendeeListFalse,
                                        unrespondedMembers,
                                        status,
                                    };
                                }),
                                catchError(err => {
                                    console.error("Error fetching attendees:", err);
                                    return of({
                                        ...training,
                                        attendees: [],
                                        attendeeListTrue: [],
                                        attendeeListFalse: [],
                                        unrespondedMembers: teamMembersWithDetails.filter(member => member !== null),
                                        status: null
                                    });
                                })
                            );
                        })
                    );
                }),
                catchError(err => {
                    console.error("Error fetching team members:", err);
                    return of({
                        ...training,
                        attendees: [],
                        attendeeListTrue: [],
                        attendeeListFalse: [],
                        unrespondedMembers: [],
                        status: null
                    });
                })
            );
        }),
        catchError(err => {
            console.error("Error in getTrainingWithAttendees:", err);
            return of(null);
        })
    );
}


  async toggle(status: boolean, training: Training) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${this.training.teamId} and training ${training.id}`
    );
    await this.trainingService.setTeamTrainingAttendeeStatus(
      status,
      this.training.teamId,
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
        training: this.training
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.training, "confirm");
  }
}


