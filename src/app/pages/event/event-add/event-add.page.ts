import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
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
import { Club } from "src/app/models/club";
import { Veranstaltung } from "src/app/models/event";
import { Team } from "src/app/models/team";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";

@Component({
  selector: "app-event-add",
  templateUrl: "./event-add.page.html",
  styleUrls: ["./event-add.page.scss"],
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

      clubId: "",
      clubName: "",

      status: true,
      attendees: [],
      countAttendees: 0,
    };
  }

  ngOnInit() {
    this.eventCopy = this.navParams.get("data");
    if (this.eventCopy.id) {
      this.event = this.eventCopy;
    }

    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.clubAdminList$.subscribe({
      next: (data) => {
        console.log("Club Admin Data received");
        this.cdr.detectChanges();
        this.event.clubId = data[0].id;
        this.event.clubName = data[0].name;
      },
      error: (err) => console.error("Club Admin Error in subscription:", err),
      complete: () => console.log("Club Admin Observable completed"),
    });
  }

  ngOnDestroy(): void {}

  async close() {
    return this.modalCtrl.dismiss(null, "close");
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

    delete this.event.attendees;

    this.eventService.setCreateClubEvent(this.event, this.user);
    return this.modalCtrl.dismiss({}, "confirm");
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
