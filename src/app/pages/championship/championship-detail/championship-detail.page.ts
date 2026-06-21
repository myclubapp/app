import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ModalController,
  Platform,
} from "@ionic/angular";
import { Game } from "src/app/models/game";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { forkJoin, lastValueFrom, Observable, of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "@angular/fire/auth";
import { catchError, map, switchMap, take, tap } from "rxjs/operators";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { TranslateService } from "@ngx-translate/core";
import { LineupPage } from "../lineup/lineup.page";
import { Profile } from "src/app/models/user";
import { MemberPage } from "../../member/member.page";
import { FirebaseService } from "src/app/services/firebase.service";
import { Team } from "src/app/models/team";
import { UiService } from "src/app/services/ui.service";
import {
  MapService,
  SWISSTOPO_STYLE,
  MAP_MARKER_COLOR,
} from "src/app/services/map.service";

@Component({
  selector: "app-championship-detail",
  templateUrl: "./championship-detail.page.html",
  styleUrls: ["./championship-detail.page.scss"],
  standalone: false,
})
export class ChampionshipDetailPage implements OnInit {
  @Input() data!: Game;
  @Input() isFuture!: boolean;

  game: Game;

  readonly mapStyle = SWISSTOPO_STYLE;
  markerColor = MAP_MARKER_COLOR;
  ownPosition: [number, number] | null = null;

  allowEdit: boolean = false;

  game$: Observable<Game>;

  mode = "yes";

  user$: Observable<User>;
  user: User;
  teamAdminList$: Observable<Team[]>;
  children: Profile[];
  showStatus: boolean;

  constructor(
    private readonly modalCtrl: ModalController,
    public platform: Platform,
    private readonly userProfileService: UserProfileService,
    private readonly alertCtrl: AlertController,
    private readonly championshipService: ChampionshipService,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private translate: TranslateService,
    private uiService: UiService,
    private mapService: MapService,
  ) {
    //  this.setMap();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }

  async ngOnInit() {
    // NavParams migration: now using @Input properties directly
    this.game = this.data;

    if (!this.game) {
      console.error("Game data not provided");
      return;
    }

    await this.loadData();
    this.geolocationPermission();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  private async loadData() {
    if (!this.game) {
      return;
    }

    this.game$ = this.getGame(this.game.teamId, this.game.id);
    this.user$ = this.authService.getUser$();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
    await this.initUserAndChildren();
  }

  private async initUserAndChildren() {
    this.user = await lastValueFrom(
      this.authService.getAuthenticatedUser$().pipe(take(1)),
    );
    this.children = await lastValueFrom(
      this.userProfileService.getChildren(this.user.uid).pipe(take(1)),
    );
    this.showStatus = !(this.children && this.children.length > 0);
  }

  async geolocationPermission() {
    // Auf Native triggert dies den Berechtigungs-Dialog; das Resultat blockiert
    // den Standortabruf aber nicht (auf Web liefert die Permission-Prüfung
    // immer false, getCurrentPosition funktioniert dort dennoch via Browser-API).
    this.markerColor = this.mapService.getPrimaryColor();
    await this.mapService.checkGeolocationPermission();
    this.ownPosition = await this.mapService.getCurrentPosition();
  }

  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }

  async edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  async openAdminActions() {}
  // ng
  getGame(teamId: string, gameId: string) {
    return this.authService.getAuthenticatedUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        return this.userProfileService.getChildren(user.uid).pipe(
          tap((children) => {
            this.children = children;
            // console.log("children", this.children);
          }),
        );
      }),

      switchMap(() => this.championshipService.getTeamGameRef(teamId, gameId)),
      switchMap((game) => {
        if (!game) return of(null);

        // Fetch team details
        return this.fbService.getTeamRef(teamId).pipe(
          switchMap((team) => {
            if (!team) return of(null);

            // Fetch all team members first
            return this.fbService.getTeamMemberRefs(teamId).pipe(
              switchMap((teamMembers) => {
                const teamMemberProfiles$ = teamMembers.map((member) =>
                  this.userProfileService.getUserProfileById(member.id).pipe(
                    take(1),
                    map((profile) => ({
                      ...member, // Spread member to retain all original attributes
                      ...profile, // Spread profile to overwrite and add profile attributes
                      firstName: profile.firstName || "Unknown",
                      lastName: profile.lastName || "Unknown",
                      roles: member.roles || [],
                    })),
                    catchError((err) => {
                      console.log(
                        `Failed to fetch profile for team member ${member.id}:`,
                        err,
                      );
                      return of({
                        ...member,
                        firstName: "Unknown",
                        lastName: "Unknown",
                        roles: member.roles || [],
                        status: null,
                      });
                    }),
                  ),
                );
                // Fetch all attendees next
                return forkJoin(teamMemberProfiles$).pipe(
                  map((teamMembersWithDetails) =>
                    teamMembersWithDetails.filter(
                      (member) => member !== undefined,
                    ),
                  ), // Filtering out undefined entries
                  switchMap((teamMembersWithDetails) => {
                    return this.championshipService
                      .getTeamGameAttendeesRef(teamId, gameId)
                      .pipe(
                        map((attendees) => {
                          const attendeeDetails = attendees
                            .map((attendee) => {
                              const detail = teamMembersWithDetails.find(
                                (member) => member.id === attendee.id,
                              );
                              return detail
                                ? { ...detail, status: attendee.status }
                                : null;
                            })
                            .filter((item) => item !== null);

                          const attendeeListTrue = attendeeDetails
                            .filter((att) => att.status === true)
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );
                          const attendeeListFalse = attendeeDetails
                            .filter((att) => att.status === false)
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            );
                          const respondedIds = new Set(
                            attendeeDetails.map((att) => att.id),
                          );
                          // Modify here to add 'status: null' for each unresponded member
                          const unrespondedMembers = teamMembersWithDetails
                            .filter((member) => !respondedIds.has(member.id))
                            .map((member) => ({ ...member, status: null }))
                            .sort((a, b) =>
                              a.firstName.localeCompare(b.firstName),
                            ); // Ensuring 'status: null' is explicitly set

                          const relevantChildren = teamMembers
                            .filter((att) =>
                              this.children.some(
                                (child) => child.id === att.id,
                              ),
                            )
                            .map((att) => {
                              const child = this.children.find(
                                (child) => child.id === att.id,
                              );
                              const childStatus =
                                attendeeDetails.find(
                                  (attendee) => attendee.id === att.id,
                                )?.status ?? null;
                              return child
                                ? {
                                    firstName: child.firstName,
                                    lastName: child.lastName,
                                    status: childStatus,
                                    id: child.id,
                                  }
                                : {};
                            });

                          // Build status array: include user if member, plus all children that are members
                          const userIds = [
                            this.user.uid,
                            ...this.children.map((child) => child.id),
                          ];
                          const statusArray = userIds
                            .filter((id) =>
                              teamMembersWithDetails.some(
                                (member) => member.id === id,
                              ),
                            )
                            .map((id) => {
                              const attendee = attendeeDetails.find(
                                (att) => att.id === id,
                              );
                              const member = teamMembersWithDetails.find(
                                (m) => m.id === id,
                              );
                              return {
                                id: id,
                                status: attendee?.status ?? null,
                                firstName: member?.firstName || "Unknown",
                                lastName: member?.lastName || "Unknown",
                              };
                            });

                          return {
                            ...game,
                            team, // Add team details here
                            teamId: teamId,
                            attendees: attendeeDetails,
                            attendeeListTrue,
                            attendeeListFalse,
                            unrespondedMembers,
                            children: relevantChildren,
                            status: statusArray,
                          };
                        }),
                        catchError((err) => {
                          console.error("Error fetching attendees:", err);
                          return of({
                            ...game,
                            team, // Add team details here
                            teamId: teamId,
                            children: [],
                            attendees: [],
                            attendeeListTrue: [],
                            attendeeListFalse: [],
                            unrespondedMembers: teamMembersWithDetails
                              .filter((member) => member !== null)
                              .map((member) => ({ ...member, status: null })), // Also ensure 'status: null' here for consistency
                            status: [], // Empty array for status in case of error
                          });
                        }),
                      );
                  }),
                );
              }),
              catchError((err) => {
                console.error("Error fetching team members:", err);
                return of({
                  ...game,
                  team, // Add team details here
                  teamId: teamId,
                  children: [],
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: [], // Empty array for status in case of error
                });
              }),
            );
          }),
        );
      }),
      catchError((err) => {
        console.error("Error in getGameWithAttendees:", err);
        return of(null);
      }),
    );
  }
  async toggleAll(status: boolean, game: Game) {
    const alert = await this.alertCtrl.create({
      message: "Sollen alle angemeldet werden?",
      header: "Alle anmelden",
      buttons: [
        {
          text: "Nein",
          role: "cancel",
          handler: () => {},
        },
        {
          role: "",
          text: "OK",
          handler: async () => {
            for (let member of game["unrespondedMembers"]) {
              console.log(
                `Set Status ${status} for user ${this.user.uid} and team ${this.game.teamId} and game ${game.id}`,
              );
              await this.championshipService
                .setTeamGameAttendeeStatusAdmin(
                  status,
                  this.game.teamId,
                  game.id,
                  member.id,
                )
                .catch((e) => {
                  console.log(e.message);
                  this.toastActionError(e);
                });
            }
            this.presentToast();
          },
        },
      ],
    });
    alert.present();
  }

  async processToggle(userId: string, status: boolean, game: any) {
    console.log(
      `Set Status ${status} for user ${userId} and team ${game.teamId} and game ${game.id}`,
    );
    const newStartDate = game.dateTime.toDate();
    newStartDate.setHours(Number(game.time.substring(0, 2)));

    const team = await lastValueFrom(
      this.fbService.getTeamRef(game.teamId).pipe(take(1)),
    );

    const championshipThreshold = team.championshipThreshold || 0;

    // Überprüfe, ob der Benutzer ein Team-Administrator ist
    const teamAdminList = await lastValueFrom(
      this.teamAdminList$.pipe(take(1)),
    );
    const isAdmin = this.isTeamAdmin(teamAdminList, game.teamId);

    // console.log("newStartDate", newStartDate);

    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * championshipThreshold &&
      status == false &&
      championshipThreshold &&
      !isAdmin
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      await this.championshipService.setTeamGameAttendeeStatusAdmin(
        status,
        game.teamId,
        game.id,
        userId,
      );
      this.presentToast();
    }
  }

  async toggleItem(
    item: IonItemSliding,
    status: boolean,
    game: any,
    memberId: string,
  ) {
    console.log("toggleItem", item, status, game, memberId);
    await item.close();
    await this.processToggle(memberId, status, game);
  }

  async toastActionError(error) {
    await this.uiService.showErrorToast(error.message);
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
    // this.navController.pop();
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.game, "confirm");
    /*this.navController.navigateBack("championship", {
      state: {
        role: "confirm",
        data: this.game,
      },
    });*/
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
        clubId: this.game.clubId,
        teamId: this.game.teamId,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openLineup(game: Game) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: LineupPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: game,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  async tooLateToggle() {
    await this.uiService.showInfoDialog({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
    });
  }

  async openMaps(game: Game) {
    await this.mapService.openMapsNavigation(game);
  }
}
