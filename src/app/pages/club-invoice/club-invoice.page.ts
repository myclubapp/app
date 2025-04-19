import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject, of, combineLatest, debounceTime, map, catchError, tap, switchMap, lastValueFrom } from 'rxjs';
import { Club } from 'src/app/models/club';
import { ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { FirebaseService } from 'src/app/services/firebase.service';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-club-invoice',
  templateUrl: './club-invoice.page.html',
  styleUrls: ['./club-invoice.page.scss'], 
  standalone: false

})
export class ClubInvoicePage implements OnInit {
  @Input("club") club: any;
  club$: Observable<any>;

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
    private readonly alertController: AlertController,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.club = this.navParams.get("club");
    if (this.club.roles && this.club.roles.lenght > 0) {

    } else {
      this.club.roles = [];
    }

    this.club$ = this.fbService.getClubRef(this.club.id);

    this.initializeClubMembers();

    this.clubAdminList$ = this.fbService.getClubAdminList();
  }

  ngOnDestroy() {

  }

  initializeClubMembers() {
    this.groupArray = [];  // Initialize or clear the group array

    this.clubMembers$ = this.fbService.getClubMemberRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club members")),
      switchMap(members => {
        if (members.length === 0) {
          console.log("No club members found.");
          this.groupArray = [];
          return of([]); // Emit an empty array to keep the observable alive
        }
        const profiles$ = members.map(member =>
          this.userProfileService.getUserProfileById(member.id).pipe(
            map(profile => ({
              ...member, // Spread member to retain all original attributes
              ...profile, // Spread profile to overwrite and add profile attributes
              firstName: profile.firstName || "Unknown",
              lastName: profile.lastName || "Unknown",
              roles: member.roles || [],
              dateOfBirth: profile.dateOfBirth || null,
            })),
            catchError(() => of({
              ...member,
              firstName: "Unknown",
              lastName: "Unknown",
              dateOfBirth: null,
              roles: member.roles || [] // Ensure role or other attributes are included even in error
            }))
          )
        );
        return combineLatest(profiles$).pipe(
          map(profiles => profiles
            .filter(profile => profile !== undefined)
            .sort((a, b) => a.firstName.localeCompare(b.firstName))
            .map(profile => {
              const groupByChar = profile.firstName.charAt(0).toUpperCase();
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
        return of([]); // Emit an empty array on error
      }),

    );


    this.filteredClubMembers$ = combineLatest([this.clubMembers$, this.searchTerm]).pipe(
      debounceTime(300),
      map(([members, term]) => {
        if (!term) return members;

        const filtered = members.filter(member =>
          member.firstName.toLowerCase().includes(term.toLowerCase()) ||
          member.lastName.toLowerCase().includes(term.toLowerCase()) ||
          member.roles.find(role => role.toLowerCase().includes(term.toLowerCase()))
        );
        return filtered;
      }),
      map(filtered => {
        // Update the groupArray
        this.groupArray = [];
        filtered.forEach(member => {
          const groupByChar = member.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });
        return filtered;
      }),
      tap(filtered => console.log("Filtered members:", filtered.length)),
      catchError(err => {
        console.error("Error filtering members:", err);
        return of([]);
      })
    );
  }



  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  setFilter(role) {
    this.handleSearch({ detail: { value: role } })
  }

    handleSearch(event: any) {
    const searchTerm = event.detail.value || '';
    console.log('Handling Search Event:', searchTerm);
    this.searchTerm.next(searchTerm.trim()); // Trim and update the search term
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }

  openMember(member: any) {
    console.log("openMember");
 
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
  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.warning__action_canceled")
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }
  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.action__canceled")),
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
