# Use Case: Event organisieren

## Overview

**Use Case ID:** UC-014
**Use Case Name:** Event organisieren
**Primary Actor:** Club-Admin
**Goal:** Vereins-Events anlegen (mit optional geschlossenem Teilnehmerkreis), bei Bedarf absagen, Erinnerungen an Unentschlossene senden und ein Event in ein Helfer-Event umwandeln.
**Status:** Implemented
**Requirements:** FR-031, FR-033, FR-034, FR-035

## Preconditions

- Der Benutzer ist angemeldet.
- Der Benutzer ist in mindestens einem Verein als Club-Admin hinterlegt (nur dann ist der Erstellen-Knopf sichtbar).

## Main Success Scenario

1. Club-Admin öffnet die Veranstaltungsübersicht.
2. Club-Admin wählt den Knopf zum Erstellen eines neuen Events.
3. System zeigt das Erstellformular; der erste vom Benutzer administrierte Verein ist vorbelegt (bei mehreren Admin-Vereinen steht eine Auswahl zur Verfügung).
4. Club-Admin erfasst Name, Beschreibung und die Ortsangaben (Bezeichnung, Strasse/Nr., PLZ, Ortschaft) sowie optional einen Web-Link und einen Umfrage-Link.
5. Club-Admin legt Start- und Endzeit sowie Start- und Enddatum fest und bestimmt, ob das Event einen geschlossenen Teilnehmerkreis hat.
6. Club-Admin wählt "Erstellen".
7. System speichert das Event im Vereinskalender.
8. System benachrichtigt die Vereinsmitglieder über die neue Veranstaltung (Push-Nachricht, sofern das Mitglied Event-Benachrichtigungen aktiviert hat).
9. System schliesst das Formular; das Event erscheint in der Übersicht der kommenden Veranstaltungen.

## Alternative Flows

### A1: Event absagen (FR-033)

**Trigger:** Club-Admin wählt in der Liste (Wisch-Aktion → Aktionen) oder in der Detailansicht die Aktion "Event absagen".
**Flow:**

1. System fragt nach einer Begründung (Freitext, max. 200 Zeichen).
2. Club-Admin erfasst die Begründung und bestätigt.
3. System markiert das Event als abgesagt und speichert die Begründung.
4. System zeigt das Event weiterhin mit Absagehinweis und Begründung an.
5. System benachrichtigt alle Vereinsmitglieder, die nicht bereits abgesagt hatten (Push und/oder E-Mail gemäss persönlichen Einstellungen).

### A2: Absage ohne Begründung

**Trigger:** Club-Admin bestätigt den Absage-Dialog ohne Begründung.
**Flow:**

1. System zeigt eine Fehlermeldung, dass eine Begründung erforderlich ist.
2. Das Event bleibt unverändert.

### A3: Erinnerung an Unentschlossene senden (FR-034)

**Trigger:** Club-Admin wählt die Aktion "Erinnerung senden".
**Flow:**

1. System ermittelt alle Vereinsmitglieder, die noch nicht geantwortet haben.
2. System zeigt deren Anzahl an und verlangt eine Bestätigung.
3. Club-Admin bestätigt.
4. System speichert den Zeitpunkt der Erinnerung am Event (lastReminderSent) und bestätigt den Versand.

### A4: Alle Mitglieder haben bereits geantwortet

**Trigger:** Club-Admin wählt "Erinnerung senden", es gibt keine unentschlossenen Mitglieder.
**Flow:**

1. System zeigt die Meldung, dass alle Mitglieder bereits geantwortet haben; es wird keine Erinnerung ausgelöst.

### A5: Event in Helfer-Event umwandeln (FR-035)

**Trigger:** Club-Admin wählt die Aktion "Helfer-Event erstellen" bei einem bestehenden Event.
**Flow:**

1. System öffnet das Erstellformular für Helfer-Events, vorbefüllt mit den Angaben des Events (Name, Beschreibung, Ort, Termine).
2. Club-Admin ergänzt die Helferschichten (Bezeichnung, Zeiten, benötigte Helfer, Punkte).
3. Club-Admin speichert.
4. System erstellt ein neues Helfer-Event im Vereinskalender; das ursprüngliche Event bleibt unverändert bestehen.

### A6: Event kopieren

**Trigger:** Club-Admin wählt die Aktion "Kopieren".
**Flow:**

1. System öffnet das Erstellformular, vorbelegt mit den Angaben des gewählten Events.
2. Club-Admin passt die Angaben an; weiter wie im Hauptszenario ab Schritt 6.

### A7: Event bearbeiten

**Trigger:** Club-Admin wählt in der Detailansicht "Bearbeiten".
**Flow:**

1. System zeigt die Eventfelder editierbar an, inklusive der Option "geschlossener Teilnehmerkreis".
2. Club-Admin ändert die gewünschten Felder und schliesst die Bearbeitung ab.
3. System speichert nur die geänderten Felder und bestätigt.

### A8: Event löschen

**Trigger:** Club-Admin wählt die Aktion "Löschen".
**Flow:**

1. System entfernt das Event aus dem Vereinskalender und bestätigt die Löschung.

### A9: Fehlende Berechtigung

**Trigger:** Ein Benutzer ohne Club-Admin-Rolle nutzt die Veranstaltungsseiten.
**Flow:**

1. System blendet Erstellen-Knopf, Admin-Wisch-Aktionen und Admin-Aktionen der Detailansicht aus.
2. Der Benutzer kann Events nur einsehen und beantworten (siehe UC-015).

## Postconditions

### Success Postconditions

- Das Event ist im Vereinskalender gespeichert und für die Vereinsmitglieder sichtbar; die Mitglieder wurden benachrichtigt.
- Bei Absage: Das Event ist als abgesagt markiert, die Begründung ist sichtbar, betroffene Mitglieder wurden benachrichtigt.
- Bei Erinnerung: Der Zeitpunkt der letzten Erinnerung ist am Event gespeichert.
- Bei Umwandlung: Ein separates Helfer-Event mit den übernommenen Eventdaten und den erfassten Schichten existiert; das ursprüngliche Event ist unverändert.

### Failure Postconditions

- Bei einem Fehler beim Erstellen zeigt das System eine Fehlermeldung; es wird kein Event angelegt und das Formular bleibt geöffnet.
- Bei fehlender Begründung wird das Event nicht abgesagt.
- Bei einem Fehler während Absage, Erinnerung oder Bearbeitung bleibt das Event im vorherigen Zustand; der Club-Admin wurde informiert.

## Business Rules

### BR-001: Berechtigung Club-Admin

Nur Club-Admins des betroffenen Vereins können Events anlegen, bearbeiten, absagen, kopieren, löschen, Erinnerungen senden und Events in Helfer-Events umwandeln.

### BR-002: Geschlossener Teilnehmerkreis (closedEvent)

Bei einem geschlossenen Event sind für Mitglieder keine Zu-/Absagen möglich; Teilnehmerzähler und Teilnehmerlisten (Anwesend/Abwesend/Keine Antwort) werden nicht angezeigt. Die Option kann in der Detailansicht im Bearbeitungsmodus geändert werden.

### BR-003: Teilnehmerbedarf (countNeeded)

Der Teilnehmerbedarf ist im Datenmodell jedes Events vorgesehen (Standardwert 0). Für Vereins-Events bietet das Erstellformular derzeit kein Eingabefeld; eine Bedarfssteuerung mit Soll-/Ist-Anzeige erfolgt bei Helfer-Events pro Schicht (UC-024).

### BR-004: Absage nur mit Begründung

Eine Absage erfordert zwingend eine Begründung (max. 200 Zeichen). Abgesagte Events bleiben mit Absagehinweis und Begründung sichtbar.

### BR-005: Benachrichtigung bei Absage

Bei einer Absage werden alle Vereinsmitglieder benachrichtigt, die nicht bereits selbst abgesagt hatten (Push/E-Mail gemäss persönlichen Einstellungen).

### BR-006: Erinnerung nur an Unentschlossene

Erinnerungen richten sich ausschliesslich an Vereinsmitglieder ohne Antwort. Haben alle geantwortet, wird kein Versand angeboten. Jeder Versand aktualisiert den gespeicherten Erinnerungszeitpunkt (lastReminderSent).

### BR-007: Umwandlung ist eine Kopie

Die Umwandlung in ein Helfer-Event erzeugt ein neues, separates Helfer-Event mit übernommenen Stammdaten; das ursprüngliche Event wird dabei weder verändert noch gelöscht.

### BR-008: Sichtbarkeitsfenster der Listen

Ein Event gilt bis zwei Stunden nach seinem Beginn als "kommend"; danach erscheint es in der Liste der vergangenen Veranstaltungen (begrenzt auf die letzten 30 Einträge).
