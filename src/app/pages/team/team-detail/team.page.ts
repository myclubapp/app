import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
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
import { Timestamp } from "@angular/fire/firestore";
import { Club } from "src/app/models/club";
import { TeamExercisesPage } from "../team-exercises/team-exercises.page";
import { ChampionshipPage } from "../../championship/championship/championship.page";
import { TrainingsPage } from "../../training/trainings/trainings.page";
import { UiService } from "src/app/services/ui.service";
import { Optional } from "@angular/core";
import { JugendundsportService } from "src/app/services/jugendundsport.service";
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import * as XLSX from "xlsx";

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
  standalone: false,
})
export class TeamPage implements OnInit {
  @Input() data!: Team;

  team: Team;

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
    // NavParams migration: now using @Input property directly
    this.team = this.data;

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
        take(1),
        tap((team) => console.log("Team:", team)),
        switchMap((team) => {
          if (!team || !team.clubRef || !team.clubRef.id) return of(null);

          return this.fbService.getClubMemberRefs(team.clubRef.id).pipe(
            switchMap((members) => {
              if (!members.length) return of([]);

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
          const result = await this.uiService.showFormDialog({
            header: await lastValueFrom(
              this.translate.get("team.add_member.header"),
            ),
            inputs: memberSelect,
            confirmText: await lastValueFrom(
              this.translate.get("team.add_member.add"),
            ),
            cancelText: await lastValueFrom(
              this.translate.get("team.add_member.cancel"),
            ),
          });

          if (result) {
            for (const member of result) {
              await this.approveTeamRequest({
                teamId: this.team.id,
                id: member.id,
              });
            }
          }
        } else {
          await this.uiService.showInfoDialog({
            header: await lastValueFrom(
              this.translate.get("team.add_member.header"),
            ),
            message: await lastValueFrom(
              this.translate.get("team.add_member.no_members"),
            ),
          });
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
        const result = await this.uiService.showFormDialog({
          header: await lastValueFrom(
            this.translate.get("team.add_admin.header"),
          ),
          inputs: memberSelect,
          confirmText: await lastValueFrom(
            this.translate.get("team.add_admin.add"),
          ),
          cancelText: await lastValueFrom(
            this.translate.get("team.add_admin.cancel"),
          ),
        });

        if (result) {
          for (const member of result) {
            await this.approveTeamRequest({
              teamId: this.team.id,
              id: member.id,
            });
          }
        }
      } else {
        await this.uiService.showInfoDialog({
          header: await lastValueFrom(
            this.translate.get("team.add_admin.header"),
          ),
          message: await lastValueFrom(
            this.translate.get("team.add_admin.no_members"),
          ),
        });
      }
    } catch (error) {
      console.error("Error in adding administrator:", error);
      await this.uiService.showErrorToast(error.message);
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

  async openDateRangeDialog(
    exportType: "training" | "championship" | "attendance",
  ) {
    const result = await this.uiService.showFormDialog({
      header: await lastValueFrom(
        this.translate.get("team.export.date_range.header"),
      ),
      inputs: [
        {
          name: "startDate",
          type: "date",
          label: await lastValueFrom(
            this.translate.get("team.export.date_range.start"),
          ),
          value: new Date().toISOString().split("T")[0],
        },
        {
          name: "endDate",
          type: "date",
          label: await lastValueFrom(
            this.translate.get("team.export.date_range.end"),
          ),
          value: new Date().toISOString().split("T")[0],
        },
      ],
      confirmText: await lastValueFrom(
        this.translate.get("team.export.date_range.export"),
      ),
      cancelText: await lastValueFrom(
        this.translate.get("team.export.date_range.cancel"),
      ),
    });

    if (result) {
      const loading = await this.loadingCtrl.create({
        message: await lastValueFrom(this.translate.get("team.export.header")),
        spinner: "circular",
      });
      await loading.present();

      try {
        // console.log("result", result);
        const startDate = new Date(result.values.startDate);
        const endDate = new Date(result.values.endDate);

        switch (exportType) {
          case "training":
            await this.exportTrainingData(startDate, endDate);
            break;
          case "championship":
            await this.exportChampionshipData(startDate, endDate);
            break;
          case "attendance":
            await this.exportAttendanceData(startDate, endDate);
            break;
        }
      } finally {
        await loading.dismiss();
      }
    }
  }

  async exportTrainingData(startDate: Date, endDate: Date) {
    try {
      await this.jugendundsportService.exportTrainingData(
        this.team,
        startDate,
        endDate,
      );
    } catch (error) {
      await this.presentErrorToast(error);
    }
  }

  async exportChampionshipData(startDate: Date, endDate: Date) {
    try {
      await this.jugendundsportService.exportChampionshipData(
        this.team,
        startDate,
        endDate,
      );
    } catch (error) {
      await this.presentErrorToast(error);
    }
  }

  async exportAttendanceData(startDate: Date, endDate: Date) {
    try {
      await this.jugendundsportService.exportAttendanceData(
        this.team,
        startDate,
        endDate,
      );
    } catch (error) {
      await this.presentErrorToast(error);
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

  async openGameCenterExport() {
    const loading = await this.loadingCtrl.create({
      message: "Export wird vorbereitet...",
      spinner: "circular",
    });
    await loading.present();

    // Teamdaten laden
    const team = await lastValueFrom(this.team$.pipe(take(1)));
    if (!team || !team.teamMembers || team.teamMembers.length === 0) {
      await loading.dismiss();
      await this.uiService.showInfoDialog({
        header: "Export",
        message: "Keine Teammitglieder vorhanden.",
      });
      return;
    }

    // Spaltenüberschriften wie im Screenshot

    const headers = [
      "Team Role", // 0
      "License nr",
      "Gender",
      "First name",
      "Last name",
      "Phone",
      "E-mail",
      "Shirt number",

      "Guardian 1 First name", // 8
      "Guardian 1 Last name",
      "Guardian 1 phone",
      "Guardian 1 e-mail",

      "Guardian 2 First name",
      "Guardian 2 Last name",
      "Guardian 2 phone",
      "Guardian 2 e-mail",
      "image.png",
      "",
    ];

    // XLSX-Daten aufbereiten (Array of Arrays)
    const xlsxData = team.teamMembers.map((member) => {
      const genderText =
        member.gender === "m"
          ? "Male"
          : member.gender === "f"
            ? "Female"
            : "Male";
      return [
        member.teamRole || "Player",
        member.licenseNumber || "",
        genderText,
        member.firstName || "",
        member.lastName || "",
        member.phonenumber || "",
        member.email || "",
        member.shirtNumber || "",

        member.guardian1FirstName || "",
        member.guardian1LastName || "",
        member.guardian1Phone || "",
        member.guardian1Email || "",

        member.guardian2FirstName || "",
        member.guardian2LastName || "",
        member.guardian2Phone || "",
        member.guardian2Email || "",
        "", // image.png
        "",
      ];
    });

    // XLSX-Logik (SheetJS)
    // @ts-ignore

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([headers, ...xlsxData]);
    const ws2: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([[], ...[]]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Blad1");
    XLSX.utils.book_append_sheet(wb, ws2, "Blad2");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `team_gamecenter_export_${team.name || "team"}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    await loading.dismiss();
    await this.uiService.showSuccessToast("Excel-Export erfolgreich erstellt.");
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

  async changeTeamLogo(team: Team) {
    try {
      const photo: Photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt,
        width: 400,
        height: 400,
      });
      await this.fbService.setTeamLogo(team.id, photo);
      // Team-Observable neu laden
      // this.team$ = this.getTeam(team.id);
      await this.presentToast();
    } catch (error) {
      await this.presentErrorToast(error);
    }
  }
}
