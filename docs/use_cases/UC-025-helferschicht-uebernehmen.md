# Use Case: Helferschicht übernehmen

## Overview

**Use Case ID:** UC-025  
**Use Case Name:** Helferschicht übernehmen  
**Primary Actor:** Mitglied, Elternteil  
**Goal:** Sich selbst oder ein eigenes Kind für eine Helferschicht an- oder abmelden, damit der Personalbedarf des Helfer-Events gedeckt wird.  
**Status:** Implemented  
**Requirements:** FR-058, FR-017

## Preconditions

- Das Mitglied ist in der App angemeldet.
- Das Mitglied oder mindestens eines seiner Kinder ist Mitglied in einem Verein mit freigeschaltetem Helfer-Modul (`Club.hasFeatureHelferEvent`).
- Es existiert ein Helfer-Event mit mindestens einer Schicht (UC-024).

## Main Success Scenario

1. Das Mitglied öffnet den Bereich "Helfer".
2. Das System zeigt die kommenden Helfer-Events der eigenen Vereine und der Vereine der Kinder, jeweils mit dem Anmeldestand (Anmeldungen/Bedarf) über alle Schichten.
3. Das Mitglied öffnet ein Helfer-Event.
4. Das System zeigt die Schichten sortiert nach Beginnzeit mit Beschreibung, Zeitfenster, Punktewert und Anmeldestand.
5. Das Mitglied sagt für eine Schicht zu.
6. Das System prüft, ob die Schicht noch freie Plätze hat.
7. Das System ermittelt, welche Personen angemeldet werden können (das Mitglied selbst und dessen Kinder, sofern sie Vereinsmitglieder sind); bei genau einer möglichen Person wird diese direkt angemeldet.
8. Das System speichert die Zusage mit Zeitstempel und zeigt eine Erfolgsmeldung.
9. Das System aktualisiert den Anmeldestand der Schicht.

## Alternative Flows

### A1: Elternteil wählt Person aus (Anmeldung für Kinder)

**Trigger:** Bei Schritt 7 kommen mehrere Personen infrage (das Mitglied selbst und/oder mehrere Kinder).
**Flow:**

1. Das System zeigt einen Auswahldialog mit "Ich" und den Namen der Kinder.
2. Der Elternteil wählt die Person aus und bestätigt.
3. Der Ablauf wird bei Schritt 8 mit der gewählten Person fortgesetzt.

### A2: Schicht ist bereits voll

**Trigger:** Bei Schritt 6 sind bereits so viele Zusagen vorhanden wie Helfer benötigt werden.
**Flow:**

1. Das System zeigt den Hinweis, dass die Schicht bereits genügend Helfer hat.
2. Die Anmeldung wird nicht gespeichert; der Ablauf endet.

### A3: Abmeldung von einer Schicht

**Trigger:** Das Mitglied sagt für eine Schicht ab (für sich oder ein Kind).
**Flow:**

1. Das System prüft, ob der Schichtbeginn noch weiter entfernt ist als die Abmeldefrist des Vereins.
2. Das System speichert die Absage mit Zeitstempel und aktualisiert den Anmeldestand.

### A4: Abmeldung zu kurzfristig

**Trigger:** Bei einer Absage liegt der Schichtbeginn innerhalb der Abmeldefrist des Vereins (`helferThreshold` Stunden vor Beginn).
**Flow:**

1. Das System lehnt die Abmeldung ab und zeigt den Hinweis, dass eine Abmeldung nicht mehr möglich ist und der Verein kontaktiert werden soll.
2. Die bestehende Zusage bleibt unverändert.

### A5: Keine berechtigte Person

**Trigger:** Weder das Mitglied noch eines seiner Kinder ist Mitglied des veranstaltenden Vereins.
**Flow:**

1. Das System zeigt eine Fehlermeldung, dass keine Vereinsmitgliedschaft besteht.
2. Es wird keine Anmeldung gespeichert.

### A6: Club-Admin verwaltet Anmeldungen

**Trigger:** Ein Club-Admin trägt in der Detailansicht Mitglieder in eine Schicht ein oder ändert deren Status.
**Flow:**

1. Das System bietet dem Club-Admin eine Auswahl aller noch nicht eingetragenen Vereinsmitglieder an.
2. Der Club-Admin darf dabei die Kapazität der Schicht überschreiten und die Abmeldefrist ignorieren.
3. Das System speichert die Änderungen mit Zeitstempel.

## Postconditions

### Success Postconditions

- Die Zu- oder Absage der gewählten Person ist pro Schicht mit Zeitstempel gespeichert.
- Der Anmeldestand der Schicht und des Events ist aktualisiert.
- Zugesagte Einsätze stehen dem Club-Admin nach dem Event zur Bestätigung bereit (UC-026).

### Failure Postconditions

- Der Anmeldestatus der Person bleibt unverändert (z. B. bei voller Schicht, zu kurzfristiger Abmeldung oder fehlender Mitgliedschaft).

## Business Rules

### BR-001: Kapazitätsgrenze

Eine Schicht kann von Mitgliedern nur bis zum erfassten Personalbedarf (`countNeeded`) belegt werden; weitere Zusagen werden abgelehnt. Club-Admins dürfen Schichten überbuchen.

### BR-002: Abmeldefrist

Eine Absage ist nur bis `helferThreshold` Stunden (Vereinseinstellung) vor Schichtbeginn möglich; danach muss der Verein kontaktiert werden. Club-Admins sind von der Frist ausgenommen.

### BR-003: Anmeldung für Kinder

Eltern können für ihre Kinder zu- oder absagen, sofern das Kind Mitglied des veranstaltenden Vereins ist.

### BR-004: Nur Vereinsmitglieder

Es können nur Personen angemeldet werden, die Mitglied des veranstaltenden Vereins sind.

### BR-005: Eine Rückmeldung pro Person und Schicht

Pro Person und Schicht gilt jeweils die letzte Rückmeldung (Zusage oder Absage) mit Zeitstempel.
