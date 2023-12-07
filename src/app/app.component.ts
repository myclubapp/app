import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { SwPush, SwUpdate, VersionEvent } from "@angular/service-worker";
import {
  AlertController,
  MenuController,
  Platform
} from "@ionic/angular";
import { AuthService } from "./services/auth.service";
import packagejson from "./../../package.json";
import { FirebaseService } from "./services/firebase.service";
import { Router } from "@angular/router";
import { SplashScreen } from "@capacitor/splash-screen";
import { Observable, Subscription, catchError, combineLatest, map, mergeMap, of, switchMap, take, tap } from "rxjs";
import { User, onAuthStateChanged } from "@angular/fire/auth";
import { UserProfileService } from "./services/firebase/user-profile.service";
import { Device, DeviceId, DeviceInfo, GetLanguageCodeResult, LanguageTag } from "@capacitor/device";
import { Network, ConnectionStatus } from "@capacitor/network";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "./models/club";
import { Team } from "./models/team";
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from "@capacitor/push-notifications";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public email: string;
  public appVersion: string = packagejson.version;

  private clubList$: Observable<Club[]>;
  private teamList$: Observable<Team[]>;
  private clubAdminList$: Observable<Club[]>;
  private teamAdminList$: Observable<Team[]>;
  user: User;
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;

  constructor(
    private readonly swUpdate: SwUpdate,
    // private readonly swPush: SwPush,
    private readonly alertController: AlertController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly profileService: UserProfileService,
    private readonly router: Router,
    public readonly menuCtrl: MenuController,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    // private platform: Platform
  ) {
    this.initializeApp();

    // https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/

    //Filter for Events, Helfer, News
    this.clubList$ = this.fbService.getClubList();
    this.clubList$.subscribe({
      next: () => {
        console.log("Club Data received");
        this.cdr.detectChanges();

        /*      this.fbService
                          .getUserClubRequestRefs(user)
                          .pipe(take(1))
                          .subscribe(async (clubRequestData: any) => {
                            console.log("clubRequestData " + clubRequestData.length);
                            if (clubRequestData.length === 0) {
                              console.log("NO club assigned, start onboarding flow");
                              await this.presentAlertNoClub();
                            } else {
                              console.log("open request available > OPEN Profile");
                              this.presentClubRequstOpen();
                            }
                            */



      },
      error: (err) => console.error("Club Error in subscription:", err),
      complete: () => console.log("Club Observable completed"),
    });
    //Filter for Trainings
    this.teamList$ = this.fbService.getTeamList();
    this.teamList$.subscribe({
      next: () => {
        console.log("Team Data received");
        this.cdr.detectChanges();

        /*
         // 3. TEAM ASSIGNED
                        this.fbService
                          .getUserTeamRefs(user)
                          .pipe(take(1))
                          .subscribe(async (teamData: any) => {
                            // console.log(data);
                            if (teamData.length === 0) {
                              console.log("NO TEAM assigned, start onboarding flow");
                              await this.presentAlertNoTeam();
                            }
                          });
        */

      },
      error: (err) => console.error("Team Error in subscription:", err),
      complete: () => console.log("Team Observable completed"),
    });

    //Create Events, Helfer, News
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.clubAdminList$.subscribe({
      next: () => {
        console.log("Club Admin Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Club Admin Error in subscription:", err),
      complete: () => console.log("Club Admin Observable completed"),
    });
    // Create Trainings
    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.teamAdminList$.subscribe({
      next: () => {
        console.log("Team Admin Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Team Admin Error in subscription:", err),
      complete: () => console.log("Team Admin Observable completed"),
    });

    onAuthStateChanged(this.authService.auth, async (user) => {
      if (user) {
        // 0. LOGIN
        this.email = user.email;
        this.user = user;
        if (!user.emailVerified) {
          this.presentAlertEmailNotVerified();
        }
        this.setDefaultLanguage();
       
        // this.platform.ready().then(async () => {
          this.deviceInfo = await Device.getInfo();
          this.deviceId = await Device.getId();
          console.log(this.deviceInfo)
          // Register Native Push
          if (this.deviceInfo.platform == 'android' || this.deviceInfo.platform == 'ios') {
            // this.subscribeMobileNotifications();
            this.registerNotifications();
          } else {
            // Register Web Push, if available
          }
        // })
        // READ USER LANGUAGE FROM DATABASE if AVAILABLE

        // ELSE GET DEVICE PRIMARY LANGUAGE
        /*Device.getLanguageCode().then((result: GetLanguageCodeResult)=>{
          console.log("language code");
          console.log(result);
        });*/
      } else {
        console.log("User is signed out");
        this.menuCtrl.enable(false, "menu");
        this.email = "";
      }
    });
  }
  ngOnInit(): void {
    Network.addListener(
      "networkStatusChange",
      async (status: ConnectionStatus) => {
        if (!status.connected) {
          // const toast = await this.toastController.create({
          //   message: "Du bist offline",
          //   duration: 3000,
          //   position: "top",
          //   buttons: [
          //     {
          //       // text:"Ok",
          //       icon: "cloud-offline-outline"
          //     }
          //   ],
          //   color: "danger",
          // });
          // await toast.present();
        } else {
          // const toast = await this.toastController.create({
          //   message: "Du bist online",
          //   duration: 1500,
          //   position: "top",
          //   color: "success",
          //   buttons: [
          //     {
          //       // text:"Ok",
          //       icon: "wifi-outline"
          //     }
          //   ],
          // });
          // await toast.present();
        }
      }
    );

    // this.requestSubscription();
    /*this.swPush.messages.subscribe((message) => {
      console.log(message);

      this.alertPushMessage(message);
    });*/
  }

  ngOnDestroy() {
    Network.removeAllListeners();

    //     this.pushNotificationClickSubscription.unsubscribe();
    //    this.pushMessageSubscription.unsubscribe();
    //    this.swPush.unsubscribe();
    // this.userClubRefs.unsubscribe();
    // this.userTeamRefs.unsubscribe();
  }

  initializeApp(): void {
    this.showSplashScreen();
    this.setDefaultLanguage();
    this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      if (event.type === "VERSION_READY") {
        this.presentAlertUpdateVersion();
      }
    });
  }

  setFallbackLanguage() {
    Device.getLanguageTag().then((result: LanguageTag) => {
      if (result.value == "de" || result.value == "fr" || result.value == "en" || result.value == "it") {
        console.log("Set Fallback Language to " + result.value);
        this.translate.setDefaultLang(result.value);
      } else {
        console.log("Set Fallback Language to EN")
        this.translate.setDefaultLang("en");
      }
    });
  }

  async setDefaultLanguage() {
    this.authService.getUser$().pipe(
      take(1),
      tap(user => this.user = user),
      switchMap(user => user ? this.profileService.getUserProfile(user) : of(null))
    ).subscribe(profile => {
      if (profile) {
        if (profile.language) {
          if (profile.language.length > 0) {
            this.translate.setDefaultLang(profile.language);
            return;
          }
        }
      }
      this.setFallbackLanguage()
    })
  }


  /*async requestSubscription() {
    if (!this.swPush.isEnabled) {
      console.log("Notification is not enabled.");
      return;
    }

    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();

    const pushSubscription = await this.swPush.requestSubscription({
      serverPublicKey:
        "BFSCppXa1OPCktrYhZN3GfX5gKI00al-eNykBwk3rmHRwjfrGeo3JXaTPP_0EGQ01Ik_Ubc2dzvvFQmOc3GvXsY",
    });

    await this.profileService.addPushSubscriber(
      pushSubscription,
      this.deviceId,
      this.deviceInfo,
      ""
    );
  }

  async alertPushMessage(message) {
    const alert = await this.alertController.create({
      header: message.title,
      message: message.message,
      buttons: ["OK"],
    });
    alert.present();
  }*/

  // initializeFirebase() {
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
  //}

  async showSplashScreen() {
    // await SplashScreen.hide();
    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }

  async presentAlertNoClub() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Kein Club gefunden",
      subHeader: "",
      message:
        "Damit du myclub nutzen kannst, musst du zuerst einem Club beitreten. Möchtest du einem Club beitreten?",
      buttons: [
        {
          text: "Ja",
          handler: () => {
            this.router.navigateByUrl("onboarding", {});
          },
        },
        {
          text: "Logout",
          role: "cancel",
          handler: () => {
            this.authService.logout();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentClubRequstOpen() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Offene Club-Anfragen vorhanden",
      subHeader: "",
      message: "Du hast berets offene Club anfragen.",
      buttons: [
        {
          text: "Neuen Club beitreten",
          handler: () => {
            this.router.navigateByUrl("onboarding", {});
          },
        },
        {
          text: "Profil verwalten",
          role: "cancel",
          handler: () => {
            this.router.navigateByUrl("profile", {});
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentAlertNoTeam() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Kein Team gefunden",
      subHeader: "",
      message:
        "Du wurdest noch keinem Team zugeteilt aber das ist kein Problem. Du kannst ganz einfach einem Team beitreten oder deinen Club Antrag im Profil wieder löschen.",
      buttons: [
        {
          text: "Team beitreten",
          handler: () => {
            this.router.navigateByUrl("team-list", {});
          },
        },
        {
          text: "Profil anzeigen",
          handler: () => {
            this.router.navigateByUrl("profile", {});
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentAlertEmailNotVerified() {
    /*const alert = await this.alertController.create({
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
            this.router.navigateByUrl("news", {});
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
    */
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
          handler: (data: any) => {
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
  /*async addListeners() {
    await PushNotifications.addListener('registration', async token => {
      console.info('Registration token: ', token.value);
      if (token.value) {
        const profileUpdate = await this.profileService
          .addPushSubscriber(null, this.deviceId, this.deviceInfo, token.value)
          .catch((err) => {
            console.error("Could not subscribe to notifications", err);
            // this.errorPushMessageEnable("Could not subscribe to notifications");
          });
      }
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
      this.alertController.create({
        header: notification.title,
        message: notification.body,
      }).then(alert=>{
        alert.present();
      })
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
  }*/
  async registerNotifications() {

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success, token: ' + token.value);
        this.profileService
          .addPushSubscriber(null, this.deviceId, this.deviceInfo, token.value)
          .catch((err) => {
            console.error("Could not subscribe to notifications", err);
            // this.errorPushMessageEnable("Could not subscribe to notifications");
          });
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        // alert('Push received: ' + JSON.stringify(notification));
        this.alertController.create({
          header: notification.title,
          message: notification.body,
        }).then(alert=>{
          alert.present();
        })
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );



// OLD CODE
/*
    let permStatus = await PushNotifications.checkPermissions();
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }
    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }
    PushNotifications.removeAllListeners();
    await this.addListeners();
    await PushNotifications.register();
  }

  subscribeMobileNotifications() {
   */
  }
}
