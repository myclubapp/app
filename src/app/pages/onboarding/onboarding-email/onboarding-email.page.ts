import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'firebase/auth';
import { Observable, Subscription, catchError, of, switchMap, take, tap } from 'rxjs';
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
  user: User;
  private subscription: Subscription;


  constructor(
    private readonly authService: AuthService,
    private readonly profileService: UserProfileService,
    private translate: TranslateService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.authService.getUser$().pipe(
      take(1),
      tap(user => this.user = user),
      switchMap(user => user ? this.profileService.getUserProfile(user) : of(null))
    ).subscribe(profile => {
      this.userProfile$ = of(profile);
    })
  }

  getUserProfile(): Observable<any> {
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
  }

  resendEmailActivation() {
    this.authService.sendVerifyEmail();
  }

  async verified() {
    this.authService.auth.currentUser.getIdToken(true);
    await this.authService.auth.currentUser.reload();
    window.location.reload();
  }

  async logout() {
    return this.authService.logout();
  }
}
