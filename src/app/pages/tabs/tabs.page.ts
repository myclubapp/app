import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MenuController,
  IonTabs,
  NavController,
  AnimationController,
} from "@ionic/angular";
import { Observable, shareReplay } from "rxjs";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";
import { Analytics, logEvent } from "@angular/fire/analytics";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
  standalone: false,
})
export class TabsPage implements OnInit {
  @ViewChild("tabs", { static: true }) tabs!: IonTabs;
  clubList$: Observable<Club[]>;
  previousTab: string;

  constructor(
    public menuCtrl: MenuController,
    private readonly fbService: FirebaseService,
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private analytics: Analytics,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.clubList$ = this.fbService.getClubList().pipe(shareReplay(1));

    this.menuCtrl.enable(true, "menu");
  }

  animation() {
    const DURATION = 500;
    const animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("ion-router-outlet"))
      .duration(DURATION)
      // .easing('cubic-bezier(0.36, 0.66, 0.04, 1)') // Smooth and spring-like effect
      //.fromTo('transform', 'scale(0.9) translateX(100%)', 'scale(1) translateX(0%)') // Slide in with a slight zoom
      //.easing('cubic-bezier(0.68, -0.55, 0.27, 1.55)')
      .easing("ease-in-out")
      .fromTo("opacity", "0", "1"); // Fade in
    // .fromTo('box-shadow', '0px 0px 10px rgba(0, 0, 0, 0)', '0px 5px 20px rgba(0, 0, 0, 0.3)');

    animation.play();
    // Navigate to the account tab after the animation
    // this.router.navigate(['/tabs/account']);
    // this.navCtrl.navigateForward('/t/news'); // Use navigateForward for tab transitions
  }

  enableHelferEvents(clubList) {
    return (
      clubList && clubList.some((club) => club.hasFeatureHelferEvent == true)
    );
  }
  enableChampionship(clubList) {
    return (
      clubList && clubList.some((club) => club.hasFeatureChampionship == true)
    );
  }

  getTrainingTranslation(clubList: Club[], defaultTranslation: string): string {
    if (!clubList) return defaultTranslation;

    const hasTrainingSport = clubList.some((club) =>
      [
        "swissunihockey",
        "swisshandball",
        "swissvolley",
        "swissturnverband",
      ].includes(club.type.toLowerCase()),
    );

    return hasTrainingSport ? defaultTranslation : "common.probe";
  }

  async onTabsWillChange(event) {
    // console.log("event", event);
    logEvent(this.analytics, "tabs_will_change_" + event.tab);
    this.animation();
  }
}
