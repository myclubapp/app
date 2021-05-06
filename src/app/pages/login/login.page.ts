import {PushNotificationService} from './../../services/push-notification.service';
import {MenuController} from '@ionic/angular';
import {Component, OnInit, ViewChild} from '@angular/core';
import {UserCredential} from 'src/app/models/user';
import {AuthService} from 'src/app/services/auth.service';
import {AuthFormComponent} from 'src/app/components/auth-form/auth-form.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(AuthFormComponent) loginForm: AuthFormComponent;
  constructor(
    private authService: AuthService,
    private router: Router,
    public menuCtrl: MenuController,
    private pushNotificationService: PushNotificationService
  ) {
    this.menuCtrl.enable(false, 'menu');
  }

  ngOnInit() {
    this.menuCtrl.enable(false, 'menu');
  }

  async loginUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.default.auth.UserCredential = await this.authService.login(credentials.email, credentials.password);
      this.authService.userId = userCredential.user.uid;
      await this.loginForm.hideLoading();

      this.router.navigateByUrl('/home').catch((error) => {
        console.log(error.message);
        this.router.navigateByUrl('');
      });
      this.menuCtrl.enable(true, 'menu');
      this.pushNotificationService.requestPermission();
    } catch (error) {
      console.log(error);
      await this.loginForm.hideLoading();
      this.loginForm.handleError(error);
    }
  }
}
