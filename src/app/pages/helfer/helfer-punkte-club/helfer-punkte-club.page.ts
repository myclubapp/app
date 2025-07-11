import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ModalController,
  NavParams,
  ToastController,
  ToggleChangeEventDetail,
} from "@ionic/angular";
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  debounceTime,
  forkJoin,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { HelferService } from "src/app/services/firebase/helfer.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { HelferDetailPage } from "../helfer-detail/helfer-detail.page";
import { HelferPunkteDetailPage } from "../helfer-punkte-detail/helfer-punkte-detail.page";
import { Club } from "src/app/models/club";
import { Timestamp } from "firebase/firestore";
import { TranslateService } from "@ngx-translate/core";
import { EventService } from "src/app/services/firebase/event.service";
import { Firestore } from "@angular/fire/firestore";

@Component({
  selector: "app-helfer-punkte-club",
  templateUrl: "./helfer-punkte-club.page.html",
  styleUrls: ["./helfer-punkte-club.page.scss"],
  standalone: false,
})
export class HelferPunkteClubPage implements OnInit {
  @Input("clubId") clubId: string;
  clubAdminList$: Observable<Club[]>;
  allowEdit: boolean = false;

  club$: Observable<Club | any>;
  clubMembers$: Observable<any[]>;
  filteredClubMembers$: Observable<any[]>;

  groupArray: string[] = [];

  plannedToggle = new BehaviorSubject<boolean>(false);

  searchTerm = new BehaviorSubject<string>("");

  pointsRange = new BehaviorSubject<{ lower: number; upper: number }>({
    lower: 0,
    upper: 99,
  }); // Default range with higher upper limit

  minDate: string = "";
  maxDate: string = "";

  constructor(
    private readonly modalCtrl: ModalController,
    private translate: TranslateService,
    public navParams: NavParams,
    private readonly alertController: AlertController,
    private readonly helferService: HelferService,
    private readonly eventService: EventService,
    private readonly userProfileService: UserProfileService,
    private readonly toastController: ToastController,
    private readonly fbService: FirebaseService,
    private readonly firestore: Firestore,
  ) {}

  ngOnInit() {
    console.log("ngOnInit called with clubId:", this.clubId);
    // Initialize date ranges
    let dateFrom = new Date();
    dateFrom.setFullYear(new Date().getFullYear() - 2);
    this.minDate = dateFrom.toISOString();

    let dateTo = new Date();
    dateTo.setFullYear(new Date().getFullYear() + 2);
    this.maxDate = dateTo.toISOString();

    // Initialize plannedToggle with false
    this.plannedToggle.next(false);

    // Load club data
    this.club$ = this.fbService.getClubRef(this.clubId).pipe(
      take(1),
      tap((club) => {
        console.log("Club data loaded:", club);
        if (!club) {
          console.error("No club found with ID:", this.clubId);
        }
      }),
      catchError((err) => {
        console.error("Error loading club data:", err);
        return of(null);
      }),
    );

    // Initialize members list
    this.initializeClubMembers(this.clubId);

    // Load admin list
    this.clubAdminList$ = this.fbService.getClubAdminList().pipe(
      tap((admins) => console.log("Club admin list loaded:", admins)),
      catchError((err) => {
        console.error("Error loading admin list:", err);
        return of([]);
      }),
    );
  }
  onHelferPunktePlanned(event: CustomEvent<ToggleChangeEventDetail>) {
    this.plannedToggle.next(event.detail.checked);
  }

  downloadClubPoints() {
    console.log("downloadClubPoints");

    this.clubMembers$.pipe(take(1)).subscribe(async (members) => {
      if (!members || members.length === 0) {
        const toast = await this.toastController.create({
          message: "Keine Mitglieder gefunden",
          duration: 2000,
          color: "warning",
        });
        await toast.present();
        return;
      }

      // CSV Header
      let csvContent =
        "Vorname,Nachname,Rollen,Gesamtpunkte,Helferpunkte Details\n";

      // CSV Daten
      members.forEach((member) => {
        const firstName = member.profile.firstName || "";
        const lastName = member.profile.lastName || "";
        const roles = member.roles?.join("; ") || "";
        const totalPoints = member.totalPoints || 0;
        const helferPunkte = member.helferPunkte || 0;
        // Helferpunkte Details
        const helferDetails =
          member.helferevents
            ?.filter((event) => event.status)
            ?.map(
              (event) =>
                `${event.name} (${event.points} Punkte am ${event.eventDate?.toDate().toLocaleDateString()})`,
            )
            ?.join("; ") || "";

        csvContent += `"${firstName}","${lastName}","${roles}",${helferPunkte},${totalPoints},"${helferDetails}"\n`;
      });

      // Erstelle Blob und Download
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);

      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `helferpunkte_${new Date().toISOString().split("T")[0]}.csv`,
      );
      link.style.visibility = "hidden";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  async changeDate(event, fieldname) {
    await this.fbService.setClubHelferReportingDate(
      this.clubId,
      fieldname,
      event.detail.value,
    );
  }
  initializeClubMembers(clubId: string) {
    console.log("initializeClubMembers called with clubId:", clubId);

    this.clubMembers$ = this.fbService.getClubRef(clubId).pipe(
      switchMap((club) => {
        if (!club) {
          console.error("No club found for members processing");
          return of([]);
        }

        // Lade alle Events mit Schichten einmal
        const eventsWithSchichten$ = this.eventService
          .getClubHelferEventRefsByDate(
            this.clubId,
            Timestamp.fromDate(new Date(club["helferReportingDateFrom"])),
            Timestamp.fromDate(new Date(club["helferReportingDateTo"])),
          )
          .pipe(
            switchMap((events) => {
              if (events.length === 0) return of([]);
              return combineLatest(
                events.map((event) =>
                  this.eventService
                    .getClubHelferEventSchichtenRef(this.clubId, event.id)
                    .pipe(
                      switchMap((schichten) => {
                        if (schichten.length === 0)
                          return of({ ...event, schichten: [] });
                        return combineLatest(
                          schichten.map((schicht) =>
                            this.eventService
                              .getClubHelferEventSchichtAttendeesRef(
                                this.clubId,
                                event.id,
                                schicht.id,
                              )
                              .pipe(
                                map((attendees) => ({
                                  ...schicht,
                                  attendees: attendees,
                                  countAttendees: attendees.filter(
                                    (att) => att.status === true,
                                  ).length,
                                })),
                              ),
                          ),
                        ).pipe(
                          map((schichtenWithAttendees) => ({
                            ...event,
                            schichten: schichtenWithAttendees,
                          })),
                        );
                      }),
                    ),
                ),
              );
            }),
          );

        return this.fbService.getClubMemberRefs(clubId).pipe(
          tap((members) => console.log("Club members loaded:", members.length)),
          switchMap((members) => {
            if (!members.length) {
              console.log("No members found in club");
              return of([]);
            }
            console.log("Members found in club:", members.length);

            // Kombiniere die Events mit den Member-Details
            return combineLatest([
              eventsWithSchichten$,
              ...members.map((member) =>
                combineLatest([
                  this.userProfileService.getUserProfileById(member.id),
                  this.helferService.getUserHelferPunkteRefsWithFilter(
                    member.id,
                    this.clubId,
                    Timestamp.fromDate(
                      new Date(club["helferReportingDateFrom"]),
                    ),
                    Timestamp.fromDate(new Date(club["helferReportingDateTo"])),
                  ),
                ]).pipe(
                  map(([profile, helferevents]) => ({
                    member,
                    profile,
                    helferevents,
                  })),
                ),
              ),
            ]).pipe(
              map(([eventsWithSchichten, ...memberDetails]) => {
                return memberDetails.map(
                  ({ member, profile, helferevents }) => {
                    // Filtere die Events für den aktuellen Member
                    const memberEventsWithSchichten = eventsWithSchichten
                      .map((event) => {
                        const memberSchichten = event.schichten.filter(
                          (schicht) => {
                            const memberAttendee = schicht.attendees.find(
                              (att) => att.id === member.id,
                            );
                            return (
                              memberAttendee &&
                              memberAttendee.status === true &&
                              (!memberAttendee.confirmed ||
                                memberAttendee.confirmed === false ||
                                !memberAttendee.confirmed === true)
                            );
                          },
                        );
                        return {
                          ...event,
                          schichten: memberSchichten,
                        };
                      })
                      .filter((event) => event.schichten.length > 0);

                    if (!profile) {
                      return {
                        profile: {
                          ...member,
                          firstName: "Unknown",
                          lastName: "Unknown",
                          roles: member.roles || [],
                        },
                        groupBy: "U",
                        roles: member.roles || [],
                        helferPunkte:
                          member?.helferPunkte ?? club?.helferPunkte,
                        helferevents: helferevents || [],
                        helfereventsPlanned: memberEventsWithSchichten || [],
                        totalPointsPlanned: memberEventsWithSchichten.length,
                      };
                    }

                    const filteredHelferPunkte =
                      helferevents?.filter((punkt) => punkt.status === true) ||
                      [];
                    const totalPoints = filteredHelferPunkte.reduce(
                      (sum, punkt) => Number(sum) + Number(punkt.points || 0),
                      0,
                    );

                    return {
                      profile,
                      groupBy: profile.firstName
                        ? profile.firstName.charAt(0).toUpperCase()
                        : "Z",
                      roles: member.roles || [],
                      totalPoints: totalPoints,
                      helferPunkte: member.helferPunkte ?? club.helferPunkte,
                      helferevents: helferevents,
                      helfereventsPlanned: memberEventsWithSchichten,
                      totalPointsPlanned: memberEventsWithSchichten.length,
                    };
                  },
                );
              }),
            );
          }),
          map((memberDetails) => {
            // Update groupArray based on available data
            const groups = [
              ...new Set(memberDetails.map((member) => member.groupBy)),
            ].sort();

            // Only update if we have results, otherwise keep existing groups
            if (groups.length > 0) {
              this.groupArray = groups;
            }

            console.log("Final member details count:", memberDetails.length);
            console.log("Group array:", this.groupArray);

            return memberDetails.sort((a, b) =>
              a.profile.firstName.localeCompare(b.profile.firstName),
            );
          }),
        );
      }),
      catchError((err) => {
        console.error("Error in outer stream:", err);
        return of([]);
      }),
    );

    // Apply search filter
    this.filteredClubMembers$ = combineLatest([
      this.clubMembers$,
      this.searchTerm,
    ]).pipe(
      debounceTime(300),
      map(([members, term]) => {
        if (!term) return members;

        const filtered = members.filter(
          (member) =>
            member.profile.firstName
              .toLowerCase()
              .includes(term.toLowerCase()) ||
            member.profile.lastName
              .toLowerCase()
              .includes(term.toLowerCase()) ||
            member.roles.find((role) =>
              role.toLowerCase().includes(term.toLowerCase()),
            ),
        );
        return filtered;
      }),
      map((filtered) => {
        // Update the groupArray
        this.groupArray = [];
        filtered.forEach((member) => {
          const groupByChar = member.profile.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });
        return filtered;
      }),
      tap((filtered) => console.log("Filtered members:", filtered.length)),
      catchError((err) => {
        console.error("Error filtering members:", err);
        return of([]);
      }),
    );
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || "";
    console.log("Handling Search Event:", searchTerm);
    this.searchTerm.next(searchTerm.trim());
  }

  async openHelferPunktDetailModal(helferData: any) {
    console.log("openHelferPunktDetailModal", helferData);
    console.log("eventsWithSchichten", helferData.eventsWithSchichten);
    const modal = await this.modalCtrl.create({
      component: HelferPunkteDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: helferData,
        clubId: this.clubId,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === "confirm") {
      // Refresh the list if confirmed
    }
  }

  async changeHelferPunkt(slidingItem: IonItemSliding, member, helferPunkt) {
    await slidingItem.closeOpened();

    const alert = await this.alertController.create({
      message: "asdasd",
      header: "Helferpunkt ändern",
      inputs: [
        {
          id: "points",
          value: helferPunkt.points,
        },
      ],
      buttons: [
        {
          id: "ok",
          text: "Speichern",
          handler: (data) => {
            console.log(data.points);
          },
        },
      ],
    });

    await alert.present();

    // this.presentToast();
    console.log(member, helferPunkt);
  }

  onHelferPunkteMinChange(event: CustomEvent) {
    const value = Number(event.detail.value);
    console.log("Min range changed to:", value);
    this.pointsRange.next({
      lower: value,
      upper: this.pointsRange.value.upper,
    });
  }

  onHelferPunkteMaxChange(event: CustomEvent) {
    const value = Number(event.detail.value);
    console.log("Max range changed to:", value);
    this.pointsRange.next({
      lower: this.pointsRange.value.lower,
      upper: value,
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "success",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }

  setFilter(role) {
    this.handleSearch({ detail: { value: role } });
  }

  edit() {
    this.allowEdit = !this.allowEdit;
  }

  async openHelferEvent(helferPunkt) {
    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: {
          ...helferPunkt,
          clubId: helferPunkt.clubRef.id,
          id: helferPunkt.eventRef.id,
        },
        isFuture: false,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
      // Refresh the list if confirmed
    }
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }

  async openHelferPunktCreateModal() {
    const members = await lastValueFrom(this.clubMembers$.pipe(take(1)));
    if (!members || members.length === 0) {
      const toast = await this.toastController.create({
        message: "Keine Mitglieder gefunden",
        duration: 2000,
        color: "warning",
      });
      await toast.present();
      return;
    }

    const memberOptions = members.map((member) => ({
      label: `${member.profile.firstName} ${member.profile.lastName}`,
      type: "radio" as const,
      value: member.profile.id,
    }));

    // Erster Alert für Mitgliederauswahl
    const memberAlert = await this.alertController.create({
      header: "Mitglied auswählen",
      inputs: memberOptions,
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
        },
        {
          text: "Weiter",
          role: "confirm",
        },
      ],
    });

    await memberAlert.present();
    const memberResult = await memberAlert.onWillDismiss();

    if (memberResult.role !== "confirm" || !memberResult.data?.values) {
      const toast = await this.toastController.create({
        message: "Bitte wählen Sie ein Mitglied aus",
        duration: 2000,
        position: "top",
        color: "warning",
      });
      await toast.present();
      return;
    }

    const memberId = memberResult.data.values;

    // Zweiter Alert für Details
    const detailsAlert = await this.alertController.create({
      header: "Helferpunkt Details",
      inputs: [
        {
          name: "name",
          type: "text" as const,
          placeholder: "Beschreibung",
          label: "Beschreibung",
        },
        {
          name: "date",
          type: "date" as const,
          label: "Datum",
        },
        {
          name: "points",
          type: "number" as const,
          placeholder: "Punkte",
          label: "Punkte",
          value: "1",
          min: "1",
          max: "10",
        },
      ],
      buttons: [
        {
          text: "Zurück",
          role: "cancel",
        },
        {
          text: "Speichern",
          role: "confirm",
        },
      ],
    });

    await detailsAlert.present();
    const detailsResult = await detailsAlert.onWillDismiss();

    if (detailsResult.role === "cancel") {
      this.openHelferPunktCreateModal();
      return;
    }

    if (detailsResult.role !== "confirm" || !detailsResult.data) {
      const toast = await this.toastController.create({
        message: "Bitte füllen Sie alle Felder aus",
        duration: 2000,
        position: "top",
        color: "warning",
      });
      await toast.present();
      return;
    }

    const details = detailsResult.data;

    try {
      const helferPunkt = await this.helferService.createHelferPunkt(
        this.clubId,
        memberId,
        details.name,
        details.date,
        Number(details.points),
      );
      console.log("helferPunkt id", helferPunkt.id);

      const toast = await this.toastController.create({
        message: "Helferpunkt erfolgreich erstellt",
        duration: 2000,
        position: "top",
        color: "success",
      });
      await toast.present();

      this.initializeClubMembers(this.clubId);
    } catch (error) {
      console.error("Error creating Helferpunkt:", error);
      const toast = await this.toastController.create({
        message: "Fehler beim Erstellen des Helferpunkts",
        duration: 2000,
        color: "danger",
      });
      await toast.present();
    }
  }
}
