import { Timestamp } from "firebase/firestore";

export interface UserCredentialLogin {
  email: string;
  password: string;
}
export interface Profile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  phonenumber: number;
  dateOfBirth: Timestamp;
  streetAndNumber: string;
  street?: string;
  houseNumber?: string;
  postalcode: number;
  city: string;
  licenseNumber: string;
  gender?: string; // m, w, männlich, weiblich
  ahvNumber?: string;
  nationality?: string; // z.B. CH, DE, IT
  country?: string; // z.B. CH, DE, IT
  settingsPush: boolean;
  settingsPushNews: boolean;
  settingsPushNewsVerband: boolean;
  settingsPushTraining: boolean;
  settingsPushChampionship: boolean;
  settingsPushEvent: boolean;
  settingsPushHelfer: boolean;
  settingsEmail: boolean;
  settingsEmailReporting: boolean;
  language: string;
  favTeam: string;
  favClub: string;
  roles: [string];
  kids: any[];
  helferPunkte: number;

  // Business Logic Fields
  isAdmin: boolean;
  isParent: boolean;
}
