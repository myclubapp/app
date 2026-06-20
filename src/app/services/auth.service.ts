import { Injectable, Injector, runInInjectionContext } from "@angular/core";
import { Router } from "@angular/router";
import { filter, first, shareReplay, switchMap } from "rxjs/operators";
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
import { Observable, Subject, defer, from } from "rxjs";

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
    // Use the user() Observable from @angular/fire/auth, always created within an
    // injection context so AngularFire can zone-wrap it (avoids the dev-mode warning
    // "Firebase API called outside injection context"). shareReplay keeps a single
    // onIdTokenChanged listener shared across all getUser$() subscribers.
    this.user$ = defer(() =>
      runInInjectionContext(this.injector, () =>
        // Wait until Firebase has restored the persisted auth state before emitting.
        // On iOS/Capacitor (indexedDBLocalPersistence) the initial restore is slow,
        // and user() would otherwise emit a transient `null` first. Consumers that
        // gate data loading with take(1)/first() grab that null and short-circuit
        // (e.g. `if (!user) return of([])`), showing empty/skeleton until a later
        // re-subscription (tab switch) hits the resolved user — that is the "data
        // only loads after switching tabs" bug. authStateReady() guarantees the
        // first emission is the settled state (real user, or a genuine logout null).
        from(this.auth.authStateReady()).pipe(switchMap(() => user(this.auth))),
      ),
    ).pipe(shareReplay({ bufferSize: 1, refCount: false }));
    // this.auth = getAuth(); // Removed: This was causing "Firebase API called outside injection context"
    // connectAuthEmulator(this.auth, 'http://localhost:8100')
  }

  getUser$() {
    // console.log("getUser auth service");
    return this.user$.pipe(first());
  }

  /**
   * Like getUser$() but WAITS for an authenticated (non-null) user instead of
   * emitting a transient null. Use this to gate data-loading chains: it avoids
   * the race where navigating before auth state is restored yields null and
   * (previously) threw "User not found", which errored the stream and left the
   * page stuck on its skeleton until the view was re-created (e.g. tab switch).
   *
   * Do NOT use on pre-auth screens (login/onboarding) — it never emits while
   * logged out. Use getUser$() there.
   */
  getAuthenticatedUser$() {
    return this.user$.pipe(
      filter((user): user is User => !!user),
      first(),
    );
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Reads auth.currentUser within an injection context so AngularFire can
   * zone-wrap it (avoids the dev-mode "Firebase API called outside injection
   * context" warning).
   */
  private getCurrentUser(): User | null {
    return runInInjectionContext(this.injector, () => this.auth.currentUser);
  }

  async sendVerifyEmail() {
    const user = this.getCurrentUser();
    user.getIdToken(true);
    console.log("resend verification for user " + user.email);
    return await sendEmailVerification(user);
  }

  async verifyBeforeUpdateEmail(email) {
    const user = this.getCurrentUser();
    user.getIdToken(true);
    return await verifyBeforeUpdateEmail(user, email);
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
    return updateEmail(this.getCurrentUser(), newEmail);
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
      const user = this.getCurrentUser();
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
    const user = this.getCurrentUser();

    return deleteUser(user);
  }
}
