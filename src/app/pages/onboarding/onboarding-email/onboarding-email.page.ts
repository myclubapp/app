import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'firebase/auth';
import { Observable, Subscription, catchError, lastValueFrom, of, switchMap, take, tap } from 'rxjs';
import { Profile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';

@Component({
  selector: 'app-onboarding-email',
  templateUrl: './onboarding-email.page.html',
  styleUrls: ['./onboarding-email.page.scss'],
})
export class OnboardingEmailPage implements OnInit {
  userProfile$: Observable<Profile>;

  constructor(
    private readonly authService: AuthService,
    private readonly profileService: UserProfileService,
    private translate: TranslateService,
    private readonly toastCtrl: ToastController,
    public readonly menuCtrl: MenuController,
    private readonly router: Router
  ) { } 

  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.userProfile$ = this.authService.getUser$().pipe(
      take(1),
      switchMap(user => user ? this.profileService.getUserProfile(user) : of(null))
    );
  }

  ngOnDestroy(): void {

  }


  /*getUserProfile(): Observable<any> {
    // Replace 'any' with the actual type of the user profile
    return this.authService.getUser$().pipe(
      switchMap((user: User) => {
        if (!user || !user.uid) {
          console.log("No user found");
          return of(null); // Return null or appropriate default value if user is not logged in
        }
        return this.profileService.getUserProfile(user);
      }),
      catchError((err) => {
        console.error("Error fetching user profile", err);
        return of(null); // Handle the error and return a default value
      })
    );
  }*/

  async resendEmailActivation() {
    await this.authService.sendVerifyEmail();
    await this.toastActionSaved();
  }

  async next() {
    // Click next and see if user is really verified?
    const token = await this.authService.auth.currentUser.getIdToken(true);
    // console.log(this.authService.auth.currentUser)
    await this.authService.auth.currentUser.reload();
    console.log("is Email verified now? " + this.authService.auth.currentUser.emailVerified);
    if (this.authService.auth.currentUser.emailVerified){
      const navOnboardingClub = await this.router.navigateByUrl('/onboarding-club');
      if (navOnboardingClub) {
        console.log('Navigation success to onboarding Club Page');
      } else {
        console.error('Navigation ERROR to onboarding Club Page');
      }
    }else{
      await this.toastEmailNotYetVerified();
    }

    /*await this.router.navigateByUrl("/t").catch(e=>{
      this.router.navigateByUrl("")
    });*/
    // window.location.reload();
  }

  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.email_sent")),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }

  async toastEmailNotYetVerified() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.email_not_yet_verified")),
      duration: 3000,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  async logout() {
    return this.authService.logout();
  }
}
