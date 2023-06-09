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
import { Observable } from "rxjs";
import { User } from "firebase/auth";

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

  user$: Observable<User>;
  user: User;

  // inviteList: Array<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>
  constructor(
    // private readonly qrservice: QrcodeService,
    // private fbService: FirebaseService,
    private readonly fbService: FirebaseService,
    public menuCtrl: MenuController,
    private readonly alertCtrl: AlertController,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly alertController: AlertController
  ) {
    this.menuCtrl.enable(false, "menu");
  }

  async ngOnInit() {
    this.getUser();
    this.menuCtrl.enable(false, "menu");
    /* const inviteRef = await this.fbService.getInvites();
    inviteRef.subscribe(snapshot=>{
      //console.log(snapshot.docs);
      this.inviteList = snapshot.docs;
    }) */
    this.fbService.getActiveClubList().subscribe((data: any) => {
      // console.log(data);
      this.activeClubList = data;
      this.activeClubListBackup = data;
    });
  }
  getUser() {
    this.user$ = this.authService.getUser$();
    this.user$.subscribe((user) => {
      this.user = user;
    });
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
            await this.fbService.setClubRequest(club.id, this.user);
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
      message: "Anfrage abgebrochen",
      duration: 1500,
      position: "bottom",
      color: "error",
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
