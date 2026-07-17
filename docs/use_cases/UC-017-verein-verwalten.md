# Use Case: Verein verwalten

## Overview

**Use Case ID:** UC-017
**Use Case Name:** Verein verwalten
**Primary Actor:** Club-Admin (Vorstand)
**Goal:** Ein Club-Admin pflegt Vereinsdaten (Logo, Kontaktdaten, Schwellwerte), legt frei definierbare Vereinsfunktionen an, verwaltet die Vereinslinks (Web, Bild, PDF) mit Reihenfolge und Kartenanzeige und verschafft sich über Vereinsstatistiken einen Überblick.
**Status:** Implemented
**Requirements:** FR-041, FR-046, FR-047, FR-048

## Preconditions

- Der Nutzer ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Der Nutzer ist in der admins-Liste des Vereins eingetragen (Club-Admin).
- Der Verein existiert und der Nutzer hat die Vereinsdetails geöffnet.

## Main Success Scenario

1. Der Club-Admin öffnet die Vereinsdetails.
2. Das System zeigt Logo und Name des Vereins sowie Statistiken: Durchschnittsalter der Mitglieder, Anzahl Mitglieder, Administratoren, Eltern und Teams, allfällige offene Beitrittsanfragen, den Abo-Typ und das letzte Änderungsdatum.
3. Der Club-Admin tippt auf das Kamera-Symbol beim Vereinslogo.
4. Das System bietet die Aufnahme eines Fotos oder die Auswahl aus der Galerie an.
5. Der Club-Admin wählt ein Bild aus und bestätigt den Zuschnitt.
6. Das System speichert das Bild als Vereinslogo, aktualisiert die Anzeige und zeigt eine Erfolgsmeldung.
7. Der Club-Admin passt die Schwellwerte für Abmeldungen an (Veranstaltungen, bei aktiviertem Helfer-Modul auch Helferevents).
8. Das System speichert jede Änderung sofort.
9. Der Club-Admin bearbeitet die Kontaktdaten des Vereins (E-Mail, Website, WordPress-Adresse) direkt in der Detailansicht.
10. Das System speichert die Änderung und zeigt eine Erfolgsmeldung.
11. Der Club-Admin legt in der Mitgliederliste des Vereins eine neue Vereinsfunktion an (z. B. Kassier, Materialwart).
12. Das System ergänzt die Funktion in der Funktionsliste des Vereins; sie steht fortan zur Zuweisung an Mitglieder bereit (siehe UC-018).
13. Der Club-Admin öffnet die Vereinslinks.
14. Das System zeigt die vorhandenen Links in der definierten Reihenfolge.
15. Der Club-Admin erstellt einen neuen Link und erfasst Titel, Beschreibung und Typ (Web, Bild oder PDF) sowie je nach Typ eine URL oder eine Datei und die Option "Auf Karte anzeigen".
16. Das System verlangt eine Bestätigung.
17. Der Club-Admin bestätigt.
18. Das System speichert den Link am Ende der Liste, lädt eine allfällige Datei hoch und zeigt eine Erfolgsmeldung.
19. Der Club-Admin aktiviert den Bearbeitungsmodus der Linkliste und ordnet die Links durch Ziehen neu.
20. Das System speichert die neue Reihenfolge und zeigt eine Erfolgsmeldung.

## Alternative Flows

### A1: Fehlende Berechtigung

**Trigger:** Ein Nutzer ohne Club-Admin-Rolle öffnet die Vereinsdetails oder die Vereinslinks.
**Flow:**

1. Das System zeigt die Vereinsdetails nur lesend: kein Kamera-Symbol, keine Schwellwerte, keine editierbaren Kontaktfelder, keine Administratoren- und Elternliste, kein Abo-Bereich.
2. In der Linkliste kann der Nutzer Links öffnen, aber keine Links hinzufügen, bearbeiten, löschen oder umsortieren.

### A2: Link bearbeiten

**Trigger:** Der Club-Admin wischt bei einem Link und wählt "Bearbeiten".
**Flow:**

1. Das System zeigt die Linkdaten in einem Bearbeitungsdialog.
2. Der Club-Admin ändert die Angaben und bestätigt.
3. Das System speichert die Änderungen und aktualisiert die Liste.

### A3: Link löschen

**Trigger:** Der Club-Admin wischt bei einem Link und wählt "Löschen".
**Flow:**

1. Das System entfernt den Link samt allfällig hochgeladener Datei und zeigt eine Erfolgsmeldung.

### A4: Pflichtfelder beim Link fehlen

**Trigger:** Der Club-Admin speichert einen Link ohne Titel, Beschreibung oder Typ.
**Flow:**

1. Das System zeigt eine Fehlermeldung, dass alle erforderlichen Felder auszufüllen sind; der Link wird nicht gespeichert.

### A5: Bestätigung abgelehnt

**Trigger:** Der Club-Admin verneint die Bestätigungsfrage beim Speichern eines Links.
**Flow:**

1. Das System speichert nichts; der Dialog bleibt zur weiteren Bearbeitung geöffnet.

### A6: Leere Linkliste

**Trigger:** Für den Verein sind noch keine Links erfasst.
**Flow:**

1. Das System zeigt eine leere Liste; der Club-Admin kann über die Hinzufügen-Schaltfläche den ersten Link anlegen.

## Postconditions

### Success Postconditions

- Geänderte Vereinsdaten (Logo, Kontaktdaten, Schwellwerte) sind gespeichert und für alle Mitglieder sichtbar.
- Neu angelegte Vereinsfunktionen stehen für die Zuweisung an Mitglieder bereit.
- Die Vereinslinks sind mit Typ, Reihenfolge und Kartenanzeige-Option gespeichert; Links mit Kartenanzeige erscheinen auf der Vereinskarte in der Vereinsübersicht.

### Failure Postconditions

- Bei Abbruch oder Fehler bleiben Vereinsdaten, Funktionsliste und Linkliste unverändert.
- Das System hat eine Fehlermeldung angezeigt.

## Business Rules

### BR-001: Nur Club-Admins verwalten den Verein

Sämtliche Verwaltungsfunktionen des Vereins (Logo, Schwellwerte, Kontaktdaten, Funktionen, Links) stehen nur Nutzern zur Verfügung, die in der admins-Liste des Vereins eingetragen sind.

### BR-002: Inline-Bearbeitung nur bei vorhandenem Wert

Die Kontaktfelder E-Mail, Website und WordPress sind in den Vereinsdetails nur dann direkt editierbar, wenn das jeweilige Feld bereits einen Wert enthält; leere Felder werden nicht angezeigt.

### BR-003: Schwellwerte in Stunden vor Beginn

Die Schwellwerte bezeichnen die Anzahl Stunden vor Beginn einer Veranstaltung, bis zu der Abmeldungen möglich sind. Der Schwellwert für Helferevents wird nur bei aktiviertem Helfer-Modul angezeigt.

### BR-004: Frei definierbare Vereinsfunktionen

Vereinsfunktionen sind frei wählbare Bezeichnungen auf Vereinsebene (z. B. Kassier, Materialwart). Sie werden als Liste am Verein geführt und können mehreren Mitgliedern zugewiesen werden.

### BR-005: Pflichtangaben für Links

Ein Vereinslink benötigt Titel, Beschreibung und Typ. Beim Typ Web wird eine URL erfasst, bei den Typen Bild und PDF wird eine Datei hochgeladen.

### BR-006: Reihenfolge der Links

Neue Links werden am Ende der Liste eingereiht. Die per Ziehen festgelegte Reihenfolge bestimmt die Anzeige der Links in der gesamten App.

### BR-007: Kartenanzeige (showOnCard)

Nur Links mit aktivierter Option "Auf Karte anzeigen" (showOnCard) erscheinen zusätzlich auf der Vereinskarte in der Vereinsübersicht.

### BR-008: Durchschnittsalter aus Geburtsdaten

Das Durchschnittsalter des Vereins wird aus den Geburtsdaten der Mitglieder berechnet; Mitglieder ohne erfasstes Geburtsdatum werden ignoriert.
