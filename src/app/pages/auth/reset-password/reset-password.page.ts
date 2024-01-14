import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  MenuController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";
import { UserCredentialLogin } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"],
})
export class ResetPasswordPage implements OnInit {
  public user: UserCredentialLogin;
  public authForm: UntypedFormGroup;
  constructor(
    public menuCtrl: MenuController,
    private readonly authService: AuthService,
    private readonly alertCtrl: AlertController,
    private readonly router: Router,
    private readonly formBuilder: UntypedFormBuilder,
    private readonly loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    this.menuCtrl.enable(false, "menu");
    this.authForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [""],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.user = {
      email: "",
      password: "",
    };
  }

  async submitCredentials(authForm: UntypedFormGroup): Promise<void> {
    if (!authForm.get("email").valid) {
      // console.log('Form is not valid yet, current value:', authForm.value);
      this.alertCtrl
        .create({
          message: await lastValueFrom(
            this.translate.get("common.error__invalid_form")
          ),
          buttons: [
            {
              text: await lastValueFrom(this.translate.get("common.ok")),
              role: "cancel",
            },
          ],
        })
        .then((alert) => {
          alert.present();
        });
    } else {
      this.presentLoading();
      const credentials: UserCredentialLogin = {
        email: authForm.value.email,
        password: authForm.value.password,
      };

      this.resetPassword(credentials);
    }
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: "my-custom-class",
      message:
        (await lastValueFrom(this.translate.get("common.please__wait"))) +
        "...",
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }

  resetPassword(credentials: UserCredentialLogin): void {
    this.authService.resetPassword(credentials.email).then(
      async () => {
        const alert = await this.alertCtrl.create({
          message: await lastValueFrom(
            this.translate.get("reset-password.check__email_for_reset_link")
          ),
          buttons: [
            {
              text: await lastValueFrom(this.translate.get("common.ok")),
              role: "cancel",
              handler: () => {
                this.router.navigateByUrl("login");
              },
            },
          ],
        });
        await alert.present();
      },
      async (error) => {
        const errorAlert = await this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: await lastValueFrom(this.translate.get("common.ok")),
              role: "cancel",
            },
          ],
        });
        await errorAlert.present();
      }
    );
  }
}
