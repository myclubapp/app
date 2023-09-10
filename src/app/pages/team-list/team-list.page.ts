import { Component, OnInit } from "@angular/core";
import { Team } from "src/app/models/team";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { switchMap, map, take, tap } from "rxjs/operators";
import { of, combineLatest, Subscription, Observable } from "rxjs";
import { User } from "@angular/fire/auth";
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TeamPage } from "../team/team.page";
import { Profile } from "src/app/models/user";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.page.html",
  styleUrls: ["./team-list.page.scss"],
})
export class TeamListPage implements OnInit {
  teamList: Team[] = [];
  availableTeamList: Team[] = [];
  skeleton = new Array(12);
  userProfile$: Observable<Profile>;
  user: User;

  private subscription: Subscription;
  availableTeamListSub: Subscription;
  teamListSub: Subscription;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly alertController: AlertController,
    private readonly profileService: UserProfileService,
    private readonly toastController: ToastController
  ) {}

  ngOnInit() {
    this.subscription = this.authService.getUser$().pipe(
      take(1),
      tap(user => this.user = user),
      switchMap(user => user ? this.profileService.getUserProfile(user) : of(null))
      ).subscribe(profile => {
          this.userProfile$ = of(profile);
      })

    this.getTeamList();
    this.getAvailableTeamList();
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.availableTeamListSub) {
      this.availableTeamListSub.unsubscribe();
    }

    this.teamListSub.unsubscribe();
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
        _inputs.push({
          label: team.liga + " " + team.name,
          type: "radio",
          value: team.id,
        });
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
    _inputs = _inputs.sort((a, b) => Number(a.id) - Number(b.id));
    _inputs = [...new Set(_inputs)];

    const alert = await this.alertController.create({
      header: "Wähle dein Team aus:",
      buttons: [
        {
          text: "auswählen",
          role: "confirm",
          handler: async (data: any) => {
            // console.log(data);
            this.fbService.setTeamRequest(data, this.user.uid);
            const toast = await this.toastController.create({
              message: "Anfrage an Team gesendet",
              color: "primary",
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
    this.teamListSub = this.authService
      .getUser$()
      .pipe(
        take(1),
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
        console.log("get user team list");
        console.log(data);
        this.teamList = [];
        const teamListNew = [];
        for (const team of data) {
          // loop over teams

          const teamDetails = team[1];
          teamListNew.push(teamDetails);
        }
        this.teamList = this.teamList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        this.teamList = [...new Set(teamListNew.concat(...this.teamList))];
      });
  }

  getAvailableTeamList() {
    // console.log("getAvailableTeamList");
    this.availableTeamListSub = this.authService
      .getUser$()
      .pipe(
        take(1),
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
        let availableTeamListNew = [];
        this.availableTeamList = [];

        for (const team of data[0][1]) {
          // loop over teams
          const teamDetail = team[1];
          console.log(teamDetail.id);
          availableTeamListNew.push(teamDetail);
        }
        availableTeamListNew = availableTeamListNew.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );

        this.availableTeamList = [
          ...new Set(availableTeamListNew.concat(...this.availableTeamList)),
        ];
      });
  }
}
