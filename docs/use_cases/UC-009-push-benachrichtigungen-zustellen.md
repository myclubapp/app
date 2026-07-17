# Use Case: Push-Benachrichtigungen zustellen

## Overview

**Use Case ID:** UC-009  
**Use Case Name:** Push-Benachrichtigungen zustellen  
**Primary Actor:** System  
**Goal:** Das System registriert die Geräte der Benutzer, stellt Push-Nachrichten nach Typ (News, Vereins-News, Training, Vereins-Event, Helfer-Event) zu und führt den Benutzer beim Antippen direkt zur passenden Seite.  
**Status:** Implemented  
**Requirements:** FR-022

## Preconditions

- Der Benutzer ist angemeldet und verwendet die App auf einem Mobilgerät (Android oder iOS).
- Push-Benachrichtigungen sind in den Profileinstellungen des Benutzers aktiviert.

## Main Success Scenario

1. Der Benutzer meldet sich in der App auf einem Mobilgerät an.
2. Das System fordert die Berechtigung für Push-Benachrichtigungen an.
3. Der Benutzer erteilt die Berechtigung.
4. Das System registriert das Gerät für Push-Benachrichtigungen und speichert Gerätedaten und Zustell-Token im Benutzerprofil.
5. Im Verein oder Team tritt ein Ereignis ein (neue News, Vereins-News, Training, Vereins-Event oder Helfer-Event).
6. Das System stellt die Push-Nachricht an die registrierten Geräte des Benutzers zu, sofern die Push-Einstellungen im Profil dies erlauben, und legt zusätzlich eine In-App-Benachrichtigung mit Gelesen-Status ab.
7. Der Benutzer tippt die Benachrichtigung in der Mitteilungszentrale des Geräts an.
8. Das System öffnet die App und navigiert anhand des Benachrichtigungstyps zur passenden Seite (News, Training, Events oder Helfer) und übergibt die Inhaltsdaten.

## Alternative Flows

### A1: Push-Berechtigung verweigert

**Trigger:** Der Benutzer lehnt die Berechtigungsanfrage ab.
**Flow:**

1. Das System registriert das Gerät nicht; es werden keine Push-Nachrichten zugestellt.
2. In-App-Benachrichtigungen bleiben in der Benachrichtigungsliste verfügbar (siehe UC-007).

### A2: Empfang bei geöffneter App

**Trigger:** Eine Push-Nachricht trifft ein, während die App im Vordergrund läuft.
**Flow:**

1. Das System zeigt einen Dialog mit Titel und Text der Nachricht sowie den Optionen «Öffnen» und «Abbrechen».
2. Bestätigt der Benutzer mit «Öffnen», navigiert das System typabhängig zur passenden Seite.
3. Bricht der Benutzer ab, bleibt die aktuelle Ansicht bestehen.

### A3: Unbekannter Benachrichtigungstyp

**Trigger:** Die Nachricht enthält einen Typ ohne zugeordnete Zielseite.
**Flow:**

1. Das System zeigt die Nachricht als einfachen Hinweisdialog mit «OK» an.
2. Es erfolgt keine Navigation.

### A4: Push in den Profileinstellungen deaktiviert

**Trigger:** Der Benutzer hat Push global oder für ein einzelnes Modul deaktiviert.
**Flow:**

1. Das System stellt für die deaktivierten Bereiche keine Push-Nachrichten zu.
2. Der Benutzer kann die Zustellung im Profil jederzeit wieder aktivieren.

### A5: Registrierung schlägt fehl

**Trigger:** Die Geräteregistrierung beim Push-Dienst scheitert.
**Flow:**

1. Das System protokolliert den Fehler; das Gerät wird nicht registriert.
2. Die App bleibt ohne Push-Zustellung nutzbar.

## Postconditions

### Success Postconditions

- Das Gerät ist mit Token und Geräteinformationen im Benutzerprofil registriert.
- Die Push-Nachricht ist zugestellt und der Benutzer befindet sich nach dem Antippen auf der zum Typ passenden Seite.
- Die zugehörige In-App-Benachrichtigung ist mit Gelesen-Status verfügbar.

### Failure Postconditions

- Ohne Berechtigung oder bei fehlgeschlagener Registrierung erhält das Gerät keine Push-Nachrichten; In-App-Benachrichtigungen bleiben verfügbar.
- Bei einem Navigationsfehler bleibt die App auf der aktuellen Ansicht; die Benachrichtigung geht nicht verloren.

## Business Rules

### BR-001: Geräteregistrierung nur auf Mobilgeräten

Die Push-Registrierung erfolgt nur auf den nativen Plattformen Android und iOS und wird bei jeder Anmeldung erneut angestossen.

### BR-002: Ein Registrierungseintrag pro Gerät

Pro Gerät wird im Benutzerprofil ein Registrierungseintrag mit Kennung, Token, Modell, Betriebssystem und Plattform gespeichert; der Eintrag wird identifiziert über das Gerätemodell.

### BR-003: Navigation nach Benachrichtigungstyp

Beim Antippen einer Benachrichtigung navigiert das System typabhängig: `news` und `clubNews` zur News-Seite, `training` zur Trainingsseite, `clubEvent` zur Event-Seite, `helferEvent` zur Helfer-Seite. Die Inhaltsdaten der Nachricht werden an die Zielseite übergeben.

### BR-004: Profileinstellungen steuern die Zustellung

Im Benutzerprofil existiert ein globaler Push-Schalter sowie Modulschalter (u. a. News, Verbands-News, Training, Meisterschaft, Events, Helfer). Die Modulschalter sind nur bei aktiviertem globalem Schalter wirksam.

### BR-005: Kopplung an In-App-Benachrichtigungen

Zu Push-Nachrichten werden In-App-Benachrichtigungen mit Gelesen-Status im Benutzerprofil geführt; sind keine ungelesenen Benachrichtigungen mehr vorhanden, entfernt die App zugestellte Push-Nachrichten aus der Mitteilungszentrale des Geräts.
