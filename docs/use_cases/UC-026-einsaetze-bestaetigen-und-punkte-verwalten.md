# Use Case: Einsätze bestätigen und Punkte verwalten

## Overview

**Use Case ID:** UC-026  
**Use Case Name:** Einsätze bestätigen und Punkte verwalten  
**Primary Actor:** Club-Admin  
**Goal:** Geleistete Schichteinsätze bestätigen und damit Helferpunkte gutschreiben, Punkte manuell buchen sowie die Soll-Erfüllung der Mitglieder über einen definierbaren Zeitraum auswerten.  
**Status:** Implemented  
**Requirements:** FR-059, FR-061, FR-062

## Preconditions

- Der Club-Admin ist in der App angemeldet und besitzt die Administratorrolle im Verein.
- Das Helfer-Modul ist für den Verein freigeschaltet (`Club.hasFeatureHelferEvent`).
- Für die Bestätigung: Es existiert ein Helfer-Event mit zugesagten Schichteinsätzen (UC-025).

## Main Success Scenario

1. Der Club-Admin öffnet nach dem Einsatz die Detailansicht des Helfer-Events.
2. Der Club-Admin wählt die Aktion "Helferpunkte bestätigen".
3. Das System listet alle zugesagten, noch nicht bestätigten Schichteinsätze (Mitglied mit Schichtname) auf, alle vorausgewählt, mit dem Hinweis "Bitte erst nach dem Einsatz bestätigen!".
4. Der Club-Admin passt die Auswahl bei Bedarf an und bestätigt.
5. Das System markiert jeden ausgewählten Einsatz als bestätigt und vermerkt den Punktewert der Schicht, den bestätigenden Club-Admin und den Zeitpunkt.
6. Das System schreibt die Punkte dem Helferpunkte-Konto der betroffenen Mitglieder gut; die Buchung ist für das Mitglied einsehbar (UC-027).

## Alternative Flows

### A1: Keine Einsätze zum Bestätigen

**Trigger:** Bei Schritt 3 gibt es keine zugesagten, unbestätigten Einsätze.
**Flow:**

1. Das System zeigt den Hinweis "Keine Einsätze zum Bestätigen verfügbar".
2. Der Ablauf endet ohne Änderung.

### A2: Punkte manuell buchen

**Trigger:** Der Club-Admin möchte einen Einsatz ausserhalb einer Schicht honorieren (FR-061).
**Flow:**

1. Der Club-Admin öffnet auf der Vereinsseite den Bereich "Helferpunkte" und tippt auf die Schaltfläche zum Hinzufügen (alternativ in der Detailansicht eines Mitglieds).
2. Der Club-Admin wählt das Mitglied aus und erfasst Beschreibung, Datum und Punkte (1–10).
3. Das System prüft, ob alle Felder ausgefüllt sind; fehlen Angaben, zeigt es einen Warnhinweis und bucht nicht.
4. Das System legt die Buchung als sofort bestätigt an (Bestätiger = ausführender Club-Admin) und zeigt eine Erfolgsmeldung.

### A3: Punkte-Reporting mit Zeitraum und Schwellwert

**Trigger:** Der Club-Admin öffnet auf der Vereinsseite den Bereich "Helferpunkte" (FR-062).
**Flow:**

1. Das System zeigt alle Vereinsmitglieder mit Soll-Punkten ("min."), bestätigten Punkten und geplanten (noch unbestätigten) Einsätzen im eingestellten Auswertungszeitraum.
2. Das System färbt den Punktestand pro Mitglied als Ampel ein (Soll erreicht, teilweise erreicht, nicht erreicht).
3. Der Club-Admin passt bei Bedarf "Datum von" und "Datum bis" der Auswertung an; das System speichert den Zeitraum am Verein und aktualisiert die Auswertung.
4. Der Club-Admin filtert die Liste per Suche oder Rollen-Schnellfilter und lädt die Auswertung bei Bedarf als CSV-Datei herunter.

### A4: Buchung bearbeiten oder löschen

**Trigger:** Der Club-Admin korrigiert in der Detailansicht eines Mitglieds eine bestehende Helferpunkte-Buchung.
**Flow:**

1. Beim Bearbeiten erfasst der Club-Admin Beschreibung, Datum und Punkte neu; das System prüft, dass alle Felder ausgefüllt sind, und speichert die Änderung.
2. Beim Löschen bestätigt der Club-Admin einen Sicherheitsdialog; das System entfernt die Buchung.
3. Das System zeigt jeweils eine Erfolgsmeldung; bei Fehlern eine Fehlermeldung ohne Änderung.

### A5: Individuelles Punkte-Soll festlegen

**Trigger:** Der Club-Admin passt in der Detailansicht eines Mitglieds dessen Punkte-Soll an.
**Flow:**

1. Das System speichert das individuelle Soll am Vereinsmitglied; es überschreibt für dieses Mitglied das Vereins-Soll in der Auswertung.

### A6: Fehler beim Buchen

**Trigger:** Das Speichern einer manuellen Buchung schlägt fehl.
**Flow:**

1. Das System zeigt die Fehlermeldung "Fehler beim Erstellen des Helferpunkts"; es wird keine Buchung angelegt.

## Postconditions

### Success Postconditions

- Bestätigte Schichteinsätze sind mit Punktewert, Bestätiger und Zeitpunkt markiert; die Punkte sind dem Punktekonto der Mitglieder gutgeschrieben.
- Manuell gebuchte Punkte sind als bestätigte Buchungen erfasst.
- Der Auswertungszeitraum ist am Verein gespeichert; die Soll-Erfüllung pro Mitglied ist einsehbar und als CSV exportierbar.

### Failure Postconditions

- Es wurden keine Einsätze bestätigt bzw. keine Buchungen angelegt oder geändert; die Punktekonten bleiben unverändert.

## Business Rules

### BR-001: Punkte erst nach Admin-Bestätigung

Zugesagte Schichteinsätze zählen erst nach der Bestätigung durch einen Club-Admin als gutgeschriebene Helferpunkte; bis dahin erscheinen sie in der Auswertung als geplante (offene) Einsätze.

### BR-002: Punktehöhe aus der Schicht

Bei der Bestätigung eines Schichteinsatzes wird der Punktewert der jeweiligen Schicht gutgeschrieben.

### BR-003: Manuelle Buchung gilt als bestätigt

Manuell gebuchte Helferpunkte sind sofort bestätigt; als Bestätiger wird der ausführende Club-Admin vermerkt. Zulässig sind 1–10 Punkte pro Buchung.

### BR-004: Soll-Wert pro Mitglied

Massgeblich ist das individuelle Punkte-Soll des Mitglieds; ist keines hinterlegt, gilt das Vereins-Soll (`Club.helferPunkte`).

### BR-005: Clubweiter Auswertungszeitraum

Der Auswertungszeitraum (`helferReportingDateFrom`/`helferReportingDateTo`) wird am Verein gespeichert und gilt für alle Auswertungen des Vereins.

### BR-006: Ampellogik der Soll-Erfüllung

Grün bei erreichtem Soll (bestätigte Punkte >= Soll), Gelb ab 50 % des Solls, sonst Rot.

### BR-007: Nur aktive Buchungen zählen

In die Punktesumme eines Mitglieds fliessen nur aktive Buchungen (Status aktiv) innerhalb des Auswertungszeitraums ein.
