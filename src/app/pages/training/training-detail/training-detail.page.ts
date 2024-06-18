import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";

import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
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
    private readonly trainingService: TrainingService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly exerciseService: ExerciseService,
  ) {}

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
      switchMap(() =>
        this.trainingService.getTeamTrainingRef(teamId, trainingId)
      ),
      switchMap((training) => {
        if (!training) return of(null);
        return this.trainingService
          .getTeamTrainingsAttendeesRef(teamId, trainingId)
          .pipe(
            switchMap((attendees) => {
              if (attendees.length === 0) {
                // If no attendees, return event data immediately
                return of({
                  ...training,
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  attendeeListNoAnswer: [],
                  status: null,
                  teamMembers: [],
                });
              }
              const attendeeProfiles$ = attendees.map((attendee) =>
                this.userProfileService.getUserProfileById(attendee.id).pipe(
                  take(1),
                  map((profile) => ({ ...profile, ...attendee })), // Combine attendee object with profile
                  catchError(() =>
                    of({
                      ...attendee,
                      firstName: "Unknown",
                      lastName: "Unknown",
                    })
                  )
                )
              );
              return forkJoin(attendeeProfiles$).pipe(
                map((attendeesWithDetails) => ({
                  ...training,
                  attendees: attendeesWithDetails,
                  attendeeListTrue: attendeesWithDetails.filter(
                    (e) => e.status == true
                  ),
                  attendeeListFalse: attendeesWithDetails.filter(
                    (e) => e.status == false
                  ),
                  status: attendeesWithDetails.find(
                    (att) => att.id == this.user.uid
                  )?.status,
                  teamMembers: [],
                  attendeeListNoAnswer: [],
                }))
              );
            }),
            catchError(() =>
              of({
                ...training,
                attendees: [],
                status: null,
              })
            )
          );
      }),
      catchError((err) => {
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
      message: await lastValueFrom(this.translate.get("success__saved")),
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
