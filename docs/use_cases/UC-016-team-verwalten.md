# Use Case: Team verwalten

## Overview

**Use Case ID:** UC-016
**Use Case Name:** Team verwalten
**Primary Actor:** Team-Admin (Trainer); Club-Admin mit denselben Rechten, Jahresbeitrag gemäss FR-040 durch Club-Admin
**Goal:** Ein Team-Admin pflegt die Darstellung und Konfiguration seines Teams (Logo, Grenzwerte), verwaltet Mitglieder und Administratoren des Teams, und der Club-Admin legt den Jahresbeitrag (Betrag und Währung) des Teams fest.
**Status:** Implemented
**Requirements:** FR-036, FR-037, FR-038, FR-040

## Preconditions

- Der Nutzer ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Der Nutzer ist in der admins-Liste des Teams (Team-Admin) oder in der admins-Liste des zugehörigen Vereins (Club-Admin) eingetragen.
- Das Team existiert und der Nutzer hat die Teamdetails geöffnet.

## Main Success Scenario

1. Der Team-Admin öffnet die Teamdetails.
2. Das System zeigt die Teamdaten an: Logo bzw. Portrait, Name, Durchschnittsalter, Anzahl Mitglieder und Administratoren sowie die Details Liga, Info und Website und das letzte Änderungsdatum.
3. Der Team-Admin tippt auf das Kamera-Symbol beim Team-Logo.
4. Das System bietet die Aufnahme eines Fotos oder die Auswahl aus der Galerie an.
5. Der Team-Admin wählt ein Bild aus und bestätigt den Zuschnitt.
6. Das System speichert das Bild als Team-Logo und zeigt eine Erfolgsmeldung.
7. Der Team-Admin passt die Grenzwerte für Abmeldungen (Training, Meisterschaft) an.
8. Das System speichert jede Änderung sofort.
9. Der Team-Admin öffnet die Mitgliederliste des Teams.
10. Das System zeigt die alphabetisch gruppierte, durchsuchbare Liste der Teammitglieder.
11. Der Team-Admin aktiviert den Bearbeitungsmodus und entfernt ein Mitglied aus dem Team.
12. Das System verlangt eine Bestätigung.
13. Der Team-Admin bestätigt das Entfernen.
14. Das System entfernt das Mitglied aus dem Team und zeigt eine Erfolgsmeldung.
15. Der Team-Admin öffnet die Administratorenliste des Teams und wählt "Hinzufügen".
16. Das System zeigt die Teammitglieder zur Auswahl an, die noch keine Administratoren sind.
17. Der Team-Admin wählt eine oder mehrere Personen aus und bestätigt.
18. Das System trägt die Personen als Team-Admins ein und zeigt eine Erfolgsmeldung.
19. Der Club-Admin öffnet in den Teamdetails den Bereich "Jahresbeitrag" und tippt auf "Bearbeiten".
20. Das System zeigt einen Dialog mit den Feldern Wert und Währung (z. B. CHF).
21. Der Club-Admin erfasst Betrag und Währung und speichert.
22. Das System speichert den Jahresbeitrag des Teams und zeigt eine Erfolgsmeldung.

## Alternative Flows

### A1: Fehlende Berechtigung

**Trigger:** Ein Nutzer ohne Team-Admin- oder Club-Admin-Rolle öffnet die Teamdetails.
**Flow:**

1. Das System zeigt nur die Basisdaten des Teams (Logo, Name, Durchschnittsalter, Anzahl Mitglieder, Details).
2. Kamera-Symbol, Administratorenliste, Grenzwerte, Jahresbeitrag, Exporte und die Schaltfläche zum Löschen des Teams werden nicht angezeigt.

### A2: Team-Admin entfernen

**Trigger:** Der Team-Admin aktiviert in der Administratorenliste den Bearbeitungsmodus und tippt auf das Entfernen-Symbol eines Administrators.
**Flow:**

1. Das System entfernt die Person ohne zusätzliche Rückfrage aus der Administratorenliste und zeigt eine Erfolgsmeldung.
2. Die Person bleibt weiterhin Teammitglied.
3. Das System verhindert nicht das Entfernen des letzten Administrators; die Administratorenliste kann leer werden.

### A3: Mitglied zum Team hinzufügen

**Trigger:** Der Team-Admin wählt in der Team-Mitgliederliste "Hinzufügen".
**Flow:**

1. Das System zeigt die Vereinsmitglieder zur Auswahl an, die noch nicht im Team sind.
2. Der Team-Admin wählt Personen aus und bestätigt.
3. Das System gibt die entsprechenden Team-Beitritte frei und zeigt eine Erfolgsmeldung (siehe UC-019).

### A4: Keine verfügbaren Personen

**Trigger:** Beim Hinzufügen von Mitgliedern oder Administratoren sind keine weiteren Personen verfügbar.
**Flow:**

1. Das System zeigt in den Teamdetails einen Hinweis an, dass keine Mitglieder verfügbar sind; der Vorgang endet ohne Änderung.

### A5: Entfernen abgebrochen

**Trigger:** Der Team-Admin verneint die Bestätigungsfrage beim Entfernen eines Mitglieds.
**Flow:**

1. Das System zeigt eine Abbruch-Meldung; das Mitglied bleibt im Team.

### A6: Logo-Auswahl abgebrochen oder fehlgeschlagen

**Trigger:** Der Team-Admin bricht die Bildauswahl ab oder das Speichern schlägt fehl.
**Flow:**

1. Das System zeigt eine Fehlermeldung; das bisherige Logo bleibt unverändert.

### A7: Team löschen

**Trigger:** Der Team-Admin tippt in den Teamdetails auf "Team löschen".
**Flow:**

1. Das System verlangt eine Bestätigung.
2. Der Team-Admin bestätigt.
3. Das System löscht das Team, zeigt eine Erfolgsmeldung und schliesst die Teamdetails.

## Postconditions

### Success Postconditions

- Geänderte Teamdaten (Logo, Grenzwerte, Jahresbeitrag mit Wert und Währung) sind gespeichert und werden allen Nutzern angezeigt.
- Entfernte Mitglieder erscheinen nicht mehr in der Team-Mitgliederliste; ernannte bzw. entfernte Administratoren sind in der admins-Liste des Teams nachgeführt.
- Der Jahresbeitrag steht für die Beitragsrechnung (UC-028) zur Verfügung.

### Failure Postconditions

- Bei Abbruch oder Fehler bleiben Teamdaten, Mitglieder- und Administratorenliste unverändert.
- Das System hat eine Fehler- bzw. Abbruchmeldung angezeigt.

## Business Rules

### BR-001: Berechtigung über admins-Liste

Die Verwaltungsfunktionen eines Teams stehen nur Nutzern zur Verfügung, die in der admins-Liste des Teams oder in der admins-Liste des übergeordneten Vereins eingetragen sind. Club-Admins haben damit auf alle Teams ihres Vereins dieselben Rechte wie Team-Admins.

### BR-002: Nur Teammitglieder werden Team-Admins

Als Team-Administratoren können nur Personen ernannt werden, die bereits Mitglied des Teams sind.

### BR-003: Nur Vereinsmitglieder werden Teammitglieder

In ein Team können nur Personen aufgenommen werden, die bereits Mitglied des zugehörigen Vereins sind.

### BR-004: Grenzwerte in Stunden vor Beginn

Die Grenzwerte für Training und Meisterschaft bezeichnen die Anzahl Stunden vor Beginn des Termins, bis zu der Abmeldungen möglich sind. Der Meisterschafts-Grenzwert wird nur angezeigt, wenn der Verein das Meisterschaftsmodul aktiviert hat.

### BR-005: Jahresbeitrag nur mit PRO-Modul

Der Bereich Jahresbeitrag (Wert und Währung) wird nur angezeigt, wenn der Verein das PRO-Modul (myclub PRO) aktiviert hat.

### BR-006: Durchschnittsalter aus Geburtsdaten

Das angezeigte Durchschnittsalter wird aus den Geburtsdaten der Teammitglieder berechnet; Mitglieder ohne erfasstes Geburtsdatum werden dabei ignoriert.
