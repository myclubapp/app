import { Component } from "@angular/core";
import { SwUpdate, VersionEvent, SwPush } from "@angular/service-worker";
import { AlertController, ModalController } from "@ionic/angular";
import { getAuth, onAuthStateChanged, getIdToken } from "firebase/auth";
import { AuthService } from "./services/auth.service";
import packagejson from "./../../package.json";
import { FirebaseService } from "./services/firebase.service";
import { Router } from "@angular/router";
import { SplashScreen } from "@capacitor/splash-screen";
import { UserProfileService } from "./services/firebase/user-profile.service";
import { getMessaging, onMessage } from "firebase/messaging";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public email: string;
  public appVersion: string = packagejson.version;
  readonly VAPID_PUBLIC_KEY =
    "BFSCppXa1OPCktrYhZN3GfX5gKI00al-eNykBwk3rmHRwjfrGeo3JXaTPP_0EGQ01Ik_Ubc2dzvvFQmOc3GvXsY";

  constructor(
    private readonly swUpdate: SwUpdate,
    private readonly swPush: SwPush,
    private readonly alertController: AlertController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly router: Router,
    private readonly userProfileService: UserProfileService
  ) {
    this.initializeApp();
    this.subscribeToNotifications();
    this.receivePushMessage();
    // this.initializeFirebase();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 0. LOGIN
        this.email = user.email;

        // 1. EMAIL VERIFIED?
        if (!user.emailVerified) {
          this.presentAlertEmailNotVerified();
        } else {
          // 2. CLUB ASSIGNED
          const userClubRefs = this.fbService
            .getUserClubRefs(user)
            .subscribe((data: any) => {
              // console.log(data);
              if (data.length === 0) {
                console.log("NO club assigned, start onboarding flow");
                this.router.navigateByUrl("onboarding", {});
              } else {
                // 3. TEAM ASSIGNED
                const userTeamRefs = this.fbService
                  .getUserTeamRefs(user)
                  .subscribe((data: any) => {
                    // console.log(data);
                    if (data.length === 0) {
                      console.log("NO TEAM assigned, start onboarding flow");
                      this.router.navigateByUrl("team-list", {});
                    }
                    userTeamRefs.unsubscribe();
                  });
              }
              userClubRefs.unsubscribe();
            });
        }

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
      } else {
        console.log("User is signed out");
        // User is signed out
        // ...
      }
    });
  }

  initializeApp(): void {
    this.hideSplashScreen();

    this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      if (event.type === "VERSION_READY") {
        this.presentAlertUpdateVersion();
      }
    });
  }

  async subscribeToNotifications() {
    const sub = await this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY,
    });
    await this.userProfileService
      .addPushSubscriber(sub)
      .catch((err) =>
        console.error("Could not subscribe to notifications", err)
      );
  }

  async receivePushMessage() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      this.alertPushMessage(payload);
      // ...
    });
  }

  async alertPushMessage(payload) {
    const alert = await this.alertController.create({
      header: "push message",
      message: payload,
      buttons: ["OK"],
    });
    alert.present();
  }

  initializeFirebase() {
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

  async hideSplashScreen() {
    // await SplashScreen.hide();
    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
  async presentAlertEmailNotVerified() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "E-Mail Adresse ist nicht verifiziert",
      subHeader: "",
      message:
        "Bitte prüfen Sie ihr E-Mail Postfach oder den Spam Ordner und aktivieren sie ihren my-club Account um fortzufahren. Sollen wir nochmals eine E-Mail senden?",
      buttons: [
        {
          text: "Nein",
          role: "cancel",
          handler: () => {
            console.log("Nein");
            this.authService.logout();
          },
        },
        {
          text: "Ja",
          handler: () => {
            console.log("Email nochmals senden");
            this.authService.sendVerifyEmail();
            this.authService.logout();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentAlertUpdateVersion() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: "App Update verfügbar",
      message: `Eine neue Version ${this.appVersion} ist verfügbar. Neue Version laden?`,
      backdropDismiss: false,
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          cssClass: "secondary",
          handler: (data) => {
            // console.log('Confirm Cancel: data');
          },
        },
        {
          text: "Laden",
          handler: async () => {
            const resolver = await this.swUpdate.activateUpdate();
            if (resolver) {
              window.location.reload();
            } else {
              console.log("Already on latest version");
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async logout() {
    console.log("logout");
    await this.authService.logout();
  }
}
