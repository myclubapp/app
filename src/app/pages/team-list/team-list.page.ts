import { Component, OnInit } from "@angular/core";
import { Team } from "src/app/models/team";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { switchMap, map } from "rxjs/operators";
import { of, combineLatest } from "rxjs";
import { User } from "firebase/auth";
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
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
    private readonly modalCtrl: ModalController,
    private readonly alertController: AlertController,
    private readonly toastController: ToastController
  ) {}

  ngOnInit() {
    this.getTeamList();
    this.getAvailableTeamList();
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

  async joinTeamAlert() {
    let _inputs = [];

    if (this.teamList.length > 0) {
      for (let team of this.availableTeamList) {
        for (let myTeam of this.teamList) {
          if (myTeam.id === team.id) {
            // club nicht adden
          } else {
            _inputs.push({
              label: team.liga + " " + team.name,
              type: "radio",
              value: team.id,
            });
          }
        }
      }
    } else {
      for (let team of this.availableTeamList) {
        _inputs.push({
          label: team.liga + " " + team.name,
          type: "radio",
          value: team.id,
        });
      }
    }
    const alert = await this.alertController.create({
      header: "Wähle dein Team aus:",
      buttons: [
        {
          text: "auswählen",
          role: "confirm",
          handler: async (data) => {
            // console.log(data);
            this.fbService.setTeamRequest(data);
            const toast = await this.toastController.create({
              message: "Request an Club gesendet",
              duration: 1500,
              position: "bottom",
            });

            await toast.present();
          },
        },
        {
          text: "abbrechen",
          role: "cancel",
          handler: () => {
            console.log("abbrechen");
          },
        },
      ],
      inputs: _inputs,
    });

    await alert.present();
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
    // console.log("getAvailableTeamList");
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
        // const availableTeamListNew = [];
        for (const team of data[0][1]) {
          // loop over teams
          const teamDetail = team[1];
          // console.log(teamDetail);
          this.availableTeamList.push(teamDetail);
        }
        // console.log(this.availableTeamList);
      });
    // teamList$.unsubscribe();
  }
}
