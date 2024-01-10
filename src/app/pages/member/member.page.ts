import { Component, Input, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  finalize,
  first,
  forkJoin,
  lastValueFrom,
  map,
  of,
  startWith,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Team } from "src/app/models/team";
import { Profile } from "src/app/models/user";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-member",
  templateUrl: "./member.page.html",
  styleUrls: ["./member.page.scss"],
})
export class MemberPage implements OnInit {
  @Input("data") userProfile: Profile;
  @Input("isRequest") isRequest: boolean;
  @Input("clubId") clubId: string;
  userProfile$: Observable<Profile>;
  skeleton = new Array(12);

  teamAdminList$: Observable<Team[]>;

  alertTeamSelection = [];

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly profileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private navParams: NavParams,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.isRequest = this.navParams.get("isRequest");
    this.clubId = this.navParams.get("clubId");
    this.userProfile = this.navParams.get("data");
    this.userProfile$ = of(this.userProfile);
    this.userProfile$ = this.getUserProfile(this.userProfile.id);

    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.teamAdminList$.forEach((teamList) => {
      for (const team of teamList) {
        this.alertTeamSelection.push(
          {
            label: team.name,
            type: 'checkbox',
            value: team.id,
            checked: false
          }
        )
      }
      return teamList;
    });

  }

  getUserProfile(id) {
    return this.profileService.getUserProfileById(id);
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
    // this.navController.pop();
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
    /*this.navController.navigateBack("championship", {
      state: {
        role: "confirm",
        data: this.game,
      },
    });*/
  }

  async approveClubRequest(user) {
    console.log(user);
    const alert = await this.alertCtrl.create({
      message: (
        (await lastValueFrom(
          this.translate.get("club.want_to_add__user__to_club_string")
        )) ?? ""
      ).replace("{userName}", `${user.firstName} ${user.lastName}`),
      subHeader: "",
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.yes")),
          role: "confirm",
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
        },
      ],
      htmlAttributes: { "aria-label": "alert dialog" },
    });
    await alert.present();
    const { role, data } = await alert.onDidDismiss();

    if (role == "confirm") {
      await this.fbService.approveUserClubRequest(this.clubId, user.id);
      const toast = await this.toastCtrl.create({
        message: await lastValueFrom(
          this.translate.get("club.success__user_added")
        ),
        color: "primary",
        duration: 1500,
        position: "bottom",
      });
      await toast.present();

      await this.assignTeamAlert(user);
    } else {
      await this.toastActionCanceled();
    }
  }

  async assignTeamAlert(user) {
    console.log(user);
    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(this.translate.get("club.select__team")),
      message: (
        (await lastValueFrom(
          this.translate.get("club.want_to_add__user__to_team_string")
        )) ?? ""
      ).replace("{userName}", `${user.firstName} ${user.lastName}`),
      inputs: this.alertTeamSelection,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("club.add")),
          role: "confirm",
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
        },
      ],
      htmlAttributes: { "aria-label": "alert dialog selcting teams" },
    });
    await alert.present();
    const { role, data } = await alert.onDidDismiss();
    console.log(data);

    if (role == "confirm") {
      for (const teamId of data.values) {
        await this.fbService.approveUserTeamRequest(teamId, user.id);
      }
      const toast = await this.toastCtrl.create({
        message: (
          (await lastValueFrom(
            this.translate.get("club.success__added_user_to_team_string")
          )) ?? ""
        )
          .replace("{userName}", `${user.firstName} ${user.lastName}`)
          .replace("length", `${data.values.length}`),
        color: "primary",
        duration: 1500,
        position: "bottom",
      });
      await toast.present();
      this.close();
    } else {
      await this.toastActionCanceled();
    }
  }

  async deleteClubRequest(user) {
    console.log(user);
    await this.fbService.deleteUserClubRequest(this.clubId, user.id);
    await this.toastActionSaved();
    this.close();
  }

  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("club.action__canceled")),
      duration: 1500,
      position: "bottom",
      color: "danger",
    });
    await toast.present();
  }



}
