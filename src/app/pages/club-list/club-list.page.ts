import { Component, OnInit } from "@angular/core";
import { Club } from "src/app/models/club";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { switchMap, map } from "rxjs/operators";
import { of, combineLatest } from "rxjs";
import { User } from "@angular/fire/auth";
import { ClubPage } from "../club/club.page";
import {
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-club-list",
  templateUrl: "./club-list.page.html",
  styleUrls: ["./club-list.page.scss"],
})
export class ClubListPage implements OnInit {
  clubList: Club[] = [];
  activeClubList: Club[] = [];
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
    this.getClubList();

    this.fbService.getActiveClubList().subscribe((data: any) => {
      // console.log(data);
      this.activeClubList = data;
    });
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
    const clubList$ = this.authService
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
        const clubListNew = [];
        for (const club of data) {
          // loop over clubs

          const clubDetails = club[1];
          clubListNew.push(clubDetails);
        }
        this.clubList = this.clubList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        this.clubList = [...new Set([].concat(...clubListNew))];
        clubList$.unsubscribe();
      });
  }

  async joinClubAlert() {
    let _inputs = [];
    for (let club of this.activeClubList) {
      for (let myClub of this.clubList) {
        if (myClub.id === club.id) {
          // club nicht adden
        } else {
          _inputs.push({
            label: club.name,
            type: "radio",
            value: club.id,
          });
        }
      }
    }

    const alert = await this.alertController.create({
      header: "Wähle deinen Club aus:",
      buttons: [
        {
          text: "auswählen",
          role: "confirm",
          handler: (data:any) => {
            console.log(data);
            this.fbService
              .setClubRequest(data)
              .then(async (result) => {
                const toast = await this.toastController.create({
                  message: "Anfrage an Club gesendet",
                  color: "primary",
                  duration: 1500,
                  position: "bottom",
                });

                await toast.present();
              })
              .catch((err) => {});
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
}
