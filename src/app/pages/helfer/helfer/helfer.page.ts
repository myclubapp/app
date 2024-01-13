import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
  AlertController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import {
  Observable,
  catchError,
  combineLatest,
  lastValueFrom,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { HelferEvent, Veranstaltung } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { HelferAddPage } from "../helfer-add/helfer-add.page";
import { Timestamp } from "firebase/firestore";
import { HelferDetailPage } from "../helfer-detail/helfer-detail.page";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { Router } from "@angular/router";

@Component({
  selector: "app-helfer",
  templateUrl: "./helfer.page.html",
  styleUrls: ["./helfer.page.scss"],
})
export class HelferPage implements OnInit {
  skeleton = new Array(12);

  user$: Observable<User>;
  user: User;

  helferList$: Observable<HelferEvent[]>;
  helferListPast$: Observable<HelferEvent[]>;

  clubAdminList$: Observable<Club[]>;

  filterList: any[] = [];
  filterValue: string = "";
  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly alertCtrl: AlertController,
    private readonly menuCtrl: MenuController,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private router: Router
  ) {
    this.menuCtrl.enable(true, "menu");
    if (
      this.router.getCurrentNavigation().extras.state.type === "helferEvent"
    ) {
      const pushData = this.router.getCurrentNavigation().extras.state;
      // It's a Push Message
      let helferEvent: HelferEvent;
      helferEvent.id = pushData.id;
      helferEvent.clubId = pushData.clubId;
      this.openEventDetailModal(helferEvent, true);
    }
  }

  ngOnInit() {
    this.helferList$ = this.getHelferEvent();
    /*this.helferList$.subscribe({
      next: (data) => {
        console.log("HELFER Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("HELFER Error in subscription:", err),
      complete: () => console.log("HELFER Observable completed"),
    });*/

    this.helferListPast$ = this.getHelferEventPast();
    /*this.helferListPast$.subscribe({
      next: () => {
        console.log("HELFER PAST Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("HELFER PAST Error in subscription:", err),
      complete: () => console.log("HELFER PAST Observable completed"),
    });*/

    //Create Events, Helfer, News
    this.clubAdminList$ = this.fbService.getClubAdminList();
    /*this.clubAdminList$.subscribe({
      next: () => {
        console.log("Club Admin Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Club Admin Error in subscription:", err),
      complete: () => console.log("Club Admin Observable completed"),
    });*/
  }

  getHelferEvent() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.eventService.getClubHelferEventRefs(team.id).pipe(
              switchMap((teamevents) => {
                if (teamevents.length === 0) return of([]);
                return combineLatest(
                  teamevents.map((game) =>
                    this.eventService
                      .getClubHelferEventAttendeesRef(team.id, game.id)
                      .pipe(
                        map((attendees) => {
                          const userAttendee = attendees.find(
                            (att) => att.id == this.user.uid
                          );
                          const status = userAttendee
                            ? userAttendee.status
                            : null; // default to false if user is not found in attendees list
                          return {
                            ...game,
                            attendees,
                            status: status,
                            countAttendees: attendees.filter(
                              (att) => att.status == true
                            ).length,
                            teamId: team.id,
                          };
                        }),
                        catchError(() =>
                          of({
                            ...game,
                            attendees: [],
                            status: null,
                            countAttendees: 0,
                            teamId: team.id,
                          })
                        ) // If error, return game with empty attendees
                      )
                  )
                );
              }),
              map((eventsWithAttendees) => eventsWithAttendees), // Flatten events array for each team
              catchError(() => of([])) // If error in fetching events, return empty array
            )
          )
        ).pipe(
          map((teamsevents) => teamsevents.flat()), // Flatten to get all events across all teams
          map(
            (allevents) =>
              allevents.sort(
                (a, b) =>
                  Timestamp.fromMillis(a.dateTime).seconds -
                  Timestamp.fromMillis(b.dateTime).seconds
              ) // Sort events by date
          )
        );
      }),
      tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getTeameventsUpcoming:", err);
        return of([]); // Return an empty array on error
      })
    );
  }

  getHelferEventPast() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.eventService.getClubHelferEventPastRefs(team.id).pipe(
              switchMap((teamevents) => {
                if (teamevents.length === 0) return of([]);
                return combineLatest(
                  teamevents.map((game) =>
                    this.eventService
                      .getClubHelferEventAttendeesRef(team.id, game.id)
                      .pipe(
                        map((attendees) => {
                          const userAttendee = attendees.find(
                            (att) => att.id == this.user.uid
                          );
                          const status = userAttendee
                            ? userAttendee.status
                            : null; // default to false if user is not found in attendees list
                          return {
                            ...game,
                            attendees,
                            status: status,
                            countAttendees: attendees.filter(
                              (att) => att.status == true
                            ).length,
                            teamId: team.id,
                          };
                        }),
                        catchError(() =>
                          of({
                            ...game,
                            attendees: [],
                            status: null,
                            countAttendees: 0,
                            teamId: team.id,
                          })
                        ) // If error, return game with empty attendees
                      )
                  )
                );
              }),
              map((eventsWithAttendees) => eventsWithAttendees), // Flatten events array for each team
              catchError(() => of([])) // If error in fetching events, return empty array
            )
          )
        ).pipe(
          map((teamsevents) => teamsevents.flat()), // Flatten to get all events across all teams
          map(
            (allevents) =>
              allevents.sort(
                (a, b) =>
                  Timestamp.fromMillis(a.dateTime).seconds -
                  Timestamp.fromMillis(b.dateTime).seconds
              ) // Sort events by date
          )
        );
      }),
      tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getTeameventsUpcoming:", err);
        return of([]); // Return an empty array on error
      })
    );
  }
  async toggle(status: boolean, event: HelferEvent) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${event.clubId} and training ${event.id}`
    );
    await this.eventService.setClubHelferEventAttendeeStatus(
      status,
      event.clubId,
      event.id
    );
    this.presentToast();
  }

  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    event: HelferEvent
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${event.clubId} and training ${event.id}`
    );
    await this.eventService.setClubHelferEventAttendeeStatus(
      status,
      event.clubId,
      event.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.changes__saved")),
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async openFilter(ev: Event) {
    /*
    let filterList = [];

    const clubs$ = this.authService.getUser$().pipe(
      take(1),
      switchMap(user => this.fbService.getUserClubRefs(user).pipe(take(1))),  
      concatMap(clubArray => from(clubArray)),
      tap((club:Club)=>console.log(club.id)),
      concatMap(club => 
        this.fbService.getClubRef(club.id).pipe(
          take(1),
          defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
          map(result => [result]),
          catchError(error => {
            console.error('Error fetching ClubDetail:', error);
            return of([]);
          })
        )
      ),
      tap(clubList => clubList.forEach(club => {
        //filterList.push({id: club.type, name: club.type}); // Verband Infos
        return filterList.push(club);
      })),
      finalize(() => console.log("Get Club completed"))
  );

  this.subscription = forkJoin([clubs$]).subscribe({
    next: () => {
      const alertInputs = [];
      for (const item of filterList){
        alertInputs.push({
          label: item.name,
          type: 'radio',
          checked: item.id == this.filterValue,
          value: item.id,
        });
      }
    
      this.alertCtrl.create({
        header: 'Helferevents filtern',
        message: 'Nach Verein filtern.',
       // subHeader: 'Nach Verein oder Teams filtern.',
        inputs: alertInputs,
        buttons: [
          { text: "OK",
            role: "confirm",
            handler: (value)=>{
              console.log(value)
              this.filterValue = value;
              this.eventsList$ = of(this.eventsList.filter((news: any) => news.filterable == value));
            } 
          },
          { text: "abbrechen",
            role: "cancel",
            handler: (value)=>{
              console.log(value);
              this.filterValue = "";
              this.eventsList$ = of(this.eventsList);
            } 
          }
        ],
        htmlAttributes: { 'aria-label': 'alert dialog' },
      }).then(alert => {
        alert.present();
      });
    },
    error: err => console.error('Error in the observable chain:', err)
  });
  */
  }

  async copyEvent(slidingItem: IonItemSliding, event) {
    slidingItem.closeOpened();

    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: HelferAddPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: event,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async deleteEvent(slidingItem: IonItemSliding, event) {
    slidingItem.closeOpened();
    await this.eventService.deleteHelferEvent(event.clubId, event.id);
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.delete")),
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async openEventCreateModal() {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: HelferAddPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: "",
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openEventDetailModal(event: HelferEvent, isFuture: boolean) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: event,
        isFuture: isFuture,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
}
