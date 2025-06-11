import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import {
  take,
  tap,
  switchMap,
  of,
  catchError,
  forkJoin,
  map,
  Observable,
} from "rxjs";
import { Game } from "src/app/models/game";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import * as svg from "save-svg-as-png";
import { Share } from "@capacitor/share";
import { Filesystem, Directory } from "@capacitor/filesystem";

import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-game-preview",
  templateUrl: "./game-preview.page.html",
  styleUrls: ["./game-preview.page.scss"],
  standalone: false,
})
export class GamePreviewPage implements OnInit {
  @Input("data") game: Game;
  game$: Observable<Game>;

  isShareable = false;

  // Social Share
  shareSocialShareOptions: any;
  showSocialShare = false;

  faTwitter: any = faTwitter;
  faFacebook: any = faFacebook;
  faWhatsapp: any = faWhatsapp;
  faLinkedin: any = faLinkedin;
  faEnvelope: any = faEnvelope;
  faCopy: any = faCopy;

  constructor(
    private navParams: NavParams,
    private readonly modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.game = this.navParams.get("data");
    this.game$ = of(this.game);
    Share.canShare().then((result) => (this.isShareable = result.value));
  }

  // Hilfsfunktion: Wandelt alle externen <image>-Elemente im SVG in Data-URLs um
  private async inlineExternalImages(svg: SVGSVGElement): Promise<void> {
    const images = svg.querySelectorAll("image");
    const promises = Array.from(images).map(async (img: SVGImageElement) => {
      const href = img.getAttribute("href") || img.getAttribute("xlink:href");
      if (!href || href.startsWith("data:")) return;
      try {
        const response = await fetch(href, { mode: "cors" });
        const blob = await response.blob();
        return new Promise<void>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            img.setAttribute("href", reader.result as string);
            resolve();
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      } catch (e) {
        console.warn("Bild konnte nicht eingebettet werden:", href, e);
      }
    });
    await Promise.all(promises);
  }
  async openShare(gameId: string) {
    const gamePreviewEl = document.querySelector("game-preview");
    const svgElement = gamePreviewEl?.shadowRoot?.querySelector("svg");
    if (!svgElement) {
      console.error("Kein SVG-Element gefunden");
      return;
    }

    await this.inlineExternalImages(svgElement);

    const rect = svgElement.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;

    if (svgElement.viewBox && svgElement.viewBox.baseVal) {
      const vb = svgElement.viewBox.baseVal;
      const vbRatio = vb.width / vb.height;
      const domRatio = rect.width / rect.height;

      if (domRatio > vbRatio) {
        width = height * vbRatio;
      } else {
        height = width / vbRatio;
      }
    }

    const options = {
      scale: 2,
      backgroundColor: "white",
      width,
      height,
    };

    try {
      // Step 1: Convert SVG to PNG URI
      const pngUri = await svg.svgAsPngUri(svgElement, options);

      // Step 2: Convert URI to Blob
      const response = await fetch(pngUri);
      const blob = await response.blob();

      // Step 3: Convert Blob to Base64
      const base64Data = await this.blobToBase64(blob);

      // Step 4: Save to FileSystem
      const fileName = `spiel-${gameId}.png`;
      await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Cache,
      });

      // Step 5: Get file URI
      const fileUri = await Filesystem.getUri({
        directory: Directory.Cache,
        path: fileName,
      });

      // Step 6: Share
      await Share.share({
        title: `Spiel ${gameId}`,
        text: "Schau dir dieses Spiel an!",
        url: fileUri.uri,
        dialogTitle: "Bild teilen",
      });
    } catch (error) {
      console.error("Fehler beim Teilen des Bildes:", error);
    }
  }

  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(",")[1]; // remove prefix
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.game, "confirm");
  }
}
