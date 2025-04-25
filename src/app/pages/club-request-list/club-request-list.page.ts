import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, catchError, combineLatest, debounceTime, lastValueFrom, map, of, switchMap, tap } from 'rxjs';
import { Profile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';
import { MemberPage } from '../member/member.page';

@Component({
    selector: 'app-club-request-list',
    templateUrl: './club-request-list.page.html',
    styleUrls: ['./club-request-list.page.scss'],
    standalone: false
})
export class ClubRequestListPage implements OnInit {
  @Input("club") club: any;
  club$: Observable<any>;

  allowEdit: boolean = false;

  groupArray = [];

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
    this.club$ = this.club$ = this.fbService.getClubRef(this.club.id);
    this.initializeClubMembers();
  }

  initializeClubMembers() {
    this.groupArray = [];  // Initialize or clear the group array
  
    this.clubMembers$ = this.fbService.getClubRequestRefs(this.club.id).pipe(
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
              roles: member.roles || []
            })),
            catchError(() => of({ 
              ...member, 
              firstName: "Unknown", 
              lastName: "Unknown", 
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
              // console.log("profile: " + JSON.stringify(profile));
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
          member.roles.find(role=>role.toLowerCase().includes(term.toLowerCase()))
        );
        return filtered;
      }),
      map(filtered=>{
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

  handleSearch(event: any) {
    const searchTerm = event.detail.value || '';
    console.log('Handling Search Event:', searchTerm);
    this.searchTerm.next(searchTerm.trim()); // Trim and update the search term
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
      position: "top",
      color: "success",
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
