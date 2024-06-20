import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
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

  constructor(
    private readonly modalCtrl: ModalController,
    // private navController: NavController,
    private navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    // private readonly route: ActivatedRoute,
    private readonly championshipService: ChampionshipService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    //  this.setMap();
  }

  ngOnInit() {
    // console.log(this.navParams);
    this.game = this.navParams.get("data");

    /*this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.game = JSON.parse(params.data);
      */
    this.game$ = of(this.game);

    this.game$ = this.getGame(this.game.teamId, this.game.id);
    this.game$.subscribe({
      next: (data) => {
        console.log("GAMES Data received");
        this.game = {
          ...this.game,
          ...data,
        };
        this.cdr.detectChanges();

        this.setMap();
      },
      error: (err) => console.error("GAMES Error in subscription:", err),
      complete: () => console.log("GAMES Observable completed"),
    });
    // });

    // let this.mapRef =  @ViewChild('map') abc;
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

        // Fetch all team members first
        return this.fbService.getTeamMemberRefs(teamId).pipe(
          switchMap(teamMembers => {
            const teamMemberProfiles$ = teamMembers.map(member =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(err => {
                  console.log(`Failed to fetch profile for team member ${member.id}:`, err);
                  return of({ ...member, firstName: "Unknown", lastName: "Unknown", status: null });
                })
              )
            );
            // Fetch all attendees next
            return forkJoin(teamMemberProfiles$).pipe(
              switchMap(teamMembersWithDetails => {
                // Fetch all game attendees next
                return this.championshipService.getTeamGameAttendeesRef(teamId, gameId).pipe(
                  map(attendees => {
                    const attendeeDetails = attendees.map(attendee => {
                      const detail = teamMembersWithDetails.find(member => member.id === attendee.id);
                      return detail ? { ...detail, status: attendee.status } : null;
                    }).filter(item => item !== null);

                    const attendeeListTrue = attendeeDetails.filter(att => att.status === true);
                    const attendeeListFalse = attendeeDetails.filter(att => att.status === false);
                    const respondedIds = new Set(attendeeDetails.map(att => att.id));
                    const unrespondedMembers = teamMembersWithDetails.filter(member => !respondedIds.has(member.id));

                    const userAttendee = attendeeDetails.find(att => att.id === this.user.uid);
                    const status = userAttendee ? userAttendee.status : null;

                    return {
                      ...game,
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
                      attendees: [],
                      attendeeListTrue: [],
                      attendeeListFalse: [],
                      unrespondedMembers: teamMembers,
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
        console.error("Error in getGameWithAttendees:", err);
        return of(null);
      })
    );
  }

  async toggle(status: boolean, game: Game) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${this.game.teamId} and game ${game.id}`
    );
    await this.championshipService.setTeamGameAttendeeStatus(
      this.user.uid,
      status,
      this.game.teamId,
      game.id
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

