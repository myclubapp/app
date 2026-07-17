# Use Case: Beitrittsanfragen bearbeiten

## Overview

**Use Case ID:** UC-019
**Use Case Name:** Beitrittsanfragen bearbeiten
**Primary Actor:** Club-Admin (Vorstand); Team-Admin für Team-Anfragen
**Goal:** Ein Club-Admin gibt Vereins-Beitrittsanfragen (inkl. Eltern-Anfragen) frei oder lehnt sie ab und teilt freigegebene Mitglieder Teams zu; ein Team-Admin gibt Team-Beitritte frei, damit nur berechtigte Personen dem Verein bzw. Team angehören.
**Status:** Implemented
**Requirements:** FR-039, FR-045

## Preconditions

- Der Nutzer ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Der Nutzer ist in der admins-Liste des Vereins (Club-Admin) bzw. des Teams (Team-Admin) eingetragen.
- Mindestens eine offene Beitrittsanfrage liegt vor (eine Person hat den Vereinsbeitritt beantragt, optional als Elternteil und optional mit Wunschteam; siehe UC-003).

## Main Success Scenario

1. Der Club-Admin öffnet die Vereinsdetails.
2. Das System zeigt den Eintrag "Anfragen" mit der Anzahl offener Beitrittsanfragen.
3. Der Club-Admin öffnet die Anfrageliste.
4. Das System zeigt die offenen Anfragen als durchsuchbare, alphabetisch gruppierte Liste.
5. Der Club-Admin tippt auf eine Anfrage.
6. Das System zeigt die Profildaten der anfragenden Person; bei Eltern-Anfragen einen Eltern-Hinweis, bei Anfragen mit Wunschteam den Hinweis "Angefragt für" mit dem Teamnamen.
7. Der Club-Admin wählt "Anfrage freigeben" und bestätigt die Sicherheitsabfrage.
8. Das System markiert die Anfrage als freigegeben (approve = true) und vermerkt den Freigabezeitpunkt (approveDateTime); es zeigt eine Erfolgsmeldung.
9. Das System zeigt eine Teamauswahl mit den Teams, die der freigebende Admin verwalten darf; das in der Anfrage gewünschte Team ist vorausgewählt.
10. Der Club-Admin wählt ein oder mehrere Teams und bestätigt.
11. Das System gibt die Team-Beitritte für die gewählten Teams frei (approve = true).
12. Das System schliesst die Detailansicht; die Anfrage verschwindet aus der Anfrageliste und die Person wird anschliessend in der Mitgliederliste des Vereins und der gewählten Teams geführt.

## Alternative Flows

### A1: Anfrage ablehnen

**Trigger:** Der Club-Admin wählt in der Anfrage-Detailansicht "Anfrage löschen".
**Flow:**

1. Das System markiert die Anfrage als abgelehnt (approve = false) und zeigt eine Hinweis-Meldung.
2. Das System schliesst die Detailansicht; die Person wird nicht in den Verein aufgenommen.

### A2: Eltern-Anfrage freigeben

**Trigger:** Die Anfrage ist als Eltern-Anfrage gekennzeichnet (isParent) und der Club-Admin gibt sie frei.
**Flow:**

1. Das System markiert die Anfrage als freigegeben mit isParent = true und vermerkt den Freigabezeitpunkt.
2. Es erfolgt keine Teamauswahl; das System schliesst die Detailansicht.
3. Die Person wird anschliessend in der Elternliste des Vereins geführt (siehe UC-018).

### A3: Team-Beitritt direkt freigeben (Team-Admin)

**Trigger:** Der Team-Admin wählt in den Teamdetails oder in der Team-Mitgliederliste "Mitglied hinzufügen".
**Flow:**

1. Das System zeigt die Vereinsmitglieder zur Auswahl an, die noch nicht im Team sind.
2. Der Team-Admin wählt Personen aus und bestätigt.
3. Das System gibt für jede gewählte Person den Team-Beitritt frei (approve = true) und zeigt eine Erfolgsmeldung; die Personen werden anschliessend in der Team-Mitgliederliste geführt.

### A4: Keine offenen Anfragen

**Trigger:** Für den Verein liegen keine offenen Anfragen vor.
**Flow:**

1. Das System blendet den Eintrag "Anfragen" in den Vereinsdetails aus; der Use Case endet.

### A5: Freigabe schlägt fehl

**Trigger:** Die Freigabe kann nicht gespeichert werden (z. B. fehlende Berechtigung oder Verbindungsfehler).
**Flow:**

1. Das System zeigt eine Fehlermeldung.
2. Die Anfrage bleibt unverändert offen.

## Postconditions

### Success Postconditions

- Die Anfrage ist als freigegeben (approve = true, mit approveDateTime) oder abgelehnt (approve = false) markiert und erscheint nicht mehr in der Anfrageliste.
- Freigegebene Personen werden als Vereinsmitglied bzw. Elternteil geführt; bei Teamzuteilung zusätzlich als Teammitglied.
- Abgelehnte Personen erhalten keinen Zugang zu Vereins- oder Teamdaten.

### Failure Postconditions

- Die Anfrage bleibt unverändert offen; es wurde keine Mitgliedschaft eingerichtet.
- Das System hat eine Fehlermeldung angezeigt.

## Business Rules

### BR-001: Freigabestatus mit Zeitstempel

Eine Anfrage gilt als freigegeben, wenn approve = true gesetzt und der Freigabezeitpunkt (approveDateTime) vermerkt ist; eine Ablehnung wird mit approve = false vermerkt. Die App setzt nur diesen Status; die eigentliche Aufnahme in die Mitglieder-, Eltern- bzw. Teamliste erfolgt systemseitig aufgrund dieses Status.

### BR-002: Eltern-Anfragen ohne Teamzuteilung

Eltern-Anfragen (isParent = true) führen bei Freigabe zur Aufnahme in die Elternliste statt in die Mitgliederliste; eine Teamauswahl entfällt.

### BR-003: Teamauswahl nach Berechtigung

Nach der Freigabe einer Mitglieder-Anfrage werden nur Teams zur Zuteilung angeboten, die der freigebende Admin verwalten darf: als Team-Admin seine Teams, als Club-Admin alle Teams des Vereins. Das in der Anfrage gewünschte Team ist vorausgewählt.

### BR-004: Anfragen-Eintrag nur bei offenen Anfragen

Der Eintrag "Anfragen" in den Vereinsdetails wird nur angezeigt, wenn mindestens eine offene Anfrage vorliegt.

### BR-005: Einheitlicher Freigabemechanismus für Team-Beitritte

Die Freigabe eines Team-Beitritts erfolgt über denselben Mechanismus wie das direkte Hinzufügen eines Mitglieds zum Team durch einen Team-Admin (siehe UC-016).
