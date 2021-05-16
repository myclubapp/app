import {PushNotificationService} from './../../services/push-notification.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {UserCredential} from 'src/app/models/user';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import {MenuController, LoadingController} from '@ionic/angular';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public authForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    public menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private pushNotificationService: PushNotificationService
  ) {
    this.menuCtrl.enable(false, 'menu');

    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false, 'menu');
  }

  submitCredentials(authForm: FormGroup): void {
    if (!authForm.valid) {
      console.log('Form is not valid yet, current value:', authForm.value);
    } else {
      this.presentLoading();
      const credentials: UserCredential = {
        email: authForm.value.email,
        password: authForm.value.password,
      };

      this.loginUser(credentials);
    }
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async loginUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.default.auth.UserCredential = await this.authService.login(credentials.email, credentials.password);
      this.authService.userId = userCredential.user.uid;
      //      await this.loginForm.hideLoading();

      this.router.navigateByUrl('/home').catch((error) => {
        console.log(error.message);
        this.router.navigateByUrl('');
      });
      this.menuCtrl.enable(true, 'menu');
      this.pushNotificationService.requestPermission();
    } catch (error) {
      console.log(error);
      //await this.loginForm.hideLoading();
      //this.loginForm.handleError(error);
    }
  }
}
