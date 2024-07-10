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
    this.userProfile$ = of(this.userProfile);
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
        handler: (data) => {
          console.log(data);
          this.close();
        },
      },
      {
        text: this.translate.instant("common.add"),
        handler: async (data) => {
          console.log(data);
          await this.fbService.approveUserClubRequest(this.clubId, this.userProfile.id);
          const toast = await this.toastCtrl.create({
            message: await lastValueFrom(
              this.translate.get("club.success__user_added")
            ),
            color: "success",
            duration: 1500,
            position: "top",
          });
          await toast.present();
          // this.assignTeamAlert(this.userProfile);
          this.getTeamAndClubTeamsAsAdmin();
          this.close();
        },
      },
    ];
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

  getTeamAndClubTeamsAsAdmin() {
    const teamAdmins$ = this.fbService.getTeamAdminList().pipe(
      take(1),
      tap(teams => console.log("Direct Admin Teams:", teams)),
      catchError(error => {
        console.error("Failed to fetch direct admin teams", error);
        return of([]);
      })
    );

    const clubTeams$ = this.fbService.getClubAdminList().pipe(
      take(1),
      tap(clubs => console.log("Admin Clubs:", clubs)),
      switchMap(clubs => {
        if (clubs.length === 0) {
          console.log("No clubs found where user is admin.");
          return of([]);
        }
        return combineLatest(
          clubs.map(club => this.fbService.getClubTeamList(club.id).pipe(
            take(1),
            tap(teams => console.log(`Teams for club ${club.id}:`, teams)),
            catchError(error => {
              console.error(`Failed to fetch teams for club ${club.id}`, error);
              return of([]);
            })
          ))
        ).pipe(
          take(1),
          map(teamsList => teamsList.flat())
        );
      }),
      catchError(error => {
        console.error("Failed to fetch clubs or club teams", error);
        return of([]);
      })
    );

    this.teamAdminList$ = combineLatest({ teamAdmins: teamAdmins$, clubTeams: clubTeams$ }).pipe(
      map(({ teamAdmins, clubTeams }) => {
        const combinedTeams = [...teamAdmins, ...clubTeams];
        console.log("Combined Teams:", combinedTeams);
        return combinedTeams.filter((team, index, self) =>
          index === self.findIndex(t => t.id === team.id)
        );
      }),
      tap(async teams => {
        if (!teams.length) {
          console.log("No teams found for alert preparation.");
        } else {

          console.log("Prepared teams for alert:");

          const alert = await this.alertCtrl.create({
            header: await lastValueFrom(this.translate.get("club.select_team_header")),
            subHeader: await lastValueFrom(this.translate.get("club.select_team_subheader")),
            message: (
              (await lastValueFrom(
                this.translate.get("club.want_to_add__user__to_team_string")
              )) ?? ""
            ).replace("{userName}", `${this.userProfile.firstName} ${this.userProfile.lastName}`),
            inputs: teams.map(team => ({
              label: team.name,
              type: 'checkbox',
              value: team.id,
              checked: false
            })),
            buttons: [
              {
                text: this.translate.instant("common.cancel"),
                role: "destructive",
                handler: (data) => {
                  console.log(data);
                },
              },
              {
                text: await lastValueFrom(this.translate.get("club.add")),
                role: "confirm",
                handler: async (data) => {
                  console.log(data);
                  for (const team of data) {
                    await this.fbService.approveUserTeamRequest(team, this.userProfile.id)
                  }
                }
              }
            ],
            htmlAttributes: { "aria-label": "alert dialog selcting teams" },
          });
          await alert.present();
        }
      }),
      catchError(error => {
        console.error('Error combining team data:', error);
        return of([]);
      })
    );
    // Before subscribing again, unsubscribe from any previous subscription
    if (this.teamAdminListSubscription) {
      this.teamAdminListSubscription.unsubscribe();
    }
    // Debugging subscription
    this.teamAdminListSubscription = this.teamAdminList$.subscribe(results => console.log("Final results:", results),
      error => console.error("Error in final subscription:", error)
    );
    //this.teamAdminListSubscription.unsubscribe()
  }
  /*
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
            role: "distructive",
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
          color: "success",
          duration: 1500,
          position: "top",
        });
        await toast.present();
  
        await this.assignTeamAlert(user);
      } else {
        await this.toastActionCanceled();
      }
    }*/

  /* async assignTeamAlert(user) {
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
         position: "top",
       });
       await toast.present();
       this.close();
     } else {
       await this.toastActionCanceled();
     }
   }*/

  async deleteClubRequest(user) {
    console.log(user);
    await this.fbService.deleteUserClubRequest(this.clubId, user.id);
    await this.toastActionCanceled();
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
      message: await lastValueFrom(this.translate.get("club.action__canceled")),
      duration: 1500,
      position: "top",
      color: "danger",
    });
    await toast.present();
  }



}
