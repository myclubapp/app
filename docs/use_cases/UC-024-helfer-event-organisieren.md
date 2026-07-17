# Use Case: Helfer-Event organisieren

## Overview

**Use Case ID:** UC-024  
**Use Case Name:** Helfer-Event organisieren  
**Primary Actor:** Club-Admin  
**Goal:** Ein Helfer-Event mit Schichten (Zeitfenster, Punkte, Personalbedarf) anlegen, damit Helfereinsätze im Verein planbar sind.  
**Status:** Implemented  
**Requirements:** FR-057

## Preconditions

- Der Club-Admin ist in der App angemeldet.
- Der Club-Admin besitzt die Administratorrolle in mindestens einem Verein.
- Das Helfer-Modul ist für den Verein freigeschaltet (`Club.hasFeatureHelferEvent`); der Bereich "Helfer" ist dadurch in der Navigation sichtbar.

## Main Success Scenario

1. Der Club-Admin öffnet den Bereich "Helfer".
2. Der Club-Admin tippt auf die Schaltfläche zum Erstellen eines neuen Helfer-Events.
3. Das System öffnet das Erfassungsformular und belegt den Verein mit dem ersten Verein vor, in dem der Club-Admin Administrator ist.
4. Der Club-Admin erfasst Name, Beschreibung, Ort und Adresse sowie Start-/Enddatum und die Zeiten von/bis des Events.
5. Der Club-Admin fügt eine Schicht hinzu und erfasst Beschreibung, Anzahl benötigter Helfer, Anzahl Helferpunkte sowie Zeit von und Zeit bis; als Vorgabe für das Zeitfenster schlägt das System die Eventzeiten vor.
6. Das System übernimmt die Schicht in die Schichtenliste des Events.
7. Der Club-Admin wiederholt Schritt 5 für weitere Schichten; bereits erfasste Schichten kann er bearbeiten, kopieren oder (nach Bestätigungsdialog) löschen.
8. Der Club-Admin tippt auf "Event erstellen".
9. Das System prüft, ob alle Pflichtfelder (Name, Ort, Datum, Zeit von/bis, Start-/Enddatum) ausgefüllt sind.
10. Das System zeigt einen Bestätigungsdialog; der Club-Admin bestätigt.
11. Das System speichert das Helfer-Event mit seinen Schichten und schliesst das Formular.
12. Das Helfer-Event erscheint in der Liste der kommenden Helfer-Events; pro Event wird der aggregierte Anmeldestand (Anmeldungen/Bedarf) über alle Schichten angezeigt.

## Alternative Flows

### A1: Pflichtfelder fehlen

**Trigger:** Beim Erstellen (Schritt 9) ist mindestens ein Pflichtfeld leer.
**Flow:**

1. Das System zeigt die Fehlermeldung "Bitte füllen Sie alle erforderlichen Felder aus".
2. Das Formular bleibt geöffnet; der Club-Admin ergänzt die Angaben und fährt bei Schritt 8 fort.

### A2: Meisterschaftsspiel als Vorlage verwenden

**Trigger:** Der Club-Admin wählt im Erfassungsformular ein Spiel des Vereins als Vorlage.
**Flow:**

1. Das System übernimmt Name, Beschreibung, Ort und Adresse des Spiels.
2. Das System setzt Datum und Startzeit auf den Spielbeginn und die Endzeit auf zwei Stunden nach Beginn.
3. Der Ablauf wird bei Schritt 4 fortgesetzt (Angaben können angepasst werden).

### A3: Bestehendes Helfer-Event kopieren

**Trigger:** Der Club-Admin wählt in der Liste oder in der Detailansicht eines Helfer-Events die Aktion "Kopieren".
**Flow:**

1. Das System lädt das Event inklusive seiner Schichten und öffnet das Erfassungsformular vorbefüllt.
2. Der Ablauf wird bei Schritt 4 fortgesetzt.

### A4: Schichten nach der Erstellung pflegen

**Trigger:** Der Club-Admin öffnet die Detailansicht eines bestehenden Helfer-Events und fügt eine Schicht hinzu, bearbeitet, kopiert oder löscht eine Schicht.
**Flow:**

1. Das System prüft beim Speichern die Pflichtfelder Beschreibung, Zeit von und Zeit bis; fehlen Angaben, zeigt es eine Fehlermeldung und speichert nicht.
2. Das System speichert die Änderung direkt am Event; das Löschen einer Schicht erfordert einen Bestätigungsdialog.

### A5: Club-Admin bricht die Erstellung ab

**Trigger:** Der Club-Admin verneint den Bestätigungsdialog (Schritt 10) oder schliesst das Formular.
**Flow:**

1. Das System speichert nichts; das Event wird nicht angelegt.

### A6: Speichern schlägt fehl

**Trigger:** Beim Speichern (Schritt 11) tritt ein Fehler auf.
**Flow:**

1. Das System zeigt die Fehlermeldung an; das Event wird nicht angelegt.

## Postconditions

### Success Postconditions

- Das Helfer-Event ist mit allen erfassten Schichten (Name, Zeitfenster, Punktewert, Personalbedarf) gespeichert.
- Das Event ist für die Vereinsmitglieder im Bereich "Helfer" sichtbar; Mitglieder können sich für die Schichten an- und abmelden (UC-025).

### Failure Postconditions

- Es wurde kein Helfer-Event angelegt bzw. das bestehende Event ist unverändert.
- Bereits erfasste Formulareingaben sind ohne Speicherung verworfen.

## Business Rules

### BR-001: Pflichtangaben des Events

Ein Helfer-Event benötigt zwingend Name, Ort, Datum, Zeit von/bis sowie Start- und Enddatum.

### BR-002: Schichtdefinition

Eine Schicht besteht aus Beschreibung, Anzahl benötigter Helfer (Personalbedarf), Anzahl Helferpunkte und einem Zeitfenster (Zeit von/bis). Bei der nachträglichen Schichtpflege sind Beschreibung, Zeit von und Zeit bis Pflichtfelder.

### BR-003: Zeitkonsistenz

Liegt die Endzeit vor der Startzeit bzw. das Enddatum vor dem Startdatum, gleicht das System den späteren Wert automatisch an den früheren an.

### BR-004: Modul-Freischaltung

Helfer-Events stehen nur in Vereinen mit freigeschaltetem Helfer-Modul (`hasFeatureHelferEvent`) zur Verfügung; ohne Freischaltung ist der Bereich "Helfer" nicht sichtbar.

### BR-005: Berechtigung

Nur Club-Admins des Vereins können Helfer-Events erstellen, bearbeiten, kopieren und löschen.
