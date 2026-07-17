# Use Case: Zugang bei inaktivem Abo sperren

## Overview

**Use Case ID:** UC-033  
**Use Case Name:** Zugang bei inaktivem Abo sperren  
**Primary Actor:** System  
**Goal:** Das System prüft beim App-Start den Abo-Status der Vereine des Benutzers und sperrt den Zugang zur App, wenn ein Verein kein aktives Abo besitzt.  
**Status:** Implemented  
**Requirements:** FR-075

## Preconditions

- Der Benutzer ist angemeldet und die E-Mail-Adresse ist verifiziert.
- Der Benutzer gehört mindestens einem Verein an.

## Main Success Scenario

1. Der Benutzer startet die App mit bestehender Anmeldung oder meldet sich neu an.
2. Das System validiert die Sitzung und lädt die Vereinsliste des Benutzers.
3. Das System prüft den Abo-Status jedes Vereins.
4. Das System erkennt einen Verein mit inaktivem Abo.
5. Das System zeigt ein Hinweis-Modal mit der Abo-Verwaltung dieses Vereins an (siehe UC-032); die übrige App bleibt dahinter verdeckt.
6. Der Benutzer schliesst das Modal, ohne ein Abo abzuschliessen.
7. Das System meldet den Benutzer ab und führt ihn zur Anmeldeseite; der Zugang ist gesperrt.

## Alternative Flows

### A1: Alle Abos aktiv

**Trigger:** Kein Verein des Benutzers hat ein inaktives Abo.
**Flow:**

1. Das System zeigt kein Hinweis-Modal an.
2. Das System gewährt den Zugang; von der Anmeldeseite kommend wird der Benutzer zur Hauptansicht weitergeleitet.

### A2: Benutzer schliesst ein Abo ab

**Trigger:** Der Benutzer (als Club-Admin) schliesst im Hinweis-Modal ein Abo ab.
**Flow:**

1. Der Benutzer durchläuft im Modal den Abo-Kauf über Stripe-Checkout (siehe UC-032).
2. Nach erfolgreicher Zahlung ist das Abo des Vereins aktiv.
3. Beim nächsten App-Start ergibt die Prüfung keinen inaktiven Verein mehr; der Zugang wird gewährt.

### A3: Keine Vereinszugehörigkeit

**Trigger:** Die Vereinsliste des Benutzers ist leer.
**Flow:**

1. Das System führt keine Abo-Prüfung durch.
2. Das System leitet den Benutzer zum Vereins-Onboarding weiter (Verein beitreten oder gründen).

### A4: Fehler beim Laden der Vereinsliste

**Trigger:** Die Vereinsliste kann beim App-Start nicht geladen werden.
**Flow:**

1. Das System protokolliert den Fehler; die Abo-Prüfung entfällt für diesen Start.
2. Der Benutzer verbleibt in der App ohne Abo-Hinweis.

## Postconditions

### Success Postconditions

- Bei inaktivem Abo ist der Zugang gesperrt: Der Benutzer ist abgemeldet oder befindet sich im Abo-Hinweis-Modal.
- Bei durchgängig aktiven Abos ist der Zugang zur App gewährt.

### Failure Postconditions

- Kann die Prüfung nicht durchgeführt werden (Ladefehler), bleibt der Zugang für diese Sitzung ungesperrt; beim nächsten App-Start wird erneut geprüft.

## Business Rules

### BR-001: Sperrung bei inaktivem Abo

Ist bei einem Verein des Benutzers das Abo inaktiv (subscriptionActive = false), wird der Zugang gesperrt: Das System zeigt das Abo-Hinweis-Modal, und ein Schliessen des Modals ohne Abo-Abschluss führt zur Abmeldung.

### BR-002: Prüfzeitpunkt

Die Prüfung erfolgt bei jedem App-Start bzw. bei jeder Anmeldung, nach erfolgreicher Sitzungsvalidierung und E-Mail-Verifizierung.

### BR-003: Ein inaktiver Verein genügt

Bereits ein einzelner Verein mit inaktivem Abo löst die Sperrung aus; das Hinweis-Modal zeigt die Abo-Verwaltung des ersten gefundenen inaktiven Vereins.

### BR-004: Direkter Weg zur Reaktivierung

Das Hinweis-Modal enthält die vollständige Abo-Verwaltung (UC-032), sodass ein Club-Admin das Abo direkt abschliessen kann, ohne die Sperre zu umgehen.

### BR-005: Sperrung gilt für alle Mitglieder

Die Prüfung unterscheidet nicht nach Rolle: Auch Mitglieder ohne Administratorenrechte werden bei inaktivem Vereins-Abo abgemeldet, wenn sie das Hinweis-Modal schliessen.
