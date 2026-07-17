# Use Case: Spiel beantworten

## Overview

**Use Case ID:** UC-022
**Use Case Name:** Spiel beantworten
**Primary Actor:** Mitglied
**Secondary Actor:** Elternteil (antwortet stellvertretend für verknüpfte Kinder)
**Goal:** Das Mitglied sagt einem Spielaufgebot zu oder ab — für sich selbst oder als Elternteil für seine Kinder —, damit der Trainer das Aufgebot planen kann.
**Status:** Implemented
**Requirements:** FR-051, FR-017

## Preconditions

- Das Mitglied ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Mindestens ein Verein des Mitglieds hat das Meisterschafts-Modul aktiviert (`hasFeatureChampionship`).
- Das Mitglied selbst oder mindestens ein verknüpftes Kind ist Mitglied des Teams, dem das Spiel zugeordnet ist.
- Das Spiel liegt in der Liste der kommenden Spiele vor.

## Main Success Scenario

1. Das Mitglied öffnet den Tab «Meisterschaft» mit der Liste der kommenden Spiele.
2. Das Mitglied tippt beim gewünschten Spiel auf das Statussymbol oder wischt den Eintrag zur Seite und wählt Zusage bzw. Absage.
3. Das System prüft, ob das Mitglied oder eines seiner Kinder dem Team des Spiels angehört.
4. Das System speichert die Antwort für die betreffende Person zum Spiel.
5. Das System bestätigt die Speicherung mit einer Erfolgsmeldung.
6. Das System aktualisiert das Statussymbol und die Anzahl der zugesagten Teilnehmer in der Liste.

## Alternative Flows

### A1: Elternteil antwortet für ein Kind

**Trigger:** Unter dem Spiel werden verknüpfte Kinder angezeigt, die Mitglied des Teams sind.
**Flow:**

1. Das Elternteil tippt beim Kind auf das Statussymbol oder wählt per Wischgeste Zusage bzw. Absage.
2. Das System speichert die Antwort für das Kind und bestätigt die Änderung.
3. Das System zeigt den aktualisierten Status des Kindes an.

### A2: Mehrere mögliche Personen

**Trigger:** Beim Antworten über das Statussymbol kommen mehrere Personen infrage (das Mitglied selbst und/oder mehrere Kinder sind Teammitglieder).
**Flow:**

1. Das System zeigt einen Auswahldialog mit allen infrage kommenden Personen.
2. Das Mitglied wählt die Person aus und bestätigt.
3. Weiter bei Schritt 4 des Hauptszenarios; bei Abbruch wird keine Antwort gespeichert.

### A3: Verspätete Absage (Schwellwert)

**Trigger:** Für das Team ist ein Meisterschafts-Schwellwert (`championshipThreshold`, in Stunden) definiert und der Spielbeginn liegt näher als dieser Schwellwert; die gewünschte Antwort ist eine Absage.
**Flow:**

1. Das System lehnt die Absage ab und speichert nichts.
2. Das System zeigt den Hinweis «Abmelden nicht möglich — Bitte melde dich direkt beim Trainerteam um dich abzumelden».
3. Eine Zusage bleibt jederzeit möglich.

### A4: Weder Mitglied noch Kinder im Team

**Trigger:** Weder das Mitglied noch eines seiner Kinder gehört dem Team des Spiels an.
**Flow:**

1. Das System speichert keine Antwort und zeigt eine Fehlermeldung, dass keine Teammitgliedschaft besteht.

### A5: Antwort in der Spieldetail-Ansicht

**Trigger:** Das Mitglied öffnet das Spiel und antwortet in der Detailansicht.
**Flow:**

1. Das System zeigt im Bereich «An-/Abmeldungen» den eigenen Status bzw. die Status der Kinder als Schaltflächen.
2. Das Mitglied tippt auf die Schaltfläche, um den Status zu wechseln (offen → Zusage, Zusage → Absage, Absage → Zusage).
3. Das System prüft den Schwellwert (siehe A3), speichert die Antwort und bestätigt sie; Team-Admins dürfen dabei auch innerhalb des Schwellwerts absagen.

### A6: Alle Spiele zusagen

**Trigger:** Das Mitglied wählt in der Spielliste die Aktion «Alle anmelden».
**Flow:**

1. Das System speichert für das Mitglied eine Zusage zu allen kommenden Spielen seiner Teams.
2. Das System bestätigt die Änderungen; schlägt die Verarbeitung fehl, zeigt es eine Fehlermeldung.

## Postconditions

### Success Postconditions

- Die Zu- oder Absage der gewählten Person ist zum Spiel gespeichert und für Team-Admins sowie andere Teammitglieder sichtbar (Antwortlisten, Teilnehmerzähler).
- Eine erneute Antwort überschreibt die bisherige.

### Failure Postconditions

- Bei verspäteter Absage, fehlender Teammitgliedschaft oder Speicherfehler bleibt der bisherige Antwortstatus unverändert; das Mitglied wurde über die Ursache informiert.

## Business Rules

### BR-001: Nur Teammitglieder antworten

Antworten können nur für Personen gespeichert werden, die Mitglied des betreffenden Teams sind — das Mitglied selbst oder seine verknüpften Kinder.

### BR-002: Absage-Schwellwert

Ist für das Team ein Meisterschafts-Schwellwert (in Stunden vor Spielbeginn) hinterlegt, sind Absagen innerhalb dieses Zeitfensters nicht mehr möglich; das Mitglied wird an das Trainerteam verwiesen. Zusagen sind vom Schwellwert nicht betroffen. Ohne hinterlegten Schwellwert gibt es keine zeitliche Einschränkung.

### BR-003: Admin-Ausnahme in der Detailansicht

Team-Admins können in der Spieldetail-Ansicht Antworten (auch Absagen) für Teammitglieder unabhängig vom Schwellwert setzen.

### BR-004: Eltern antworten stellvertretend

Elternteile sehen die Spiele der Teams ihrer verknüpften Kinder und beantworten Aufgebote stellvertretend pro Kind (FR-017).

### BR-005: Eine Antwort pro Person und Spiel

Pro Person und Spiel wird genau ein Antwortstatus (Zusage/Absage) geführt; die letzte Antwort gilt. Stellvertretend gesetzte Antworten werden mit Änderungszeitpunkt gespeichert.

### BR-006: Teilnehmerzähler

Der angezeigte Teilnehmerzähler eines Spiels zählt nur Zusagen von Personen, die aktuell Mitglied des Teams sind.
