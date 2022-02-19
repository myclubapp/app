import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router,
  ) {

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

      await this.afStore.collection('userProfile').doc(newUserCredential.user.uid).set( {
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

  logout(): Promise < void > {
    // this.afAuth.signOut();
    // firebase.firestore().clearPersistence();
    return this.afAuth.signOut();
    this.router.navigateByUrl('/logout');
  }


}
