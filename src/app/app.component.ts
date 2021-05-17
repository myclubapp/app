import {Component} from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import {AlertController} from '@ionic/angular';
import {SwUpdate} from '@angular/service-worker';
//import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    //private authService: AuthService,
    private swUpdate: SwUpdate,
    private alertController: AlertController,

  ) {
    this.initializeApp();

    firebase.default.auth().onAuthStateChanged((user)=> {
      if (user) {
        // User is signed in.
        console.log('User is signed in.');
      } else {
        // No user is signed in.
        console.log(' No user is signed in.');
      }
    });

    // https://cloud.google.com/firestore/docs/manage-data/enable-offline
    // The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
    // for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
    // to disable clean-up.
    firebase.default.firestore().settings({
      cacheSizeBytes: firebase.default.firestore.CACHE_SIZE_UNLIMITED,
    });

    firebase.default
      .firestore()
      .enablePersistence()
      .catch((err)=> {
        if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
        } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
        }
      });
    // Subsequent queries will use persistence, if it was enabled successfully
  }

  initializeApp(): void {
    if (this.swUpdate.available) {
      this.swUpdate.available.subscribe(() => {
        this.presentAlert();
      });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Neue Version',
      message: 'Eine neue Version ist verfügbar. Neue Version laden?',
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
}
