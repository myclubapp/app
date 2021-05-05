import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {ProfileService} from '../../services/user/profile.service';
import {Router} from '@angular/router';
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core';
const {Camera} = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public userProfile: any = {};
  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    private profileService: ProfileService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    //Dokumente
    //https://portal.swissunihockey.ch/pdf/spielerlizenz/erklaerung/d

    this.profileService.getUserProfile().then((userProfileSnapshot) => {
      if (userProfileSnapshot.data()) {
        this.userProfile = userProfileSnapshot.data();
      }
    });
  }

  async takePicture(): Promise<void> {
    const debtPicture: any = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    }).catch((error) => {
      console.log(error);
      this.toastController
        .create({
          message: 'Aktion abgebrochen',
          color: 'danger',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
      return;
    });
    if (debtPicture) {
      this.profileService.userProfilePicture(debtPicture.base64String).then((done) => {
        this.toastController
          .create({
            message: 'Profilbild gespeichert',
            color: 'success',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      });
    }
  }

  logOut(): void {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('login');
    });
  }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Your first name & last name',
      inputs: [
        {
          type: 'text',
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName,
        },
        {
          type: 'text',
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: (data) => {
            this.profileService.updateName(data.firstName, data.lastName);
          },
        },
      ],
    });
    await alert.present();
  }
  updateDOB(birthDate: string): void {
    if (birthDate === undefined) {
      return;
    }
    this.profileService.updateDOB(birthDate);
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          type: 'text',
          name: 'newEmail',
          placeholder: 'Your new email',
        },
        {
          name: 'password',
          placeholder: 'Your password',
          type: 'password',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: (data) => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch((error) => {
                console.log('ERROR: ' + error.message);
              });
          },
        },
      ],
    });
    await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'New password',
          type: 'password',
        },
        {
          name: 'oldPassword',
          placeholder: 'Old password',
          type: 'password',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: (data) => {
            this.profileService.updatePassword(data.newPassword, data.oldPassword);
          },
        },
      ],
    });
    await alert.present();
  }

  saveProfile() {
    this.profileService.save(this.userProfile).then(
      (done) => {
        this.toastController
          .create({
            message: 'Profil gespeichert',
            color: 'success',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      },
      (error) => {
        this.toastController
          .create({
            message: 'Fehler',
            color: 'danger',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      }
    );
  }

  async deleteAccount() {
    const alert = await this.alertCtrl.create({
      header: 'Profil löschen?',
      message: 'Möchtest du wirklich dein Profil  <strong>löschen</strong>?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: (data) => {
            this.toastController
              .create({
                message: 'Aktion abgebrochen',
                color: 'danger',
                duration: 2000,
              })
              .then((toast) => {
                toast.present();
              });
          },
        },
        {
          text: 'Profil löschen',
          handler: (data) => {
            this.profileService.deleteAccount(this.userProfile).then((done) => {
              this.toastController
                .create({
                  message: 'Profil gelöscht',
                  color: 'danger',
                  duration: 2000,
                })
                .then((toast) => {
                  toast.present();

                  this.authService.logout();
                  this.router.navigateByUrl('/login');
                });
            });
          },
        },
      ],
    });
    await alert.present();
  }

  loadFileFromDevice(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array(reader.result as ArrayBuffer)]);
      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);
      this.profileService.verbandAgreement(blobURL).then(
        (ok) => {
          this.toastController
            .create({
              message: 'Dokument erfolgreich hochgeladen',
              color: 'success',
              duration: 2000,
            })
            .then((toast) => {
              toast.present();
            });
        },
        (error) => {
          console.log(error);
          this.toastController
            .create({
              message: 'Fehler: ' + error.message,
              color: 'danger',
              duration: 5000,
            })
            .then((toast) => {
              toast.present();
            });
        }
      );
    };
    reader.onerror = (error) => {
      //handle errors
    };
  }

  async uploadIdentityFront(fileURL) {
    const picture: any = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    }).catch((error) => {
      console.log(error);
      this.toastController
        .create({
          message: 'Aktion abgebrochen',
          color: 'danger',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
      return;
    });
    if (picture) {
      this.profileService.uploadIdentityFront(picture.base64String).then(
        (done) => {
          this.toastController
            .create({
              message: 'Dokument erfolgreich hochgeladen',
              color: 'success',
              duration: 2000,
            })
            .then((toast) => {
              toast.present();
            });
        },
        (error) => {
          this.toastController
            .create({
              message: 'Fehler: ' + error.message,
              color: 'danger',
              duration: 5000,
            })
            .then((toast) => {
              toast.present();
            });
        }
      );
    }
  }
  async uploadIdentityBack() {
    const picture: any = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    }).catch((error) => {
      console.log(error);
      this.toastController
        .create({
          message: 'Aktion abgebrochen',
          color: 'danger',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
      return;
    });
    if (picture) {
      this.profileService.uploadIdentityBack(picture.base64String).then(
        (done) => {
          this.toastController
            .create({
              message: 'Dokument erfolgreich hochgeladen',
              color: 'success',
              duration: 2000,
            })
            .then((toast) => {
              toast.present();
            });
        },
        (error) => {
          this.toastController
            .create({
              message: 'Fehler: ' + error.message,
              color: 'danger',
              duration: 5000,
            })
            .then((toast) => {
              toast.present();
            });
        }
      );
    }
  }
}
