export interface Training {
  id: string;
  name: string;
  description: string;

  // Location
  streetAndNumber: string;
  postalCode: string;
  city: string;

  // actual date of training
  date: Date;

  timeFrom: Date;
  timeTo: Date;

  startDate: Date;
  endDate: Date;

  repeatAmount: string,
  repeatFrequency: string,

  teamId: string;
  // read from teamID
  teamName: string;
  liga: string;

  // Business Logic Fields
  status: boolean;
  attendees: any;
}
