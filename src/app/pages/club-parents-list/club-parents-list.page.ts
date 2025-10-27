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
import { MemberPage } from "../member/member.page";
import { Profile } from "src/app/models/user";
import { Club } from "src/app/models/club";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-club-parents-list",
  templateUrl: "./club-parents-list.page.html",
  styleUrls: ["./club-parents-list.page.scss"],
  standalone: false,
})
export class ClubParentsListPage implements OnInit {
  @Input() club!: any;
  club$: Observable<any>;

  allowEdit: boolean = false;

  groupArray = [];

  clubAdminList$: Observable<Club[]>;

  clubParents$: Observable<any[]>; // Observable for the full list of members
  filteredClubParents$: Observable<any[]>; // Observable for filtered results
  searchTerm = new BehaviorSubject<string>(""); // Initialized with an empty string

  constructor(
    private readonly modalCtrl: ModalController,

    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly alertController: AlertController,
    private translate: TranslateService,
    private readonly uiService: UiService,
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
        this.translate.get("club-parents-list.add_role_header"),
      ),
      message: await lastValueFrom(
        this.translate.get("club-parents-list.add_role_message"),
      ),
      inputs: [
        {
          name: "role",
          value: "",
          placeholder: await lastValueFrom(
            this.translate.get("club-parents-list.role_placeholder"),
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

  /*async changeRoleOfParent(slidingItem: IonItemSliding, parent) {
    slidingItem.closeOpened();

    let alertInputs = [];
    this.club$.pipe(
      take(1)
    ).subscribe(async club => {
      for (const role of club.roles) {
        alertInputs.push({
          label: role,
          type: 'checkbox',
          value: role,
          checked: parent.roles.find(parentRole => parentRole == role)
        },)
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
              console.log(data)
              this.fbService.addClubParentRole(club.id, parent.id, data).then(() => {
                console.log("Role added successfully");
              }).catch(error => {
                console.error("Failed to add role", error);
              });

            },
          }
        ],
      });

      await alert.present();
    })
  }*/

  setFilter(role) {
    this.handleSearch({ detail: { value: role } });
  }

  async deleteClubParent(parent) {
    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("club-parents-list.delete_parent__confirm"),
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
              await this.fbService.deleteClubParent(this.club.id, parent.id);
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

    this.clubParents$ = this.fbService.getClubParentsRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club members")),
      switchMap((parents) => {
        if (parents.length === 0) {
          console.log("No club parents found.");
          this.groupArray = [];
          return of([]); // Emit an empty array to keep the observable alive
        }
        const profiles$ = parents.map((parent) =>
          combineLatest([
            this.userProfileService.getUserProfileById(parent.id),
            this.userProfileService.getChildren(parent.id),
          ]).pipe(
            map(([profile, children]) => ({
              ...parent, // Spread member to retain all original attributes
              ...profile, // Spread profile to overwrite and add profile attributes
              firstName: profile.firstName || "Unknown",
              lastName: profile.lastName || "Unknown",
              roles: parent.roles || [],
              dateOfBirth: profile.dateOfBirth || null,
              childrenCount: children ? children.length : 0,
            })),
            catchError(() =>
              of({
                ...parent,
                firstName: "Unknown",
                lastName: "Unknown",
                dateOfBirth: null,
                roles: parent.roles || [], // Ensure role or other attributes are included even in error
                childrenCount: 0,
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

    this.filteredClubParents$ = combineLatest([
      this.clubParents$,
      this.searchTerm,
    ]).pipe(
      debounceTime(300),
      map(([parents, term]) => {
        if (!term) return parents;

        const filtered = parents.filter(
          (parent) =>
            parent.firstName.toLowerCase().includes(term.toLowerCase()) ||
            parent.lastName.toLowerCase().includes(term.toLowerCase()) ||
            parent.roles.find((role) =>
              role.toLowerCase().includes(term.toLowerCase()),
            ),
        );
        return filtered;
      }),
      map((filtered) => {
        // Update the groupArray
        this.groupArray = [];
        filtered.forEach((parent) => {
          const groupByChar = parent.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });
        return filtered;
      }),
      tap((filtered) => console.log("Filtered members:", filtered.length)),
      catchError((err) => {
        console.error("Error filtering parents:", err);
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

  async addClubMemberToParent() {
    try {
      console.log("Fetching members for club ID:", this.club.id);
      const clubMembers = await lastValueFrom(
        this.fbService.getClubMemberRefs(this.club.id).pipe(
          first(), // Takes the first emitted value then completes
        ),
      );
      console.log("Members fetched:", clubMembers.length);

      if (!clubMembers.length) {
        console.log("No Club members found.");
        return;
      }

      const clubMemberProfiles = await Promise.all(
        clubMembers.map((member) =>
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

      const filteredClubMemberProfiles = clubMemberProfiles.filter(
        (profile) => profile !== undefined,
      );
      console.log(filteredClubMemberProfiles);
      const newMembers = this.filterClubMembers(
        filteredClubMemberProfiles,
        await lastValueFrom(this.clubParents$.pipe(take(1))),
      );
      console.log(newMembers);
      const memberSelectOptions = this.prepareMemberSelectOptions(newMembers);
      console.log(memberSelectOptions);
      if (memberSelectOptions.length > 0) {
        await this.showAddMemberAlert(memberSelectOptions);
      } else {
        console.log("No new parents available to add.");
      }
    } catch (err) {
      console.error("Error in addClubMemberToParent:", err);
    }
  }

  filterClubMembers(clubMemberProfiles, clubParents) {
    return clubMemberProfiles.filter(
      (clubMemberProfile) =>
        !clubParents.some(
          (clubParent) => clubParent.id === clubMemberProfile.id,
        ),
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
            (console.log("Cancel clicked"), this.toastActionCanceled());
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedMembers) => {
            selectedMembers.forEach((memberId) => {
              console.log(memberId);
              this.approveClubParentRequest(this.club.id, memberId);
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async approveClubParentRequest(clubId, memberId) {
    await this.fbService
      .approveParentClubRequest(clubId, memberId)
      .then(() => {
        this.toastActionSaved();
      })
      .catch((err) => {
        this.toastActionError(err);
      });
  }

  async deleteParent(parent) {
    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("club-parents-list.delete_parent__confirm"),
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
              await this.fbService.deleteClubParent(this.club.id, parent.id);
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

  async openParent(parent: Profile) {
    console.log("openParent");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: parent,
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
    await this.presentToast();
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
    await this.presentErrorToast(error);
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }

  private async showDeleteParentConfirmationAlert() {
    await this.uiService.showConfirmDialog({
      header: "Elternteil löschen",
      message: "Möchten Sie dieses Elternteil wirklich löschen?",
      confirmText: "Ja",
      cancelText: "Nein",
    });
  }

  private async showDeleteParentSuccessAlert() {
    await this.uiService.showInfoDialog({
      header: "Erfolg",
      message: "Das Elternteil wurde erfolgreich gelöscht.",
    });
  }

  private async showDeleteParentErrorAlert() {
    await this.uiService.showInfoDialog({
      header: "Fehler",
      message:
        "Beim Löschen des Elternteils ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    });
  }
}
