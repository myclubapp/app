import {
  AlertController
} from '@ionic/angular';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  SwUpdate
} from '@angular/service-worker';
import {
  AuthService
} from './services/auth.service';
import {
  Router
} from '@angular/router';
import {
  PushNotificationService
} from './services/push-notification.service';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('splash',{static:false})splash: ElementRef;
  
  public hidden: boolean = true;
  constructor(
    private router: Router,
    //private profileService: ProfileService,
    private authService: AuthService,
    private swUpdate: SwUpdate,
    private alertController: AlertController,
    private pushNotificationService: PushNotificationService
  ) {
    this.initializeApp();
  }

  ngOnInit() {

    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );



    /*this.profileService.getUserProfile().then(userProfileSnapshot => {
      if (userProfileSnapshot && userProfileSnapshot.data()) {
        this.displayName = userProfileSnapshot.data().firstName;
      }
    });*/

    // https://cloud.google.com/firestore/docs/manage-data/enable-offline
    // The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
    // for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
    // to disable clean-up.
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

  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
  initializeApp(): void {
    if (this.swUpdate.available) {
      this.swUpdate.available.subscribe(() => {
        this.presentAlert();
      });
    }
    this.pushNotificationService.requestPermission();
    this.pushNotificationService.receiveMessage();

    setTimeout(()=>{
      this.hidden = false;
      //this.splash.nativeElement.style.display = "none";
    },3500);

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Neue Version',
      message: 'Eine neue Version ist verfügbar. Neue Version laden?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Laden',
        handler: () => {
          window.location.reload();
          //console.log('Confirm Okay');
        }
      }]
    });

    await alert.present();
  }
}