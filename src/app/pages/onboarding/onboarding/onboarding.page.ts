import { Component, OnInit, Input } from "@angular/core";
import {
  AlertController,
  MenuController,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";
// import { Camera, CameraResultType } from '@capacitor/camera';
/* import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service'; */
// import { QrcodeService } from 'src/app/services/qrcode.service';
// import firebase from 'firebase/compat/app';
import { FirebaseService } from "src/app/services/firebase.service";
import { Club } from "src/app/models/club";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { Device, DeviceId, DeviceInfo } from "@capacitor/device";
import {
  Observable,
  Subscription,
  catchError,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { User } from "firebase/auth";
import { Profile } from "src/app/models/user";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { TranslateService } from "@ngx-translate/core";
import { PushNotifications } from "@capacitor/push-notifications";

@Component({
  selector: "app-onboarding",
  templateUrl: "./onboarding.page.html",
  styleUrls: ["./onboarding.page.scss"],
})
export class OnboardingPage implements OnInit {
  @Input("data") user: User;

  clubListSV: Club[];
  clubListSU: Club[];
  clubListSH: Club[];
  clubListSub: Subscription;

  userProfile$: Observable<Profile>;

  private subscription: Subscription;
  private subscriptionActiveClubList: Subscription;
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;

  notificationSkip: boolean = false;
  emailSkip: boolean = false;

  // inviteList: Array<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>
  constructor(
    public navParams: NavParams,
    private readonly fbService: FirebaseService,
    public menuCtrl: MenuController,
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly profileService: UserProfileService,
    private readonly router: Router,
    private readonly alertController: AlertController,
    private translate: TranslateService
  ) {
    this.menuCtrl.enable(false, "menu");
  }

  async ngOnInit() {
    this.clubListSU = [];
    this.clubListSV = [];
    this.clubListSH = [];
    this.user = this.navParams.get("data");

    this.menuCtrl.enable(false, "menu");

    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();

    this.userProfile$ = this.getUserProfile();

    /*this.subscription = this.authService.getUser$().pipe(
      take(1),
      tap(user => this.user = user),
      switchMap(user => user ? this.profileService.getUserProfile(user) : of(null))
    ).subscribe(profile => {
      this.userProfile$ = of(profile);
    })


    this.subscriptionActiveClubList = this.fbService.getActiveClubList().pipe(
      take(1),
      tap(activeClubList => {
        console.log("clubs");
        this.activeClubList = activeClubList;
        this.activeClubListBackup = activeClubList;
      })
    ).subscribe();*/
  }
  ngOnDestroy() {
    if (this.clubListSub) {
      this.clubListSub.unsubscribe();
    }
  }

  getUserProfile(): Observable<any> {
    // Replace 'any' with the actual type of the user profile
    return this.authService.getUser$().pipe(
      switchMap((user: User) => {
        if (!user || !user.uid) {
          console.log("No user found");
          return of(null); // Return null or appropriate default value if user is not logged in
        }
        return this.profileService.getUserProfile(user);
      }),
      catchError((err) => {
        console.error("Error fetching user profile", err);
        return of(null); // Handle the error and return a default value
      })
    );
  }
  registerPushDevice() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
        // --> this should trigger listener in app.component.ts to save token
      } else {
        // Show some error
      }
    });
  }
  skipNotification(boolean) {
    this.notificationSkip = boolean;
  }

  async skipEmail(boolean) {
    // const user =
    this.authService.auth.currentUser.getIdToken(true);
    await this.authService.auth.currentUser.reload();
    // console.log(user);
    if (this.authService.auth.currentUser.emailVerified) {
      console.log("email verified");
      this.user = this.authService.auth.currentUser;
      this.emailSkip = boolean;
    } else {
      console.log("not verified");
    }
  }

  async togglePush(event) {
    // console.log(event);
    await this.profileService.changeSettingsPush(event.detail.checked);

    if (event.detail.checked) {
      if (
        this.deviceInfo.platform == "android" ||
        this.deviceInfo.platform == "ios"
      ) {
        this.registerPushDevice();
      } else {
        console.log("implement web push");
        // this.alertAskForPush();
      }
    } else {
      console.log("disable push");
    }
    this.toastActionSaved();
  }
  async togglePushModule(event, module) {
    await this.profileService.changeSettingsPushModule(
      event.detail.checked,
      module
    );
    this.toastActionSaved();
  }

  async toggleEmail(event) {
    await this.profileService.changeSettingsEmail(event.detail.checked);
    console.log("email");
    this.toastActionSaved();
  }

  async toggleEmailReporting(event) {
    await this.profileService.changeSettingsEmailReporting(
      event.detail.checked
    );
    console.log("email");
    this.toastActionSaved();
  }
  async toastActionSaved() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }
  verifyEmailAddress() {
    this.authService.sendVerifyEmail();
  }
  closeModal() {
    return this.modalCtrl.dismiss(null, "close");
  }

  async logout() {
    await this.closeModal();
    return this.authService.logout();
  }
  handleChange(event: any) {
    console.log(event.detail.value);
    const searchValue = event.detail.value;

    if (event.detail.value) {
      console.log("before club search");
      // Search
      this.clubListSub = this.fbService
        .searchClubListRef(event.detail.value)
        .pipe(
          take(1),
          map((clubs: Club[]) =>
            clubs.filter((searchClub) =>
              searchClub.name
                .toLowerCase()
                .includes(event.detail.value.toLowerCase())
            )
          )
          // return club.name.search(searchValue)
        )
        .subscribe((data: any) => {
          console.log(data);
          this.clubListSU = data.filter((el) => el.type == "swissunihockey");
          this.clubListSV = data.filter((el) => el.type == "swissvolley");
          this.clubListSH = data.filter((el) => el.type == "swisshandball");
        });
    } else {
      this.clubListSU = [];
      this.clubListSV = [];
      this.clubListSH = [];
      // this.activeClubList = this.activeClubListBackup;
    }
  }

  async joinClub(club: Club) {
    console.log(club);

    if (club.active) {
      const alert = await this.alertCtrl.create({
        message:
          (await lastValueFrom(
            this.translate.get("onboarding.do_you_want_to_join__club")
          )) + ` ${club.name}`,
        header: await lastValueFrom(
          this.translate.get("onboarding.join__club")
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.yes")),
            handler: async (data: any) => {
              try {
                await this.fbService.setClubRequest(club.id, this.user.uid)
                await this.presentRequestToast();
                await this.presentRequestSentAlert(club.name);
              } catch (err) {
                console.log(err.message);
                if (err.message === "Missing or insufficient permissions.") {
                  this.presentErrorAlert();
                }
              }
            },
          },
          {
            text: await lastValueFrom(this.translate.get("common.no")),
            role: "cancel",
            handler: () => {
              console.log("nein");
              this.presentCancelToast();
            },
          },
        ],
      });
      await alert.present();
    } else {
      console.log("dieser club existiert noch nicht");
    }
  }

  async presentRequestToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.success__request_sent")
      ),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }
  async presentCancelToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.warning__action_canceled")
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  async presentRequestSentAlert(clubName: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: await lastValueFrom(
        this.translate.get("onboarding.success__application_sent")
      ),
      subHeader: "",
      message: await lastValueFrom(
        this.translate.get("onboarding.success__application_sent_desc")
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.logout")),
          handler: async () => {
            this.logout();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: await lastValueFrom(
        this.translate.get("onboarding.error__clubRequest")
      ),
      subHeader: "",
      message: await lastValueFrom(
        this.translate.get("onboarding.error__clubRequest_desc")
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.ok")),
          handler: async () => {
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }



  /*
    async scanCode () {
      const image: any = await this.takePicture();
      this.code = this.qrservice.decode(image.base64String);

      if (this.code) {
        await this.scanOK(this.code);
      } else {
        await this.scanNOTOK();
      }
    }

    async takePicture () {
      const image: any = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        width: 400,
        height: 400,
        resultType: CameraResultType.Base64
      }).catch((err) => {
        console.log('abgebrochen');
      });
      return image;
    }

    async acceptInvite (invite) {
      console.log(invite.id);

      // await this.fbService.acceptInvite(invite.id);
    }

    async scanOK (code) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Scan erfolgreich',
        subHeader: 'Scan erfolgreich',
        message: `Einladungscode ${code} wurde erkannt`,
        buttons: ['OK'],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

    async scanNOTOK () {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Scan nicht erfolgreich',
        subHeader: 'Scan nicht erfolgreich',
        message: 'Einladungscode wurde nicht erkannt',
        buttons: ['OK'],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }*/
}
