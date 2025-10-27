import { Component, OnInit } from "@angular/core";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";
import {
  Observable,
  Subscription,
  switchMap,
  take,
  tap,
  map,
  catchError,
  of,
  combineLatest,
  shareReplay,
} from "rxjs";
import { User } from "@angular/fire/auth";
import { ClubPage } from "../club/club.page";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Optional } from "@angular/core";
import { OnboardingClubPage } from "../onboarding/onboarding-club/onboarding-club.page";
import { Browser } from "@capacitor/browser";

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
  ) {}

  ngOnInit() {
    this.clubList$ = this.fbService.getClubList().pipe(
      shareReplay(1),
      switchMap((clubs) =>
        combineLatest(
          clubs.map((club) =>
            this.fbService.getClubLinksShowOnCard(club.id).pipe(
              map((links) => ({
                ...club,
                links: links,
              })),
            ),
          ),
        ),
      ),
      catchError((error) => {
        console.error("Error loading clubs with links:", error);
        return of([]);
      }),
    );

    if (
      this.router.currentNavigation() &&
      this.router.currentNavigation().extras &&
      this.router.currentNavigation().extras.state &&
      this.router.currentNavigation().extras.state["type"] ===
        "clubRequestAdmin"
    ) {
      this.subscription = this.fbService
        .getClubRef(this.router.currentNavigation().extras.state["clubId"])
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

  getLinkIcon(type: string): string {
    switch (type) {
      case "web":
        return "globe-outline";
      case "image":
        return "image-outline";
      case "pdf":
        return "document-outline";
      default:
        return "link-outline";
    }
  }

  async openLink(url: string) {
    await Browser.open({ url });
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
  }
}
