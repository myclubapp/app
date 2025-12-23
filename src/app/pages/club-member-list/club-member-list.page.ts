import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
  IonItemSliding,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  debounceTime,
  first,
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
import {
  ExportService,
  MemberExportOptions,
} from "src/app/services/export.service";
import { MemberPage } from "../member/member.page";
import { Profile } from "src/app/models/user";
import { Club } from "src/app/models/club";

@Component({
  selector: "app-club-member-list",
  templateUrl: "./club-member-list.page.html",
  styleUrls: ["./club-member-list.page.scss"],
  standalone: false,
})
export class ClubMemberListPage implements OnInit {
  @Input() club!: any;
  club$: Observable<any>;

  allowEdit: boolean = false;

  groupArray = [];

  clubAdminList$: Observable<Club[]>;

  clubMembers$: Observable<any[]>; // Observable for the full list of members
  filteredClubMembers$: Observable<any[]>; // Observable for filtered results
  searchTerm = new BehaviorSubject<string>(""); // Initialized with an empty string

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly alertController: AlertController,
    private readonly exportService: ExportService,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input property directly
    if (this.club.roles && this.club.roles.lenght > 0) {
    } else {
      this.club.roles = [];
    }

    this.club$ = this.fbService.getClubRef(this.club.id);

    this.initializeClubMembers();

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
  async addRole() {
    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(
        this.translate.get("club-member-list.add_role_header"),
      ),
      message: await lastValueFrom(
        this.translate.get("club-member-list.add_role_message"),
      ),
      inputs: [
        {
          name: "role",
          value: "",
          placeholder: await lastValueFrom(
            this.translate.get("club-member-list.role_placeholder"),
          ),
          id: "role",
        },
      ],
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
            if (data.role.trim()) {
              this.club$.pipe(take(1)).subscribe((club) => {
                if (club && club.roles) {
                  club.roles.push(data.role);
                  this.fbService
                    .addClubRole(club.id, club.roles)
                    .then(() => {
                      console.log("Role added successfully");
                    })
                    .catch((error) => {
                      console.error("Failed to add role", error);
                    });
                } else {
                  this.fbService
                    .addClubRole(club.id, [data.role])
                    .then(() => {
                      console.log("Role added successfully");
                    })
                    .catch((error) => {
                      console.error("Failed to add role", error);
                    });
                  console.error("Club data is missing or invalid");
                }
              });
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async changeRoleOfMember(slidingItem: IonItemSliding, member) {
    slidingItem.closeOpened();

    let alertInputs = [];
    this.club$.pipe(take(1)).subscribe(async (club) => {
      for (const role of club.roles) {
        alertInputs.push({
          label: role,
          type: "checkbox",
          value: role,
          checked: member.roles.find((memberRole) => memberRole == role),
        });
      }

      const alert = await this.alertCtrl.create({
        header: await lastValueFrom(
          this.translate.get("club-member-list.edit_member_roles"),
        ),
        inputs: alertInputs,
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
              console.log(data);
              this.fbService
                .addClubMemberRole(club.id, member.id, data)
                .then(() => {
                  console.log("Role added successfully");
                })
                .catch((error) => {
                  console.error("Failed to add role", error);
                });
            },
          },
        ],
      });

      await alert.present();
    });
  }

  setFilter(role) {
    this.handleSearch({ detail: { value: role } });
  }

  async deleteClubMember(member) {
    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("club-member-list.delete_member__confirm"),
      ),
      buttons: [
        {
          role: "destructive",
          text: await lastValueFrom(this.translate.get("common.no")),
          handler: () => {
            console.log("nein");
            this.presentCancelToast();
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.yes")),
          handler: async () => {
            try {
              await this.fbService.deleteClubember(this.club.id, member.id);
              await this.toastActionSaved();
            } catch (e) {
              this.toastActionError(e);
            }
          },
        },
      ],
    });
    alert.present();
  }
  initializeClubMembers() {
    this.groupArray = []; // Initialize or clear the group array

    this.clubMembers$ = this.fbService.getClubMemberRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club members")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No club members found.");
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
              dateOfBirth: profile.dateOfBirth || null,
            })),
            catchError(() =>
              of({
                ...member,
                firstName: "Unknown",
                lastName: "Unknown",
                dateOfBirth: null,
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
        console.error("Error fetching Club members:", err);
        return of([]); // Emit an empty array on error
      }),
    );

    this.filteredClubMembers$ = combineLatest([
      this.clubMembers$,
      this.searchTerm,
    ]).pipe(
      debounceTime(300),
      map(([members, term]) => {
        if (!term) return members;

        const filtered = members.filter(
          (member) =>
            member.firstName.toLowerCase().includes(term.toLowerCase()) ||
            member.lastName.toLowerCase().includes(term.toLowerCase()) ||
            member.roles.find((role) =>
              role.toLowerCase().includes(term.toLowerCase()),
            ),
        );
        return filtered;
      }),
      map((filtered) => {
        // Update the groupArray
        this.groupArray = [];
        filtered.forEach((member) => {
          const groupByChar = member.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });
        return filtered;
      }),
      tap((filtered) => console.log("Filtered members:", filtered.length)),
      catchError((err) => {
        console.error("Error filtering members:", err);
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

  async openMember(member: Profile) {
    console.log("openMember");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
        clubId: this.club.id,
        teamId: null,
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
  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(
        this.translate.get("onboarding.warning__action_canceled"),
      ),
      duration: 1500,
      position: "top",
      color: "danger",
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

  async addParentToClub() {
    if (!this.club || !this.club.id) {
      console.error("No valid club or club reference found.");
      return;
    }

    try {
      console.log("Fetching parents for club ID:", this.club.id);
      const parents = await lastValueFrom(
        this.fbService.getClubParentsRefs(this.club.id).pipe(
          first(), // Takes the first emitted value then completes
        ),
      );
      console.log("Parents fetched:", (parents as any[]).length);

      if (!(parents as any[]).length) {
        console.log("No club parents found.");
        return;
      }

      const parentProfiles = await Promise.all(
        (parents as any[]).map((parent) =>
          lastValueFrom(
            this.userProfileService.getUserProfileById(parent.id).pipe(
              first(),
              catchError((err) => {
                console.error(`Error fetching profile for ${parent.id}:`, err);
                return of({
                  ...parent,
                  firstName: "Unknown",
                  lastName: "Unknown",
                });
              }),
            ),
          ),
        ),
      );

      const filteredParentProfiles = parentProfiles.filter(
        (profile) => profile !== undefined,
      );
      // console.log(filteredParentProfiles);
      const newMembers = this.filterNewClubMembers(
        filteredParentProfiles,
        await lastValueFrom(this.clubMembers$.pipe(take(1))),
      );
      // console.log(newMembers);
      const memberSelectOptions = this.prepareMemberSelectOptions(newMembers);
      // console.log(memberSelectOptions);
      if (memberSelectOptions.length > 0) {
        await this.showAddMemberAlert(memberSelectOptions);
      } else {
        console.log("No new members available to add.");
      }
    } catch (err) {
      console.error("Error in addMemberToClub:", err);
    }
  }

  filterNewClubMembers(parentProfiles, clubMembers) {
    return parentProfiles.filter(
      (parentProfile) =>
        !clubMembers.some((clubMember) => clubMember.id === parentProfile.id),
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
      header: await lastValueFrom(this.translate.get("common.addFromParents")),
      inputs: memberSelect,
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
          handler: () => {
            (console.log("Cancel clicked"), this.toastActionCanceled());
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedMembers) => {
            selectedMembers.forEach((memberId) => {
              console.log(memberId);
              this.approveClubMemberRequest(this.club.id, memberId);
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async approveClubMemberRequest(clubId, memberId) {
    await this.fbService
      .approveParentToMemberRequest(clubId, memberId)
      .then(() => {
        this.toastActionSaved();
      })
      .catch((err) => {
        this.toastActionError(err);
      });
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }

  async openExportDialog() {
    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(
        this.translate.get("club-member-list.export_options"),
      ),
      inputs: [
        {
          type: "checkbox",
          label: await lastValueFrom(
            this.translate.get("club-member-list.include_email"),
          ),
          value: "email",
          checked: true,
        },
        {
          type: "checkbox",
          label: await lastValueFrom(
            this.translate.get("club-member-list.include_phone"),
          ),
          value: "phone",
          checked: true,
        },
        {
          type: "checkbox",
          label: await lastValueFrom(
            this.translate.get("club-member-list.include_birthdate"),
          ),
          value: "birthdate",
          checked: true,
        },
        {
          type: "checkbox",
          label: await lastValueFrom(
            this.translate.get("club-member-list.include_address"),
          ),
          value: "address",
          checked: true,
        },
        {
          type: "checkbox",
          label: await lastValueFrom(
            this.translate.get("club-member-list.include_teams"),
          ),
          value: "teams",
          checked: false,
        },
        {
          type: "checkbox",
          label: await lastValueFrom(
            this.translate.get("club-member-list.include_functions"),
          ),
          value: "functions",
          checked: true,
        },
      ],
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
        },
        {
          text: await lastValueFrom(this.translate.get("common.export")),
          handler: (selectedOptions: string[]) => {
            const options: MemberExportOptions = {
              includeEmail: selectedOptions.includes("email"),
              includePhone: selectedOptions.includes("phone"),
              includeBirthdate: selectedOptions.includes("birthdate"),
              includeAddress: selectedOptions.includes("address"),
              includeTeams: selectedOptions.includes("teams"),
              includeFunctions: selectedOptions.includes("functions"),
            };
            this.exportMembers(options);
          },
        },
      ],
    });

    await alert.present();
  }

  async exportMembers(options: MemberExportOptions) {
    // Get currently filtered members
    const members = await lastValueFrom(
      this.filteredClubMembers$.pipe(take(1)),
    );

    // Get club data
    const club = await lastValueFrom(this.club$.pipe(take(1)));

    // If teams are requested, fetch team memberships for each member
    if (options.includeTeams) {
      const membersWithTeams = await Promise.all(
        members.map(async (member) => {
          const teams = await lastValueFrom(
            this.fbService.getMemberTeams(club.id, member.id).pipe(take(1)),
          );
          return {
            ...member,
            teams: teams.map((team) => team.name),
          };
        }),
      );
      await this.exportService.exportMembers(membersWithTeams, club, options);
    } else {
      await this.exportService.exportMembers(members, club, options);
    }
  }
}
