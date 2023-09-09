import { Timestamp } from 'firebase/firestore';

export interface Event {
  id: string
  name: string
  description: string
  dateTime: Timestamp
  location: string
  city: string
  date: Date
  time: string
  teamId: string

  // Business Logic Fields
  status: boolean
  attendees: any
}
export interface HelferEvent extends Event {
  schichten: [Schicht]
}

interface Schicht {}
