import { Component, Input, OnInit } from "@angular/core";
import { AlertController, AlertInput, ModalController, NavParams, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { Clipboard } from '@capacitor/clipboard';
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

  alertButtonsApproveClub = [];

  teamAdminListSubscription: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly profileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private navParams: NavParams,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.isRequest = this.navParams.get("isRequest");
    this.clubId = this.navParams.get("clubId");
    this.userProfile = this.navParams.get("data");
    // this.userProfile$ = of(this.userProfile);
    this.userProfile$ = this.getUserProfile(this.userProfile.id);

    this.setupAlerts();


    // CHANGE ThIS To CLUBadMIN AND / OR TEAM ADMIN LIST
    // this.getTeamAndClubTeamsAsAdmin();
    // Get Array of all Clubs, that user is Admin
    /*this.fbService.getClubAdminList()
    // Get all Teams of that club.
    this.fbService.getClubTeamList(club.id)

    // Get all Teams, that user is admin.
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
  */
  }

  ngOnDestroy() {
    if (this.teamAdminListSubscription) {
      this.teamAdminListSubscription.unsubscribe();
    }
  }

  async copy(value) {
    await Clipboard.write({
      string: value
    });
    this.toastActionClipboard();
  }

  getUserProfile(id) {
    return this.profileService.getUserProfileById(id);
  }

  setupAlerts() {
    this.alertButtonsApproveClub = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: () => {
          console.log("Cancel operation");
          this.toastActionCanceled();
          this.close();
        },
      },
      {
        text: this.translate.instant("common.add"),
        handler: () => this.handleAddMember(),
      },
    ];
  }

  async handleAddMember() {
    try {
      await this.fbService.approveUserClubRequest(this.clubId, this.userProfile.id);
      const message = await lastValueFrom(this.translate.get("club.success__user_added"));
      const toast = await this.toastCtrl.create({
        message,
        color: "success",
        duration: 1500,
        position: "top",
      });
      await toast.present();
      this.getTeamAndClubTeamsAsAdmin();
      this.close();
    } catch (error) {
      console.error('Failed to add member:', error);
      // handle errors, perhaps show an error toast
    }
  }

  getTeamAndClubTeamsAsAdmin() {
    const teamAdmins$ = this.getUserTeamAdminList();
    const clubTeams$ = this.getUserClubTeamList();

    this.teamAdminListSubscription = combineLatest([teamAdmins$, clubTeams$]).pipe(
      tap(([teamAdmins, clubTeams]) => { console.log(teamAdmins, clubTeams) }),
      map(([teamAdmins, clubTeams]) => [...teamAdmins, ...clubTeams].filter(
        (team, index, self) => index === self.findIndex(t => t.id === team.id)
      )),
      tap(teams => this.prepareAlertForTeams(teams)),
      catchError(error => {
        console.error('Error combining team data:', error);
        return of([]);
      })
    ).subscribe(data => {
      // this.teamAdminList = data;
    });
  }

  getUserTeamAdminList() {
    // Get all Teams, where user is Team Admin, but only for given club
    return this.fbService.getTeamAdminListByClubId(this.clubId).pipe(
      take(1),
      catchError(error => {
        console.error("Failed to fetch direct admin teams", error);
        return of([]);
      })
    );
  }

  getUserClubTeamList() {
    return this.fbService.getClubAdminListByClubId(this.clubId).pipe(
      take(1),
      switchMap(clubs => clubs.length ? this.fetchTeamsForClubs(clubs) : of([])),
      catchError(error => {
        console.error("Failed to fetch clubs or club teams", error);
        return of([]);
      })
    );
  }

  fetchTeamsForClubs(clubs) {
    return combineLatest(
      clubs.map(club => this.fbService.getClubTeamList(club.id))
    ).pipe(map((teamsList: any) => teamsList.flat()));
  }

  async prepareAlertForTeams(teams) {
    console.log("prepareAlertForTeams teams: " + teams)
    if (!teams.length) {
      console.log("No teams found for alert preparation.");
      return;
    }

    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(this.translate.get("club.select_team_header")),
      subHeader: await lastValueFrom(this.translate.get("club.select_team_subheader")),
      inputs: teams.map(team => ({
        label: team.name,
        type: 'checkbox',
        value: team.id,
        checked: false
      })),
      buttons: this.getAlertButtons(teams),
    });
    await alert.present();
  }

  getAlertButtons(teams) {
    return [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: () => {
          console.log("Alert canceled");
          this.toastActionCanceled();
        }
      },
      {
        text: this.translate.instant("common.add"),
        handler: () => {
          this.addTeams(teams);
          this.toastActionSaved();
        }
      },
    ];
  }

  async addTeams(teams) {
    for (const team of teams) {
      // Add user to team
      console.log("add user " + this.userProfile.id + " to team: " + team.id);
      await this.fbService.approveUserTeamRequest(team.id, this.userProfile.id);
    }
    console.log("Teams added");
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


  async deleteClubRequest(user) {
    console.log(user);
    await this.fbService.deleteUserClubRequest(this.clubId, user.id);
    await this.toastActionRequestDeleted();
    this.close();
  }

  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }

  async toastActionClipboard() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.success__copy")),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }

  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.action__canceled")),
      duration: 1500,
      position: "top",
      color: "danger",
    });
    await toast.present();
  }

  async toastActionRequestDeleted() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("club.action__request_deleted")),
      duration: 1500,
      position: "top",
      color: "danger",
    });
    await toast.present();
  }

}
