# Use Case: Konto registrieren und verifizieren

## Overview

**Use Case ID:** UC-001
**Use Case Name:** Konto registrieren und verifizieren
**Primary Actor:** Gast
**Goal:** Ein Gast erstellt ein myclub-Konto mit E-Mail und Passwort und verifiziert seine E-Mail-Adresse, um Zugang zu Vereinsdaten zu erhalten.
**Status:** Implemented
**Requirements:** FR-001, FR-002

## Preconditions

- Der Gast ist nicht am System angemeldet.
- Der Gast besitzt eine gültige, für ihn zugängliche E-Mail-Adresse.
- Das Gerät hat eine Netzverbindung.

## Main Success Scenario

1. Der Gast öffnet die App und wählt auf der Anmeldeseite den Link "Neues Konto erstellen".
2. Das System zeigt das Registrierungsformular mit den Feldern Vorname, Nachname, E-Mail-Adresse und Passwort.
3. Der Gast füllt alle Felder aus und sendet das Formular ab.
4. Das System validiert die Eingaben (Pflichtfelder, E-Mail-Format, Passwortlänge).
5. Das System erstellt das Benutzerkonto und legt automatisch ein Benutzerprofil mit Vorname, Nachname und E-Mail-Adresse an.
6. Das System zeigt die Bestätigung "Account erstellt" mit dem Hinweis, die E-Mail-Adresse zu bestätigen.
7. Das System meldet den Gast automatisch an.
8. Da die E-Mail-Adresse noch nicht verifiziert ist, leitet das System auf die Verifizierungsseite (/onboarding-email) um.
9. Der Gast öffnet die Verifizierungs-E-Mail in seinem Postfach und klickt den Bestätigungslink.
10. Der Gast wählt auf der Verifizierungsseite "Weiter".
11. Das System prüft den Verifizierungsstatus erneut und leitet bei bestätigter E-Mail-Adresse zur Vereinssuche (/onboarding-club) weiter (siehe UC-003).

## Alternative Flows

### A1: Ungültige oder unvollständige Formulareingaben

**Trigger:** Der Gast sendet das Formular mit fehlenden Pflichtfeldern oder ungültigem E-Mail-Format ab (Schritt 4).
**Flow:**

1. Das System zeigt die Fehlermeldung, dass das Formular ungültig ist.
2. Der Gast korrigiert die Eingaben und sendet erneut ab (zurück zu Schritt 3).

### A2: E-Mail-Adresse bereits verwendet

**Trigger:** Zur eingegebenen E-Mail-Adresse existiert bereits ein Konto (Schritt 5).
**Flow:**

1. Das System zeigt die Fehlermeldung "E-Mail wird bereits verwendet".
2. Der Gast gibt eine andere E-Mail-Adresse ein oder meldet sich mit dem bestehenden Konto an (siehe UC-002).

### A3: Sonstiger Fehler bei der Registrierung

**Trigger:** Die Kontoerstellung schlägt aus einem anderen Grund fehl (Schritt 5).
**Flow:**

1. Das System zeigt eine allgemeine Fehlermeldung mit Fehlercode und Fehlertext.
2. Der Use Case endet ohne Kontoerstellung; der Gast kann es erneut versuchen.

### A4: E-Mail noch nicht verifiziert

**Trigger:** Der Gast wählt "Weiter" auf der Verifizierungsseite, ohne den Bestätigungslink geöffnet zu haben (Schritt 10).
**Flow:**

1. Das System prüft den Verifizierungsstatus erneut.
2. Das System zeigt die Meldung "E-Mail Adresse wurde noch nicht verifiziert".
3. Der Gast bleibt auf der Verifizierungsseite (zurück zu Schritt 9).

### A5: Verifizierungs-E-Mail erneut senden

**Trigger:** Der Gast hat die Verifizierungs-E-Mail nicht erhalten und wählt "E-Mail erneut senden" (Schritt 9).
**Flow:**

1. Das System versendet die Verifizierungs-E-Mail erneut.
2. Das System zeigt die Bestätigung "E-Mail versendet".
3. Weiter bei Schritt 9.

### A6: Abmelden von der Verifizierungsseite

**Trigger:** Der Gast wählt auf der Verifizierungsseite die Abmelden-Aktion (Schritt 9–10).
**Flow:**

1. Das System meldet den Gast ab und zeigt die Abmeldeseite.
2. Der Use Case endet; das Konto bleibt unverifiziert bestehen.

## Postconditions

### Success Postconditions

- Ein Benutzerkonto mit verifizierter E-Mail-Adresse existiert.
- Ein Benutzerprofil mit Vorname, Nachname und E-Mail-Adresse ist angelegt.
- Der Benutzer ist angemeldet und befindet sich in der Vereinssuche (Onboarding, UC-003).

### Failure Postconditions

- Bei fehlgeschlagener Registrierung existiert kein neues Konto; der Gast bleibt auf dem Registrierungsformular.
- Bei nicht abgeschlossener Verifizierung existiert das Konto, der Zugriff bleibt jedoch auf die Verifizierungsseite beschränkt.

## Business Rules

### BR-001: Passwort-Mindestlänge

Das Passwort muss mindestens 6 Zeichen lang sein.

### BR-002: Pflichtangaben bei der Registrierung

Vorname, Nachname und eine E-Mail-Adresse in gültigem Format sind Pflichtangaben.

### BR-003: Eindeutigkeit der E-Mail-Adresse

Pro E-Mail-Adresse kann nur ein Konto existieren.

### BR-004: E-Mail-Verifizierung vor Datenzugriff

Die E-Mail-Adresse muss verifiziert sein, bevor Vereinsdaten sichtbar sind. Angemeldete Benutzer mit unverifizierter E-Mail-Adresse werden von allen geschützten Seiten auf die Verifizierungsseite umgeleitet.

### BR-005: Automatische Profilanlage

Bei der Registrierung wird automatisch ein Benutzerprofil mit den erfassten Stammdaten angelegt.
