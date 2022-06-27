import { Timestamp } from "firebase/firestore";

export interface Training {
  id: string;
  name:  string;
  description:  string;
  dateTime: Timestamp;
  location:  string;

  teamId: string;
  
  // Business Logic Fields 
  status: boolean;
  attendees: any;
}

