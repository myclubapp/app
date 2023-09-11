import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { AlertController, LoadingController } from '@ionic/angular';
import { UserCredential } from "@angular/fire/auth";

import { UserCredentialLogin } from "src/app/models/user";
import {
  UntypedFormGroup,
  Validators,
  UntypedFormBuilder,
} from "@angular/forms";
import { AlertController, MenuController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public user: UserCredentialLogin;
  public authForm: UntypedFormGroup;

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly formBuilder: UntypedFormBuilder,
    public readonly menuCtrl: MenuController 
  ) {
    this.authForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.minLength(6)],
    });

    this.menuCtrl.enable(false, "menu");
  }

  ngOnInit() {
    this.user = {
      email: "",
      password: "",
    };

    this.menuCtrl.enable(false, "menu");
  }

  async submitCredentials(authForm: any) {
    try {
      const userCredential: UserCredential = await this.authService.login(
        authForm.value.email,
        authForm.value.password
      );

      this.router.navigateByUrl("/").catch((error) => {
        console.error(error.message);
        this.router.navigateByUrl("");
      });
    } catch (err) {
      let message = "Es ist ein allgemeiner Fehler aufgetreten: " + err.code + " / " + err.message;
      console.error(err.code);

      if (err.code == "auth/user-not-found") {
        message = "Kein Account mit dieser E-Mail-Adresse gefunden."
      } else if (err.code == "auth/wrong-password") {
        message = "Die Kombination aus Benutzername und Passwort ist falsch."
      } else {
        
      }

      const alert = await this.alertCtrl.create({
          message: message,
          buttons: [{ text: "OK", role: "cancel" }],
        });
      alert.present();      
    }
  }
}
