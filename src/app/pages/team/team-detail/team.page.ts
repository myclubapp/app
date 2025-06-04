import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
  IonRouterOutlet,
  LoadingController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  Observable,
  catchError,
  combineLatest,
  forkJoin,
  lastValueFrom,
  map,
  of,
  startWith,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Browser } from "@capacitor/browser";
import { Team } from "src/app/models/team";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../../member/member.page";
import { TeamAdminListPage } from "../../team-admin-list/team-admin-list.page";
import { TeamMemberListPage } from "../../team-member-list/team-member-list.page";
import { Timestamp } from "firebase/firestore";
import { Club } from "src/app/models/club";
import { TeamExercisesPage } from "../team-exercises/team-exercises.page";
import { ChampionshipPage } from "../../championship/championship/championship.page";
import { TrainingsPage } from "../../training/trainings/trainings.page";
import { UiService } from "src/app/services/ui.service";
import { Optional } from "@angular/core";
import { TrainingService } from "src/app/services/firebase/training.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { JugendundsportService } from "src/app/services/jugendundsport.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
  standalone: false,
})
export class TeamPage implements OnInit {
  @Input("data") team: Team;

  team$: Observable<any>;
  isLoading = false;

  allowEdit: boolean = false;

  memberList$: Observable<Profile[]>;
  adminList$: Observable<Profile[]>;
  requestList$: Observable<Profile[]>;

  clubList$: Observable<Club[]>;
  clubAdminList$: Observable<Club[]>;
  teamAdminList$: Observable<Team[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    // private readonly router: Router,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private translate: TranslateService,
    private readonly uiService: UiService,
    private readonly jugendundsportService: JugendundsportService,
    private readonly loadingCtrl: LoadingController,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("data");
    // this.team$ = of(this.team);

    this.team$ = this.getTeam(this.team.id);
    // TODO GET CLUB BASED ON TEAM
    this.clubList$ = this.fbService.getClubList();
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }
  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }

  ngOnDestroy() {}

  enableChampionship(clubList) {
    return (
      clubList &&
      clubList.some((club) => club.hasFeatureChampionship == true) &&
      clubList.some((club) => this.team.clubId == club.id)
    );
  }
  enableMyClubPro(clubList) {
    return (
      clubList &&
      clubList.some((club) => club.hasFeatureMyClubPro == true) &&
      clubList.some((club) => this.team.clubId == club.id)
    );
  }

  async deleteTeam() {
    const confirmed = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(this.translate.get("team.delete.header")),
      message: await lastValueFrom(this.translate.get("team.delete.message")),
      confirmText: await lastValueFrom(
        this.translate.get("team.delete.confirm"),
      ),
      cancelText: await lastValueFrom(this.translate.get("team.delete.cancel")),
    });

    if (confirmed) {
      try {
        // Lösche das Team selbst
        await this.fbService.deleteTeam(this.team.id);

        await this.uiService.showSuccessToast(
          await lastValueFrom(this.translate.get("team.delete.success")),
        );
        await this.modalCtrl.dismiss(null, "deleted");
      } catch (error) {
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("team.delete.error")),
        );
        console.error("Fehler beim Löschen des Teams:", error);
      }
    }
  }

  async openTeamTrainingExercise() {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: TeamExercisesPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        training: { teamId: this.team.id, clubId: this.team.clubId },
      },
    });
    modal.present();

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  getTeam(teamId: string) {
    const calculateAge = (dateOfBirth) => {
      // console.log("DoB: " + JSON.stringify(dateOfBirth));
      const birthday = new Date(dateOfBirth.seconds * 1000);
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        // this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap(() => this.fbService.getTeamRef(teamId)),
      switchMap((team) => {
        if (!team) return of(null);
        return combineLatest({
          teamMembers: this.fbService.getTeamMemberRefs(teamId),
          teamAdmins: this.fbService.getTeamAdminRefs(teamId),
          teamRequests: this.fbService.getTeamRequestRefs(teamId),
        }).pipe(
          switchMap(({ teamMembers, teamAdmins, teamRequests }) => {
            const memberProfiles$ = teamMembers.map((member) =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...member, firstName: "Unknown", lastName: "Unknown" }),
                ),
              ),
            );
            const adminProfiles$ = teamAdmins.map((admin) =>
              this.userProfileService.getUserProfileById(admin.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...admin, firstName: "Unknown", lastName: "Unknown" }),
                ),
              ),
            );
            const teamRequests$ = teamRequests.map((request) =>
              this.userProfileService.getUserProfileById(request.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...request, firstName: "Unknown", lastName: "Unknown" }),
                ),
              ),
            );
            return forkJoin({
              teamMembers: forkJoin(memberProfiles$).pipe(startWith([])),
              teamAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
              teamRequests: forkJoin(teamRequests$).pipe(startWith([])),
            }).pipe(
              map(({ teamMembers, teamAdmins, teamRequests }) => ({
                teamMembers: teamMembers.filter(
                  (member) => member !== undefined,
                ), // Filter out undefined
                teamAdmins: teamAdmins.filter((admin) => admin !== undefined), // Filter out undefined
                teamRequests: teamRequests.filter(
                  (request) => request !== undefined,
                ), // Filter out undefined
              })),
            );
          }),
          map(({ teamMembers, teamAdmins, teamRequests }) => {
            const ages = teamMembers
              .map((member) =>
                member.hasOwnProperty("dateOfBirth")
                  ? calculateAge(member.dateOfBirth)
                  : 0,
              )
              .filter((age) => age > 0); // Filter out invalid or 'Unknown' ages
            // console.log(ages);

            const averageAge =
              ages.length > 0
                ? ages.reduce((a, b) => a + b, 0) / ages.length
                : 0; // Calculate average or set to 0 if no valid ages
            return {
              ...team,
              updated: Timestamp.fromMillis(team.updated.seconds * 1000)
                .toDate()
                .toISOString(),
              averageAge: averageAge.toFixed(1), // Keep two decimal places
              teamMembers,
              teamAdmins,
              teamRequests,
            };
          }),
        );
      }),
      catchError((err) => {
        this.toastActionError(err);
        console.error("Error in getTeamWithMembersAndAdmins:", err.message);
        return of(null);
      }),
    );
  }

  async openUrl(url: string) {
    Browser.open({
      url: url,
    });
  }

  async openMemberList() {
    console.log("open Team Member List");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: TeamMemberListPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        team: this.team,
      },
    });
    modal.present();

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openAdminList() {
    console.log("open Team Admin ");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: TeamAdminListPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        team: this.team,
      },
    });
    modal.present();

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openTeamTrainings() {
    console.log("open Team Trainings ");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: TrainingsPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        team: this.team,
        isModal: true,
      },
    });
    modal.present();

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openTeamGames() {
    console.log("open Team Games ");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ChampionshipPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        team: this.team,
        isModal: true,
      },
    });
    modal.present();

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async approveTeamRequest(request) {
    console.log(request);
    await this.fbService
      .approveUserTeamRequest(request.teamId, request.id)
      .then(() => {
        this.toastActionSaved();
      })
      .catch((err) => {
        this.toastActionError(err);
      });
  }

  async openMember(member: Profile) {
    console.log("openMember");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
      },
    });
    modal.present();

    const { role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  addMember() {
    this.team$
      .pipe(
        take(1), // Take only the first emission
        tap((team) => console.log("Team:", team)),
        switchMap((team) => {
          // If team does not exist or there are no team members, complete the stream
          if (!team || !team.clubRef || !team.clubRef.id) return of(null);

          // Fetch club members
          return this.fbService.getClubMemberRefs(team.clubRef.id).pipe(
            switchMap((members) => {
              if (!members.length) return of([]);

              // Fetch each member's user profile
              const memberDetails$ = members.map((member) =>
                this.userProfileService.getUserProfileById(member.id).pipe(
                  take(1),
                  catchError(() =>
                    of({
                      ...member,
                      firstName: "Unknown",
                      lastName: "Unknown",
                    }),
                  ),
                ),
              );

              return combineLatest(memberDetails$);
            }),
            map((memberProfiles) =>
              memberProfiles.filter((member) => member !== undefined),
            ),
            map((memberProfiles) =>
              memberProfiles.filter(
                (member) =>
                  !team.teamMembers.find((element) => element.id === member.id),
              ),
            ),
            map((filteredMembers) =>
              filteredMembers.map((member) => ({
                type: "checkbox",
                name: member.id,
                label: `${member.firstName} ${member.lastName}`,
                value: member,
                checked: false,
              })),
            ),
          );
        }),
        catchError((err) => {
          console.error("Error in addMember:", err);
          return of(null);
        }),
      )
      .subscribe(async (memberSelect: any) => {
        if (memberSelect && memberSelect.length > 0) {
          const alert = await this.alertCtrl.create({
            header: "Administrator hinzufügen",
            inputs: memberSelect,
            buttons: [
              {
                text: "Abbrechen",
                handler: () => console.log("Cancel clicked"),
              },
              {
                text: "Hinzufügen",
                handler: (teamMemberList) => {
                  console.log(teamMemberList);
                  for (const member of teamMemberList) {
                    this.approveTeamRequest({
                      teamId: this.team.id,
                      id: member.id,
                    });
                  }
                },
              },
            ],
          });
          await alert.present();
        }
      });
  }

  async addAdministrator() {
    try {
      // Fetch the team data
      const team = await lastValueFrom(this.team$.pipe(take(1)));

      let memberSelect = [];

      // Building the selection list for the alert
      team.teamMembers.forEach((member) => {
        if (!team.teamAdmins.find((element) => element.id === member.id)) {
          memberSelect.push({
            type: "checkbox",
            name: member.id,
            label: `${member.firstName} ${member.lastName}`,
            value: member,
            checked: false,
          });
        }
      });

      // Display the alert with selectable members
      if (memberSelect.length > 0) {
        const alert = await this.alertCtrl.create({
          header: "Administrator hinzufügen",
          inputs: memberSelect,
          buttons: [
            {
              text: "Abbrechen",
              role: "cancel",
              handler: () => console.log("Cancel clicked"),
            },
            {
              text: "Hinzufügen",
              handler: (data) => {
                console.log("Selected Data:", data);
                // Here you could add your logic to handle the adding of selected administrators
              },
            },
          ],
        });
        await alert.present();
      } else {
        console.log("No eligible members to add as administrators.");
      }
    } catch (error) {
      console.error("Error in adding administrator:", error);
    }
  }

  onInput(ev, fieldname) {
    console.log(ev.detail.value);
    this.fbService.setTeamThreshold(this.team.id, fieldname, ev.detail.value);
  }

  async toastActionSaved() {
    await this.presentToast();
  }
  async presentCancelToast() {
    await this.presentErrorToast(new Error("Action canceled"));
  }

  async toastActionError(error) {
    await this.presentErrorToast(error);
  }

  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  async changeJahresbeitrag(team: Team) {
    const alert = await this.alertCtrl.create({
      header: "Jahresbeitrag ändern",
      inputs: [
        {
          name: "wert",
          type: "number",
          placeholder: "Wert",
          value: team.jahresbeitragWert,
        },
        {
          name: "waehrung",
          type: "text",
          placeholder: "Währung (z.B. CHF)",
          value: team.jahresbeitragWaehrung,
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
        },
        {
          text: "Speichern",
          handler: async (data) => {
            try {
              await this.fbService.setTeamThreshold(
                this.team.id,
                "jahresbeitragWert",
                Number(data.wert),
              );
              await this.fbService.setTeamThreshold(
                this.team.id,
                "jahresbeitragWaehrung",
                data.waehrung,
              );
              await this.presentToast();
            } catch (error) {
              await this.presentErrorToast(error);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async exportTrainingData() {
    const loading = await this.loadingCtrl.create({
      message: "Export wird vorbereitet...",
      spinner: "circular",
    });
    await loading.present();

    try {
      await this.jugendundsportService.exportTrainingData(this.team);
    } finally {
      await loading.dismiss();
    }
  }

  async exportChampionshipData() {
    const loading = await this.loadingCtrl.create({
      message: "Export wird vorbereitet...",
      spinner: "circular",
    });
    await loading.present();

    try {
      await this.jugendundsportService.exportChampionshipData(this.team);
    } finally {
      await loading.dismiss();
    }
  }

  async exportAttendanceData() {
    const loading = await this.loadingCtrl.create({
      message: "Export wird vorbereitet...",
      spinner: "circular",
    });
    await loading.present();

    try {
      await this.jugendundsportService.exportAttendanceData(this.team);
    } finally {
      await loading.dismiss();
    }
  }

  async exportPersonData() {
    const loading = await this.loadingCtrl.create({
      message: "Export wird vorbereitet...",
      spinner: "circular",
    });
    await loading.present();

    try {
      await this.jugendundsportService.exportPersonData(this.team);
    } finally {
      await loading.dismiss();
    }
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.team, "confirm");
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }
}
