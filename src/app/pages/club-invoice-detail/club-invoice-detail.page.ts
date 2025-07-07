import { Component, Input, Optional } from "@angular/core";
import {
  ModalController,
  ToastController,
  AlertController,
  IonRouterOutlet,
} from "@ionic/angular";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { Timestamp } from "@angular/fire/firestore";
import {
  Observable,
  lastValueFrom,
  map,
  mergeMap,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Clipboard } from "@capacitor/clipboard";
import { UiService } from "src/app/services/ui.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { SwissQRBill } from "swissqrbill/svg";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { QrInvoiceModalPage } from "../qr-invoice-modal/qr-invoice-modal.page";

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
  @Input() fromProfile: boolean = false;

  invoice$: Observable<any>;

  qrSVG: SafeHtml;
  qrSVGString: string;

  constructor(
    private sanitizer: DomSanitizer,
    private modalCtrl: ModalController,
    private invoiceService: InvoiceService,
    private toastCtrl: ToastController,
    private uiService: UiService,
    private userProfileService: UserProfileService,
    private alertCtrl: AlertController,
    private readonly fbService: FirebaseService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.invoice$ = this.invoiceService.getInvoice(
      this.clubId,
      this.periodId,
      this.invoiceId,
    );
    // this.club$ = this.fbService.getClubRef(this.clubId);
    this.generateQRCode();
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
      "send",
    );
    this.uiService.showSuccessToast("Rechnung gesendet");
    await this.modalCtrl.dismiss(
      { invoice: { id: this.invoiceId, status: "send" } },
      "send",
    );
  }

  async deleteInvoice() {
    await this.invoiceService.deleteInvoice(
      this.clubId,
      this.periodId,
      this.invoiceId,
    );
    this.uiService.showSuccessToast("Rechnung gelöscht");
    await this.modalCtrl.dismiss(
      { invoice: { id: this.invoiceId, status: "deleted" } },
      "deleted",
    );
  }

  async showQRInvoice() {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: QrInvoiceModalPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        svg: this.qrSVG,
      },
    });
    await modal.present();
  }

  generateQRCode() {
    this.invoice$
      .pipe(
        take(1),
        switchMap((invoice) => {
          return this.fbService
            .getClubRef(this.clubId)
            .pipe(map((club) => ({ invoice, club })));
        }),
        mergeMap(({ invoice, club }) => {
          return this.userProfileService
            .getUserProfileById(invoice.memberId)
            .pipe(map((userProfile) => ({ invoice, club, userProfile })));
        }),
        tap(({ invoice, club, userProfile }) => {
          const data: any = {
            amount: invoice.amount,
            creditor: club.creditor,
            currency: invoice.currency,
            debtor: {
              address: userProfile?.street || "",
              buildingNumber: userProfile?.houseNumber || "",
              city: userProfile?.city || club.creditor.city,
              country: userProfile?.country || "CH",
              name: userProfile?.firstName + " " + userProfile?.lastName,
              zip: userProfile?.postalcode,
            },
            reference: invoice.referenceNumber,
          };
          const svg = new SwissQRBill(data);
          this.qrSVGString = svg.element.outerHTML; // SVG als String für das neue Fenster
          this.qrSVG = this.sanitizer.bypassSecurityTrustHtml(this.qrSVGString); // für die Anzeige im Template
          console.log("qrSVG", this.qrSVG);
        }),
      )
      .subscribe();
  }

  async copyReferenceNumber(invoice: any) {
    await Clipboard.write({
      string: invoice.referenceNumber,
    });
    await this.uiService.showClipboardSuccessToast();
  }

  async markAsPaid() {
    await this.invoiceService.updateInvoiceStatus(
      this.clubId,
      this.periodId,
      this.invoiceId,
      "bezahlt",
    );

    await this.invoiceService.updateInvoice(
      this.clubId,
      this.periodId,
      this.invoiceId,
      {
        paymentDate: Timestamp.now(),
        payer: "manuell",
      },
    );

    this.uiService.showSuccessToast("Rechnung als bezahlt markiert");
    await this.modalCtrl.dismiss(
      { invoice: { id: this.invoiceId, status: "bezahlt" } },
      "paid",
    );
  }

  async addPosition(invoice: any) {
    // Club-Zuschläge/Abzüge aus club$ Observable holen
    const club: any = await lastValueFrom(
      this.fbService.getClubRef(this.clubId).pipe(take(1)),
    );
    const surcharges = Array.isArray(club?.surcharges) ? club.surcharges : [];
    // Wenn keine Zuschläge bekannt, Hinweis anzeigen und abbrechen
    if (!surcharges || surcharges.length === 0) {
      this.uiService.showInfoDialog({
        header: "Keine Zuschläge/Abzüge verfügbar",
        message:
          "Es sind keine Club-Zuschläge oder Abzüge definiert. Bitte erfasse zuerst Zuschläge/Abzüge im Club-Bereich.",
      });
      return;
    }
    // Dialog mit Checkboxen für Club-Zuschläge/Abzüge
    const inputs = surcharges.map((s, i) => ({
      type: "checkbox" as const,
      label: `${s.name} (${s.amount > 0 ? "+" : ""}${s.amount} ${s.waehrung || invoice.currency || "CHF"}`,
      value: i,
      checked: false,
    }));
    const alert = await this.alertCtrl.create({
      header: "Zuschlag/Abzug auswählen",
      inputs,
      buttons: [
        { text: "Abbrechen", role: "cancel" },
        { text: "Hinzufügen", role: "confirm" },
      ],
    });
    await alert.present();
    const { data, role } = await alert.onWillDismiss();
    if (role === "confirm" && data && data.values && data.values.length > 0) {
      const newPositions = Array.isArray(invoice.positions)
        ? [...invoice.positions]
        : [];
      for (const idx of data.values) {
        const s = surcharges[idx];
        newPositions.push({
          name: s.name,
          amount: s.amount,
          currency: s.waehrung || invoice.currency || "CHF",
        });
      }
      // Neue Gesamtsumme berechnen
      const newAmount = newPositions
        .filter((p) => p.currency === invoice.currency)
        .reduce((sum, p) => sum + Number(p.amount), 0);
      await this.invoiceService.updateInvoice(
        this.clubId,
        this.periodId,
        this.invoiceId,
        {
          positions: newPositions,
          amount: newAmount,
        },
      );
      this.uiService.showSuccessToast("Position(en) hinzugefügt");
    }
  }

  async deletePosition(invoice: any, index: number) {
    const newPositions = Array.isArray(invoice.positions)
      ? [...invoice.positions]
      : [];
    newPositions.splice(index, 1);
    // Neue Gesamtsumme berechnen
    const newAmount = newPositions
      .filter((p) => p.currency === invoice.currency)
      .reduce((sum, p) => sum + Number(p.amount), 0);
    await this.invoiceService.updateInvoice(
      this.clubId,
      this.periodId,
      this.invoiceId,
      {
        positions: newPositions,
        amount: newAmount,
      },
    );
    this.uiService.showSuccessToast("Position gelöscht");
  }
}
