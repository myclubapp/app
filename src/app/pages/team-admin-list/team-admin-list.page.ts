import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
  IonList,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  finalize,
  forkJoin,
  lastValueFrom,
  map,
  of,
  startWith,
  switchMap,
  take,
  tap,
} from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../member/member.page";
import { Profile } from "src/app/models/user";
import { User } from "firebase/auth";
@Component({
  selector: 'app-team-admin-list',
  templateUrl: './team-admin-list.page.html',
  styleUrls: ['./team-admin-list.page.scss'],
})
export class TeamAdminListPage implements OnInit {
  @Input("team") team: any;
  team$: Observable<any>;

  user$: Observable<User>;
  user: User;

  allowEdit: boolean = false;

  groupArray = [];
  subscribeAdmin: Subscription;


  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("team");

    this.team$ = of(this.team);
    this.team$ = this.getTeam(this.team.id);
  }

  ngOnDestroy() {

    if (this.subscribeAdmin) {
      this.subscribeAdmin.unsubscribe();
    }
  }

  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  getTeam(teamId: string) {
    const calculateAge = (dateOfBirth) => {
        const birthday = new Date(dateOfBirth.seconds * 1000);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
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
            }).pipe(
                switchMap(({ teamMembers, teamAdmins }) => {
                    const memberProfiles$ = teamMembers.map(member =>
                        this.userProfileService.getUserProfileById(member.id).pipe(
                            take(1),
                            catchError(() => of({ ...member, firstName: "Unknown", lastName: "Unknown" }))
                        )
                    );
                    const adminProfiles$ = teamAdmins.map(admin =>
                        this.userProfileService.getUserProfileById(admin.id).pipe(
                            take(1),
                            catchError(() => of({ ...admin, firstName: "Unknown", lastName: "Unknown" }))
                        )
                    );
                    return forkJoin({
                        teamMembers: forkJoin(memberProfiles$),
                        teamAdmins: forkJoin(adminProfiles$),
                    });
                }),
                map(({ teamMembers, teamAdmins }) => {
                    // Reset the group array just before mapping profiles
                    this.groupArray = [];

                    const sortedAdmins = teamAdmins
                        .filter(admin => admin !== undefined)
                        .sort((a, b) => a.firstName.localeCompare(b.firstName))
                        .map(profile => {
                            const groupByChar = profile.firstName.charAt(0);
                            if (!this.groupArray.includes(groupByChar)) {
                                this.groupArray.push(groupByChar);
                            }
                            return {
                                ...profile,
                                groupBy: groupByChar,
                            };
                        });

                    const filteredMembers = teamMembers.filter(member => member !== undefined);

                    return {
                        ...team,
                        teamMembers: filteredMembers,
                        teamAdmins: sortedAdmins,
                    };
                }),
                catchError(err => {
                    console.error("Error in getTeamWithMembersAndAdmins:", err);
                    return of(null);
                })
            );
        })
    );
}
  //Search
  handleChange(event: any) {
    console.log(event.detail.value);
    if (event.detail.value) {
      const sub = this.team$
        .pipe(
          take(1),
          tap((team) => {
            const searchResult = team.teamAdmins.filter(
              (searchMember) =>
                searchMember.firstName
                  .toLowerCase()
                  .includes(event.detail.value.toLowerCase()) ||
                searchMember.lastName
                  .toLowerCase()
                  .includes(event.detail.value.toLowerCase())
            );
            console.log(searchResult);
            this.groupArray = [];
            for (const profile of searchResult) {
              if (!this.groupArray.includes(profile.firstName.charAt(0))) {
                this.groupArray.push(profile.firstName.charAt(0));
              }
            }

            this.team$ = of({
              ...team,
              teamMembers: searchResult,
            });
          })
        )
        .subscribe();
    } else {
      console.log("empty " + this.team.id);
      this.team$ = this.getTeam(this.team.id);
    }
  }


  async addAdministrator() {
    let memberSelect = [];

    this.subscribeAdmin = this.team$
      .pipe(
        take(1),
        tap((team) => {
          //console.log(team);
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
                  handler: (data) => {
                    for (let member of data){
                      this.fbService.addTeamAdmin(this.team.id, member.id).catch(e=>{
                        console.log(e.message, e.code, e.name);
                      });
                    }
                  }
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


  async deleteTeamAdmin( member){
    try {
      await this.fbService.deleteTeamAdmin(this.team.id, member.id);
      await this.toastActionSaved();
    } catch(e){
      this.toastActionError(e);
    }
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
      message: await lastValueFrom(this.translate.get("team.action__canceled")),
      duration: 1500,
      position: "bottom",
      color: "danger",
    });
    await toast.present();
  }

  async toastActionError(error) {
    const toast = await this.toastCtrl.create({
      message: error.message,
      duration: 2000,
      position: "bottom",
      color: "danger",
    });

    await toast.present();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.team, "confirm");
  }
}
