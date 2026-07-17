# Use Case: Eigene Rechnungen einsehen

## Overview

**Use Case ID:** UC-030  
**Use Case Name:** Eigene Rechnungen einsehen  
**Primary Actor:** Mitglied  
**Goal:** Die eigenen Rechnungen inklusive Swiss-QR-Einzahlungsschein einsehen, um zu wissen, was zu bezahlen ist.  
**Status:** Implemented  
**Requirements:** FR-070

## Preconditions

- Das Mitglied ist in der App angemeldet.
- Das Mitglied gehört mindestens einem Verein mit freigeschaltetem PRO-Modul an (`Club.hasFeatureMyClubPro`); der Menüpunkt "Meine Rechnungen" im Profil ist dadurch sichtbar.
- Für das Mitglied wurden Rechnungen erstellt (UC-028).

## Main Success Scenario

1. Das Mitglied öffnet sein Profil.
2. Das Mitglied tippt auf den Menüpunkt "Meine Rechnungen".
3. Das System zeigt alle auf das Mitglied ausgestellten Rechnungen über alle Vereine, nach Jahr gruppiert, mit Zweck, Betrag, Währung und Status.
4. Das Mitglied öffnet eine Rechnung.
5. Das System zeigt die Rechnungsdetails: Empfängerdaten, Betrag, Status, Zweck und die Referenznummer.
6. Das Mitglied tippt auf "Einzahlungsschein anzeigen".
7. Das System erzeugt den Swiss-QR-Einzahlungsschein (Zahlungsempfänger = Verein, Zahlungspflichtiger = Mitglied, Betrag, Währung, QR-Referenz mit Prüfziffer) und zeigt ihn in einer Vollbildansicht an.

## Alternative Flows

### A1: QR-Einzahlungsschein kann nicht erzeugt werden

**Trigger:** Beim Erzeugen des Einzahlungsscheins (Schritt 7) fehlt die Bankverbindung des Vereins oder die Referenzdaten sind ungültig.
**Flow:**

1. Das System zeigt anstelle des Einzahlungsscheins die Fehlermeldung, dass der QR-Einzahlungsschein nicht generiert werden konnte.

### A2: Bezahlte Rechnung einsehen

**Trigger:** Die geöffnete Rechnung hat den Status "bezahlt".
**Flow:**

1. Das System zeigt zusätzlich die Zahlungsdetails (Zahlungsdatum, Zahler).

### A3: Referenznummer kopieren

**Trigger:** Das Mitglied tippt in der Detailansicht auf die Kopier-Schaltfläche neben der Referenznummer.
**Flow:**

1. Das System kopiert die Referenznummer in die Zwischenablage und bestätigt dies.

### A4: Keine Rechnungen vorhanden

**Trigger:** Für das Mitglied existieren keine Rechnungen.
**Flow:**

1. Das System zeigt eine leere Liste.

## Postconditions

### Success Postconditions

- Das Mitglied hat seine Rechnungen und bei Bedarf den QR-Einzahlungsschein eingesehen; es wurden keine Rechnungsdaten verändert.

### Failure Postconditions

- Die Rechnungen bzw. der Einzahlungsschein konnten nicht angezeigt werden; es wurden keine Rechnungsdaten verändert.

## Business Rules

### BR-001: Nur eigene Rechnungen

Die Liste enthält ausschliesslich Rechnungen, die auf das angemeldete Mitglied ausgestellt sind — über alle Vereine hinweg.

### BR-002: Keine Verwaltungsaktionen für Mitglieder

In der Mitgliederansicht stehen die Admin-Aktionen (Versenden, Erinnern, Löschen, "Als bezahlt markieren", Positionen hinzufügen) nicht zur Verfügung; die Ansicht ist lesend.

### BR-003: QR-Einzahlungsschein pro Rechnung

Der Swiss-QR-Einzahlungsschein wird pro Rechnung aus der Bankverbindung des Vereins, den Adressdaten des Mitglieds sowie Betrag, Währung und der 27-stelligen QR-Referenz mit MOD10-Prüfziffer erzeugt (vgl. UC-029).
