import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
  IonList,
  IonItemSliding,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  combineLatest,
  debounceTime,
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
import { User } from "firebase/auth";
import { Team } from "src/app/models/team";
import { Club } from "src/app/models/club";
@Component({
  selector: "app-team-member-list",
  templateUrl: "./team-member-list.page.html",
  styleUrls: ["./team-member-list.page.scss"],
  standalone: false,
})
export class TeamMemberListPage implements OnInit {
  @Input("team") team: any;
  team$: Observable<any>;

  allowEdit: boolean = false;
  groupArray = [];

  teamAdminList$: Observable<Team[]>;
  clubAdminList$: Observable<Club[]>;
  isAdmin$: Observable<boolean>;

  teamMembers$: Observable<any[]>; // Observable for the full list of members
  filteredTeamMembers$: Observable<any[]>; // Observable for filtered results
  searchTerm = new BehaviorSubject<string>(""); // Initialized with an empty string

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly alertController: AlertController,
    private readonly translate: TranslateService,
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("team");
    if (this.team.roles && this.team.roles.lenght > 0) {
    } else {
      this.team.roles = [];
    }

    this.team$ = this.fbService.getTeamRef(this.team.id);

    this.initializeTeamMembers();

    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.isAdmin$ = combineLatest([
      this.teamAdminList$,
      this.clubAdminList$,
    ]).pipe(
      map(
        ([teamAdminList, clubAdminList]) =>
          this.fbService.isTeamAdmin(teamAdminList, this.team.id) ||
          this.fbService.isClubAdmin(clubAdminList, this.team.clubId),
      ),
    );
  }

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
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
      header: "Neue Rolle hinzufügen",
      message: "Erstelle eine neue Rolle für dein Team.",
      inputs: [
        {
          name: "role",
          value: "",
          placeholder: "Vorstand, Sportchef,...",
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
              // Check if the role is not just empty spaces
              this.team$.pipe(take(1)).subscribe((team) => {
                if (team && team.roles) {
                  team.roles.push(data.role);
                  this.fbService
                    .addTeamRole(team.id, team.roles)
                    .then(() => {
                      console.log("Role added successfully");
                    })
                    .catch((error) => {
                      console.error("Failed to add role", error);
                    });
                } else {
                  this.fbService
                    .addTeamRole(team.id, [data.role])
                    .then(() => {
                      console.log("Role added successfully");
                    })
                    .catch((error) => {
                      console.error("Failed to add role", error);
                    });
                  console.error("Team data is missing or invalid");
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
    this.team$.pipe(take(1)).subscribe(async (team) => {
      for (const role of team.roles) {
        alertInputs.push({
          label: role,
          type: "checkbox",
          value: role,
          checked: member.roles.find((memberRole) => memberRole == role),
        });
      }

      const alert = await this.alertCtrl.create({
        header: "Rollen von Mitglied bearbeiten",
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
                .addTeamMemberRole(team.id, member.id, data)
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

  initializeTeamMembers() {
    this.groupArray = []; // Initialize or clear the group array

    this.teamMembers$ = this.fbService.getTeamMemberRefs(this.team.id).pipe(
      // tap(() => console.log("Fetching team members")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No team members found.");
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
        console.error("Error fetching Tean members:", err);
        return of([]); // Emit an empty array on error
      }),
      // shareReplay(1) // Cache the latest value for new subscribers
    );

    this.filteredTeamMembers$ = combineLatest([
      this.teamMembers$,
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
    this.searchTerm.next(searchTerm); // Update the BehaviorSubject with the new search term
  }

  async addMemberToTeam() {
    if (!this.team || !this.team.clubId) {
      console.error("No valid team or team reference found.");
      return;
    }

    try {
      console.log("Fetching members for club ID:", this.team.clubId);
      const members = await lastValueFrom(
        this.fbService.getClubMemberRefs(this.team.clubId).pipe(
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
        await lastValueFrom(this.teamMembers$.pipe(take(1))),
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
          handler: () => {
            console.log("Cancel clicked"), this.toastActionCanceled();
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedMembers) => {
            selectedMembers.forEach((memberId) => {
              console.log(memberId);
              this.approveTeamRequest(this.team.id, memberId);
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async approveTeamRequest(teamId, memberId) {
    await this.fbService
      .approveUserTeamRequest(teamId, memberId)
      .then(() => {
        this.toastActionSaved();
      })
      .catch((err) => {
        this.toastActionError(err);
      });
  }

  async deleteTeamMember(member) {
    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("team-member-list.delete_member__confirm"),
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
              await this.fbService.deleteTeamMember(this.team.id, member.id);
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

  async openMember(member: Profile) {
    console.log("openMember");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
        teamId: this.team.id,
        clubId: this.team.clubId,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  getMemberImage(member: any): string {
    if (
      member.gameCenterProfile &&
      member.gameCenterProfile !==
        "https://swissunihockeysa.blob.core.windows.net/memberpictures/defaultplayeravatar.png"
    ) {
      return member.gameCenterProfile;
    } else if (member.profilePicture) {
      return member.profilePicture;
    } else {
      return "https://ionicframework.com/docs/img/demos/avatar.svg";
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
