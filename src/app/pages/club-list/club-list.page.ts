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
  ToastController,
} from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { Timestamp } from "firebase/firestore";
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

    this.clubList$  = this.getClubList();
    this.clubList$.subscribe({
      next: (data) => {
        console.log("ClubList Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("ClubList Error in subscription:", err),
      complete: () => console.log("ClubList Observable completed")
    });

/*    const clubList: Club[] = [];
    clubList.length = 0;

    const clubs$ = this.authService.getUser$().pipe(
      take(1),
      switchMap(user => this.fbService.getUserClubRefs(user).pipe(take(1))),  
      concatMap(clubArray => from(clubArray)),
      tap((club:Club)=>console.log(club.id)),
      concatMap(club => 
        this.fbService.getClubRef(club.id).pipe(
          take(1),
          defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
          map(result => [result]),
          catchError(error => {
            console.error('Error fetching ClubDetail:', error);
            return of([]);
          })
        )
      ),
      tap(clubs => clubs.forEach(club => {
        return clubList.push(club);
      })),
      finalize(() => console.log("Get Club completed"))
  );

  this.subscription = forkJoin([clubs$]).subscribe({
    next: () => {    
          this.clubList$ = of(clubList);
    },
    error: err => console.error('Error in the observable chain:', err)
  });*/
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


  getClubList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap(user=>{
        this.user = user;
      }),
      switchMap(user => {
        if (!user) return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      tap(clubs => console.log("Clubs:", clubs)),
      mergeMap(clubs => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map(club => this.fbService.getClubRef(club.id))
        );
      }),
      map(clubsDetails => clubsDetails.flat()), // Flatten to get all clubs details
      tap(results => console.log("Final results with all Clubs:", results)),
      catchError(err => {
        console.error("Error in getClubList:", err);
        return of([]); // Return an empty array on error
      })
    );
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

    await alert.present();*/
  }
}
