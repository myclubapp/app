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
import { Team } from "src/app/models/team";
import { Club } from "src/app/models/club";
@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.page.html',
  styleUrls: ['./team-member-list.page.scss'],
})
export class TeamMemberListPage implements OnInit {
  @Input("team") team: any;
  team$: Observable<any>;

  allowEdit: boolean = false;
  groupArray = [];

  teamAdminList$: Observable<Team[]>;
  clubAdminList$: Observable<Club[]>;

  teamMembers$: Observable<any[]>; // Observable for the full list of members
  filteredTeamMembers$: Observable<any[]>; // Observable for filtered results
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
    this.team = this.navParams.get("team");
    this.team$ = this.fbService.getTeamRef(this.team.id);

    this.initializeTeamMembers();

    this.teamAdminList$ = this.fbService.getTeamAdminList();
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
  initializeTeamMembers() {
    this.groupArray = [];  // Initialize or clear the group array

    this.teamMembers$ = this.fbService.getTeamMemberRefs(this.team.id).pipe(
      switchMap(members => {
        //  console.log("Team Members:", members);
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
        console.error("Error fetching team members:", err);
        return of([]);
      })
    );


    this.filteredTeamMembers$ = this.searchTerm.pipe(
      debounceTime(300), // Debounce to limit the number of searches
      startWith(''), // Start with no filter
      switchMap(term => this.filterTeamMembers(term))  // Filter based on search term
    );
  }

  filterTeamMembers(term: string) {
    return this.teamMembers$.pipe(
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

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return teamAdminList && teamAdminList.some(team => team.id === teamId);
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }

  addMemberToTeam() {
    if (!this.team || !this.team.clubId) {
      console.error('No valid team or club reference found.');
      return; // Exit if no valid club ID is found
    }
  
    // First, combine the fetching of club members and current team members
    const fetchClubAndTeamMembers$ = combineLatest([
      this.fbService.getClubMemberRefs(this.team.clubId),
      this.teamMembers$
    ]).pipe(

      switchMap(([members, teamMembers]) => {
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
          map(profiles => this.filterNewTeamMembers(profiles, teamMembers)),
          map(filteredMembers => this.prepareMemberSelectOptions(filteredMembers))
        );
      }),
      catchError(err => {
        console.error('Error fetching club and team members:', err);
        return of([]); // Handle errors by returning an empty array
      })
    );
  
    fetchClubAndTeamMembers$.subscribe(async memberSelect => {
      if (memberSelect.length > 0) {
        await this.showAddMemberAlert(memberSelect); // Present the alert with member selections
      } else {
        console.log('No new members available to add.');
      }
    });
  }

  
  filterNewTeamMembers(profiles, teamMembers) {
    return profiles.filter(member =>
      !teamMembers.some(teamMember => teamMember.id === member.id)
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

  async showAddMemberAlert(memberSelect) {
    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(this.translate.get("common.addMember")),
      inputs: memberSelect,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: 'cancel',
          handler: () => console.log('Cancel clicked'),
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedMembers) => {
            selectedMembers.forEach(memberId => {
              this.approveTeamRequest({ teamId: this.team.id, memberId });
            });
          },
        },
      ],
    });
    await alert.present();
  }


  async approveTeamRequest(request) {
    console.log(request);
    await this.fbService.approveUserTeamRequest(request.teamId, request.id).then(() => {
      this.toastActionSaved();
    })
      .catch((err) => {
        this.toastActionError(err);
      });
  }

  async deleteTeamMember(member) {
    try {
      await this.fbService.deleteTeamMember(this.team.id, member.id);
      await this.toastActionSaved();
    } catch (e) {
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
      message: await lastValueFrom(this.translate.get("team.action__canceled")),
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
    return await this.modalCtrl.dismiss(this.team, "confirm");
  }
}
