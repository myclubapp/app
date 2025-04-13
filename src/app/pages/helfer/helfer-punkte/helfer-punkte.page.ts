import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { Observable, catchError, combineLatest, map, of, switchMap, take, tap } from "rxjs";
import { HelferService } from "src/app/services/firebase/helfer.service";
import { HelferDetailPage } from "../helfer-detail/helfer-detail.page";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { Profile } from "src/app/models/user";

interface User {
  firstName: string;
  lastName: string;
}

@Component({
    selector: "app-helfer-punkte",
    templateUrl: "./helfer-punkte.page.html",
    styleUrls: ["./helfer-punkte.page.scss"],
    standalone: false
})
export class HelferPunktePage implements OnInit {
  helferPunkteList$: Observable<any[]>;
  groupArray: number[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly helferService: HelferService,
    private readonly userProfileService: UserProfileService,
    private readonly toastCtrl: ToastController
  ) {
    this.helferPunkteList$ = this.getHelferEinsatz();
  }

  ngOnInit() {
    this.helferPunkteList$.subscribe(helferPunkte => {
      // Extrahiere alle Jahre aus den eventDates
      const years = helferPunkte
        .map(punkt => new Date(punkt.eventDate.toDate()).getFullYear())
        .filter((year, index, self) => self.indexOf(year) === index) // Entferne Duplikate
        .sort((a, b) => b - a); // Sortiere absteigend

      this.groupArray = years;
    });
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
                        switchMap(helferPunkte => {
                            // Für jeden HelferPunkt die Benutzerinformationen des bestätigenden Benutzers abrufen
                            const helferPunkteWithUser$ = helferPunkte.map(punkt => 
                                this.userProfileService.getUserProfileById(punkt.confirmedBy).pipe(
                                    map((user: Profile) => ({
                                        ...punkt,
                                        confirmedByFirstName: user?.firstName || 'Unbekannt',
                                        confirmedByLastName: user?.lastName || ''
                                    })),
                                    catchError(() => of({
                                        ...punkt,
                                        confirmedByFirstName: 'Unbekannt',
                                        confirmedByLastName: ''
                                    }))
                                )
                            );
                            return combineLatest(helferPunkteWithUser$);
                        }),
                        catchError(err => {
                            console.error(`Failed to fetch HelferPunkte for club ${club.id}:`, err);
                            return of([]);
                        })
                    )
                );
                return combineLatest(clubHelferPunkte$).pipe(
                    map(helferPunkteArrays => helferPunkteArrays.flat()),
                    tap(helferPunkte => console.log('helferPunkte', helferPunkte))
                );
            })
        )),
        catchError(err => {
            console.error("Error fetching HelferEinsatz:", err);
            return of([]);
        })
    );
}

  async openHelferEinsatz(helfereinsatz) {
    if (!helfereinsatz.eventRef) {
      const toast = await this.toastCtrl.create({
        message: 'Diese Funktion ist leider nicht verfügbar',
        duration: 2000,
        position: 'top',
        color: 'primary'
      });
      await toast.present();
      return;
    }
    
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
