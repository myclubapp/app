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

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
})
export class TeamPage implements OnInit {
  @Input("data") team: Team;

  team$: Observable<any>;
  subscribeMember: Subscription;
  subscribeAdmin: Subscription;

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
  ) { }

  ngOnInit() {
    this.team = this.navParams.get("data");
    this.team$ = of(this.team);

    this.team$ = this.getTeam(this.team.id);
  }

  ngOnDestroy() {
    if (this.subscribeMember) {
      this.subscribeMember.unsubscribe();
    }
    if (this.subscribeAdmin) {
      this.subscribeAdmin.unsubscribe();
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
              updated: Timestamp.fromMillis(team.updated.seconds*1000).toDate().toISOString(),
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

  async openUrl(url: string) {
    Browser.open({
      url: url
    });
  }

  async openMemberList() {
    console.log("open Team Member List");
    const modal = await this.modalCtrl.create({
      component: TeamMemberListPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        team: this.team
      },
    });
    modal.present();
  
    const { data, role } = await modal.onWillDismiss();
  
    if (role === "confirm") {
    }
  }


async openAdminList(){
  console.log("open Team Admin ");
  const modal = await this.modalCtrl.create({
    component: TeamAdminListPage,
    presentingElement: await this.modalCtrl.getTop(),
    canDismiss: true,
    showBackdrop: true,
    componentProps: {
      team: this.team
    },
  });
  modal.present();

  const { data, role } = await modal.onWillDismiss();

  if (role === "confirm") {
  }
}

  async approveTeamRequest(request) {
    console.log(request);
    await this.fbService.approveUserTeamRequest(request.teamId, request.id).then(() => {
      this.toastActionSaved();
    })
      .catch((err) => {
        this.toastActionError(err);
      });
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
    this.team$.pipe(
      take(1), // Take only the first emission
      tap(team => console.log('Team:', team)),
      switchMap(team => {
        // If team does not exist or there are no team members, complete the stream
        if (!team || !team.clubRef || !team.clubRef.id) return of(null);
  
        // Fetch club members
        return this.fbService.getClubMemberRefs(team.clubRef.id).pipe(
          switchMap(members => {
            if (!members.length) return of([]);
  
            // Fetch each member's user profile
            const memberDetails$ = members.map(member =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...member, firstName: 'Unknown', lastName: 'Unknown' })
                )
              )
            );
  
            return combineLatest(memberDetails$);
          }),
          map(memberProfiles =>
            memberProfiles.filter(member => member !== undefined)
          ),
          map(memberProfiles => memberProfiles.filter(member => 
            !team.teamMembers.find(element => element.id === member.id)
          )),
          map(filteredMembers => filteredMembers.map(member => ({
            type: 'checkbox',
            name: member.id,
            label: `${member.firstName} ${member.lastName}`,
            value: member,
            checked: false,
          })))
        );
      }),
      catchError(err => {
        console.error('Error in addMember:', err);
        return of(null);
      })
    ).subscribe(async (memberSelect:any) => {
      if (memberSelect && memberSelect.length > 0) {
        const alert = await this.alertCtrl.create({
          header: 'Administrator hinzufügen',
          inputs: memberSelect,
          buttons: [
            {
              text: 'Abbrechen',
              handler: () => console.log('Cancel clicked'),
            },
            {
              text: 'Hinzufügen',
              handler: (teamMemberList) => {
                console.log(teamMemberList);
                for (const member of teamMemberList) {
                  this.approveTeamRequest({ teamId: this.team.id, id: member.id });
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
    let memberSelect = [];

    this.subscribeAdmin = this.team$
      .pipe(
        take(1),
        tap((team) => {
          console.log(team);
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
        }),
        finalize(async () => {
          if (memberSelect.length > 0) {
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
                  handler: (data) => console.log(data),
                },
              ],
            });
            await alert.present();
          } else {
            alert("no members")
          }
        })
      )
      .subscribe();
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
