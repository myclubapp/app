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

      // Korrektur der Datums- und Zeitkonvertierung
      const startDate: Timestamp = this.trainingCopy.startDate as any;
      const endDate: Timestamp = this.trainingCopy.endDate as any;
      this.training.startDate = startDate.toDate().toISOString();
      this.training.endDate = endDate.toDate().toISOString();

      // Korrektur der Zeitkonvertierung für timeFrom und timeTo
      const timeFromDate = new Date(this.trainingCopy.timeFrom);
      const timeToDate = new Date(this.trainingCopy.timeTo);

      // Lokale Zeit beibehalten, indem wir die Stunden direkt setzen
      this.training.timeFrom = new Date(Date.UTC(
        timeFromDate.getFullYear(),
        timeFromDate.getMonth(),
        timeFromDate.getDate(),
        timeFromDate.getHours(),  // Hier verwenden wir getHours statt getUTCHours
        timeFromDate.getMinutes(),
        0,
        0
      )).toISOString();

      this.training.timeTo = new Date(Date.UTC(
        timeToDate.getFullYear(),
        timeToDate.getMonth(),
        timeToDate.getDate(),
        timeToDate.getHours(),    // Hier verwenden wir getHours statt getUTCHours
        timeToDate.getMinutes(),
        0,
        0
      )).toISOString();
    }


    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.teamAdminList$.forEach((teamList) => {
      this.training.teamId = teamList[0].id;
      this.training.teamName = teamList[0].name;
    });
  }

  ngOnDestroy(): void { }

  changeTimeFrom(ev) {
    console.log("changeTimeFrom local time: " + ev.detail.value);

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
    }
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
    console.log("changeStartDate " + ev.detail.value);
    if (this.training.startDate > this.training.endDate) {
      this.training.endDate = this.training.startDate;
    }
  }

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }
  async createTraining() {
    console.log(`Start Date before calculation: ${this.training.startDate}`);
    console.log(`End Date before calculation: ${this.training.endDate}`);
  
    // Hilfsfunktion um lokale Zeit in UTC zu konvertieren
    const parseDateTime = (dateString: string): Date => {
      const date = new Date(dateString);
      
      // Wenn die Zeit bereits in UTC (mit Z) ist, verwende sie direkt
      if (dateString.endsWith('Z')) {
        return date;
      }
      
      // Für lokale Zeit, konvertiere zu UTC unter Berücksichtigung des Timezone Offsets
      const offset = date.getTimezoneOffset();
      return new Date(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours() - (offset / 60), // Konvertiere lokale Zeit zu UTC
        date.getMinutes(),
        0,
        0
      ));
    };
  
    const startDate = parseDateTime(this.training.startDate);
    const endDate = parseDateTime(this.training.endDate);
    const timeFrom = parseDateTime(this.training.timeFrom);
    const timeTo = parseDateTime(this.training.timeTo);
  
    // Create new UTC date with combined start date and time
    const calculatedStartDate = new Date(Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate(),
      timeFrom.getUTCHours(),
      timeFrom.getUTCMinutes(),
      0,
      0
    ));
  
    // Create new UTC date with combined end date and time
    const calculatedEndDate = new Date(Date.UTC(
      endDate.getUTCFullYear(),
      endDate.getUTCMonth(),
      endDate.getUTCDate(),
      timeTo.getUTCHours(),
      timeTo.getUTCMinutes(),
      0,
      0
    ));
  
    // Store results in ISO format
    this.training.startDate = calculatedStartDate.toISOString();
    this.training.timeFrom = calculatedStartDate.toISOString();
    this.training.endDate = calculatedEndDate.toISOString();
    this.training.timeTo = calculatedEndDate.toISOString();
  
    console.log(`Start Date after calculation: ${this.training.startDate}`);
    console.log(`End Date after calculation: ${this.training.endDate}`);
  
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
