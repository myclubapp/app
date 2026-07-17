# Use Case: Verein beitreten

## Overview

**Use Case ID:** UC-003
**Use Case Name:** Verein beitreten
**Primary Actor:** Mitglied
**Goal:** Ein Mitglied findet seinen Verein, stellt einen Beitrittsantrag mit gewünschtem Team (optional als Elternteil) und wird nach Freigabe durch einen Club-Admin Teil des Vereins.
**Status:** Implemented
**Requirements:** FR-007, FR-009, FR-010

## Preconditions

- Das Mitglied ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Das Mitglied gehört dem gewünschten Verein noch nicht an.

## Main Success Scenario

1. Das Mitglied gelangt nach der Anmeldung ohne Vereinszugehörigkeit automatisch auf die Vereinssuche (/onboarding-club).
2. Das System zeigt ein Suchfeld sowie unter "Verknüpfte Vereine" Vereinsvorschläge, deren hinterlegte Kontakt-E-Mail-Adresse mit der E-Mail-Adresse des Mitglieds übereinstimmt.
3. Das Mitglied gibt einen Suchbegriff ein.
4. Das System filtert die Vereine nach Namen und zeigt die Treffer gruppiert nach Verband bzw. Kategorie (Swiss Unihockey, Swiss Volley, Swiss Handball, Schweizerischer Turnverband, Sport, Kultur, Andere).
5. Das Mitglied wählt seinen Verein aus.
6. Das System lädt die Teams des Vereins und zeigt eine Teamauswahl (Einfachauswahl).
7. Das Mitglied wählt sein Team und bestätigt.
8. Das System zeigt den Beitrittsdialog mit der Option "Als Elternteil registrieren".
9. Das Mitglied bestätigt den Beitritt ohne Elternteil-Option.
10. Das System speichert den Beitrittsantrag mit Verein, gewünschtem Team und Elternteil-Kennzeichen.
11. Das System bestätigt: Der Antrag wurde an den Verein gesendet; nach der Genehmigung wird das Mitglied per E-Mail informiert.
12. Ein Club-Admin gibt den Antrag frei (siehe UC-019); das Mitglied erhält Zugriff auf die Vereinsdaten.

## Alternative Flows

### A1: Verein ohne Teams

**Trigger:** Der gewählte Verein hat keine Teams (Schritt 6).
**Flow:**

1. Das System überspringt die Teamauswahl.
2. Weiter bei Schritt 8; der Antrag wird ohne Wunsch-Team gespeichert.

### A2: Beitritt als Elternteil

**Trigger:** Das Mitglied aktiviert im Beitrittsdialog die Option "Als Elternteil registrieren" (Schritt 9).
**Flow:**

1. Das System verlangt eine zusätzliche Bestätigung, dass die FAQ gelesen wurden und tatsächlich ein Eltern-Konto benötigt wird.
2. Das Mitglied bestätigt.
3. Weiter bei Schritt 10; der Antrag wird mit Elternteil-Kennzeichen gespeichert.
4. Bricht das Mitglied die Bestätigung ab, zeigt das System "Aktion abgebrochen" und es wird kein Antrag gespeichert.

### A3: Abbruch der Teamauswahl oder des Beitrittsdialogs

**Trigger:** Das Mitglied bricht die Teamauswahl (Schritt 7) oder den Beitrittsdialog (Schritt 9) ab.
**Flow:**

1. Das System zeigt die Meldung "Aktion abgebrochen".
2. Das Mitglied bleibt auf der Vereinssuche; es wird kein Antrag gespeichert.

### A4: Bereits gestellte Anfrage

**Trigger:** Das Speichern des Antrags wird wegen fehlender Berechtigung abgelehnt, typischerweise weil bereits eine offene Anfrage an diesen Verein besteht (Schritt 10).
**Flow:**

1. Das System zeigt die Fehlermeldung zur Club-Anfrage mit dem Hinweis, dass möglicherweise bereits eine Anfrage gestellt wurde, und fragt, ob die bestehende Anfrage zurückgesetzt werden soll.
2. Bestätigt das Mitglied, löscht das System die bestehende Anfrage; der Beitritt kann erneut beantragt werden (zurück zu Schritt 5).
3. Lehnt das Mitglied ab, bleibt die bestehende Anfrage unverändert.

### A5: Inaktiver Verein

**Trigger:** Der gewählte Verein ist noch nicht aktiviert (Schritt 8).
**Flow:**

1. Das System zeigt den Dialog "Club aktivieren" mit dem Hinweis, dass der Verein zuerst aktiviert werden muss.
2. Das Mitglied bestätigt.
3. Das System speichert den Antrag (ohne Elternteil-Kennzeichen) und bestätigt den Versand der Aktivierungsanfrage.
4. Bei einem Fehler beim Speichern zeigt das System die Fehlermeldung zur Club-Anfrage (wie A4).

### A6: Verein nicht gefunden — neuen Verein gründen

**Trigger:** Die Suche liefert den gewünschten Verein nicht (Schritt 4).
**Flow:**

1. Das Mitglied wählt die Aktion zum Erstellen eines neuen Vereins.
2. Weiter mit UC-004 (Verein gründen).

## Postconditions

### Success Postconditions

- Ein Beitrittsantrag mit Verein, gewünschtem Team und Elternteil-Kennzeichen ist im Benutzerprofil gespeichert und für den Club-Admin sichtbar.
- Nach Freigabe durch den Club-Admin ist das Mitglied (bzw. der Elternteil) dem Verein zugeordnet und sieht dessen Daten.

### Failure Postconditions

- Bei Abbruch oder Fehler ist kein (neuer) Antrag gespeichert; das Mitglied bleibt ohne Vereinszugehörigkeit auf der Vereinssuche.
- Eine bereits bestehende offene Anfrage bleibt erhalten, sofern sie nicht ausdrücklich zurückgesetzt wurde.

## Business Rules

### BR-001: Freigabe durch Club-Admin

Der Vereinsbeitritt wird erst wirksam, wenn ein Club-Admin den Beitrittsantrag freigibt; bis dahin sieht das Mitglied keine Vereinsdaten.

### BR-002: Eine offene Anfrage pro Verein

Pro Verein kann ein Mitglied nur eine offene Beitrittsanfrage haben; eine weitere Anfrage wird abgelehnt und kann nur nach Zurücksetzen der bestehenden Anfrage neu gestellt werden.

### BR-003: Vereinsvorschlag über Kontakt-E-Mail

Vereine, bei denen die E-Mail-Adresse des Mitglieds als Kontakt hinterlegt ist, werden automatisch als "Verknüpfte Vereine" vorgeschlagen.

### BR-004: Team-Wunsch im Beitrittsantrag

Die Team-Auswahl ist Teil des Beitrittsantrags; die tatsächliche Teamzuordnung erfolgt mit der Freigabe durch den Admin.

### BR-005: Ausdrückliche Bestätigung für Eltern-Konten

Die Registrierung als Elternteil erfordert eine zusätzliche, ausdrückliche Bestätigung (Verweis auf die FAQ), um Fehlregistrierungen zu vermeiden.

### BR-006: Beitritt zu inaktiven Vereinen

Bei einem noch nicht aktivierten Verein wird der Antrag als Aktivierungsanfrage behandelt; der Verein muss zuerst aktiviert werden.
