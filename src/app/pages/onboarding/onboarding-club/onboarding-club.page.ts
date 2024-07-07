import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'firebase/auth';
import { Observable, Subscription, catchError, lastValueFrom, map, of, switchMap, take, tap } from 'rxjs';
import { Club } from 'src/app/models/club';
import { Profile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';

@Component({
  selector: 'app-onboarding-club',
  templateUrl: './onboarding-club.page.html',
  styleUrls: ['./onboarding-club.page.scss'],
})
export class OnboardingClubPage implements OnInit {
  clubListSV: Club[];
  clubListSU: Club[];
  clubListSH: Club[];
  clubListSub: Subscription;
  user: User;
  userProfile$: Observable<Profile>;

  private subscription: Subscription;
  private subscriptionActiveClubList: Subscription;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
    private readonly profileService: UserProfileService,
    public readonly menuCtrl: MenuController,
  ) { 
    this.menuCtrl.enable(false, "menu");
  }

  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.clubListSU = [];
    this.clubListSV = [];
    this.clubListSH = [];
    this.subscription = this.authService.getUser$().pipe(
      take(1),
      tap(user => this.user = user),
      switchMap(user => user ? this.profileService.getUserProfile(user) : of(null))
    ).subscribe(profile => {
      this.userProfile$ = of(profile);
    })

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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

  async joinClub(club: Club) {
    console.log(club);

    if (club.active) {
      const alert = await this.alertController.create({
        message:
          (await lastValueFrom(
            this.translate.get("onboarding.do_you_want_to_join__club")
          )) + ` ${club.name}`,
        header: await lastValueFrom(
          this.translate.get("onboarding.join__club")
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.no")),
            role: "cancel",
            handler: () => {
              console.log("nein");
              this.presentCancelToast();
            },
          },
          {
            text: await lastValueFrom(this.translate.get("common.yes")),
            handler: async (data: any) => {
              try {
                await this.fbService.setClubRequest(club.id, this.user.uid)
                await this.presentRequestToast(); // Anfrage gesendet
                await this.presentRequestSentAlert(club.name);// Inform Admin and Logout alert
              } catch (err) {
                console.log(err.message);
                if (err.message === "Missing or insufficient permissions.") {
                  this.presentErrorAlert();
                }
              }

            },
          },
         
        ],
      });
      await alert.present();
    } else {
      console.log("dieser club existiert noch nicht");
      const alert = await this.alertController.create({
        header: "Club aktivieren",
        message: "Dieser Club wurde noch nicht aktiviert. Möchtest du den Club aktivieren? Falls deine E-Mail Adresse bereits hinterlegt ist, werden wir deinen Club sofort aktivieren.",
        // subHeader: "Fülle dazu ein Antragsformular aus",
        buttons: [{
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
          handler: () => {
            console.log("abbrechen");
            this.presentCancelToast();
            
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.ok")),
        
          handler: async () => {
            console.log("OK");
            await this.fbService.setClubRequest(club.id, this.user.uid)
            await this.presentRequestToast(); // Anfrage gesendet
            await this.presentActivatetSentAlert(club.name); 
          },
        }]
      });
      alert.present();
    }
  }
  async presentRequestToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.success__request_sent")
      ),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }
  async presentCancelToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.warning__action_canceled")
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  async presentRequestSentAlert(clubName: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: await lastValueFrom(
        this.translate.get("onboarding.success__application_sent")
      ),
      // subHeader: "",
      message: await lastValueFrom(
        this.translate.get("onboarding.success__application_sent_desc")
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.logout")),
          handler: async () => {
            this.logout();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }



  async presentActivatetSentAlert(clubName: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: await lastValueFrom(
        this.translate.get("onboarding.success__activate_pplication_sent")
      ),
      // subHeader: "",
      message: await lastValueFrom(
        this.translate.get("onboarding.success__activate_application_sent_desc")
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.logout")),
          handler: async () => {
            this.logout();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }


  async presentErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: await lastValueFrom(
        this.translate.get("onboarding.error__clubRequest")
      ),
      subHeader: "",
      message: await lastValueFrom(
        this.translate.get("onboarding.error__clubRequest_desc")
      ),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.ok")),
          handler: async () => {
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  handleChange(event: any) {
    console.log(event.detail.value);
    const searchValue = event.detail.value;

    if (event.detail.value) {
      console.log("before club search");
      // Search
      this.clubListSub = this.fbService
        .searchClubListRef(event.detail.value)
        .pipe(
          take(1),
          map((clubs: Club[]) =>
            clubs.filter((searchClub) =>
              searchClub.name
                .toLowerCase()
                .includes(event.detail.value.toLowerCase())
            )
          )
          // return club.name.search(searchValue)
        )
        .subscribe((data: any) => {
          console.log(data);
          this.clubListSU = data.filter((el) => el.type == "swissunihockey");
          this.clubListSV = data.filter((el) => el.type == "swissvolley");
          this.clubListSH = data.filter((el) => el.type == "swisshandball");
        });
    } else {
      this.clubListSU = [];
      this.clubListSV = [];
      this.clubListSH = [];
      // this.activeClubList = this.activeClubListBackup;
    }
  }

  async logout() {
    return this.authService.logout();
  }

}
