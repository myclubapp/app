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
