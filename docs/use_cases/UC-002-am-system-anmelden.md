# Use Case: Am System anmelden

## Overview

**Use Case ID:** UC-002
**Use Case Name:** Am System anmelden
**Primary Actor:** Gast
**Goal:** Ein Gast meldet sich mit E-Mail und Passwort an, um auf sein Konto und die Daten seiner Vereine zuzugreifen; bei Verlust setzt er sein Passwort per E-Mail zurück.
**Status:** Implemented
**Requirements:** FR-003, FR-004

## Preconditions

- Der Gast besitzt ein registriertes myclub-Konto (siehe UC-001).
- Der Gast ist nicht angemeldet; das System zeigt die Anmeldeseite.

## Main Success Scenario

1. Der Gast öffnet die App; das System zeigt die Anmeldeseite mit den Feldern E-Mail-Adresse und Passwort.
2. Der Gast gibt E-Mail-Adresse und Passwort ein und wählt "Anmelden".
3. Das System prüft die Anmeldedaten und meldet den Gast an.
4. Das System validiert das Sitzungstoken.
5. Das System prüft, ob die E-Mail-Adresse verifiziert ist.
6. Das System lädt die Vereinsliste des Mitglieds und prüft den Abo-Status der Vereine.
7. Das System aktiviert das Navigationsmenü und leitet zum Hauptbereich (News-Feed) weiter.

## Alternative Flows

### A1: Ungültige Anmeldedaten

**Trigger:** Die Prüfung der Anmeldedaten schlägt fehl (Schritt 3).
**Flow:**

1. Das System zeigt je nach Ursache eine spezifische Fehlermeldung:
   - "Kein Benutzer mit dieser E-Mail-Adresse gefunden"
   - "Falsches Passwort"
   - "Ungültige E-Mail-Adresse"
   - "Dieser Benutzer wurde deaktiviert"
   - "Ungültiges Login"
2. Der Gast bleibt auf der Anmeldeseite und kann die Eingaben korrigieren (zurück zu Schritt 2).

### A2: E-Mail-Adresse nicht verifiziert

**Trigger:** Die E-Mail-Adresse des Kontos ist noch nicht verifiziert (Schritt 5).
**Flow:**

1. Das System leitet auf die Verifizierungsseite (/onboarding-email) um.
2. Der Benutzer verifiziert seine E-Mail-Adresse (siehe UC-001) oder meldet sich ab.

### A3: Keine Vereinszugehörigkeit

**Trigger:** Das Mitglied gehört noch keinem Verein an (Schritt 6).
**Flow:**

1. Das System leitet auf die Vereinssuche (/onboarding-club) um.
2. Das Mitglied beantragt einen Vereinsbeitritt (siehe UC-003) oder gründet einen Verein (siehe UC-004).

### A4: Inaktives Vereins-Abo

**Trigger:** Mindestens ein Verein des Mitglieds hat ein inaktives Abo (Schritt 6).
**Flow:**

1. Das System zeigt ein Hinweisfenster zum Vereins-Abo.
2. Schliesst der Benutzer das Hinweisfenster, meldet das System ihn ab.

### A5: Passwort vergessen

**Trigger:** Der Gast wählt auf der Anmeldeseite "Passwort vergessen" (Schritt 2).
**Flow:**

1. Das System zeigt die Seite zum Zurücksetzen des Passworts mit einem E-Mail-Feld.
2. Der Gast gibt seine E-Mail-Adresse ein und sendet das Formular ab.
3. Das System validiert das E-Mail-Format; bei ungültiger Eingabe zeigt es eine Fehlermeldung und bleibt auf der Seite.
4. Das System versendet eine E-Mail mit einem Link zum Zurücksetzen des Passworts.
5. Das System zeigt den Hinweis, das E-Mail-Postfach nach dem Link zu prüfen, und leitet nach Bestätigung zur Anmeldeseite zurück.
6. Der Gast setzt das Passwort über den Link neu und meldet sich mit dem neuen Passwort an (zurück zu Schritt 2).

### A6: Fehler beim Zurücksetzen des Passworts

**Trigger:** Der Versand der Passwort-Reset-E-Mail schlägt fehl (A5, Schritt 4).
**Flow:**

1. Das System zeigt eine Fehlermeldung mit dem Fehlertext.
2. Der Gast bleibt auf der Seite zum Zurücksetzen des Passworts.

### A7: Sitzung abgelaufen

**Trigger:** Die Prüfung des Sitzungstokens schlägt fehl (Schritt 4, auch beim Fortsetzen der App aus dem Hintergrund).
**Flow:**

1. Das System zeigt den Hinweis "Sitzung abgelaufen" mit der Aufforderung, sich erneut anzumelden.
2. Das System meldet den Benutzer ab und zeigt die Anmeldeseite.

### A8: Abmelden

**Trigger:** Ein angemeldetes Mitglied wählt im Menü "Abmelden".
**Flow:**

1. Das System leert alle lokal zwischengespeicherten Daten.
2. Das System meldet das Mitglied ab und zeigt die Abmeldeseite.
3. Das Navigationsmenü ist deaktiviert; geschützte Inhalte sind nicht mehr zugänglich.

## Postconditions

### Success Postconditions

- Das Mitglied ist angemeldet, das Navigationsmenü ist aktiv und der Hauptbereich (News-Feed) wird angezeigt.
- Beim Abmelden (A8): Die Sitzung ist beendet und lokale Daten sind gelöscht.

### Failure Postconditions

- Der Gast ist nicht angemeldet und befindet sich auf der Anmeldeseite; es wurden keine Daten verändert.
- Bei unverifizierter E-Mail-Adresse besteht eine Sitzung, der Zugriff ist jedoch auf die Verifizierungsseite beschränkt.

## Business Rules

### BR-001: Zugriff nur mit Konto

Sämtliche Inhalte der App erfordern eine Anmeldung; nicht angemeldete Besucher werden auf die Anmeldeseite umgeleitet.

### BR-002: Verifizierte E-Mail als Zugangsvoraussetzung

Nur Konten mit verifizierter E-Mail-Adresse gelangen über die Anmeldung hinaus zu Vereinsdaten.

### BR-003: Token-Prüfung bei App-Start und Fortsetzen

Bei jedem App-Start und beim Fortsetzen aus dem Hintergrund wird das Sitzungstoken geprüft und erneuert; ist es ungültig, wird der Benutzer abgemeldet.

### BR-004: Zugangssperre bei inaktivem Abo

Mitglieder eines Vereins ohne aktives Abo erhalten keinen Zugang zum Hauptbereich, sondern einen Abo-Hinweis.

### BR-005: Passwort-Reset per E-Mail

Das Zurücksetzen des Passworts erfolgt ausschliesslich über einen per E-Mail versendeten Link.
