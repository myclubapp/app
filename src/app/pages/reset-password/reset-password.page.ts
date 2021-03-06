import {Component, OnInit, ViewChild} from '@angular/core';
import {UserCredential} from 'src/app/models/user';
import {AuthService} from 'src/app/services/auth.service';
import {AlertController, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  constructor(private authService: AuthService, private alertCtrl: AlertController, private router: Router, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
  }

  ngOnInit() {}

  async resetPassword(credentials: UserCredential): Promise<void> {
    try {
      await this.authService.resetPassword(credentials.email);
      const alert = await this.alertCtrl.create({
        message: 'Check your inbox for the password reset link',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              this.router.navigateByUrl('login');
            },
          },
        ],
      });
      await alert.present();
    } catch (error) {
      console.log(error);
    }
  }
}
