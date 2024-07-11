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
  Subscription,
  catchError,
  combineLatest,
  debounceTime,
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

  clubAdminList$: Observable<Club[]>;


  clubAdmins$: Observable<any[]>; // Observable for the full list of members
  filteredClubAdmins$: Observable<any[]>; // Observable for filtered results
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
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("club");
    this.club$ = this.fbService.getClubRef(this.club.id);

    this.initializeClubAdmins();

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



  initializeClubAdmins() {
    this.groupArray = [];  // Initialize or clear the group array

    this.clubAdmins$ = this.fbService.getClubAdminRefs(this.club.id).pipe(
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
        console.error("Error fetching Club members:", err);
        return of([]);
      })
    );


    this.filteredClubAdmins$ = this.searchTerm.pipe(
      debounceTime(300), // Debounce to limit the number of searches
      startWith(''), // Start with no filter
      switchMap(term => this.filterClubAdmins(term))  // Filter based on search term
    );
  }

  filterClubAdmins(term: string) {
    return this.clubAdmins$.pipe(
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


  addAdministratorToClub() {
    if (!this.club || !this.club.id) {
      console.error('No valid club or club reference found.');
      return; // Exit if no valid club ID is found
    }
  
    // Combine the fetching of club members and current club admins
    const fetchClubAndAdmins$ = combineLatest([
      this.fbService.getClubMemberRefs(this.club.id),
      this.clubAdmins$
    ]).pipe(

      switchMap(([members, clubAdmins]) => {
        if (members.length === 0) {
          console.log('No club members found.');
          return of([]); // Return empty array if no members
        }
  
        const profiles$ = members.map(member =>
          this.userProfileService.getUserProfileById(member.id).pipe(
            catchError(() => of({ ...member, firstName: 'Unknown', lastName: 'Unknown' })) // Provide fallback data
          )
        );
  
        return combineLatest(profiles$).pipe(

          map(profiles => profiles.filter(profile => profile !== undefined)),
          map(profiles => this.filterNewAdmins(profiles, clubAdmins)),
          map(filteredMembers => this.prepareMemberSelectOptions(filteredMembers))
        );
      }),
      catchError(err => {
        console.error('Error fetching club and club admins:', err);
        return of([]); // Handle errors by returning an empty array
      })
    );
  
    fetchClubAndAdmins$.subscribe(async adminSelect => {
      if (adminSelect.length > 0) {
        await this.showAddAdminAlert(adminSelect); // Present the alert with admin selections
      } else {
        console.log('No new administrators available to add.');
      }
    });
  }
  
  filterNewAdmins(profiles, clubAdmins) {
    return profiles.filter(member =>
      !clubAdmins.some(admin => admin.id === member.id)
    );
  }
  prepareMemberSelectOptions(filteredMembers) {
    // Sort members alphabetically by firstName, then by lastName
    const sortedMembers = filteredMembers.sort((a, b) => {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Map sorted members to checkbox options
    return sortedMembers.map(member => ({
        type: 'checkbox',
        name: member.id,
        label: `${member.firstName} ${member.lastName}`,
        value: member.id,
        checked: false,
    }));
}
  async showAddAdminAlert(adminSelect) {
    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(this.translate.get("common.addAdministrator")),
      inputs: adminSelect,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: 'cancel',
          handler: () => console.log('Cancel clicked'),
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedAdmins) => {
            selectedAdmins.forEach(adminId => {
              this.approveClubAdminRequest(this.club.id, adminId); // Adjusted to admin-specific approval
            });
          },
        },
      ],
    });
    await alert.present();
  }
  
 
  async approveClubAdminRequest(clubId, adminId) {
    await this.fbService.addClubAdmin(clubId, adminId).then(() => {
      this.toastActionSaved();
    })
      .catch((err) => {
        this.toastActionError(err);
      });
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
