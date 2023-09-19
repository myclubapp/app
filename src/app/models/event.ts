import { Timestamp } from 'firebase/firestore';

export interface Veranstaltung {
  id: string
  name: string
  description: string

  location: string
  streetAndNumber: string
  postalCode: string
  city: string
  
  date: Timestamp,

  startDate: string
  endDate: string

  timeFrom: string
  timeTo: string
  
  teamId: string
  teamName: string
  liga: string

  clubId: string
  clubName: string
  // Business Logic Fields
  status: boolean
  attendees: any
  countAttendees: number
}
export interface HelferEvent extends Veranstaltung {
  schichten: [Schicht]
}

interface Schicht {
  name: string
}
