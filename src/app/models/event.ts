import { Timestamp } from "@angular/fire/firestore";

export interface Veranstaltung {
  id: string;
  name: string;
  description: string;

  location: string;
  streetAndNumber: string;
  postalCode: string;
  city: string;

  date: Timestamp;

  startDate: string;
  endDate: string;

  timeFrom: string;
  timeTo: string;

  /*teamId: string
  teamName: string
  liga: string*/

  link_web: string;
  link_poll: string;

  clubId: string;
  clubName: string;
  // Business Logic Fields
  status: boolean;
  attendees: any;
  countNeeded: number;
  countAttendees: number;
  closedEvent: boolean;
  cancelled?: boolean;
  cancelledReason?: string;
  lastReminderSent?: Timestamp;
  isMember?: boolean;
  children?: any[];
}
export interface HelferEvent extends Veranstaltung {
  schichten?: [Schicht];
}

export interface Schicht {
  id: number;
  name: string;
  points: number;
  timeFrom: any;
  timeTo: any;
  countNeeded: number;
  countAttendees: number;
}
