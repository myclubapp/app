import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Team } from "src/app/models/team";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import {
  Observable,
  catchError,
  first,
  lastValueFrom,
  of,
  switchMap,
  take,
} from "rxjs";
import { User } from "@angular/fire/auth";
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TeamPage } from "../team/team-detail/team.page";
import { Profile } from "src/app/models/user";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { TranslateService } from "@ngx-translate/core";
import { Optional } from "@angular/core";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.page.html",
  styleUrls: ["./team-list.page.scss"],
  standalone: false,
})
export class TeamListPage implements OnInit {
  teamList$: Observable<Team[]>;
  availableTeamList$: Observable<Team[]>;

  skeleton = new Array(12);

  allowEdit: boolean = false;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
    private translate: TranslateService,
    private readonly modalCtrl: ModalController,
    private readonly toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    this.teamList$ = this.fbService.getTeamList();
  }

  ngOnDestroy() {}

  async leaveTeam(team) {
    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("team-list.leave_team__confirm"),
      ),
      buttons: [
        {
          role: "destructive",
          text: await lastValueFrom(this.translate.get("common.no")),
          handler: () => {
            console.log("nein");
            this.presentCancelToast();
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.yes")),
          handler: async () => {
            this.authService
              .getUser$()
              .pipe(
                first(), // Ensures that only the first value is taken and the observable completes.
                switchMap((userProfile) => {
                  if (userProfile) {
                    return this.fbService.leaveTeam(team.id, userProfile.uid);
                  } else {
                    return of(null); // Handle the case where userProfile is not available.
                  }
                }),
                catchError((err) => {
                  console.error("Error leaving team:", err);
                  return of(null); // Handle errors gracefully.
                }),
              )
              .subscribe({
                next: () => {
                  console.log("Successfully left the team.");
                  // Optional: Add additional logic after leaving the team successfully.
                },
                error: (err) => console.error("An error occurred:", err),
              });
          },
        },
      ],
    });
    alert.present();
  }
  async presentCancelToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.warning__action_canceled"),
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  async openModal(team: Team) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: TeamPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: team,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
}
