import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { limit, orderBy, Timestamp } from "firebase/firestore";
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
} from "@angular/fire/firestore";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  constructor(
    private firestore: Firestore,
    private readonly authService: AuthService,
  ) {}

  // Neue Abrechnungsperiode anlegen
  createPeriod(clubId: string, period: any): Promise<any> {
    period.createdBy = this.authService.auth.currentUser.uid;
    return addDoc(
      collection(this.firestore, `club/${clubId}/invoicePeriods`),
      period,
    );
  }

  // Alle Perioden eines Clubs abrufen
  getPeriods(clubId: string): Observable<any[]> {
    return collectionData(
      query(
        collection(this.firestore, `club/${clubId}/invoicePeriods`),
        // orderBy("createdAt", "desc")
      ),
      { idField: "id" },
    ) as Observable<any[]>;
  }

  // Einzelne Rechnung für ein Mitglied anlegen
  createInvoiceForMember(
    clubId: string,
    periodId: string,
    invoice: any,
  ): Promise<any> {
    return getDoc(
      doc(
        this.firestore,
        `club/${clubId}/invoicePeriods/${periodId}/invoices/${invoice.id}`,
      ),
    );
  }

  // Alle Rechnungen einer Periode abrufen
  getInvoicesForPeriod(clubId: string, periodId: string): Observable<any[]> {
    return collectionData(
      query(
        collection(
          this.firestore,
          `club/${clubId}/invoicePeriods/${periodId}/invoices`,
        ),
        // orderBy("createdAt", "desc")
      ),
      { idField: "id" },
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

  getInvoice(
    clubId: string,
    periodId: string,
    invoiceId: string,
  ): Observable<any> {
    return docData(
      doc(
        this.firestore,
        `club/${clubId}/invoicePeriods/${periodId}/invoices/${invoiceId}`,
      ),
      { idField: "id" },
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
    return await setDoc(
      doc(
        this.firestore,
        `club/${clubId}/invoicePeriods/${periodId}/invoices/${member.id}`,
      ),
      {
        memberId: member.id,
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
      doc(this.firestore, `club/${clubId}/anys/${periodId}`),
      data,
    );
  }

  // Periode löschen
  deletePeriod(clubId: string, periodId: string): Promise<void> {
    return deleteDoc(doc(this.firestore, `club/${clubId}/anys/${periodId}`));
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
