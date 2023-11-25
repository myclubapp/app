import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import { Observable, Subscription, catchError, combineLatest, concat, concatAll, concatMap, defaultIfEmpty, filter, finalize, forkJoin, from, lastValueFrom, map, merge, mergeMap, of, pipe, shareReplay, startWith, switchMap, take, tap, timeout, toArray } from "rxjs";
import { Club } from "src/app/models/club";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

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
  ) { }

  ngOnInit() {
    this.club = this.navParams.get("data");
    this.club.clubAdmins = [];
    this.club.clubMembers = [];
    this.club$ = of(this.club);

    this.club$ = this.getClub(this.club.id);
    this.club$.subscribe({
      next: (data) => {
        console.log(">> Club Data");
        console.log(data);
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Club Error in subscription:", err),
      complete: () => console.log("Club Observable completed")
    });
  }

  ngOnDestroy() {

  }

  getClub(clubId: string) {

    return this.authService.getUser$().pipe(
      take(1),
      tap(user => {
        this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap(() => this.fbService.getClubRef(clubId)),
      switchMap(club => {
        if (!club) return of(null);
        return combineLatest({
          clubMembers: this.fbService.getClubMemberRefs(clubId),
          clubAdmins: this.fbService.getClubAdminRefs(clubId)
        }).pipe(
          switchMap(({ clubMembers, clubAdmins }) => {
            const memberProfiles$ = clubMembers.map(member =>
              this.userProfileService.getUserProfileById(member.id).pipe(take(1),
                catchError(() => of({ ...member, firstName: 'Unknown', lastName: 'Unknown' }))
              )
            );
            const adminProfiles$ = clubAdmins.map(admin =>
              this.userProfileService.getUserProfileById(admin.id).pipe(take(1),
                catchError(() => of({ ...admin, firstName: 'Unknown', lastName: 'Unknown' }))
              )
            );
            return forkJoin({
              clubMembers: forkJoin(memberProfiles$),
              clubAdmins: forkJoin(adminProfiles$)
            }).pipe(
              map(({ clubMembers, clubAdmins }) => ({
                clubMembers: clubMembers.filter(member => member !== undefined), // Filter out undefined
                clubAdmins: clubAdmins.filter(admin => admin !== undefined) // Filter out undefined
              })
              ));
          }),
          map(({ clubMembers, clubAdmins }) => ({
            ...club,
            clubMembers,
            clubAdmins
          }))
        );
      }),
      catchError(err => {
        console.error("Error in getClubWithMembersAndAdmins:", err);
        return of(null);
      })
    );
  }



  async approveClubRequest(user) {
    console.log(user);
    const alert = await this.alertCtrl.create({
      message: ((await lastValueFrom(this.translate.get("want_to_add__user__to_club_string"))) ?? '').replace("{userName}", `${user.firstName} ${user.lastName}`),
      subHeader: '',
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("yes")),
          role: "confirm",
        },
        {
          text: await lastValueFrom(this.translate.get("cancel")),
          role: "cancel",

        },
      ],
      htmlAttributes: { 'aria-label': 'alert dialog' },

    });
    await alert.present();
    const { role, data } = await alert.onDidDismiss();

    if (role == "confirm") {
      await this.fbService.approveUserClubRequest(user.clubId, user.id);
      const toast = await this.toastCtrl.create({
        message: await lastValueFrom(this.translate.get("success__user_added")),
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
      header: await lastValueFrom(this.translate.get("select__team")),
      message: ((await lastValueFrom(this.translate.get("want_to_add__user__to_team_string"))) ?? '').replace("{userName}", `${user.firstName} ${user.lastName}`),
      inputs: this.alertTeamSelection,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("add")),
          role: "confirm",
        },
        {
          text: await lastValueFrom(this.translate.get("cancel")),
          role: "cancel",

        },
      ],
      htmlAttributes: { 'aria-label': 'alert dialog selcting teams' },

    });
    await alert.present();
    const { role, data } = await alert.onDidDismiss();
    console.log(data);

    if (role == "confirm") {
      for (const teamId of data.values) {
        await this.fbService.approveUserTeamRequest(teamId, user.id)
      }
      const toast = await this.toastCtrl.create({
        message: ((await lastValueFrom(this.translate.get("success__added_user_to_team_string"))) ?? '')
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
      message: await lastValueFrom(this.translate.get("success__saved")),
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("action__canceled")),
      duration: 1500,
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
