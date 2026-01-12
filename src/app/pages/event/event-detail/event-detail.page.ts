import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
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
import { UiService } from "src/app/services/ui.service";
import { EventAddPage } from "../event-add/event-add.page";
import { HelferAddPage } from "../../helfer/helfer-add/helfer-add.page";

@Component({
  selector: "app-event-detail",
  templateUrl: "./event-detail.page.html",
  styleUrls: ["./event-detail.page.scss"],
  standalone: false,
})
export class EventDetailPage implements OnInit {
  @Input() data!: Veranstaltung;
  @Input() isFuture!: boolean;

  event: Veranstaltung;

  event$: Observable<any>;

  mode = "yes";

  allowEdit: boolean = false;

  user$: Observable<User>;
  user: User;

  clubAdminList$: Observable<Club[]>;

  eventHasChanged: any;

  children: Profile[] = [];

  constructor(
    private readonly modalCtrl: ModalController,

    private readonly userProfileService: UserProfileService,
    private readonly eventService: EventService,
    private readonly alertCtrl: AlertController,
    private readonly fbService: FirebaseService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly uiService: UiService,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input properties directly
    this.event = this.data;

    if (!this.event) {
      console.error("Event data not provided");
      return;
    }

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
      switchMap((user) => {
        return this.userProfileService.getChildren(user.uid).pipe(
          tap((children) => {
            this.children = children;
            // console.log("children", this.children);
          }),
        );
      }),
      switchMap(() => this.eventService.getClubEventRef(clubId, eventId)),
      switchMap((event) => {
        if (!event) return of(null);

        // Fetch club details
        return this.fbService.getClubRef(clubId).pipe(
          switchMap((club) => {
            if (!club) return of(null);

            // Fetch all club members first
            return this.fbService.getClubMemberRefs(clubId).pipe(
              switchMap((clubMembers) => {
                const clubMemberProfiles$ = clubMembers.map((member) =>
                  this.userProfileService.getUserProfileById(member.id).pipe(
                    take(1),
                    catchError((err) => {
                      console.log(
                        `Failed to fetch profile for club member ${member.id}:`,
                        err,
                      );
                      return of({
                        id: member.id,
                        firstName: "Unknown",
                        lastName: "Unknown",
                        status: null,
                      });
                    }),
                  ),
                );

                // Fetch all attendees next
                return forkJoin(clubMemberProfiles$).pipe(
                  switchMap((clubMembersWithDetails) => {
                    return this.eventService
                      .getClubEventAttendeesRef(clubId, eventId)
                      .pipe(
                        map((attendees) => {
                          const attendeeDetails = attendees
                            .map((attendee) => {
                              const detail = clubMembersWithDetails.find(
                                (member) => member && member.id === attendee.id,
                              );
                              return detail
                                ? { ...detail, status: attendee.status }
                                : null;
                            })
                            .filter((item) => item !== null);

                          const attendeeListTrue = attendeeDetails
                            .filter((att) => att.status === true)
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );
                          const attendeeListFalse = attendeeDetails
                            .filter((att) => att.status === false)
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );
                          const respondedIds = new Set(
                            attendeeDetails.map((att) => att.id),
                          );
                          const unrespondedMembers = clubMembersWithDetails
                            .filter(
                              (member) =>
                                member && !respondedIds.has(member.id),
                            )
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );

                          // Status-Liste: zuerst ich, dann Kinder alphabetisch
                          const myId = this.user.uid;
                          const childIds = this.children.map(
                            (child) => child.id,
                          );

                          // Build children array with status (like in training/championship)
                          const relevantChildren = clubMembers
                            .filter((member) => childIds.includes(member.id))
                            .map((member) => {
                              const child = this.children.find(
                                (c) => c.id === member.id,
                              );
                              const childAttendee = attendeeDetails.find(
                                (att) => att.id === member.id,
                              );
                              return {
                                id: member.id,
                                firstName: child?.firstName || "Unknown",
                                lastName: child?.lastName || "Unknown",
                                status: childAttendee?.status ?? null,
                              };
                            })
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );

                          // Build status array: include user if member, plus all children that are members
                          const userIds = [myId, ...childIds];
                          const orderedStatuses = userIds
                            .filter((id) =>
                              clubMembersWithDetails.some(
                                (member) => member && member.id === id,
                              ),
                            )
                            .map((id) => {
                              const attendee = attendeeDetails.find(
                                (att) => att.id === id,
                              );
                              const member = clubMembersWithDetails.find(
                                (m) => m && m.id === id,
                              );
                              return {
                                id: id,
                                status: attendee?.status ?? null,
                                firstName: member?.firstName || "Unknown",
                                lastName: member?.lastName || "Unknown",
                              };
                            });

                          return {
                            ...event,
                            club,
                            attendees: attendeeDetails,
                            attendeeListTrue,
                            attendeeListFalse,
                            unrespondedMembers,
                            children: relevantChildren,
                            status: orderedStatuses,
                          };
                        }),
                        catchError((err) => {
                          console.error("Error fetching attendees:", err);
                          return of({
                            ...event,
                            club,
                            attendees: [],
                            attendeeListTrue: [],
                            attendeeListFalse: [],
                            unrespondedMembers: clubMembersWithDetails.filter(
                              (member) => member !== null,
                            ),
                            status: null,
                          });
                        }),
                      );
                  }),
                );
              }),
              catchError((err) => {
                console.error("Error fetching club members:", err);
                return of({
                  ...event,
                  club,
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: null,
                });
              }),
            );
          }),
        );
      }),
      catchError((err) => {
        console.error("Error in getHelferEventWithAttendees:", err);
        return of(null);
      }),
    );
  }
  async openMember(member: Profile) {
    //  console.log("openMember");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
        clubId: this.event.clubId,
        teamId: null,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openAdminActions() {
    const actionSheet = await this.uiService.showActionSheet({
      header: await lastValueFrom(this.translate.get("events.actions")),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("events.create_helfer")),
          icon: "help-buoy-outline",
          handler: () => {
            this.createHelferEvent(this.event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("events.cancel_event")),
          icon: "alert-circle-outline",
          handler: () => {
            this.cancelEvent(this.event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("events.send_reminder")),
          icon: "notifications-outline",
          handler: () => {
            this.sendReminder(this.event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.copy")),
          icon: "copy-outline",
          handler: () => {
            this.copyEvent(this.event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.delete")),
          icon: "trash",
          role: "destructive",
          handler: () => {
            this.deleteEvent(this.event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
        },
      ],
    });
  }

  async copyEvent(event: Veranstaltung) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || (await this.modalCtrl.getTop());
    const modal = await this.modalCtrl.create({
      component: EventAddPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: event,
      },
    });
    modal.present();
    await modal.onWillDismiss();
  }

  async createHelferEvent(event: Veranstaltung) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || (await this.modalCtrl.getTop());
    const modal = await this.modalCtrl.create({
      component: HelferAddPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: event,
      },
    });
    modal.present();
    await modal.onWillDismiss();
  }

  async deleteEvent(event: Veranstaltung) {
    await this.eventService.deleteClubEvent(event.clubId, event.id);
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("common.success__event_deleted"),
      ),
      color: "danger",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async cancelEvent(event: any) {
    const result = await this.uiService.showFormDialog({
      header: await lastValueFrom(this.translate.get("events.cancel_event")),
      inputs: [
        {
          name: "reason",
          type: "textarea",
          placeholder: await lastValueFrom(
            this.translate.get("events.cancel_reason_placeholder"),
          ),
          attributes: { maxlength: 200 },
        },
      ],
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    if (result) {
      if (!result.reason) {
        await this.uiService.showErrorToast(
          await lastValueFrom(
            this.translate.get("events.cancel_reason_required"),
          ),
        );
        return;
      }
      try {
        await this.eventService.changeClubEvent(
          {
            cancelled: true,
            cancelledReason: result.reason,
          },
          event.clubId,
          event.id,
        );
        await this.uiService.showSuccessToast(
          await lastValueFrom(this.translate.get("events.event_cancelled")),
        );
      } catch (error) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("common.error")),
        );
      }
    }
  }

  async sendReminder(event: any) {
    const clubMembers = await lastValueFrom(
      this.fbService.getClubMemberRefs(event.clubId).pipe(take(1)),
    );
    const attendees = await lastValueFrom(
      this.eventService
        .getClubEventAttendeesRef(event.clubId, event.id)
        .pipe(take(1)),
    );
    const pendingMembers = clubMembers.filter(
      (member) => !attendees.some((attendee) => attendee.id === member.id),
    );
    if (pendingMembers.length === 0) {
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("events.all_members_responded")),
      );
      return;
    }
    const result = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(this.translate.get("events.send_reminder")),
      message: await lastValueFrom(
        this.translate.get("events.send_reminder_confirm", {
          count: pendingMembers.length,
        }),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });
    if (result) {
      try {
        await this.eventService.sendReminder(event.clubId, event.id);
        await this.uiService.showSuccessToast(
          await lastValueFrom(this.translate.get("events.reminder_sent")),
        );
      } catch (error) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("common.error")),
        );
      }
    }
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }
  async edit() {
    if (this.allowEdit) {
      this.allowEdit = false;

      if (Object.keys(this.eventHasChanged).length > 0) {
        const updatedEvent = await this.eventService
          .changeClubEvent(
            this.eventHasChanged,
            this.event.clubId,
            this.event.id,
          )
          .catch((e) => {
            this.toastActionError(e);
          });
        // console.log(updatedEvent);
        this.presentToast();
      }
    } else {
      this.allowEdit = true;
    }
  }
  async updateEvent(event, field) {
    console.log(field, event.detail);
    this.eventHasChanged[field] = event.detail.hasOwnProperty("checked")
      ? event.detail.checked
      : event.detail.value;
  }

  async openUrl(url: string) {
    Browser.open({
      url: url,
    });
  }

  async toggleItem(
    item: IonItemSliding,
    status: boolean,
    event: any,
    memberId: string,
  ) {
    await item.close();
    await this.processToggle(memberId, status, event);
  }

  async processToggle(userId: string, status: boolean, event: any) {
    console.log(
      `Set Status ${status} for user ${userId} and team ${event.clubId} and event ${event.id}`,
    );
    const newStartDate = event.date.toDate();
    newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));

    const club = await lastValueFrom(
      this.fbService.getClubRef(event.clubId).pipe(take(1)),
    );
    const eventThreshold = club.eventThreshold || 0;

    // Überprüfe, ob der Benutzer ein Team-Administrator ist
    const clubAdminList = await lastValueFrom(
      this.clubAdminList$.pipe(take(1)),
    );
    const isAdmin = this.isClubAdmin(clubAdminList, event.clubId);

    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * eventThreshold &&
      status == false &&
      eventThreshold &&
      !isAdmin
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      // OK
      await this.eventService.setClubEventAttendeeStatusAdmin(
        status,
        this.event.clubId,
        event.id,
        userId,
      );
      this.presentToast();
    }
  }

  /*
    async toggle(status: boolean, event: Veranstaltung | any) {
      console.log(
        `Set Status ${status} for user ${this.user.uid} and club ${this.event.clubId} and event ${event.id}`,
      );
      const newStartDate = event.date.toDate();
      newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
  
      // Get team threshold via training.teamId
      console.log("Grenzwert ");
      const eventThreshold = event.club.eventThreshold || 0;
      console.log(eventThreshold);
      // Verpätete Abmeldung?
      if (
        newStartDate.getTime() - new Date().getTime() <
          1000 * 60 * 60 * eventThreshold &&
        status == false &&
        eventThreshold
      ) {
        console.log("too late");
        await this.tooLateToggle();
      } else {
        // OK
        await this.eventService.setClubEventAttendeeStatus(
          status,
          this.event.clubId,
          event.id,
        );
        this.presentToast();
      }
    }*/
  async tooLateToggle() {
    const alert = await this.alertCtrl.create({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
      buttons: [
        {
          role: "",
          text: "OK",
          handler: (data) => {
            console.log(data);
          },
        },
      ],
    });
    alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "primary",
      duration: 1500,
      position: "top",
    });
    toast.present();
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

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.event, "confirm");
  }
}
