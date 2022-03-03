import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
 import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore'; 

/******************************************************************************************
 *  DOCS https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
*******************************************************************************************/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firestore: Firestore,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {

   }


   getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

   login( email: string, password: string): Promise < firebase.auth.UserCredential > {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<firebase.auth.UserCredential> {
    try {
      const newUserCredential: firebase.auth.UserCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

       const userProfileDocRef = doc(this.firestore,`userProfile/${newUserCredential.user.uid}/inviteList`);

      updateDoc(userProfileDocRef, {
        firstName: firstName,
        lastName: lastName,
        email: newUserCredential.user.email
      });
  
      return newUserCredential;
      
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string): Promise < void > {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  async logout(): Promise < void > {
    await this.afAuth.signOut();
    firebase.firestore().clearPersistence();
    await this.router.navigateByUrl('/logout');
  }


}
