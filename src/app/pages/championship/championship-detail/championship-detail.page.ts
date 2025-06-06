import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ModalController,
  // NavController,
  NavParams,
  Platform,
} from "@ionic/angular";
import { Game } from "src/app/models/game";
import { GoogleMap } from "@capacitor/google-maps";
import { Browser } from "@capacitor/browser";
import {
  Geolocation,
  PermissionStatus,
  Position,
} from "@capacitor/geolocation";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { forkJoin, lastValueFrom, Observable, of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "@angular/fire/auth";
import { catchError, map, switchMap, take, tap } from "rxjs/operators";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { environment } from "src/environments/environment";
// import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { LineupPage } from "../lineup/lineup.page";
import { Profile } from "src/app/models/user";
import { MemberPage } from "../../member/member.page";
import { FirebaseService } from "src/app/services/firebase.service";
import { Team } from "src/app/models/team";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-championship-detail",
  templateUrl: "./championship-detail.page.html",
  styleUrls: ["./championship-detail.page.scss"],
  standalone: false,
})
export class ChampionshipDetailPage implements OnInit {
  @Input("data") game: Game;
  @Input("isFuture") isFuture: boolean;

  @ViewChild("map")
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  game$: Observable<Game>;

  mode = "yes";

  user$: Observable<User>;
  user: User;
  coordinates: Position;
  teamAdminList$: Observable<Team[]>;
  children: Profile[];
  showStatus: boolean;

  constructor(
    private readonly modalCtrl: ModalController,
    public platform: Platform,
    private navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly alertCtrl: AlertController,
    private readonly championshipService: ChampionshipService,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private translate: TranslateService,
    private uiService: UiService,
  ) {
    //  this.setMap();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }

  async ngOnInit() {
    this.game = this.navParams.get("data");
    this.isFuture = this.navParams.get("isFuture");
    this.game$ = this.getGame(this.game.teamId, this.game.id);
    this.user$ = this.authService.getUser$();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
    await this.initUserAndChildren();
    this.geolocationPermission();
  }

  private async initUserAndChildren() {
    this.user = await lastValueFrom(this.authService.getUser$().pipe(take(1)));
    this.children = await lastValueFrom(
      this.userProfileService.getChildren(this.user.uid).pipe(take(1)),
    );
    this.showStatus = !(this.children && this.children.length > 0);
  }

  async geolocationPermission() {
    console.log("Überprüfe Standort-Berechtigungen...");
    try {
      const permission: PermissionStatus = await Geolocation.checkPermissions();
      console.log(
        "Aktueller Berechtigungsstatus:",
        permission.location,
        permission.coarseLocation,
      );

      switch (permission.location) {
        case "granted":
          console.log("Standort-Berechtigung bereits erteilt");
          return true;

        case "prompt":
        case "prompt-with-rationale":
          console.log("Frage Standort-Berechtigung an");
          const newPermission = await Geolocation.requestPermissions();
          return newPermission.location === "granted";

        case "denied":
          console.log("Standort-Berechtigung verweigert");
          // Hier könnte man einen Alert anzeigen, der erklärt, warum die App
          // Standort-Berechtigungen benötigt und wie man sie in den Einstellungen aktivieren kann
          await this.showLocationPermissionAlert();
          return false;

        default:
          console.log("Unbekannter Berechtigungsstatus");
          return false;
      }
    } catch (e) {
      console.error("Fehler bei der Berechtigungsabfrage:", e);
      return false;
    }
  }

  private async showLocationPermissionAlert() {
    await this.uiService.showInfoDialog({
      header: "Standort-Berechtigung benötigt",
      message:
        "Um die Karte und Navigationsfunktionen nutzen zu können, wird Zugriff auf Ihren Standort benötigt. Bitte aktivieren Sie die Standort-Berechtigung in den Einstellungen.",
    });
  }

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }

  ionViewDidEnter() {
    this.game$.pipe(take(1)).subscribe((game) => {
      console.log(">> game", game);
      if (!this.newMap && game) {
        console.log("setMap");

        if (!this.newMap) this.setMap();
      } else {
        console.log("MAP ERROR?");
      }
    });
  }

  ngOnDestroy() {
    if (this.newMap) {
      this.newMap.destroy();
    }
  }
  // ng
  getGame(teamId: string, gameId: string) {
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

      switchMap(() => this.championshipService.getTeamGameRef(teamId, gameId)),
      switchMap((game) => {
        if (!game) return of(null);

        // Fetch team details
        return this.fbService.getTeamRef(teamId).pipe(
          switchMap((team) => {
            if (!team) return of(null);

            // Fetch all team members first
            return this.fbService.getTeamMemberRefs(teamId).pipe(
              switchMap((teamMembers) => {
                const teamMemberProfiles$ = teamMembers.map((member) =>
                  this.userProfileService.getUserProfileById(member.id).pipe(
                    take(1),
                    map((profile) => ({
                      ...member, // Spread member to retain all original attributes
                      ...profile, // Spread profile to overwrite and add profile attributes
                      firstName: profile.firstName || "Unknown",
                      lastName: profile.lastName || "Unknown",
                      roles: member.roles || [],
                    })),
                    catchError((err) => {
                      console.log(
                        `Failed to fetch profile for team member ${member.id}:`,
                        err,
                      );
                      return of({
                        ...member,
                        firstName: "Unknown",
                        lastName: "Unknown",
                        roles: member.roles || [],
                        status: null,
                      });
                    }),
                  ),
                );
                // Fetch all attendees next
                return forkJoin(teamMemberProfiles$).pipe(
                  map((teamMembersWithDetails) =>
                    teamMembersWithDetails.filter(
                      (member) => member !== undefined,
                    ),
                  ), // Filtering out undefined entries
                  switchMap((teamMembersWithDetails) => {
                    return this.championshipService
                      .getTeamGameAttendeesRef(teamId, gameId)
                      .pipe(
                        map((attendees) => {
                          const attendeeDetails = attendees
                            .map((attendee) => {
                              const detail = teamMembersWithDetails.find(
                                (member) => member.id === attendee.id,
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
                          // Modify here to add 'status: null' for each unresponded member
                          const unrespondedMembers = teamMembersWithDetails
                            .filter((member) => !respondedIds.has(member.id))
                            .map((member) => ({ ...member, status: null }))
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            ); // Ensuring 'status: null' is explicitly set

                          const relevantChildren = teamMembers
                            .filter((att) =>
                              this.children.some(
                                (child) => child.id === att.id,
                              ),
                            )
                            .map((att) => {
                              const child = this.children.find(
                                (child) => child.id === att.id,
                              );
                              return child
                                ? {
                                    firstName: child.firstName,
                                    lastName: child.lastName,
                                  }
                                : {};
                            });

                          return {
                            ...game,
                            team, // Add team details here
                            teamId: teamId,
                            attendees: attendeeDetails,
                            attendeeListTrue,
                            attendeeListFalse,
                            unrespondedMembers,
                            children: relevantChildren,
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
                                firstName: att.firstName,
                                lastName: att.lastName,
                              })),
                          };
                        }),
                        catchError((err) => {
                          console.error("Error fetching attendees:", err);
                          return of({
                            ...game,
                            team, // Add team details here
                            teamId: teamId,
                            children: [],
                            attendees: [],
                            attendeeListTrue: [],
                            attendeeListFalse: [],
                            unrespondedMembers: teamMembersWithDetails
                              .filter((member) => member !== null)
                              .map((member) => ({ ...member, status: null })), // Also ensure 'status: null' here for consistency
                            status: [], // Empty array for status in case of error
                          });
                        }),
                      );
                  }),
                );
              }),
              catchError((err) => {
                console.error("Error fetching team members:", err);
                return of({
                  ...game,
                  team, // Add team details here
                  teamId: teamId,
                  children: [],
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: [], // Empty array for status in case of error
                });
              }),
            );
          }),
        );
      }),
      catchError((err) => {
        console.error("Error in getGameWithAttendees:", err);
        return of(null);
      }),
    );
  }
  async toggleAll(status: boolean, game: Game) {
    const alert = await this.alertCtrl.create({
      message: "Sollen alle angemeldet werden?",
      header: "Alle anmelden",
      buttons: [
        {
          text: "Nein",
          role: "cancel",
          handler: () => {},
        },
        {
          role: "",
          text: "OK",
          handler: async () => {
            for (let member of game["unrespondedMembers"]) {
              console.log(
                `Set Status ${status} for user ${this.user.uid} and team ${this.game.teamId} and game ${game.id}`,
              );
              await this.championshipService
                .setTeamGameAttendeeStatusAdmin(
                  status,
                  this.game.teamId,
                  game.id,
                  member.id,
                )
                .catch((e) => {
                  console.log(e.message);
                  this.toastActionError(e);
                });
            }
            this.presentToast();
          },
        },
      ],
    });
    alert.present();
  }

  async processToggle(userId: string, status: boolean, game: any) {
    console.log(
      `Set Status ${status} for user ${userId} and team ${game.teamId} and game ${game.id}`,
    );
    const newStartDate = game.dateTime.toDate();
    newStartDate.setHours(Number(game.time.substring(0, 2)));

    const championshipThreshold = game.team.championshipThreshold || 0;

    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * championshipThreshold &&
      status == false &&
      championshipThreshold
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      await this.championshipService.setTeamGameAttendeeStatusAdmin(
        status,
        game.teamId,
        game.id,
        userId,
      );
      this.presentToast();
    }
  }

  async toggleItem(
    item: IonItemSliding,
    status: boolean,
    game: any,
    memberId: string,
  ) {
    console.log("toggleItem", item, status, game, memberId);
    await item.close();
    await this.processToggle(memberId, status, game);
  }

  async toastActionError(error) {
    await this.uiService.showErrorToast(error.message);
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
    // this.navController.pop();
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.game, "confirm");
    /*this.navController.navigateBack("championship", {
      state: {
        role: "confirm",
        data: this.game,
      },
    });*/
  }

  async setMap() {
    // if(this.mapRef == null) {
    //   return;
    // }
    if (this.mapRef == undefined || this.mapRef == null) {
      return;
    }
    console.log("setMap");
    this.newMap = await GoogleMap.create({
      id: "my-map-" + this.game.id, // Unique identifier for this map instance
      element: this.mapRef.nativeElement, // mapRef, // reference to the capacitor-google-map element
      apiKey: environment.googleMapsApiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: Number(this.game.latitude),
          lng: Number(this.game.longitude),
        },
        zoom: 12, // The initial zoom level to be rendered by the map
      },
    });

    // await this.newMap.enableCurrentLocation(true);
    // console.log("add Marker");
    this.newMap.addMarker({
      title: `${this.game.location} in ${this.game.city}`,
      coordinate: {
        lat: Number(this.game.latitude),
        lng: Number(this.game.longitude),
      },
      snippet: `${this.game.location} in ${this.game.city}`,
    });

    try {
      this.coordinates = await Geolocation.getCurrentPosition();
      if (
        this.coordinates.coords.latitude &&
        this.coordinates.coords.longitude
      ) {
        // console.log("add Marker with current position");
        this.newMap.addMarker({
          title: "Meine Position",
          coordinate: {
            lat: this.coordinates.coords.latitude,
            lng: this.coordinates.coords.longitude,
          },
          isFlat: true,
          snippet: "Meine Position",
        });
      }
    } catch (e) {
      console.log("no coordinates on map");
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

  async openLineup(game: Game) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: LineupPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: game,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  async tooLateToggle() {
    await this.uiService.showInfoDialog({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
    });
  }

  async openMaps(game: Game) {
    const coordinates = await Geolocation.getCurrentPosition();
    if (coordinates.coords.longitude && coordinates.coords.latitude) {
      Browser.open({
        url:
          "https://www.google.com/maps/dir/?api=1&destination=" +
          game.latitude +
          "," +
          game.longitude +
          "&origin=" +
          coordinates.coords.latitude +
          "," +
          coordinates.coords.longitude,
      }).catch((e) => {
        console.log(e);
      });
    } else {
      Browser.open({
        url:
          "https://www.google.com/maps/dir/?api=1&destination=" +
          game.latitude +
          "," +
          game.longitude,
      }).catch((e) => {
        console.log(e);
      });
    }
  }
}
