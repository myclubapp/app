# Use Case: Event beantworten

## Overview

**Use Case ID:** UC-015
**Use Case Name:** Event beantworten
**Primary Actor:** Mitglied, Elternteil
**Goal:** Einem Vereins-Event zu- oder absagen – für sich selbst oder stellvertretend für verknüpfte Kinder – damit der Organisator planen kann.
**Status:** Implemented
**Requirements:** FR-032, FR-017

## Preconditions

- Der Benutzer ist angemeldet.
- Der Benutzer oder mindestens ein verknüpftes Kind ist Mitglied des Vereins, der das Event organisiert.
- Das Event liegt in der Zukunft, ist nicht abgesagt und hat keinen geschlossenen Teilnehmerkreis.

## Main Success Scenario

1. Mitglied öffnet die Veranstaltungsübersicht; das System zeigt die kommenden Events aller eigenen Vereine und der Vereine der verknüpften Kinder.
2. System zeigt pro Event das Statussymbol (zugesagt, abgesagt oder unbeantwortet) sowie die Anzahl der Zusagen.
3. Mitglied tippt auf das Statussymbol des Events.
4. System prüft, wer antworten kann (der Benutzer selbst und/oder verknüpfte Kinder, die Vereinsmitglieder sind); bei genau einer Person übernimmt das System diese direkt.
5. System prüft, ob eine Absage gemäss Abmeldefrist des Vereins noch zulässig ist.
6. System speichert die Antwort zusammen mit dem Änderungszeitpunkt.
7. System bestätigt die Speicherung und aktualisiert Statussymbol und Zusagen-Zähler.

## Alternative Flows

### A1: Mehrere mögliche Personen

**Trigger:** Sowohl der Benutzer als auch mindestens ein Kind sind Vereinsmitglieder und die Antwort erfolgt über das Statussymbol.
**Flow:**

1. System zeigt einen Auswahldialog mit allen antwortberechtigten Personen ("Ich" und die Kinder).
2. Mitglied wählt die Person und bestätigt.
3. Weiter wie im Hauptszenario ab Schritt 5.

### A2: Antwort per Wisch-Aktion

**Trigger:** Mitglied wählt in der Liste per Wisch-Aktion Zu- oder Absage.
**Flow:**

1. System speichert die Antwort direkt für den Benutzer selbst.
2. Weiter wie im Hauptszenario ab Schritt 5.

### A3: Elternteil antwortet für ein Kind (FR-017)

**Trigger:** Ein verknüpftes Kind ist Vereinsmitglied.
**Flow:**

1. System zeigt in Liste und Detailansicht für jedes Kind eine eigene Zeile mit Name und Statussymbol.
2. Elternteil tippt auf das Statussymbol des Kindes oder nutzt die Wisch-Aktion in der Kinderzeile.
3. System speichert die Antwort für das Kind; die Fristprüfung gilt gleichermassen.

### A4: Antwort in der Detailansicht

**Trigger:** Mitglied öffnet das Event und beantwortet es im Bereich "Anwesenheiten/Absenzen".
**Flow:**

1. System zeigt den eigenen Status bzw. die Status der verknüpften Kinder als farbige Schaltflächen.
2. Mitglied tippt auf die Schaltfläche, um den Status zu wechseln.
3. Weiter wie im Hauptszenario ab Schritt 5.

### A5: Zu späte Absage

**Trigger:** Der Verein hat eine Abmeldefrist (eventThreshold, in Stunden) definiert und die Absage erfolgt innerhalb dieser Frist vor Eventbeginn.
**Flow:**

1. System lehnt die Absage ab und zeigt einen Hinweis, dass das Abmelden nicht mehr möglich ist und die Abmeldung direkt beim Organisationsteam erfolgen muss.
2. Der bisherige Status bleibt unverändert; eine Zusage ist weiterhin möglich.
3. In der Detailansicht gilt die Sperre nicht für Club-Admins.

### A6: Geschlossenes Event

**Trigger:** Das Event hat einen geschlossenen Teilnehmerkreis (closedEvent).
**Flow:**

1. System zeigt das Event ohne Zu-/Absage-Möglichkeit; das Statussymbol reagiert nicht, Wisch-Aktionen und Teilnehmerlisten entfallen.

### A7: Abgesagtes Event

**Trigger:** Das Event wurde vom Club-Admin abgesagt.
**Flow:**

1. System zeigt den Absagehinweis mit Begründung in Liste und Detailansicht.
2. Das Statussymbol reagiert nicht mehr auf Eingaben.

### A8: Allen Events zusagen

**Trigger:** Mitglied wählt in der Veranstaltungsübersicht die Aktion "Alle anmelden".
**Flow:**

1. System setzt für den Benutzer bei allen angezeigten kommenden Events den Status auf zugesagt.
2. System bestätigt die Speicherung.

### A9: Keine antwortberechtigte Person

**Trigger:** Weder der Benutzer noch ein Kind ist Mitglied des Vereins.
**Flow:**

1. System zeigt eine Fehlermeldung, dass keine Vereinsmitgliedschaft besteht; es wird keine Antwort gespeichert.

## Postconditions

### Success Postconditions

- Die Antwort (zugesagt/abgesagt) ist für die gewählte Person am Event gespeichert, inklusive Änderungszeitpunkt (changedAt).
- Statussymbol und Zusagen-Zähler zeigen den aktuellen Stand; der Organisator sieht die Antwort in den Teilnehmerlisten.

### Failure Postconditions

- Bei einer zu späten Absage bleibt der bisherige Status unverändert; der Benutzer wurde auf den direkten Weg über den Organisator hingewiesen.
- Bei fehlender Vereinsmitgliedschaft oder einem Speicherfehler wird keine Antwort gespeichert; das System zeigt eine Fehlermeldung.

## Business Rules

### BR-001: Antwortwerte

Eine Antwort ist entweder zugesagt (status = true) oder abgesagt (status = false). Ohne Antwort gilt der Status als unbeantwortet (null). Jede Antwort wird mit dem Zeitpunkt der Änderung (changedAt) gespeichert.

### BR-002: Abmeldefrist (eventThreshold)

Die Abmeldefrist wird pro Verein in Stunden vor Eventbeginn definiert (Vereins-Einstellung eventThreshold). Ist keine Frist gesetzt (0), gibt es keine Sperre. Die Frist blockiert ausschliesslich Absagen; Zusagen sind jederzeit möglich. Club-Admins sind in der Detailansicht von der Sperre ausgenommen.

### BR-003: Stellvertretende Antwort durch Eltern

Ein Elternteil kann für jedes verknüpfte Kind antworten, sofern das Kind Mitglied des Vereins ist. Sind mehrere Personen antwortberechtigt, verlangt das System eine eindeutige Auswahl, für wen die Antwort gilt.

### BR-004: Geschlossene Events

Bei Events mit geschlossenem Teilnehmerkreis sind keine Zu-/Absagen möglich; Teilnehmerzähler und Teilnehmerlisten werden nicht angezeigt.

### BR-005: Zusagen-Zähler

Der Teilnehmerzähler eines offenen Events zählt die Zusagen (status = true) der erfassten Antworten.

### BR-006: Keine Antworten auf abgesagte Events

Für abgesagte Events sind über das Statussymbol keine Antworten mehr möglich; der Absagegrund wird angezeigt.
