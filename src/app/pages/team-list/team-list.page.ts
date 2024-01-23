import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Team } from "src/app/models/team";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable } from "rxjs";
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

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.page.html",
  styleUrls: ["./team-list.page.scss"],
})
export class TeamListPage implements OnInit {
  teamList$: Observable<Team[]>;
  availableTeamList$: Observable<Team[]>;

  skeleton = new Array(12);
  userProfile$: Observable<Profile>;
  user: User;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly alertController: AlertController,
    private readonly profileService: UserProfileService,
    private readonly toastController: ToastController,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.teamList$ = this.fbService.getTeamList();
  }

  ngOnDestroy() {}

  async openModal(team: Team) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: TeamPage,
      presentingElement: this.routerOutlet.nativeEl,
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
