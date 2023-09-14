export interface Training {
  id: string;
  name: string;
  description: string;

  // Location
  streetAndNumber: string;
  postalCode: string;
  city: string;

  // actual date of training
  date: any;

  timeFrom: string;
  timeTo: string;

  // Fields for calculation
  startDate: string;
  endDate: string;

  repeatAmount: string,
  repeatFrequency: string,

   // TEAM FIELDS based on TeamID
  teamId: string;
  teamName: string;
  liga: string;

  // Business Logic Fields
  status: boolean;
  countAttendees: number;
  attendees: any;
}
