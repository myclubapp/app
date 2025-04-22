import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from "@angular/core";
import {
  combineLatest,
  lastValueFrom,
  Observable,
  of,
  Subscription,
} from "rxjs";
import { Device, DeviceId, DeviceInfo } from "@capacitor/device";
import { User } from "@angular/fire/auth";
import { PushNotifications } from "@capacitor/push-notifications";

// Services
import { FirebaseService } from "src/app/services/firebase.service";
import { AuthService } from "src/app/services/auth.service";

// Push
// import { SwPush } from "@angular/service-worker";

// models
import { Profile } from "src/app/models/user";

// Capacitor
import {
  Camera,
  CameraDirection,
  CameraResultType,
  Photo,
} from "@capacitor/camera";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { catchError, switchMap, take, tap } from "rxjs/operators";
import {
  AlertController,
  IonRouterOutlet,
  LoadingController,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Team } from "src/app/models/team";
import { Club } from "src/app/models/club";
import { HelferPunktePage } from "../helfer/helfer-punkte/helfer-punkte.page";
import { Timestamp } from "firebase/firestore";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.page.html",
    styleUrls: ["./profile.page.scss"],
    standalone: false
})
export class ProfilePage implements OnInit, AfterViewInit, OnDestroy {
  userProfile$: Observable<Profile>;
  
  profileSubscription: Subscription;


  teamList$: Observable<Team[]>;
  clubList$: Observable<Club[]>;

  user$: Observable<User>;
  user: User;

  public alertButtonsEmail = [];
  public alertInputsEmail = [];
  public alertButtonsAddress = [];
  public alertInputsAddress= [];

  private readonly VAPID_PUBLIC_KEY =
    "BFSCppXa1OPCktrYhZN3GfX5gKI00al-eNykBwk3rmHRwjfrGeo3JXaTPP_0EGQ01Ik_Ubc2dzvvFQmOc3GvXsY";
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;
  localDateString: string;

  kidAlertButtons = [
    {
      text: this.translate.instant('common.cancel'),
      role: 'cancel',
    },
    {
      text: this.translate.instant('common.add'),
      role: 'confirm',
      handler: (data) => {
        this.addKid(data.email);
      },
    },
  ];

  constructor(
    // private readonly swPush: SwPush,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly profileService: UserProfileService,
    private readonly toastController: ToastController,
    private readonly loadingController: LoadingController,
    private readonly router: Router,
    private readonly menuCtrl: MenuController,
    private readonly alertController: AlertController,
    private translate: TranslateService,
    private readonly modalCtrl: ModalController,
    private readonly routerOutlet: IonRouterOutlet,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  async ngOnInit() {
    console.log("ngOnInit");
    this.userProfile$ = this.getUserProfile();

    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();
    // console.log(this.deviceInfo);

    this.clubList$ = this.fbService.getClubList();

  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");

    this.profileSubscription = this.userProfile$.subscribe(async profile => {
      if (profile) {
        this.setupAlerts(profile);
      }
    });
  }

  enableHelferEvents(clubList) {
    return clubList && clubList.some(club => club.hasFeatureHelferEvent == true);
  }
  setupAlerts(profile: Profile) {
    this.alertInputsEmail = [
      {
        label: this.translate.instant("profile.change_email_old_label"),
        placeholder: this.translate.instant("profile.change_email_old_label"),
        name: "oldEmail",
        type: "email",
        value: profile.email
      },
      {
        label: this.translate.instant("profile.change_email_new_label"),
        placeholder: this.translate.instant("profile.change_email_new_label"),
        name: "newEmail",
        type: "email",
      },
    ];

    this.alertButtonsEmail = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: (data) => {
          console.log(data);
        },
      },
      {
        text: this.translate.instant("common.save"),
        handler: async (data) => {
          console.log(data);
          if (data.oldEmail !== data.newEmail && data.oldEmail.length > 0 && data.newEmail.length > 0) {
            try {
              const verifyEmail = await this.authService.verifyBeforeUpdateEmail(data.newEmail);
              console.log(verifyEmail);
              const updatedProfile = await this.profileChange(
                { detail: { value: data.newEmail } },
                "email"
              );
              await this.authService.logout();
            } catch (e) {
              if (e.code == "auth/operation-not-allowed") {
                console.log(e.message);
              } else if (e.code == "auth/requires-recent-login") {
                alert("bitte ausloggen und nochmals probieren.");
              } else {
                console.log(JSON.stringify(e));
              }
            }
          } else {
            console.log("error");
          }
        },
      },
    ];

    this.alertInputsAddress = [
      {
        label: this.translate.instant("profile.change_address_streetandnumber"),
        placeholder: this.translate.instant("profile.change_address_streetandnumber"),
        name: "streetAndNumber",
        type: "text",
        value: profile.streetAndNumber,
      },
      {
        label: this.translate.instant("profile.change_address_postalcode"),
        placeholder: this.translate.instant("profile.change_address_postalcode"),
        name: "postalcode",
        type: "number",
        value: profile.postalcode,
      },
      {
        label: this.translate.instant("profile.change_address_city"),
        placeholder: this.translate.instant("profile.change_address_city"),
        name: "city",
        type: "text",
        value: profile.city,
      },
    ];

    this.alertButtonsAddress = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: (data) => {
          console.log(data);
        },
      },
      {
        text: this.translate.instant("common.save"),
        role: "",
        handler: async (data) => {
          console.log(data);
          await this.profileChange({ detail: { value: data.city } }, "city");
          await this.profileChange({ detail: { value: data.postalcode } }, "postalcode");
          await this.profileChange({ detail: { value: data.streetAndNumber } }, "streetAndNumber");
        },
      },
    ];
  }


  ngOnDestroy() { 
    if (this.profileSubscription){
      this.profileSubscription.unsubscribe();
    }
  }

  async showPicture(imageUrl: string) {
  const alert = await this.alertController.create({
    header: await lastValueFrom(this.translate.get('profile.profile_picture')),
    message: `<img src="${imageUrl}" alt="Profilbild" style="width: 100%; max-width: 300px; height: auto;">`,
    buttons: [{
      text: await lastValueFrom(this.translate.get('common.close')),
      role: 'cancel'
    }],
    cssClass: 'profile-picture-alert'
  });

  await alert.present();
}

  getUserProfile(): Observable<any> {
    // Replace 'any' with the actual type of the user profile
    return this.authService.getUser$().pipe(
      switchMap((user: User) => {
        if (!user || !user.uid) {
          console.log("No user found");
          return of(null); // Return null or appropriate default value if user is not logged in
        }
        this.user = user;
        return this.profileService.getUserProfile(user).pipe(
          tap((profile: Profile) => {
            if (profile && profile.dateOfBirth) {
              this.localDateString = this.convertToLocalDateString(profile.dateOfBirth.toDate());
            } else {
              this.localDateString = '1970-01-01T00:00:00.000Z'
            }
          })
        );
      }),
      catchError((err) => {
        console.error("Error fetching user profile", err);
        return of(null); // Handle the error and return a default value
      })
    );
  }
  convertToLocalDateString(date: Date): string {
    const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    return localDate.toISOString();
  }
  getClubRequestList() { }
  getTeamRequestList() { }
  getPushDeviceList() { }

  async onDateChange(event: CustomEvent) {

    event.detail.value = Timestamp.fromDate(new Date(event.detail.value))

    this.profileChange(event, "dateOfBirth");

  }


  async takePicture() {
    const loading = await this.loadingController.create({
      message: await lastValueFrom(
        this.translate.get("profile.profile_pic__uploaded")
      ),
      showBackdrop: true,
      backdropDismiss: false,
      translucent: true,
      spinner: "circular",
    });

    const image: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      height: 400,
      width: 400,
      direction: CameraDirection.Front,
    });

    loading.present();
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // var imageUrl = image.base64String;
    // console.log(image);

    // const user: User = await this.authService.getUser();
    await this.profileService.setUserProfilePicture(image);
    loading.dismiss();
    await this.presentToastTakePicture();
  }

  async deleteClubRequest(request) {
    await this.fbService.deleteUserClubRequest(request.id, this.user.uid);
    await this.presentToast();
    this.getClubRequestList();
  }
  async deleteTeamRequest(request) {
    await this.fbService.deleteUserTeamRequest(request.id, this.user.uid);
    await this.presentToast();
    this.getTeamRequestList();
  }
  async deleteProfile() {
    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("profile.delete_profile__confirm")
      ),
      buttons: [
        {
          role: "destructive",
          text: await lastValueFrom(this.translate.get("common.no")),
          handler: () => {
            console.log("nein");
            this.presentCancelToast();
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.yes")),
          handler: async () => {
            await this.authService.deleteProfile().catch((error) => {
              this.presentErrorDeleteProfile();
            });
            await this.presentDeleteProfile();
            await this.router.navigateByUrl("/logout");
          },
        },
       
      ],
    });
    alert.present();
  }

  async openHelferPunkte() {
    console.log("openHelferPunkte");
    const modal = await this.modalCtrl.create({
      component: HelferPunktePage,
      // presentingElement: await this.modalCtrl.getTop(),
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: this.user,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("profile.request_success__deleted")
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
  async presentToastTakePicture() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("profile.success__profile_pic_changed")
      ),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
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

  async deletePushDevice(id) {
    await this.profileService.deletePushDevice(id);
    await this.toastActionSaved();
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

  /* WEB PUSH STUFF

  async askForPush() {
    if (this.swPush.isEnabled) {
      // Push is available
      this.alertAskForPush();
    } else {
      this.alertPushNotSupported();
    }
  }
  async alertPushNotSupported() {
    const alert = await this.alertController.create({
      header: await lastValueFrom(
        this.translate.get("profile.error__push_notification_not_available")
      ),
      message: await lastValueFrom(
        this.translate.get(
          "profile.error_device_not_support_push_notifications"
        )
      ),
      buttons: [{ text: await lastValueFrom(this.translate.get("common.ok")) }],
    });
    alert.present();
  }
  async alertAskForPush() {
    const alert = await this.alertController.create({
      header: await lastValueFrom(
        this.translate.get("profile.push__notifications")
      ),
      message: await lastValueFrom(
        this.translate.get("profile.push_notification__permission_desc")
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.yes")),
          handler: () => {
            this.subscribeToNotifications();
          },
        },
        { text: await lastValueFrom(this.translate.get("common.no")) },
      ],
    });
    alert.present();
  }

  async subscribeToNotifications() {
    try {
      const sub: PushSubscription = await this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      });
      console.log(sub.toJSON());
      if (sub && this.deviceId) {
        const profileUpdate = await this.profileService
          .addPushSubscriber(sub, this.deviceId, this.deviceInfo, "")
          .catch((err) => {
            console.error("Could not subscribe to notifications", err);
            this.errorPushMessageEnable("Could not subscribe to notifications");
          });
        this.toastActionSaved();
      } else {
        console.log("error push token register");
        this.errorPushMessageEnable(
          await lastValueFrom(this.translate.get("profile.error_push_token"))
        );
      }
    } catch (err) {
      console.log(err);
      this.alertPushNotSupported();
    }
  }*/
  async presentDeleteProfile() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("profile.success__profile_deleted")
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  async presentErrorDeleteProfile() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("profile.error__while_deleting_msg")
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  async toastActionSaved() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }

  async profileChange(event, fieldname) {
    console.log(event);
    await this.profileService.changeProfileAttribute(
      event.detail.value,
      fieldname
    );
    if (fieldname == 'language'){
      // console.log(event.detail.value)
      this.translate.use(event.detail.value);
    }
  } 
  
  async addKid(email: string) {
    try {
      // Hier Logik zum Senden der Verifizierungs-E-Mail implementieren
      await this.profileService.addKid(email);
      await this.presentToast();
    } catch (error) {
      await this.presentToast();
    }
  }

  async removeKid(email: string) {
    try {
      await this.profileService.removeKid(email);
      await this.presentToast();
    } catch (error) {
      await this.presentToast();
    }
  }
}
