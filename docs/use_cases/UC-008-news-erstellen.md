# Use Case: News erstellen

## Overview

**Use Case ID:** UC-008  
**Use Case Name:** News erstellen  
**Primary Actor:** Club-Admin  
**Goal:** Der Club-Admin veröffentlicht eine Vereins-News mit optionalem Bild, um die Mitglieder des Vereins zu informieren.  
**Status:** Implemented  
**Requirements:** FR-020

## Preconditions

- Der Club-Admin ist angemeldet und die E-Mail-Adresse ist verifiziert.
- Der Club-Admin besitzt für mindestens einen Verein Administratorenrechte.

## Main Success Scenario

1. Der Club-Admin öffnet den News-Bereich.
2. Der Club-Admin tippt auf die Schaltfläche zum Erstellen einer News.
3. Das System öffnet das Formular «News erstellen».
4. Das System zeigt den Verein an, für den die News erstellt wird; ist der Club-Admin Administrator genau eines Vereins, ist dieser fix vorgegeben.
5. Der Club-Admin erfasst Titel, Lead-Text und Text.
6. Der Club-Admin wählt optional ein Bild aus; das System zeigt eine Vorschau des Bilds an.
7. Der Club-Admin tippt auf «Erstellen».
8. Das System übernimmt Autor und Autorenbild aus dem Benutzerprofil und setzt das Veröffentlichungsdatum auf den aktuellen Zeitpunkt.
9. Das System speichert die News beim Verein und lädt anschliessend das gewählte Bild hoch und verknüpft es mit der News.
10. Das System schliesst das Formular; die News erscheint im News-Feed der Vereinsmitglieder mit der Quelle «Verein».

## Alternative Flows

### A1: Administrator mehrerer Vereine

**Trigger:** Der Club-Admin ist Administrator mehrerer Vereine.
**Flow:**

1. Das System zeigt eine Auswahlliste aller Vereine, für die der Club-Admin Administratorenrechte besitzt.
2. Der Club-Admin wählt den Verein aus, für den die News veröffentlicht werden soll.
3. Weiter mit Schritt 5 des Main Success Scenario.

### A2: Erstellung abbrechen

**Trigger:** Der Club-Admin tippt auf «Schliessen».
**Flow:**

1. Das System schliesst das Formular, ohne die News zu speichern.
2. Es werden keine Daten übernommen.

### A3: News ohne Bild erstellen

**Trigger:** Der Club-Admin wählt kein Bild aus.
**Flow:**

1. Das System speichert die News ohne Bild.
2. Weiter mit Schritt 10 des Main Success Scenario.

### A4: News nachträglich bearbeiten oder löschen

**Trigger:** Der Club-Admin öffnet die Detailansicht einer Vereins-News seines Vereins.
**Flow:**

1. Das System bietet dem Club-Admin die Bearbeitung von Titel, Lead-Text und Text sowie den Austausch des Bilds an.
2. Alternativ wählt der Club-Admin «News löschen»; das System verlangt eine Bestätigung und entfernt die News anschliessend endgültig.
3. Das System bestätigt die Aktion mit einer Erfolgsmeldung.

## Postconditions

### Success Postconditions

- Die Vereins-News ist gespeichert und für alle Mitglieder des Vereins im News-Feed sichtbar.
- Autor, Autorenbild und Veröffentlichungsdatum sind automatisch gesetzt.
- Ein gewähltes Bild ist hochgeladen und mit der News verknüpft.

### Failure Postconditions

- Bei Abbruch oder Speicherfehler ist keine News angelegt; der Feed bleibt unverändert.
- Schlägt nur der Bild-Upload fehl, existiert die News ohne Bild.

## Business Rules

### BR-001: Erstellung nur durch Club-Admins

Vereins-News können nur für Vereine erstellt werden, für die der Benutzer Administratorenrechte besitzt.

### BR-002: Pflichtangaben

Titel, Lead-Text, Text und Zielverein sind Pflichtangaben; das Bild ist optional.

### BR-003: Automatische Autorenangaben

Autor (Vor- und Nachname) und Autorenbild werden beim Speichern automatisch aus dem Benutzerprofil des Club-Admins übernommen.

### BR-004: Veröffentlichungsdatum wird vom System gesetzt

Das Veröffentlichungsdatum wird beim Speichern automatisch auf den aktuellen Zeitpunkt gesetzt.

### BR-005: Sichtbarkeit im Feed

Erstellte Vereins-News erscheinen im aggregierten News-Feed der Vereinsmitglieder mit der Quellenkennzeichnung «Verein» (siehe UC-007).
