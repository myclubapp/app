import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
/* import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';*/
import { QrcodeService } from 'src/app/services/qrcode.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  imageUrl: any;
  public code: string;
  inviteList: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[];
  constructor(
    private qrservice: QrcodeService,
    // private fbService: FirebaseService,
    public alertController: AlertController,
  ) { }

  async ngOnInit() {
    /* const inviteRef = await this.fbService.getInvites();
    inviteRef.subscribe(snapshot=>{
      //console.log(snapshot.docs);
      this.inviteList = snapshot.docs;
    }) */
  }

  async scanCode()  {
    const image:any = await this.takePicture();
    this.code = this.qrservice.decode(image.base64String);

    if (this.code){
      await this.scanOK(this.code);
    }else{
      await this.scanNOTOK();
    }
  };

  async takePicture()  {
    const image:any = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      width: 400,
      height: 400,
      resultType: CameraResultType.Base64
    }).catch(err=>{
      console.log("abgebrochen");
    });
    return image;
  }

  async acceptInvite(invite){
    console.log(invite.id);

    // await this.fbService.acceptInvite(invite.id);

  }

  async scanOK(code) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Scan erfolgreich',
      subHeader: 'Scan erfolgreich',
      message: `Einladungscode ${code} wurde erkannt`,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async scanNOTOK() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Scan nicht erfolgreich',
      subHeader: 'Scan nicht erfolgreich',
      message: `Einladungscode wurde nicht erkannt`,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}