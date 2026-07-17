# Use Case: Mitgliederdaten exportieren

## Overview

**Use Case ID:** UC-020
**Use Case Name:** Mitgliederdaten exportieren
**Primary Actor:** Club-Admin (Vorstand)
**Goal:** Ein Club-Admin exportiert die Mitgliederdaten seines Vereins mit konfigurierbaren Feldern als Excel-Datei, um sie ausserhalb der App weiterzuverwenden (z. B. für Verbandsmeldungen oder Serienbriefe).
**Status:** Implemented
**Requirements:** FR-049

## Preconditions

- Der Nutzer ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Der Nutzer ist in der admins-Liste des Vereins eingetragen (Club-Admin).
- Der Verein hat mindestens ein Mitglied.

## Main Success Scenario

1. Der Club-Admin öffnet in den Vereinsdetails die Mitgliederliste.
2. Das System zeigt die Mitgliederliste und für Club-Admins ein Export-Symbol in der Kopfzeile.
3. Der Club-Admin tippt auf das Export-Symbol.
4. Das System zeigt einen Dialog mit den wählbaren Exportfeldern: E-Mail, Telefon, Geburtsdatum, Adresse, Teams und Funktionen; standardmässig sind alle Felder ausser Teams aktiviert.
5. Der Club-Admin wählt die gewünschten Felder ab oder an und startet den Export.
6. Das System stellt die Daten der aktuell angezeigten (allenfalls per Suche gefilterten) Mitglieder zusammen; ID, Vorname und Nachname sind immer enthalten.
7. Bei aktivierter Option Teams ermittelt das System zusätzlich pro Mitglied die Teamzugehörigkeiten im Verein.
8. Das System erzeugt eine Excel-Datei mit dem Namen "Mitglieder_(Vereinsname)_(Datum).xlsx" und spaltenweise beschrifteten Feldern in der Sprache des Nutzers.
9. Im Web-Browser lädt das System die Datei direkt herunter; auf Mobilgeräten öffnet es den Teilen-Dialog des Geräts, über den die Datei gespeichert oder weitergegeben werden kann.
10. Das System zeigt eine Erfolgsmeldung.

## Alternative Flows

### A1: Keine Mitglieder vorhanden

**Trigger:** Die (allenfalls gefilterte) Mitgliederliste ist leer.
**Flow:**

1. Das System zeigt eine Fehlermeldung, dass keine Mitglieder vorhanden sind; es wird keine Datei erzeugt.

### A2: Export abgebrochen

**Trigger:** Der Club-Admin bricht den Feldauswahl-Dialog ab.
**Flow:**

1. Das System schliesst den Dialog; es wird kein Export erstellt.

### A3: Fehler beim Erstellen oder Bereitstellen

**Trigger:** Die Datei kann nicht erzeugt, heruntergeladen oder geteilt werden.
**Flow:**

1. Das System zeigt eine Fehlermeldung; es bleibt keine unvollständige Datei zurück.

### A4: Team-Mitglieder exportieren (Team-Admin)

**Trigger:** Ein Team-Admin oder Club-Admin tippt in der Team-Mitgliederliste auf das Export-Symbol.
**Flow:**

1. Das System zeigt denselben Feldauswahl-Dialog ohne die Option Teams.
2. Das System exportiert die Mitglieder des Teams nach demselben Ablauf als Excel-Datei.

### A5: Fehlende Berechtigung

**Trigger:** Ein Nutzer ohne Club-Admin-Rolle öffnet die Mitgliederliste.
**Flow:**

1. Das System blendet das Export-Symbol aus; ein Export ist nicht möglich.

## Postconditions

### Success Postconditions

- Eine Excel-Datei mit den gewählten Feldern der angezeigten Mitglieder ist auf dem Gerät des Club-Admins heruntergeladen bzw. über den Teilen-Dialog bereitgestellt.
- Die Daten in der App bleiben unverändert (reiner Lesevorgang).

### Failure Postconditions

- Es wurde keine Exportdatei bereitgestellt.
- Das System hat eine Fehlermeldung angezeigt; die Daten in der App bleiben unverändert.

## Business Rules

### BR-001: Export nur für Admins

Der Mitglieder-Export in der Vereins-Mitgliederliste steht nur Club-Admins zur Verfügung; der Export in der Team-Mitgliederliste zusätzlich den Team-Admins des jeweiligen Teams.

### BR-002: Pflichtfelder des Exports

ID, Vorname und Nachname sind in jedem Export enthalten; alle übrigen Felder (E-Mail, Telefon, Geburtsdatum, Adresse, Teams, Funktionen) sind einzeln zu- oder abwählbar.

### BR-003: Export folgt dem aktiven Filter

Exportiert werden genau die Mitglieder, die zum Zeitpunkt des Exports in der Liste angezeigt werden; ein aktiver Suchfilter schränkt den Export entsprechend ein.

### BR-004: Dateiformat und Benennung

Der Export wird als Excel-Datei (.xlsx) erzeugt. Der Dateiname folgt dem Muster "Mitglieder_(Vereinsname)_(JJJJ-MM-TT).xlsx"; Sonderzeichen im Vereinsnamen werden durch Unterstriche ersetzt. Das Geburtsdatum wird im Schweizer Datumsformat ausgegeben.

### BR-005: Plattformabhängige Bereitstellung

Im Web-Browser wird die Datei als Download bereitgestellt; auf iOS/Android wird sie temporär auf dem Gerät abgelegt, über den System-Teilen-Dialog angeboten und die temporäre Datei danach automatisch gelöscht.
