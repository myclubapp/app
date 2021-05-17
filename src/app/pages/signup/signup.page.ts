import {MenuController} from '@ionic/angular';
import {Component, OnInit} from '@angular/core';
import {UserCredential} from 'src/app/models/user';
import {AuthService} from 'src/app/services/auth.service';

import {Router} from '@angular/router';

import firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private authService: AuthService, private router: Router, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
  }
  ngOnInit() {}

  async signupUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.signup(credentials.email, credentials.password);
      this.authService.userId = userCredential.user.uid;
      this.router.navigateByUrl('/home/timeline');
      this.menuCtrl.enable(true, 'menu');
    } catch (error) {
      console.log(error);
    }
  }
}
