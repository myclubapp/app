import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { Observable, catchError, map, of, switchMap, take, tap } from 'rxjs';
import { Training } from 'src/app/models/training';
import { AuthService } from 'src/app/services/auth.service';
import { TrainingService } from 'src/app/services/firebase/training.service';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.page.html',
  styleUrls: ['./training-detail.page.scss'],
})
export class TrainingDetailPage implements OnInit {
  @Input("data") training: Training;


  training$: Observable<Training>;

  mode = "yes";

  user$: Observable<User>;
  user: User;

  attendeeListTrue: any[] = [];
  attendeeListFalse: any[] = [];
  attendeeListUndefined: any[] = [];
  constructor (
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly trainingService: TrainingService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit () {
    this.training = this.navParams.get("data");
    this.training$ = of(this.training);

    this.attendeeListTrue = [];
    this.attendeeListFalse = [];
    this.attendeeListUndefined = [];

    this.training$ = this.getTraining(this.training.teamId, this.training.id);
    this.training$.subscribe({
      next: (data) => {
        console.log("TRAINING Data received");
        this.training = {
          ...this.training, ...data
        };
        this.cdr.detectChanges();
  
  
      },
      error: (err) => console.error("TRAINING Error in subscription:", err),
      complete: () => console.log("TRANING Observable completed")
    });
  }

  getTraining(teamId: string, trainingId: string) {
    return this.authService.getUser$().pipe(
      take(1),
      tap(user => {
        this.user = user;
        if (!user) {
          console.log("No user found");
          throw new Error("User not found");
        }
      }),
      switchMap(() => this.trainingService.getTeamTrainingRef(teamId, trainingId)),
      switchMap(game => {
        if (!game) return of(null); // If no game is found, return null
        return this.trainingService.getTeamTrainingsAttendeesRef(teamId, trainingId).pipe(
          map(attendees => {

            // get firstName & lastName from userProfile Method call for each attendees element
            // this.userProfileService.getUserProfileById(attendee.id)

            const userAttendee = attendees.find(att => att.id == this.user.uid);
            const status = userAttendee ? userAttendee.status : null;

            //this.attendeeListUndefined

            this.attendeeListTrue = attendees.filter(att => att.status == true) || [];
            this.attendeeListFalse = attendees.filter(att => att.status == false) || [];
            this.attendeeListUndefined = [];

            return {
              ...game,
              attendees,
              status,
            };
          }),
          catchError(() => of({
            ...game,
            attendees: [],
            status: null,
          })) // If error in fetching attendees, return game with empty attendees
        );
      }),
      catchError(err => {
        console.error("Error in getSingleGameWithAttendees:", err);
        return of(null); // Return null on error
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
      message: "Änderungen gespeichert",
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


}
