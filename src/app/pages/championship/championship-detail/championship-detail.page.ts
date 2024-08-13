import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ModalController,
  // NavController,
  NavParams,
  ToastController,
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
import { combineLatest, forkJoin, lastValueFrom, Observable, of } from "rxjs";
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

@Component({
  selector: "app-championship-detail",
  templateUrl: "./championship-detail.page.html",
  styleUrls: ["./championship-detail.page.scss"],
})
export class ChampionshipDetailPage implements OnInit {
  @Input("data") game: Game;
  @Input("isFuture") isFuture: boolean;

  @ViewChild("map")
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  game$: Observable<Game>;

  mode = "yes";

  //   user$: Observable<User>;
  user: User;

  coordinates: Position;
  teamAdminList$: Observable<Team[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    // private navController: NavController,
    private navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly alertCtrl: AlertController,
    private readonly championshipService: ChampionshipService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    //  this.setMap();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }

  ngOnInit() {
    // console.log(this.navParams);
    this.game = this.navParams.get("data");
    this.game$ = this.getGame(this.game.teamId, this.game.id);
  }

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    // console.log(teamAdminList, teamId)
    return teamAdminList && teamAdminList.some(team => team.id === teamId);
  }

  ionViewDidEnter() {
    if (!this.newMap) this.setMap();
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
        this.setMap();
        this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap(() => this.championshipService.getTeamGameRef(teamId, gameId)),
      switchMap((game) => {
        if (!game) return of(null);

        // Fetch team details
        return this.fbService.getTeamRef(teamId).pipe(
          switchMap(team => {
            if (!team) return of(null);


            // Fetch all team members first
            return this.fbService.getTeamMemberRefs(teamId).pipe(
              switchMap(teamMembers => {
                const teamMemberProfiles$ = teamMembers.map(member =>
                  this.userProfileService.getUserProfileById(member.id).pipe(
                    take(1),
                    map(profile => ({
                      ...member, // Spread member to retain all original attributes
                      ...profile, // Spread profile to overwrite and add profile attributes
                      firstName: profile.firstName || "Unknown",
                      lastName: profile.lastName || "Unknown",
                      roles: member.roles || []
                    })),
                    catchError(err => {
                      console.log(`Failed to fetch profile for team member ${member.id}:`, err);
                      return of({ ...member, firstName: "Unknown", lastName: "Unknown", roles: member.roles || [], status: null });
                    })
                  )
                );
                // Fetch all attendees next
                return forkJoin(teamMemberProfiles$).pipe(
                  map(teamMembersWithDetails => teamMembersWithDetails.filter(member => member !== undefined)), // Filtering out undefined entries
                  switchMap(teamMembersWithDetails => {
                    return this.championshipService.getTeamGameAttendeesRef(teamId, gameId).pipe(
                      map(attendees => {
                        const attendeeDetails = attendees.map(attendee => {
                          const detail = teamMembersWithDetails.find(member => member.id === attendee.id);
                          return detail ? { ...detail, status: attendee.status } : null;
                        }).filter(item => item !== null);

                        const attendeeListTrue = attendeeDetails.filter(att => att.status === true)
                          .sort((a, b) => a.firstName.localeCompare(b.firstName));
                        const attendeeListFalse = attendeeDetails.filter(att => att.status === false)
                          .sort((a, b) => a.firstName.localeCompare(b.firstName));
                        const respondedIds = new Set(attendeeDetails.map(att => att.id));
                        // Modify here to add 'status: null' for each unresponded member
                        const unrespondedMembers = teamMembersWithDetails.filter(member => !respondedIds.has(member.id))
                          .map(member => ({ ...member, status: null })).sort((a, b) => a.firstName.localeCompare(b.firstName)); // Ensuring 'status: null' is explicitly set

                        const userAttendee = attendeeDetails.find(att => att.id === this.user.uid);
                        const status = userAttendee ? userAttendee.status : null;
                        return {
                          ...game,
                          team, // Add team details here
                          teamId: teamId,
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
                          ...game,
                          team, // Add team details here
                          teamId: teamId,
                          attendees: [],
                          attendeeListTrue: [],
                          attendeeListFalse: [],
                          unrespondedMembers: teamMembersWithDetails.filter(member => member !== null)
                            .map(member => ({ ...member, status: null })), // Also ensure 'status: null' here for consistency
                          status: null
                        });
                      })
                    );
                  }),
                );
              }),
              catchError(err => {
                console.error("Error fetching team members:", err);
                return of({
                  ...game,
                  team, // Add team details here
                  teamId: teamId,
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: null
                });
              })
            );
          })
        );
      }),
      catchError(err => {
        console.error("Error in getGameWithAttendees:", err);
        return of(null);
      })
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
          handler: () => {

          }
        },
        {
          role: "",
          text: "OK",
          handler: async () => {
            for (let member of game['unrespondedMembers']) {
              console.log(
                `Set Status ${status} for user ${this.user.uid} and team ${this.game.teamId} and game ${game.id}`
              );
              await this.championshipService.setTeamGameAttendeeStatusAdmin(
                status,
                this.game.teamId,
                game.id,
                member.id,
              ).catch(e => {
                console.log(e.message);
                this.toastActionError(e);
              })
            }
            this.presentToast();
          }
        },

      ]
    })
    alert.present();

  }

  async toggle(status: boolean, game: any) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`
    );
    console.log(game)
    const newStartDate = game.dateTime.toDate();
    newStartDate.setHours(Number(game.time.substring(0, 2)));
    console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ")
    const championshipTreshold = game.team.championshipThreshold || 0;
    console.log(championshipTreshold);
    // Verpätete Abmeldung?
    if (((newStartDate.getTime() - new Date().getTime()) < (1000 * 60 * 60 * championshipTreshold)) && status == false && championshipTreshold) {
      console.log("too late");
      await this.tooLateToggle();

    } else {
      // OK
      await this.championshipService.setTeamGameAttendeeStatus(
        status,
        game.teamId,
        game.id
      );
      this.presentToast();
    }

  }
  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    game: Game,
    memberId: string,
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${memberId} and team ${game.teamId} and game ${game.id}`
    );
    await this.championshipService.setTeamGameAttendeeStatusAdmin(
      status,
      game.teamId,
      game.id,
      memberId,
    );
    this.presentToast();
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
  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "primary",
      duration: 1500,
      position: "top",
    });
    toast.present();
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

    this.newMap.addMarker({
      title: `${this.game.location} in ${this.game.city}`,
      coordinate: {
        lat: Number(this.game.latitude),
        lng: Number(this.game.longitude),
      },
      snippet: `${this.game.location} in ${this.game.city}`,
    });
    const permission: PermissionStatus = await Geolocation.checkPermissions();
    try {
      if (
        permission.location === "denied" ||
        permission.coarseLocation === "denied"
      ) {
        console.log("no permission");
        await Geolocation.requestPermissions();
      }
    } catch (e) {
      console.log("No Permission Request possible");
    }
    try {
      this.coordinates = await Geolocation.getCurrentPosition();
      if (
        this.coordinates.coords.latitude &&
        this.coordinates.coords.longitude
      ) {
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
    const alert = await this.alertCtrl.create({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
      buttons: [{
        role: "",
        text: "OK",
        handler: (data) => {
          console.log(data)
        }
      }]
    })
    alert.present()
  }

  openMaps(game: Game) {
    if (this.coordinates.coords.longitude && this.coordinates.coords.latitude) {
      Browser.open({
        url:
          "https://www.google.com/maps/dir/?api=1&destination=" +
          game.latitude +
          "," +
          game.longitude +
          "&origin=" +
          this.coordinates.coords.latitude +
          "," +
          this.coordinates.coords.longitude,
      });
    } else {
      Browser.open({
        url:
          "https://www.google.com/maps/dir/?api=1&destination=" +
          game.latitude +
          "," +
          game.longitude,
      });
    }
  }
}

