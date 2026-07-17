# Use Case: Verein gründen

## Overview

**Use Case ID:** UC-004
**Use Case Name:** Verein gründen
**Primary Actor:** Mitglied
**Goal:** Ein Mitglied beantragt über einen geführten Wizard (Typ → Sportart → Details) die Aufnahme seines noch nicht erfassten Vereins in myclub.
**Status:** Implemented
**Requirements:** FR-008

## Preconditions

- Das Mitglied ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Das Mitglied befindet sich auf der Vereinssuche (/onboarding-club).
- Der gewünschte Verein ist in myclub noch nicht vorhanden.

## Main Success Scenario

1. Das Mitglied wählt auf der Vereinssuche die Aktion zum Erstellen eines neuen Vereins.
2. Das System fragt zur Sicherheit nach, ob wirklich ein neuer Verein angelegt werden soll (Hinweis: myclub unterstützt bereits über 3100 Vereine).
3. Das Mitglied bestätigt.
4. Das System zeigt den Wizard mit Schritt 1 "Vereinstyp" (Sportverein, Kulturverein, Anderes).
5. Das Mitglied wählt "Sportverein" und geht weiter.
6. Das System zeigt Schritt 2 "Sportart" (Unihockey, Volleyball, Handball, Turnen, Andere).
7. Das Mitglied wählt die Sportart und geht weiter.
8. Das System zeigt Schritt 3 "Details" mit den Feldern Vereinsname, Anzahl Teams und Anzahl Mitglieder.
9. Das Mitglied füllt die Felder aus und wählt "Fertig".
10. Das System validiert die Angaben und speichert den Gründungsantrag im Benutzerprofil.
11. Das System bestätigt, dass der Verein erstellt wurde und nach Prüfung aktiviert wird.

## Alternative Flows

### A1: Kultur- oder anderer Verein

**Trigger:** Das Mitglied wählt in Schritt 4 "Kulturverein" oder "Anderes".
**Flow:**

1. Das System überspringt den Schritt "Sportart"; die Details sind dann Schritt 2.
2. Bei Typ "Anderes" verlangt das System zusätzlich eine Freitext-Beschreibung des Vereinstyps.
3. Weiter bei Schritt 8.

### A2: Sportart "Andere"

**Trigger:** Das Mitglied wählt in Schritt 6 die Sportart "Andere".
**Flow:**

1. Das System verlangt zusätzlich eine Freitext-Angabe der Sportart.
2. Ohne diese Angabe kann der Schritt nicht abgeschlossen werden.
3. Weiter bei Schritt 8.

### A3: Unvollständige Detailangaben

**Trigger:** Pflichtangaben in Schritt 9 fehlen oder sind ungültig (kein Name, weniger als 1 Team oder weniger als 1 Mitglied).
**Flow:**

1. Das System deaktiviert die Aktion "Fertig", solange die Angaben unvollständig sind.
2. Wird der Abschluss dennoch ausgelöst, zeigt das System die Meldung "Bitte fülle alle Pflichtfelder korrekt aus."
3. Das Mitglied vervollständigt die Angaben (zurück zu Schritt 9).

### A4: Abbruch

**Trigger:** Das Mitglied verneint die Sicherheitsabfrage (Schritt 2) oder schliesst den Wizard (Schritte 4–9).
**Flow:**

1. Das System verwirft die Eingaben.
2. Das Mitglied kehrt zur Vereinssuche zurück; es wird kein Antrag gespeichert.

### A5: Fehler beim Speichern

**Trigger:** Das Speichern des Gründungsantrags schlägt fehl (Schritt 10).
**Flow:**

1. Das System zeigt die Meldung "Der Club konnte nicht erstellt werden. Bitte versuche es später erneut."
2. Das Mitglied kann den Vorgang wiederholen.

## Postconditions

### Success Postconditions

- Ein Gründungsantrag mit Vereinstyp, Sportart (falls Sportverein), Name, Anzahl Teams und Anzahl Mitgliedern ist im Benutzerprofil gespeichert.
- Der Antrag wartet auf Prüfung und Aktivierung durch den Betreiber; das Mitglied wurde entsprechend informiert.

### Failure Postconditions

- Bei Abbruch oder Fehler ist kein Gründungsantrag gespeichert; das Mitglied befindet sich wieder auf der Vereinssuche.

## Business Rules

### BR-001: Aktivierung nach Prüfung

Ein neu beantragter Verein wird erst nach Prüfung durch den Betreiber aktiviert und nutzbar.

### BR-002: Wizard-Reihenfolge

Die Erfassung folgt der Reihenfolge Vereinstyp → Sportart (nur bei Sportvereinen) → Details.

### BR-003: Pflichtangaben

Vereinsname, Anzahl Teams (mindestens 1) und Anzahl Mitglieder (mindestens 1) sind Pflichtangaben; bei Typ bzw. Sportart "Anderes/Andere" ist zusätzlich eine Freitext-Angabe erforderlich.

### BR-004: Sicherheitsabfrage vor Neuanlage

Vor dem Start des Wizards muss das Mitglied bestätigen, dass der Verein nicht bereits in myclub existiert.

### BR-005: Zuordnung zum Antragsteller

Der Gründungsantrag wird dem Benutzerprofil des Antragstellers zugeordnet.
