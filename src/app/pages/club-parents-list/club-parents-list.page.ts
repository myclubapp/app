
import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
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


@Component({
  selector: 'app-club-parents-list',
  templateUrl: './club-parents-list.page.html',
  styleUrls: ['./club-parents-list.page.scss'],
  standalone: false
})
export class ClubParentsListPage implements OnInit {
  @Input("club") club: any;
  club$: Observable<any>;

  allowEdit: boolean = false;

  groupArray = [];

  clubAdminList$: Observable<Club[]>;

  clubParents$: Observable<any[]>; // Observable for the full list of members
  filteredClubParents$: Observable<any[]>; // Observable for filtered results
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
                  this.fbService.addClubRole(club.id, [data.role]).then(() => {
                    console.log("Role added successfully");
                  }).catch(error => {
                    console.error("Failed to add role", error);
                  });
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
    this.handleSearch({ detail: { value: role } })
  }

  async deleteClubParent(parent) {

    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("club-parents-list.delete_parent__confirm")
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
    this.groupArray = [];  // Initialize or clear the group array

    this.clubParents$ = this.fbService.getClubParentsRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club members")),
      switchMap(parents => {
        if (parents.length === 0) {
          console.log("No club parents found.");
          this.groupArray = [];
          return of([]); // Emit an empty array to keep the observable alive
        }
        const profiles$ = parents.map(parent =>
          this.userProfileService.getUserProfileById(parent.id).pipe(
            map(profile => ({
              ...parent, // Spread member to retain all original attributes
              ...profile, // Spread profile to overwrite and add profile attributes
              firstName: profile.firstName || "Unknown",
              lastName: profile.lastName || "Unknown",
              roles: parent.roles || [],
              dateOfBirth: profile.dateOfBirth || null,
            })),
            catchError(() => of({
              ...parent,
              firstName: "Unknown",
              lastName: "Unknown",
              dateOfBirth: null,
              roles: parent.roles || [] // Ensure role or other attributes are included even in error
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


    this.filteredClubParents$ = combineLatest([this.clubParents$, this.searchTerm]).pipe(
      debounceTime(300),
      map(([parents, term]) => {
        if (!term) return parents;

        const filtered = parents.filter(parent =>
          parent.firstName.toLowerCase().includes(term.toLowerCase()) ||
          parent.lastName.toLowerCase().includes(term.toLowerCase()) ||
          parent.roles.find(role => role.toLowerCase().includes(term.toLowerCase()))
        );
        return filtered;
      }),
      map(filtered => {
        // Update the groupArray
        this.groupArray = [];
        filtered.forEach(parent => {
          const groupByChar = parent.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });
        return filtered;
      }),
      tap(filtered => console.log("Filtered members:", filtered.length)),
      catchError(err => {
        console.error("Error filtering parents:", err);
        return of([]);
      })
    );
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || '';
    console.log('Handling Search Event:', searchTerm);
    this.searchTerm.next(searchTerm.trim()); // Trim and update the search term
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }

  async addClubMemberToParent() {

    try {
      console.log('Fetching members for club ID:', this.club.id);
      const members = await lastValueFrom(
        this.fbService.getClubMemberRefs(this.club.id).pipe(
          first()  // Takes the first emitted value then completes
        )
      );
      console.log('Members fetched:', members.length);

      if (!members.length) {
        console.log('No Club members found.');
        return;
      }

      const profiles = await Promise.all(members.map(member =>
        lastValueFrom(this.userProfileService.getUserProfileById(member.id).pipe(
          first(),
          //tap(profiles=>console.log(profiles)),
          catchError(err => {
            console.error(`Error fetching profile for ${member.id}:`, err);
            return of({ ...member, firstName: 'Unknown', lastName: 'Unknown' });
          })
        ))
      ));

      const filteredProfiles = profiles.filter(profile => profile !== undefined);
      console.log(filteredProfiles)
      const newTeamMembers = this.filterNewTeamMembers(filteredProfiles, await lastValueFrom(this.clubParents$.pipe(take(1))));
      console.log(newTeamMembers)
      const memberSelectOptions = this.prepareMemberSelectOptions(newTeamMembers);
      console.log(memberSelectOptions)
      if (memberSelectOptions.length > 0) {
        await this.showAddMemberAlert(memberSelectOptions);
      } else {
        console.log('No new parents available to add.');
      }
    } catch (err) {
      console.error('Error in addClubMemberToParent:', err);
    }
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
          handler: () => {
            console.log('Cancel clicked'),
              this.toastActionCanceled();
          }

        },
        {
          text: await lastValueFrom(this.translate.get("common.add")),
          handler: (selectedMembers) => {
            selectedMembers.forEach(memberId => {
              console.log(memberId)
              this.approveClubRequest(this.club.id, memberId);
            });
          },
        },
      ],
    });
    await alert.present();
  }


  async approveClubRequest(clubId, memberId) {

    await this.fbService.approveParentClubRequest(clubId, memberId).then(() => {
      this.toastActionSaved();
    })
      .catch((err) => {
        this.toastActionError(err);
      });
  }





  async deleteParent(parent) {

    const alert = await this.alertController.create({
      message: await lastValueFrom(
        this.translate.get("club-parents-list.delete_parent__confirm")
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
