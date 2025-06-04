import { Injectable } from "@angular/core";
import { TrainingService } from "./firebase/training.service";
import { ChampionshipService } from "./firebase/championship.service";
import { UiService } from "./ui.service";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom, take, forkJoin } from "rxjs";
import { Team } from "../models/team";
import { FirebaseService } from "./firebase.service";
import { UserProfileService } from "./firebase/user-profile.service";

@Injectable({
  providedIn: "root",
})
export class JugendundsportService {
  constructor(
    private readonly trainingService: TrainingService,
    private readonly championshipService: ChampionshipService,
    private readonly fbService: FirebaseService,
    private readonly userProfileService: UserProfileService,
    private readonly uiService: UiService,
    private readonly translate: TranslateService,
  ) {}

  private calculateDuration(timeFrom: string, timeTo: string): string {
    if (!timeFrom || !timeTo) return "90";
    if (
      !/^[0-9]{1,2}:[0-9]{2}$/.test(timeFrom) ||
      !/^[0-9]{1,2}:[0-9]{2}$/.test(timeTo)
    )
      return "90";

    const [fromHours, fromMinutes] = timeFrom.split(":").map(Number);
    const [toHours, toMinutes] = timeTo.split(":").map(Number);

    if (
      isNaN(fromHours) ||
      isNaN(fromMinutes) ||
      isNaN(toHours) ||
      isNaN(toMinutes)
    )
      return "90";

    const fromDate = new Date();
    fromDate.setHours(fromHours, fromMinutes, 0, 0);

    const toDate = new Date();
    toDate.setHours(toHours, toMinutes, 0, 0);

    let diffInMinutes = Math.round(
      (toDate.getTime() - fromDate.getTime()) / (1000 * 60),
    );
    if (diffInMinutes <= 0) diffInMinutes += 24 * 60; // Falls über Mitternacht

    return diffInMinutes.toString();
  }

  async exportTrainingData(team: Team) {
    try {
      // Trainingsdaten abrufen
      const trainings = await lastValueFrom(
        this.trainingService.getTeamTrainingsPastRefs(team.id).pipe(take(1)),
      );

      if (!trainings || trainings.length === 0) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("team.export.no_trainings")),
        );
        return;
      }

      // CSV-Header im J+S Format
      const headers = [
        "AKTIVITAETSTYP",
        "DATUM",
        "ZEIT",
        "DAUER",
        "ORT",
        "FOKUS",
      ];

      // CSV-Daten erstellen
      const csvData = trainings.map((training) => {
        const date = new Date(training.date.seconds * 1000);
        return [
          "Training", // AKTIVITAETSTYP
          date.toLocaleDateString("de-CH"), // DATUM
          date.toLocaleTimeString("de-CH", {
            hour: "2-digit",
            minute: "2-digit",
          }), // ZEIT
          this.calculateDuration(training.timeFrom, training.timeTo), // DAUER
          [
            training.location || "",
            training.streetAndNumber || "",
            training.city || "",
          ]
            .join(" ")
            .replace(/\s+/g, " ")
            .trim(), // ORT
          "", // FOKUS
        ];
      });

      // CSV-String mit Semikolon als Trennzeichen erstellen
      const csvContent = [
        headers.join(";"),
        ...csvData.map((row) => row.join(";")),
      ].join("\n");

      // Blob erstellen und herunterladen
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);

      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `J+S_Trainings_${team.name}_${new Date().toISOString().split("T")[0]}.csv`,
      );
      link.style.visibility = "hidden";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      await this.uiService.showSuccessToast(
        await lastValueFrom(this.translate.get("team.export.success")),
      );
    } catch (error) {
      console.error("Fehler beim Exportieren der Trainingsdaten:", error);
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("team.export.error")),
      );
    }
  }

  async exportChampionshipData(team: Team) {
    try {
      // Meisterschaftsspiele abrufen
      const games = await lastValueFrom(
        this.championshipService.getTeamGamesPastRefs(team.id).pipe(take(1)),
      );

      if (!games || games.length === 0) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("team.export.no_games")),
        );
        return;
      }

      // CSV-Header im J+S Format
      const headers = [
        "AKTIVITAETSTYP",
        "DATUM",
        "ZEIT",
        "DAUER",
        "ORT",
        "FOKUS",
      ];

      // CSV-Daten erstellen
      const csvData = games.map((game) => {
        const date = new Date(game.dateTime.seconds * 1000);
        return [
          "Wettkampf", // AKTIVITAETSTYP
          date.toLocaleDateString("de-CH"), // DATUM
          date.toLocaleTimeString("de-CH", {
            hour: "2-digit",
            minute: "2-digit",
          }), // ZEIT
          this.calculateDuration("", ""), // DAUER
          game.location + " " + game.city || "", // ORT
          `${game.teamHome} vs ${game.teamAway}`, // FOKUS
        ];
      });

      // CSV-String mit Semikolon als Trennzeichen erstellen
      const csvContent = [
        headers.join(";"),
        ...csvData.map((row) => row.join(";")),
      ].join("\n");

      // Blob erstellen und herunterladen
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);

      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `J+S_Spiele_${team.name}_${new Date().toISOString().split("T")[0]}.csv`,
      );
      link.style.visibility = "hidden";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      await this.uiService.showSuccessToast(
        await lastValueFrom(this.translate.get("team.export.success")),
      );
    } catch (error) {
      console.error("Fehler beim Exportieren der Spieldaten:", error);
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("team.export.error")),
      );
    }
  }

  async exportAttendanceData(team: Team) {
    try {
      // Trainingsdaten abrufen
      const trainings = await lastValueFrom(
        this.trainingService.getTeamTrainingsPastRefs(team.id).pipe(take(1)),
      );

      if (!trainings || trainings.length === 0) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("team.export.no_trainings")),
        );
        return;
      }

      // Teammitglieder abrufen
      const members = await lastValueFrom(
        this.fbService.getTeamMemberRefs(team.id).pipe(take(1)),
      );
      if (!members || members.length === 0) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("team.export.no_members")),
        );
        return;
      }

      // CSV-Header im AWK Format
      const headers = [
        "PERSONENNUMMER",
        "FUNKTION",
        "DATUM",
        "AKTIVITÄTSTYP",
        "ZEIT",
        "DAUER",
        "ORT",
      ];

      const csvData: string[][] = [];

      // Für jedes Training die Anwesenheiten abrufen und verarbeiten
      for (const training of trainings) {
        const attendees = await lastValueFrom(
          this.trainingService
            .getTeamTrainingsAttendeesRef(team.id, training.id)
            .pipe(take(1)),
        );

        const date = new Date(training.date.seconds * 1000);

        const formattedDate = date.toLocaleDateString("de-CH");
        // Zeit korrekt aus Datum und timeFrom berechnen
        let formattedTime = new Date(training.timeFrom).toLocaleTimeString(
          "de-CH",
          { hour: "2-digit", minute: "2-digit" },
        );

        const duration = this.calculateDuration(
          training.timeFrom,
          training.timeTo,
        );
        const location = [
          training.location || "",
          training.streetAndNumber || "",
          training.city || "",
        ]
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();

        // Für jedes anwesende Mitglied einen Eintrag erstellen
        for (const attendee of attendees) {
          if (attendee.status === true) {
            const memberProfile = await lastValueFrom(
              this.userProfileService
                .getUserProfileById(attendee.id)
                .pipe(take(1)),
            );

            csvData.push([
              "", // PERSONENNUMMER
              "Teilnehmer", // FUNKTION
              formattedDate, // DATUM
              "Training", // AKTIVITÄTSTYP
              formattedTime, // ZEIT
              duration, // DAUER
              location, // ORT
            ]);
          }
        }
      }

      // CSV-String mit Semikolon als Trennzeichen erstellen
      const csvContent = [
        headers.join(";"),
        ...csvData.map((row) => row.join(";")),
      ].join("\n");

      // Blob erstellen und herunterladen
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);

      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `AWK_Anwesenheiten_${team.name}_${new Date().toISOString().split("T")[0]}.csv`,
      );
      link.style.visibility = "hidden";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      await this.uiService.showSuccessToast(
        await lastValueFrom(this.translate.get("team.export.success")),
      );
    } catch (error) {
      console.error("Fehler beim Exportieren der Anwesenheitsdaten:", error);
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("team.export.error")),
      );
    }
  }

  async exportPersonData(team: Team) {
    try {
      // Teammitglieder abrufen
      const members = await lastValueFrom(
        this.fbService.getTeamMemberRefs(team.id).pipe(take(1)),
      );
      if (!members || members.length === 0) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("team.export.no_members")),
        );
        return;
      }

      // Profile der Mitglieder abrufen
      const profileObservables = members.map((member) =>
        this.userProfileService.getUserProfileById(member.id).pipe(take(1)),
      );
      const profiles = await lastValueFrom(forkJoin(profileObservables));

      // CSV-Header gemäß Vorlage
      const headers = [
        "PERSONENNUMMER",
        "NAME",
        "VORNAME",
        "GEBURTSDATUM",
        "GESCHLECHT",
        "AHV_NR",
        "PEID",
        "NATIONALITAET",
        "MUTTERSPRACHE",
        "STRASSE",
        "HAUSNUMMER",
        "PLZ",
        "ORT",
        "LAND",
      ];

      // CSV-Daten gemäß Vorlage
      const csvData = profiles.map((profile) => {
        let street = profile.streetAndNumber || "";
        let hausnummer = "";
        // Versuche die Hausnummer am Ende der Straße zu extrahieren
        const match = street.match(/^(.*?)(\s+(\d+[a-zA-Z]?))?$/);
        if (match) {
          street = match[1].trim();
          hausnummer = match[3] ? match[3].trim() : "";
        }
        return [
          "", // PERSONENNUMMER 9 stellig
          profile.lastName || "", // NAME 50 stellig
          profile.firstName || "", // VORNAME 50 stellig
          profile.dateOfBirth
            ? new Date(profile.dateOfBirth.seconds * 1000).toLocaleDateString(
                "de-CH",
              )
            : "", // GEBURTSDATUM
          profile.gender ? profile.gender.toUpperCase() : "M", // GESCHLECHT
          profile.ahvNumber ? profile.ahvNumber : "", // AHV_NR
          "", // PEID (nicht im Profile-Interface)
          profile.country ? profile.country.toUpperCase() : "CH", // NATIONALITAET
          profile.language ? profile.language.toUpperCase() : "", // MUTTERSPRACHE
          profile.street ? profile.street : street, // STRASSE
          profile.houseNumber ? profile.houseNumber : hausnummer, // HAUSNUMMER
          profile.postalcode ? profile.postalcode.toString() : "", // PLZ
          profile.city || "", // ORT
          profile.country ? profile.country.toUpperCase() : "CH", // LAND
        ];
      });

      // CSV-String mit Semikolon als Trennzeichen erstellen
      const csvContent = [
        headers.join(";"),
        ...csvData.map((row) => row.join(";")),
      ].join("\n");

      // Blob erstellen und herunterladen
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);

      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `J+S_Personen_${team.name}_${new Date().toISOString().split("T")[0]}.csv`,
      );
      link.style.visibility = "hidden";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      await this.uiService.showSuccessToast(
        await lastValueFrom(this.translate.get("team.export.success")),
      );
    } catch (error) {
      console.error("Fehler beim Exportieren der Personendaten:", error);
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("team.export.error")),
      );
    }
  }
}
