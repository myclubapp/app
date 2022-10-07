import { Timestamp } from 'firebase/firestore';

export interface Game {
  id: string;
  externalId: string;
  date: string;
  time: string;
  dateTime: Timestamp;
  location: string;
  city: string;
  longitude: string;
  latitude: string;
  liga: string;

  name: string;
  description: string;

  teamName: string;
  teamId: string;

  teamHomeId: string;
  teamHome: string;
  teamHomeLogo: string;
  teamHomeLogoText: string;

  teamAwayId: string;
  teamAway: string;
  teamAwayLogo: string;
  teamAwayLogoText: string;

  referee1: string;
  referee2: string;
  spectators: string;

  resut: string;
  type: string;
  updated: Date;
  clubRef: any;

  // Business Logic Fields
  status: boolean;
  countAttendees: number;
  attendees: any;
}
export interface SwissUnihockeyGame extends Game {}

export interface SwissVolleyGame extends Game {}

export interface SwissHandballGame extends Game {}

export interface SwissTurnverbandGame extends Game {}
