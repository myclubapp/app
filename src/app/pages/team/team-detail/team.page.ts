import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  concat,
  concatAll,
  concatMap,
  defaultIfEmpty,
  finalize,
  forkJoin,
  from,
  lastValueFrom,
  map,
  merge,
  mergeMap,
  of,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  timeout,
  toArray,
} from "rxjs";
import { Team } from "src/app/models/team";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../../member/member.page";

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
})
export class TeamPage implements OnInit {
  @Input("data") team: Team;

  team$: Observable<any>;

  user$: Observable<User>;
  user: User;

  allowEdit: boolean = false;

  memberList$: Observable<Profile[]>;
  adminList$: Observable<Profile[]>;
  requestList$: Observable<Profile[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly toastController: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("data");
    this.team$ = of(this.team);

    this.team$ = this.getTeam(this.team.id);
    this.team$.subscribe({
      next: (data) => {
        console.log(">> Tean Data");
        console.log(data);
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Team Error in subscription:", err),
      complete: () => console.log("team Observable completed"),
    });
  }

  ngOnDestroy() {}

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
        this.user = user;
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
                  of({ ...member, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
            const adminProfiles$ = teamAdmins.map((admin) =>
              this.userProfileService.getUserProfileById(admin.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...admin, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
            const teamRequests$ = teamRequests.map((request) =>
              this.userProfileService.getUserProfileById(request.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...request, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
            return forkJoin({
              teamMembers: forkJoin(memberProfiles$).pipe(startWith([])),
              teamAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
              teamRequests: forkJoin(teamRequests$).pipe(startWith([])),
            }).pipe(
              map(({ teamMembers, teamAdmins, teamRequests }) => ({
                teamMembers: teamMembers.filter(
                  (member) => member !== undefined
                ), // Filter out undefined
                teamAdmins: teamAdmins.filter((admin) => admin !== undefined), // Filter out undefined
                teamRequests: teamRequests.filter(
                  (request) => request !== undefined
                ), // Filter out undefined
              }))
            );
          }),
          map(({ teamMembers, teamAdmins, teamRequests }) => {
            const ages = teamMembers
              .map((member) =>
                member.hasOwnProperty("dateOfBirth")
                  ? calculateAge(member.dateOfBirth)
                  : 0
              )
              .filter((age) => age > 0); // Filter out invalid or 'Unknown' ages
            // console.log(ages);

            const averageAge =
              ages.length > 0
                ? ages.reduce((a, b) => a + b, 0) / ages.length
                : 0; // Calculate average or set to 0 if no valid ages
            return {
              ...team,
              averageAge: averageAge.toFixed(1), // Keep two decimal places
              teamMembers,
              teamAdmins,
              teamRequests,
            };
          })
        );
      }),
      catchError((err) => {
        this.toastActionError(err);
        console.error("Error in getTeamWithMembersAndAdmins:", err.message);
        return of(null);
      })
    );
  }

  async removeAdmin(admin) {
    await this.fbService.deleteTeamAdmin(this.team.id, admin.id);
    await this.toastActionSaved();
  }

  async removeMember(member) {
    await this.fbService
      .deleteTeamMember(this.team.id, member.id)
      .then(() => {
        this.toastActionSaved();
      })
      .catch((err) => {
        this.toastActionError(err);
      });
  }

  async deleteTeamRequest(request) {
    await this.fbService.deleteUserTeamRequest(request.teamId, request.id);
    await this.toastActionSaved();
  }

  async approveTeamRequest(request) {
    console.log(request);
    await this.fbService.approveUserTeamRequest(request.teamId, request.id);
    await this.toastActionSaved();
  }
  async openMember(member: Profile) {
    console.log("openMember");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  addMember() {
    let memberSelect = [];
    this.team$.forEach(async (team) => {
      console.log(team);
      this.fbService
        .getTeamRef(this.team.id)
        .pipe(
          take(1),
          tap((team: any) => {
            console.log(team.clubRef.id);
          }),
          switchMap((team: any) => {
            if (!team) return of([]);
            return this.fbService.getClubMemberRefs(team.clubRef.id);
          }),
          switchMap((members) => {
            if (!members.length) return of([]);

            // Fetch each member's user profile
            const memberDetails$ = members.map((member) =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...member, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );

            return combineLatest(memberDetails$);
          }),
          map((memberProfiles) =>
            memberProfiles.filter((member) => member !== undefined)
          )
        )
        .subscribe(async (memberDetails) => {
          console.log("Club Members:", memberDetails);
          // Handle the fetched member details
          for (let member of memberDetails) {
            if (!team.teamMembers.find((element) => element.id == member.id)) {
              memberSelect.push({
                type: "checkbox",
                name: member.id,
                label: member.firstName + " " + member.lastName,
                value: member,
                checked: false,
              });
            }
          }
          const alert = await this.alertCtrl.create({
            header: "Administrator hinzufügen",
            inputs: memberSelect,
            buttons: [
              {
                text: "Abbrechen",
                handler: () => {
                  console.log("Cancel clicked");
                },
              },
              {
                text: "Hinzufügen",
                handler: (data) => {
                  console.log(data);
                },
              },
            ],
          });
          if (memberSelect.length > 0) {
            await alert.present();
          }
        });
    });
  }

  async addAdministrator() {
    let memberSelect = [];

    this.team$.forEach(async (team) => {
      console.log(team);
      for (let member of team.teamMembers) {
        if (!team.teamAdmins.find((element) => element.id == member.id)) {
          memberSelect.push({
            type: "checkbox",
            name: member.id,
            label: member.firstName + " " + member.lastName,
            value: member,
            checked: false,
          });
        }
      }

      const alert = await this.alertCtrl.create({
        header: "Administrator hinzufügen",
        inputs: memberSelect,
        buttons: [
          {
            text: "Abbrechen",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
          {
            text: "Hinzufügen",
            handler: (data) => {
              console.log(data);
            },
          },
        ],
      });
      if (memberSelect.length > 0) {
        await alert.present();
      }
    });
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

  async toastActionError(error) {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 2000,
      position: "bottom",
      color: "danger",
    });

    await toast.present();
  }

  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.team, "confirm");
  }
}
