# Use Case: Trainingsübungen planen

## Overview

**Use Case ID:** UC-013
**Use Case Name:** Trainingsübungen planen
**Primary Actor:** Team-Admin
**Goal:** Eine Übungsbibliothek pro Team pflegen und einem Training Übungen in definierter Reihenfolge zuordnen, damit Trainings inhaltlich geplant sind.
**Status:** Implemented
**Requirements:** FR-030

## Preconditions

- Der Benutzer ist angemeldet und Team-Admin des Teams, dem das Training gehört.
- Mindestens ein Verein des Benutzers hat das kostenpflichtige Zusatzmodul aktiviert, das die Übungsfunktion freischaltet (Feature-Flag; ohne Freischaltung ist der Bereich "Übungen" nicht sichtbar).
- Das Training existiert im Teamkalender.

## Main Success Scenario

1. Team-Admin öffnet die Detailansicht eines Trainings.
2. System zeigt den Bereich "Übungen" mit der Anzahl bereits zugeordneter Übungen.
3. Team-Admin öffnet die Übungsliste des Trainings.
4. System zeigt die zugeordneten Übungen in der gespeicherten Reihenfolge.
5. Team-Admin aktiviert den Bearbeitungsmodus (nur für Team-Admins verfügbar).
6. Team-Admin öffnet die Übungsbibliothek.
7. System zeigt die Übungsvorlagen des Sportverbands (gefiltert nach der Sportart des Teams bzw. des Vereins) sowie die teameigene Übungsbibliothek; eine Suche nach Titel und Beschreibung steht zur Verfügung.
8. Team-Admin ordnet eine Übung per Wisch-Aktion dem Training zu.
9. System speichert die Zuordnung und bestätigt sie.
10. Team-Admin schliesst die Bibliothek und bringt die Übungen per Drag-and-drop in die gewünschte Reihenfolge.
11. System speichert die neue Reihenfolge.
12. Team-Admin beendet den Bearbeitungsmodus; die Übungen sind für alle Teammitglieder in dieser Reihenfolge sichtbar.

## Alternative Flows

### A1: Übung in die Team-Bibliothek aufnehmen

**Trigger:** Team-Admin wählt bei einer Verbandsvorlage die Aktion "Zur Team-Bibliothek hinzufügen".
**Flow:**

1. System speichert die Übung in der Übungsbibliothek des Teams.
2. Die Übung steht künftig für alle Trainings dieses Teams zur Auswahl.

### A2: Übung aus der Team-Bibliothek entfernen

**Trigger:** Team-Admin wählt bei einer Team-Übung die Aktion "Entfernen".
**Flow:**

1. System löscht die Übung aus der Team-Bibliothek und bestätigt dies.
2. Bereits bestehenden Trainings zugeordnete Übungen bleiben unverändert.

### A3: Übung aus dem Training entfernen

**Trigger:** Team-Admin entfernt im Bearbeitungsmodus eine zugeordnete Übung per Wisch-Aktion.
**Flow:**

1. System löscht die Zuordnung der Übung zum Training und bestätigt dies.

### A4: Übungsdetails ansehen

**Trigger:** Benutzer tippt auf eine Übung mit hinterlegtem Link.
**Flow:**

1. System öffnet die verlinkte Übungsbeschreibung im Browser.

### A5: Zusatzmodul nicht aktiviert

**Trigger:** Kein Verein des Benutzers hat das Zusatzmodul aktiviert.
**Flow:**

1. System blendet den Bereich "Übungen" in der Trainingsdetailansicht aus; die Funktion ist nicht erreichbar.

### A6: Benutzer ohne Team-Admin-Rolle

**Trigger:** Ein normales Mitglied öffnet die Übungsliste eines Trainings.
**Flow:**

1. System zeigt die zugeordneten Übungen in ihrer Reihenfolge an.
2. Bearbeitungsmodus, Zuordnen, Entfernen und Umsortieren stehen nicht zur Verfügung.

## Postconditions

### Success Postconditions

- Die gewünschten Übungen sind dem Training zugeordnet und in der festgelegten Reihenfolge gespeichert.
- Die Team-Bibliothek widerspiegelt die vom Team-Admin gepflegten Übungen.
- Alle Teammitglieder sehen die Übungen des Trainings in der definierten Reihenfolge.

### Failure Postconditions

- Bei einem Fehler beim Laden oder Speichern zeigt das System eine Fehlermeldung; Zuordnungen und Reihenfolge bleiben im vorherigen Zustand.
- Ohne aktives Zusatzmodul bleibt die Übungsplanung unzugänglich; bestehende Daten werden nicht angezeigt.

## Business Rules

### BR-001: Feature-Freischaltung

Der Bereich "Übungen" ist nur sichtbar, wenn ein Verein des Benutzers das entsprechende PRO-Zusatzmodul besitzt. Im Abo-Modell existiert dafür das Merkmal "Trainingsübungen" (hasFeatureTrainingExercise); die Anzeige in der Trainingsdetailansicht knüpft im Code an das Merkmal MyClub PRO (hasFeatureMyClubPro).

### BR-002: Pflege nur durch Team-Admins

Nur Team-Admins können Übungen zuordnen, entfernen, umsortieren und die Team-Bibliothek pflegen. Alle Teammitglieder können die zugeordneten Übungen einsehen.

### BR-003: Zusammensetzung der Übungsbibliothek

Die Auswahl besteht aus zentral gepflegten Verbandsvorlagen, gefiltert nach der Sportart (Typ) des Teams – bei Teams vom Typ "Club" nach der Sportart des Vereins – sowie der teamspezifischen Übungsbibliothek.

### BR-004: Reihenfolge pro Training

Die Reihenfolge der Übungen wird pro Training gespeichert (Positionsindex gemäss Drag-and-drop) und aufsteigend angezeigt.

### BR-005: Position neuer Übungen

Neu zugeordnete Übungen erhalten zunächst die oberste Position (0) und werden anschliessend per Drag-and-drop einsortiert.
