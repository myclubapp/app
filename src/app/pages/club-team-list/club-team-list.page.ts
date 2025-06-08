import { Component, Input, OnInit } from "@angular/core";
import {
  ModalController,
  ToastController,
  AlertController,
  IonRouterOutlet,
} from "@ionic/angular";
import { NavParams } from "@ionic/angular/common";
import { Observable, lastValueFrom } from "rxjs";
import { Team } from "src/app/models/team";
import { FirebaseService } from "src/app/services/firebase.service";
import { TeamPage } from "../team/team-detail/team.page";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { map } from "rxjs/operators";
import { UiService } from "src/app/services/ui.service";
import { Optional } from "@angular/core";

@Component({
  selector: "app-club-team-list",
  templateUrl: "./club-team-list.page.html",
  styleUrls: ["./club-team-list.page.scss"],
  standalone: false,
})
export class ClubTeamListPage implements OnInit {
  @Input("clubId") clubId: any;

  teamList$: Observable<Team[]>;
  club$: Observable<any>;
  clubAdminList$: Observable<Club[]>;
  isAdmin$: Observable<boolean>;

  public alertButtonsAddTeam = [];
  public alertInputsAddTeam = [];

  constructor(
    private translate: TranslateService,
    private readonly fbService: FirebaseService,
    private readonly toastController: ToastController,
    private readonly modalCtrl: ModalController,
    private readonly toastCtrl: ToastController,
    private readonly navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly uiService: UiService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {
    this.clubId = this.navParams.get("clubId");
    this.teamList$ = this.fbService.getClubTeamList(this.clubId);

    this.club$ = this.fbService.getClubRef(this.clubId);
  }

  ngOnInit() {
    this.setupAlerts();
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.isAdmin$ = this.clubAdminList$.pipe(
      map((clubAdminList) =>
        this.fbService.isClubAdmin(clubAdminList, this.clubId),
      ),
    );
  }

  setupAlerts() {
    this.alertInputsAddTeam = [
      {
        label: "Team Name", // this.translate.instant("profile.change_email_old_label"),
        placeholder: "Team Name",
        name: "name",
        type: "text",
        value: "",
      },
      {
        label: "Webseite", // this.translate.instant("profile.change_email_old_label"),
        placeholder: "Webseite",
        name: "website",
        type: "url",
        value: "https://",
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
          await this.presentToast();
        },
      },
    ];
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }

  private async showDeleteTeamConfirmationAlert() {
    await this.uiService.showConfirmDialog({
      header: "Team löschen",
      message: "Möchten Sie dieses Team wirklich löschen?",
      confirmText: "Ja",
      cancelText: "Nein",
    });
  }

  private async showDeleteTeamSuccessAlert() {
    await this.uiService.showInfoDialog({
      header: "Erfolg",
      message: "Das Team wurde erfolgreich gelöscht.",
    });
  }

  private async showDeleteTeamErrorAlert() {
    await this.uiService.showInfoDialog({
      header: "Fehler",
      message:
        "Beim Löschen des Teams ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    });
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

  openAddClubTeam() {}

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }

  async openTeam(team: Team) {
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
