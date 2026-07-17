# Use Case: Rechnungen versenden und überwachen

## Overview

**Use Case ID:** UC-029  
**Use Case Name:** Rechnungen versenden und überwachen  
**Primary Actor:** Club-Admin, System  
**Goal:** Rechnungen einer Abrechnungsperiode per E-Mail versenden, Zahlungserinnerungen senden, Zahlungseingänge verbuchen und pro Rechnung einen Swiss-QR-Einzahlungsschein bereitstellen.  
**Status:** Implemented  
**Requirements:** FR-065, FR-066, FR-067, FR-069

## Preconditions

- Der Club-Admin ist in der App angemeldet und besitzt die Administratorrolle im Verein.
- Das PRO-Modul ist für den Verein freigeschaltet (`Club.hasFeatureMyClubPro`).
- In der Abrechnungsperiode existieren Rechnungen im Status "draft" (UC-028).
- Für den QR-Einzahlungsschein: Am Verein ist eine vollständige Bankverbindung (`creditor`) hinterlegt.

## Main Success Scenario

1. Der Club-Admin öffnet die Abrechnungsperiode und wechselt in den Bereich "Rechnungen".
2. Das System zeigt alle Rechnungen der Periode mit Status ("draft", "send", "sent", "bezahlt") sowie Zähler für Entwürfe, hängende Sendungen und versendete Rechnungen.
3. Der Club-Admin löst den Versand aus.
4. Das System setzt alle Entwurfsrechnungen auf den Status "send".
5. Der Statuswechsel auf "send" löst den automatischen Versand durch das System (Cloud Function) aus: Die Rechnung wird dem Mitglied per E-Mail zugestellt und der Status auf "sent" gesetzt.
6. Der Club-Admin überwacht den Zahlungseingang anhand der Statusanzeige in Liste und Detailansicht.
7. Bei Zahlungseingang markiert der Club-Admin die Rechnung in der Detailansicht als bezahlt.
8. Das System setzt den Status auf "bezahlt" und speichert Zahlungsdatum und Zahler.

## Alternative Flows

### A1: Einzelne Rechnung versenden

**Trigger:** Der Club-Admin wählt in der Detailansicht einer Entwurfsrechnung "Rechnung senden".
**Flow:**

1. Das System setzt die Rechnung auf "send"; der Ablauf wird bei Schritt 5 fortgesetzt.

### A2: Hängende Rechnung erneut versenden

**Trigger:** Eine Rechnung verharrt im Status "send" (Zustellung nicht bestätigt); der Club-Admin wählt "erneut senden" (einzeln oder für alle hängenden Rechnungen).
**Flow:**

1. Das System setzt die Rechnung zurück auf "draft" und unmittelbar wieder auf "send", wodurch der automatische Versand erneut ausgelöst wird.
2. Das System bestätigt den erneuten Versand.

### A3: Zahlungserinnerung senden

**Trigger:** Der Club-Admin wählt bei einer versendeten Rechnung ("sent") "Zahlungserinnerung" — einzeln oder für alle versendeten Rechnungen der Periode.
**Flow:**

1. Das System zeigt einen Bestätigungsdialog mit dem Empfänger bzw. der Anzahl betroffener Rechnungen; der Club-Admin bestätigt.
2. Das System vermerkt den Zeitpunkt der letzten Erinnerung an der Rechnung und bestätigt den Versand der Erinnerung.

### A4: Zahlungseingänge per Bankdatei verbuchen

**Trigger:** Der Club-Admin lädt im Bereich "Rechnungen" eine CAMT.053-Bankdatei hoch.
**Flow:**

1. Das System ermittelt alle Zahlungen der Datei mit QRR-Referenz und zeigt einen Bestätigungsdialog mit deren Anzahl.
2. Der Club-Admin bestätigt die Verbuchung.
3. Das System ordnet jede Zahlung über die QR-Referenznummer der passenden Rechnung zu, setzt diese auf "bezahlt" und übernimmt Zahler und Zahlungsdatum aus der Datei.
4. Das System meldet die Anzahl der als bezahlt markierten Rechnungen.

### A5: QR-Einzahlungsschein anzeigen

**Trigger:** Der Club-Admin (oder das Mitglied, UC-030) wählt in der Rechnungsdetailansicht "Einzahlungsschein anzeigen".
**Flow:**

1. Das System erzeugt den Swiss-QR-Einzahlungsschein mit der Bankverbindung des Vereins als Zahlungsempfänger, den Adressdaten des Mitglieds als Zahlungspflichtigem, Betrag, Währung und der QR-Referenz mit MOD10-Prüfziffer.
2. Das System zeigt den Einzahlungsschein in einer Vollbildansicht an.

### A6: Fehlende oder ungültige Bankverbindung

**Trigger:** Beim Erzeugen des QR-Einzahlungsscheins (A5) fehlt die Bankverbindung des Vereins oder die Daten sind ungültig.
**Flow:**

1. Das System zeigt anstelle des Einzahlungsscheins die Fehlermeldung, dass der QR-Einzahlungsschein nicht generiert werden konnte.
2. Die Rechnung bleibt unverändert.

### A7: Rechnung bereits bezahlt

**Trigger:** Eine Rechnung hat den Status "bezahlt".
**Flow:**

1. Das System blendet die Aktionen Versenden, Erinnern, Löschen und "Als bezahlt markieren" aus und zeigt stattdessen die Zahlungsdetails (Zahlungsdatum, Zahler, ggf. Verbuchungsdatei).
2. Beim Bankdatei-Abgleich (A4) werden bereits bezahlte Rechnungen übersprungen.

### A8: Rechnung löschen

**Trigger:** Der Club-Admin löscht eine noch nicht bezahlte Rechnung in der Detailansicht.
**Flow:**

1. Das System entfernt die Rechnung aus der Periode und bestätigt die Löschung.

## Postconditions

### Success Postconditions

- Versendete Rechnungen haben den Status "sent"; das Mitglied hat die Rechnung per E-Mail erhalten.
- Zahlungserinnerungen sind mit Zeitstempel an der Rechnung vermerkt.
- Bezahlte Rechnungen haben den Status "bezahlt" mit Zahlungsdatum und Zahler (manuell erfasst oder aus der Bankdatei übernommen).

### Failure Postconditions

- Nicht versendete Rechnungen verbleiben im Status "draft" oder "send" (Zustellung nicht bestätigt) und können erneut versendet werden.
- Nicht zuordenbare Zahlungen aus der Bankdatei bleiben unverbucht; der Zahlungsstatus der Rechnungen ist unverändert.
- Konnte der QR-Einzahlungsschein nicht erzeugt werden, bleibt die Rechnung unverändert.

## Business Rules

### BR-001: Statusgesteuerter Versand

Der Status "send" ist der Auslöser für den automatischen E-Mail-Versand durch das System (Cloud Function); nach erfolgreicher Zustellung steht die Rechnung auf "sent".

### BR-002: Erneuter Versand durch Status-Reset

Ein erneuter Versand erfolgt durch Zurücksetzen der Rechnung auf "draft" und erneutes Setzen auf "send".

### BR-003: Erinnerung nur für versendete Rechnungen

Zahlungserinnerungen sind nur für Rechnungen im Status "sent" vorgesehen; der Zeitpunkt der letzten Erinnerung wird an der Rechnung gespeichert.

### BR-004: Bezahlt ist Endstatus

Bezahlte Rechnungen können nicht gelöscht, erneut versendet oder nochmals als bezahlt markiert werden. Beim manuellen Markieren wird als Zahler "manuell" und das aktuelle Datum als Zahlungsdatum gesetzt.

### BR-005: QR-Referenz trägt MOD10-Prüfziffer

Die QR-Referenz ist 27-stellig (26 Ziffern plus MOD10-Prüfziffer). Der automatische Zahlungsabgleich erfolgt ausschliesslich über diese Referenz (Referenztyp QRR).

### BR-006: Bankverbindung als Voraussetzung für den QR-Einzahlungsschein

Der Swiss-QR-Einzahlungsschein kann nur mit einer vollständigen Bankverbindung (`creditor`) des Vereins erzeugt werden.
