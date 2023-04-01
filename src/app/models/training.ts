export interface Training {
  id: string;
  name: string;
  description: string;

  streetAndNumber: string;
  postalCode: string;
  city: string;

  date: Date;

  timeFrom: string;
  timeTo: string;

  startDate: string;
  endDate: string;

  teamName: string;
  liga: string;

  teamId: string;

  // Business Logic Fields
  status: boolean;
  attendees: any;
}
