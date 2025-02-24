import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import {
  Observable,
} from "rxjs";
import { Club } from "src/app/models/club";
import { Veranstaltung } from "src/app/models/event";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";

@Component({
    selector: "app-event-add",
    templateUrl: "./event-add.page.html",
    styleUrls: ["./event-add.page.scss"],
    standalone: false
})
export class EventAddPage implements OnInit {
  @Input("data") eventCopy: Veranstaltung;
  event: Veranstaltung;
  user$: Observable<User>;
  user: User;

  clubAdminList$: Observable<Club[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    private eventService: EventService,
    private cdr: ChangeDetectorRef,
    private fbService: FirebaseService,
    private readonly toastController: ToastController,
    public navParams: NavParams,
    private translate: TranslateService
  ) {
    this.event = {
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

      /*teamId: "",
      teamName: "",
      liga: "",*/

      link_poll: "", 
      link_web: "",

      clubId: "",
      clubName: "",

      status: true,
      attendees: [],
      countAttendees: 0,
      countNeeded: 0,
      closedEvent: false
    };
  }

  ngOnInit() {
    this.eventCopy = this.navParams.get("data");
    if (this.eventCopy.id) {
      this.event = this.eventCopy;
    }

    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.clubAdminList$.forEach((clubList) => {
      this.event.clubId = clubList[0].id;
      this.event.clubName = clubList[0].name;
      return clubList;
    });
  }

  ngOnDestroy(): void {}

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  async createEvent() {
    //Set Hours/Minutes of endDate to TimeFrom of training
    console.log(`Start Date before calculation: ${this.event.startDate}`);
    const calculatedStartDate = new Date(this.event.startDate);
    calculatedStartDate.setHours(new Date(this.event.timeFrom).getHours());
    calculatedStartDate.setMinutes(new Date(this.event.timeFrom).getMinutes());
    calculatedStartDate.setSeconds(0);
    calculatedStartDate.setMilliseconds(0);
    this.event.startDate = calculatedStartDate.toISOString();
    console.log(`Start Date after calculation: ${this.event.startDate}`);

    console.log(`End Date before calculation: ${this.event.endDate}`);
    const calcualtedEndDate = new Date(this.event.endDate);
    calcualtedEndDate.setHours(new Date(this.event.timeFrom).getHours());
    calcualtedEndDate.setMinutes(new Date(this.event.timeFrom).getMinutes());
    calcualtedEndDate.setSeconds(0);
    calcualtedEndDate.setMilliseconds(0);
    this.event.endDate = calcualtedEndDate.toISOString();
    console.log(`End Date after calculation: ${this.event.endDate}`);

    const calculatedTimeFrom = new Date(this.event.timeFrom);
    calculatedTimeFrom.setDate(new Date(this.event.startDate).getDate());
    calculatedTimeFrom.setMonth(new Date(this.event.startDate).getMonth());
    calculatedTimeFrom.setFullYear(
      new Date(this.event.startDate).getFullYear()
    );
    calculatedTimeFrom.setSeconds(0);
    calculatedTimeFrom.setMilliseconds(0);
    this.event.timeFrom = calculatedTimeFrom.toISOString();

    const calculatedTimeTo = new Date(this.event.timeTo);
    calculatedTimeTo.setDate(new Date(this.event.startDate).getDate());
    calculatedTimeTo.setMonth(new Date(this.event.startDate).getMonth());
    calculatedTimeTo.setFullYear(new Date(this.event.startDate).getFullYear());
    calculatedTimeTo.setSeconds(0);
    calculatedTimeTo.setMilliseconds(0);
    this.event.timeTo = calculatedTimeTo.toISOString();

    this.event.date = Timestamp.fromDate(new Date(this.event.startDate));

    delete this.event.attendees;

    const event = await this.eventService.setCreateClubEvent(this.event).catch(e => {
      console.log(e.message);
      this.toastActionError(e);
    })
    if (event) {
      console.log(event.id);
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
  changeTimeFrom(ev) {
    console.log(ev.detail.value);
    if (this.event.timeFrom > this.event.timeTo) {
      this.event.timeTo = this.event.timeFrom;
    }
  }

  changeStartDate(ev) {
    console.log(ev.detail.value);
    if (this.event.startDate > this.event.endDate) {
      this.event.endDate = this.event.startDate;
    }
  }
}
