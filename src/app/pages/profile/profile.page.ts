import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Optional,
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
import { UiService } from "src/app/services/ui.service";

// Push
// import { SwPush } from "@angular/service-worker";

// models
import { Profile } from "src/app/models/user";

// Capacitor
import {
  Camera,
  CameraDirection,
  CameraResultType,
  CameraSource,
  Photo,
  PermissionStatus,
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
import { MemberPage } from "../member/member.page";
import { MemberInvoiceListPage } from "../member-invoice-list/member-invoice-list.page";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
  standalone: false,
})
export class ProfilePage implements OnInit, AfterViewInit, OnDestroy {
  userProfile$: Observable<Profile>;
  user$: Observable<User>;
  user: User;
  userSubscription: Subscription;
  profileSubscription: Subscription;

  teamList$: Observable<Team[]>;
  clubList$: Observable<Club[]>;

  kidsRequests$: Observable<any[]>;
  children$: Observable<any[]>;

  parents$: Observable<Profile[]>;

  public alertButtonsEmail = [];
  public alertInputsEmail = [];
  public alertButtonsAddress = [];
  public alertInputsAddress = [];
  public alertButtonsDelete = [];

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
    private readonly router: Router,
    private readonly menuCtrl: MenuController,
    private readonly alertController: AlertController,
    private translate: TranslateService,
    private readonly modalCtrl: ModalController,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly uiService: UiService,
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

    this.userProfile$.pipe(take(1)).subscribe((userProfile) => {
      this.kidsRequests$ = this.profileService
        .getKidsRequests(userProfile.id)
        .pipe(
          tap((kidsRequests) => {
            console.log(kidsRequests);
          }),
        );

      this.children$ = this.profileService.getChildren(userProfile.id).pipe(
        switchMap((children) => {
          if (!children.length) return of([]);
          return combineLatest(
            children.map((child) =>
              this.profileService.getUserProfileById(child.id),
            ),
          );
        }),
        tap((children) => {
          console.log(children);
        }),
      );

      this.parents$ = this.profileService.getParents(userProfile.id).pipe(
        switchMap((parents) => {
          if (!parents.length) return of([]);
          return combineLatest(
            parents.map((parent) =>
              this.profileService.getUserProfileById(parent.id),
            ),
          );
        }),
        tap((parents) => {
          console.log(parents);
        }),
      );
    });

    this.user$ = this.authService.getUser$();
    this.userSubscription = this.user$.pipe(take(1)).subscribe((user) => {
      this.user = user;
    });

    this.alertButtonsAddress = [
      {
        text: await lastValueFrom(this.translate.get("common.cancel")),
        role: "cancel",
      },
      {
        text: await lastValueFrom(this.translate.get("common.save")),
        handler: (data) => {
          this.saveAddress(data);
        },
      },
    ];

    this.alertButtonsEmail = [
      {
        text: await lastValueFrom(this.translate.get("common.cancel")),
        role: "cancel",
      },
      {
        text: await lastValueFrom(this.translate.get("common.save")),
        handler: (data) => {
          this.saveEmail(data);
        },
      },
    ];

    this.alertButtonsDelete = [
      {
        text: await lastValueFrom(this.translate.get("common.cancel")),
        role: "cancel",
      },
      {
        text: await lastValueFrom(this.translate.get("common.confirm")),
        handler: () => {
          this.deleteProfile();
        },
      },
    ];
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    this.profileSubscription = this.userProfile$.subscribe(async (profile) => {
      if (profile) {
        this.setupAlerts(profile);
      }
    });
  }

  enableHelferEvents(clubList) {
    return (
      clubList && clubList.some((club) => club.hasFeatureHelferEvent == true)
    );
  }
  async setupAlerts(profile: Profile) {
    this.alertInputsEmail = [
      {
        label: await lastValueFrom(
          this.translate.get("profile.change_email_old_label"),
        ),
        placeholder: await lastValueFrom(
          this.translate.get("profile.change_email_old_label"),
        ),
        name: "oldEmail",
        type: "email",
        value: profile.email,
      },
      {
        label: await lastValueFrom(
          this.translate.get("profile.change_email_new_label"),
        ),
        placeholder: await lastValueFrom(
          this.translate.get("profile.change_email_new_label"),
        ),
        name: "newEmail",
        type: "email",
      },
    ];

    this.alertInputsAddress = [
      {
        label: await lastValueFrom(
          this.translate.get("profile.change_address_streetandnumber"),
        ),
        placeholder: await lastValueFrom(
          this.translate.get("profile.change_address_streetandnumber"),
        ),
        name: "street",
        type: "text",
        value: profile.street,
      },
      {
        label: await lastValueFrom(
          this.translate.get("profile.change_address_housenumber"),
        ),
        placeholder: await lastValueFrom(
          this.translate.get("profile.change_address_housenumber"),
        ),
        name: "houseNumber",
        type: "text",
        value: profile.houseNumber,
      },
      {
        label: await lastValueFrom(
          this.translate.get("profile.change_address_postalcode"),
        ),
        placeholder: await lastValueFrom(
          this.translate.get("profile.change_address_postalcode"),
        ),
        name: "postalcode",
        type: "number",
        value: profile.postalcode,
      },
      {
        label: await lastValueFrom(
          this.translate.get("profile.change_address_city"),
        ),
        placeholder: await lastValueFrom(
          this.translate.get("profile.change_address_city"),
        ),
        name: "city",
        type: "text",
        value: profile.city,
      },
    ];
  }

  ngOnDestroy() {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  async showPicture(imageUrl: string) {
    const alert = await this.alertController.create({
      header: await lastValueFrom(
        this.translate.get("profile.profile_picture"),
      ),
      message: `<img src="${imageUrl}" alt="Profilbild" style="width: 100%; max-width: 300px; height: auto;">`,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.close")),
          role: "cancel",
        },
      ],
      cssClass: "profile-picture-alert",
    });

    await alert.present();
  }
  async openMember(member: Profile) {
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
      },
    });
    modal.present();

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openMemberInvoiceList() {
    const modal = await this.modalCtrl.create({
      component: MemberInvoiceListPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        user: this.user,
      },
    });
    modal.present();
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
              this.localDateString = this.convertToLocalDateString(
                profile.dateOfBirth.toDate(),
              );
            } else {
              this.localDateString = "1970-01-01T00:00:00.000Z";
            }
          }),
        );
      }),
      catchError((err) => {
        console.error("Error fetching user profile", err);
        return of(null); // Handle the error and return a default value
      }),
    );
  }
  convertToLocalDateString(date: Date): string {
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000,
    );
    return localDate.toISOString();
  }
  getClubRequestList() {}
  getTeamRequestList() {}
  getPushDeviceList() {}

  async onDateChange(event: CustomEvent) {
    event.detail.value = Timestamp.fromDate(new Date(event.detail.value));

    this.profileChange(event, "dateOfBirth");
  }

  async takePicture() {
    try {
      /* const result: PermissionStatus = await Camera.checkPermissions();
      if (result.camera !== "granted") {
        const requestResult = await Camera.requestPermissions();
        if (requestResult.camera !== "granted") {
          console.log("Camera permission denied");
          return;
        }
        console.log("Camera permission granted");
        return;
      } */

      const loading = await this.loadingController.create({
        message: await lastValueFrom(
          this.translate.get("profile.profile_pic__uploaded"),
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
        source: CameraSource.Prompt,
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
    } catch (error) {
      console.error("Error taking picture", error.message);
    }
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
    const confirmed = await this.uiService.showDeleteConfirmDialog({
      header: await lastValueFrom(
        this.translate.get("profile.delete__profile"),
      ),
      message: await lastValueFrom(
        this.translate.get("profile.delete_profile__confirm"),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.yes")),
      cancelText: await lastValueFrom(this.translate.get("common.no")),
    });

    if (confirmed) {
      try {
        await this.authService.deleteProfile();
        await this.presentDeleteProfile();
        await this.router.navigateByUrl("/logout");
      } catch (error) {
        await this.presentErrorDeleteProfile();
      }
    }
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

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }
  async presentCancelToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.warning__action_canceled"),
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
        this.translate.get("profile.success__profile_pic_changed"),
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
      module,
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
      event.detail.checked,
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
        this.translate.get("profile.success__profile_deleted"),
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
        this.translate.get("profile.error__while_deleting_msg"),
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
      fieldname,
    );
    if (fieldname == "language") {
      // console.log(event.detail.value)
      this.translate.use(event.detail.value);
    }
  }

  async addKidRequest() {
    const children = await lastValueFrom(this.children$.pipe(take(1)));
    if (children.length >= 3) {
      const alert = await this.alertController.create({
        header: await lastValueFrom(
          this.translate.get("profile.kids.max_reached_header"),
        ),
        message: await lastValueFrom(
          this.translate.get("profile.kids.max_reached_message"),
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.cancel")),
            role: "destructive",
          },
          {
            text: await lastValueFrom(this.translate.get("common.ok")),
            role: "confirm",
          },
        ],
      });
      await alert.present();
      return;
    }

    const alert = await this.alertController.create({
      header: await lastValueFrom(
        this.translate.get("profile.kids.add_header"),
      ),
      message: await lastValueFrom(
        this.translate.get("profile.kids.add_message"),
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "destructive",
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          role: "confirm",
          handler: (data: any) => {
            this.profileService.addKidRequest(this.user.uid, data.email);
          },
        },
      ],
      inputs: [
        {
          name: "email",
          type: "email",
          placeholder: await lastValueFrom(
            this.translate.get("profile.kids.email_placeholder"),
          ),
          attributes: {
            autocomplete: "email",
          },
        },
      ],
    });
    await alert.present();
  }

  async deleteKidRequest(userId: string, requestId: string) {
    const alert = await this.alertController.create({
      header: await lastValueFrom(this.translate.get("common.confirmation")),
      message: await lastValueFrom(
        this.translate.get("profile.confirm_delete_request"),
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.no")),
          role: "cancel",
          handler: () => {
            console.log("Löschen abgebrochen");
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.yes")),
          role: "confirm",
          handler: async () => {
            try {
              await this.profileService.deleteKidRequest(userId, requestId);
              await this.presentToast();
            } catch (error) {
              console.error("Fehler beim Löschen des Requests", error);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }

  async deleteChild(child: Profile) {
    const confirmed = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(this.translate.get("common.confirmation")),
      message: await lastValueFrom(
        this.translate.get("profile.confirm_delete_child"),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.yes")),
      cancelText: await lastValueFrom(this.translate.get("common.no")),
    });

    if (confirmed) {
      try {
        await this.profileService.deleteChild(this.user.uid, child.id);
        await this.uiService.showSuccessToast(
          await lastValueFrom(
            this.translate.get("profile.success_child_deleted"),
          ),
        );
      } catch (error) {
        console.error("Fehler beim Löschen des Kindes", error);
        await this.uiService.showErrorToast(error.message);
      }
    }
  }

  async saveAddress(data) {
    // Implement the logic to save the address
    console.log("Address saved:", data);
    await this.profileChange({ detail: { value: data.city } }, "city");
    await this.profileChange(
      { detail: { value: data.postalcode } },
      "postalcode",
    );
    await this.profileChange({ detail: { value: data.street } }, "street");
    await this.profileChange(
      { detail: { value: data.street + " " + data.houseNumber } },
      "streetAndNumber",
    );
    await this.profileChange(
      { detail: { value: data.houseNumber } },
      "houseNumber",
    );
    await this.presentToast();
  }

  async saveEmail(data) {
    // Implement the logic to save the email
    console.log("Email saved:", data);
    await this.profileChange({ detail: { value: data.newEmail } }, "email");
    await this.presentToast();
  }
}
