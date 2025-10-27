import {
  Injectable,
  inject,
  Injector,
  runInInjectionContext,
} from "@angular/core";
import { Observable, of } from "rxjs";
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  setDoc,
  query,
  where,
  getDoc,
  collectionGroup,
  limit,
  orderBy,
  Timestamp,
} from "@angular/fire/firestore";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  private injector = inject(Injector);

  constructor(
    private firestore: Firestore,
    private readonly authService: AuthService,
  ) {}

  // Neue Abrechnungsperiode anlegen
  createPeriod(clubId: string, period: any): Promise<any> {
    const date = new Date();
    period.createdBy = this.authService.auth.currentUser.uid;
    period.createdAt = Timestamp.now();
    period.referenceId =
      date.toISOString().replaceAll("-", "").replaceAll(":", "").split("T")[0] +
      date
        .toISOString()
        .replaceAll("-", "")
        .replaceAll(":", "")
        .split("T")[1]
        .split(".")[0];
    return addDoc(
      collection(this.firestore, `club/${clubId}/invoicePeriods`),
      period,
    );
  }

  // Alle Perioden eines Clubs abrufen
  getPeriods(clubId: string): Observable<any[]> {
    return runInInjectionContext(this.injector, () =>
      collectionData(
        query(
          collection(this.firestore, `club/${clubId}/invoicePeriods`),
          // orderBy("createdAt", "desc")
        ),
        { idField: "id" },
      ),
    ) as Observable<any[]>;
  }

  // Einzelne Rechnung für ein Mitglied anlegen

  // Alle Rechnungen einer Periode abrufen
  getInvoicesForPeriod(clubId: string, periodId: string): Observable<any[]> {
    return runInInjectionContext(this.injector, () =>
      collectionData(
        query(
          collection(
            this.firestore,
            `club/${clubId}/invoicePeriods/${periodId}/invoices`,
          ),
          // orderBy("createdAt", "desc")
        ),
        { idField: "id" },
      ),
    ) as Observable<any[]>;
  }

  getInvoicesForMember(memberId: string): Observable<any[]> {
    return runInInjectionContext(this.injector, () =>
      collectionData(
        query(
          collectionGroup(this.firestore, "invoices"),
          where("memberId", "==", memberId),
        ),
        { idField: "id" },
      ),
    ) as Observable<any[]>;
  }

  // Status einer Rechnung aktualisieren
  updateInvoiceStatus(
    clubId: string,
    periodId: string,
    invoiceId: string,
    status: any,
  ): Promise<void> {
    return updateDoc(
      doc(
        this.firestore,
        `club/${clubId}/invoicePeriods/${periodId}/invoices/${invoiceId}`,
      ),
      { status },
    );
  }

  updateInvoice(
    clubId: string,
    periodId: string,
    invoiceId: string,
    data: any,
  ): Promise<void> {
    return updateDoc(
      doc(
        this.firestore,
        `club/${clubId}/invoicePeriods/${periodId}/invoices/${invoiceId}`,
      ),
      data,
    );
  }

  getInvoice(
    clubId: string,
    periodId: string,
    invoiceId: string,
  ): Observable<any> {
    return runInInjectionContext(this.injector, () =>
      docData(
        doc(
          this.firestore,
          `club/${clubId}/invoicePeriods/${periodId}/invoices/${invoiceId}`,
        ),
        { idField: "id" },
      ),
    ) as Observable<any>;
  }

  // Rechnungen für ausgewählte Mitglieder generieren (Platzhalter)
  async generateInvoiceForMember(
    clubId: string,
    periodId: string,
    member,
    invoiceData: any,
  ): Promise<void> {
    console.log(
      "generateInvoiceForMember",
      clubId,
      periodId,
      member,
      invoiceData,
    );
    return setDoc(
      doc(
        this.firestore,
        `club/${clubId}/invoicePeriods/${periodId}/invoices/${member.id}`,
      ),
      {
        createdAt: Timestamp.now(),
        createdBy: this.authService.auth.currentUser?.uid,
        memberId: member.id,
        clubId: clubId,
        periodId: periodId,
        firstName: member.firstName,
        lastName: member.lastName,
        email: member.email,
        ...invoiceData,
      },
    );
  }

  // Periode aktualisieren
  updatePeriod(
    clubId: string,
    periodId: string,
    data: Partial<any>,
  ): Promise<void> {
    return updateDoc(
      doc(this.firestore, `club/${clubId}/invoicePeriods/${periodId}`),
      data,
    );
  }

  // Periode löschen
  deletePeriod(clubId: string, periodId: string): Promise<void> {
    return deleteDoc(
      doc(this.firestore, `club/${clubId}/invoicePeriods/${periodId}`),
    );
  }

  // Einzelne Rechnung löschen
  deleteInvoice(
    clubId: string,
    periodId: string,
    invoiceId: string,
  ): Promise<void> {
    return deleteDoc(
      doc(
        this.firestore,
        `club/${clubId}/invoicePeriods/${periodId}/invoices/${invoiceId}`,
      ),
    );
  }
}
