import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams, ToastController } from "@ionic/angular";
import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { BehaviorSubject, Observable, Subscription, catchError, map, take } from "rxjs";
import { Club } from "src/app/models/club";
import { HelferEvent, Schicht } from "src/app/models/event";
import { Game } from "src/app/models/game";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { EventService } from "src/app/services/firebase/event.service";

@Component({
    selector: "app-helfer-add",
    templateUrl: "./helfer-add.page.html",
    styleUrls: ["./helfer-add.page.scss"],
    standalone: false
})
export class HelferAddPage implements OnInit {
  @Input("data") eventCopy: HelferEvent;
  event: HelferEvent;
  user: User;

  subscription: Subscription;

  clubAdminList$: Observable<Club[]>;
  clubGamesList$: Observable<Game[]>;

  clubId$ = new BehaviorSubject<string>(null);

  constructor(
    private readonly modalCtrl: ModalController,
    private eventService: EventService,

    private readonly toastController: ToastController,

    private cdr: ChangeDetectorRef,
    private readonly authService: AuthService,
    private fbService: FirebaseService,
    private alertController: AlertController,
    public navParams: NavParams,
    private championshipService: ChampionshipService
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
      closedEvent: false
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
      take(1),
      map(data => {
        if (data && data.length > 0) {
          this.event.clubId = data[0].id;
          this.event.clubName = data[0].name;
          this.setClubId(data[0].id);
          console.log("Club ID: " + this.event.clubId);
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


    this.subscription = this.clubId$.subscribe(value => {
      console.log('clubId changed:', value);
      // this.event.clubId = value; // sync if needed
      this.clubGamesList$ = this.championshipService.getClubGamesRef(value).pipe(take(1));
    });
    
  }

  setClubId(clubId: string) {
    this.clubId$.next(clubId);
  }

  setClubGameAsTemplate(clubGame: any) {
    console.log(clubGame);
    this.event.name = clubGame.name;
    this.event.description = clubGame.description + " - " + clubGame.liga;
    this.event.location = clubGame.location;
    this.event.streetAndNumber = clubGame.streetAndNumber;
    this.event.postalCode = clubGame.postalCode;
    this.event.city = clubGame.city;
    
    // Konvertiere das Datum und die Zeit in das richtige Format
    const [day, month, year] = clubGame.date.split('.');
    
    // Erstelle das Startdatum in der lokalen Zeitzone
    const startDate = new Date();
    startDate.setFullYear(parseInt(year), parseInt(month) - 1, parseInt(day));
    startDate.setHours(0, 0, 0, 0);
    console.log('Parsed date:', startDate); // Debug-Log
    
    // Konvertiere das Datum in das lokale Format ohne Zeitzonenverschiebung
    const yearStr = startDate.getFullYear();
    const monthStr = String(startDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(startDate.getDate()).padStart(2, '0');
    const hoursStr = String(startDate.getHours()).padStart(2, '0');
    const minutesStr = String(startDate.getMinutes()).padStart(2, '0');
    
    this.event.startDate = `${yearStr}-${monthStr}-${dayStr}T${hoursStr}:${minutesStr}:00.000`;
    console.log('Formatted date:', this.event.startDate); // Debug-Log
    
    // Erstelle das Enddatum (gleicher Tag)
    this.event.endDate = this.event.startDate;
    
    // Erstelle die Zeit von/bis
    const [hours, minutes] = clubGame.time.split(':');
    const timeFrom = new Date(startDate);
    timeFrom.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    // Formatiere die Zeit im lokalen Format
    const timeFromHours = String(timeFrom.getHours()).padStart(2, '0');
    const timeFromMinutes = String(timeFrom.getMinutes()).padStart(2, '0');
    this.event.timeFrom = `${yearStr}-${monthStr}-${dayStr}T${timeFromHours}:${timeFromMinutes}:00.000`;
    
    // Setze die Endzeit auf 2 Stunden nach Start
    const timeTo = new Date(timeFrom);
    timeTo.setHours(timeTo.getHours() + 2);
    const timeToHours = String(timeTo.getHours()).padStart(2, '0');
    const timeToMinutes = String(timeTo.getMinutes()).padStart(2, '0');
    this.event.timeTo = `${yearStr}-${monthStr}-${dayStr}T${timeToHours}:${timeToMinutes}:00.000`;
    
    // Setze das Hauptdatum
    this.event.date = Timestamp.fromDate(startDate);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    // Überprüfe grundlegende Felder
    if (!this.event.name || !this.event.location || !this.event.date || 
        !this.event.timeFrom || !this.event.timeTo || 
        !this.event.startDate || !this.event.endDate) {
      const toast = await this.toastController.create({
        message: 'Bitte füllen Sie alle erforderlichen Felder aus',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      await toast.present();
      return null;
    }

    // Bestätigungsdialog anzeigen
    const alert = await this.alertController.create({
      header: 'Event erstellen',
      message: 'Möchten Sie dieses Event wirklich erstellen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Event-Erstellung abgebrochen');
          }
        },
        {
          text: 'Erstellen',
          handler: async () => {
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
        }
      ]
    });

    await alert.present();
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
