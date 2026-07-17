# Use Case: Rechnungslauf erstellen

## Overview

**Use Case ID:** UC-028  
**Use Case Name:** Rechnungslauf erstellen  
**Primary Actor:** Club-Admin  
**Goal:** Eine Abrechnungsperiode anlegen und daraus pro Mitglied Rechnungen aus Team-Jahresbeiträgen und Zuschlägen/Abzügen generieren, inklusive nachträglicher Bearbeitung einzelner Rechnungspositionen.  
**Status:** Implemented  
**Requirements:** FR-063, FR-064, FR-068

## Preconditions

- Der Club-Admin ist in der App angemeldet und besitzt die Administratorrolle im Verein.
- Das PRO-Modul ist für den Verein freigeschaltet (`Club.hasFeatureMyClubPro`); der Menüpunkt "Rechnungen" auf der Vereinsseite ist dadurch sichtbar.
- Für die Rechnungsgenerierung: An den Teams des Vereins sind Jahresbeiträge (Wert und Währung) hinterlegt; optional sind am Verein Zuschläge/Abzüge definiert.

## Main Success Scenario

1. Der Club-Admin öffnet die Vereinsseite und tippt auf "Rechnungen".
2. Das System zeigt die bestehenden Abrechnungsperioden nach Jahr gruppiert sowie die Abrechnungskonfiguration (Bankverbindung des Vereins, Team-Jahresbeiträge, Zuschläge/Abzüge).
3. Der Club-Admin legt eine neue Abrechnungsperiode an und vergibt einen Namen (z. B. "Jahresbeitrag 2026").
4. Das System speichert die Periode mit Ersteller, Erstellungszeitpunkt und einer Referenzbasis für die Rechnungsnummern und bestätigt die Anlage.
5. Der Club-Admin öffnet die Periode.
6. Das System zeigt im Bereich "Mitglieder" alle Vereinsmitglieder; bereits fakturierte Mitglieder sind gekennzeichnet. Die Liste kann nach Team gefiltert und durchsucht werden.
7. Der Club-Admin wählt die zu fakturierenden Mitglieder aus (einzeln oder über "alle"/"keine") und startet die Rechnungsgenerierung.
8. Das System zeigt für jedes ausgewählte Mitglied einen Dialog mit dessen beitragspflichtigen Teams (das erste Team vorausgewählt) und den Zuschlägen/Abzügen des Vereins; der Club-Admin wählt die gewünschten Positionen.
9. Das System berechnet den Rechnungsbetrag als Summe der gewählten Positionen, erzeugt eine eindeutige QR-Referenznummer mit Prüfziffer und legt die Rechnung im Status "draft" an — mit den Empfängerdaten des Mitglieds und dem Periodennamen als Zweck.
10. Das System bestätigt nach dem letzten Mitglied "Rechnungen für Auswahl generiert"; die Rechnungen erscheinen im Bereich "Rechnungen" der Periode.
11. Der Club-Admin öffnet bei Bedarf eine Rechnung im Status "draft" und bearbeitet die Positionen: Er fügt Zuschläge/Abzüge des Vereins hinzu oder löscht einzelne Positionen.
12. Das System berechnet den Rechnungsbetrag nach jeder Positionsänderung neu und bestätigt die Änderung.

## Alternative Flows

### A1: Mitglied ohne hinterlegten Teambeitrag

**Trigger:** Bei Schritt 8 ist ein ausgewähltes Mitglied in keinem Team mit hinterlegtem Jahresbeitrag.
**Flow:**

1. Das System zeigt die Fehlermeldung "Kein Beitrag für [Vorname Nachname] hinterlegt!".
2. Das Mitglied wird übersprungen; die Generierung fährt mit dem nächsten Mitglied fort.

### A2: Keine Position ausgewählt

**Trigger:** Der Club-Admin bestätigt den Positionsdialog (Schritt 8), ohne eine Position zu wählen.
**Flow:**

1. Das System zeigt die Fehlermeldung "Bitte wähle mindestens eine Position aus!".
2. Das System zeigt den Positionsdialog für dieses Mitglied erneut an.

### A3: Abbruch des Positionsdialogs

**Trigger:** Der Club-Admin bricht den Positionsdialog eines Mitglieds ab.
**Flow:**

1. Das System bricht die Generierung ab; für dieses und die noch verbleibenden Mitglieder werden keine Rechnungen erstellt.
2. Bereits erstellte Rechnungen der aktuellen Auswahl bleiben bestehen.

### A4: Position hinzufügen ohne definierte Zuschläge/Abzüge

**Trigger:** Der Club-Admin möchte einer Rechnung eine Position hinzufügen (Schritt 11), am Verein sind aber keine Zuschläge/Abzüge definiert.
**Flow:**

1. Das System zeigt den Hinweis, dass keine Zuschläge/Abzüge verfügbar sind und diese zuerst im Club-Bereich erfasst werden müssen.
2. Die Rechnung bleibt unverändert.

### A5: Abrechnungskonfiguration pflegen

**Trigger:** Der Club-Admin pflegt in der Perioden-Übersicht die Konfiguration.
**Flow:**

1. Der Club-Admin erfasst oder ändert die Bankverbindung des Vereins (Konto, Name, Adresse) und speichert sie.
2. Der Club-Admin ändert den Jahresbeitrag (Wert und Währung) eines Teams.
3. Der Club-Admin legt Zuschläge/Abzüge an (Bezeichnung, Betrag — negativ für Abzüge —, Währung), bearbeitet oder löscht sie.
4. Das System bestätigt jede Änderung mit einer Erfolgsmeldung.

### A6: Periode bearbeiten oder löschen

**Trigger:** Der Club-Admin benennt eine Periode um oder löscht sie.
**Flow:**

1. Beim Umbenennen speichert das System den neuen Namen.
2. Beim Löschen bestätigt der Club-Admin einen Sicherheitsdialog; das System entfernt die Periode.

## Postconditions

### Success Postconditions

- Die Abrechnungsperiode existiert mit Name, Ersteller und Erstellungszeitpunkt.
- Für jedes ausgewählte Mitglied mit Teambeitrag existiert eine Rechnung im Status "draft" mit Positionen, Gesamtbetrag, Währung, Zweck und eindeutiger QR-Referenznummer.
- Nachträgliche Positionsänderungen sind gespeichert; der Rechnungsbetrag entspricht der Positionssumme.

### Failure Postconditions

- Es wurden keine oder nur für einen Teil der ausgewählten Mitglieder Rechnungen erstellt (übersprungene Mitglieder ohne Teambeitrag, Abbruch durch den Club-Admin); bereits bestehende Rechnungen und Perioden sind unverändert.

## Business Rules

### BR-001: Rechnungsbetrag ist die Summe der Positionen

Der Betrag einer Rechnung wird stets aus der Summe ihrer Positionen (in der Rechnungswährung) berechnet — bei der Generierung und nach jeder Positionsänderung.

### BR-002: Positionsquellen

Rechnungspositionen entstehen aus Team-Jahresbeiträgen ("Mitgliederbeitrag [Teamname]") und den am Verein definierten Zuschlägen/Abzügen; negative Beträge wirken als Abzug.

### BR-003: QR-Referenznummer mit Prüfziffer

Jede Rechnung erhält eine 27-stellige QR-Referenznummer: 26 Ziffern (abgeleitet aus der Perioden-Referenz und dem Erstellungszeitpunkt) plus eine MOD10-Prüfziffer.

### BR-004: Neue Rechnungen starten als Entwurf

Generierte Rechnungen erhalten den Status "draft"; erst der Statuswechsel löst den Versand aus (UC-029).

### BR-005: Eine Rechnung pro Mitglied und Periode

Pro Mitglied und Abrechnungsperiode existiert genau eine Rechnung; eine erneute Generierung für dasselbe Mitglied ersetzt die bestehende Rechnung.

### BR-006: Positionen nur im Entwurf bearbeitbar

Rechnungspositionen werden nur bei Rechnungen im Status "draft" angezeigt und können nur dort ergänzt oder gelöscht werden.

### BR-007: Zweck aus der Periode

Der Verwendungszweck der Rechnung entspricht dem Namen der Abrechnungsperiode.

### BR-008: Teambeitrag als Voraussetzung

Für Mitglieder ohne Team mit hinterlegtem Jahresbeitrag (Wert und Währung) wird keine Rechnung generiert.
