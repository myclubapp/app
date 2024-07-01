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
import { Browser } from "@capacitor/browser";
import { Veranstaltung } from "src/app/models/event";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../../member/member.page";
import { FirebaseService } from "src/app/services/firebase.service";
import { Club } from "src/app/models/club";

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

  allowEdit: boolean = false;

  user$: Observable<User>;
  user: User;

  clubAdminList$: Observable<Club[]>;

  eventHasChanged: any;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly eventService: EventService,
    private readonly fbService: FirebaseService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private translate: TranslateService
  ) {
    
  }

  ngOnInit() {
    this.event = this.navParams.get("data");
    this.event$ = of(this.event);
    this.event$ = this.getEvent(this.event.clubId, this.event.id);

    this.clubAdminList$ = this.fbService.getClubAdminList(); 
    this.eventHasChanged = {};
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

        // Fetch all club members first
        return this.fbService.getClubMemberRefs(clubId).pipe(
            switchMap(clubMembers => {
                const clubMemberProfiles$ = clubMembers.map(member =>
                    this.userProfileService.getUserProfileById(member.id).pipe(
                        take(1),
                        catchError(err => {
                            console.log(`Failed to fetch profile for club member ${member.id}:`, err);
                            return of({ id: member.id, firstName: "Unknown", lastName: "Unknown", status: null });
                        })
                    )
                );

                // Fetch all attendees next
                return forkJoin(clubMemberProfiles$).pipe(
                    switchMap(clubMembersWithDetails => {
                        return this.eventService.getClubEventAttendeesRef(clubId, eventId).pipe(
                            map(attendees => {
                                const attendeeDetails = attendees.map(attendee => {
                                    const detail = clubMembersWithDetails.find(member => member && member.id === attendee.id);
                                    return detail ? { ...detail, status: attendee.status } : null;
                                }).filter(item => item !== null);

                                const attendeeListTrue = attendeeDetails.filter(att => att && att.status === true);
                                const attendeeListFalse = attendeeDetails.filter(att => att && att.status === false);
                                const respondedIds = new Set(attendeeDetails.map(att => att.id));
                                const unrespondedMembers = clubMembersWithDetails.filter(member => member && !respondedIds.has(member.id));

                                const userAttendee = attendeeDetails.find(att => att && att.id === this.user.uid);
                                const status = userAttendee ? userAttendee.status : null;
                                console.log(status)
                                return {
                                    ...event,
                                    attendees: attendeeDetails,
                                    attendeeListTrue,
                                    attendeeListFalse,
                                    unrespondedMembers,
                                    status,
                                };
                            }),
                            catchError(err => {
                                console.error("Error fetching attendees:", err);
                                return of({
                                    ...event,
                                    attendees: [],
                                    attendeeListTrue: [],
                                    attendeeListFalse: [],
                                    unrespondedMembers: clubMembersWithDetails.filter(member => member !== null),
                                    status: null
                                });
                            })
                        );
                    })
                );
            }),
            catchError(err => {
                console.error("Error fetching club members:", err);
                return of({
                    ...event,
                    attendees: [],
                    attendeeListTrue: [],
                    attendeeListFalse: [],
                    unrespondedMembers: [],
                    status: null
                });
            })
        );
    }),
    catchError(err => {
        console.error("Error in getHelferEventWithAttendees:", err);
        return of(null);
    })
);
}
  async openMember(member: Profile) {
    console.log("openMember");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  async edit() {

    if (this.allowEdit) {
      this.allowEdit = false;

      if (Object.keys(this.eventHasChanged).length > 0) {
        // alert("change")
        const updatedEvent = await this.eventService.changeClubEvent(this.eventHasChanged, this.event.clubId, this.event.id).catch(e=>{
          this.toastActionError(e);
        });
        // console.log(updatedEvent);
        this.presentToast();
      }
      
    } else {
      this.allowEdit = true;
    }
  }
  async updateEvent(event, field){
    console.log(field, event.detail)    
    this.eventHasChanged[field] = event.detail.value;
    
  }

  async openUrl(url: string) {
    Browser.open({
      url: url
    });
  }


  async toggle(status: boolean, event: Veranstaltung) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${this.event.clubId} and event ${event.id}`
    );
    await this.eventService.setClubEventAttendeeStatus(
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

  async toastActionError(error) {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 2000,
      position: "bottom",
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

  async close() {

    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.event, "confirm");
  }
}
