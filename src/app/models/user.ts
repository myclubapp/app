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
  phone: number;
  dateOfBirth: Timestamp;
  settingsPush: boolean;
  settingsEmail: boolean;
  settingsEmailReporting: boolean;

  // Business Logic Fields
  isAdmin: boolean;
}
