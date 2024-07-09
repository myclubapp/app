import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  clubList$: Observable<Club[]>;
  constructor(public menuCtrl: MenuController,
    private readonly fbService: FirebaseService,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.clubList$  = this.fbService.getClubList();
    
    this.menuCtrl.enable(true, "menu");
  }

  enableHelferEvents(clubList){
    return clubList && clubList.some(club => club.hasFeatureHelferEvent == true);
  }
  enableChampionship(clubList){
    return clubList && clubList.some(club => club.hasFeatureChampionship == true);
  }
}
