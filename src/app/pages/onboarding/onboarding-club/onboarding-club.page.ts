import { Component, Input, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import {
  AlertController,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  Subscription,
  catchError,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
} from "rxjs";
import { Club } from "src/app/models/club";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-onboarding-club",
  templateUrl: "./onboarding-club.page.html",
  styleUrls: ["./onboarding-club.page.scss"],
  standalone: false,
})
export class OnboardingClubPage implements OnInit {
  @Input("closable")
  closable: boolean = false;

  clubListSV: Club[];
  clubListSU: Club[];
  clubListSH: Club[];
  clubListST: Club[];
  clubListSub: Subscription;
  user: User;
  userProfile$: Observable<Profile>;
  clubListByContactEmail$: Observable<Club[]>;

  private subscription: Subscription;
  private subscriptionActiveClubList: Subscription;

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly modalCtrl: ModalController,
    private readonly alertController: AlertController,
    private readonly profileService: UserProfileService,
    public readonly menuCtrl: MenuController,
    private readonly uiService: UiService,
  ) {
    this.menuCtrl.enable(false, "menu");
  }

  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.clubListSU = [];
    this.clubListSV = [];
    this.clubListSH = [];
    this.clubListST = [];

    // Setup search subscription
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((searchValue) => {
        this.performSearch(searchValue);
      });

    this.clubListByContactEmail$ = this.fbService.getClubsByContactEmail().pipe(
      tap((clubs) => {
        console.log("DEBUG: Clubs by contact email:", clubs);
      }),
      catchError((error) => {
        console.error("Error fetching clubs by contact email:", error);
        return of([]);
      }),
    );

    this.subscription = this.authService
      .getUser$()
      .pipe(
        take(1),
        tap((user) => (this.user = user)),
        switchMap((user) =>
          user ? this.profileService.getUserProfile(user) : of(null),
        ),
      )
      .subscribe((profile) => {
        this.userProfile$ = of(profile);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
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
      }),
    );
  }

  async joinClub(club: Club) {
    console.log(club);
    const $clubTeamDetailList = this.fbService.getClubTeamList(club.id);

    const teamInputs = [];
    let teamData = null;

    // Warte auf die Team-Verarbeitung mit lastValueFrom
    await lastValueFrom(
      $clubTeamDetailList.pipe(
        take(1),
        map((teams: any[]) => {
          const validTeams = teams
            .filter((team) => team && team.name && team.id)
            .sort((a, b) => a.name.localeCompare(b.name));
          validTeams.forEach((team) => {
            teamInputs.push({
              name: "team",
              type: "radio",
              label: team.name,
              value: team.id,
            });
          });
          return teamInputs;
        }),
      ),
    );

    if (teamInputs.length > 0) {
      const alertTeam = await this.alertController.create({
        header: await lastValueFrom(
          this.translate.get("onboarding.select_team"),
        ),
        message: await lastValueFrom(
          this.translate.get("onboarding.select_team_message"),
        ),
        inputs: teamInputs,
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.cancel")),
            role: "destructive",
          },
          {
            text: await lastValueFrom(this.translate.get("common.confirm")),
            role: "confirm",
          },
        ],
      });
      await alertTeam.present();

      const teamResult = await alertTeam.onWillDismiss();

      if (teamResult.role === "destructive" || "cancel") {
        await this.presentCancelToast();
        return;
      }

      if (teamResult.role === "confirm") {
        teamData = teamResult.data;
      }
    }

    if (club.active) {
      const alert = await this.alertController.create({
        inputs: [
          {
            name: "parent",
            type: "checkbox",
            label: await lastValueFrom(
              this.translate.get("onboarding.register_as_parent"),
            ),
            value: "parent",
            checked: false,
          },
        ],
        message:
          (await lastValueFrom(
            this.translate.get("onboarding.do_you_want_to_join__club"),
          )) + ` ${club.name}`,
        header: await lastValueFrom(
          this.translate.get("onboarding.join__club"),
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.no")),
            role: "destructive",
          },
          {
            text: await lastValueFrom(this.translate.get("common.yes")),
            role: "confirm",
          },
        ],
      });

      await alert.present();
      const result = await alert.onWillDismiss();

      if (result.role === "destructive") {
        await this.presentCancelToast();
        return;
      }

      if (result.role === "confirm") {
        try {
          await this.fbService.setClubRequest(
            club.id,
            this.user.uid,
            result.data?.parent || false,
            teamData?.values || "",
          );
          await this.presentRequestToast();
          await this.presentRequestSentAlert(club.name);
        } catch (err) {
          console.log(err.message);
          if (err.message === "Missing or insufficient permissions.") {
            await this.presentErrorAlert();
          }
        }
      }
    } else {
      const alert = await this.alertController.create({
        header: await lastValueFrom(
          this.translate.get("onboarding.activate_club"),
        ),
        message: await lastValueFrom(
          this.translate.get("onboarding.activate_club_message"),
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel",
          },
          {
            text: await lastValueFrom(this.translate.get("common.ok")),
            role: "confirm",
          },
        ],
      });

      await alert.present();
      const result = await alert.onWillDismiss();

      if (result.role === "cancel") {
        await this.presentCancelToast();
        return;
      }

      if (result.role === "confirm") {
        try {
          await this.fbService.setClubRequest(
            club.id,
            this.user.uid,
            false,
            teamData?.values,
          );
          await this.presentRequestToast();
          await this.presentActivatetSentAlert(club.name);
        } catch (error) {
          console.error("Error setting club request:", error);
          await this.presentErrorAlert();
        }
      }
    }
  }
  async presentRequestToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(
        this.translate.get("onboarding.success__request_sent"),
      ),
    );
  }
  async presentCancelToast() {
    await this.uiService.showErrorToast(
      await lastValueFrom(
        this.translate.get("onboarding.warning__action_canceled"),
      ),
    );
  }

  async presentRequestSentAlert(clubName: string) {
    await this.uiService.showInfoDialog({
      header: await lastValueFrom(
        this.translate.get("onboarding.success__application_sent"),
      ),
      message: await lastValueFrom(
        this.translate.get("onboarding.success__application_sent_desc"),
      ),
    });
  }

  async presentActivatetSentAlert(clubName: string) {
    await this.uiService.showInfoDialog({
      header: await lastValueFrom(
        this.translate.get("onboarding.success__activate_pplication_sent"),
      ),
      message: await lastValueFrom(
        this.translate.get(
          "onboarding.success__activate_application_sent_desc",
        ),
      ),
    });
  }

  async presentErrorAlert() {
    await this.uiService.showInfoDialog({
      header: await lastValueFrom(
        this.translate.get("onboarding.error__clubRequest"),
      ),
      message: await lastValueFrom(
        this.translate.get("onboarding.error__clubRequest_desc"),
      ),
    });
  }

  handleChange(event: any) {
    const searchValue = event.detail.value?.trim();
    this.searchSubject.next(searchValue);
  }

  private performSearch(searchValue: string) {
    console.log("DEBUG: performSearch", searchValue);
    if (!searchValue) {
      this.resetClubLists();
      return;
    }

    if (this.clubListSub) {
      this.clubListSub.unsubscribe();
    }

    this.clubListSub = this.fbService
      .searchClubListRef(searchValue)
      .pipe(
        tap((clubs: Club[]) => {
          console.log("DEBUG: Gefundene Clubs:", clubs);
        }),
        catchError((error) => {
          console.error("Fehler bei der Club-Suche:", error);
          this.uiService.showErrorToast(
            "Fehler bei der Suche. Bitte versuchen Sie es später erneut.",
          );
          return of([]);
        }),
      )
      .subscribe({
        next: (data: Club[]) => {
          console.log("DEBUG: Finale Club-Liste:", data);
          this.clubListSU = data.filter((el) => el.type === "swissunihockey");
          this.clubListSV = data.filter((el) => el.type === "swissvolley");
          this.clubListSH = data.filter((el) => el.type === "swisshandball");
          this.clubListST = data.filter((el) => el.type === "swissturnverband");
        },
        error: (error) => {
          console.error("Fehler beim Verarbeiten der Suchergebnisse:", error);
          this.resetClubLists();
        },
      });
  }

  private resetClubLists() {
    this.clubListSU = [];
    this.clubListSV = [];
    this.clubListSH = [];
    this.clubListST = [];
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
    // this.navController.pop();
  }

  async logout() {
    return this.authService.logout();
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }

  private async showClubNotFoundAlert() {
    await this.uiService.showInfoDialog({
      header: "Club nicht gefunden",
      message:
        "Der eingegebene Club konnte nicht gefunden werden. Bitte überprüfen Sie die Eingabe und versuchen Sie es erneut.",
    });
  }

  private async showClubAlreadyJoinedAlert() {
    await this.uiService.showInfoDialog({
      header: "Club bereits beigetreten",
      message: "Sie sind diesem Club bereits beigetreten.",
    });
  }

  private async showClubRequestSentAlert() {
    await this.uiService.showInfoDialog({
      header: "Anfrage gesendet",
      message:
        "Ihre Anfrage wurde erfolgreich gesendet. Sie werden benachrichtigt, sobald sie bearbeitet wurde.",
    });
  }

  private async showClubRequestErrorAlert() {
    await this.uiService.showInfoDialog({
      header: "Fehler",
      message:
        "Beim Senden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    });
  }

  private async showClubRequestPendingAlert() {
    await this.uiService.showInfoDialog({
      header: "Anfrage ausstehend",
      message:
        "Sie haben bereits eine Anfrage an diesen Club gestellt. Bitte warten Sie auf die Bearbeitung.",
    });
  }

  private async showClubRequestRejectedAlert() {
    await this.uiService.showInfoDialog({
      header: "Anfrage abgelehnt",
      message:
        "Ihre Anfrage wurde abgelehnt. Bitte kontaktieren Sie den Club-Administrator für weitere Informationen.",
    });
  }
}
