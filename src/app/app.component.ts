import { Component, NgZone, OnInit } from "@angular/core";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
import {
  AlertController,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { App } from '@capacitor/app';
import { Dialog } from "@capacitor/dialog";
import { AuthService } from "./services/auth.service";
import packagejson from "./../../package.json";
import { FirebaseService } from "./services/firebase.service";
import { Router } from "@angular/router";
import { SplashScreen } from "@capacitor/splash-screen";
import { Observable, Subscription, of, switchMap, take, tap } from "rxjs";
import { User, onAuthStateChanged } from "@angular/fire/auth";
import { UserProfileService } from "./services/firebase/user-profile.service";
import { Device, DeviceId, DeviceInfo, LanguageTag } from "@capacitor/device";
import { Network, ConnectionStatus } from "@capacitor/network";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "./models/club";

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { ClubSubscriptionPage } from "./pages/club-subscription/club-subscription.page";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"],
    standalone: false
})
export class AppComponent implements OnInit {
  public email: string;
  public appVersion: string = packagejson.version;
  public buildNumber: string = packagejson.buildNumber;

  clubList$: Observable<Club[]>;


  private clubListSub: Subscription;


  user: User;
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;

  userHasTeam: boolean = false;
  userHasClub: boolean = false;

  constructor(
    private readonly swUpdate: SwUpdate,
    private readonly modalCtrl: ModalController,
    // private readonly routerOutlet: IonRouterOutlet,
    // private readonly swPush: SwPush,
    private readonly alertController: AlertController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly profileService: UserProfileService,
    private readonly router: Router,
    public readonly menuCtrl: MenuController,
    private translate: TranslateService,
    public toastController: ToastController,
    private ngZone: NgZone,

  ) {
    this.initializeApp();

    onAuthStateChanged(this.authService.auth, async (user) => {
      if (user) {
        // 0. LOGIN
        this.email = user.email;
        this.user = user;

        if (!user.emailVerified) {
          const navOnboardingEmail = await this.router.navigateByUrl('/onboarding-email');
          if (navOnboardingEmail) {
            console.log('Navigation success to onboarding Email Page');
          } else {
            console.error('Navigation ERROR to onboarding Email Page');
          }
        } else {
          console.log("E-Mail IS verified. Go ahead..")
          console.log(user.email, user.displayName, user.emailVerified)
          this.clubListSub = this.clubList$
            .pipe(
              take(1),
              tap(async (clubList) => {
                if (clubList.length == 0) {
                  console.log("NO! Club Data received. > Call Club Onboarding");
                  try {
                    const navOnboardingClub = await this.router.navigateByUrl('/onboarding-club');
                    if (navOnboardingClub) {
                      console.log('Navigation success to onboarding Club Page');
                    } else {
                      console.error('Navigation ERROR to onboarding Club Page');
                    }
                  } catch (error) {
                    console.error('Navigation Exception:', error);
                    window.location.reload();
                  }
                } else {
                  // CHECK SUBSCRIPTION FOR CLUB
                  // console.log(clubList.find((club:any)=>club.subscriptionActive == false ))

                  if (clubList.find((club: any) => club.subscriptionActive == false)) {
                    console.log("NO SUBSCRIPTION FOUND")
                    const modal = await this.modalCtrl.create({
                      component: ClubSubscriptionPage,
                      presentingElement: await this.modalCtrl.getTop(),
                      canDismiss: true,
                      showBackdrop: true,
                      componentProps: {
                        clubId: clubList.find((club: any) => club.subscriptionActive == false).id,
                      },
                    });
                    modal.present();

                    const { role } = await modal.onWillDismiss();
                    console.log(role)
                    if (role === "close" || role == "backdrop") {
                      this.authService.logout();
                    }
                  } else {
                    console.log("Club is active")
                  }

                }
              })
            )
            .subscribe();
        }
        // }


        // SEt DEVICE INFOS
        this.deviceInfo = await Device.getInfo();
        this.deviceId = await Device.getId();
        console.log(this.deviceInfo);
        // Register Native Push
        if (
          this.deviceInfo.platform == "android" ||
          this.deviceInfo.platform == "ios"
        ) {
          // this.subscribeMobileNotifications();
          this.registerNotifications();
        } else {
          // Register Web Push, if available
        }



        // this.platform.ready().then(async () => {


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
        const navLogout = await this.router.navigateByUrl('/login');
        if (navLogout) {
          console.log('Navigation SUCCESS to Logout Page');
        } else {
          console.error('Navigation ERROR to Logout Page');
        }
      }
    });


  }
  ngOnInit(): void {
    App.removeAllListeners().then(() => {
      this.registerBackButton();
    });

    this.clubList$ = this.fbService.getClubList();
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

  }

  ngOnDestroy() {
    Network.removeAllListeners();

    App.removeAllListeners();

    if (this.clubListSub) {
      this.clubListSub.unsubscribe();
    }

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

  private registerBackButton() {
    App.addListener('backButton', async ({ canGoBack }) => {
      // console.log("backbutton", canGoBack);
      // console.log(">", this.router.lastSuccessfulNavigation)
      // console.log(">>", this.router.getCurrentNavigation())
      // console.log(">>>", window.history.length);
      const modal = await this.modalCtrl.getTop()
      if (modal) {
        modal.dismiss();
        return;
      } else if (canGoBack) {
        // Navigieren Sie zurück in der App-Historie
        window.history.back();
      } else {
        // Beenden Sie die App, wenn keine vorherige Seite vorhanden ist
        App.exitApp();
      }
    });
  }

  /*async doOnboardingEmail(user) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: OnboardingPage,
      presentingElement: await this.modalCtrl.getTop(), //  this.routerOutlet.nativeEl,
      canDismiss: false,
      showBackdrop: true,
      componentProps: {
        data: user,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "close") {
      console.log(">>> close onboarding modal" + data);
    }
  }*/

  setFallbackLanguage() {
    Device.getLanguageTag().then((result: LanguageTag) => {
      if (
        result.value == "de" ||
        result.value == "fr" ||
        result.value == "en" ||
        result.value == "it"
      ) {
        console.log("Set Fallback Language to Device Language: " + result.value);
        this.translate.use(result.value);
      } else {
        console.log("Set Fallback Language to DE");
        this.translate.use("de");
        // this.translate.resetLang("de");
      }
    });
  }

  async setDefaultLanguage() {
    this.authService
      .getUser$()
      .pipe(
        take(1),
        tap((user) => (this.user = user)),
        switchMap((user) =>
          user ? this.profileService.getUserProfile(user) : of(null)
        )
      )
      .subscribe((profile) => {
        if (profile) {
          if (profile.language) {
            if (profile.language.length > 0) {
              console.log("set user langauge: " + profile.language);
              this.translate.use(profile.language);
              return;
            }
          }
        }
        this.setFallbackLanguage();
      });
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
      showDuration: 1500,
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
  enableHelferEvents(clubList) {
    return clubList && clubList.some(club => club.hasFeatureHelferEvent == true);
  }
  enableChampionship(clubList) {
    return clubList && clubList.some(club => club.hasFeatureChampionship == true);
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
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener("registration", (token: Token) => {
      // alert('Push registration success, token: ' + token.value);
      /*this.toastController.create({
        message: "Push erfolgreich registriert",
        color: "primary",
        duration: 1500,
        position: "top",
      }).then(toast=>{
        toast.present();
      });*/

      this.profileService
        .addPushSubscriber(null, this.deviceId, this.deviceInfo, token.value)
        .catch((err) => {
          console.error("Could not subscribe to notifications", err);
          // this.errorPushMessageEnable("Could not subscribe to notifications");
        })
        .then((ok) => {
          console.log(ok);
        });
    });

    PushNotifications.addListener("registrationError", (error: any) => {
      // alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      async (notification: PushNotificationSchema) => {
        // alert('Push received: ' + JSON.stringify(notification));

        console.log("PUSH MESSAGE RECEIVED");
        console.log("TYPE:  " + notification.data.type);

        if (
          notification.data.type &&
          notification.data.type === "helferEvent"
        ) {
          const { value } = await Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "Öffnen",
            cancelButtonTitle: "Abbrechen",
          })

          if (value) {
            this.ngZone.run(() => {
              this.router.navigateByUrl("/t/helfer", {
                state: notification.data,
              }).catch(e => {
                console.log(e);
              });
            });
          }

        } else if (
          notification.data.type &&
          notification.data.type === "clubEvent"
        ) {
          const { value } = await Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "Öffnen",
            cancelButtonTitle: "Abbrechen",
          })
          if (value) {
            this.ngZone.run(() => {
              this.router.navigateByUrl("/t/events", {
                state: notification.data,
              }).catch(e => {
                console.log(e);
              });
            });
          }

        } else if (
          notification.data.type &&
          notification.data.type === "clubRequest"
        ) {
          const { value } = await Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "Öffnen",
            cancelButtonTitle: "Abbrechen",
          })
          if (value) {
          }

        } else if (
          notification.data.type &&
          notification.data.type === "clubRequestAdmin"
        ) {
          const { value } = await Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "Öffnen",
            cancelButtonTitle: "Abbrechen",
          })
          if (value) {
          }

        } else if (
          notification.data.type &&
          notification.data.type === "news"
        ) {
          const { value } = await Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "Öffnen",
            cancelButtonTitle: "Abbrechen",
          })
          if (value) {
            this.ngZone.run(() => {
              this.router.navigateByUrl("/t/news", {
                state: notification.data,
              }).catch(e => {
                console.log(e);
              });
            });
          }
        } else if (
          notification.data.type &&
          notification.data.type === "clubNews"
        ) {
          const { value } = await Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "Öffnen",
            cancelButtonTitle: "Abbrechen",
          })
          if (value) {
            this.ngZone.run(() => {
              this.router.navigateByUrl("/t/news", {
                state: notification.data,
              }).catch(e => {
                console.log(e);
              });
            });
          }
        } else if (
          notification.data.type &&
          notification.data.type === "training"
        ) {
          const { value } = await Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "Öffnen",
            cancelButtonTitle: "Abbrechen",
          })
          if (value) {
            this.ngZone.run(() => {
              this.router.navigateByUrl("/t/training", {
                state: notification.data,
              }).catch(e => {
                console.log(e);
              });
            });
          }
        } else {
          Dialog.confirm({
            title: notification.title,
            message: notification.body,
            okButtonTitle: "OK",
          });
        }
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        console.log(notification);
        // alert('Push action performed: ' + JSON.stringify(notification));
      }
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
