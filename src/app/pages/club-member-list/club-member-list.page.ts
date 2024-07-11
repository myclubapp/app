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

  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  async addRole() {
    const alert = await this.alertCtrl.create({
        header: "Neue Rolle hinzufügen",
        message: "Erstelle eine neue Rolle für deinen Verein.",
        inputs: [{
            name: "role",
            value: "",
            placeholder: "Vorstand, Sportchef,...",
            id: "role"
        }],
        buttons: [
            {
                text: await lastValueFrom(this.translate.get("common.cancel")),
                handler: (data) => {
                    console.log("Cancelled", data);
                },
                role: "cancel",
            },
            {
                text: await lastValueFrom(this.translate.get("common.ok")),
                handler: (data) => {
                    if (data.role.trim()) {  // Check if the role is not just empty spaces
                        this.club$.pipe(
                            take(1)
                        ).subscribe(club => {
                            if (club && club.roles) {
                                club.roles.push(data.role);
                                this.fbService.addClubRole(club.id, club.roles).then(() => {
                                    console.log("Role added successfully");
                                }).catch(error => {
                                    console.error("Failed to add role", error);
                                });
                            } else {
                                console.error("Club data is missing or invalid");
                            }
                        });
                    }
                },
            }
        ],
    });

    await alert.present();
}

  setFilter(role) {
    this.handleSearch({detail: {value: role}})
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
            map(profile => ({
              ...member, // Spread member to retain all original attributes
              ...profile, // Spread profile to overwrite and add profile attributes
              firstName: profile.firstName || "Unknown",
              lastName: profile.lastName || "Unknown",
              role: member.role || ""
            })),
            catchError(() => of({ 
              ...member, 
              firstName: "Unknown", 
              lastName: "Unknown", 
              role: member.role || "" // Ensure role or other attributes are included even in error
            }))
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
      debounceTime(300),
      tap(term => console.log('Emitting searchTerm:', term)), // Debug emitted searchTerm
      startWith(''), // This initializes the stream
      switchMap(term => this.filterClubMembers(term)),
      catchError(err => {
        console.error("Error filtering members:", err);
        return of([]);
      })
    );
  }

  filterClubMembers(term: string) {
    return this.clubMembers$.pipe(
      map(members => {
        const filteredMembers = term ? members.filter(member =>
          member.firstName.toLowerCase().includes(term.toLowerCase()) ||
          member.lastName.toLowerCase().includes(term.toLowerCase()) ||
          (member.role && member.role.toLowerCase().includes(term.toLowerCase()))
        ) : members;  // If term is empty, return all members
  
        this.updateGroupArray(filteredMembers);  // Update the group array with filtered or all members
        return filteredMembers;
      })
    );
  }
  

  
  updateGroupArray(filteredMembers) {
    this.groupArray = [];  // Clear the existing array
    filteredMembers.forEach(member => {
      const groupByChar = member.firstName.charAt(0).toUpperCase();
      if (!this.groupArray.includes(groupByChar)) {
        this.groupArray.push(groupByChar);
      }
    });
  }
  
  handleSearch(event: any) {
    const searchTerm = event.detail.value || '';
    console.log('Search term:', searchTerm);
    console.log("value: " + this.searchTerm.getValue() + " clsoed: " + this.searchTerm.closed);
    
    this.searchTerm.next(searchTerm);
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
