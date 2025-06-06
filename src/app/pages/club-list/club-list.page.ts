import { Component, OnInit } from "@angular/core";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable, Subscription, take, tap } from "rxjs";
import { User } from "@angular/fire/auth";
import { ClubPage } from "../club/club.page";
import {
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { Optional } from "@angular/core";
import { OnboardingClubPage } from "../onboarding/onboarding-club/onboarding-club.page";

@Component({
  selector: "app-club-list",
  templateUrl: "./club-list.page.html",
  styleUrls: ["./club-list.page.scss"],
  standalone: false,
})
export class ClubListPage implements OnInit {
  subscription: Subscription;
  skeleton = new Array(12);
  user: User;
  clubList$: Observable<Club[]>;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly router: Router,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    this.clubList$ = this.fbService.getClubList();
    if (
      this.router.getCurrentNavigation() &&
      this.router.getCurrentNavigation().extras &&
      this.router.getCurrentNavigation().extras.state &&
      this.router.getCurrentNavigation().extras.state["type"] ===
        "clubRequestAdmin"
    ) {
      this.subscription = this.fbService
        .getClubRef(this.router.getCurrentNavigation().extras.state["clubId"])
        .pipe(
          take(1),
          tap((club) => {
            this.openModal(club);
          }),
        )
        .subscribe();
    }
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  async openModal(club: Club) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubPage,
      presentingElement,
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

  async joinClubAlert() {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: OnboardingClubPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        closable: true,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }

    /*
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
          handler: (data: any) => {
            console.log(data);
            this.fbService
              .setClubRequest(data, this.user)
              .then(async (result) => {
                const toast = await this.toastController.create({
                  message: "Anfrage an Club gesendet",
                  color: "primary",
                  duration: 1500,
                  position: "top",
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

    await alert.present();*/
  }
}
