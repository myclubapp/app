import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { Game } from "src/app/models/game";
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation, PermissionStatus } from "@capacitor/geolocation";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { combineLatest, forkJoin, Observable, of, Subscriber, Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "@angular/fire/auth";
import { concatMap, finalize, map, switchMap, take, tap } from "rxjs/operators";
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

  subscription: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly championshipService: ChampionshipService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly userProfileService: UserProfileService
  ) {}

  ngOnInit() {

    this.game = this.navParams.get("data");
    this.setMap();

    const game$ = this.authService.getUser$().pipe(
      take(1),
      tap(user => this.user = user),
      //tap(user => console.log(user)),
      switchMap(user=>this.championshipService.getTeamGameRef(this.game.teamId, this.game.id).pipe(
        tap(game=>console.log(game)),
        concatMap((game:Game) => this.championshipService.getTeamGameAttendeesRef(game.teamId, game.id).pipe(
          map(attendees => {
            const userAttendee = attendees.find(att => att.id == this.user.uid);
            const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
            return {
              ...game,
              status: status,
              countAttendees: attendees.filter(att => att.status == true).length,
              attendees: attendees
            };
          }))),
          tap(game=>this.game),
          finalize(()=>console.log("done")),
      )));

      this.subscription = forkJoin([game$]).subscribe({
        next: () => {
          console.log(this.game);
        },
        error: err => console.error('Error in the observable chain:', err)
      });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
  }    if (this.newMap) {
    this.newMap.destroy();
}
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

}
