import { Component, OnInit } from "@angular/core";
import { Team } from "src/app/models/team";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { switchMap, map } from "rxjs/operators";
import { of, combineLatest } from "rxjs";
import { User } from "firebase/auth";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { TeamPage } from "../team/team.page";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.page.html",
  styleUrls: ["./team-list.page.scss"],
})
export class TeamListPage implements OnInit {
  teamList: Team[] = [];
  availableTeamList: Team[] = [];
  skeleton = new Array(12);

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getTeamList();
  }

  async openModal(team: Team) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: TeamPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: team,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  getTeamList() {
    this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest(
            allTeams.map((team) =>
              combineLatest(of(team), this.fbService.getTeamRef(team.id))
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        console.log(data);

        const teamListNew = [];
        for (const team of data) {
          // loop over teams

          const teamDetails = team[1];
          teamListNew.push(teamDetails);
        }
        this.teamList = this.teamList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        this.teamList = [...new Set([].concat(...teamListNew))];
      });
  }

  getAvailableTeamList() {
    console.log("test");
    const teamList$ = this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserClubRefs(user)),
        // Loop Over Teams
        switchMap((allClubs: any) =>
          combineLatest(
            allClubs.map((club) =>
              combineLatest(
                of(club),
                // Loop over Games
                // this.championshipService.getTeamGamesRef(team.id),
                this.fbService
                  .getClubTeamRefs(club.id)
                  .pipe(
                    switchMap((allTeams: any) =>
                      combineLatest(
                        allTeams.map((team) =>
                          combineLatest(
                            of(team),
                            this.fbService.getTeamRef(team.id)
                          )
                        )
                      )
                    )
                  ),
                this.fbService.getClubRef(club.id)
              )
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        console.log(data);
        /* const gamesListNew = [];
      for (const team of data) {
        // loop over teams

        const games = team[1];
        const teamDetails = team[2];
        for (const gameObject of games) {
          const game = gameObject[0];
          const attendees = gameObject[1];

          game.teamName = teamDetails.name;
          game.teamId = teamDetails.id;
          game.countAttendees = attendees.filter(
            (e) => e.status === true
          ).length;
          game.attendees = attendees;

          if (
            attendees &&
            attendees.filter((e) => e.id === this.user.uid).length === 1
          ) {
            game.status = attendees.filter(
              (e) => e.id === this.user.uid
            )[0].status;
          } else {
            game.status = null;
          }

          gamesListNew.push(game);
        }
      }
      this.gamesList = [...new Set(this.gamesList.concat(...gamesListNew))];
      this.gamesList = this.gamesList.sort(
        (a, b) => a.dateTime.toMillis() - b.dateTime.toMillis()
      );*/
      });
    teamList$.unsubscribe();
  }
}
