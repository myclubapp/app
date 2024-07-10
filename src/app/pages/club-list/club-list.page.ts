import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Club } from "src/app/models/club";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable, Subscription, catchError, combineLatest, concat, concatAll, concatMap, defaultIfEmpty, finalize, forkJoin, from, map, merge, mergeMap, of, shareReplay, switchMap, take, tap, timeout, toArray } from "rxjs";
import { User } from "@angular/fire/auth";
import { ClubPage } from "../club/club.page";
import {
  IonRouterOutlet,
  ModalController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-club-list",
  templateUrl: "./club-list.page.html",
  styleUrls: ["./club-list.page.scss"],
})
export class ClubListPage implements OnInit {

  skeleton = new Array(12);
  user: User;
  clubList$: Observable<Club[]>;

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit() {

    this.clubList$  = this.fbService.getClubList();
    

  }
  ngOnDestroy(): void {
   /* if (this.subscription) {
        this.subscription.unsubscribe();
    }*/
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

  async joinClubAlert() {
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
