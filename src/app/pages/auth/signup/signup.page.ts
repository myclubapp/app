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
import { UserCredentialLogin, Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  // private userProfileRef: AngularFirestoreDocument < UserProfile > ;
  public user: UserCredentialLogin;
  public authForm: UntypedFormGroup;
  constructor(
    private readonly authService: AuthService,
    private readonly alertCtrl: AlertController,
    private readonly formBuilder: UntypedFormBuilder,
    // private afs: AngularFirestore,
    public menuCtrl: MenuController,
    private readonly loadingCtrl: LoadingController,
    private readonly router: Router,
    private translate: TranslateService
  ) {
    this.authForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.minLength(6)],
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.user = {
      email: "",
      password: "",
    };

    this.menuCtrl.enable(false, "menu");
  }

  async submitCredentials(authForm: UntypedFormGroup): Promise<void> {
    if (!authForm.valid) {
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
      const loading = await this.loadingCtrl.create({
        cssClass: "my-custom-class",
        message:
          (await lastValueFrom(this.translate.get("common.please__wait"))) + "...",
        // duration: 10000,
      });
      await loading.present();

      const credentials: UserCredentialLogin = {
        email: authForm.value.email,
        password: authForm.value.password,
      };

      try {
        await this.signupUser(credentials, {
          firstName: authForm.value.firstName,
          lastName: authForm.value.lastName,
        });

        await this.authService.logout();
        await this.router.navigateByUrl("login");
        const alert = await this.alertCtrl.create({
          header: await lastValueFrom(this.translate.get("signup.account__created")),
          message:
            "signup.account__created_description",
          buttons: [
            {
              text: await lastValueFrom(this.translate.get("common.ok")),
              role: "cancel",
            },
          ],
        });
        await loading.dismiss();
        alert.present();
      } catch (err) {
        let message =
          (await lastValueFrom(this.translate.get("common.general__error_occurred"))) + ": " +
          err.code +
          " / " +
          err.message;
        console.error(err.code);

        if (err.code == "auth/email-already-in-use") {
          message =  (await lastValueFrom(this.translate.get("signup.email__already_in_use")));
        } else {
          console.log("Error");
        }
        await loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: (await lastValueFrom(this.translate.get("common.mistake"))),
          message: message,
          buttons: [
            {
              text: await lastValueFrom(this.translate.get("common.ok")),
              role: "cancel",
            },
          ],
        });
        alert.present();
      }
    }
  }

  /* async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: "my-custom-class",
      message: await lastValueFrom(this.translate.get("please__wait"))+"...",
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }*/

  async signupUser(credentials: UserCredentialLogin, userData: any) {
    return this.authService.signup(
      credentials.email,
      credentials.password,
      userData.firstName,
      userData.lastName
    );
  }
}
