# Use Case: Helferpunkte einsehen

## Overview

**Use Case ID:** UC-027  
**Use Case Name:** Helferpunkte einsehen  
**Primary Actor:** Mitglied  
**Goal:** Das eigene Helferpunkte-Konto einsehen, um den Stand der geleisteten und bestätigten Einsätze gegenüber dem Vereins-Soll zu kennen.  
**Status:** Implemented  
**Requirements:** FR-060

## Preconditions

- Das Mitglied ist in der App angemeldet.
- Das Mitglied gehört mindestens einem Verein mit freigeschaltetem Helfer-Modul an (`Club.hasFeatureHelferEvent`); der Menüpunkt "Helferpunkte" im Profil ist dadurch sichtbar.

## Main Success Scenario

1. Das Mitglied öffnet sein Profil.
2. Das Mitglied tippt auf den Menüpunkt "Helferpunkte".
3. Das System lädt alle Helferpunkte-Buchungen des Mitglieds aus allen seinen Vereinen.
4. Das System zeigt die Buchungen nach Jahr gruppiert und nach Einsatzdatum absteigend sortiert; pro Buchung werden Event-Name, gegebenenfalls Schichtname und Zeitfenster, Einsatzdatum, Punktewert sowie "Bestätigt von" (Name des bestätigenden Admins und Bestätigungsdatum) angezeigt.
5. Das Mitglied tippt auf eine Buchung.
6. Das System öffnet die Detailansicht des zugehörigen Helfer-Events.

## Alternative Flows

### A1: Buchung ohne Event-Verknüpfung

**Trigger:** Das Mitglied tippt auf eine Buchung, die keinem Helfer-Event zugeordnet ist (z. B. eine manuelle Buchung, UC-026).
**Flow:**

1. Das System zeigt den Hinweis "Diese Funktion ist leider nicht verfügbar".
2. Es wird keine Detailansicht geöffnet; das Mitglied bleibt in der Liste.

### A2: Keine Buchungen vorhanden

**Trigger:** Für das Mitglied existieren keine Helferpunkte-Buchungen.
**Flow:**

1. Das System zeigt eine leere Liste.

### A3: Bestätiger nicht ermittelbar

**Trigger:** Zu einer Buchung kann das Profil des bestätigenden Admins nicht geladen werden.
**Flow:**

1. Das System zeigt als Bestätiger "Unbekannt" an; die Buchung selbst bleibt sichtbar.

## Postconditions

### Success Postconditions

- Das Mitglied hat seinen Punktestand (Buchungen mit Punktewerten und Bestätigungen) eingesehen; es wurden keine Daten verändert.

### Failure Postconditions

- Die Buchungen konnten nicht (vollständig) angezeigt werden; es wurden keine Daten verändert.

## Business Rules

### BR-001: Nur eigene Buchungen

Das Punktekonto zeigt ausschliesslich Buchungen, die auf das angemeldete Mitglied lauten — über alle Vereine, denen das Mitglied angehört.

### BR-002: Herkunft der Buchungen

Buchungen entstehen nur durch vom Club-Admin bestätigte Schichteinsätze oder durch manuelle Buchungen eines Club-Admins (UC-026); unbestätigte Zusagen erscheinen nicht im Punktekonto.

### BR-003: Gruppierung nach Einsatzjahr

Die Buchungen werden nach dem Jahr des Einsatzdatums gruppiert und innerhalb der Gruppe absteigend nach Einsatzdatum sortiert.

### BR-004: Transparenz der Bestätigung

Jede Buchung weist den bestätigenden Club-Admin und das Bestätigungsdatum aus.
