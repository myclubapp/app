import {
  AuthService
} from './../auth.service';
import {
  Injectable
} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {
  AngularFireStorage,
  AngularFireStorageReference
} from '@angular/fire/storage';
import {
  UploadTaskSnapshot
} from '@angular/fire/storage/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public userProfile: firebase.default.firestore.DocumentReference;
  public currentUser: firebase.default.User;

  constructor(private authService: AuthService,
    private afStorage: AngularFireStorage) {}

  async getUserProfileById(id): Promise < firebase.default.firestore.DocumentSnapshot > {

    let userProfile = firebase.default.firestore().doc(`userProfile/${id}`);
    return userProfile.get();
  }

  async uploadIdentityFront(imageURL: string): Promise <any> {
    const user: firebase.default.User = await this.authService.getUser();
    const storageRef: AngularFireStorageReference = this.afStorage.ref(
      `/userProfile/${user.uid}/identityFront/`
    );

    const uploadProcess: UploadTaskSnapshot = await storageRef.putString(
      imageURL,
      'base64', {
        contentType: 'image/png'
      }
    );

    const downLoadURL: string = await storageRef.getDownloadURL().toPromise();
    return firebase.default.firestore().collection("userProfile").doc(`${user.uid}`)
      .update({
        identityFront: downLoadURL
      });
  }
  async uploadIdentityBack(imageURL: string): Promise <any> {
    const user: firebase.default.User = await this.authService.getUser();
    const storageRef: AngularFireStorageReference = this.afStorage.ref(
      `/userProfile/${user.uid}/identityBack/`
    );

    const uploadProcess: UploadTaskSnapshot = await storageRef.putString(
      imageURL,
      'base64', {
        contentType: 'image/png'
      }
    );

    const downLoadURL: string = await storageRef.getDownloadURL().toPromise();
    return firebase.default.firestore().collection("userProfile").doc(`${user.uid}`)
      .update({
        identityBack: downLoadURL
      });
  }
  async verbandAgreement(imageURL: string): Promise <any> {
    const user: firebase.default.User = await this.authService.getUser();
    const storageRef: AngularFireStorageReference = this.afStorage.ref(
      `/userProfile/${user.uid}/verbandAgreement/`
    );

    const uploadProcess: UploadTaskSnapshot = await storageRef.putString(
      imageURL,
      'base64url', {
        contentType: 'application/pdf'
      }
    );

    const downLoadURL: string = await storageRef.getDownloadURL().toPromise();
    return firebase.default.firestore().collection("userProfile").doc(`${user.uid}`)
      .update({
        verbandAgreement: downLoadURL
      });
  }

  async userProfilePicture(imageURL: string): Promise < any > {
    const user: firebase.default.User = await this.authService.getUser();
    const storageRef: AngularFireStorageReference = this.afStorage.ref(
      `/userProfile/${user.uid}/profilePicture/`
    );

    const uploadProcess: UploadTaskSnapshot = await storageRef.putString(
      imageURL,
      'base64', {
        contentType: 'image/png'
      }
    );

    const downLoadURL: string = await storageRef.getDownloadURL().toPromise();
    return firebase.default.firestore().collection("userProfile").doc(`${user.uid}`)
      .update({
        picture: downLoadURL
      });
  }


  async getUserProfile(): Promise < firebase.default.firestore.DocumentSnapshot > {
    const user: firebase.default.User = await this.authService.getUser();
    if (user){

      this.currentUser = user;
      this.userProfile = firebase.default.firestore().doc(`userProfile/${user.uid}`);
      return this.userProfile.get();
    }else{
      return;
    }
  }

  async getUserProfileChanges() {
    const user: firebase.default.User = await this.authService.getUser();
    if (user){

      this.currentUser = user;
      return firebase.default.firestore().doc(`userProfile/${user.uid}`);

    }else{
      return;
    }
  }

  updatePushToken(pushToken: string): Promise < void > {
    return this.userProfile.set({
      pushToken: pushToken
    }, {
      merge: true
    });
  }


  save(profile:any){
    return this.userProfile.set({
      firstName: profile.firstName || "",
      lastName: profile.lastName || "",
      street: profile.street || "",
      plz: profile.plz || "",
      location: profile.location  || "",
      handy: String(profile.handy) || "",
      language: profile.language  || "",
      gender: profile.gender || "",
      nationality: profile.nationality || "",
      jsnumber: profile.jsnumber || "",
      license: profile.license || ""
    }, {
      merge: true
    });
  }


  async supportAnfrage(support:any){
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().doc(`userProfile/${user.uid}`).collection('support').add({
      "name": support.name,
      "message": support.message
    });
  }

  async deleteAccount(profile:any){
    const user: firebase.default.User = await this.authService.getUser();
    console.log(user.uid);
    return firebase.default.firestore().doc(`userProfile/${user.uid}`).set({
      "status": "delete"
    },{
      merge: true
    });
    
  }


  updateName(firstName: string, lastName: string): Promise < void > {
    return this.userProfile.set({
      firstName,
      lastName
    }, {
      merge: true
    });
  }

  updateDOB(birthDate: string): Promise < void > {
    return this.userProfile.set({
      birthDate
    }, {
      merge: true
    });
  }

  async updateEmail(newEmail: string, password: string): Promise < void > {
    try {
      const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
        this.currentUser.email,
        password
      );

      await this.currentUser.reauthenticateWithCredential(credential);
      await this.currentUser.updateEmail(newEmail);
      return this.userProfile.set({
        email: newEmail
      }, {
        merge: true
      });
    } catch (error) {
      console.error(error);
    }
  }
  async updatePassword(
    newPassword: string,
    oldPassword: string
  ): Promise < void > {
    try {
      const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
        this.currentUser.email,
        oldPassword
      );

      await this.currentUser.reauthenticateWithCredential(credential);
      return this.currentUser.updatePassword(newPassword);
    } catch (error) {
      console.error(error);
    }
  }


  async setAGB(status): Promise < any > {
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection("userProfile").doc(`${user.uid}`)
      .update({
        agb: status
      });
  }
  async setTutorial(status): Promise < any > {
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection("userProfile").doc(`${user.uid}`)
      .update({
        tutorial: status
      });
  }



}