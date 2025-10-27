import { Component, OnInit, Input } from "@angular/core";
import { ItemReorderEventDetail, ModalController } from "@ionic/angular";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
  forkJoin,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Game } from "src/app/models/game";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../../member/member.page";

@Component({
  selector: "app-lineup",
  templateUrl: "./lineup.page.html",
  styleUrls: ["./lineup.page.scss"],
  standalone: false,
})
export class LineupPage implements OnInit {
  @Input() data!: Game;

  game: Game;

  userProfile: Profile;

  skeleton = new Array(12);
  blocks = [
    {
      name: "block 1",
      members: [],
    },
  ];

  game$: Observable<Game>;
  user$: Observable<User>;
  user: User;
  constructor(
    private modalCtrl: ModalController,
    private readonly userProfileService: UserProfileService,
    private readonly authService: AuthService,
    private readonly championshipService: ChampionshipService,
  ) {}

  async ngOnInit() {
    // NavParams migration: now using @Input property directly
    this.game = this.data;

    if (!this.game) {
      console.error("Game data not provided");
      return;
    }

    this.game.teamId = this.game.teamRef.id;
    //     console.log(this.game)
    this.game$ = of(this.game);
    this.game$ = this.getGame(this.game.teamRef.id, this.game.id);
  }
  getGame(teamId: string, gameId: string) {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
        if (!user) {
          console.log("No user found");
          throw new Error("User not found");
        }
      }),
      switchMap(() => this.championshipService.getTeamGameRef(teamId, gameId)),
      switchMap((game) => {
        if (!game) return of(null);
        return this.championshipService
          .getTeamGameAttendeesRef(teamId, gameId)
          .pipe(
            switchMap((attendees) => {
              if (attendees.length === 0) {
                // If no attendees, return event data immediately
                return of({
                  ...game,
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  status: null,
                });
              }
              const attendeeProfiles$ = attendees.map((attendee) =>
                this.userProfileService.getUserProfileById(attendee.id).pipe(
                  take(1),
                  map((profile) => ({ ...profile, ...attendee })), // Combine attendee object with profile
                  catchError(() =>
                    of({
                      ...attendee,
                      firstName: "Unknown",
                      lastName: "Unknown",
                    }),
                  ),
                ),
              );
              return forkJoin(attendeeProfiles$).pipe(
                map((attendeesWithDetails) => ({
                  ...game,
                  attendees: attendeesWithDetails,
                  attendeeListTrue: attendeesWithDetails.filter(
                    (e) => e.status == true,
                  ),
                  attendeeListFalse: attendeesWithDetails.filter(
                    (e) => e.status == false,
                  ),
                  status: attendeesWithDetails.find(
                    (att) => att.id == this.user.uid,
                  )?.status,
                })),
              );
            }),
            catchError(() =>
              of({
                ...game,
                attendees: [],
                status: null,
              }),
            ),
          );
      }),
      catchError((err) => {
        console.error("Error in getTrainingWithAttendees:", err);
        return of(null);
      }),
    );
  }
  addMember(member: Profile) {
    console.log("addmember");
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
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log("Dragged from index", ev.detail.from, "to", ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }
}
