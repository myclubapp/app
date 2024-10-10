import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams, ToastController } from "@ionic/angular";
import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { Observable, Subscription, catchError, map } from "rxjs";
import { Club } from "src/app/models/club";
import { HelferEvent, Schicht } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";

@Component({
  selector: "app-helfer-add",
  templateUrl: "./helfer-add.page.html",
  styleUrls: ["./helfer-add.page.scss"],
})
export class HelferAddPage implements OnInit {
  @Input("data") eventCopy: HelferEvent;
  event: HelferEvent;
  user: User;

  clubAdminList$: Observable<Club[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    private eventService: EventService,

    private readonly toastController: ToastController,

    private cdr: ChangeDetectorRef,
    private readonly authService: AuthService,
    private fbService: FirebaseService,
    private alertController: AlertController,
    public navParams: NavParams
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


      schichten: <any>[],

      status: true,
      attendees: [],
      countAttendees: 0,
      countNeeded: 0,
    };
  }

  ngOnInit() {
    this.eventCopy = this.navParams.get("data");
    if (this.eventCopy.id) {
      this.event = this.eventCopy;
      console.log(this.event);


      // TODO READ SCHICHTEN, if available

    }

    if (!this.event.schichten) {
      this.event.schichten = <any>[];
    }

    this.clubAdminList$ = this.fbService.getClubAdminList().pipe(
      map(data => {
        if (data && data.length > 0) {
          this.event.clubId = data[0].id;
          this.event.clubName = data[0].name;
          return data;
        } else {
          console.log("No club admins found.");
          return [];
        }
      }),
      catchError(err => {
        console.error("Club Admin Error in data fetching:", err);
        return []; // Return an empty array to handle the error gracefully
      })
    );
  }

  ngOnDestroy(): void {

  }

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }

  async deleteSchicht(schicht: Schicht) {
    const alert = await this.alertController.create({
      header: "Schicht löschen",
      message: "Möchten Sie diese Schicht wirklich löschen?",
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          handler: () => {
            console.log("Löschen abgebrochen");
          },
        },
        {
          text: "Löschen",
          handler: async () => {
            console.log("Löschen bestätigt");
            const index = this.event.schichten.findIndex((object) => {
              return object.id === schicht.id;
            });
            if (index !== -1) {
              this.event.schichten.splice(index, 1);
            }
          },
        },
      ],
    });

    await alert.present();
   
  }

  async copySchicht(schicht: Schicht) {
    console.log(this.event.timeTo);
    const alert = await this.alertController.create({
      header: "Schicht erstellen",
      subHeader: " ",
      message: "Eine neue Helferschicht erstellen.",
      inputs: [
        {
          id: "name",
          name: "name",
          value: schicht.name,
          label: "Beschreibung",
          placeholder: "Beschreibung",
          type: "text",
        },
        {
          id: "count",
          name: "countNeeded",
          value: schicht.countNeeded,
          label: "Anzahl Helfer",
          placeholder: "Anzahl Helfer",
          type: "number",
        },
        {
          id: "points",
          name: "points",
          value: schicht.points,
          label: "Anzahl Helferpunkte",
          placeholder: "Anzahl Helferpunkte",
          type: "number",
    
        },
        {
          id: "timeFrom",
          name: "timeFrom",
          value: schicht.timeFrom,
          label: "Zeit von",
          placeholder: "Zeit von",
          type: "time",

        },
        {
          id: "timeTo",
          name: "timeTo",
          value: schicht.timeTo,
          label: "Zeit bis",
          placeholder: "Zeit bis",
          type: "time",

        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: () => {
            console.log("Abbrechen");
          },
        },
        {
          text: "Hinzufügen",
          handler: (data) => {
            console.log(data);
            this.event.schichten.push({
              id: this.event.schichten.length + 1,
              ...data,
              count: 0,
            });
          },
        },
      ],
    });
    alert.present();
  }

  async editSchicht(schicht: Schicht) {
    const alert = await this.alertController.create({
      header: "Schicht bearbeiten",
      subHeader: " ",
      message: "Eine Helferschicht bearbeiten.",
      inputs: [
        {
          id: "name",
          name: "name",
          label: "Beschreibung",
          placeholder: "Beschreibung",
          type: "text",
          value: schicht.name,
        },
        {
          id: "count",
          name: "countNeeded",
          label: "Anzahl Helfer",
          placeholder: "Anzahl Helfer",
          type: "number",
          value: schicht.countNeeded,
        },
        {
          id: "points",
          name: "points",
          label: "Anzahl Helferpunkte",
          placeholder: "1",
          type: "number",
          value: schicht.points,
        },
        {
          id: "timeFrom",
          name: "timeFrom",
          label: "Zeit von",
          placeholder: "Zeit von",
          type: "time",
          value: schicht.timeFrom,
        },
        {
          id: "timeTo",
          name: "timeTo",
          label: "Zeit bis",
          placeholder: "Zeit bis",
          type: "time",
          value: schicht.timeTo,
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: () => {
            console.log("Abbrechen");
          },
        },
        {
          text: "Speichern",
          handler: (data) => {
            console.log(data);

            const index = this.event.schichten.findIndex((object) => {
              return object.id === schicht.id;
            });
            if (index !== -1) {
              this.event.schichten[index] = {
                id: schicht.id,
                ...data,
                count: 0,
              };
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async addSchicht() {
    console.log(this.event.timeTo);
    const alert = await this.alertController.create({
      header: "Schicht erstellen",
      subHeader: " ",
      message: "Eine neue Helferschicht erstellen.",
      inputs: [
        {
          id: "name",
          name: "name",
          label: "Beschreibung",
          placeholder: "Beschreibung",
          type: "text",
        },
        {
          id: "count",
          name: "countNeeded",
          label: "Anzahl Helfer",
          placeholder: "Anzahl Helfer",
          type: "number",
        },
        {
          id: "points",
          name: "points",
          label: "Anzahl Helferpunkte",
          placeholder: "Anzahl Helferpunkte",
          type: "number",
          value: "",
        },
        {
          id: "timeFrom",
          name: "timeFrom",
          label: "Zeit von",
          placeholder: "Zeit von",
          type: "time",
          value: this.event.timeFrom.slice(11, 16),
        },
        {
          id: "timeTo",
          name: "timeTo",
          label: "Zeit bis",
          placeholder: "Zeit bis",
          type: "time",
          value: this.event.timeTo.slice(11, 16),
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: () => {
            console.log("Abbrechen");
          },
        },
        {
          text: "Hinzufügen",
          handler: (data) => {
            console.log(data);
            this.event.schichten.push({
              id: this.event.schichten.length + 1,
              ...data,
              count: 0,
            });
          },
        },
      ],
    });

    await alert.present();
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

    const helferEvent = await this.eventService.setCreateHelferEvent(this.event).catch(e => {
      console.log(e.message);
      this.toastActionError(e);
    })
    if (helferEvent) {
      console.log(helferEvent.id);
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
