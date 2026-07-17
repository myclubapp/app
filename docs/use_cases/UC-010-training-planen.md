# Use Case: Training planen

## Overview

**Use Case ID:** UC-010
**Use Case Name:** Training planen
**Primary Actor:** Team-Admin
**Goal:** Trainings für ein Team anlegen (einzeln oder als Serie), bei Bedarf absagen, kopieren und unentschlossene Mitglieder an die Rückmeldung erinnern.
**Status:** Implemented
**Requirements:** FR-024, FR-027, FR-028, FR-029

## Preconditions

- Der Benutzer ist angemeldet.
- Der Benutzer ist in mindestens einem Team als Team-Admin hinterlegt (nur dann ist der Erstellen-Knopf sichtbar).

## Main Success Scenario

1. Team-Admin öffnet die Trainingsübersicht.
2. Team-Admin wählt den Knopf zum Erstellen eines neuen Trainings.
3. System zeigt das Erstellformular; das erste vom Benutzer administrierte Team ist vorausgewählt.
4. Team-Admin wählt das Team und erfasst Name, Beschreibung sowie die Ortsangaben (Bezeichnung, Strasse/Nr., PLZ, Ortschaft).
5. Team-Admin legt die Serieneinstellungen fest: Wiederholung (täglich oder wöchentlich), Intervall (alle 1–4 Tage bzw. Wochen), Datum des ersten und des letzten Trainings sowie Start- und Endzeit.
6. Team-Admin wählt "Erstellen".
7. System prüft, ob alle Pflichtfelder ausgefüllt sind.
8. System verlangt eine Bestätigung für die Erstellung.
9. Team-Admin bestätigt.
10. System erzeugt ab dem ersten Datum im gewählten Intervall für jeden Termin bis einschliesslich dem letzten Datum ein Training im Teamkalender und ergänzt automatisch Teamname und Liga.
11. System benachrichtigt die Teammitglieder über das neue Training (Push-Nachricht, sofern das Mitglied Trainings-Benachrichtigungen aktiviert hat).
12. System schliesst das Formular; die neuen Trainings erscheinen in der Übersicht der kommenden Trainings.

## Alternative Flows

### A1: Einzeltraining anlegen

**Trigger:** Das Datum des letzten Trainings entspricht dem Datum des ersten Trainings.
**Flow:**

1. Team-Admin belässt beide Datumsfelder auf demselben Tag.
2. System erstellt genau einen Trainingstermin (der erste Termin einer Serie wird immer erstellt).

### A2: Pflichtfelder unvollständig

**Trigger:** Beim Erstellen fehlen Name, Ortsangaben, Team oder Zeiten.
**Flow:**

1. System zeigt die Fehlermeldung "Bitte füllen Sie alle Felder aus."
2. Das Formular bleibt mit den bisherigen Eingaben geöffnet; es wird kein Training erstellt.

### A3: Erstellung abgebrochen

**Trigger:** Team-Admin lehnt den Bestätigungsdialog ab.
**Flow:**

1. System erstellt kein Training; das Formular bleibt geöffnet.

### A4: Training absagen (FR-027)

**Trigger:** Team-Admin wählt in der Trainingsliste (Wisch-Aktion → Aktionen) oder in der Detailansicht die Aktion "Training absagen".
**Flow:**

1. System fragt nach einer Begründung (Freitext, max. 200 Zeichen).
2. Team-Admin erfasst die Begründung und bestätigt.
3. System markiert das Training als abgesagt und speichert die Begründung.
4. System zeigt das Training weiterhin in Liste und Detailansicht an, inklusive Hinweis "abgesagt" und Begründung; Zu-/Absagen sind nicht mehr möglich.
5. System benachrichtigt alle Teammitglieder, die nicht bereits abgesagt hatten (Push und/oder E-Mail gemäss persönlichen Einstellungen).

### A5: Absage ohne Begründung

**Trigger:** Team-Admin bestätigt den Absage-Dialog ohne Begründung.
**Flow:**

1. System zeigt eine Fehlermeldung, dass eine Begründung erforderlich ist.
2. Das Training bleibt unverändert (nicht abgesagt).

### A6: Training kopieren (FR-028)

**Trigger:** Team-Admin wählt bei einem bestehenden Training die Aktion "Kopieren".
**Flow:**

1. System öffnet das Erstellformular, vorbelegt mit den Angaben des gewählten Trainings (Name, Beschreibung, Ort, Team).
2. System setzt Datums- und Zeitfelder auf den aktuellen Zeitpunkt zurück; Team-Admin passt sie an.
3. Weiter wie im Hauptszenario ab Schritt 6.

### A7: Erinnerung an Unentschlossene senden (FR-029)

**Trigger:** Team-Admin wählt die Aktion "Erinnerung senden" (Liste oder Detailansicht).
**Flow:**

1. System ermittelt alle Teammitglieder, die noch nicht geantwortet haben.
2. System zeigt die Anzahl der unentschlossenen Mitglieder an und verlangt eine Bestätigung.
3. Team-Admin bestätigt.
4. System speichert den Zeitpunkt der Erinnerung am Training (lastReminderSent).
5. System sendet den unentschlossenen Mitgliedern eine Erinnerung (Push und/oder E-Mail gemäss Einstellungen), inklusive Hinweis auf die Abmeldefrist des Teams.

### A8: Alle Mitglieder haben bereits geantwortet

**Trigger:** Team-Admin wählt "Erinnerung senden", es gibt keine unentschlossenen Mitglieder.
**Flow:**

1. System zeigt die Meldung, dass alle Mitglieder bereits geantwortet haben.
2. Es wird keine Erinnerung versendet.

### A9: Training löschen

**Trigger:** Team-Admin wählt die Aktion "Löschen" und bestätigt den Dialog.
**Flow:**

1. System markiert das Training zuerst als abgesagt (mit Standardbegründung), damit die Mitglieder informiert werden.
2. System entfernt das Training anschliessend aus dem Teamkalender und bestätigt die Löschung.

### A10: Fehlende Berechtigung

**Trigger:** Ein Benutzer ohne Team-Admin-Rolle öffnet die Trainingsübersicht oder -detailansicht.
**Flow:**

1. System blendet den Erstellen-Knopf, die Admin-Wisch-Aktionen (Löschen, Kopieren, Aktionen) und die Admin-Aktionen der Detailansicht aus.
2. Der Benutzer kann Trainings nur einsehen und beantworten (siehe UC-011).

## Postconditions

### Success Postconditions

- Für jeden Termin der Serie existiert ein Training im Teamkalender mit Teamname, Liga und Status "nicht abgesagt".
- Die Teammitglieder wurden über das neue Training benachrichtigt (gemäss ihren Benachrichtigungseinstellungen).
- Bei Absage: Das Training ist als abgesagt markiert, die Begründung ist für alle sichtbar, betroffene Mitglieder wurden benachrichtigt.
- Bei Erinnerung: Der Zeitpunkt der letzten Erinnerung ist am Training gespeichert, unentschlossene Mitglieder wurden benachrichtigt.

### Failure Postconditions

- Bei unvollständigen Pflichtfeldern oder abgebrochener Bestätigung wird kein Training erstellt; die Eingaben bleiben im Formular erhalten.
- Bei fehlender Begründung wird das Training nicht abgesagt.
- Bei einem Fehler während Absage, Löschung oder Erinnerung zeigt das System eine Fehlermeldung; das Training bleibt im vorherigen Zustand.

## Business Rules

### BR-001: Berechtigung Team-Admin

Nur Team-Admins des betroffenen Teams können Trainings anlegen, bearbeiten, absagen, kopieren, löschen und Erinnerungen senden. Der Erstellen-Knopf erscheint nur, wenn der Benutzer mindestens ein Team administriert.

### BR-002: Serienlogik

Eine Serie wird durch Wiederholungsfrequenz (täglich "D" oder wöchentlich "W", repeatFrequency) und Intervallfaktor (1–4, repeatAmount) definiert. Termine werden ab dem ersten Datum in festen Abständen (Faktor × Tage bzw. Wochen) erzeugt, solange das Datum das letzte Trainingsdatum nicht überschreitet. Der erste Termin wird immer erstellt, auch wenn das Enddatum vor dem Startdatum liegt.

### BR-003: Pflichtfelder

Name, Ortsbezeichnung, Strasse/Nr., PLZ, Ortschaft, Team sowie Start- und Endzeit sind Pflichtangaben für die Erstellung.

### BR-004: Absage nur mit Begründung

Eine Absage erfordert zwingend eine Begründung (max. 200 Zeichen). Abgesagte Trainings werden nicht gelöscht, sondern bleiben mit Absagehinweis und Begründung sichtbar.

### BR-005: Benachrichtigung bei Absage

Bei einer Absage werden alle Teammitglieder benachrichtigt, die nicht bereits selbst abgesagt hatten. Der Versand (Push/E-Mail) richtet sich nach den persönlichen Benachrichtigungseinstellungen der Mitglieder.

### BR-006: Erinnerung nur an Unentschlossene

Erinnerungen gehen ausschliesslich an Teammitglieder ohne Antwort. Haben alle geantwortet, wird kein Versand angeboten. Jeder Versand aktualisiert den gespeicherten Erinnerungszeitpunkt (lastReminderSent).

### BR-007: Sichtbarkeitsfenster der Listen

Ein Training gilt bis eine Stunde nach Trainingsende als "kommend"; danach erscheint es in der Liste der vergangenen Trainings (begrenzt auf die letzten 30 Einträge).
