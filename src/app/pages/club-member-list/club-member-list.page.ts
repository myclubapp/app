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
  selector: "app-club-member-list",
  templateUrl: "./club-member-list.page.html",
  styleUrls: ["./club-member-list.page.scss"],
  standalone: false,
})
export class ClubMemberListPage implements OnInit {
  @Input("club") club: any;
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

  async confirm() {
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }
}
