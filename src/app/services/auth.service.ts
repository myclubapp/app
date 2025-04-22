import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
// import { AngularFireAuth } from '@angular/fire/compat/auth';

import {
  Auth,
  getAuth,
  authState,
  verifyBeforeUpdateEmail,
  // connectAuthEmulator,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateEmail,
  signOut,
  updateProfile,
  UserCredential,
  deleteUser,
  User,
} from "@angular/fire/auth";
import { Observable } from "rxjs";

// import firebase from 'firebase/compat/app';
import { Firestore, doc, setDoc } from "@angular/fire/firestore";

/******************************************************************************************
 *  DOCS https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
 *******************************************************************************************/

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<User | null>;
  constructor(
    // private readonly firestore: Firestore,
    private readonly firestore: Firestore,
    // public auth: Auth,
    public auth: Auth = inject(Auth),

    private readonly router: Router
  ) {
    // or use this version...
    this.user$ = authState(this.auth);
    this.auth = getAuth();
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
    console.log("resend verification for user " + this.auth.currentUser.email)
    return await sendEmailVerification(this.auth.currentUser);
  }

  async verifyBeforeUpdateEmail(email) {
    this.auth.currentUser.getIdToken(true);
    return await verifyBeforeUpdateEmail(this.auth.currentUser, email)
    
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
    return signOut(this.auth);
  
    // firebase.firestore().clearPersistence();
    /*const navLogout = await this.router.navigateByUrl("/logout");
    if (navLogout) {
      console.log('Navigation success to Logout Page');
    } else {
      console.error('Navigation ERROR to Logout Page');
    }*/
  }

  async deleteProfile() {
    const user = this.auth.currentUser;

    return deleteUser(user);
  }
}
