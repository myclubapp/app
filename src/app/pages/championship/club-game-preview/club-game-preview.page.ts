import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { Game } from "src/app/models/game";
import { GoogleMap } from "@capacitor/google-maps";
import { Browser } from "@capacitor/browser";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";
import { MapService } from "src/app/services/map.service";

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

  constructor(
    private readonly modalCtrl: ModalController,
    public platform: Platform,
    private readonly championshipService: ChampionshipService,
    private readonly fbService: FirebaseService,
    private uiService: UiService,
    private mapService: MapService,
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
    return this.mapService.checkGeolocationPermission();
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
    this.newMap = await this.mapService.createMap(
      "my-map-" + this.game.id,
      this.mapRef,
      this.game,
    );
  }

  async openMaps(game: Game) {
    await this.mapService.openMapsNavigation(game);
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
