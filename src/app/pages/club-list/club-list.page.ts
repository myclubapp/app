import { Component, OnInit } from "@angular/core";
import { Club } from "src/app/models/club";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { switchMap, map } from "rxjs/operators";
import { of, combineLatest } from "rxjs";
import { User } from "firebase/auth";
import { ClubPage } from "../club/club.page";
import { IonRouterOutlet, ModalController } from "@ionic/angular";

@Component({
  selector: "app-club-list",
  templateUrl: "./club-list.page.html",
  styleUrls: ["./club-list.page.scss"],
})
export class ClubListPage implements OnInit {
  clubList: Club[];
  skeleton = new Array(12);
  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getClubList();
  }

  async openModal(club: Club) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: ClubPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: club,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  getClubList() {
    this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserClubRefs(user)),
        // Loop Over Clubs
        switchMap((allClubs: any) =>
          combineLatest(
            allClubs.map((club) =>
              combineLatest(of(club), this.fbService.getClubRef(club.id))
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        console.log(data);

        const clubListNew = [];
        for (const club of data) {
          // loop over clubs

          const clubDetails = club[1];
          clubListNew.push(clubDetails);
        }
        this.clubList = [...new Set([].concat(...clubListNew))];
        this.clubList = this.clubList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
      });
  }
}
