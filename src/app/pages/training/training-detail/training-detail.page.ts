import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { IonRouterOutlet } from "@ionic/angular/common";
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

@Component({
  selector: "app-training-detail",
  templateUrl: "./training-detail.page.html",
  styleUrls: ["./training-detail.page.scss"],
})
export class TrainingDetailPage implements OnInit {
  @Input("data") training: Training;
  @Input("isFuture") isFuture: boolean;

  training$: Observable<any>;

  mode = "yes";

  user$: Observable<User>;
  user: User;

  attendeeListTrue: any[] = [];
  attendeeListFalse: any[] = [];
  attendeeListUndefined: any[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly trainingService: TrainingService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    // private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.training = this.navParams.get("data");
    this.training$ = of(this.training);

    this.attendeeListTrue = [];
    this.attendeeListFalse = [];
    this.attendeeListUndefined = [];

    this.training$ = this.getTraining(this.training.teamId, this.training.id);
    this.training$.subscribe({
      next: (data) => {
        console.log("TRAINING Data received");
        console.log(data);
        this.training = {
          ...this.training,
          ...data,
        };
        this.cdr.detectChanges();
      },
      error: (err) => console.error("TRAINING Error in subscription:", err),
      complete: () => console.log("TRANING Observable completed"),
    });
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
                  status: null,
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
      this.user.uid,
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

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.training, "confirm");
  }

  async openTrainingExerciseModal() {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: TrainingExercisesPage,
      // presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
       
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }


}
