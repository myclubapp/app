import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet, NavParams } from '@ionic/angular/common';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/team';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TeamPage } from '../team/team-detail/team.page';

@Component({
  selector: 'app-club-team-list',
  templateUrl: './club-team-list.page.html',
  styleUrls: ['./club-team-list.page.scss'],
})
export class ClubTeamListPage implements OnInit {
  @Input("clubId") club: any;
  teamList$: Observable<Team[]>;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
  ) {
    const clubId =  this.navParams.get("clubId");

    this.teamList$ = this.fbService.getClubTeamList(clubId);
  }

  ngOnInit() {
  }

  async openModal(team: Team) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: TeamPage,
      presentingElement: await this.modalCtrl.getTop(),
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

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }
}
