import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  AlertController,
  ModalController,
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
  first,
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
import { Team } from "src/app/models/team";
import { Club } from "src/app/models/club";

@Component({
  selector: "app-team-admin-list",
  templateUrl: "./team-admin-list.page.html",
  styleUrls: ["./team-admin-list.page.scss"],
  standalone: false,
})
export class TeamAdminListPage implements OnInit {
  @Input() team!: any;
  team$: Observable<any>;

  allowEdit: boolean = false;

  groupArray = [];

  teamAdminList$: Observable<Team[]>;
  clubAdminList$: Observable<Club[]>;

  teamAdmins$: Observable<any[]>; // Observable for the full list of members
  filteredTeamAdmins$: Observable<any[]>; // Observable for filtered results
  searchTerm = new BehaviorSubject<string>(""); // Initialized with an empty string

  constructor(
    private readonly modalCtrl: ModalController,

    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input property directly
    if (this.team.roles && this.team.roles.lenght > 0) {
    } else {
      this.team.roles = [];
    }

    this.team$ = this.fbService.getTeamRef(this.team.id);

    this.initializeTeamAdmins();

    this.teamAdminList$ = this.fbService.getTeamAdminList();
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

  initializeTeamAdmins() {
    this.groupArray = []; // Initialize or clear the group array

    this.teamAdmins$ = this.fbService.getTeamAdminRefs(this.team.id).pipe(
      // tap(() => console.log("Fetching team admins")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No team admins found.");
          this.groupArray = [];
          return of([]); // Emit an empty array to keep the observable alive
        }
        const profiles$ = members.map((member) =>
          this.userProfileService.getUserProfileById(member.id).pipe(
            map((profile) => ({
              ...member, // Spread member to retain all original attributes
              ...profile, // Spread profile to overwrite and add profile attributes
              firstName: profile.firstName || "Unknown",
              lastName: profile.lastName || "Unknown",
              roles: member.roles || [],
            })),
            catchError(() =>
              of({
                ...member,
                firstName: "Unknown",
                lastName: "Unknown",
                roles: member.roles || [], // Ensure role or other attributes are included even in error
              }),
            ),
          ),
        );
        return combineLatest(profiles$).pipe(
          map((profiles) =>
            profiles
              .filter((profile) => profile !== undefined)
              .sort((a, b) => a.firstName.localeCompare(b.firstName))
              .map((profile) => {
                const groupByChar = profile.firstName.charAt(0).toUpperCase();
                if (!this.groupArray.includes(groupByChar)) {
                  this.groupArray.push(groupByChar);
                }
                return {
                  ...profile,
                  groupBy: groupByChar,
                };
              }),
          ),
        );
      }),
      catchError((err) => {
        console.error("Error fetching Team admins:", err);
        return of([]); // Emit an empty array on error
      }),
    );

    this.filteredTeamAdmins$ = combineLatest([
      this.teamAdmins$,
      this.searchTerm,
    ]).pipe(
      debounceTime(300),
      map(([admins, term]) => {
        if (!term) return admins;

        const filtered = admins.filter(
          (admin) =>
            admin.firstName.toLowerCase().includes(term.toLowerCase()) ||
            admin.lastName.toLowerCase().includes(term.toLowerCase()) ||
            admin.roles.find((role) =>
              role.toLowerCase().includes(term.toLowerCase()),
            ),
        );
        return filtered;
      }),
      map((filtered) => {
        // Update the groupArray
        this.groupArray = [];
        filtered.forEach((admin) => {
          const groupByChar = admin.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });
        return filtered;
      }),
      tap((filtered) => console.log("Filtered admins:", filtered.length)),
      catchError((err) => {
        console.error("Error filtering admins:", err);
        return of([]);
      }),
    );
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || "";
    console.log("Handling Search Event:", searchTerm);
    this.searchTerm.next(searchTerm.trim()); // Trim and update the search term
  }

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }
  async addAdministratorToTeam() {
    if (!this.team || !this.team.clubId) {
      console.error("No valid team or team reference found.");
      return;
    }

    try {
      console.log("Fetching members for team ID:", this.team.id);
      const members = await lastValueFrom(
        this.fbService.getTeamMemberRefs(this.team.id).pipe(
          first(), // Takes the first emitted value then completes
        ),
      );
      console.log("Members fetched:", members.length);

      if (!members.length) {
        console.log("No team members found.");
        return;
      }

      const profiles = await Promise.all(
        members.map((member) =>
          lastValueFrom(
            this.userProfileService.getUserProfileById(member.id).pipe(
              first(),
              //tap(profiles=>console.log(profiles)),
              catchError((err) => {
                console.error(`Error fetching profile for ${member.id}:`, err);
                return of({
                  ...member,
                  firstName: "Unknown",
                  lastName: "Unknown",
                });
              }),
            ),
          ),
        ),
      );

      const filteredProfiles = profiles.filter(
        (profile) => profile !== undefined,
      );
      console.log(filteredProfiles);
      const newTeamMembers = this.filterNewTeamMembers(
        filteredProfiles,
        await lastValueFrom(this.teamAdmins$.pipe(take(1))),
      );
      console.log(newTeamMembers);
      const memberSelectOptions =
        this.prepareMemberSelectOptions(newTeamMembers);
      console.log(memberSelectOptions);
      if (memberSelectOptions.length > 0) {
        await this.showAddMemberAlert(memberSelectOptions);
      } else {
        console.log("No new members available to add.");
      }
    } catch (err) {
      console.error("Error in addMemberToTeam:", err);
    }
  }

  filterNewTeamMembers(profiles, teamMembers) {
    return profiles.filter(
      (member) =>
        !teamMembers.some((teamMember) => teamMember.id === member.id),
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
    return sortedMembers.map((member) => ({
      type: "checkbox",
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
          role: "cancel",
          handler: () => console.log("Cancel clicked"),
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedMembers) => {
            selectedMembers.forEach((memberId) => {
              console.log(memberId);
              this.approveTeamAdminRequest(this.team.id, memberId);
            });
          },
        },
      ],
    });
    await alert.present();
  }

  /*
  addAdministratorToTeam() {
    if (!this.team || !this.team.id) {
      console.error('No valid team or team reference found.');
      return; // Exit if no valid team ID is found
    }

    // Combine the fetching of team members and current team admins
    const fetchTeamAndAdmins$ = combineLatest([
      this.fbService.getTeamMemberRefs(this.team.id),
      this.teamAdmins$
    ]).pipe(

      switchMap(([members, teamAdmins]) => {
        if (members.length === 0) {
          console.log('No team members found.');
          return of([]); // Return empty array if no members
        }

        const profiles$ = members.map(member =>
          this.userProfileService.getUserProfileById(member.id).pipe(
            catchError(() => of({ ...member, firstName: 'Unknown', lastName: 'Unknown' })) // Provide fallback data
          )
        );

        return combineLatest(profiles$).pipe(
   
          map(profiles => profiles.filter(profile => profile !== undefined)),
          map(profiles => this.filterNewAdmins(profiles, teamAdmins)),
          map(filteredMembers => this.prepareMemberSelectOptions(filteredMembers))
        );
      }),
      catchError(err => {
        console.error('Error fetching team and team admins:', err);
        return of([]); // Handle errors by returning an empty array
      })
    );

    fetchTeamAndAdmins$.subscribe(async adminSelect => {
      if (adminSelect.length > 0) {
        await this.showAddAdminAlert(adminSelect); // Present the alert with admin selections
      } else {
        console.log('No new administrators available to add.');
      }
    });
  }

  filterNewAdmins(profiles, teamAdmins) {
    return profiles.filter(member =>
      !teamAdmins.some(admin => admin.id === member.id)
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
              this.approveTeamAdminRequest(this.team.id, adminId); // Adjusted to admin-specific approval
            });
          },
        },
      ],
    });
    await alert.present();
  }*/

  async approveTeamAdminRequest(teamId, adminId) {
    await this.fbService
      .addTeamAdmin(teamId, adminId)
      .then(() => {
        this.toastActionSaved();
      })
      .catch((err) => {
        this.toastActionError(err);
      });
  }

  async deleteTeamAdmin(member) {
    try {
      await this.fbService.deleteTeamAdmin(this.team.id, member.id);
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
        clubId: this.team.clubId,
        teamId: this.team.id,
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
