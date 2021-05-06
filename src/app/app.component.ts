import {Component} from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import {PushNotificationService} from './services/push-notification.service';

import {AlertController} from '@ionic/angular';
import {SwUpdate} from '@angular/service-worker';
import {AuthService} from './services/auth.service';

import {Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed} from '@capacitor/core';

const {PushNotifications} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private swUpdate: SwUpdate,
    private alertController: AlertController,
    private pushNotificationService: PushNotificationService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token: PushNotificationToken) => {
      alert('Push registration success, token: ' + token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      alert('Push received: ' + JSON.stringify(notification));
    });

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed', (notification: PushNotificationActionPerformed) => {
      alert('Push action performed: ' + JSON.stringify(notification));
    });

    /*this.profileService.getUserProfile().then(userProfileSnapshot => {
      if (userProfileSnapshot && userProfileSnapshot.data()) {
        this.displayName = userProfileSnapshot.data().firstName;
      }
    });*/

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
  }

  initializeApp(): void {
    if (this.swUpdate.available) {
      this.swUpdate.available.subscribe(() => {
        this.presentAlert();
      });
    }
    this.pushNotificationService.requestPermission();
    this.pushNotificationService.receiveMessage();
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
