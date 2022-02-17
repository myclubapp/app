import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AlertController, LoadingController } from '@ionic/angular';
import { UserCredential } from 'src/app/models/user';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: UserCredential;
  public authForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
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

    console.log(authForm);

    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.login(
        authForm.value.email,
        authForm.value.password
      );
      
      this.router.navigateByUrl('/').catch(error=>{
        console.log(error.message);
        this.router.navigateByUrl('');
      });
    } catch (error) {
      console.error(error);
    }
  }
}
