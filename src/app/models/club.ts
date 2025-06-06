import { Timestamp } from "firebase/firestore";

export interface Club {
  id: string;
  name: string;
  logo: string;
  type: string;
  active: boolean;
  wordpress: string;
  website: string;
  link_location: string;
  address: string;
  phone: string;
  updated: Timestamp;
  roles: [];
  helferThreshold: number;
  eventThreshold: number;
  helferReportingDateFrom: string;
  helferReportingDateTo: string;
  helferPunkte: number;
}
export interface SwissUnihockeyClub extends Club {}

export interface SwissVolleyClub extends Club {}

export interface SwissHandballClub extends Club {}

export interface SwissTurnverbandClub extends Club {}
