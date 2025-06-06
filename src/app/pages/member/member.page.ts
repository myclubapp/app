import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  AlertInput,
  ModalController,
  NavParams,
  ToastController,
  IonRouterOutlet,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { Clipboard } from "@capacitor/clipboard";
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
import { Club } from "src/app/models/club";
import { UiService } from "src/app/services/ui.service";
import { RouterOutlet } from "@angular/router";
import { Optional } from "@angular/core";

@Component({
  selector: "app-member",
  templateUrl: "./member.page.html",
  styleUrls: ["./member.page.scss"],
  standalone: false,
})
export class MemberPage implements OnInit {
  @Input("data") userProfile: Profile;
  @Input("isRequest") isRequest: boolean;
  @Input("clubId") clubId: string;
  @Input("teamId") teamId: string;
  userProfile$: Observable<Profile>;
  skeleton = new Array(12);

  isParent: boolean;

  $requestTeam: Observable<Team>;

  teamAdminList$: Observable<Team[]>;
  clubAdminList$: Observable<Club[]>;

  isAdmin$: Observable<boolean>;

  alertTeamSelection = [];

  alertButtonsApproveClub = [];

  children$: Observable<Profile[]>;
  parents$: Observable<Profile[]>;
  constructor(
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly profileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private navParams: NavParams,
    private translate: TranslateService,
    private readonly uiService: UiService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    this.isRequest = this.navParams.get("isRequest");
    this.isParent = this.navParams.get("data").isParent || false;
    const requestTeamId = this.navParams.get("data")?.requestTeamId;
    this.$requestTeam = requestTeamId
      ? this.fbService.getTeamRef(requestTeamId)
      : of(null);

    this.clubId = this.navParams.get("clubId");
    this.teamId = this.navParams.get("teamId");
    this.userProfile = this.navParams.get("data");
    console.log("isParent: " + this.userProfile.isParent);

    // this.userProfile$ = of(this.userProfile);
    this.userProfile$ = this.getUserProfile(this.userProfile.id);

    this.children$ = this.profileService.getChildren(this.userProfile.id).pipe(
      switchMap((children) => {
        if (!children.length) return of([]);
        return combineLatest(
          children.map((child) =>
            this.profileService.getUserProfileById(child.id),
          ),
        );
      }),
      tap((children) => {
        console.log("children: " + children);
      }),
      catchError((error) => {
        console.error("Error fetching children:", error);
        return of([]);
      }),
    );

    this.parents$ = this.profileService.getParents(this.userProfile.id).pipe(
      switchMap((parents) => {
        if (!parents.length) return of([]);
        return combineLatest(
          parents.map((parent) =>
            this.profileService.getUserProfileById(parent.id),
          ),
        );
      }),
      tap((parents) => {
        console.log("parents with details: ", parents);
      }),
      catchError((error) => {
        console.error("Error fetching parents:", error);
        return of([]);
      }),
    );

    this.setupAlerts();

    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.teamAdminList$ = this.fbService.getTeamAdminList();

    this.isAdmin$ = combineLatest([
      this.teamAdminList$,
      this.clubAdminList$,
    ]).pipe(
      map(([teamAdminList, clubAdminList]) => {
        return (
          this.fbService.isTeamAdmin(teamAdminList, this.teamId) ||
          this.fbService.isClubAdmin(clubAdminList, this.clubId)
        );
      }),
    );
  }

  ngOnDestroy() {}

  async copy(value) {
    await Clipboard.write({
      string: value,
    });
    await this.uiService.showClipboardSuccessToast();
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
      await this.fbService.approveUserClubRequest(
        this.clubId,
        this.userProfile.id,
        this.isParent,
      );
      const message = await lastValueFrom(
        this.translate.get("club.success__user_added"),
      );
      await this.uiService.showSuccessToast(message);
      if (this.isParent) {
        this.close();
        return;
      }
      this.getTeamAndClubTeamsAsAdmin();
      this.close();
    } catch (error) {
      console.error("Failed to add member:", error);
      await this.uiService.showErrorToast("Failed to add member");
    }
  }

  async getTeamAndClubTeamsAsAdmin() {
    const teamAdmins$ = this.getUserTeamAdminList();
    const clubTeams$ = this.getUserClubTeamList();

    try {
      const { teamAdmins, clubTeams } = await lastValueFrom(
        combineLatest({
          teamAdmins: teamAdmins$,
          clubTeams: clubTeams$,
        }).pipe(take(1)),
      );
      console.log(teamAdmins, clubTeams);

      const teams = [
        ...(teamAdmins?.filter((team) => team !== undefined) || []),
        ...(clubTeams?.filter((team) => team !== undefined) || []),
      ].filter(
        (team, index, self) =>
          index === self.findIndex((t) => t.id === team.id),
      );

      await this.prepareAlertForTeams(teams);
    } catch (error) {
      console.error("Error combining team data:", error);
    }
  }

  /*
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
    }*/

  getUserTeamAdminList() {
    // Get all Teams, where user is Team Admin, but only for given club
    return this.fbService.getTeamAdminListByClubId(this.clubId).pipe(
      take(1),
      catchError((error) => {
        console.error("Failed to fetch direct admin teams", error);
        return of([]);
      }),
    );
  }

  getUserClubTeamList() {
    return this.fbService.getClubAdminListByClubId(this.clubId).pipe(
      take(1),
      switchMap((clubs) =>
        clubs.length ? this.fetchTeamsForClubs(clubs) : of([]),
      ),
      catchError((error) => {
        console.error("Failed to fetch clubs or club teams", error);
        return of([]);
      }),
    );
  }

  fetchTeamsForClubs(clubs) {
    return combineLatest(
      clubs.map((club) => this.fbService.getClubTeamList(club.id)),
    ).pipe(map((teamsList: any) => teamsList.flat()));
  }

  async prepareAlertForTeams(teams) {
    console.log("prepareAlertForTeams teams: " + teams);
    if (!teams.length) {
      console.log("No teams found for alert preparation.");
      return;
    }

    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(
        this.translate.get("club.select_team_header"),
      ),
      subHeader: await lastValueFrom(
        this.translate.get("club.select_team_subheader"),
      ),
      inputs: teams.map((team) => ({
        label: team.name,
        type: "checkbox",
        value: team.id,
        checked: false,
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
        },
      },
      {
        text: this.translate.instant("common.add"),
        handler: (data) => {
          //console.log(data)
          this.addTeams(data);
        },
      },
    ];
  }

  async addTeams(teams) {
    console.log(teams);
    for (const team of teams) {
      // Add user to team
      console.log("add user " + this.userProfile.id + " to team: " + team);
      await this.fbService.approveUserTeamRequest(team, this.userProfile.id);
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

  async openMember(member: Profile) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
        clubId: this.clubId,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async deleteClubRequest(user) {
    console.log(user);
    await this.fbService.deleteUserClubRequest(this.clubId, user.id);
    await this.uiService.showRequestDeletedToast();
    this.close();
  }
}
