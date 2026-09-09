import { Timestamp } from "@angular/fire/firestore";

export interface Team {
  id: string;
  clubId: string;
  /**
   * Anzeigename: von `FirebaseService.getTeamRef` aus `baseName` und
   * `additionalName` zusammengesetzt (siehe `getTeamDisplayName`).
   */
  name: string;
  /**
   * Originalname aus Firestore. Bei Verbands-Teams (z. B. `swissunihockey`)
   * wird er vom Backend regelmässig überschrieben und ist deshalb nicht
   * editierbar.
   */
  baseName?: string;
  /**
   * Vom Verein gepflegter Zusatz zum Teamnamen. Überlebt die Synchronisation
   * mit der Verbands-API und wird nur für die Darstellung angehängt.
   */
  additionalName?: string;
  logo: string;
  website: string;
  portrait: string;
  liga: string;
  type: string;
  updated: Timestamp;
  /**
   * Durchschnittsalter der Teammitglieder, einmal pro Monat vom Backend-Job
   * `jobAverageAge` geschrieben. `null`, wenn kein Mitglied ein Geburtsdatum
   * hinterlegt hat; fehlend, solange der Job das Team noch nie erfasst hat.
   */
  averageAge?: number | null;
  /** Anzahl Mitglieder, die in `averageAge` eingeflossen sind. */
  averageAgeMembers?: number;
  /** Zeitpunkt der letzten Berechnung von `averageAge`. */
  averageAgeUpdated?: Timestamp;
  trainingThreshold: number;
  championshipThreshold: number;
  jahresbeitragWert?: number;
  jahresbeitragWaehrung?: string;
}
export interface SwissUnihockeyTeam extends Team {}

export interface SwissVolleyTeam extends Team {
  gender: string;
  clubId: string;
  clubCaption: string;
  leagueCaption: string;
  organisationCaption: string;
}
