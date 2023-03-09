import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { Game } from "src/app/models/game";
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation, PermissionStatus } from "@capacitor/geolocation";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { combineLatest, Observable, of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "firebase/auth";
import { switchMap } from "rxjs/operators";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-championship-detail",
  templateUrl: "./championship-detail.page.html",
  styleUrls: ["./championship-detail.page.scss"],
})
export class ChampionshipDetailPage implements OnInit {
  @Input("data") game: Game;

  @ViewChild("map")
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  // game$: Observable <Game>;
  user: User;
  attendeeList: any[] = [];
  attendeeListTrue: any[] = [];
  attendeeListFalse: any[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly championshipService: ChampionshipService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.getUser();
    // GET DATA
    this.game = this.navParams.get("data");
    this.setMap();

    // GET GAME
    this.championshipService
      .getTeamGameRef(this.game.teamId, this.game.id)
      .subscribe((game) => {
        game.teamName = this.game.teamName;
        game.teamId = this.game.teamId;
        this.game = game;

        this.game.status = null;
      });

    // GET ATTENDEE LIST

    this.championshipService
      .getTeamGameRef(this.game.teamId, this.game.id)
      .pipe(
        switchMap((game) =>
          this.championshipService.getTeamGameAttendeesRef(
            this.game.teamId,
            this.game.id
          )
        ),
        switchMap((allAttendees: any) => {
          return combineLatest(allAttendees.map((member) => {
              combineLatest(of(member), this.userProfileService.getUserProfileById(member.id)
              )
            })
          )
        }
          
        )
      )
      .subscribe((data: any) => {
        const attendeeListNew = [];

        // User ist im Falle keiner Antwort nicht in attendee Liste
        this.game.status = null;
        for (const attendee of data) {
          // loop over teams
          const status = attendee[0];
          const user = attendee[1];

          user.status = status.status;
          attendeeListNew.push(user);

          // update game user status
          if (user.id === this.user.uid) {
            this.game.status = status.status;
          } else {
            this.game.status = null;
          }
        }

        this.attendeeList = [...new Set([].concat(...attendeeListNew))];
        this.attendeeList = this.attendeeList.sort(
          (a, b) => b.firstName - a.firstName
        );
        this.attendeeListTrue = this.attendeeList.filter(
          (element) => element.status === true
        );
        this.attendeeListFalse = this.attendeeList.filter(
          (element) => element.status === false
        );
      });
  }

  async toggle(status: boolean, game: Game) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`
    );
    await this.championshipService.setTeamGameAttendeeStatus(
      this.user.uid,
      status,
      game.teamId,
      game.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Änderungen gespeichert",
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async getUser() {
    this.user = await this.authService.getUser();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.game, "confirm");
  }

  async setMap() {
    const mapRef = document.getElementById("map");
    this.newMap = await GoogleMap.create({
      id: "my-map-" + this.game.id, // Unique identifier for this map instance
      element: mapRef, // mapRef, // reference to the capacitor-google-map element
      apiKey: environment.googleMapsApiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: Number(this.game.latitude),
          lng: Number(this.game.longitude),
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });
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
      const coordinates = await Geolocation.getCurrentPosition();
      if (coordinates.coords.latitude && coordinates.coords.longitude) {
        this.newMap.addMarker({
          title: "Meine Position",
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude,
          },
          isFlat: true,
          snippet: "Meine Position",
        });
      }
    } catch (e) {
      console.log("no coordinates on map");
    }
  }
  *ngOnDestroy() {
    this.newMap.destroy();
  }
}
