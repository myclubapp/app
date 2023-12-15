import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-helfer-punkte",
  templateUrl: "./helfer-punkte.page.html",
  styleUrls: ["./helfer-punkte.page.scss"],
})
export class HelferPunktePage implements OnInit {
  constructor(private readonly modalCtrl: ModalController) {}

  ngOnInit() {}

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }
}
