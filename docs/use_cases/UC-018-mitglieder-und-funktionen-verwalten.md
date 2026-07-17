# Use Case: Mitglieder und Funktionen verwalten

## Overview

**Use Case ID:** UC-018
**Use Case Name:** Mitglieder und Funktionen verwalten
**Primary Actor:** Club-Admin (Vorstand)
**Goal:** Ein Club-Admin verwaltet die Mitglieder seines Vereins: Er sieht die Mitgliederliste ein, entfernt Mitglieder, weist ihnen Vereinsfunktionen zu, ernennt oder entfernt weitere Club-Admins und führt die Elternliste (Eltern entfernen oder zu Mitgliedern machen).
**Status:** Implemented
**Requirements:** FR-042, FR-043, FR-044

## Preconditions

- Der Nutzer ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Der Nutzer ist in der admins-Liste des Vereins eingetragen (Club-Admin).
- Der Verein hat Mitglieder bzw. Eltern.

## Main Success Scenario

1. Der Club-Admin öffnet in den Vereinsdetails die Mitgliederliste.
2. Das System zeigt die alphabetisch gruppierte, durchsuchbare Mitgliederliste mit zugewiesenen Funktionen und Geburtsdatum.
3. Der Club-Admin wischt bei einem Mitglied und wählt die Funktionszuweisung.
4. Das System zeigt die im Verein definierten Funktionen als Mehrfachauswahl an, bereits zugewiesene Funktionen sind vorselektiert.
5. Der Club-Admin wählt die gewünschten Funktionen und bestätigt.
6. Das System speichert die Zuweisung; die Funktionen erscheinen beim Mitglied in der Liste.
7. Der Club-Admin aktiviert den Bearbeitungsmodus und entfernt ein Mitglied.
8. Das System verlangt eine Bestätigung.
9. Der Club-Admin bestätigt das Entfernen.
10. Das System entfernt das Mitglied aus der Mitgliederliste des Vereins und zeigt eine Erfolgsmeldung.
11. Der Club-Admin öffnet die Administratorenliste des Vereins.
12. Das System zeigt die aktuellen Club-Admins an.
13. Der Club-Admin wählt "Hinzufügen".
14. Das System zeigt die Vereinsmitglieder zur Auswahl an, die noch keine Administratoren sind.
15. Der Club-Admin wählt eine oder mehrere Personen und bestätigt.
16. Das System trägt die Personen als Club-Admins ein und zeigt eine Erfolgsmeldung.
17. Der Club-Admin öffnet die Elternliste.
18. Das System zeigt die Eltern mit der Anzahl verknüpfter Kinder an.
19. Der Club-Admin wählt in der Mitgliederliste die Option, ein Elternteil als Mitglied hinzuzufügen.
20. Das System zeigt die Eltern zur Auswahl an, die noch nicht Mitglied sind.
21. Der Club-Admin wählt die Person aus und bestätigt.
22. Das System gibt die Person als Vereinsmitglied frei und zeigt eine Erfolgsmeldung; die Person erscheint anschliessend in der Mitgliederliste.

## Alternative Flows

### A1: Club-Admin entfernen

**Trigger:** Der Club-Admin aktiviert in der Administratorenliste den Bearbeitungsmodus und tippt auf das Entfernen-Symbol eines Administrators.
**Flow:**

1. Das System entfernt die Person ohne zusätzliche Rückfrage aus der Administratorenliste und zeigt eine Erfolgsmeldung.
2. Die Person bleibt weiterhin Vereinsmitglied.
3. Das System verhindert nicht das Entfernen des letzten Administrators; die Administratorenliste kann leer werden.

### A2: Elternteil entfernen

**Trigger:** Der Club-Admin aktiviert in der Elternliste den Bearbeitungsmodus und entfernt ein Elternteil.
**Flow:**

1. Das System verlangt eine Bestätigung.
2. Der Club-Admin bestätigt.
3. Das System entfernt die Person aus der Elternliste und zeigt eine Erfolgsmeldung.

### A3: Mitglied zur Elternliste hinzufügen

**Trigger:** Der Club-Admin wählt in der Elternliste "Hinzufügen".
**Flow:**

1. Das System zeigt die Vereinsmitglieder zur Auswahl an, die noch nicht als Eltern geführt werden.
2. Der Club-Admin wählt Personen aus und bestätigt.
3. Das System gibt die Personen als Eltern frei; sie erscheinen anschliessend in der Elternliste.

### A4: Fehlende Berechtigung

**Trigger:** Ein Nutzer ohne Club-Admin-Rolle öffnet die Mitgliederliste.
**Flow:**

1. Das System zeigt die Mitgliederliste nur lesend: kein Bearbeitungsmodus, keine Funktionszuweisung, kein Geburtsdatum, kein Export und keine Hinzufügen-Schaltflächen.
2. Die Administratoren- und die Elternliste sind in den Vereinsdetails nicht sichtbar.

### A5: Entfernen abgebrochen

**Trigger:** Der Club-Admin verneint die Bestätigungsfrage beim Entfernen eines Mitglieds oder Elternteils.
**Flow:**

1. Das System zeigt eine Abbruch-Meldung; die Liste bleibt unverändert.

### A6: Leere Liste oder Suche ohne Treffer

**Trigger:** Der Verein hat keine Einträge in der jeweiligen Liste oder der Suchbegriff trifft auf niemanden zu.
**Flow:**

1. Das System zeigt eine leere Liste an.

## Postconditions

### Success Postconditions

- Die Mitglieder-, Administratoren- und Elternliste des Vereins entsprechen dem gewünschten Stand.
- Zugewiesene Funktionen sind beim Mitglied gespeichert und in der Liste sichtbar.
- Zu Mitgliedern gemachte Eltern erscheinen in der Mitgliederliste.

### Failure Postconditions

- Bei Abbruch oder Fehler bleiben alle Listen und Zuweisungen unverändert.
- Das System hat eine Fehler- bzw. Abbruchmeldung angezeigt.

## Business Rules

### BR-001: Nur Club-Admins verwalten Mitglieder

Das Entfernen von Mitgliedern, die Funktionszuweisung sowie die Verwaltung der Administratoren- und Elternliste stehen nur Nutzern zur Verfügung, die in der admins-Liste des Vereins eingetragen sind.

### BR-002: Nur Mitglieder werden Club-Admins

Als Club-Administratoren können nur Personen ernannt werden, die bereits Mitglied des Vereins sind.

### BR-003: Funktionen aus der Vereins-Funktionsliste

Zuweisbar sind nur Funktionen, die zuvor auf Vereinsebene definiert wurden (siehe UC-017). Einem Mitglied können mehrere Funktionen gleichzeitig zugewiesen werden.

### BR-004: Geburtsdatum nur für Club-Admins

Das Geburtsdatum der Mitglieder wird in den Listen nur Club-Admins angezeigt.

### BR-005: Admin-Rolle und Mitgliedschaft sind getrennt

Das Entfernen aus der Administratorenliste beendet die Vereinsmitgliedschaft nicht; das Entfernen aus der Mitgliederliste entfernt nur den Eintrag in der Mitgliederliste des Vereins.

### BR-006: Eltern werden separat geführt

Eltern werden in einer eigenen Liste geführt und zählen nicht automatisch als Mitglieder. Eine Person kann gleichzeitig Elternteil und Mitglied sein.

### BR-007: Eltern werden über den Freigabemechanismus zu Mitgliedern

Macht der Club-Admin ein Elternteil zum Mitglied, erfolgt die Aufnahme über denselben Freigabemechanismus wie bei Beitrittsanfragen (approve = true, isParent = false; siehe UC-019).
