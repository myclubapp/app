# Use Case: News lesen

## Overview

**Use Case ID:** UC-007  
**Use Case Name:** News lesen  
**Primary Actor:** Mitglied  
**Goal:** Das Mitglied informiert sich über einen aggregierten News-Feed aller eigenen Vereine (inkl. Vereine der verknüpften Kinder) und der zugehörigen Verbände und liest einzelne Beiträge im Detail.  
**Status:** Implemented  
**Requirements:** FR-018, FR-019, FR-021, FR-023

## Preconditions

- Das Mitglied ist angemeldet und die E-Mail-Adresse ist verifiziert.
- Das Mitglied gehört mindestens einem Verein an oder hat ein verknüpftes Kind mit Vereinszugehörigkeit.

## Main Success Scenario

1. Das Mitglied öffnet den News-Bereich.
2. Das System ermittelt alle Vereine des Mitglieds sowie die Vereine der verknüpften Kinder und entfernt doppelte Vereinszugehörigkeiten.
3. Das System lädt für jeden Verein die Vereins-News sowie die Verbands-News des zum Verein passenden Verbands.
4. Das System führt alle Beiträge zu einem Feed zusammen, entfernt Duplikate, sortiert nach Datum absteigend und kennzeichnet jede News mit ihrer Quelle (Verein oder Verband).
5. Das System wendet den zuletzt gespeicherten Filter (alle/Verein/Verband) an und zeigt den gefilterten Feed an.
6. Das System zeigt im Kopfbereich das Benachrichtigungssymbol an; bei ungelesenen In-App-Benachrichtigungen ist das Symbol gefüllt.
7. Das Mitglied tippt auf einen News-Beitrag.
8. Das System öffnet die Detailansicht mit Titel, Bild, Lead-Text und vollständigem Text.
9. Das Mitglied schliesst die Detailansicht und kehrt zum Feed zurück.

## Alternative Flows

### A1: Filter ändern

**Trigger:** Das Mitglied tippt auf das Filter-Symbol.
**Flow:**

1. Das System zeigt einen Auswahldialog mit den Optionen «Alle», «Verband» und «Verein»; die aktuelle Auswahl ist vorselektiert.
2. Das Mitglied wählt eine Option und bestätigt mit «Übernehmen».
3. Das System filtert den Feed nach der gewählten Quelle und speichert die Auswahl lokal auf dem Gerät.
4. Beim nächsten Öffnen des News-Bereichs stellt das System den gespeicherten Filter wieder her.

### A2: News teilen

**Trigger:** Das Mitglied tippt im Feed oder in der Detailansicht auf «Teilen».
**Flow:**

1. Das System öffnet den Teilen-Dialog des Geräts mit Titel, Lead-Text und Link der News.
2. Steht kein System-Teilen-Dialog zur Verfügung, zeigt das System alternative Teilen-Optionen an (Facebook, WhatsApp, LinkedIn, E-Mail, Link kopieren).
3. Das Mitglied wählt einen Kanal und teilt den Beitrag.

### A3: In-App-Benachrichtigungen öffnen

**Trigger:** Das Mitglied tippt auf das Benachrichtigungssymbol.
**Flow:**

1. Das System zeigt die Liste der ungelesenen sowie der zuletzt gelesenen Benachrichtigungen, sortiert nach Datum absteigend.
2. Das Mitglied tippt auf eine Benachrichtigung.
3. Das System markiert die Benachrichtigung als gelesen und navigiert je nach Typ weiter (bei News-Benachrichtigungen öffnet es die News-Detailansicht; siehe UC-009 für die Typ-Zuordnung).
4. Alternativ markiert das Mitglied über «Alle als gelesen» sämtliche Benachrichtigungen als gelesen; das System entfernt zugestellte Push-Benachrichtigungen aus der Mitteilungszentrale des Geräts.

### A4: Spielvorschau anzeigen

**Trigger:** Das Mitglied hat die Spielvorschau in seinem Profil aktiviert.
**Flow:**

1. Das System lädt die kommenden Spiele aller Vereine des Mitglieds (inkl. Vereine der Kinder) innerhalb des konfigurierten Vorschauzeitraums.
2. Das System zeigt die Spiele oberhalb des News-Feeds als Vorschau an.
3. Das Mitglied tippt auf ein Spiel; das System öffnet die Spielvorschau mit den Spieldetails.

### A5: Keine Vereinszugehörigkeit oder keine News vorhanden

**Trigger:** Das Mitglied gehört keinem Verein an oder es liegen keine Beiträge im Anzeigezeitraum vor.
**Flow:**

1. Das System zeigt einen leeren News-Feed an.
2. Das Mitglied kann weiterhin filtern und die Benachrichtigungen öffnen.

### A6: Fehler beim Laden einzelner Quellen

**Trigger:** Eine News-Quelle (Verein oder Verband) kann nicht geladen werden.
**Flow:**

1. Das System überspringt die fehlerhafte Quelle und zeigt die Beiträge der übrigen Quellen an.
2. Der Feed bleibt bedienbar; es erscheint keine Fehlermeldung.

## Postconditions

### Success Postconditions

- Der aggregierte, nach Datum sortierte News-Feed ist gemäss gewähltem Filter sichtbar.
- Die Filterauswahl ist lokal gespeichert und wird beim nächsten Besuch wiederhergestellt.
- Geöffnete Benachrichtigungen sind als gelesen markiert.

### Failure Postconditions

- Bei Ladefehlern zeigt das System einen leeren Feed; es gehen keine Daten verloren.
- Die gespeicherte Filterauswahl bleibt unverändert.

## Business Rules

### BR-001: Aggregation über alle Vereine

Der Feed umfasst die Vereins-News aller Vereine, denen das Mitglied angehört, sowie der Vereine aller verknüpften Kinder. Doppelte Vereinszugehörigkeiten und doppelte News (gleiche ID) werden nur einmal berücksichtigt.

### BR-002: Verbands-News-Quelle richtet sich nach dem Vereinstyp

Welche Verbands-News angezeigt werden, bestimmt der Typ (Verbandszugehörigkeit) des jeweiligen Vereins (Club.type).

### BR-003: Anzeigezeitraum und Umfang

Vereins-News werden bis 60 Tage rückwirkend, Verbands-News bis 40 Tage rückwirkend geladen; pro Quelle werden höchstens 30 Beiträge berücksichtigt. Die Sortierung erfolgt nach Datum absteigend.

### BR-004: Persistierter Feed-Filter

Die Filterauswahl (alle/Verein/Verband) wird lokal auf dem Gerät gespeichert und beim nächsten Öffnen des News-Bereichs automatisch angewendet.

### BR-005: Gelesen-Status von Benachrichtigungen

In-App-Benachrichtigungen führen einen Gelesen-Status. Ungelesene Benachrichtigungen werden vollständig angezeigt, von den gelesenen die letzten 20. Sind keine ungelesenen Benachrichtigungen mehr vorhanden, entfernt das System zugestellte Push-Benachrichtigungen aus der Mitteilungszentrale des Geräts.

### BR-006: Spielvorschau ist optional und konfigurierbar

Die Spielvorschau erscheint nur, wenn sie im Benutzerprofil aktiviert ist. Der Vorschauzeitraum ist im Profil konfigurierbar (Standard: 10 Tage).
