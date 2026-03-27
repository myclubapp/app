import { Component, Input, OnInit, Optional } from "@angular/core";
import { ModalController, IonRouterOutlet } from "@ionic/angular";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { ClubInvoiceDetailPage } from "../club-invoice-detail/club-invoice-detail.page";
import { Observable } from "rxjs";
import { User } from "firebase/auth";

@Component({
  selector: "app-member-invoice-list",
  templateUrl: "./member-invoice-list.page.html",
  styleUrls: ["./member-invoice-list.page.scss"],
  standalone: false,
})
export class MemberInvoiceListPage implements OnInit {
  @Input() user: User; // Das übergebene Mitglied/Profil

  years: string[] = [];

  invoices$: Observable<any[]>;

  constructor(
    private invoiceService: InvoiceService,

    private modalCtrl: ModalController,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.invoices$ = this.invoiceService.getInvoicesForMember(this.user.uid);
    // console.log(this.user.uid);
    this.invoices$.subscribe((invoices) => {
      console.log("invoices", invoices);
      this.years = invoices.map((invoice) =>
        invoice.createdAt.toDate().getFullYear(),
      );
    });
  }

  getStatusTranslationKey(status: string): string {
    const map: Record<string, string> = {
      draft: "invoice.status.draft",
      send: "invoice.status.sending",
      sent: "invoice.status.sent",
      bezahlt: "invoice.status.paid",
    };
    return map[status] || "invoice.status.unknown";
  }

  async close() {
    await this.modalCtrl.dismiss(null, "close");
  }

  async openInvoiceDetail(invoice: any) {
    console.log("invoice", invoice);
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubInvoiceDetailPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        clubId: invoice.clubId,
        periodId: invoice.periodId,
        invoiceId: invoice.id,
        fromProfile: true,
      },
    });
    await modal.present();
  }
}
