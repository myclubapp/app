import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { Game } from "src/app/models/game";
import { GoogleMap } from "@capacitor/google-maps";
import { Browser } from "@capacitor/browser";
import {
  Geolocation,
  PermissionStatus,
  Position,
} from "@capacitor/geolocation";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-club-game-preview",
  templateUrl: "./club-game-preview.page.html",
  styleUrls: ["./club-game-preview.page.scss"],
  standalone: false,
})
export class ClubGamePreviewPage implements OnInit {
  @Input() data!: Game;
  @Input() isFuture!: boolean;

  game: Game;

  @ViewChild("map")
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  game$: Observable<Game>;
  coordinates: Position;

  constructor(
    private readonly modalCtrl: ModalController,
    public platform: Platform,
    private readonly championshipService: ChampionshipService,
    private readonly fbService: FirebaseService,
    private uiService: UiService,
  ) {}

  async ngOnInit() {
    this.game = this.data;

    if (!this.game) {
      console.error("Game data not provided");
      return;
    }

    this.game$ = this.getGame(this.game.teamId, this.game.id);
    this.geolocationPermission();
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

  ionViewDidEnter() {
    this.game$.subscribe((game) => {
      if (!this.newMap && game) {
        if (!this.newMap) this.setMap();
      }
    });
  }

  ngOnDestroy() {
    if (this.newMap) {
      this.newMap.destroy();
    }
  }

  // Simplified getGame - only fetches general game data, no members/participants
  getGame(teamId: string, gameId: string) {
    return this.championshipService.getTeamGameRef(teamId, gameId).pipe(
      switchMap((game) => {
        if (!game) return of(null);

        // Fetch team details
        return this.fbService.getTeamRef(teamId).pipe(
          map((team) => {
            if (!team) return null;

            return {
              ...game,
              team, // Add team details here
              teamId: teamId,
            };
          }),
        );
      }),
      catchError((err) => {
        console.error("Error in getGame:", err);
        return of(null);
      }),
    );
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.game, "confirm");
  }

  async setMap() {
    if (this.mapRef == undefined || this.mapRef == null) {
      return;
    }

    this.newMap = await GoogleMap.create({
      id: "my-map-" + this.game.id,
      element: this.mapRef.nativeElement,
      apiKey: environment.googleMapsApiKey,
      config: {
        center: {
          lat: Number(this.game.latitude),
          lng: Number(this.game.longitude),
        },
        zoom: 12,
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

  async openKanva(game: Game) {
    // Format type: if "swissunihockey", use "unihockey", otherwise use as-is
    let type = game.type;
    if (type === "swissunihockey") {
      type = "unihockey";
    }

    // Remove "su-" prefix from clubId, teamId, and gameId
    const clubId = game.clubId?.startsWith("su-")
      ? game.clubId.substring(3)
      : game.clubId;
    const teamId = game.teamId?.startsWith("su-")
      ? game.teamId.substring(3)
      : game.teamId;
    const gameId = game.id?.startsWith("su-") ? game.id.substring(3) : game.id;

    // Construct the Kanva URL
    const kanvaUrl = `https://www.getkanva.io/studio/${type}/${clubId}/${teamId}/${gameId}`;

    console.log("Opening Kanva URL:", kanvaUrl);

    // Open in browser
    await Browser.open({
      url: kanvaUrl,
    }).catch((e) => {
      console.error("Error opening Kanva:", e);
    });
  }
}
