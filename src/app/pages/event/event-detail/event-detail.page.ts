import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
  combineLatest,
  forkJoin,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Veranstaltung } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-event-detail",
  templateUrl: "./event-detail.page.html",
  styleUrls: ["./event-detail.page.scss"],
})
export class EventDetailPage implements OnInit {
  @Input("data") event: Veranstaltung;
  @Input("isFuture") isFuture: boolean;

  event$: Observable<any>;

  mode = "yes";

  user$: Observable<User>;
  user: User;

  attendeeListTrue: any[] = [];
  attendeeListFalse: any[] = [];
  attendeeListUndefined: any[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly eventService: EventService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.event = this.navParams.get("data");
    this.event$ = of(this.event);

    this.attendeeListTrue = [];
    this.attendeeListFalse = [];
    this.attendeeListUndefined = [];

    this.event$ = this.getEvent(this.event.clubId, this.event.id);
    /*this.event$.subscribe({
      next: (data) => {
        console.log("HELFEREVENT Data received");
        console.log(data);
        this.event = {
          ...this.event,
          ...data,
        };
        this.cdr.detectChanges();
      },
      error: (err) => console.error("HELFEREVENT Error in subscription:", err),
      complete: () => console.log("HELFEREVENT Observable completed"),
    });*/
  }

  getEvent(clubId: string, eventId: string) {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap(() => this.eventService.getClubEventRef(clubId, eventId)),
      switchMap((event) => {
        if (!event) return of(null);
        return this.eventService.getClubEventAttendeesRef(clubId, eventId).pipe(
          switchMap((attendees) => {
            if (attendees.length === 0) {
              // If no attendees, return event data immediately
              return of({
                ...event,
                attendees: [],
                attendeeListTrue: [],
                attendeeListFalse: [],
                status: null,
              });
            }
            const attendeeProfiles$ = attendees.map((attendee) =>
              this.userProfileService.getUserProfileById(attendee.id).pipe(
                take(1),
                map((profile) => ({ ...profile, ...attendee })), // Combine attendee object with profile
                catchError(() =>
                  of({ ...attendee, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
            return forkJoin(attendeeProfiles$).pipe(
              map((attendeesWithDetails) => ({
                ...event,
                attendees: attendeesWithDetails,
                attendeeListTrue: attendeesWithDetails.filter(
                  (e) => e.status == true
                ),
                attendeeListFalse: attendeesWithDetails.filter(
                  (e) => e.status == false
                ),
                status: attendeesWithDetails.find(
                  (att) => att.id == this.user.uid
                )?.status,
              }))
            );
          }),
          catchError(() =>
            of({
              ...event,
              attendees: [],
              status: null,
            })
          )
        );
      }),
      catchError((err) => {
        console.error("Error in getEventWithAttendees:", err);
        return of(null);
      })
    );
  }

  async toggle(status: boolean, event: Veranstaltung) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${this.event.clubId} and event ${event.id}`
    );
    await this.eventService.setClubEventAttendeeStatus(
      this.user.uid,
      status,
      this.event.clubId,
      event.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
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
    return await this.modalCtrl.dismiss(this.event, "confirm");
  }
}
