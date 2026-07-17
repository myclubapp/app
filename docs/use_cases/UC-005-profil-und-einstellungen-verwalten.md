# Use Case: Profil und Einstellungen verwalten

## Overview

**Use Case ID:** UC-005
**Use Case Name:** Profil und Einstellungen verwalten
**Primary Actor:** Mitglied
**Goal:** Ein Mitglied pflegt seine Stammdaten, sein Profilbild, die Sprache sowie Benachrichtigungs- und Datenschutz-Einstellungen; bei Bedarf ändert es seine E-Mail-Adresse oder löscht sein Konto.
**Status:** Implemented
**Requirements:** FR-005, FR-006, FR-011, FR-012, FR-013, FR-014, FR-015

## Preconditions

- Das Mitglied ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Das Benutzerprofil ist geladen.

## Main Success Scenario

1. Das Mitglied öffnet die Profilseite.
2. Das System zeigt das Profil mit Profilbild, Stammdaten (Vorname, Nachname, Geburtsdatum, Geschlecht, Nationalität, AHV-Nummer, Lizenznummer), Adresse, Telefonnummer, E-Mail-Adresse, Spracheinstellung sowie den Benachrichtigungs- und Datenschutz-Einstellungen.
3. Das Mitglied ändert ein Stammdatenfeld (z. B. Vorname oder Geburtsdatum).
4. Das System speichert die Änderung unmittelbar im Profil.
5. Das Mitglied wählt seine Sprache (Deutsch, Französisch, Italienisch oder Englisch).
6. Das System speichert die Sprache und stellt die Oberfläche sofort um.
7. Das Mitglied schaltet Push-Benachrichtigungen ein und konfiguriert die einzelnen Typen (News, Verbands-News, Training, Meisterschaft, Event, Helfer).
8. Das System speichert jede Einstellung und bestätigt mit "Gespeichert".
9. Das Mitglied konfiguriert die E-Mail-Benachrichtigungen (E-Mail-Versand, Helfer-Reporting).
10. Das System speichert die Einstellungen und bestätigt.
11. Das Mitglied aktiviert bei Bedarf die Datenschutz-Optionen "E-Mail verbergen" und/oder "Telefonnummer verbergen".
12. Das System speichert die Optionen; die Kontaktdaten sind für andere Mitglieder nicht mehr sichtbar.

## Alternative Flows

### A1: Profilbild ändern

**Trigger:** Das Mitglied wählt die Kamera-Aktion beim Profilbild (Schritt 2).
**Flow:**

1. Das System bietet die Aufnahme mit der Kamera oder die Auswahl aus der Galerie an.
2. Das Mitglied wählt ein Bild und schneidet es bei Bedarf zu.
3. Das System lädt das Bild hoch, setzt es als Profilbild und bestätigt die Änderung.
4. Bei Abbruch oder Fehler bleibt das bisherige Profilbild erhalten.

### A2: Adresse ändern

**Trigger:** Das Mitglied wählt den Adress-Eintrag (Schritt 3).
**Flow:**

1. Das System zeigt einen Dialog mit den Feldern Strasse, Hausnummer, Postleitzahl und Ort, vorbelegt mit den aktuellen Werten.
2. Das Mitglied passt die Angaben an und speichert.
3. Das System speichert die Adresse und bestätigt mit "Gespeichert".
4. Bei Abbruch bleiben die bisherigen Werte erhalten.

### A3: E-Mail-Adresse ändern

**Trigger:** Das Mitglied wählt den E-Mail-Eintrag (Schritt 2).
**Flow:**

1. Das System zeigt den Dialog "E-Mail Adresse ändern" mit der bisherigen und einem Feld für die neue E-Mail-Adresse.
2. Das Mitglied gibt die neue E-Mail-Adresse ein und speichert.
3. Das System speichert die neue E-Mail-Adresse im Profil und bestätigt mit "Gespeichert".

### A4: Push-Berechtigung verweigert

**Trigger:** Das Mitglied aktiviert Push auf einem Mobilgerät und lehnt die Berechtigungsanfrage des Geräts ab (Schritt 7).
**Flow:**

1. Das System speichert die Einstellung, kann das Gerät jedoch nicht für Push-Benachrichtigungen registrieren.
2. Das Gerät erhält keine Push-Benachrichtigungen.

### A5: Konto löschen

**Trigger:** Das Mitglied wählt "Profil löschen" am Ende der Profilseite.
**Flow:**

1. Das System fragt nach: "Möchtest du das Profil wirklich löschen?"
2. Das Mitglied bestätigt.
3. Das System löscht das Benutzerkonto, bestätigt die Löschung und leitet auf die Abmeldeseite weiter.
4. Bricht das Mitglied ab, bleibt das Konto unverändert.

### A6: Fehler beim Löschen des Kontos

**Trigger:** Die Kontolöschung schlägt fehl (A5, Schritt 3).
**Flow:**

1. Das System zeigt eine Fehlermeldung, dass beim Löschen ein Fehler aufgetreten ist.
2. Das Konto bleibt bestehen; das Mitglied bleibt angemeldet.

## Postconditions

### Success Postconditions

- Die geänderten Stammdaten, das Profilbild, die Sprache sowie die Benachrichtigungs- und Datenschutz-Einstellungen sind im Profil gespeichert und wirksam.
- Bei Kontolöschung (A5): Das Benutzerkonto ist gelöscht und die Sitzung beendet.

### Failure Postconditions

- Bei Abbruch eines Dialogs oder einem Speicherfehler behält das Profil die bisherigen Werte.
- Bei fehlgeschlagener Kontolöschung bleibt das Konto vollständig bestehen.

## Business Rules

### BR-001: Sofortige Speicherung

Änderungen an Profilfeldern und Einstellungen werden unmittelbar gespeichert; es gibt keinen separaten Speichern-Schritt (Ausnahme: Dialoge für Adresse und E-Mail).

### BR-002: Unterstützte Sprachen

Als Sprache stehen Deutsch, Französisch, Italienisch und Englisch zur Auswahl; ein Wechsel wirkt sofort ohne Neustart.

### BR-003: Benachrichtigungen pro Typ

Push-Benachrichtigungen sind global sowie pro Typ (News, Verbands-News, Training, Meisterschaft, Event, Helfer) einzeln schaltbar; E-Mail-Benachrichtigungen und Helfer-Reporting sind separat schaltbar.

### BR-004: Datenschutz-Optionen

Mit "E-Mail verbergen" bzw. "Telefonnummer verbergen" sind die entsprechenden Kontaktdaten für andere Mitglieder nicht sichtbar.

### BR-005: Bestätigung vor Kontolöschung

Die Kontolöschung erfordert eine ausdrückliche Bestätigung und ist endgültig.

### BR-006: Push-Registrierung nur mit Geräteberechtigung

Push-Benachrichtigungen auf iOS/Android setzen die vom Benutzer erteilte Geräteberechtigung voraus.
