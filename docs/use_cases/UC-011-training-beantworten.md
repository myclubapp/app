# Use Case: Training beantworten

## Overview

**Use Case ID:** UC-011
**Use Case Name:** Training beantworten
**Primary Actor:** Mitglied, Elternteil
**Goal:** Einem Training zu- oder absagen – für sich selbst oder stellvertretend für verknüpfte Kinder – damit das Trainerteam die Teilnehmerzahl kennt.
**Status:** Implemented
**Requirements:** FR-025, FR-017

## Preconditions

- Der Benutzer ist angemeldet.
- Der Benutzer oder mindestens ein verknüpftes Kind ist Mitglied des Teams, dem das Training gehört.
- Das Training liegt in der Zukunft und ist nicht abgesagt.

## Main Success Scenario

1. Mitglied öffnet die Trainingsübersicht; das System zeigt die kommenden Trainings aller eigenen Teams und der Teams der verknüpften Kinder.
2. System zeigt pro Training das eigene Statussymbol (zugesagt, abgesagt oder unbeantwortet) sowie die Anzahl der Zusagen.
3. Mitglied beantwortet das Training, indem es auf das Statussymbol tippt oder per Wisch-Aktion Zu- bzw. Absage wählt.
4. System prüft, ob eine Absage gemäss Abmeldefrist des Teams noch zulässig ist.
5. System speichert die Antwort zusammen mit dem Änderungszeitpunkt.
6. System bestätigt die Speicherung und aktualisiert Statussymbol und Zusagen-Zähler.

## Alternative Flows

### A1: Antwort in der Detailansicht

**Trigger:** Mitglied öffnet ein Training und beantwortet es im Bereich "Anwesenheiten/Absenzen".
**Flow:**

1. System zeigt in der Detailansicht den eigenen Status bzw. die Status der verknüpften Kinder als farbige Schaltflächen.
2. Mitglied tippt auf die Schaltfläche, um den Status zu wechseln.
3. Weiter wie im Hauptszenario ab Schritt 4.

### A2: Elternteil antwortet für ein Kind (FR-017)

**Trigger:** Ein verknüpftes Kind ist Mitglied des Teams.
**Flow:**

1. System zeigt in Liste und Detailansicht für jedes Kind eine eigene Zeile mit Name und Statussymbol.
2. Elternteil tippt auf das Statussymbol des Kindes oder nutzt die Wisch-Aktion in der Kinderzeile.
3. System speichert die Antwort für das Kind; die Fristprüfung gilt gleichermassen.

### A3: Zu späte Absage ("zu spät"-Sperre)

**Trigger:** Das Team hat eine Abmeldefrist (trainingThreshold, in Stunden) definiert und die Absage erfolgt innerhalb dieser Frist vor Trainingsbeginn.
**Flow:**

1. System lehnt die Absage ab und zeigt den Hinweis "Abmelden nicht möglich – Bitte melde dich direkt beim Trainerteam um dich abzumelden".
2. Der bisherige Status bleibt unverändert; eine Zusage ist weiterhin möglich.
3. In der Detailansicht gilt die Sperre nicht für Team-Admins; in der Listenansicht gilt sie für alle Benutzer.

### A4: Abgesagtes Training

**Trigger:** Das Training wurde vom Team-Admin abgesagt.
**Flow:**

1. System zeigt in Liste und Detailansicht den Absagehinweis mit Begründung.
2. Die Zu-/Absage-Möglichkeiten sind ausgeblendet bzw. das Statussymbol reagiert nicht mehr.

### A5: Allen Trainings zusagen

**Trigger:** Mitglied wählt in der Trainingsübersicht die Aktion "Alle anmelden".
**Flow:**

1. System setzt für den Benutzer bei allen angezeigten kommenden Trainings den Status auf zugesagt.
2. System bestätigt die Speicherung.

### A6: Benutzer ist kein Teammitglied

**Trigger:** Der Benutzer sieht ein Training nur, weil ein Kind im Team spielt, ist selbst aber nicht Mitglied.
**Flow:**

1. System zeigt für den Benutzer selbst kein bedienbares Statussymbol; nur die Kinderzeilen sind beantwortbar.

## Postconditions

### Success Postconditions

- Die Antwort (zugesagt/abgesagt) ist für den Benutzer bzw. das Kind am Training gespeichert, inklusive Änderungszeitpunkt (changedAt).
- Statussymbol und Zusagen-Zähler zeigen den aktuellen Stand; das Trainerteam sieht die Antwort in der Anwesenheitsliste (UC-012).

### Failure Postconditions

- Bei einer zu späten Absage bleibt der bisherige Status unverändert; der Benutzer wurde auf den direkten Weg über das Trainerteam hingewiesen.
- Bei einem Speicherfehler zeigt das System eine Fehlermeldung; der bisherige Status bleibt erhalten.

## Business Rules

### BR-001: Antwortwerte

Eine Antwort ist entweder zugesagt (status = true) oder abgesagt (status = false). Ohne Antwort gilt der Status als unbeantwortet (null). Jede Antwort wird mit dem Zeitpunkt der Änderung (changedAt) gespeichert.

### BR-002: Abmeldefrist (trainingThreshold)

Die Abmeldefrist wird pro Team in Stunden vor Trainingsbeginn definiert (Team-Einstellung trainingThreshold). Ist keine Frist gesetzt (0), gibt es keine Sperre. Die Frist blockiert ausschliesslich Absagen; Zusagen sind jederzeit möglich. Team-Admins sind in der Detailansicht von der Sperre ausgenommen.

### BR-003: Stellvertretende Antwort durch Eltern

Ein Elternteil kann für jedes verknüpfte Kind antworten, sofern das Kind Mitglied des Teams ist. Die Antwort wird auf das Kind gebucht, nicht auf den Elternteil.

### BR-004: Zusagen-Zähler

Der Zähler der Teilnehmenden berücksichtigt nur Zusagen von Personen, die aktuell Mitglied des Teams sind.

### BR-005: Keine Antworten auf abgesagte Trainings

Für abgesagte Trainings sind keine Zu- oder Absagen mehr möglich; der Absagegrund wird angezeigt.
