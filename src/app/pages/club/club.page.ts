import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
  IonRouterOutlet,
} from "@ionic/angular";
import { Browser } from "@capacitor/browser";
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
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { ClubMemberListPage } from "../club-member-list/club-member-list.page";
import { ClubAdminListPage } from "../club-admin-list/club-admin-list.page";
import { ClubTeamListPage } from "../club-team-list/club-team-list.page";
import { ClubRequestListPage } from "../club-request-list/club-request-list.page";
import { Timestamp } from "firebase/firestore";
import { HelferPunkteClubPage } from "../helfer/helfer-punkte-club/helfer-punkte-club.page";
import { Club } from "src/app/models/club";
import { ClubSubscriptionPage } from "../club-subscription/club-subscription.page";
import { ClubParentsListPage } from "../club-parents-list/club-parents-list.page";
import { Optional } from "@angular/core";
import { ClubLinksPage } from "../club-links/club-links.page";

@Component({
  selector: "app-club",
  templateUrl: "./club.page.html",
  styleUrls: ["./club.page.scss"],
  standalone: false,
})
export class ClubPage implements OnInit {
  @Input("data") club: any;

  club$: Observable<any>;

  user$: Observable<User>;
  user: User;

  clubAdminList$: Observable<Club[]>;

  // alertTeamSelection = [];

  allowEdit: boolean = false;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("data");

    this.club$ = this.getClub(this.club.id);

    this.clubAdminList$ = this.fbService.getClubAdminList();
  }

  ngOnDestroy() {}
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }

  hasFeatureHelferEvent(clubList, clubId) {
    return (
      clubList &&
      clubList.some(
        (club) => club.hasFeatureHelferEvent == true && club.id == clubId,
      )
    );
  }
  async openUrl(url: string) {
    Browser.open({
      url: url,
    });
  }
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
          clubTeams: this.fbService.getClubTeamRefs(clubId),
        }).pipe(
          switchMap(({ clubMembers, clubAdmins, clubRequests, clubTeams }) => {
            const memberProfiles$ = clubMembers.map((member) =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...member, firstName: "Unknown", lastName: "Unknown" }),
                ),
              ),
            );
            const adminProfiles$ = clubAdmins.map((admin) =>
              this.userProfileService.getUserProfileById(admin.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...admin, firstName: "Unknown", lastName: "Unknown" }),
                ),
              ),
            );
            const clubRequests$ = clubRequests.map((request) =>
              this.userProfileService.getUserProfileById(request.id).pipe(
                take(1),
                catchError(() =>
                  of({ ...request, firstName: "Unknown", lastName: "Unknown" }),
                ),
              ),
            );

            const clubTeams$ = clubTeams.map((team) =>
              this.fbService.getTeamRef(team.id).pipe(
                take(1),
                map((team) => (team ? { ...team, id: team.id } : null)),
                catchError(() => of(null)),
              ),
            );

            return forkJoin({
              clubMembers: forkJoin(memberProfiles$).pipe(startWith([])),
              clubAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
              clubRequests: forkJoin(clubRequests$).pipe(startWith([])),
              clubTeams: forkJoin(clubTeams$).pipe(startWith([])),
            }).pipe(
              map(({ clubMembers, clubAdmins, clubRequests, clubTeams }) => ({
                clubMembers: clubMembers.filter(
                  (member) => member !== undefined,
                ), // Filter out undefined
                clubAdmins: clubAdmins.filter((admin) => admin !== undefined), // Filter out undefined
                clubRequests: clubRequests.filter(
                  (request) => request !== undefined,
                ), // Filter out undefined*/
                clubTeams: clubTeams.filter(
                  (team) => team !== null && team !== undefined,
                ), // Filter out undefined
              })),
            );
          }),
          map(({ clubMembers, clubAdmins, clubRequests, clubTeams }) => {
            const ages = clubMembers
              .map((member) =>
                member.hasOwnProperty("dateOfBirth")
                  ? calculateAge(member.dateOfBirth)
                  : 0,
              )
              .filter((age) => age > 0); // Filter out invalid or 'Unknown' ages
            // console.log(ages);

            const averageAge =
              ages.length > 0
                ? ages.reduce((a, b) => a + b, 0) / ages.length
                : 0; // Calculate average or set to 0 if no valid ages
            // console.log(clubTeams)
            return {
              ...club,
              clubTeams,
              updated: Timestamp.fromMillis(club.updated.seconds * 1000)
                .toDate()
                .toISOString(),
              averageAge: averageAge.toFixed(1), // Keep two decimal places
              clubMembers,
              clubAdmins,
              clubRequests,
            };
          }),
        );
      }),
      catchError((err) => {
        this.toastActionError(err);
        console.error("Error in getClubWithMembersAndAdmins:", err);
        return of(null);
      }),
    );
  }

  onInput(ev, fieldname) {
    console.log(ev.detail.value);
    this.fbService.setClubThreshold(this.club.id, fieldname, ev.detail.value);
  }

  async openRequestList() {
    console.log("open Club Request List");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubRequestListPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        club: this.club,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openMemberList() {
    console.log("open Club Member List");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubMemberListPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        club: this.club,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openAdminList() {
    console.log("open Club Admin");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubAdminListPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        club: this.club,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openParentList() {
    console.log("open Club Parents List");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubParentsListPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        club: this.club,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openSubscription() {
    console.log("open openSubscription CLUB");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubSubscriptionPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        clubId: this.club.id,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openHelferPunkteClub() {
    console.log("open HelferPunkte CLUB");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: HelferPunkteClubPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        clubId: this.club.id,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  changeEmail(event) {
    console.log(event.detail.value);
    //this.fbService.setClub
  }

  /* changeClubttribute(value: any, fieldname) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { [fieldname]: value });
  }*/

  async openTeamList() {
    console.log("open Team List");
    const modal = await this.modalCtrl.create({
      component: ClubTeamListPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        clubId: this.club.id,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openLinksList() {
    console.log("open Club Links List");
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubLinksPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        clubId: this.club.id,
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
      message: await lastValueFrom(
        this.translate.get("common.action__canceled"),
      ),
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
