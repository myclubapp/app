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
    this.training = {
      id: "",
      name: "",
      description: "",

      location: "",
      streetAndNumber: "",
      postalCode: "",
      city: "",

      date: Timestamp.fromDate(new Date()),

      timeFrom: new Date().toISOString(),
      timeTo: new Date().toISOString(),

      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),

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
    if (this.trainingCopy.id) {
      this.training = this.trainingCopy;

      const startDate: Timestamp = this.trainingCopy.startDate as any;
      const endDate: Timestamp = this.trainingCopy.endDate as any;
      this.training.startDate = startDate.toDate().toISOString();
      this.training.endDate = endDate.toDate().toISOString();

      this.training.timeFrom = new Date(
        new Date(this.trainingCopy.timeFrom).getTime() -
        new Date(this.trainingCopy.timeFrom).getTimezoneOffset() * 60 * 1000
      ).toISOString();
      this.training.timeTo = new Date(
        new Date(this.trainingCopy.timeTo).getTime() -
        new Date(this.trainingCopy.timeTo).getTimezoneOffset() * 60 * 1000
      ).toISOString();
    }

    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.teamAdminList$.forEach((teamList) => {
      this.training.teamId = teamList[0].id;
      this.training.teamName = teamList[0].name;
    });
  }

  ngOnDestroy(): void { }

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

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }

  async createTraining() {
    //Set Hours/Minutes of endDate to TimeFrom of training
    console.log(`Start Date before calculation: ${this.training.startDate}`);
    const calculatedStartDate = new Date(this.training.startDate);
    calculatedStartDate.setHours(new Date(this.training.timeFrom).getHours());
    calculatedStartDate.setMinutes(
      new Date(this.training.timeFrom).getMinutes()
    );
    calculatedStartDate.setSeconds(0);
    calculatedStartDate.setMilliseconds(0);
    this.training.startDate = calculatedStartDate.toISOString();
    console.log(`Start Date after calculation: ${this.training.startDate}`);

    console.log(`End Date before calculation: ${this.training.endDate}`);
    const calcualtedEndDate = new Date(this.training.endDate);
    calcualtedEndDate.setHours(new Date(this.training.timeFrom).getHours());
    calcualtedEndDate.setMinutes(new Date(this.training.timeFrom).getMinutes());
    calcualtedEndDate.setSeconds(0);
    calcualtedEndDate.setMilliseconds(0);
    this.training.endDate = calcualtedEndDate.toISOString();
    console.log(`End Date after calculation: ${this.training.endDate}`);

    const calculatedTimeFrom = new Date(this.training.timeFrom);
    calculatedTimeFrom.setDate(new Date(this.training.startDate).getDate());
    calculatedTimeFrom.setMonth(new Date(this.training.startDate).getMonth());
    calculatedTimeFrom.setFullYear(
      new Date(this.training.startDate).getFullYear()
    );
    calculatedTimeFrom.setSeconds(0);
    calculatedTimeFrom.setMilliseconds(0);
    this.training.timeFrom = calculatedTimeFrom.toISOString();

    const calculatedTimeTo = new Date(this.training.timeTo);
    calculatedTimeTo.setDate(new Date(this.training.startDate).getDate());
    calculatedTimeTo.setMonth(new Date(this.training.startDate).getMonth());
    calculatedTimeTo.setFullYear(
      new Date(this.training.startDate).getFullYear()
    );
    calculatedTimeTo.setSeconds(0);
    calculatedTimeTo.setMilliseconds(0);
    this.training.timeTo = calculatedTimeTo.toISOString();

    delete this.training.attendees;

    const training = await this.trainingService.setCreateTraining(this.training).catch(e => {
      console.log(e.message);
      this.toastActionError(e);
    })
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
