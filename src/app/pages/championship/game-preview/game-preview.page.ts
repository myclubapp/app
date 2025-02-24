import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { take, tap, switchMap, of, catchError, forkJoin, map, Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ChampionshipService } from 'src/app/services/firebase/championship.service';
import * as svg from "save-svg-as-png";


@Component({
    selector: 'app-game-preview',
    templateUrl: './game-preview.page.html',
    styleUrls: ['./game-preview.page.scss'],
    standalone: false
})
export class GamePreviewPage implements OnInit {
  @Input("data") game: Game;
  game$: Observable<Game>;

  constructor(
    private navParams: NavParams,
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.game = this.navParams.get("data");
    this.game$ = of(this.game);
  }
  saveImage(gameId) {

   
    svg.saveSvgAsPng(document.getElementsByTagName('svg'),
      "diagram.png")
   /* var canv = document.getElementById(gameId) as HTMLCanvasElement;
    var image = canv
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
    window.location.href = image;

    svg.saveSvgAsPng(
      document.getElementById(gameId)[0],
      "diagram.png"
    );*/

  }
 
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
    // this.navController.pop();
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.game, "confirm");
    /*this.navController.navigateBack("championship", {
      state: {
        role: "confirm",
        data: this.game,
      },
    });*/
  }
}
