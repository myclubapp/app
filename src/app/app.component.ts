import { AfterViewInit, Component, NgZone, OnInit } from "@angular/core";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Platform } from "@ionic/angular";
import { SafeArea } from "capacitor-plugin-safe-area";

import {
  AlertController,
  MenuController,
  ModalController,
} from "@ionic/angular";
import { App } from "@capacitor/app";
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
import { UiService } from "./services/ui.service";

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { ClubSubscriptionPage } from "./pages/club-subscription/club-subscription.page";
import { lastValueFrom } from "rxjs";
import { HttpClient } from "@angular/common/http";

// Add this to your app.component.ts to register Swiper globally
// src/app/app.component.ts
import { register } from "swiper/element/bundle";

// Register Swiper custom elements
register();

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  standalone: false,
})
export class AppComponent implements OnInit, AfterViewInit {
  public email: string;
  public appVersion: string = packagejson.version;
  public buildNumber: string = packagejson.buildNumber;

  clubList$: Observable<Club[]>;

  user: User;
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;

  userHasTeam: boolean = false;
  userHasClub: boolean = false;

  constructor(
    private platform: Platform,
    private readonly swUpdate: SwUpdate,
    private readonly modalCtrl: ModalController,
    private readonly alertController: AlertController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly profileService: UserProfileService,
    private readonly router: Router,
    public readonly menuCtrl: MenuController,
    private translate: TranslateService,
    private uiService: UiService,
    private ngZone: NgZone,
    private http: HttpClient,
  ) {
    this.initializeApp();

    onAuthStateChanged(this.authService.auth, async (user) => {
      if (user) {
        // 0. LOGIN
        this.email = user.email;
        this.user = user;
        console.log(">>> user.metadata", user.metadata);
        console.log(">>> lastSignInTime", user.metadata?.lastSignInTime);
        await this.user.getIdToken();
        // console.log(">>> token", token);

        if (!user.emailVerified) {
          const navOnboardingEmail =
            await this.router.navigateByUrl("/onboarding-email");
          if (navOnboardingEmail) {
            console.log("Navigation success to onboarding Email Page");
          } else {
            console.error("Navigation ERROR to onboarding Email Page");
          }
        } else {
          console.log("E-Mail IS verified. Go ahead..");
          console.log(user.email, user.displayName, user.emailVerified);

          try {
            const clubList = await lastValueFrom(
              this.fbService.getClubList().pipe(take(1)),
            );

            if (clubList.length === 0) {
              console.log("NO! Club Data received. > Call Club Onboarding");
              try {
                const navOnboardingClub =
                  await this.router.navigateByUrl("/onboarding-club");
                if (navOnboardingClub) {
                  console.log("Navigation success to onboarding Club Page");
                } else {
                  console.error("Navigation ERROR to onboarding Club Page");
                }
              } catch (error) {
                console.error("Navigation Exception:", error);
                window.location.reload();
              }
            } else {
              const inactiveClub = clubList.find(
                (club: any) => club.subscriptionActive === false,
              );

              if (inactiveClub) {
                console.log("NO SUBSCRIPTION FOUND");
                const modal = await this.modalCtrl.create({
                  component: ClubSubscriptionPage,
                  presentingElement: await this.modalCtrl.getTop(),
                  canDismiss: true,
                  showBackdrop: true,
                  componentProps: {
                    clubId: inactiveClub.id,
                  },
                });
                modal.present();

                const { role } = await modal.onWillDismiss();
                console.log(role);
                if (role === "close" || role === "backdrop") {
                  this.authService.logout();
                }
              } else {
                console.log("Club is active");

                const currentPath = this.router.url;
                if (currentPath === "/login") {
                  this.menuCtrl.enable(true, "menu");
                  await this.router.navigateByUrl("/t");
                }
              }
            }
          } catch (error) {
            console.error("Error processing club list:", error);
          }
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
        const navLogout = await this.router.navigateByUrl("/login");
        if (navLogout) {
          console.log("Navigation SUCCESS to Logout Page");
        } else {
          console.error("Navigation ERROR to Logout Page");
        }
      }
    });
  }

  ngAfterViewInit() {
    console.log("CSS DEBUG: AppComponent View initialized");
    this.setStatusBarAndSafeArea();

    // iOS only
    window.addEventListener("statusTap", () => {
      const content = document.querySelector("ion-content");
      if (content) {
        content.scrollToTop(500);
      }
    });
  }

  ngOnInit(): void {
    App.removeAllListeners().then(() => {
      this.registerBackButton();
    });

    Network.addListener(
      "networkStatusChange",
      async (status: ConnectionStatus) => {
        if (!status.connected) {
          await this.uiService.showErrorToast(
            await lastValueFrom(this.translate.get("common.offline")),
          );
        } else {
          console.log("Network is connected");
          /* await this.uiService.showSuccessToast(
            await lastValueFrom(this.translate.get("common.online")),
          );*/
        }
      },
    );
  }

  ngOnDestroy() {
    Network.removeAllListeners();

    App.removeAllListeners();
  }

  initializeApp(): void {
    //for menu layout enable/disable
    this.clubList$ = this.fbService.getClubList().pipe(take(1));

    // this.setStatusBarAndSafeArea();
    this.showSplashScreen();
    this.setDefaultLanguage();
    this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      if (event.type === "VERSION_READY") {
        this.presentAlertUpdateVersion();
      }
    });
  }

  private async setStatusBarAndSafeArea() {
    setTimeout(async () => {
      const { statusBarHeight } = await SafeArea.getStatusBarHeight();
      console.log("DEBUG CSS:  statusbarHeight", statusBarHeight);

      try {
        const marginTop = getComputedStyle(
          document.querySelector(".android ion-app"),
        ).getPropertyValue("margin-top");
        const numericValue = parseInt(marginTop.replace("px", ""));
        console.log("DEBUG CSS:  marginTop", numericValue);
      } catch (error) {
        console.log("DEBUG CSS:  marginTop from app.component.scss", error);
      }

      const safeAreaTop = Number(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--ion-safe-area-top")
          .replace("px", ""),
      );
      const safeAreaBottom = Number(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--ion-safe-area-bottom")
          .replace("px", ""),
      );
      console.log(
        "DEBUG CSS:  safeAreaTop --ion-safe-area-top / bottom Value: ",
        safeAreaTop,
        safeAreaBottom,
      );

      const { insets } = await SafeArea.getSafeAreaInsets();
      console.log(
        "DEBUG CSS: insets via SafeArea Plugin: ",
        JSON.stringify(insets),
      );

      //Top
      if (
        Capacitor.isNativePlatform() &&
        Capacitor.getPlatform() == "android"
      ) {
        if (safeAreaTop != insets.top || insets.top > 0) {
          document.documentElement.style.setProperty(
            "--ion-safe-area-top",
            `${insets.top}px`,
          );
          console.log(
            "DEBUG CSS: Update --ion-safe-area-top Value: ",
            insets.top,
          );
        } else {
          console.log(
            "DEBUG CSS: No Update --ion-safe-area-top Value: ",
            insets.top,
          );
        }

        //Bottom
        if (safeAreaBottom != insets.bottom || insets.bottom > 0) {
          document.documentElement.style.setProperty(
            "--ion-safe-area-bottom",
            `${insets.bottom}px`,
          );
          console.log(
            "DEBUG CSS: Update --ion-safe-area-bottom Value: ",
            insets.bottom,
          );
        } else {
          console.log(
            "DEBUG CSS: No Update --ion-safe-area-bottom Value: ",
            insets.bottom,
          );
        }
      }

      const safeAreaTopAfter = getComputedStyle(
        document.documentElement,
      ).getPropertyValue("--ion-safe-area-top");
      console.log(
        "DEBUG CSS: safeAreaTopAfter --ion-safe-area-top Value: ",
        safeAreaTopAfter,
      );
      const safeAreaBottomAfter = getComputedStyle(
        document.documentElement,
      ).getPropertyValue("--ion-safe-area-bottom");
      console.log(
        "DEBUG CSS: safeAreaBottomAfter --ion-safe-area-bottom Value: ",
        safeAreaBottomAfter,
      );

      if (Capacitor.isPluginAvailable("StatusBar")) {
        console.log("StatusBar is available");

        console.log("StatusBar set overlay to false");
        await StatusBar.setOverlaysWebView({
          overlay: false,
        });

        // Set initial theme
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        if (prefersDark) {
          // Dark Mode
          await StatusBar.setStyle({ style: Style.Dark });
          document.documentElement.style.colorScheme = "dark";
          const darkColor = getComputedStyle(document.body)
            .getPropertyValue("--ion-color-primary")
            .trim();
          await StatusBar.setBackgroundColor({ color: darkColor });
          console.log("DEBUG CSS: darkColor", darkColor);
        } else {
          // Light Mode
          await StatusBar.setStyle({ style: Style.Light });
          document.documentElement.style.colorScheme = "light";
          const lightColor = getComputedStyle(document.body)
            .getPropertyValue("--ion-color-primary")
            .trim();
          await StatusBar.setBackgroundColor({ color: lightColor });
          console.log("DEBUG CSS: lightColor", lightColor);
        }

        // Listen for system theme changes
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", async (e) => {
            const newColorScheme = e.matches ? "dark" : "light";
            console.log("System theme changed to:", newColorScheme);
            if (newColorScheme == "dark") {
              await StatusBar.setStyle({ style: Style.Dark });
              document.documentElement.style.colorScheme = "dark";
              const darkColor = getComputedStyle(document.body)
                .getPropertyValue("--ion-color-primary")
                .trim();
              await StatusBar.setBackgroundColor({ color: darkColor });
            } else {
              await StatusBar.setStyle({ style: Style.Light });
              document.documentElement.style.colorScheme = "light";
              const lightColor = getComputedStyle(document.body)
                .getPropertyValue("--ion-color-primary")
                .trim();
              await StatusBar.setBackgroundColor({ color: lightColor });
            }
          });
      } else {
        console.log("Status Bar not supported");
      }
    }, 100);
  }

  private registerBackButton() {
    App.addListener("backButton", async ({ canGoBack }) => {
      // console.log("backbutton", canGoBack);
      // console.log(">", this.router.lastSuccessfulNavigation)
      // console.log(">>", this.router.getCurrentNavigation())
      // console.log(">>>", window.history.length);
      const modal = await this.modalCtrl.getTop();
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
        console.log(
          "Set Fallback Language to Device Language: " + result.value,
        );
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
          user ? this.profileService.getUserProfile(user) : of(null),
        ),
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
    const translations = await Promise.all([
      lastValueFrom(this.translate.get("onboarding.no_club_found")),
      lastValueFrom(this.translate.get("onboarding.no_club_found_message")),
      lastValueFrom(this.translate.get("common.yes")),
      lastValueFrom(this.translate.get("common.logout")),
    ]);

    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: translations[0],
      subHeader: "",
      message: translations[1],
      buttons: [
        {
          text: translations[2],
          role: "confirm",
        },
        {
          text: translations[3],
          role: "cancel",
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onWillDismiss();

    if (role === "confirm") {
      await this.router.navigateByUrl("onboarding", {});
    } else if (role === "cancel") {
      await this.authService.logout();
    }
  }

  async presentClubRequstOpen() {
    const translations = await Promise.all([
      lastValueFrom(this.translate.get("onboarding.open_club_requests")),
      lastValueFrom(
        this.translate.get("onboarding.open_club_requests_message"),
      ),
      lastValueFrom(this.translate.get("onboarding.join_new_club")),
      lastValueFrom(this.translate.get("onboarding.manage_profile")),
    ]);

    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: translations[0],
      subHeader: "",
      message: translations[1],
      buttons: [
        {
          text: translations[2],
          role: "confirm",
        },
        {
          text: translations[3],
          role: "cancel",
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onWillDismiss();

    if (role === "confirm") {
      await this.router.navigateByUrl("onboarding", {});
    } else if (role === "cancel") {
      await this.router.navigateByUrl("profile", {});
    }
  }

  async presentAlertNoTeam() {
    const translations = await Promise.all([
      lastValueFrom(this.translate.get("onboarding.no_team_found")),
      lastValueFrom(this.translate.get("onboarding.no_team_found_message")),
      lastValueFrom(this.translate.get("onboarding.join_team")),
      lastValueFrom(this.translate.get("onboarding.show_profile")),
    ]);

    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: translations[0],
      subHeader: "",
      message: translations[1],
      buttons: [
        {
          text: translations[2],
          role: "confirm",
        },
        {
          text: translations[3],
          role: "cancel",
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onWillDismiss();

    if (role === "confirm") {
      await this.router.navigateByUrl("team-list", {});
    } else if (role === "cancel") {
      await this.router.navigateByUrl("profile", {});
    }
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
    return (
      clubList && clubList.some((club) => club.hasFeatureHelferEvent == true)
    );
  }
  enableChampionship(clubList) {
    return (
      clubList && clubList.some((club) => club.hasFeatureChampionship == true)
    );
  }

  async presentAlertUpdateVersion() {
    const translations = await Promise.all([
      lastValueFrom(this.translate.get("common.app_update_available")),
      lastValueFrom(
        this.translate.get("common.app_update_message", {
          version: this.appVersion,
        }),
      ),
      lastValueFrom(this.translate.get("common.cancel")),
      lastValueFrom(this.translate.get("common.load")),
    ]);

    const alert = await this.alertController.create({
      header: translations[0],
      message: translations[1],
      backdropDismiss: false,
      buttons: [
        {
          text: translations[2],
          role: "cancel",
        },
        {
          text: translations[3],
          role: "confirm",
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onWillDismiss();

    if (role === "confirm") {
      const resolver = await this.swUpdate.activateUpdate();
      if (resolver) {
        window.location.reload();
      } else {
        console.log("Already on latest version");
      }
    }
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
    try {
      const result = await PushNotifications.requestPermissions();
      if (result.receive === "granted") {
        try {
          await PushNotifications.register();
        } catch (error) {
          console.error("Fehler bei der Push-Registrierung:", error);
          const translations = await Promise.all([
            lastValueFrom(
              this.translate.get("error__push_notification_not_available"),
            ),
          ]);

          const toast = await this.uiService.showErrorToast(translations[0]);
        }
      } else {
        console.warn("Push-Benachrichtigungen wurden nicht erlaubt");
      }
    } catch (error) {
      console.error("Fehler beim Anfordern der Push-Berechtigungen:", error);
      const translations = await Promise.all([
        lastValueFrom(
          this.translate.get("error_device_not_support_push_notifications"),
        ),
      ]);

      const toast = await this.uiService.showErrorToast(translations[0]);
    }

    try {
      PushNotifications.addListener("registration", (token: Token) => {
        this.profileService
          .addPushSubscriber(null, this.deviceId, this.deviceInfo, token.value)
          .catch((err) => {
            console.error("Could not subscribe to notifications", err);
          })
          .then((ok) => {
            console.log(ok);
          });
      });

      PushNotifications.addListener("registrationError", (error: any) => {
        console.error("Registration error:", error);
      });

      PushNotifications.addListener(
        "pushNotificationReceived",
        async (notification: PushNotificationSchema) => {
          try {
            console.log("PUSH MESSAGE RECEIVED");
            console.log("TYPE:  " + notification.data.type);

            const translations = await Promise.all([
              lastValueFrom(this.translate.get("common.open")),
              lastValueFrom(this.translate.get("common.cancel")),
              lastValueFrom(this.translate.get("common.ok")),
            ]);

            const { value } = await Dialog.confirm({
              title: notification.title,
              message: notification.body,
              okButtonTitle: translations[0],
              cancelButtonTitle: translations[1],
            });

            if (value) {
              this.ngZone.run(async () => {
                let route = "";
                switch (notification.data.type) {
                  case "helferEvent":
                    route = "/t/helfer";
                    break;
                  case "clubEvent":
                    route = "/t/events";
                    break;
                  case "news":
                  case "clubNews":
                    route = "/t/news";
                    break;
                  case "training":
                    route = "/t/training";
                    break;
                  default:
                    Dialog.confirm({
                      title: notification.title,
                      message: notification.body,
                      okButtonTitle: translations[2],
                    });
                    return;
                }

                if (route) {
                  this.router
                    .navigateByUrl(route, {
                      state: notification.data,
                    })
                    .catch((e) => {
                      console.error("Navigation error:", e);
                    });
                }
              });
            }
          } catch (error) {
            console.error("Error processing push notification:", error);
          }
        },
      );

      PushNotifications.addListener(
        "pushNotificationActionPerformed",
        (notification: ActionPerformed) => {
          console.log(notification);
        },
      );
    } catch (error) {
      console.error("Error setting up push notification listeners:", error);
    }
  }
}
