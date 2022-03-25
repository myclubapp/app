import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';

// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/app';
import { AuthService } from './services/auth.service';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public email: string;

  constructor(
    private swUpdate: SwUpdate,
    private alertController: AlertController,
    private authService: AuthService,
    // private modalController: ModalController,

    private router: Router,
  ) {
    this.initializeApp();
    // this.initializeFirebase();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.email = user.email;

        if (!user.emailVerified){
          this.presentAlertEmailNotVerified();
        }
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  initializeApp(): void {
    this.swUpdate.versionUpdates.subscribe(() => {
      this.presentAlert();
    });
  }

  initializeFirebase(){

    // https://cloud.google.com/firestore/docs/manage-data/enable-offline
    // The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
    // for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
    // to disable clean-up.
    /*
    firebase.firestore().settings({
      cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    });

    firebase.firestore().enablePersistence()
      .catch(function (err) {
        if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
        } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
        }
      });
    // Subsequent queries will use persistence, if it was enabled successfully
    */

  }


  async presentAlertEmailNotVerified() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'E-Mail Adresse ist nicht verifiziert',
      subHeader: '',
      message: 'Bitte prüfen Sie ihr E-Mail Postfach oder den Spam Ordner und aktivieren sie ihren my-club Account um fortzufahren. Sollen wir nochmals eine E-Mail senden?',
      buttons: [{
        text: "Nein",
        role: 'cancel',
        handler: () =>{
          console.log("Nein");
          this.authService.logout();
        }
      },
      {
        text: "Ja",
        handler: () =>{
          console.log("Email nochmals senden");
          this.authService.sendVerifyEmail();
          this.authService.logout();

        }
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Neue Version',
      message: 'Eine neue Version ist verfügbar. Neue Version laden?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Laden',
          handler: () => {
            window.location.reload();
            //console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
  async logout(){
    console.log("logout");
    await this.authService.logout();
    

  }
}
