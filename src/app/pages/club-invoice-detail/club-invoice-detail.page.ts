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
import { TranslateService } from "@ngx-translate/core";
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
    private translate: TranslateService,
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

  async sendReminder() {
    const invoice = await lastValueFrom(this.invoice$.pipe(take(1)));
    const name = `${invoice.firstName} ${invoice.lastName}`;
    const confirmed = await this.uiService.showConfirmDialog({
      header: this.translate.instant("invoice.send_reminder"),
      message: this.translate.instant("invoice.send_reminder_confirm", {
        name,
      }),
    });
    if (!confirmed) return;

    await this.invoiceService.sendInvoiceReminder(
      this.clubId,
      this.periodId,
      this.invoiceId,
    );
    this.uiService.showSuccessToast(
      this.translate.instant("invoice.reminder_sent"),
    );
  }

  async resendInvoice() {
    // Set to draft first, then back to send to re-trigger the Cloud Function
    await this.invoiceService.updateInvoiceStatus(
      this.clubId,
      this.periodId,
      this.invoiceId,
      "draft",
    );
    await this.invoiceService.updateInvoiceStatus(
      this.clubId,
      this.periodId,
      this.invoiceId,
      "send",
    );
    this.uiService.showSuccessToast(
      this.translate.instant("invoice.resend_success"),
    );
    await this.modalCtrl.dismiss(
      { invoice: { id: this.invoiceId, status: "send" } },
      "resend",
    );
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
          // QR-Reference: 26 Ziffern + 1 MOD10-Prüfziffer = 27 Zeichen
          let reference = (invoice.referenceNumber || "").replace(/\s/g, "");
          // Basis auf 26 Zeichen bringen und Prüfziffer neu berechnen
          const base = reference
            .replace(/\D/g, "")
            .padStart(26, "0")
            .slice(-26);
          const table = [0, 9, 4, 6, 8, 2, 7, 1, 3, 5];
          let carry = 0;
          for (let i = 0; i < base.length; i++) {
            carry = table[(carry + parseInt(base[i], 10)) % 10];
          }
          reference = base + ((10 - carry) % 10).toString();

          const data: any = {
            amount: invoice.amount,
            creditor: club.creditor,
            currency: invoice.currency,
            debtor: {
              address: userProfile?.street || "",
              buildingNumber: userProfile?.houseNumber || "",
              city: userProfile?.city || club.creditor?.city || "",
              country: userProfile?.country || "CH",
              name:
                (userProfile?.firstName || "") +
                " " +
                (userProfile?.lastName || ""),
              zip: userProfile?.postalcode || club.creditor?.zip || "0000",
            },
            reference: reference,
          };

          try {
            const svg = new SwissQRBill(data);
            this.qrSVGString = svg.element.outerHTML;
            this.qrSVG = this.sanitizer.bypassSecurityTrustHtml(
              this.qrSVGString,
            );
          } catch (err) {
            console.error("QR Bill generation failed:", err);
            this.qrSVG = this.sanitizer.bypassSecurityTrustHtml(
              '<p style="color: red; padding: 20px;">QR-Einzahlungsschein konnte nicht generiert werden. Referenznummer möglicherweise ungültig.</p>',
            );
          }
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
