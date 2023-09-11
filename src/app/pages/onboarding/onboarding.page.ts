import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  MenuController,
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
import { Observable, Subscription, of, switchMap, take, tap } from "rxjs";
import { User } from "firebase/auth";
import { Profile } from "src/app/models/user";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-onboarding",
  templateUrl: "./onboarding.page.html",
  styleUrls: ["./onboarding.page.scss"],
})
export class OnboardingPage implements OnInit {
  // imageUrl: any;
  // public code: string;
  clubList: Club[];
  activeClubList: Club[];
  activeClubListBackup: Club[];

  //Auth
  //user$: Observable<User>;
  user: User;

  //myClub User Profile
  // userProfile: Profile;
  userProfile$: Observable<Profile>;

  private subscription: Subscription;
  private subscriptionActiveClubList: Subscription;


  // inviteList: Array<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>
  constructor(
    // private readonly qrservice: QrcodeService,
    // private fbService: FirebaseService,
    private readonly fbService: FirebaseService,
    public menuCtrl: MenuController,
    private readonly alertCtrl: AlertController,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly profileService: UserProfileService,
    private readonly router: Router,
    private readonly alertController: AlertController
  ) {
    this.menuCtrl.enable(false, "menu");
  }

  ngOnInit() {
    this.menuCtrl.enable(false, "menu");

    this.subscription = this.authService.getUser$().pipe(
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
    ).subscribe();

  }
  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionActiveClubList) {
      this.subscriptionActiveClubList.unsubscribe();
    }
  
  }
  handleChange(event: any) {
    console.log(event.detail.value);

    if (event.detail.value) {
      console.log("before club search");
      // Search
      this.fbService
        .searchClubListRef(event.detail.value)
        .subscribe((data: any) => {
          console.log(data);
          this.clubList = data;
        });
      // My-Club Clubs Search
      this.activeClubList = this.activeClubListBackup.filter(
        (club, index) => club.name.search(event.detail.value) >= 0
      );
    } else {
      this.clubList = [];
      this.activeClubList = this.activeClubListBackup;
    }
  }

  async joinClub(club: Club) {
    console.log(club);
    const alert = await this.alertCtrl.create({
      message: `Möchtest du dem Verein "${club.name}" beitreten?`,
      header: "Club beitreten",
      buttons: [
        {
          text: "Ja",
          handler: async (data: any) => {
            await this.fbService.setClubRequest(club.id, this.user.uid);
            await this.presentRequestToast();
            await this.presentRequestSentAlert(club.name);

            // await this.router.navigateByUrl("logout", {});
          },
        },
        {
          text: "Nein",
          role: "cancel",
          handler: () => {
            console.log("nein");
            this.presentCancelToast();
          },
        },
      ],
    });
    if (club) {
      await alert.present();
    } else {
      console.log("No club");
    }
  }

  async presentRequestToast() {
    const toast = await this.toastController.create({
      message: "Anfrage erfolgreich gesendet",
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }
  async presentCancelToast() {
    const toast = await this.toastController.create({
      message: "Aktion wurde abgebrochen",
      duration: 1500,
      position: "bottom",
      color: "danger",
    });

    await toast.present();
  }

  async presentRequestSentAlert(clubName: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Antrag erfolgreich versendet",
      subHeader: "",
      message: `Dein Antrag wurde erfolgreich an den Club "${clubName}" gesendet. Sobald dein Antrag genehmigt wurde, informieren wir dich wieder.`,
      buttons: [
        {
          text: "Logout",
          handler: async () => {
            await this.authService.logout();
            this.router.navigateByUrl("login");
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
