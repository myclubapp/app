import { Component, Input, OnInit, Optional } from "@angular/core";
import {
  ModalController,
  AlertController,
  ToastController,
  IonRouterOutlet,
} from "@ionic/angular";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { TranslateService } from "@ngx-translate/core";
import { Observable, of } from "rxjs";
import { Club } from "src/app/models/club";
import { Timestamp } from "@angular/fire/firestore";
import { ClubInvoicePage } from "../club-invoice/club-invoice.page";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { map } from "rxjs/operators";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-club-billing-period",
  templateUrl: "./club-billing-period.page.html",
  styleUrls: ["./club-billing-period.page.scss"],
  standalone: false,
})
export class ClubBillingPeriodPage implements OnInit {
  @Input() club: Club;
  periodGroups$: Observable<{ year: string; periods: any[] }[]>;
  // clubAdminList$: Observable<any[]>;
  creditor = {
    account: "",
    name: "",
    address: "",
    buildingNumber: "",
    zip: "",
    city: "",
    country: "",
  };
  teams$: Observable<any[]>;
  // Zuschläge/Abzüge
  surcharges: { name: string; amount: number; currency: string }[] = [];

  constructor(
    private invoiceService: InvoiceService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private translate: TranslateService,
    private authService: AuthService,
    private fbService: FirebaseService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private uiService: UiService,
  ) {}

  ngOnInit() {
    this.loadPeriods();
    if (this.club && this.club.creditor) {
      this.creditor = { ...this.club.creditor };
    }
    // Teams laden
    this.teams$ = this.fbService.getTeamsByClubId(this.club.id);
    // Zuschläge/Abzüge laden
    if (this.club && Array.isArray(this.club.surcharges)) {
      this.surcharges = [...this.club.surcharges];
    }
  }

  loadPeriods() {
    this.periodGroups$ = this.invoiceService.getPeriods(this.club.id).pipe(
      map((periods) => {
        const groups: { [year: string]: any[] } = {};
        periods.forEach((period) => {
          const year = period.createdAt.toDate().getFullYear().toString();
          if (!groups[year]) groups[year] = [];
          groups[year].push(period);
        });
        return Object.keys(groups)
          .sort((a, b) => +b - +a)
          .map((year) => ({ year, periods: groups[year] }));
      }),
    );
  }

  async addPeriod() {
    const alert = await this.alertCtrl.create({
      header: "Neue Abrechnungsperiode",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "z.B. Jahresbeitrag 2025",
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
        },
        {
          text: "Anlegen",
          handler: async (data) => {
            if (data.name && data.name.trim()) {
              const period: any = {
                name: data.name,
              };
              await this.invoiceService.createPeriod(this.club.id, period);
              this.loadPeriods();
              this.uiService.showSuccessToast("Abrechnungsperiode angelegt");
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async openInvoice(period: any) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubInvoicePage,

      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        club: this.club,
        period: period,
      },
    });
    await modal.present();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  isClubAdmin(clubAdminList: any[]): boolean {
    const currentUserId = this.authService.auth.currentUser.uid;
    return clubAdminList.some((admin) => admin.id === currentUserId);
  }

  async editPeriod(period: any) {
    const alert = await this.alertCtrl.create({
      header: "Periode bearbeiten",
      inputs: [
        {
          name: "name",
          type: "text",
          value: period.name,
          placeholder: "Name der Periode",
        },
      ],
      buttons: [
        { text: "Abbrechen", role: "cancel" },
        {
          text: "Speichern",
          handler: async (data) => {
            if (data.name && data.name.trim()) {
              await this.invoiceService.updatePeriod(this.club.id, period.id, {
                name: data.name,
              });
              this.loadPeriods();
              this.uiService.showSuccessToast("Periode aktualisiert");
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async deletePeriod(period: any) {
    const alert = await this.alertCtrl.create({
      header: "Periode löschen",
      message: `Möchtest du die Periode "${period.name}" wirklich löschen?`,
      buttons: [
        { text: "Abbrechen", role: "cancel" },
        {
          text: "Löschen",
          role: "destructive",
          handler: async () => {
            await this.invoiceService.deletePeriod(this.club.id, period.id);
            this.loadPeriods();
            this.uiService.showSuccessToast("Periode gelöscht");
          },
        },
      ],
    });
    await alert.present();
  }

  async saveCreditor() {
    await this.fbService.setClubCreditor(this.club.id, this.creditor);
    this.uiService.showSuccessToast("Bankverbindung gespeichert");
  }

  async changeJahresbeitrag(team: any) {
    const alert = await this.alertCtrl.create({
      header: "Jahresbeitrag ändern",
      inputs: [
        {
          name: "wert",
          type: "number",
          placeholder: "Wert",
          value: team.jahresbeitragWert,
        },
        {
          name: "waehrung",
          type: "text",
          placeholder: "Währung (z.B. CHF)",
          value: team.jahresbeitragWaehrung,
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
        },
        {
          text: "Speichern",
          handler: async (data) => {
            try {
              await this.fbService.setTeamThreshold(
                team.id,
                "jahresbeitragWert",
                Number(data.wert),
              );
              await this.fbService.setTeamThreshold(
                team.id,
                "jahresbeitragWaehrung",
                data.waehrung,
              );
              this.uiService.showSuccessToast("Jahresbeitrag gespeichert");
              // Optional: Teams neu laden
              this.teams$ = this.fbService.getTeamsByClubId(this.club.id);
            } catch (error) {
              this.uiService.showErrorToast(error.message);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async addSurcharge() {
    const alert = await this.alertCtrl.create({
      header: "Zuschlag/Abzug hinzufügen",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Bezeichnung (z.B. Trainingsgast, Familienrabatt)",
        },
        {
          name: "amount",
          type: "number",
          placeholder: "Betrag (z.B. -30 für Abzug, 50 für Zuschlag)",
        },
        {
          name: "currency",
          type: "text",
          placeholder: "Währung (z.B. CHF)",
          value: "CHF",
        },
      ],
      buttons: [
        { text: "Abbrechen", role: "cancel" },
        {
          text: "Hinzufügen",
          handler: async (data) => {
            if (data.name && data.amount) {
              this.surcharges.push({
                name: data.name,
                amount: Number(data.amount),
                currency: data.currency,
              });
              await this.saveSurcharges();
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async editSurcharge(index: number) {
    const surcharge = this.surcharges[index];
    const alert = await this.alertCtrl.create({
      header: "Zuschlag/Abzug bearbeiten",
      inputs: [
        {
          name: "name",
          type: "text",
          value: surcharge.name,
          placeholder: "Bezeichnung",
        },
        {
          name: "amount",
          type: "number",
          value: surcharge.amount,
          placeholder: "Betrag (z.B. -30 für Abzug, 50 für Zuschlag)",
        },
      ],
      buttons: [
        { text: "Abbrechen", role: "cancel" },
        {
          text: "Speichern",
          handler: async (data) => {
            if (data.name && data.amount) {
              this.surcharges[index] = {
                name: data.name,
                amount: Number(data.amount),
                currency: surcharge.currency,
              };
              await this.saveSurcharges();
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async deleteSurcharge(index: number) {
    this.surcharges.splice(index, 1);
    await this.saveSurcharges();
  }

  async saveSurcharges() {
    await this.fbService.setClubSurcharges(this.club.id, this.surcharges);
    this.uiService.showSuccessToast("Zuschläge/Abzüge gespeichert");
  }
}
