import { Timestamp } from "@angular/fire/firestore";

export interface Training {
  id: string;
  name: string;
  description: string;

  // Location
  location: string;
  streetAndNumber: string;
  postalCode: string;
  city: string;

  // actual date of training
  date: Timestamp;

  timeFrom: string;
  timeTo: string;

  // Fields for calculation
  startDate: string;
  endDate: string;

  repeatAmount: string;
  repeatFrequency: string;

  // TEAM FIELDS based on TeamID
  teamId: string;
  teamName: string;
  liga: string;

  // Business Logic Fields
  status: boolean;
  countAttendees: number;
  attendees: any;
  exercises: any;
  children: any;
  cancelled: boolean;
  cancelledReason: string;
  lastReminderSent?: Timestamp;
}
