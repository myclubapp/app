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
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../member/member.page";

@Component({
  selector: "app-club",
  templateUrl: "./club.page.html",
  styleUrls: ["./club.page.scss"],
})
export class ClubPage implements OnInit {
  @Input("data") club: any;

  club$: Observable<any>;

  memberList$: Observable<Profile[]>;
  adminList$: Observable<Profile[]>;
  requestList$: Observable<Profile[]>;

  user$: Observable<User>;
  user: User;

  alertTeamSelection = [];

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("data");
    this.club.clubAdmins = [];
    this.club.clubMembers = [];
    this.club$ = of(this.club);
    this.club$ = this.getClub(this.club.id);
  }

  ngOnDestroy() {}

  getClub(clubId: string) {
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
      switchMap(() => this.fbService.getClubRef(clubId)),
      switchMap((club) => {
        if (!club) return of(null);
        return combineLatest({
          clubMembers: this.fbService.getClubMemberRefs(clubId),
          clubAdmins: this.fbService.getClubAdminRefs(clubId),
          clubRequests: this.fbService.getClubRequestRefs(clubId),
        }).pipe(
          switchMap(({ clubMembers, clubAdmins, clubRequests }) => {
            const memberProfiles$ = clubMembers.map((member) =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...member, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
            const adminProfiles$ = clubAdmins.map((admin) =>
              this.userProfileService.getUserProfileById(admin.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...admin, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
            const clubRequests$ = clubRequests.map((request) =>
              this.userProfileService.getUserProfileById(request.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...request, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
            return forkJoin({
              clubMembers: forkJoin(memberProfiles$).pipe(startWith([])),
              clubAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
              clubRequests: forkJoin(clubRequests$).pipe(startWith([])),
            }).pipe(
              map(({ clubMembers, clubAdmins, clubRequests }) => ({
                clubMembers: clubMembers.filter(
                  (member) => member !== undefined
                ), // Filter out undefined
                clubAdmins: clubAdmins.filter((admin) => admin !== undefined), // Filter out undefined
                clubRequests: clubRequests.filter(
                  (request) => request !== undefined
                ), // Filter out undefined
              }))
            );
          }),
          map(({ clubMembers, clubAdmins, clubRequests }) => {
            const ages = clubMembers
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
              ...club,
              averageAge: averageAge.toFixed(1), // Keep two decimal places
              clubMembers,
              clubAdmins,
              clubRequests,
            };
          })
        );
      }),
      catchError((err) => {
        this.toastActionError(err);
        console.error("Error in getClubWithMembersAndAdmins:", err);
        return of(null);
      })
    );
  }

  async addAdministrator() {
    let memberSelect = [];

    this.club$.forEach(async (club) => {
      console.log(club);
      for (let member of club.clubMembers) {
        if (!club.clubAdmins.find((element) => element.id == member.id)) {
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
          role: "cancel",
        },
      ],
      htmlAttributes: { "aria-label": "alert dialog" },
    });
    await alert.present();
    const { role, data } = await alert.onDidDismiss();

    if (role == "confirm") {
      await this.fbService.approveUserClubRequest(user.clubId, user.id);
      const toast = await this.toastCtrl.create({
        message: await lastValueFrom(
          this.translate.get("club.success__user_added")
        ),
        color: "primary",
        duration: 1500,
        position: "bottom",
      });
      await toast.present();

      await this.assignTeamAlert(user);
    } else {
      await this.toastActionCanceled();
    }
  }

  async assignTeamAlert(user) {
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
        position: "bottom",
      });
      await toast.present();
    } else {
      await this.toastActionCanceled();
    }
  }

  async deleteClubRequest(user) {
    console.log(user);
    await this.fbService.deleteUserClubRequest(user.clubId, user.id);
    await this.toastActionSaved();
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
      message: await lastValueFrom(this.translate.get("club.action__canceled")),
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
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }
}
