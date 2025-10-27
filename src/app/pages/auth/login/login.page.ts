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
import {
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
} from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  standalone: false,
})
export class LoginPage implements OnInit {
  public user: UserCredentialLogin;
  public authForm: UntypedFormGroup;
  public show: boolean;
  public isPasswordFocused: boolean = false;

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly loadingCtrl: LoadingController,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly formBuilder: UntypedFormBuilder,
    public readonly menuCtrl: MenuController,
    private readonly translate: TranslateService,
    private readonly modalCtrl: ModalController,
    private readonly uiService: UiService,
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
    const loading = await this.loadingCtrl.create({
      message: await lastValueFrom(this.translate.get("login.loading")),
    });

    try {
      await loading.present();
      await this.authService.login(
        authForm.value.email,
        authForm.value.password,
      );
      await loading.dismiss();
      // await this.modalCtrl.dismiss({}, "confirm");
      // await this.router.navigateByUrl('/t/news');
    } catch (error) {
      await loading.dismiss();
      console.log("error", error);
      let message = await lastValueFrom(
        this.translate.get("login.error_message"),
      );

      if (error.code === "auth/user-not-found") {
        message = await lastValueFrom(
          this.translate.get("login.error_user_not_found"),
        );
      } else if (error.code === "auth/wrong-password") {
        message = await lastValueFrom(
          this.translate.get("login.error_wrong_password"),
        );
      } else if (error.code === "auth/invalid-email") {
        message = await lastValueFrom(
          this.translate.get("login.error_invalid_email"),
        );
      } else if (error.code === "auth/user-disabled") {
        message = await lastValueFrom(
          this.translate.get("login.error_user_disabled"),
        );
      } else if (error.code === "auth/invalid-credential") {
        message = await lastValueFrom(
          this.translate.get("login.error_user_credential"),
        );
      }

      await this.uiService.showInfoDialog({
        header: await lastValueFrom(this.translate.get("login.error")),
        message: message,
      });
    }
  }
}
