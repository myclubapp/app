import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { UserCredentialLogin, Profile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // private userProfileRef: AngularFirestoreDocument < UserProfile > ;
  public user: UserCredentialLogin;
  public authForm: UntypedFormGroup;
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private formBuilder: UntypedFormBuilder,
   // private afs: AngularFirestore,
   public menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {

    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
      lastName:  ['', Validators.required],
      firstName:  ['', Validators.required],
    });
   }

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
    };
        
    this.menuCtrl.enable(false, 'menu');
  }

  submitCredentials(authForm: UntypedFormGroup): void {
    if (!authForm.valid) {
      //console.log('Form is not valid yet, current value:', authForm.value);
      this.alertCtrl.create({
        message: 'Formular ist noch fehlerhaft',
        buttons: [{ text: 'Ok', role: 'cancel' }],
      }).then(alert=>{
        alert.present();
      });


    } else {
      this.presentLoading();
      const credentials: UserCredentialLogin = {
        email: authForm.value.email,
        password: authForm.value.password
      };

      this.signupUser(credentials, {firstName: authForm.value.firstName,
        lastName: authForm.value.lastName});
    }
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Bitte warten...',
      duration: 2000,
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async signupUser(credentials: UserCredentialLogin, userData: any): Promise<void> {

    console.log('signup user: ' + this.user.email);

    try {
      const userCredential = await this.authService.signup(credentials.email, credentials.password, userData.firstName, userData.lastName);

      await this.router.navigateByUrl('tabs');

    } catch(err) {
      this.alertCtrl.create({
        message: err.message,
        buttons: [{ text: 'Ok', role: 'cancel' }],
      }).then(alert=>{
        alert.present();
      });
    }

  }
}
