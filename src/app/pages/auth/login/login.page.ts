import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AlertController, LoadingController } from '@ionic/angular';
import {
  UserCredential
} from "@angular/fire/auth";

import { UserCredentialLogin } from 'src/app/models/user';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: UserCredentialLogin;
  public authForm: UntypedFormGroup;
  
  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    public menuCtrl: MenuController,
    // private loadingCtrl: LoadingController,
    // private alertCtrl: AlertController
  ) { 
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
    });
    
    this.menuCtrl.enable(false, 'menu');
  }

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
    };

    this.menuCtrl.enable(false, 'menu');

  }
  


  async submitCredentials(authForm:any){

    try {
      const userCredential: UserCredential = await this.authService.login(
        authForm.value.email,
        authForm.value.password
      );
      
      this.router.navigateByUrl('/').catch(error=>{
        console.error(error.message);
        this.router.navigateByUrl('');
      });

    } catch (err) {
      this.alertCtrl.create({
        message: err.message,
        buttons: [{ text: 'Ok', role: 'cancel' }],
      }).then(alert=>{
        alert.present();
      });
      console.error(err.message);
    }
  }
}
