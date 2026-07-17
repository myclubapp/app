# Use Case: Spielplan und Rangliste einsehen

## Overview

**Use Case ID:** UC-021
**Use Case Name:** Spielplan und Rangliste einsehen
**Primary Actor:** Mitglied
**Goal:** Das Mitglied verfolgt den Spielbetrieb seiner Teams: Es sieht kommende und vergangene Spiele, die aktuelle Rangliste pro Saison sowie Spieldetails inkl. Spielort auf einer Karte.
**Status:** Implemented
**Requirements:** FR-050, FR-054, FR-055

## Preconditions

- Das Mitglied ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Mindestens ein Verein des Mitglieds hat das Meisterschafts-Modul aktiviert (`hasFeatureChampionship`), sonst ist der Meisterschafts-Bereich nicht sichtbar.
- Das Mitglied (oder ein verknüpftes Kind) gehört mindestens einem Team an.
- Spieldaten sind vorhanden: entweder vom Verband synchronisiert (z. B. Swiss Unihockey) oder von einem Team-Admin manuell erfasst (siehe UC-023).

## Main Success Scenario

1. Das Mitglied öffnet den Tab «Meisterschaft».
2. Das System zeigt im Segment «Spiele» die kommenden Spiele aller Teams des Mitglieds und seiner verknüpften Kinder, chronologisch aufsteigend sortiert.
3. Das System zeigt pro Spiel den eigenen Antwortstatus, Spielname, Datum und Uhrzeit, Spielort, Liga und Team sowie die Anzahl zugesagter Teilnehmer.
4. Das System zeigt darunter die Liste der vergangenen Spiele (neuste zuerst) inkl. Resultat.
5. Das Mitglied wechselt zum Segment «Tabelle».
6. Das System ermittelt die aktuelle Saison und zeigt pro Team eine aufklappbare Rangliste mit Rang, Teamname und Logo, Spiele/Siege/Niederlagen, Torverhältnis und Punkten sowie eine Legende der Abkürzungen.
7. Das Mitglied wechselt zurück zum Segment «Spiele» und tippt ein Spiel an.
8. Das System öffnet die Spieldetail-Ansicht mit Heim- und Gastteam (inkl. Logos), Datum und Uhrzeit, Spielort, Liga, Resultat, Schiedsrichtern und Zuschauerzahl sowie den Antwortlisten (zugesagt, abgesagt, keine Antwort).
9. Das System zeigt den Spielort als Marker auf einer Landkarte; sofern der eigene Standort verfügbar ist, wird dieser zusätzlich markiert.
10. Das Mitglied tippt auf die Navigationsfunktion beim Spielort.
11. Das System öffnet die Karten-/Navigations-App des Geräts mit dem Spielort als Ziel.

## Alternative Flows

### A1: Meisterschafts-Modul nicht freigeschaltet

**Trigger:** Kein Verein des Mitglieds hat das Meisterschafts-Modul aktiviert.
**Flow:**

1. Das System blendet den Tab «Meisterschaft» (und den Menüeintrag) aus.
2. Der Use Case ist für das Mitglied nicht verfügbar.

### A2: Keine Spiele vorhanden

**Trigger:** Für die Teams des Mitglieds sind keine kommenden bzw. vergangenen Spiele gespeichert.
**Flow:**

1. Das System zeigt in der jeweiligen Liste den Hinweis «Keine Spiele gefunden».
2. Das Mitglied kann zum Segment «Tabelle» wechseln oder die Ansicht verlassen.

### A3: Keine Verbandsdaten für die Rangliste

**Trigger:** Für kein Team des Mitglieds liegen Ranglisten-Daten des Verbands für die aktuelle Saison vor.
**Flow:**

1. Das System filtert Teams ohne Tabellendaten aus der Anzeige.
2. Haben alle Teams keine Daten, zeigt das System den Hinweis «Keine Tabellendaten verfügbar».

### A4: Spiel ohne Koordinaten

**Trigger:** Beim Spiel sind keine geografischen Koordinaten hinterlegt (z. B. manuell erfasstes Spiel).
**Flow:**

1. Das System zeigt die Spieldetail-Ansicht ohne Karte.
2. Der Spielort wird, sofern erfasst, nur als Text angezeigt; die Navigationsfunktion wird nur bei vorhandenen Koordinaten angeboten.

### A5: Standortberechtigung verweigert

**Trigger:** Das Mitglied hat der App den Zugriff auf den Gerätestandort verweigert (native App).
**Flow:**

1. Das System zeigt einen Hinweisdialog, dass für Karte und Navigation die Standort-Berechtigung benötigt wird.
2. Das System zeigt die Karte mit dem Spielort-Marker, jedoch ohne Markierung der eigenen Position.

### A6: Vom Verband gelöschtes Spiel

**Trigger:** Ein synchronisiertes Spiel wurde vom Verband gelöscht.
**Flow:**

1. Das System zeigt das Spiel weiterhin in der Liste, markiert es aber mit dem Hinweis «Spiel gelöscht».

## Postconditions

### Success Postconditions

- Das Mitglied kennt kommende und vergangene Spiele seiner Teams, den Tabellenstand der aktuellen Saison und den Austragungsort des gewählten Spiels.
- Es wurden keine Daten verändert (rein lesender Use Case).

### Failure Postconditions

- Können Daten nicht geladen werden, zeigt das System Platzhalter (Ladeskelette) bzw. leere Listen mit Hinweistext; es wurden keine Daten verändert.

## Business Rules

### BR-001: Sichtbarkeit des Meisterschafts-Moduls

Der Tab «Meisterschaft» ist nur sichtbar, wenn mindestens ein Verein, dem das Mitglied angehört, das Meisterschafts-Modul (`hasFeatureChampionship`) aktiviert hat.

### BR-002: Umfang des Spielplans

Der Spielplan umfasst die Spiele aller Teams des Mitglieds sowie der Teams seiner verknüpften Kinder; doppelte Teams werden nur einmal berücksichtigt.

### BR-003: Übergang kommend → vergangen

Ein Spiel bleibt bis 2 Stunden nach Spielbeginn in der Liste «Kommende Spiele» sichtbar; in der Liste «Vergangene Spiele» erscheint es bereits ab Spielbeginn. Die Liste der vergangenen Spiele zeigt maximal die 30 neusten Spiele pro Team.

### BR-004: Automatische Saisonermittlung

Die angezeigte Saison wird aus dem aktuellen Datum abgeleitet: Juni bis Dezember → aktuelles Jahr, Januar bis Mai → Vorjahr (Saisonverlauf des Verbands von Sommer bis Frühjahr).

### BR-005: Rangliste nur mit Verbandsdaten

In der Tabellenansicht werden nur Teams angezeigt, für die eine Rangliste mit mindestens einem Eintrag und einem Liga-Titel aus den Verbandsdaten vorliegt.

### BR-006: Karte nur mit Koordinaten

Die Spielort-Karte wird nur angezeigt, wenn beim Spiel Längen- und Breitengrad hinterlegt sind.

### BR-007: Platzhalter-Resultat wird unterdrückt

Das Resultat «0:0(0:0)» gilt als «noch kein Resultat» und wird in Spielliste und Detailansicht nicht angezeigt.
