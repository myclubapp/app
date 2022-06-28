import { Component } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { AlertController, ModalController } from '@ionic/angular';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthService } from './services/auth.service';
import packagejson from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public email: string;
  public appVersion: string = packagejson.version;
  constructor(
    private swUpdate: SwUpdate,
    private alertController: AlertController,
    private authService: AuthService,
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

    this.swUpdate.versionUpdates.subscribe((event:VersionEvent) => {
      if (event.type === 'VERSION_READY'){
        this.presentAlert();
      }
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
      header: 'App Update verfügbar',
      message: `Eine neue Version ${this.appVersion} ist verfügbar. Neue Version laden?`,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            //console.log('Confirm Cancel: data');
          },
        },
        {
          text: 'Laden',
          handler: async () => {
            const resolver = await this.swUpdate.activateUpdate();
            if (resolver){
              window.location.reload();
            } else {
              console.log('Already on latest version');
            }
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
