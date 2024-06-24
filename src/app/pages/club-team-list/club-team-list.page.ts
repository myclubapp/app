import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { IonRouterOutlet, NavParams } from '@ionic/angular/common';
import { Observable, lastValueFrom } from 'rxjs';
import { Team } from 'src/app/models/team';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TeamPage } from '../team/team-detail/team.page';
import { TranslateService } from '@ngx-translate/core';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-team-list',
  templateUrl: './club-team-list.page.html',
  styleUrls: ['./club-team-list.page.scss'],
})
export class ClubTeamListPage implements OnInit {
  @Input("clubId") clubId: any;
  
  teamList$: Observable<Team[]>;

  clubAdminList$: Observable<Club[]>;
  
  public alertButtonsAddTeam = [];
  public alertInputsAddTeam = [];

  constructor(
    private translate: TranslateService,
    private readonly fbService: FirebaseService,
    private readonly toastController: ToastController,
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
  ) {
    const clubId =  this.navParams.get("clubId");

    this.teamList$ = this.fbService.getClubTeamList(clubId);
  }

  ngOnInit() {
    this.setupAlerts();
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  setupAlerts(){
    this.alertInputsAddTeam = [
      {
        label: "Team Name", // this.translate.instant("profile.change_email_old_label"),
        placeholder: "Team Name",
        name: "name",
        type: "text",
        value: ""
      },
      {
        label: "Webseite", // this.translate.instant("profile.change_email_old_label"),
        placeholder: "Webseite",
        name: "website",
        type: "url",
        value: "https://"
      },
    ];

    this.alertButtonsAddTeam = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: (data) => {
          console.log(data);
        },
      },
      {
        text: this.translate.instant("common.save"),
        handler: async (data) => {
          console.log(data);
          let teamId = await this.fbService.addClubTeam(data, this.clubId);
          await this.toastActionSaved();
        },
      },
    ];
  }

  async toastActionSaved() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
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

  openAddClubTeam(){



  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }
}
