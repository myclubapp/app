import { Component, Input, OnInit, Optional } from "@angular/core";
import {
  ModalController,
  AlertController,
  ToastController,
  IonRouterOutlet,
} from "@ionic/angular";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { TranslateService } from "@ngx-translate/core";
import {
  Observable,
  of,
  BehaviorSubject,
  combineLatest,
  lastValueFrom,
} from "rxjs";
import { Club } from "src/app/models/club";
import { MemberPage } from "../member/member.page";
import {
  switchMap,
  map,
  debounceTime,
  catchError,
  tap,
  take,
} from "rxjs/operators";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ClubInvoiceDetailPage } from "../club-invoice-detail/club-invoice-detail.page";
import { doc, updateDoc } from "@angular/fire/firestore";
import { Timestamp } from "@angular/fire/firestore";

import { UiService } from "src/app/services/ui.service";

// Typ für Zuschläge/Abzüge mit optionaler Währung
interface ClubSurcharge {
  name: string;
  amount: number;
  waehrung?: string;
}

@Component({
  selector: "app-club-invoice",
  templateUrl: "./club-invoice.page.html",
  styleUrls: ["./club-invoice.page.scss"],
  standalone: false,
})
export class ClubInvoicePage implements OnInit {
  @Input() club: Club;
  @Input() period;

  invoices$: Observable<any[]> = of([]);
  selectedMembers: any[] = [];
  clubMembers$: Observable<any[]>;
  filteredClubMembers$: Observable<any[]>;
  searchTerm = new BehaviorSubject<string>("");
  groupArray = [];
  segment: "members" | "invoices" = "members";
  teams: any[] = [];
  selectedTeamId$ = new BehaviorSubject<string>("all");
  get selectedTeamId() {
    return this.selectedTeamId$.value;
  }
  set selectedTeamId(val: string) {
    this.selectedTeamId$.next(val);
  }
  invoicedMemberIds: Set<string> = new Set();

  constructor(
    private invoiceService: InvoiceService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private translate: TranslateService,
    private userProfileService: UserProfileService,
    private fbService: FirebaseService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private ui: UiService,
  ) {}

  ngOnInit() {
    this.invoices$ = this.invoiceService.getInvoicesForPeriod(
      this.club.id,
      this.period.id,
    );
    this.invoices$.pipe().subscribe((invoices) => {
      this.invoicedMemberIds = new Set(invoices.map((inv) => inv.id));
    });
    this.loadTeams();
    this.initializeClubMembers();
  }

  loadTeams() {
    this.fbService
      .getClubTeamList(this.club.id)
      .pipe(take(1))
      .subscribe((teams: any[]) => {
        if (!teams || teams.length === 0) {
          this.teams = [];
          return;
        }
        // Für jedes Team die Member-IDs laden
        const teamMemberObservables = teams.map((team) =>
          this.fbService.getTeamMemberRefs(team.id).pipe(
            take(1),
            map((members: any[]) => ({
              ...team,
              memberIds: members.map((m) => m.id),
            })),
          ),
        );
        // Alle Teams mit Member-IDs zusammenführen
        combineLatest(teamMemberObservables).subscribe(
          (teamsWithMembers: any[]) => {
            this.teams = teamsWithMembers;
          },
        );
      });
  }

  initializeClubMembers() {
    this.groupArray = [];
    this.clubMembers$ = this.fbService.getClubMemberRefs(this.club.id).pipe(
      switchMap((members) => {
        if (members.length === 0) {
          this.groupArray = [];
          return of([]);
        }
        const profiles$ = members.map((member) =>
          this.userProfileService.getUserProfileById(member.id).pipe(
            map((profile) => ({
              ...member,
              ...profile,
              firstName: profile.firstName || "Unknown",
              lastName: profile.lastName || "Unknown",
              roles: member.roles || [],
              dateOfBirth: profile.dateOfBirth || null,
            })),
            catchError(() =>
              of({
                ...member,
                firstName: "Unknown",
                lastName: "Unknown",
                dateOfBirth: null,
                roles: member.roles || [],
              }),
            ),
          ),
        );
        return combineLatest(profiles$).pipe(
          map((profiles) =>
            profiles
              .filter((profile) => profile !== undefined)
              .sort((a, b) => a.firstName.localeCompare(b.firstName))
              .map((profile) => {
                const groupByChar = profile.firstName.charAt(0).toUpperCase();
                if (!this.groupArray.includes(groupByChar)) {
                  this.groupArray.push(groupByChar);
                }
                return {
                  ...profile,
                  groupBy: groupByChar,
                };
              }),
          ),
        );
      }),
      catchError(() => of([])),
    );

    this.filteredClubMembers$ = combineLatest([
      this.clubMembers$,
      this.searchTerm,
      this.selectedTeamId$,
    ]).pipe(
      debounceTime(300),
      switchMap(([members, term, teamId]) => {
        if (teamId && teamId !== "all") {
          // Lade die Mitglieder des gewählten Teams
          return this.fbService.getTeamMemberRefs(teamId).pipe(
            map((teamMembers: any[]) => {
              const teamMemberIds = teamMembers.map((m) => m.id);
              let filtered = members.filter((member) =>
                teamMemberIds.includes(member.id),
              );
              if (term) {
                filtered = filtered.filter(
                  (member) =>
                    member.firstName
                      .toLowerCase()
                      .includes(term.toLowerCase()) ||
                    member.lastName.toLowerCase().includes(term.toLowerCase()),
                );
              }
              this.groupArray = [];
              filtered.forEach((member) => {
                const groupByChar = member.firstName.charAt(0).toUpperCase();
                if (!this.groupArray.includes(groupByChar)) {
                  this.groupArray.push(groupByChar);
                }
              });
              return filtered;
            }),
          );
        } else {
          // Alle Mitglieder
          let filtered = members;
          if (term) {
            filtered = filtered.filter(
              (member) =>
                member.firstName.toLowerCase().includes(term.toLowerCase()) ||
                member.lastName.toLowerCase().includes(term.toLowerCase()),
            );
          }
          this.groupArray = [];
          filtered.forEach((member) => {
            const groupByChar = member.firstName.charAt(0).toUpperCase();
            if (!this.groupArray.includes(groupByChar)) {
              this.groupArray.push(groupByChar);
            }
          });
          return of(filtered);
        }
      }),
      tap((filtered) =>
        console.log(
          "Filtered members:",
          Array.isArray(filtered) ? filtered.length : filtered,
        ),
      ),
      catchError(() => of([])),
    );
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || "";
    this.searchTerm.next(searchTerm.trim());
  }

  /**
   * Gibt alle Teams zurück, in denen das Mitglied ist (basierend auf this.teams und Team-Member-Listen)
   */
  getTeamsForMember(member: any): any[] {
    if (!this.teams || this.teams.length === 0) return [];
    // Annahme: Jedes Team hat ein Feld 'id' und die Team-Member-Listen sind in Firestore unter teams/{teamId}/members
    // Da wir die Team-Member-Listen nicht alle einzeln laden wollen, prüfen wir, ob das Member-Objekt ein Feld 'teamIds' hat (optional für spätere Optimierung)
    // Hier: brute-force über alle Teams
    return this.teams.filter(
      (team) =>
        team &&
        team.id &&
        member &&
        member.id &&
        team.memberIds &&
        Array.isArray(team.memberIds) &&
        team.memberIds.includes(member.id),
    );
  }

  /**
   * Gibt alle Teams mit Beitragsdaten für ein Mitglied zurück
   */
  getBeitragTeamsForMember(member: any): any[] {
    // Finde alle Teams, in denen das Mitglied ist
    const teams = this.getTeamsForMember(member);
    // Filtere nur Teams mit Beitragsdaten
    return teams.filter(
      (team) => team.jahresbeitragWert && team.jahresbeitragWaehrung,
    );
  }

  /**
   * Gibt true zurück, wenn das Mitglied in mindestens einem Team ist, das keinen Beitrag hinterlegt hat
   */
  hasTeamWithoutBeitrag(member: any): boolean {
    const teams = this.getTeamsForMember(member);
    return teams.some(
      (team) => !team.jahresbeitragWert || !team.jahresbeitragWaehrung,
    );
  }

  async selectSurchargesDialog(): Promise<ClubSurcharge[]> {
    if (!this.club.surcharges || this.club.surcharges.length === 0) return [];
    const inputs = (this.club.surcharges as ClubSurcharge[]).map((s, i) => ({
      type: "checkbox" as const,
      label: `${s.name} (${s.amount > 0 ? "+" : ""}${s.amount} ${s.waehrung || "CHF"}`,
      value: i,
      checked: false,
    }));
    const alert = await this.alertCtrl.create({
      header: "Zuschläge/Abzüge auswählen",
      inputs,
      buttons: [
        { text: "Abbrechen", role: "cancel" },
        { text: "Weiter", role: "confirm" },
      ],
    });
    await alert.present();
    const { data, role } = await alert.onWillDismiss();
    if (role === "confirm" && data && data.values) {
      return data.values.map(
        (idx) => (this.club.surcharges as ClubSurcharge[])[idx],
      );
    }
    return [];
  }

  async selectPositionsDialog(
    teamBeitrag: { name: string; amount: number; waehrung: string },
    member?: any,
    teamName?: string,
  ): Promise<ClubSurcharge[]> {
    let header = "Positionen auswählen";
    if (member && teamName) {
      header += ` für ${member.firstName} ${member.lastName} (${teamName})`;
    } else if (member) {
      header += ` für ${member.firstName} ${member.lastName}`;
    } else if (teamName) {
      header += ` für Team ${teamName}`;
    }
    const inputs = [
      {
        type: "checkbox" as const,
        label: `${teamBeitrag.name} (${teamBeitrag.amount} ${teamBeitrag.waehrung})`,
        value: "teamBeitrag",
        checked: true,
      },
      ...((this.club.surcharges || []) as ClubSurcharge[]).map((s, i) => ({
        type: "checkbox" as const,
        label: `${s.name} (${s.amount > 0 ? "+" : ""}${s.amount} ${s.waehrung || teamBeitrag.waehrung}`,
        value: i,
        checked: false,
      })),
    ];
    const alert = await this.alertCtrl.create({
      header,
      inputs,
      buttons: [
        { text: "Abbrechen", role: "cancel" },
        { text: "Weiter", role: "confirm" },
      ],
    });
    await alert.present();
    const { data, role } = await alert.onWillDismiss();
    if (role === "confirm" && data && data.values) {
      const result: ClubSurcharge[] = [];
      if (data.values.includes("teamBeitrag")) {
        result.push({
          name: teamBeitrag.name,
          amount: teamBeitrag.amount,
          waehrung: teamBeitrag.waehrung,
        });
      }
      for (const idx of data.values) {
        if (
          typeof idx === "number" &&
          (this.club.surcharges as ClubSurcharge[])[idx]
        ) {
          const s = (this.club.surcharges as ClubSurcharge[])[idx];
          result.push({
            name: s.name,
            amount: s.amount,
            waehrung: s.waehrung || teamBeitrag.waehrung,
          });
        }
      }
      return result;
    }
    return [];
  }

  async generateInvoicesForSelected() {
    if (this.selectedMembers.length === 0) return;

    // Für alle Mitglieder Teambeitrag-Objekt bestimmen
    const teamBeitraege = this.selectedMembers.map((member) => {
      const teams = this.getTeamsForMember(member);
      const beitragTeam = teams.find(
        (team) => team.jahresbeitragWert && team.jahresbeitragWaehrung,
      );
      return beitragTeam
        ? {
            name: `Mitgliederbeitrag ${beitragTeam.name}`,
            amount: beitragTeam.jahresbeitragWert,
            waehrung: beitragTeam.jahresbeitragWaehrung,
          }
        : null;
    });

    // Prüfen, ob alle Teambeiträge gleich sind
    const first = teamBeitraege[0];
    const allEqual = teamBeitraege.every(
      (t) =>
        t &&
        t.name === first.name &&
        t.amount === first.amount &&
        t.waehrung === first.waehrung,
    );

    if (allEqual) {
      // Dialog einmal, Auswahl für alle
      const selectedPositions = await this.selectPositionsDialog(first);
      if (selectedPositions.length === 0) return;
      for (const [index, member] of this.selectedMembers.entries()) {
        const currency = first.waehrung;
        const amount = selectedPositions
          .filter((p) => p.waehrung === currency)
          .reduce((sum, p) => sum + Number(p.amount), 0);
        const referenceId =
          this.period.referenceId + Date.now().toString().slice(1, 12) + index;
        const modulo10 = this.mod10(referenceId);
        const referenceNumber = referenceId.toString() + modulo10.toString();
        await this.invoiceService.generateInvoiceForMember(
          this.club.id,
          this.period.id,
          member,
          {
            amount,
            currency,
            referenceNumber,
            status: "draft",
            purpose: this.period.name,
            positions: selectedPositions,
          },
        );
      }
    } else {
      // Dialog für jedes Mitglied einzeln
      for (const [index, member] of this.selectedMembers.entries()) {
        const beitrag = teamBeitraege[index];
        if (!beitrag) {
          this.ui.showErrorToast(
            `Kein Beitrag für ${member.firstName} ${member.lastName} hinterlegt!`,
          );
          continue;
        }
        // Teamname extrahieren
        const teams = this.getTeamsForMember(member);
        const beitragTeam = teams.find(
          (team) => team.jahresbeitragWert && team.jahresbeitragWaehrung,
        );
        const teamName = beitragTeam ? beitragTeam.name : "";
        const selectedPositions = await this.selectPositionsDialog(
          beitrag,
          member,
          teamName,
        );
        if (selectedPositions.length === 0) continue;
        const currency = beitrag.waehrung;
        const amount = selectedPositions
          .filter((p) => p.waehrung === currency)
          .reduce((sum, p) => sum + Number(p.amount), 0);
        const referenceId =
          this.period.referenceId + Date.now().toString().slice(1, 12) + index;
        const modulo10 = this.mod10(referenceId);
        const referenceNumber = referenceId.toString() + modulo10.toString();
        await this.invoiceService.generateInvoiceForMember(
          this.club.id,
          this.period.id,
          member,
          {
            amount,
            currency,
            referenceNumber,
            status: "draft",
            purpose: this.period.name,
            positions: selectedPositions,
          },
        );
      }
    }
    this.ui.showSuccessToast("Rechnungen für Auswahl generiert");
  }

  async openInvoiceDetail(invoice: any) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;
    console.log("openInvoiceDetail", invoice);
    const modal = await this.modalCtrl.create({
      component: ClubInvoiceDetailPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        clubId: this.club.id,
        periodId: this.period.id,
        invoiceId: invoice.id,
      },
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    // Optional: Handle modal result
  }

  toggleMemberSelection(member, checked: boolean) {
    if (checked) {
      if (!this.selectedMembers.find((m) => m.id === member.id)) {
        this.selectedMembers.push(member);
      }
    } else {
      this.selectedMembers = this.selectedMembers.filter(
        (m) => m.id !== member.id,
      );
    }
  }

  selectAll() {
    this.filteredClubMembers$.pipe(take(1)).subscribe((members: any[]) => {
      members.forEach((member) => {
        if (!this.selectedMembers.find((m) => m.id === member.id)) {
          this.selectedMembers.push(member);
        }
        console.log("selectAll", this.selectedMembers);
      });
    });
  }

  deselectAll() {
    this.filteredClubMembers$.pipe(take(1)).subscribe((members: any[]) => {
      this.selectedMembers = this.selectedMembers.filter(
        (sel) => !members.find((m) => m.id === sel.id),
      );
      console.log("deselectAll", this.selectedMembers);
    });
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  setFilter(role: string) {
    this.handleSearch({ detail: { value: role } });
  }

  isMemberSelected(member: any): boolean {
    return this.selectedMembers.some((m) => m.id === member.id);
  }

  isMemberInvoiced(member: any): boolean {
    return this.invoicedMemberIds.has(member.id);
  }

  /**
   * Calculates the checksum according to the ISO 7812-1 standard.
   *
   * @param input The input whose checksum should be calculated.
   * @returns The calculated checksum.
   */
  mod10(input: string): string {
    const trimmedInput = input.replace(/ /g, "");

    const table = [0, 9, 4, 6, 8, 2, 7, 1, 3, 5];
    let carry = 0;

    for (let i = 0; i < trimmedInput.length; i++) {
      carry =
        table[(carry + parseInt(trimmedInput.substring(i, i + 1), 10)) % 10];
    }

    return ((10 - carry) % 10).toString();
  }

  async onCamtupload(event: any) {
    console.log("onCamtupload", event);
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e: any) => {
      const xml = e.target.result;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");
      await this.processCamt53(xmlDoc, file.name);
    };
    reader.readAsText(file);
  }

  async processCamt53(xmlDoc: Document, filename: string) {
    // 1. Alle Rechnungen laden
    const invoices: any[] = await lastValueFrom(this.invoices$.pipe(take(1)));

    // 2. Durch alle Zahlungen im CAMT.053 iterieren und gültige Zahlungen sammeln
    const entries = Array.from(xmlDoc.getElementsByTagName("Ntry"));
    let validPayments: { tx: Element; entry: Element; ref: string }[] = [];

    for (const entry of entries) {
      const txs = Array.from(entry.getElementsByTagName("TxDtls"));
      for (const tx of txs) {
        const ref = tx.querySelector(
          "RmtInf > Strd > CdtrRefInf > Ref",
        )?.textContent;
        const prtry = tx.querySelector(
          "RmtInf > Strd > CdtrRefInf > Tp > CdOrPrtry > Prtry",
        )?.textContent;
        if (!ref || prtry !== "QRR") continue;
        validPayments.push({ tx, entry, ref });
      }
    }

    // Alert anzeigen, bevor verbucht wird
    const confirmed = await this.ui.showConfirmDialog({
      header: "Datei verbuchen?",
      message: `Es wurden ${validPayments.length} Zahlungen mit QRR-Referenz in der Datei gefunden. Möchtest du diese verbuchen?`,
    });
    if (!confirmed) return;

    let updatedCount = 0;
    for (const { tx, entry, ref } of validPayments) {
      const invoice = invoices.find((inv) => inv.referenceNumber === ref);
      if (invoice && invoice.status !== "bezahlt") {
        const payer = tx.getElementsByTagName("Nm")[0]?.textContent || "";
        const date = entry.getElementsByTagName("Dt")[0]?.textContent || "";
        const paymentDate = Timestamp.fromDate(new Date(date));
        console.log(payer, date);
        await this.invoiceService.updateInvoiceStatus(
          this.club.id,
          this.period.id,
          invoice.id,
          "bezahlt",
        );
        await this.invoiceService.updateInvoice(
          this.club.id,
          this.period.id,
          invoice.id,
          {
            paymentDate: paymentDate,
            payer: payer,
            camtUploadDate: Timestamp.now(),
            filename: filename,
          },
        );
        updatedCount++;
      }
    }
    this.ui.showSuccessToast(`${updatedCount} Rechnungen als bezahlt markiert`);
  }

  filterForDraftInvoices(invoices: any[]) {
    return invoices.filter((invoice) => invoice.status === "draft").length;
  }

  async sendInvoicesForSelected() {
    const invoices = await lastValueFrom(this.invoices$.pipe(take(1)));
    for (const invoice of invoices) {
      if (invoice.status === "draft") {
        await this.invoiceService.updateInvoiceStatus(
          this.club.id,
          this.period.id,
          invoice.id,
          "send",
        );
      }
    }
    this.ui.showSuccessToast(`${invoices.length} Rechnungen versendet`);
  }
}
