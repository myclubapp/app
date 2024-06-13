import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
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
})
export class ProfilePage implements OnInit, AfterViewInit {
  userProfile$: Observable<Profile>;

  teamList$: Observable<Team[]>;
  clubList$: Observable<Club[]>;

  user$: Observable<User>;
  user: User;

  private readonly VAPID_PUBLIC_KEY =
    "BFSCppXa1OPCktrYhZN3GfX5gKI00al-eNykBwk3rmHRwjfrGeo3JXaTPP_0EGQ01Ik_Ubc2dzvvFQmOc3GvXsY";
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;
  localDateString: string;

  constructor(
    // private readonly swPush: SwPush,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly profileService: UserProfileService,
    private readonly toastController: ToastController,
    private readonly loadingController: LoadingController,
    private readonly alertController: AlertController,
    private readonly router: Router,
    private readonly menuCtrl: MenuController,
    private translate: TranslateService,
    private readonly modalCtrl: ModalController,
    private readonly routerOutlet: IonRouterOutlet,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  async ngOnInit() {
    this.userProfile$ = this.getUserProfile();

    /*this.teamList$ = this.fbService.getTeamList();
    this.teamList$.subscribe({
      next: (data) => {
        console.log("Team Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Team Error in subscription:", err),
      complete: () => console.log("Team Observable completed"),
    });

    this.clubList$ = this.fbService.getClubList();
    this.clubList$.subscribe({
      next: (data) => {
        console.log("Club Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Cluh Error in subscription:", err),
      complete: () => console.log("Club Observable completed"),
    });*/

    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();
    // console.log(this.deviceInfo);
  }

  ngAfterViewInit(): void {
    // this.getClubList();
    // this.getTeamList();
  }
  ngOnDestroy() {}

  getUserProfile(): Observable<any> {
    // Replace 'any' with the actual type of the user profile
    return this.authService.getUser$().pipe(
      switchMap((user: User) => {
        if (!user || !user.uid) {
          console.log("No user found");
          return of(null); // Return null or appropriate default value if user is not logged in
        }
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
  getClubRequestList() {}
  getTeamRequestList() {}
  getPushDeviceList() {}

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
          text: await lastValueFrom(this.translate.get("common.yes")),
          handler: async () => {
            await this.authService.deleteProfile().catch((error) => {
              this.presentErrorDeleteProfile();
            });
            await this.presentDeleteProfile();
            await this.router.navigateByUrl("/logout");
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.no")),
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
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }
  async presentToastTakePicture() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("profile.success__profile_pic_changed")
      ),
      duration: 1500,
      position: "bottom",
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
      position: "bottom",
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
      position: "bottom",
      color: "danger",
    });

    await toast.present();
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

  async profileChange(event, fieldname) {
    console.log(event);
    await this.profileService.changeProfileAttribute(
      event.detail.value,
      fieldname
    );
  }

  async changeEmail(oldEmail: string) {
    const alert = await this.alertController.create({
      message: "Change Email",
      header: "Change Email Header",
      inputs: [
        {
          label: "Old E-Mail",
          name: "oldEmail",
          type: "email",
          value: oldEmail,
        },
        {
          label: "New E-Mail",
          name: "newEmail",
          type: "email",
        },
      ],
      buttons: [
        {
          text: "Save",
          role: "",
          handler: async (data) => {
            console.log(data);
            await this.authService.updateEmail(data.newEmail);
            await this.profileChange(
              { detail: { value: data.newEmail } },
              "email"
            );
            alert.dismiss();
          },
        },
        {
          text: "Cancel",
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });
    alert.present();
    // alert.onDidDismiss
  }

  async changeAddress(profile: Profile) {
    const alert = await this.alertController.create({
      message: "Change Address",
      header: "Change Address Header",
      inputs: [
        {
          label: "Street and Number",
          name: "streetAndNumber",
          type: "text",
          value: profile.streetAndNumber,
        },
        {
          label: "Postalcode",
          name: "postalcode",
          type: "number",
          value: profile.postalcode,
        },
        {
          label: "City",
          name: "city",
          type: "text",
          value: profile.city,
        },
      ],
      buttons: [
        {
          text: "Save",
          role: "",
          handler: () => {
            alert.dismiss();
          },
        },
        {
          text: "Cancel",
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });
    alert.present();
  }

  /*
  async languageChange(event) {
    console.log(event.target.value);
    if (event.target.value) {
      if (event.target.value.length > 0) {
        await this.profileService.changeLanguage(event.detail.value);
      }
    }
  }

  async setFavTeam(event) {
    await this.profileService.changeFavTeam(event.detail.value);
  }

  async setFavClub(event) {
    await this.profileService.changeFavClub(event.detail.value);
  }*/
}
