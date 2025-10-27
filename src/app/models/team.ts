import { Timestamp } from "@angular/fire/firestore";

export interface Team {
  id: string;
  clubId: string;
  name: string;
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
