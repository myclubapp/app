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
          //teamAdmins: this.fbService.getTeamAdminRefs(teamId),
          //teamRequests: this.fbService.getTeamRequestRefs(teamId),
        }).pipe(
          switchMap(
            ({
              teamMembers,
              // teamAdmins,
              // teamRequests
            }) => {
              const memberProfiles$ = teamMembers.map((member) =>
                this.userProfileService.getUserProfileById(member.id).pipe(
                  take(1),

                  catchError(() =>
                    of({ ...member, firstName: "Unknown", lastName: "Unknown" })
                  )
                )
              );
              /* const adminProfiles$ = teamAdmins.map((admin) =>
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
            );*/
              return forkJoin({
                teamMembers: forkJoin(memberProfiles$).pipe(startWith([])),
                // teamAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
                // teamRequests: forkJoin(teamRequests$).pipe(startWith([])),
              }).pipe(
                map(
                  ({
                    teamMembers,
                    //  teamAdmins,
                    //  teamRequests
                  }) => ({
                    teamMembers: teamMembers
                      .filter((member) => member !== undefined)
                      .sort((a, b) => a.firstName.localeCompare(b.firstName))
                      .map((profile) => {
                        if (
                          !this.groupArray.includes(profile.firstName.charAt(0))
                        ) {
                          this.groupArray.push(profile.firstName.charAt(0));
                        }
                        return {
                          ...profile,
                          groupBy: profile.firstName.charAt(0),
                        };
                      }), // Sort by firstName, // Filter out undefined
                    // teamAdmins: teamAdmins.filter((admin) => admin !== undefined), // Filter out undefined
                    /*teamRequests: teamRequests.filter(
                  (request) => request !== undefined
                ), // Filter out undefined*/
                  })
                )
              );
            }
          ),
          map(
            ({
              teamMembers,
              //  teamAdmins,
              //  teamRequests
            }) => {
              /* const ages = teamMembers
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
                */

              return {
                ...team,
                // averageAge: averageAge.toFixed(1), // Keep two decimal places
                teamMembers,
                //  teamAdmins,
                //  teamRequests,
              };
            }
          )
        );
      }),
      catchError((err) => {
        this.toastActionError(err);
        console.error("Error in getTeamWithMembersAndAdmins:", err);
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

  async deleteTeamMember( member){
    try {
      await this.fbService.deleteTeamMember(this.team.id, member.id);
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
