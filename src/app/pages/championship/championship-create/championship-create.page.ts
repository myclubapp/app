import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "firebase/auth";
import { Timestamp } from "@angular/fire/firestore";
import { Observable, lastValueFrom } from "rxjs";
import { Team } from "src/app/models/team";
import { Game } from "src/app/models/game";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UiService } from "src/app/services/ui.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-championship-create",
  templateUrl: "./championship-create.page.html",
  styleUrls: ["./championship-create.page.scss"],
  standalone: false,
})
export class ChampionshipCreatePage implements OnInit {
  @Input() data!: Game;

  gameCopy: Game;
  game: Game;
  user$: Observable<User>;

  teamAdminList$: Observable<Team[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    private championshipService: ChampionshipService,
    private readonly alertController: AlertController,
    private readonly authService: AuthService,
    private readonly toastController: ToastController,
    private fbService: FirebaseService,
    private uiService: UiService,
    private translate: TranslateService,
  ) {
    const now = new Date();
    const utcNow = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        0,
        0,
      ),
    );

    this.game = {
      id: "",
      externalId: "",
      date: utcNow.toISOString().split("T")[0],
      time: utcNow.toISOString(),
      dateTime: Timestamp.fromDate(new Date()),

      location: "",
      city: "",

      longitude: "",
      latitude: "",
      liga: "",

      name: "",
      description: "",

      teamName: "",
      teamId: "",
      clubId: "",

      teamHomeId: "",
      teamHome: "",
      teamHomeLogo: "",
      teamHomeLogoText: "",

      teamAwayId: "",
      teamAway: "",
      teamAwayLogo: "",
      teamAwayLogoText: "",

      referee1: "",
      referee2: "",
      spectators: "",

      result: "",
      type: "manual",
      updated: new Date(),
      clubRef: null,
      teamRef: null,

      status: null,
      countAttendees: 0,
      attendees: [],
      children: [],
      isMember: true,
      gameStatus: null,
    };
  }

  ngOnInit() {
    this.gameCopy = this.data;

    if (this.gameCopy && this.gameCopy.id) {
      this.game = this.gameCopy;
    }

    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.teamAdminList$.forEach((teamList) => {
      if (teamList.length > 0) {
        this.game.teamId = teamList[0].id;
        this.game.teamName = teamList[0].name;
      }
    });
  }

  ngOnDestroy(): void {}

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }

  combineDateAndTime(dateValue, timeValue) {
    let dateObj = dateValue;
    if (!(dateValue instanceof Date)) {
      dateObj = new Date(dateValue);
    }

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();

    let hours = 0,
      minutes = 0,
      seconds = 0;

    if (typeof timeValue === "string") {
      if (timeValue.includes("T")) {
        const timeObj = new Date(timeValue);
        hours = timeObj.getHours();
        minutes = timeObj.getMinutes();
        seconds = timeObj.getSeconds();
      } else {
        const timeParts = timeValue.split(":");
        hours = parseInt(timeParts[0], 10) || 0;
        minutes = parseInt(timeParts[1], 10) || 0;
        seconds = parseInt(timeParts[2], 10) || 0;
      }
    } else if (timeValue instanceof Date) {
      hours = timeValue.getHours();
      minutes = timeValue.getMinutes();
      seconds = timeValue.getSeconds();
    }

    const combinedDateTime = new Date(
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
    );
    return combinedDateTime;
  }

  async createGame() {
    // Überprüfe grundlegende Felder
    if (
      !this.game.teamHome ||
      !this.game.teamAway ||
      !this.game.location ||
      !this.game.city ||
      !this.game.teamId ||
      !this.game.date ||
      !this.game.time
    ) {
      this.toastActionError({
        message: "Bitte füllen Sie alle Pflichtfelder aus.",
      });
      return null;
    }

    const result = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(this.translate.get("common.confirmation")),
      message: await lastValueFrom(
        this.translate.get("championship.create_game_confirm"),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    if (result) {
      // Spiel erstellen
      console.log("Spiel wird erstellt");

      // Combine date with time
      const combinedDateTime = this.combineDateAndTime(
        this.game.date,
        this.game.time,
      );

      // Set dateTime as Timestamp
      this.game.dateTime = Timestamp.fromDate(combinedDateTime);

      // Format date and time strings
      const dateStr = combinedDateTime.toLocaleDateString("de-CH");
      const timeStr = combinedDateTime.toLocaleTimeString("de-CH", {
        hour: "2-digit",
        minute: "2-digit",
      });
      this.game.date = dateStr;
      this.game.time = timeStr;

      // Set name if not provided
      if (!this.game.name) {
        this.game.name = `${this.game.teamHome} vs. ${this.game.teamAway}`;
      }

      // Set type to manual
      this.game.type = "manual";

      // Remove attendees array for creation
      delete this.game.attendees;
      delete this.game.children;

      const game = await this.championshipService
        .setCreateGame(this.game)
        .catch((e) => {
          console.log(e.message);
          this.toastActionError(e);
        });

      if (game) {
        console.log(game.id);
        return this.modalCtrl.dismiss({}, "confirm");
      }

      return null;
    } else {
      console.log("Spiel-Erstellung abgebrochen");
      return null;
    }
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
}
