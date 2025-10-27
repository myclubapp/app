import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
// import { AngularFireAuth } from '@angular/fire/compat/auth';

import {
  Auth,
  user,
  verifyBeforeUpdateEmail,
  // connectAuthEmulator,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateEmail,
  signOut,
  UserCredential,
  deleteUser,
  User,
} from "@angular/fire/auth";
import { Observable, Subject } from "rxjs";

// import firebase from 'firebase/compat/app';
import {
  Firestore,
  doc,
  setDoc,
  clearIndexedDbPersistence,
} from "@angular/fire/firestore";

/******************************************************************************************
 *  DOCS https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
 *******************************************************************************************/

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<User | null>;
  private logoutSubject = new Subject<void>();
  public logout$ = this.logoutSubject.asObservable();

  constructor(
    // private readonly firestore: Firestore,
    private readonly firestore: Firestore,
    // public auth: Auth,
    public auth: Auth, // = inject(Auth),

    private readonly router: Router,
    private readonly injector: Injector,
  ) {
    // Use the user() Observable from @angular/fire/auth which is injection-context aware
    this.user$ = user(this.auth);
    // this.auth = getAuth(); // Removed: This was causing "Firebase API called outside injection context"
    // connectAuthEmulator(this.auth, 'http://localhost:8100')
  }

  getUser$() {
    // console.log("getUser auth service");
    return this.user$.pipe(first());
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async sendVerifyEmail() {
    this.auth.currentUser.getIdToken(true);
    console.log("resend verification for user " + this.auth.currentUser.email);
    return await sendEmailVerification(this.auth.currentUser);
  }

  async verifyBeforeUpdateEmail(email) {
    this.auth.currentUser.getIdToken(true);
    return await verifyBeforeUpdateEmail(this.auth.currentUser, email);
  }

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<UserCredential> {
    try {
      const newUserCredential: UserCredential =
        await createUserWithEmailAndPassword(this.auth, email, password);
      console.log(newUserCredential);
      // const userProfileRef = collection(this.firestore, 'userProfile');
      const userProfileDocRef = doc(
        this.firestore,
        `userProfile/${newUserCredential.user.uid}`,
      );
      await setDoc(userProfileDocRef, {
        firstName,
        lastName,
        email: newUserCredential.user.email,
      });
      // wird im backend gemacht
      /*await updateProfile(this.auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
        photoURL: "https://randomuser.me/api/portraits/lego/1.jpg",
      });*/

      return newUserCredential;
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(email: string): Promise<void> {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async updateEmail(newEmail: string): Promise<void> {
    // verifyBeforeUpdateEmail
    return updateEmail(this.auth.currentUser, newEmail);
  }

  async logout(): Promise<any> {
    try {
      // 1. Clear all service caches first
      this.clearAllCaches();

      // 2. Sign out from Firebase Auth
      await signOut(this.auth);

      // 3. Clear Firebase Firestore persistence
      try {
        await clearIndexedDbPersistence(this.firestore);
        console.log("Firebase persistence cleared successfully");
      } catch (error) {
        // This might fail if there are active listeners, which is normal
        console.log(
          "Could not clear Firebase persistence (normal if listeners are active):",
          error.message,
        );
      }

      // 4. Navigate to logout page
      const navLogout = await this.router.navigateByUrl("/logout");
      if (navLogout) {
        console.log("Navigation success to Logout Page");
      } else {
        console.error("Navigation ERROR to Logout Page");
      }

      return true;
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  }

  /**
   * Clears all cached data from all services
   */
  private clearAllCaches(): void {
    try {
      // Emit logout event to notify all services
      this.logoutSubject.next();
      console.log("Logout event emitted to clear all service caches");
    } catch (error) {
      console.error("Error clearing caches:", error);
    }
  }

  /**
   * Validates and refreshes the authentication token
   * @returns Promise<boolean> - true if token is valid/refreshed, false if expired/invalid
   */
  async validateAndRefreshToken(): Promise<boolean> {
    try {
      const user = this.auth.currentUser;
      if (!user) {
        console.log("No user found - cannot validate token");
        return false;
      }

      // Force token refresh to check if it's still valid
      const token = await user.getIdToken(true);

      if (!token) {
        console.error("Token refresh failed - no token returned");
        return false;
      }

      console.log("Token successfully refreshed");
      return true;
    } catch (error) {
      console.error("Token validation failed:", error);

      // Check for specific auth errors
      if (
        error.code === "auth/user-token-expired" ||
        error.code === "auth/user-disabled" ||
        error.code === "auth/requires-recent-login" ||
        error.code === "auth/network-request-failed"
      ) {
        console.error("Auth error detected - token is invalid:", error.code);
        return false;
      }

      return false;
    }
  }

  async deleteProfile() {
    const user = this.auth.currentUser;

    return deleteUser(user);
  }
}
