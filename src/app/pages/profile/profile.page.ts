import { Component, OnInit, AfterViewInit } from "@angular/core";
import { combineLatest, Observable, of } from "rxjs";
import { Device, DeviceId, DeviceInfo } from '@capacitor/device';

// import firebase from 'firebase/compat/app';
import { User } from "@angular/fire/auth";

// Services
import { FirebaseService } from "src/app/services/firebase.service";
import { AuthService } from "src/app/services/auth.service";

// Push 
import { SwPush } from "@angular/service-worker";

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
import { switchMap } from "rxjs/operators";
import {
  AlertController,
  MenuController,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit, AfterViewInit {
  userProfile$: Observable<Profile>;
  clubRequestList: any[] = [];
  teamRequestList: any[] = [];
  pushDeviceList: any[] = [];
  private readonly VAPID_PUBLIC_KEY =
    "BFSCppXa1OPCktrYhZN3GfX5gKI00al-eNykBwk3rmHRwjfrGeo3JXaTPP_0EGQ01Ik_Ubc2dzvvFQmOc3GvXsY";
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;
  constructor(
    private readonly swPush: SwPush,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly profileService: UserProfileService,
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
    private readonly router: Router,
    private readonly menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
   
  }

  async ngOnInit() {
    this.getClubRequestList();
    this.getTeamRequestList();
    this.getPushDeviceList();
    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();
    console.log(this.deviceInfo);
  }

  ngAfterViewInit(): void {
    this.getUser();
    // this.getClubList();
    // this.getTeamList();
  }
  getClubRequestList() {
    const request$ = this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserClubRequestRefs(user)),
        // Loop Over Teams
        switchMap((allRequests: any) =>
          combineLatest(
            allRequests.map((request) =>
              combineLatest(of(request), this.fbService.getClubRef(request.id))
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        console.log(data);

        const requestListNew = [];
        for (const request of data) {
          const requestDetail = request[1];

          // const detailRef: DocumentReference = request[0].clubRef;
          // const clubData = await this.fbService.getClubRef(requestDetail.id).toPromise();
          requestListNew.push(requestDetail);
        }
        this.clubRequestList = this.clubRequestList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        this.clubRequestList = [...new Set([].concat(...requestListNew))];
        request$.unsubscribe();
      });
  }
  getTeamRequestList() {
    const request$ = this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRequestRefs(user)),
        // Loop Over Teams
        switchMap((allRequests: any) =>
          combineLatest(
            allRequests.map((request) =>
              combineLatest(of(request), this.fbService.getTeamRef(request.id))
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        console.log(data);

        const requestListNew = [];
        for (const request of data) {
          const requestDetail = request[1];

          // const detailRef: DocumentReference = request[0].clubRef;
          // const clubData = await this.fbService.getClubRef(requestDetail.id).toPromise();
          requestListNew.push(requestDetail);
        }
        this.teamRequestList = this.teamRequestList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        this.teamRequestList = [...new Set([].concat(...requestListNew))];
        request$.unsubscribe();
      });
  }

  async getPushDeviceList() {
    this.profileService.getPushDeviceList().subscribe(pushDeviceData=>{

      pushDeviceData.map(element=>{
        this.pushDeviceList.push(element);
      })
    });
  }
  /*
  async getClubList(){
    const user: User = await this.authService.getUser();
    // this.clubList$ =
    this.clubList$ = this.fbService.getClubRefs(user);
  }

  async getTeamList(){
    const user: User = await this.authService.getUser();
    this.teamList$ = this.fbService.getTeamRefs(user);
  }
*/
  async getUser() {
    const user: User = await this.authService.getUser();
    this.userProfile$ = this.profileService.getUserProfile(user);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      height: 400,
      width: 400,
      direction: CameraDirection.Front,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.base64String;
    console.log(image);

    // const user: User = await this.authService.getUser();
    await this.profileService.setUserProfilePicture(image);
    await this.presentToastTakePicture();
  }

  async deleteClubRequest(request) {
    const user: User = await this.authService.getUser();
    await this.fbService.deleteUserClubRequest(request.id, user.uid);
    await this.presentToast();
  }
  async deleteTeamRequest(request) {
    const user: User = await this.authService.getUser();
    await this.fbService.deleteUserTeamRequest(request.id, user.uid);
    await this.presentToast();
  }
  async deleteProfile() {
    const alert = await this.alertController.create({
      message: "Möchtest du das Profil wirklich löschen?",
      buttons: [
        {
          text: "Ja",
          handler: async () => {
            await this.authService.deleteProfile();
            await this.presentDeleteProfile();
            await this.router.navigateByUrl("/logout");
          },
        },
        {
          text: "Nein",
        },
      ],
    });
    alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Anfrage erfolgreich gelöscht",
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }
  async presentToastTakePicture() {
    const toast = await this.toastController.create({
      message: "Profilbild erfolgreich geändert",
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  async togglePush(event) {
    // console.log(event);
    await this.profileService
    .changeSettingsPush(event.detail.checked);
    if (event.detail.checked){
      this.alertAskForPush();
    } else {
      console.log("disable push");
    }
  }

  async toggleEmail(event) {
    await this.profileService
    .changeSettingsEmail(event.detail.checked);
    console.log("email");
    this.toastActionSaved();
  }

  async toggleEmailReporting(event) {
    await this.profileService
    .changeSettingsEmailReporting(event.detail.checked);
    console.log("email");
    this.toastActionSaved();
  }

  async askForPush() {
    if (this.swPush.isEnabled) {     // Push is available
      this.alertAskForPush();
    } else {
      this.alertPushNotSupported();
    }
  }

  async alertPushNotSupported() {
    const alert = await this.alertController.create({
      header: "Push-Benachrichtugung nicht verfügbar",
      message: "Leider unterstützt ihr Gerät/Browser keine Push-Benachrichtugen.",
      buttons: [
 
        { text: "OK" },
      ],
    });
    alert.present();
  }

  async errorPushMessageEnable(error) {
    const alert = await this.alertController.create({
      header: "Push-Benachrichtugung nicht verfügbar",
      message: "Leider ist ein Fehler aufgetreten: " + error,
      buttons: [
 
        { text: "OK" },
      ],
    });
    alert.present();
  }


async alertAskForPush() {
  const alert = await this.alertController.create({
    header: "Push-Benachrichtugung",
    message: "Sollen Push-Benachrichtigungen für dieses Gerät aktiviert werden?",
    buttons: [
      {
        text: "Ja",
        handler: () => {
          this.subscribeToNotifications();
        },
      },
      { text: "Nein" },
    ],
  });
  alert.present();
}


  async subscribeToNotifications() {
      try{
        const sub: PushSubscription = await this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY,
        })
        console.log(sub.toJSON());
        if (sub && this.deviceId){
          const profileUpdate = await this.profileService
          .addPushSubscriber(sub, this.deviceId, this.deviceInfo)
          .catch((err) => {
            console.error("Could not subscribe to notifications", err);
            this.errorPushMessageEnable("Could not subscribe to notifications");
          }
          );
          this.toastActionSaved();
        } else {
          console.log("error push token register");
          this.errorPushMessageEnable("Error push token register");
        }
      } catch(err){
        this.alertPushNotSupported();
      }
    };
  async presentDeleteProfile() {
    const toast = await this.toastController.create({
      message: "Profil erfolgreich gelöscht",
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  async toastActionSaved() {
    const toast = await this.toastController.create({
      message: "Änderungen erfolgreich gespeichert",
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  ngOnDestroy() {

    this.swPush.unsubscribe();
  }

}
