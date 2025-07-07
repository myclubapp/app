import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-qr-invoice-modal",
  templateUrl: "./qr-invoice-modal.page.html",
  styleUrls: ["./qr-invoice-modal.page.scss"],
  standalone: false,
})
export class QrInvoiceModalPage implements OnInit {
  @Input() svg: string;

  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {
    // console.log("QrInvoiceModalPage", this.svg);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
