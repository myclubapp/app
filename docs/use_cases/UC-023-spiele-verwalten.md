# Use Case: Spiele verwalten

## Overview

**Use Case ID:** UC-023
**Use Case Name:** Spiele verwalten
**Primary Actor:** Team-Admin
**Goal:** Der Team-Admin erfasst Spiele manuell (z. B. Freundschaftsspiele oder Spiele ohne Verbandsdaten), löscht Spiele aus dem Spielplan und sichtet die Aufstellung (Lineup) eines Spiels.
**Status:** Implemented
**Requirements:** FR-052, FR-053, FR-056

## Preconditions

- Der Team-Admin ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Mindestens ein Verein des Team-Admins hat das Meisterschafts-Modul aktiviert (`hasFeatureChampionship`).
- Der Nutzer ist als Admin mindestens eines Teams eingetragen.

## Main Success Scenario

1. Der Team-Admin öffnet den Tab «Meisterschaft».
2. Das System zeigt die Schaltfläche zum Erstellen eines Spiels (nur für Team-Admins sichtbar).
3. Der Team-Admin tippt auf die Schaltfläche.
4. Das System öffnet das Erfassungsformular; als Team ist das erste vom Nutzer verwaltete Team vorausgewählt, als Zeitpunkt der aktuelle.
5. Der Team-Admin erfasst Heimteam, Gastteam, Spielort, Stadt, Datum und Uhrzeit; optional Name, Beschreibung und weitere Angaben.
6. Der Team-Admin bestätigt die Erfassung.
7. Das System prüft, ob alle Pflichtfelder ausgefüllt sind.
8. Das System fragt eine Bestätigung für das Erstellen des Spiels ab.
9. Der Team-Admin bestätigt.
10. Das System speichert das Spiel als manuell erfasstes Spiel; fehlt ein Name, wird er aus «Heimteam vs. Gastteam» gebildet.
11. Das System schliesst das Formular; das Spiel erscheint im Spielplan des Teams und kann von den Teammitgliedern beantwortet werden (UC-022).

## Alternative Flows

### A1: Pflichtfelder unvollständig

**Trigger:** Beim Bestätigen fehlt mindestens ein Pflichtfeld (Heimteam, Gastteam, Spielort, Stadt, Team, Datum oder Uhrzeit).
**Flow:**

1. Das System zeigt die Fehlermeldung «Bitte füllen Sie alle Pflichtfelder aus.».
2. Das Formular bleibt geöffnet; der Team-Admin ergänzt die Angaben und fährt bei Schritt 6 fort.

### A2: Bestätigung abgebrochen

**Trigger:** Der Team-Admin verneint die Bestätigungsabfrage oder schliesst das Formular.
**Flow:**

1. Das System speichert nichts; das Formular bleibt geöffnet bzw. wird ohne Änderung geschlossen.

### A3: Spiel löschen

**Trigger:** Der Team-Admin wischt in der Liste der kommenden Spiele einen Eintrag seines Teams zur Seite und wählt die Löschfunktion.
**Flow:**

1. Das System löscht das Spiel ohne weitere Rückfrage und zeigt eine Bestätigungsmeldung.
2. Das Spiel verschwindet aus dem Spielplan.

### A4: Aufstellung (Lineup) einsehen

**Trigger:** Der Team-Admin öffnet die Aufstellungsansicht eines Spiels.
**Flow:**

1. Das System zeigt die Aufstellungsansicht mit den Spielern, die dem Spiel zugesagt haben.
2. Hinweis (beobachteter Stand im Code): Der Einstieg aus der Spieldetail-Ansicht ist derzeit deaktiviert (auskommentiert); das Hinzufügen von Spielern zu Blöcken und das Ändern der Reihenfolge sind in der Ansicht vorbereitet, werden aber nicht gespeichert. FR-056 ist damit nur rudimentär umgesetzt.

### A5: Speichern schlägt fehl

**Trigger:** Das Spiel kann nicht gespeichert werden (z. B. fehlende Berechtigung, Verbindungsfehler).
**Flow:**

1. Das System zeigt eine Fehlermeldung mit der Ursache.
2. Das Formular bleibt geöffnet; es wurde kein Spiel angelegt.

## Postconditions

### Success Postconditions

- Das manuell erfasste Spiel ist mit Typ «manual» gespeichert und erscheint im Spielplan aller Teammitglieder; Zu-/Absagen sind möglich.
- Beim Löschen: Das Spiel ist aus dem Spielplan entfernt.

### Failure Postconditions

- Bei unvollständigen Angaben, Abbruch oder Speicherfehler ist kein Spiel angelegt bzw. gelöscht; der Spielplan ist unverändert.

## Business Rules

### BR-001: Verwaltung nur durch Team-Admins

Die Schaltfläche zum Erstellen von Spielen sehen nur Nutzer, die Admin mindestens eines Teams sind; die Löschfunktion erscheint nur bei Spielen von Teams, deren Admin der Nutzer ist.

### BR-002: Pflichtfelder für manuelle Spiele

Ein manuelles Spiel benötigt Heimteam, Gastteam, Spielort, Stadt, Team, Datum und Uhrzeit.

### BR-003: Kennzeichnung manueller Spiele

Manuell erfasste Spiele erhalten den Typ «manual» und werden so von verbandssynchronisierten Spielen unterschieden; ohne eigenen Namen wird «Heimteam vs. Gastteam» als Name gesetzt.

### BR-004: Verbandsspiele werden synchronisiert

Verbandsspiele werden vom System automatisch aus den Verbands-APIs übernommen (C-006) und nicht in der App erfasst; vom Verband gelöschte Spiele bleiben sichtbar und werden mit «Spiel gelöscht» markiert.

### BR-005: Löschfunktion nicht auf manuelle Spiele beschränkt

Die Löschfunktion steht Team-Admins in der Liste der kommenden Spiele für alle Spiele ihres Teams zur Verfügung — auch für verbandssynchronisierte (beobachtetes Verhalten; FR-053 nennt nur manuell erfasste Spiele).
