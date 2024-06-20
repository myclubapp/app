import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Team } from "src/app/models/team";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable, take } from "rxjs";
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

  allowEdit: boolean = false;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,

  ) {}

  ngOnInit() {
    this.teamList$ = this.fbService.getTeamList();
  }

  ngOnDestroy() {}

  async leaveTeam(team){
    this.authService.getUser$().subscribe(userProfile=>{
      this.fbService.leaveTeam(team.id, userProfile.uid);
    })
  }

  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
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
