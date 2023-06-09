import { Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { of, combineLatest, Observable } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { Event } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { EventService } from "src/app/services/firebase/event.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
})
export class EventsPage implements OnInit {
  skeleton = new Array(12);

  user$: Observable<User>;
  user: User;

  eventsList: Event[];
  eventsListPast: Event[];
  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.getUser();
    this.getEventsList();
    this.getEventsListPast();
  }

  getUser() {
    this.user$ = this.authService.getUser$();
  }

  async toggle(status: boolean, event: Event) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${event.teamId} and event ${event.id}`
    );

    await this.eventService.setTeamEventAttendeeStatus(
      this.user.uid,
      status,
      event.teamId,
      event.id
    );
    this.presentToast();
  }

  async toggleItem(slidingItem: IonItemSliding, status: boolean, event: Event) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${event.teamId} and event ${event.id}`
    );
    await this.eventService.setTeamEventAttendeeStatus(
      this.user.uid,
      status,
      event.teamId,
      event.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "changes has been saved",
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  getEventsList() {
    this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest(
            allTeams.map((team) =>
              combineLatest(
                of(team),
                // Loop over Events
                // this.eventService.getTeamEventsRef(team.id),
                this.eventService
                  .getTeamEventsRef(team.id)
                  .pipe(
                    switchMap((allEvents: any) =>
                      combineLatest(
                        allEvents.map((event) =>
                          combineLatest(
                            of(event),
                            this.eventService.getTeamEventsAttendeesRef(
                              team.id,
                              event.id
                            )
                          )
                        )
                      )
                    )
                  ),
                this.fbService.getTeamRef(team.id)
              )
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        const eventsListNew = [];
        for (const team of data) {
          // loop over teams

          const events = team[1];
          const teamDetails = team[2];
          for (const eventObject of events) {
            const event = eventObject[0];
            const attendees = eventObject[1];

            event.teamName = teamDetails.name;
            event.teamId = teamDetails.id;
            event.attendees = attendees.filter((e) => e.status === true).length;

            if (
              attendees &&
              attendees.filter((e) => e.id === this.user.uid).length === 1
            ) {
              event.status = attendees.filter(
                (e) => e.id === this.user.uid
              )[0].status;
            } else {
              event.status = null;
            }

            eventsListNew.push(event);
          }
        }
        this.eventsList = [...new Set([].concat(...eventsListNew))];
        this.eventsList = this.eventsList.sort(
          (a, b) => a.dateTime.toMillis() - b.dateTime.toMillis()
        );
      });
  }

  getEventsListPast() {
    this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest(
            allTeams.map((team) =>
              combineLatest(
                of(team),
                // Loop over Events
                // this.eventService.getTeamEventsRef(team.id),
                this.eventService
                  .getTeamEventsRefPast(team.id)
                  .pipe(
                    switchMap((allEvents: any) =>
                      combineLatest(
                        allEvents.map((event) =>
                          combineLatest(
                            of(event),
                            this.eventService.getTeamEventsAttendeesRef(
                              team.id,
                              event.id
                            )
                          )
                        )
                      )
                    )
                  ),
                this.fbService.getTeamRef(team.id)
              )
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        const eventsListNew = [];
        for (const team of data) {
          // loop over teams

          const events = team[1];
          const teamDetails = team[2];
          for (const eventObject of events) {
            const event = eventObject[0];
            const attendees = eventObject[1];

            event.teamName = teamDetails.name;
            event.teamId = teamDetails.id;
            event.attendees = attendees.filter((e) => e.status === true).length;

            if (
              attendees &&
              attendees.filter((e) => e.id === this.user.uid).length === 1
            ) {
              event.status = attendees.filter(
                (e) => e.id === this.user.uid
              )[0].status;
            } else {
              event.status = null;
            }

            eventsListNew.push(event);
          }
        }
        this.eventsListPast = [...new Set([].concat(...eventsListNew))];
        this.eventsListPast = this.eventsListPast.sort(
          (a, b) => b.dateTime.toMillis() - a.dateTime.toMillis()
        );
      });
  }
}
