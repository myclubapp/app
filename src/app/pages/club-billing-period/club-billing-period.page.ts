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
import { Timestamp } from "firebase/firestore";
import { ClubInvoicePage } from "../club-invoice/club-invoice.page";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { map } from "rxjs/operators";

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

  constructor(
    private invoiceService: InvoiceService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private translate: TranslateService,
    private authService: AuthService,
    private fbService: FirebaseService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.loadPeriods();
    // this.clubAdminList$ = this.fbService.getClubAdminList();
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
                id: Date.now().toString(),
                name: data.name,
                createdAt: Timestamp.now(),
                createdBy: "",
              };
              await this.invoiceService.createPeriod(this.club.id, period);
              this.loadPeriods();
              this.showToast("Abrechnungsperiode angelegt");
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

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: "top",
      color: "success",
    });
    toast.present();
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
              this.showToast("Periode aktualisiert");
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
            this.showToast("Periode gelöscht");
          },
        },
      ],
    });
    await alert.present();
  }
}
