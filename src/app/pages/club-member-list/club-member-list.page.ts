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
  selector: "app-club-member-list",
  templateUrl: "./club-member-list.page.html",
  styleUrls: ["./club-member-list.page.scss"],
})
export class ClubMemberListPage implements OnInit {
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
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("club");

    this.club$ = of(this.club);
    this.club$ = this.getClub(this.club.id);
  }
  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  getClub(clubId: string) {
    this.groupArray = [];  // Reset the group array at the start to avoid stale data.

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
            return this.fbService.getClubMemberRefs(clubId).pipe(
                switchMap((clubMembers) => {
                    const memberProfiles$ = clubMembers.map((member) =>
                        this.userProfileService.getUserProfileById(member.id).pipe(
                            take(1),
                            catchError(() => of({ ...member, firstName: "Unknown", lastName: "Unknown" }))
                        )
                    );
                    return forkJoin(memberProfiles$).pipe(
                        map((clubMembers) => {
                            this.groupArray = [];  // Clear groupArray before processing new members
                            const sortedMembers = clubMembers
                                .filter((member) => member !== undefined)
                                .sort((a, b) => a.firstName.localeCompare(b.firstName))
                                .map((profile) => {
                                    const groupByChar = profile.firstName.charAt(0);
                                    if (!this.groupArray.includes(groupByChar)) {
                                        this.groupArray.push(groupByChar);
                                    }
                                    return {
                                        ...profile,
                                        groupBy: groupByChar,
                                    };
                                });

                            return {
                                ...club,
                                clubMembers: sortedMembers,
                            };
                        })
                    );
                }),
                catchError(err => {
                    console.error("Error in getClubWithMembers:", err);
                    return of(null);
                })
            );
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
            const searchResult = club.clubMembers.filter(
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

  async deleteClubMember( member){
    try {
      await this.fbService.deleteClubember(this.club.id, member.id);
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
