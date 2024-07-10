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
import { Club } from "src/app/models/club";

@Component({
  selector: 'app-club-admin-list',
  templateUrl: './club-admin-list.page.html',
  styleUrls: ['./club-admin-list.page.scss'],
})
export class ClubAdminListPage implements OnInit {
  @Input("club") club: any;
  club$: Observable<any>;

  user$: Observable<User>;
  user: User;

  allowEdit: boolean = false;

  groupArray = [];

  subscribeAdmin: Subscription;

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
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("club");

    this.club$ = of(this.club);
    this.club$ = this.getClub(this.club.id);

    this.clubAdminList$ = this.fbService.getClubAdminList(); 
  }

  ngOnDestroy() {

    if (this.subscribeAdmin) {
      this.subscribeAdmin.unsubscribe();
    }
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  getClub(clubId: string) {
    this.groupArray = [];  // Reset the group array before processing to ensure it's clean for each fetch

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
        switchMap(() => this.fbService.getClubRef(clubId)),
        switchMap((club) => {
            if (!club) return of(null);
            return combineLatest({
                clubMembers: this.fbService.getClubMemberRefs(clubId),
                clubAdmins: this.fbService.getClubAdminRefs(clubId),
            }).pipe(
                switchMap(({ clubMembers, clubAdmins }) => {
                    const memberProfiles$ = clubMembers.map((member) =>
                        this.userProfileService.getUserProfileById(member.id).pipe(
                            take(1),
                            catchError(() => of({ ...member, firstName: "Unknown", lastName: "Unknown" }))
                        )
                    );
                    const adminProfiles$ = clubAdmins.map((admin) =>
                        this.userProfileService.getUserProfileById(admin.id).pipe(
                            take(1),
                            catchError(() => of({ ...admin, firstName: "Unknown", lastName: "Unknown" }))
                        )
                    );
                    return forkJoin({
                        clubMembers: forkJoin(memberProfiles$),
                        clubAdmins: forkJoin(adminProfiles$),
                    }).pipe(
                        map(({ clubMembers, clubAdmins }) => {
                            this.groupArray = [];  // Reset the group array just before mapping profiles
                            const sortedAdmins = clubAdmins
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

                            const filteredMembers = clubMembers.filter(member => member !== undefined);

                            return {
                                ...club,
                                clubMembers: filteredMembers,
                                clubAdmins: sortedAdmins,
                            };
                        })
                    );
                }),
                catchError(err => {
                    console.error("Error in getClubWithMembersAndAdmins:", err);
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
      const sub = this.club$
        .pipe(
          take(1),
          tap((club) => {
            const searchResult = club.clubAdmins.filter(
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
  async addAdministrator() {
    let memberSelect = [];

    this.subscribeAdmin = this.club$
      .pipe(
        take(1),
        tap((club) => {
          //console.log(club);
          club.clubMembers.forEach((member) => {
            if (!club.clubAdmins.find((element) => element.id === member.id)) {
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
              header: await lastValueFrom(this.translate.get("common.addAdministrator")),
              inputs: memberSelect,
              buttons: [
                {
                  text: await lastValueFrom(this.translate.get("common.cancel")),
                  handler: () => console.log("Cancel clicked"),
                },
                {
                  text: await lastValueFrom(this.translate.get("common.add")),
                  handler: (data) => {
                    for (let member of data){     
                      this.fbService.addClubAdmin(this.club.id, member.id).catch(e=>{
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
  async deleteClubAdmin( member){
    try {
      await this.fbService.deleteClubAdmin(this.club.id, member.id);
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

  async toastActionError(error) {
    const toast = await this.toastCtrl.create({
      message: error.message,
      duration: 1500,
      position: "top",
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
