# Use Case: Anwesenheiten verwalten

## Overview

**Use Case ID:** UC-012
**Use Case Name:** Anwesenheiten verwalten
**Primary Actor:** Team-Admin
**Goal:** Die Zu- und Absagen aller Teammitglieder zu einem Training einsehen und bei Bedarf stellvertretend ändern, damit die Anwesenheitsliste stimmt.
**Status:** Implemented
**Requirements:** FR-026

## Preconditions

- Der Benutzer ist angemeldet und Team-Admin des Teams, dem das Training gehört.
- Das Training existiert im Teamkalender.

## Main Success Scenario

1. Team-Admin öffnet die Detailansicht eines Trainings.
2. System zeigt die Rubriken "Anwesend", "Abwesend" und "Keine Antwort" mit der jeweiligen Anzahl.
3. System listet in jeder Rubrik die Mitglieder alphabetisch mit Name, Team-Rollen und – bei beantworteten Einträgen – dem Zeitpunkt der letzten Statusänderung.
4. Team-Admin öffnet bei einem Mitglied die Wisch-Aktionen.
5. Team-Admin setzt den Status des Mitglieds auf zugesagt oder abgesagt.
6. System speichert den Status stellvertretend mit aktuellem Änderungszeitpunkt.
7. System bestätigt die Speicherung; das Mitglied erscheint in der entsprechenden Rubrik mit aktualisiertem Zeitstempel.

## Alternative Flows

### A1: Alle Unentschlossenen anmelden

**Trigger:** Team-Admin wählt bei der Rubrik "Keine Antwort" die Aktion "Alle anmelden".
**Flow:**

1. System verlangt eine Bestätigung ("Sollen alle angemeldet werden?").
2. Team-Admin bestätigt.
3. System setzt den Status aller Mitglieder ohne Antwort auf zugesagt und bestätigt die Speicherung.

### A2: Mitgliederprofil öffnen

**Trigger:** Team-Admin tippt in einer Rubrik auf den Namen eines Mitglieds.
**Flow:**

1. System öffnet die Profilansicht des Mitglieds.
2. Team-Admin kehrt zur Anwesenheitsliste zurück.

### A3: Statusänderung trotz Abmeldefrist

**Trigger:** Team-Admin setzt in der Detailansicht einen Status auf abgesagt, obwohl die Abmeldefrist des Teams bereits läuft.
**Flow:**

1. System lässt die Änderung zu, da Team-Admins von der Abmeldesperre ausgenommen sind.
2. System speichert den Status mit Änderungszeitpunkt.

### A4: Benutzer ohne Team-Admin-Rolle

**Trigger:** Ein normales Mitglied öffnet die Detailansicht des Trainings.
**Flow:**

1. System zeigt die Rubriken mit den Antworten aller Mitglieder (Einsicht ist nicht auf Admins beschränkt).
2. Die Wisch-Aktionen zum Ändern fremder Status und die Aktion "Alle anmelden" werden nicht angeboten.

### A5: Fehler beim Speichern

**Trigger:** Das Speichern eines Status schlägt fehl.
**Flow:**

1. System zeigt eine Fehlermeldung mit der Ursache.
2. Der bisherige Status des Mitglieds bleibt unverändert.

## Postconditions

### Success Postconditions

- Der stellvertretend gesetzte Status ist am Training gespeichert (status, changedAt) und für alle Teammitglieder in den Rubriken sichtbar.
- Die Zähler der Rubriken und der Zusagen-Zähler der Trainingsliste sind aktualisiert.

### Failure Postconditions

- Bei einem Speicherfehler bleibt der bisherige Status erhalten; der Team-Admin wurde über den Fehler informiert.

## Business Rules

### BR-001: Stellvertretende Änderung nur durch Team-Admins

Nur Team-Admins des betroffenen Teams können den Anwesenheitsstatus anderer Mitglieder setzen oder ändern. Normale Mitglieder ändern ausschliesslich den eigenen Status und den ihrer verknüpften Kinder (UC-011).

### BR-002: Keine Abmeldesperre für Admins

Statusänderungen durch Team-Admins in der Detailansicht unterliegen nicht der Abmeldefrist des Teams (trainingThreshold).

### BR-003: Nachvollziehbarkeit

Jede Statusänderung – auch eine stellvertretende – wird mit dem Zeitpunkt der Änderung (changedAt) gespeichert und in der Anwesenheitsliste angezeigt.

### BR-004: Einsicht für alle, Pflege nur für Admins

Die Anwesenheitsrubriken (Anwesend/Abwesend/Keine Antwort) sind für alle Teammitglieder einsehbar; die Änderungsfunktionen erscheinen nur für Team-Admins.

### BR-005: Sammelaktion nur für Unentschlossene

Die Aktion "Alle anmelden" wirkt ausschliesslich auf Mitglieder ohne Antwort; bereits erfasste Zu- oder Absagen werden dadurch nicht überschrieben.
