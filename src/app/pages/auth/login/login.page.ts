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
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public user: UserCredentialLogin;
  public authForm: UntypedFormGroup;
  public show: boolean;

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly formBuilder: UntypedFormBuilder,
    public readonly menuCtrl: MenuController,
    private translate: TranslateService
  ) {
    this.menuCtrl.enable(true, "menu");
    this.authForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.minLength(6)],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.user = {
      email: "",
      password: "",
    };
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
      let message =
        (await lastValueFrom(
          this.translate.get("common.general__error_occurred")
        )) +
        " " +
        err.code +
        " / " +
        err.message;
      console.error(err.code);

      if (err.code == "auth/user-not-found") {
        message = await lastValueFrom(
          this.translate.get("login.error__no_acount_found")
        );
      } else if (err.code == "auth/wrong-password") {
        message = await lastValueFrom(
          this.translate.get("login.error__no_acount_found")
        );
      } else if (err.code == "auth/network-request-failed") {
        message = await lastValueFrom(
          this.translate.get("login.error__network_connection")
        );
      } else if (err.code == "auth/invalid-login-credentials") {
        message = await lastValueFrom(
          this.translate.get("login.error__invalid-login-credentials")
        );
      } else {
        console.log("Error");
      }

      const alert = await this.alertCtrl.create({
        header: await lastValueFrom(this.translate.get("login.mistake")),
        message: message,
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("ok")),
            role: "cancel",
          },
        ],
      });
      alert.present();
    }
  }
}
