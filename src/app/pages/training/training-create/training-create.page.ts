import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import {
  Observable,
  Subscription,
  catchError,
  concatMap,
  defaultIfEmpty,
  finalize,
  forkJoin,
  from,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Team } from "src/app/models/team";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";

@Component({
  selector: "app-training-create",
  templateUrl: "./training-create.page.html",
  styleUrls: ["./training-create.page.scss"],
  standalone: false
})
export class TrainingCreatePage implements OnInit {
  @Input("data") trainingCopy: Training;
  training: Training;
  user$: Observable<User>;

  teamAdminList$: Observable<Team[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    private trainingService: TrainingService,
    private readonly authService: AuthService,

    private readonly toastController: ToastController,

    private fbService: FirebaseService,
    public navParams: NavParams
  ) {

    const now = new Date();
    const utcNow = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      0,
      0
    ));

    this.training = {
      id: "",
      name: "",
      description: "",

      location: "",
      streetAndNumber: "",
      postalCode: "",
      city: "",

      date: Timestamp.fromDate(new Date()),

      timeFrom: utcNow.toISOString(),
      timeTo: utcNow.toISOString(),
      startDate: utcNow.toISOString(),
      endDate: utcNow.toISOString(),

      repeatFrequency: "W",
      repeatAmount: "1",

      teamId: "",
      teamName: "",
      liga: "",

      status: true,
      attendees: [],
      exercises: [],
      countAttendees: 0,
    };
  }

  ngOnInit() {
    this.trainingCopy = this.navParams.get("data");
    console.log(this.trainingCopy);
    if (this.trainingCopy.id) {
      this.training = this.trainingCopy;


      const now = new Date();
      /*const utcNow = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        0,
        0
      ));*/
      this.training.timeFrom = now.toISOString();
      this.training.timeTo = now.toISOString();
      this.training.startDate = now.toISOString();
      this.training.endDate = now.toISOString();

    }


    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.teamAdminList$.forEach((teamList) => {
      this.training.teamId = teamList[0].id;
      this.training.teamName = teamList[0].name;
    });
  }

  ngOnDestroy(): void { }

  changeTimeFrom(ev) {
    /*console.log("changeTimeFrom local time: " + ev.detail.value);

    const newDate = new Date(ev.detail.value);

    // Lokale Zeit beibehalten
    this.training.timeFrom = new Date(Date.UTC(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate(),
      newDate.getHours(),    // Hier verwenden wir getHours statt getUTCHours
      newDate.getMinutes(),
      0,
      0
    )).toISOString();

    if (this.training.timeFrom > this.training.timeTo) {
      this.training.timeTo = this.training.timeFrom;
    }*/
  }
  // In your component:
  /*getLocalTimeFrom(): string {
    if (!this.training.timeFrom) return '';
    
    // Convert UTC to local time for display
    const date = new Date(this.training.timeFrom);
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes()
    ).toISOString();
  }*/


  changeStartDate(ev) {
    /*console.log("changeStartDate " + ev.detail.value);
    if (this.training.startDate > this.training.endDate) {
      this.training.endDate = this.training.startDate;
    }*/
  }

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }

  combineDateAndTime(dateValue, timeValue) {
    // Handle case where inputs might be strings
    let dateObj = dateValue;
    if (!(dateValue instanceof Date)) {
      dateObj = new Date(dateValue);
    }
    
    // Get the date portion (year, month, day)
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    
    // Parse the time string (handling ISO format like "2025-03-03T21:00:00")
    let hours = 0, minutes = 0, seconds = 0;
    
    if (typeof timeValue === 'string') {
      // Check if it's ISO format with "T" separator
      if (timeValue.includes('T')) {
        // Parse ISO format (2025-03-03T21:00:00)
        const timeObj = new Date(timeValue);
        hours = timeObj.getHours();
        minutes = timeObj.getMinutes();
        seconds = timeObj.getSeconds();
      } else {
        // Fallback to original parsing for "HH:MM:SS" format
        const timeParts = timeValue.split(':');
        hours = parseInt(timeParts[0], 10) || 0;
        minutes = parseInt(timeParts[1], 10) || 0;
        seconds = parseInt(timeParts[2], 10) || 0;
      }
    } else if (timeValue instanceof Date) {
      hours = timeValue.getHours();
      minutes = timeValue.getMinutes();
      seconds = timeValue.getSeconds();
    }
    
    // Create a new date with combined date and time
    const combinedDateTime = new Date(year, month, day, hours, minutes, seconds);
    return combinedDateTime;
  }
  

  async createTraining() {
    console.log(`Start Date before calculation: ${this.training.startDate}`);
    console.log(`Start Time before calculation: ${this.training.timeFrom}`);

    console.log(`End Date before calculation: ${this.training.endDate}`);
    console.log(`End Time before calculation: ${this.training.timeTo}`);

  // Combine start date with time from
  const combinedStartDateTime = this.combineDateAndTime(
    this.training.startDate,
    this.training.timeFrom  // ISO format: "2025-03-03T21:00:00"
  );
  
  // Combine end date with time to
  const combinedEndDateTime = this.combineDateAndTime(
    this.training.endDate,
    this.training.timeTo    // ISO format: "2025-03-03T21:00:00"
  );

    // Or if you want to update the original fields:
    this.training.startDate = combinedStartDateTime.toISOString();
    this.training.timeFrom = combinedStartDateTime.toISOString();
    
    this.training.endDate = combinedEndDateTime.toISOString();
    this.training.timeTo = combinedEndDateTime.toISOString();


    console.log(`Start Date after calculation: ${this.training.startDate}`);
    console.log(`Start Time after calculation: ${this.training.timeFrom}`);

    console.log(`End Date after calculation: ${this.training.endDate}`);
    console.log(`End Time after calculation: ${this.training.timeTo}`);

    delete this.training.attendees;

    const training = await this.trainingService.setCreateTraining(this.training).catch(e => {
      console.log(e.message);
      this.toastActionError(e);
    });

    if (training) {
      console.log(training.id);
      return this.modalCtrl.dismiss({}, "confirm");
    }

    return null;
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

}
