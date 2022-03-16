import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  User
} from "@angular/fire/auth";
import { Observable } from 'rxjs';

// import firebase from 'firebase/compat/app';
/* import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore'; */

/******************************************************************************************
 *  DOCS https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
*******************************************************************************************/

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;
  constructor(
    // private firestore: Firestore,
    private auth: Auth,
    private router: Router,
  ) {
  // or use this version...
  this.user$ = authState(auth);
   }


  /* getUser(): Promise<User> {
    return authState(this.auth).pipe(first()).toPromise();
  }*/
  async getUser(): Promise<User | null> {
    return await this.user$.pipe(first()).toPromise();
  }
  


   login( email: string, password: string){
    return signInWithEmailAndPassword(this.auth ,email ,password);
  }

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<UserCredential> {
    try {
      const newUserCredential: UserCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      /*const userProfileDocRef = doc(this.firestore,`userProfile/${newUserCredential.user.uid}/inviteList`);

      updateDoc(userProfileDocRef, {
        firstName: firstName,
        lastName: lastName,
        email: newUserCredential.user.email
      });*/
  
      return newUserCredential;
      
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string): Promise < void > {
    return sendPasswordResetEmail(this.auth, email);
  }

  async logout(): Promise < void > {
    await signOut(this.auth);
    //firebase.firestore().clearPersistence();
    await this.router.navigateByUrl('/logout');
  }


}
