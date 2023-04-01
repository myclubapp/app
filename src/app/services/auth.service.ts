import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
// import { AngularFireAuth } from '@angular/fire/compat/auth';

import {
  Auth,
  getAuth,
  authState,
  // connectAuthEmulator,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
  deleteUser,
  User,
} from "@angular/fire/auth";
import { Observable } from "rxjs";

// import firebase from 'firebase/compat/app';
import {
  Firestore,
  doc,
  setDoc,
} from "@angular/fire/firestore";

/******************************************************************************************
 *  DOCS https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
 *******************************************************************************************/

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<User | null>;
  constructor(
    private readonly firestore: Firestore,
    public auth: Auth,
    private readonly router: Router
  ) {
    // or use this version...
    this.user$ = authState(auth);
    this.auth = getAuth();
    // connectAuthEmulator(this.auth, 'http://localhost:8100')
  }

  /* getUser(): Promise<User> {
    return authState(this.auth).pipe(first()).toPromise();
  } */
  async getUser(): Promise<User | null> {
    // console.log("getUser auth service");
    return await this.user$.pipe(first()).toPromise();
  }

  getUser$() {
    // console.log("getUser auth service");
    return this.user$.pipe(first());
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async sendVerifyEmail() {
    return await sendEmailVerification(this.auth.currentUser);
  }

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<UserCredential> {
    try {
      const newUserCredential: UserCredential =
        await createUserWithEmailAndPassword(this.auth, email, password);
      console.log(newUserCredential);
      // const userProfileRef = collection(this.firestore, 'userProfile');
      const userProfileDocRef = doc(
        this.firestore,
        `userProfile/${newUserCredential.user.uid}`
      );
      await setDoc(userProfileDocRef, {
        firstName,
        lastName,
        email: newUserCredential.user.email,
      });
      await updateProfile(this.auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
        photoURL: "https://randomuser.me/api/portraits/lego/1.jpg",
      });

      return newUserCredential;
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(email: string): Promise<void> {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    // firebase.firestore().clearPersistence();
    await this.router.navigateByUrl("/logout");
  }

  async deleteProfile() {
    const user = this.auth.currentUser;

    deleteUser(user)
      .then(() => {
        // User deleted.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  }
}
