import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
  combineLatest,
  firstValueFrom,
  forkJoin,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Browser } from "@capacitor/browser";
import { HelferEvent, Schicht } from "src/app/models/event";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../../member/member.page";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-helfer-detail",
  templateUrl: "./helfer-detail.page.html",
  styleUrls: ["./helfer-detail.page.scss"],
  standalone: false,
})
export class HelferDetailPage implements OnInit {
  @Input("data") event: HelferEvent;
  @Input("isFuture") isFuture: boolean;

  event$: Observable<any>;
  schichten$: Observable<any[]>;

  mode = "yes";

  allowEdit: boolean = false;

  user$: Observable<User>;
  user: User;

  clubAdminList$: Observable<Club[]>;
  eventHasChanged: any;

  teamAdminList$: Observable<any[]>;
  children: Profile[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly eventService: EventService,
    private readonly fbService: FirebaseService,
    private readonly toastController: ToastController,
    private readonly alertCtrl: AlertController,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private uiService: UiService,
  ) {}

  async ngOnInit() {
    this.event = this.navParams.get("data");
    this.isFuture = this.navParams.get("isFuture");
    this.event$ = this.getHelferEvent(this.event.clubId, this.event.id);

    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.teamAdminList$ = this.fbService.getTeamAdminList();

    this.schichten$ = this.getHelferEventSchichtenWithAttendees(
      this.event.clubId,
      this.event.id,
    );
    this.eventHasChanged = {};
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }
  async edit() {
    if (this.allowEdit) {
      this.allowEdit = false;

      if (Object.keys(this.eventHasChanged).length > 0) {
        // alert("change")
        const updatedEvent = await this.eventService
          .changeHelferEvent(
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
    this.eventHasChanged[field] = event.detail.value;
  }
  getHelferEvent(clubId: string, eventId: string) {
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
            console.log("children", this.children);
          }),
        );
      }),
      switchMap(() => this.eventService.getClubHelferEventRef(clubId, eventId)),
      catchError((err) => {
        console.error("Error in getHelferEventWithAttendees:", err);
        return of(null);
      }),
    );
  }

  getHelferEventSchichtenWithAttendees(clubId: string, eventId: string) {
    return this.eventService
      .getClubHelferEventSchichtenRef(clubId, eventId)
      .pipe(
        switchMap((schichten) => {
          if (schichten.length === 0) return of([]); // No schichten found

          // Sort the schichten by timeFrom ascending and then by name A-Z
          const sortedSchichten = schichten.sort((a, b) => {
            const timeComparison = a.timeFrom.localeCompare(b.timeFrom); // Ascending order by timeFrom
            if (timeComparison !== 0) return timeComparison; // If timeFrom is different, use it
            return a.name.localeCompare(b.name); // If timeFrom is the same, sort by name A-Z
          });

          return this.fbService.getClubMemberRefs(clubId).pipe(
            switchMap((clubMembers) => {
              const clubMemberProfiles$ = clubMembers.map((member) =>
                this.userProfileService.getUserProfileById(member.id).pipe(
                  take(1),
                  catchError((err) => {
                    console.error(
                      `Failed to fetch profile for club member ${member.id}:`,
                      err,
                    );
                    return of({
                      id: member.id,
                      firstName: "Unknown",
                      lastName: "Unknown",
                      status: null,
                      confirmed: null,
                    });
                  }),
                ),
              );
              return forkJoin(clubMemberProfiles$).pipe(
                switchMap((clubMembersWithDetails) => {
                  const schichtenWithAttendees$ = sortedSchichten.map(
                    (schicht) =>
                      this.eventService
                        .getClubHelferEventSchichtAttendeesRef(
                          clubId,
                          eventId,
                          schicht.id,
                        )
                        .pipe(
                          map((attendees) => {
                            const attendeeDetails = attendees
                              .map((attendee) => {
                                const detail = clubMembersWithDetails.find(
                                  (member) =>
                                    member && member.id === attendee.id,
                                );
                                return detail
                                  ? {
                                      ...detail,
                                      status: attendee.status,
                                      confirmed: attendee.confirmed,
                                    }
                                  : null;
                              })
                              .filter((item) => item); // Ensure nulls are removed

                            const attendeeListTrue = attendeeDetails.filter(
                              (att) => att.status === true,
                            );
                            const attendeeListFalse = attendeeDetails.filter(
                              (att) => att.status === false,
                            );
                            const respondedIds = new Set(
                              attendeeDetails.map((att) => att.id),
                            );
                            const unrespondedMembers =
                              clubMembersWithDetails.filter(
                                (member) =>
                                  member && !respondedIds.has(member.id),
                              );

                            return {
                              ...schicht,
                              attendees: attendeeDetails,
                              attendeeListTrue,
                              attendeeListFalse,
                              unrespondedMembers,
                              status: attendeeDetails
                                .filter((att) =>
                                  [
                                    this.user.uid,
                                    ...this.children.map((child) => child.id),
                                  ].includes(att.id),
                                )
                                .map((att) => ({
                                  id: att.id,
                                  status: att.status,
                                  confirmed: att.confirmed,
                                  firstName: att.firstName,
                                  lastName: att.lastName,
                                })),
                            };
                          }),
                          catchError((err) => {
                            console.error(
                              "Error fetching attendees for schicht:",
                              err,
                            );
                            return of({
                              ...schicht,
                              attendees: [],
                              attendeeListTrue: [],
                              attendeeListFalse: [],
                              unrespondedMembers: clubMembersWithDetails,
                              status: null,
                              confirmed: null,
                            });
                          }),
                        ),
                  );
                  return combineLatest(schichtenWithAttendees$);
                }),
              );
            }),
            catchError((err) => {
              console.error("Error fetching club members:", err);
              return of(
                schichten.map((schicht) => ({
                  ...schicht,
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: null,
                  confirmed: null,
                })),
              );
            }),
          );
        }),
        catchError((err) => {
          console.error("Error in getHelferEventSchichtenWithAttendees:", err);
          return of([]);
        }),
      );
  }

  async confirmSchichten() {
    try {
      const schichten = await firstValueFrom(
        this.getHelferEventSchichtenWithAttendees(
          this.event.clubId,
          this.event.id,
        ),
      );

      let alertInputs = schichten.reduce((acc, schicht) => {
        const inputs = schicht.attendeeListTrue
          .filter((member) => !member.confirmed && member.status)
          .map((member) => ({
            name: member.id,
            type: "checkbox",
            checked: true,
            value: {
              memberId: member.id,
              schichtId: schicht.id,
              points: schicht.points,
              eventId: this.event.id,
            },
            label: `${member.firstName} ${member.lastName} - ${schicht.name}`,
          }));
        return [...acc, ...inputs];
      }, []);

      if (alertInputs.length > 0) {
        const cancelText = await lastValueFrom(
          this.translate.get("common.cancel"),
        );
        const confirmText = await lastValueFrom(
          this.translate.get("common.confirm"),
        );

        const alert = await this.alertCtrl.create({
          header: "Helferpunkte bestätigen",
          subHeader: "Bitte erst nach dem Einsatz bestätigen!",
          message: "Wähle die Mitglieder um die Helferpunkte zu bestätigen:",
          inputs: alertInputs,
          buttons: [
            {
              text: cancelText,
              role: "cancel",
              handler: () => console.log("Operation cancelled"),
            },
            {
              text: confirmText,
              handler: (events) => this.handleConfirm(events),
            },
          ],
        });
        await alert.present();
      } else {
        const toast = await this.toastController.create({
          message: "Keine Einsätze zum Bestätigen verfügbar",
          position: "top",
          color: "primary",
          duration: 1500,
        });
        toast.present();
      }
    } catch (error) {
      console.error("Error in confirmSchichten:", error);
      // Handle error appropriately
    }
  }

  async handleConfirm(events) {
    for (const event of events) {
      await this.eventService.setClubHelferEventSchichtAttendeeStatusConfirm(
        this.event.clubId,
        event.eventId,
        event.schichtId,
        event.memberId,
        event.points,
      );
    }
  }

  async openUrl(url: string) {
    Browser.open({
      url: url,
    });
  }

  async toggleSchichtItem(
    slidingItem: IonItemSliding,
    status: boolean,
    event,
    schicht,
    memberId: string,
  ) {
    slidingItem.closeOpened();
    console.log("toggleSchichtItem", status, event, schicht, memberId);
    await this.eventService.setClubHelferEventSchichtAttendeeStatusAdmin(
      status,
      event.clubId,
      event.id,
      schicht.id,
      memberId,
    );
    this.presentToast();
  }

  async toggleSchicht(
    slidingItem: IonItemSliding,
    status: boolean,
    event,
    schicht,
  ) {
    // Hole die Club-Mitglieder
    const clubMembers = await lastValueFrom(
      this.fbService.getClubMemberRefs(event.clubId).pipe(take(1)),
    );
    // Hole die Kinder des aktuellen Benutzers
    const children = await lastValueFrom(
      this.userProfileService.getChildren(this.user.uid).pipe(take(1)),
    );
    // Sammle alle möglichen Mitglieder (aktueller Benutzer + Kinder)
    const possibleMembers = [
      this.user,
      ...children.map((child) => ({ uid: child.id })),
    ];
    // Filtere die tatsächlichen Club-Mitglieder
    const clubMemberIds = clubMembers.map((member) => member.id);
    const validMembers = possibleMembers.filter((member) =>
      clubMemberIds.includes(member.uid),
    );
    if (validMembers.length === 0) {
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("common.error__no_club_member")),
      );
      return;
    }
    if (validMembers.length === 1) {
      // Nur ein Kind oder nur Elternteil: direkt zusagen
      await this.toggleSchichtItem(
        slidingItem,
        status,
        event,
        schicht,
        validMembers[0].uid,
      );
    } else {
      // Mehrere Kinder/Eltern: Auswahl anzeigen
      const alert = await this.alertCtrl.create({
        header: await lastValueFrom(this.translate.get("common.select_member")),
        inputs: await Promise.all(
          validMembers.map(async (member) => {
            const profile =
              member.uid === this.user.uid
                ? { firstName: "Ich", lastName: "" }
                : await lastValueFrom(
                    this.userProfileService
                      .getUserProfileById(member.uid)
                      .pipe(take(1)),
                  );
            return {
              type: "radio" as const,
              label: `${profile.firstName} ${profile.lastName}`,
              value: member.uid,
            };
          }),
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel",
          },
          {
            text: await lastValueFrom(this.translate.get("common.ok")),
            role: "confirm",
            handler: (selectedId) => {
              if (selectedId) {
                this.toggleSchichtItem(
                  slidingItem,
                  status,
                  event,
                  schicht,
                  selectedId,
                );
              }
            },
          },
        ],
      });
      await alert.present();
    }
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

  async tooLateToggle() {
    await this.uiService.showInfoDialog({
      header: await lastValueFrom(
        this.translate.get("helfer-detail.cannot_unregister"),
      ),
      message: await lastValueFrom(
        this.translate.get("helfer-detail.contact_trainer_team"),
      ),
    });
  }

  async tooMany() {
    await this.uiService.showInfoDialog({
      header: await lastValueFrom(
        this.translate.get("helfer-detail.enough_helpers"),
      ),
      message: await lastValueFrom(
        this.translate.get("helfer-detail.shift_has_enough_helpers"),
      ),
    });
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async toastActionError(error) {
    await this.uiService.showErrorToast(error.message);
  }

  async editSchicht(schicht: Schicht) {
    const data = await this.uiService.showFormDialog({
      header: "Schicht bearbeiten",
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
    });

    if (data) {
      await this.eventService.changeHelferEventSchicht(
        this.event.clubId,
        this.event.id,
        schicht.id,
        data,
      );
      await this.presentToast();
    }
  }

  async deleteSchicht(schicht: Schicht) {
    const confirmed = await this.uiService.showConfirmDialog({
      header: "Schicht löschen",
      message: "Möchten Sie diese Schicht wirklich löschen?",
    });

    if (confirmed) {
      await this.eventService.deleteHelferEventSchicht(
        this.event.clubId,
        this.event.id,
        schicht.id,
      );
      await this.presentToast();
    }
  }

  async copySchicht(schicht: Schicht) {
    const data = await this.uiService.showFormDialog({
      header: "Schicht erstellen",
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
    });

    if (data) {
      await this.eventService.addNewHelferEventSchicht(
        this.event.clubId,
        this.event.id,
        data,
      );
      await this.presentToast();
    }
  }

  async addSchicht() {
    console.log(this.event.timeTo);
    const data = await this.uiService.showFormDialog({
      header: "Schicht erstellen",
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
    });

    if (data) {
      await this.eventService.addNewHelferEventSchicht(
        this.event.clubId,
        this.event.id,
        data,
      );
      await this.presentToast();
    }
  }

  async addMembersToSchicht(slidingItem: IonItemSliding, schicht: any) {
    slidingItem.closeOpened();
    // Hole alle Clubmitglieder
    const clubMembers = await firstValueFrom(
      this.fbService.getClubMemberRefs(this.event.clubId).pipe(
        switchMap((members) => {
          const memberProfiles$ = members.map((member) =>
            this.userProfileService.getUserProfileById(member.id).pipe(
              take(1),
              catchError((err) => {
                console.error(
                  `Failed to fetch profile for member ${member.id}:`,
                  err,
                );
                return of(null);
              }),
            ),
          );
          return forkJoin(memberProfiles$);
        }),
      ),
    );

    // Filtere Mitglieder, die bereits in der Schicht sind
    const existingMemberIds = schicht.attendeeListTrue.map((m) => m.id);
    const availableMembers = clubMembers
      .filter((member) => member && !existingMemberIds.includes(member.id))
      .sort((a, b) => a.firstName.localeCompare(b.firstName));

    if (availableMembers.length === 0) {
      await this.uiService.showInfoDialog({
        header: await lastValueFrom(
          this.translate.get("helfer-detail.no_members_available"),
        ),
        message: await lastValueFrom(
          this.translate.get("helfer-detail.no_members_available_message"),
        ),
      });
      return;
    }

    const data = await this.uiService.showFormDialog({
      header: await lastValueFrom(
        this.translate.get("helfer-detail.add_members_title"),
      ),
      inputs: availableMembers.map((member) => ({
        type: "checkbox",
        label: `${member.firstName} ${member.lastName}`,
        value: member.id,
        checked: false,
      })),
    });

    if (data && data.length > 0) {
      try {
        // Füge ausgewählte Mitglieder zur Schicht hinzu
        const promises = data.map((memberId) =>
          this.eventService.setClubHelferEventSchichtAttendeeStatusAdmin(
            true,
            this.event.clubId,
            this.event.id,
            schicht.id,
            memberId,
          ),
        );

        await Promise.all(promises);
        this.presentToast();
      } catch (error) {
        console.error("Error adding members to schicht:", error);
        this.toastActionError(error);
      }
    }
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

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }

  private async showDeleteConfirmationAlert() {
    await this.uiService.showConfirmDialog({
      header: "Helfer löschen",
      message: "Möchten Sie diesen Helfer wirklich löschen?",
      confirmText: "Ja",
      cancelText: "Nein",
    });
  }

  private async showDeleteSuccessAlert() {
    await this.uiService.showInfoDialog({
      header: "Erfolg",
      message: "Der Helfer wurde erfolgreich gelöscht.",
    });
  }

  private async showDeleteErrorAlert() {
    await this.uiService.showInfoDialog({
      header: "Fehler",
      message:
        "Beim Löschen des Helfers ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    });
  }
}
