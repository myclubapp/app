import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'firebase/auth';
import { Observable, catchError, combineLatest, forkJoin, lastValueFrom, map, of, startWith, switchMap, take, tap } from 'rxjs';
import { Profile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';
import { MemberPage } from '../member/member.page';

@Component({
  selector: 'app-club-request-list',
  templateUrl: './club-request-list.page.html',
  styleUrls: ['./club-request-list.page.scss'],
})
export class ClubRequestListPage implements OnInit {
  @Input("club") club: any;
  club$: Observable<any>;

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
  ) { }

  ngOnInit() {
    this.club = this.navParams.get("club");

    this.club$ = of(this.club);
    this.club$ = this.getClub(this.club.id);
  }


  getClub(clubId: string) {
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
      switchMap(() => this.fbService.getClubRef(clubId)),
      switchMap((club) => {
        if (!club) return of(null);
        return combineLatest({
          // clubMembers: this.fbService.getClubMemberRefs(clubId),
          // clubAdmins: this.fbService.getClubAdminRefs(clubId),
          clubRequests: this.fbService.getClubRequestRefs(clubId),
        }).pipe(
          switchMap(
            ({
              // clubMembers,
              // clubAdmins,
              clubRequests
            }) => {
             /* const memberProfiles$ = clubMembers.map((member) =>
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
            );*/
            const clubRequests$ = clubRequests.map((request) =>
              this.userProfileService.getUserProfileById(request.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...request, firstName: "Unknown", lastName: "Unknown" })
                )
              )
            );
              return forkJoin({
                //clubMembers: forkJoin(memberProfiles$).pipe(startWith([])),
                //clubAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
                clubRequests: forkJoin(clubRequests$).pipe(startWith([])),
              }).pipe(
                map(
                  ({
                    // clubMembers,
                    // clubAdmins,
                    clubRequests
                  }) => ({
                    /*clubAdmins: clubAdmins
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
                    clubMembers: clubMembers.filter((member) => member !== undefined),*/ // Filter out undefined
                    clubRequests: clubRequests.filter((member) => member !== undefined)
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
                    }) // Sort by firstName, // Filter out undefined

                  })
                )
              );
            }
          ),
          map(
            ({
                // clubMembers,
                // clubAdmins,
                clubRequests
            }) => {
              /* const ages = clubMembers
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
                ...club,
                // averageAge: averageAge.toFixed(1), // Keep two decimal places
                  // clubMembers,
                  // clubAdmins,
                  clubRequests,
              };
            }
          )
        );
      }),
      catchError((err) => {
        this.toastActionError(err);
        console.error("Error in getClubWithMembersAndAdmins:", err);
        return of(null);
      })
    );
  }

  handleChange(event: any) {
    console.log(event.detail.value);
    if (event.detail.value) {
      const sub = this.club$
        .pipe(
          take(1),
          tap((club) => {
            const searchResult = club.clubRequests.filter(
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

            this.club$ = of({
              ...club,
              clubMembers: searchResult,
            });
          })
        )
        .subscribe();
    } else {
      console.log("empty " + this.club.id);
      this.club$ = this.getClub(this.club.id);
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
        isRequest: true,
        clubId: this.club.id
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
