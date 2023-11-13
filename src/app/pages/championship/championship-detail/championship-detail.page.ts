import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { Game } from "src/app/models/game";
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation, PermissionStatus } from "@capacitor/geolocation";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { combineLatest, forkJoin, from, Observable, of, Subscriber, Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "@angular/fire/auth";
import { catchError, concatMap, defaultIfEmpty, finalize, map, startWith, switchMap, take, tap } from "rxjs/operators";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-championship-detail",
  templateUrl: "./championship-detail.page.html",
  styleUrls: ["./championship-detail.page.scss"],
})
export class ChampionshipDetailPage implements OnInit {
  @Input("data") game: Game;
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  game$: Observable<Game>;

  mode = "yes";

  user$: Observable<User>;
  user: User;

  attendeeListTrue: any[] = [];
  attendeeListFalse: any[] = [];
  attendeeListUndefined: any[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly championshipService: ChampionshipService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly userProfileService: UserProfileService,
    private cdr: ChangeDetectorRef,
  ) { 
   //  this.setMap();
  }
 
 
  ngOnInit() {
    this.game = this.navParams.get("data");
    this.game$ = of(this.game);

    this.attendeeListTrue = [];
    this.attendeeListFalse = [];
    this.attendeeListUndefined = [];

    this.game$ = this.getGame(this.game.teamId, this.game.id);
    this.game$.subscribe({
      next: (data) => {
        console.log("GAMES Data received");
        this.game = {
          ...this.game, ...data
        };
        this.cdr.detectChanges();
  
        this.setMap();
        
      },
      error: (err) => console.error("GAMES Error in subscription:", err),
      complete: () => console.log("GAMES Observable completed")
    });
   
  }


  ngOnDestroy() {

    if (this.newMap) {
      this.newMap.destroy();
    }
  }


  getGame(teamId: string, gameId: string) {
    return this.authService.getUser$().pipe(
      take(1),
      tap(user => {
        this.user = user;
        if (!user) {
          console.log("No user found");
          throw new Error("User not found");
        }
      }),
      switchMap(() => this.championshipService.getTeamGameRef(teamId, gameId)),
      switchMap(game => {
        if (!game) return of(null); // If no game is found, return null
        return this.championshipService.getTeamGameAttendeesRef(teamId, gameId).pipe(
          map(attendees => {

            // get firstName & lastName from userProfile Method call for each attendees element
            // this.userProfileService.getUserProfileById(attendee.id)

            const userAttendee = attendees.find(att => att.id == this.user.uid);
            const status = userAttendee ? userAttendee.status : null;

            //this.attendeeListUndefined

            this.attendeeListTrue = attendees.filter(att => att.status == true) || [];
            this.attendeeListFalse = attendees.filter(att => att.status == false) || [];
            this.attendeeListUndefined = [];

            return {
              ...game,
              attendees,
              status,
            };
          }),
          catchError(() => of({
            ...game,
            attendees: [],
            status: null,
          })) // If error in fetching attendees, return game with empty attendees
        );
      }),
      catchError(err => {
        console.error("Error in getSingleGameWithAttendees:", err);
        return of(null); // Return null on error
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
        zoom: 8, // The initial zoom level to be rendered by the map
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
