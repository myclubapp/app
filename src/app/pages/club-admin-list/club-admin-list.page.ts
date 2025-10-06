import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  debounceTime,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../member/member.page";
import { Profile } from "src/app/models/user";
import { Club } from "src/app/models/club";

@Component({
  selector: "app-club-admin-list",
  templateUrl: "./club-admin-list.page.html",
  styleUrls: ["./club-admin-list.page.scss"],
  standalone: false,
})
export class ClubAdminListPage implements OnInit {
  @Input() club!: any;
  club$: Observable<any>;

  allowEdit: boolean = false;

  groupArray = [];

  clubAdminList$: Observable<Club[]>;

  clubAdmins$: Observable<any[]>; // Observable for the full list of members
  filteredClubAdmins$: Observable<any[]>; // Observable for filtered results
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
    if (this.club.roles && this.club.roles.lenght > 0) {
    } else {
      this.club.roles = [];
    }

    this.club$ = this.fbService.getClubRef(this.club.id);

    this.initializeClubAdmins();

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

  initializeClubAdmins() {
    this.groupArray = []; // Initialize or clear the group array

    this.clubAdmins$ = this.fbService.getClubAdminRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club admins")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No club admins found.");
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
        console.error("Error fetching Club admins:", err);
        return of([]); // Emit an empty array on error
      }),
    );

    this.filteredClubAdmins$ = combineLatest([
      this.clubAdmins$,
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

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }

  addAdministratorToClub() {
    if (!this.club || !this.club.id) {
      console.error("No valid club or club reference found.");
      return; // Exit if no valid club ID is found
    }

    // Combine the fetching of club members and current club admins
    const fetchClubAndAdmins$ = combineLatest([
      this.fbService.getClubMemberRefs(this.club.id),
      this.clubAdmins$,
    ]).pipe(
      take(1),
      switchMap(([members, clubAdmins]) => {
        if (members.length === 0) {
          console.log("No club members found.");
          return of([]); // Return empty array if no members
        }

        const profiles$ = members.map((member) =>
          this.userProfileService.getUserProfileById(member.id).pipe(
            catchError(() =>
              of({ ...member, firstName: "Unknown", lastName: "Unknown" }),
            ), // Provide fallback data
          ),
        );

        return combineLatest(profiles$).pipe(
          take(1),
          map((profiles) =>
            profiles.filter((profile) => profile !== undefined),
          ),
          map((profiles) => this.filterNewAdmins(profiles, clubAdmins)),
          map((filteredMembers) =>
            this.prepareMemberSelectOptions(filteredMembers),
          ),
        );
      }),
      catchError((err) => {
        console.error("Error fetching club and club admins:", err);
        return of([]); // Handle errors by returning an empty array
      }),
    );

    fetchClubAndAdmins$.subscribe(async (adminSelect) => {
      if (adminSelect.length > 0) {
        await this.showAddAdminAlert(adminSelect); // Present the alert with admin selections
      } else {
        console.log("No new administrators available to add.");
      }
    });
  }

  filterNewAdmins(profiles, clubAdmins) {
    return profiles.filter(
      (member) => !clubAdmins.some((admin) => admin.id === member.id),
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

  async showAddAdminAlert(adminSelect) {
    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(
        this.translate.get("common.addAdministrator"),
      ),
      inputs: adminSelect,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
          handler: () => console.log("Cancel clicked"),
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedAdmins) => {
            selectedAdmins.forEach((adminId) => {
              this.approveClubAdminRequest(this.club.id, adminId); // Adjusted to admin-specific approval
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async approveClubAdminRequest(clubId, adminId) {
    await this.fbService
      .addClubAdmin(clubId, adminId)
      .then(() => {
        this.toastActionSaved();
      })
      .catch((err) => {
        this.toastActionError(err);
      });
  }
  async deleteClubAdmin(member) {
    try {
      await this.fbService.deleteClubAdmin(this.club.id, member.id);
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
