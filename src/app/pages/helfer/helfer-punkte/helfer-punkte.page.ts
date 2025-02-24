import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable, catchError, combineLatest, map, of, switchMap, take, tap } from "rxjs";
import { HelferService } from "src/app/services/firebase/helfer.service";
import { HelferDetailPage } from "../helfer-detail/helfer-detail.page";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
    selector: "app-helfer-punkte",
    templateUrl: "./helfer-punkte.page.html",
    styleUrls: ["./helfer-punkte.page.scss"],
    standalone: false
})
export class HelferPunktePage implements OnInit {
  helferPunkteList$: Observable<any[]>;
  groupArray = [];
  constructor(
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly helferService: HelferService
  ) {

    this.helferPunkteList$ = this.getHelferEinsatz();

  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();

    this.groupArray.push(currentYear);
    this.groupArray.push(currentYear - 1);
    this.groupArray.push(currentYear - 2);
    this.groupArray.push(currentYear - 3);
  }

  getHelferEinsatz() {
    return this.authService.getUser$().pipe(
        take(1),
        tap((user) => {
            if (!user) {
                console.log("No user found");
                throw new Error("User not found");
            }
        }),
        switchMap(user => this.fbService.getUserClubRefs(user).pipe(
            tap(clubs => console.log("Clubs:", clubs)),
            switchMap(clubs => {
                if (clubs.length === 0) {
                    console.log("No clubs associated with the user");
                    return of([]);
                }
                // Map over each club and fetch HelferPunkte for the user
                const clubHelferPunkte$ = clubs.map(club =>
                    this.helferService.getUserHelferPunkteRefs(user.uid, club.id).pipe(
                        catchError(err => {
                            console.error(`Failed to fetch HelferPunkte for club ${club.id}:`, err);
                            return of([]); // Returning an empty array in case of error
                        })
                    )
                );
                return combineLatest(clubHelferPunkte$).pipe(
                    map(helferPunkteArrays => helferPunkteArrays.flat()) // Flatten the array of arrays into a single array of HelferPunkte
                );
            })
        )),
        catchError(err => {
            console.error("Error fetching HelferEinsatz:", err);
            return of([]);
        })
    );
}

  async openHelferEinsatz(helfereinsatz){
    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: {
          ...helfereinsatz,
          clubId: helfereinsatz.clubRef.id,
          id: helfereinsatz.eventRef.id
        },
        isFuture: false,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }

  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }
}
