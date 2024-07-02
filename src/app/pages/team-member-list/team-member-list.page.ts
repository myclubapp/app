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
import { Team } from "src/app/models/team";
import { Club } from "src/app/models/club";
@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.page.html',
  styleUrls: ['./team-member-list.page.scss'],
})
export class TeamMemberListPage implements OnInit {
  @Input("team") team: any;
  team$: Observable<any>;

  user$: Observable<User>;
  user: User;

  allowEdit: boolean = false;

  groupArray = [];

  subscribeMember: Subscription;

  teamAdminList$: Observable<Team[]>;
  clubAdminList$: Observable<Club[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.team = this.navParams.get("team");

    this.team$ = of(this.team);
    this.team$ = this.getTeam(this.team.id);

    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }

  ngOnDestroy() {
    if (this.subscribeMember) {
      this.subscribeMember.unsubscribe();
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
    this.groupArray = [];

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
            return this.fbService.getTeamMemberRefs(teamId).pipe(
                switchMap(teamMembers => {
                    if (teamMembers.length === 0) {
                        // Return team data with empty members if no members are found
                        return of({
                            ...team,
                            teamMembers: []
                        });
                    }
                    const memberProfiles$ = teamMembers.map(member =>
                        this.userProfileService.getUserProfileById(member.id).pipe(
                            take(1),
                            catchError(() => of({ ...member, firstName: "Unknown", lastName: "Unknown" }))
                        )
                    );
                    return forkJoin(memberProfiles$).pipe(
                        map(teamMembersWithDetails => {
                            this.groupArray = []; // Clear previous group array entries
                            return teamMembersWithDetails
                                .filter(member => member !== undefined)
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
                        }),
                        map(processedMembers => ({
                            ...team,
                            teamMembers: processedMembers
                        }))
                    );
                }),
                catchError(err => {
                    console.error("Error fetching team members:", err);
                    return of({
                        ...team,
                        teamMembers: []
                    }); // Return the team with empty members on error
                })
            );
        }),
        catchError(err => {
            console.error("Error in getTeamWithMembers:", err);
            return of(null);
        })
    );
}

  handleChange(event: any) {
    console.log(event.detail.value);
    if (event.detail.value) {
      const sub = this.team$
        .pipe(
          take(1),
          tap((team) => {
            const searchResult = team.teamMembers.filter(
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

  addMember() {
    this.subscribeMember = this.team$.pipe(
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
    ).subscribe(async (memberSelect: any) => {
      if (memberSelect && memberSelect.length > 0) {
        const alert = await this.alertCtrl.create({
          header: await lastValueFrom(this.translate.get("common.addMember")),
          inputs: memberSelect,
          buttons: [
            {
              text: await lastValueFrom(this.translate.get("common.cancel")),
              handler: () => console.log('Cancel clicked'),
            },
            {
              text: await lastValueFrom(this.translate.get("common.add")),
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

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return teamAdminList && teamAdminList.some(team => team.id === teamId);
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
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

  async deleteTeamMember(member) {
    try {
      await this.fbService.deleteTeamMember(this.team.id, member.id);
      await this.toastActionSaved();
    } catch (e) {
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
