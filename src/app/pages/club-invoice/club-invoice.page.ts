import { Component, Input, OnInit, Optional } from "@angular/core";
import {
  ModalController,
  AlertController,
  ToastController,
  IonRouterOutlet,
} from "@ionic/angular";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { TranslateService } from "@ngx-translate/core";
import { Observable, of, BehaviorSubject, combineLatest } from "rxjs";
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

  constructor(
    private invoiceService: InvoiceService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private translate: TranslateService,
    private userProfileService: UserProfileService,
    private fbService: FirebaseService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.invoices$ = this.invoiceService.getInvoicesForPeriod(
      this.club.id,
      this.period.id,
    );
    this.loadTeams();
    this.initializeClubMembers();
  }

  loadTeams() {
    this.fbService
      .getClubTeamList(this.club.id)
      .pipe(take(1))
      .subscribe((teams: any[]) => {
        this.teams = teams;
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
              teamIds: [], // wird später gesetzt
            })),
            catchError(() =>
              of({
                ...member,
                firstName: "Unknown",
                lastName: "Unknown",
                dateOfBirth: null,
                roles: member.roles || [],
                teamIds: [],
              }),
            ),
          ),
        );
        return combineLatest(profiles$).pipe(
          switchMap((profiles) => {
            // Hole für jedes Mitglied die Teams
            const teamRefs$ = profiles.map((profile) =>
              this.fbService.getUserTeamRefs({ uid: profile.id } as any).pipe(
                take(1),
                map((teams: any[]) => teams.map((t) => t.id)),
                catchError(() => of([])),
              ),
            );
            return combineLatest(teamRefs$).pipe(
              map((teamIdsArr) => {
                return profiles.map((profile, idx) => ({
                  ...profile,
                  teamIds: teamIdsArr[idx] || [],
                }));
              }),
            );
          }),
          map((profilesWithTeams) =>
            profilesWithTeams
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
      map(([members, term, teamId]) => {
        let filtered = members;
        if (teamId && teamId !== "all") {
          filtered = filtered.filter(
            (member) => member.teamIds && member.teamIds.includes(teamId),
          );
        }
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
        return filtered;
      }),
      tap((filtered) => console.log("Filtered members:", filtered.length)),
      catchError(() => of([])),
    );
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || "";
    this.searchTerm.next(searchTerm.trim());
  }

  async generateInvoicesForSelected() {
    if (this.selectedMembers.length === 0) return;

    let amount = 100;
    let currency = "CHF";
    let selectedTeam = null;
    if (this.selectedTeamId && this.selectedTeamId !== "all") {
      selectedTeam = this.teams.find((t) => t.id === this.selectedTeamId);
      if (selectedTeam) {
        amount = selectedTeam.jahresbeitragWert || amount;
        currency = selectedTeam.jahresbeitragWaehrung || currency;
      }
    }

    for (const member of this.selectedMembers) {
      await this.invoiceService.generateInvoiceForMember(
        this.club.id,
        this.period.id,
        member,
        {
          amount: amount,
          currency: currency,
          status: "draft",
          purpose: this.period.name,
        },
      );
    }
    this.showToast("Rechnungen für Auswahl generiert");
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

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: "top",
      color: "success",
    });
    toast.present();
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
}
