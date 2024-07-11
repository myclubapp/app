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
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  debounceTime,
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

  clubAdminList$: Observable<Club[]>;

  clubMembers$: Observable<any[]>; // Observable for the full list of members
  filteredClubMembers$: Observable<any[]>; // Observable for filtered results
  searchTerm = new BehaviorSubject<string>('');  // Initialized with an empty string


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

    this.club$ = this.fbService.getClubRef(this.club.id);

    this.initializeClubMembers();

    this.clubAdminList$ = this.fbService.getClubAdminList();
  }


  ngOnDestroy() {

  }

  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  async deleteClubMember(member) {
    try {
      await this.fbService.deleteClubember(this.club.id, member.id);
      await this.toastActionSaved();
    } catch (e) {
      this.toastActionError(e);
    }
  }


  initializeClubMembers() {
    this.groupArray = [];  // Initialize or clear the group array

    this.clubMembers$ = this.fbService.getClubMemberRefs(this.club.id).pipe(
      switchMap(members => {
        //  console.log("Club Members:", members);
        if (members.length === 0) {
          this.groupArray = [];
          return of([]);
        }
        const profiles$ = members.map(member =>
          this.userProfileService.getUserProfileById(member.id).pipe(
            catchError(() => of({ ...member, firstName: "Unknown", lastName: "Unknown" }))
          )
        );
        return combineLatest(profiles$).pipe(
          map(profiles => profiles
            .filter(profile => profile !== undefined)  // Ensure no undefined profiles
            .sort((a, b) => a.firstName.localeCompare(b.firstName))  // Sort members by firstName
            .map(profile => {
              const groupByChar = profile.firstName.charAt(0).toUpperCase();  // Use the first character of firstName for grouping
              if (!this.groupArray.includes(groupByChar)) {
                this.groupArray.push(groupByChar);
              }
              return {
                ...profile,
                groupBy: groupByChar,
              };
            })
          )
        );
      }),
      catchError(err => {
        console.error("Error fetching club members:", err);
        return of([]);
      })
    );


    this.filteredClubMembers$ = this.searchTerm.pipe(
      debounceTime(300), // Debounce to limit the number of searches
      startWith(''), // Start with no filter
      switchMap(term => this.filterClubMembers(term))  // Filter based on search term
    );
  }

  filterClubMembers(term: string) {
    return this.clubMembers$.pipe(
      map(members => {
        // Filter members based on the term
        const filteredMembers = members.filter(member =>
          member.firstName.toLowerCase().includes(term.toLowerCase()) ||
          member.lastName.toLowerCase().includes(term.toLowerCase())
        );

        // Clear and update the groupArray based on the filtered members
        this.groupArray = [];
        filteredMembers.forEach(member => {
          const groupByChar = member.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });

        return filteredMembers;
      })
    );
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || '';
    this.searchTerm.next(searchTerm); // Update the BehaviorSubject with the new search term
  }


  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
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
