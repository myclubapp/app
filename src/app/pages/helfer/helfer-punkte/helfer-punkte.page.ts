import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { HelferService } from "src/app/services/firebase/helfer.service";
import { HelferDetailPage } from "../helfer-detail/helfer-detail.page";

@Component({
  selector: "app-helfer-punkte",
  templateUrl: "./helfer-punkte.page.html",
  styleUrls: ["./helfer-punkte.page.scss"],
})
export class HelferPunktePage implements OnInit {
  helferPunkteList$: Observable<any[]>;
  groupArray = [];
  constructor(private readonly modalCtrl: ModalController,
    private readonly helferService: HelferService) {

    this.helferPunkteList$ = this.helferService.getHelferPunkteList();

  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();

    this.groupArray.push(currentYear);
    this.groupArray.push(currentYear - 1);
    this.groupArray.push(currentYear - 2);
    this.groupArray.push(currentYear - 3);
  }

  async openHelferEinsatz(helfereinsatz){
    console.log("helfereinsatz " + helfereinsatz);

    console.log(helfereinsatz);

    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: helfereinsatz,
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
