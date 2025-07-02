import { Component, Input } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { doc, deleteDoc } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-club-invoice-detail",
  templateUrl: "./club-invoice-detail.page.html",
  styleUrls: ["./club-invoice-detail.page.scss"],
  standalone: false,
})
export class ClubInvoiceDetailPage {
  @Input() clubId: string;
  @Input() periodId: string;
  @Input() invoiceId: string;

  invoice$: Observable<any>;

  constructor(
    private modalCtrl: ModalController,
    private invoiceService: InvoiceService,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    console.log(
      "ClubInvoiceDetailPage",
      this.invoiceId,
      this.clubId,
      this.periodId,
    );
    this.invoice$ = this.invoiceService.getInvoice(
      this.clubId,
      this.periodId,
      this.invoiceId,
    );
  }

  async close() {
    await this.modalCtrl.dismiss(null, "close");
  }

  async sendInvoice() {
    // Beispiel: Status auf 'sent' setzen
    await this.invoiceService.updateInvoiceStatus(
      this.clubId,
      this.periodId,
      this.invoiceId,
      "sent",
    );
    this.showToast("Rechnung gesendet");
    await this.modalCtrl.dismiss(
      { invoice: { id: this.invoiceId, status: "sent" } },
      "sent",
    );
  }

  async deleteInvoice() {
    await this.invoiceService.deleteInvoice(
      this.clubId,
      this.periodId,
      this.invoiceId,
    );
    this.showToast("Rechnung gelöscht");
    await this.modalCtrl.dismiss(
      { invoice: { id: this.invoiceId, status: "deleted" } },
      "deleted",
    );
  }

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: "top",
      color: "success",
    });
    toast.present();
  }
}
