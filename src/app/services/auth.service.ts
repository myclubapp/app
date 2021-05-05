import {
  Injectable
} from '@angular/core';
import {
  AngularFireAuth
} from '@angular/fire/auth';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import {
  first
} from 'rxjs/operators';


import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId: string;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  getUser(): Promise < firebase.default.User > {
    return this.afAuth.authState.pipe(first()).toPromise();
  }


  async checkUserhasTeamAdminForId(teamId): Promise < any >{
    let user = await this.getUser();
    let teamAdminListRef = await this.firestore.collection('userProfile').doc(user.uid).collection('teamAdminList').doc(`${teamId}`).get().toPromise();
     if (teamAdminListRef.exists){
      console.log("has admin");
      return true;
     }else{
        return false;
    }
  }
  async checkUserhasClubAdminForId(clubId): Promise < any >{
    let user = await this.getUser();
    let clubAdminList = await this.firestore.collection('userProfile').doc(user.uid).collection('clubAdminList').doc(`${clubId}`).get().toPromise();
    if (clubAdminList.exists){
      console.log("has admin");
      return true;
    }else{
       return false;
   }
 }


  async checkUserhasTeamAdmin(): Promise < any >{
    let user = await this.getUser();
    let teamAdminListRef = await this.firestore.collection('userProfile').doc(user.uid).collection('teamAdminList').get().toPromise();
    for (let snapshot of teamAdminListRef.docs){
      if (snapshot.data()){
        return true;
      }else{
        return false;
      }
    }
  }
  async checkUserhasClubAdmin(): Promise < any >{
    let user = await this.getUser();
    let clubAdminList = await this.firestore.collection('userProfile').doc(user.uid).collection('clubAdminList').get().toPromise();
    for (let snapshot of clubAdminList.docs){
      if (snapshot.data()){
        return true;
      }else{
        return false;
      }
    }
  }

 /* async getAdmin(){
    let authState = await this.afAuth.authState.pipe(first()).toPromise();
    let token = await authState.getIdTokenResult();
    if (token.claims.admin){

    }
  }*/
    


  login(
    email: string,
    password: string
  ): Promise < firebase.auth.UserCredential > {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signup(
    email: string,
    password: string
  ): Promise < firebase.auth.UserCredential > {
    try {
      const newUserCredential: firebase.auth.UserCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.firestore
        .doc(`userProfile/${newUserCredential.user.uid}`)
        .set({
          email
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

    firebase.default.firestore().clearPersistence();

    return this.afAuth.signOut();
  }
}