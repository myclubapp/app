# Use Case: J+S-Daten exportieren

## Overview

**Use Case ID:** UC-031
**Use Case Name:** J+S-Daten exportieren
**Primary Actor:** Team-Admin
**Goal:** Der Team-Admin exportiert Trainings, Wettkämpfe, Anwesenheiten und Personendaten seines Teams als CSV-Dateien im J+S-/AWK-Format, damit die Meldung an Jugend+Sport ohne Doppelerfassung erfolgt.
**Status:** Implemented
**Requirements:** FR-071

## Preconditions

- Der Team-Admin ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Der Nutzer ist Team-Admin des Teams oder Club-Admin des zugehörigen Vereins.
- Der Verein des Teams hat das PRO-Modul aktiviert (`hasFeatureMyClubPro`), sonst ist der Export-Bereich nicht sichtbar.
- Für zeitraumbezogene Exporte liegen Trainings bzw. Spiele im gewählten Zeitraum vor; für Anwesenheits- und Personenexport hat das Team Mitglieder.

## Main Success Scenario

1. Der Team-Admin öffnet die Detailseite seines Teams.
2. Das System zeigt den Bereich «Jugend+Sport Export» mit vier Exporten: «Aktivitäten J+S-Kurse (Trainings)», «Aktivitäten J+S-Kurse (Wettkämpfe)», «Anwesenheitskontrolle (AWK)» und «Personen».
3. Der Team-Admin wählt «Aktivitäten J+S-Kurse (Trainings)».
4. Das System fragt den Zeitraum ab (Start- und Enddatum, vorbelegt mit dem aktuellen Datum).
5. Der Team-Admin setzt den Zeitraum und bestätigt.
6. Das System lädt die Trainings des Teams im Zeitraum und zeigt währenddessen eine Fortschrittsanzeige.
7. Das System erstellt die CSV-Datei im J+S-Format (Spalten AKTIVITAETSTYP, DATUM, ZEIT, DAUER, ORT, FOKUS; Semikolon-getrennt) mit einer Zeile pro Training.
8. Das System stellt die Datei bereit — im Browser als Download, auf dem Mobilgerät über den Teilen-Dialog — und bestätigt den Export mit einer Erfolgsmeldung.

## Alternative Flows

### A1: Wettkämpfe exportieren

**Trigger:** Der Team-Admin wählt «Aktivitäten J+S-Kurse (Wettkämpfe)».
**Flow:**

1. Das System fragt den Zeitraum ab (wie Schritte 4–5).
2. Das System lädt die Meisterschaftsspiele des Teams im Zeitraum und erstellt die CSV-Datei im gleichen J+S-Format; als Aktivitätstyp wird «Wettkampf» eingetragen, als Fokus die Spielpaarung («Heimteam vs Gastteam»).
3. Weiter bei Schritt 8 des Hauptszenarios.

### A2: Anwesenheitskontrolle (AWK) exportieren

**Trigger:** Der Team-Admin wählt «Anwesenheitskontrolle (AWK)».
**Flow:**

1. Das System fragt den Zeitraum ab (wie Schritte 4–5).
2. Das System lädt die Trainings des Zeitraums, die Teammitglieder und pro Training die Anwesenheiten.
3. Das System erstellt die CSV-Datei im AWK-Format (Spalten PERSONENNUMMER, FUNKTION, DATUM, AKTIVITÄTSTYP, ZEIT, DAUER, ORT) mit einer Zeile pro zugesagter Teilnahme; als Funktion wird «Teilnehmer» eingetragen.
4. Weiter bei Schritt 8 des Hauptszenarios.

### A3: Personendaten exportieren

**Trigger:** Der Team-Admin wählt «Personen».
**Flow:**

1. Das System lädt ohne Zeitraumabfrage die Profile aller Teammitglieder.
2. Das System erstellt die CSV-Datei gemäss J+S-Personenvorlage (Spalten PERSONENNUMMER, NAME, VORNAME, GEBURTSDATUM, GESCHLECHT, AHV_NR, PEID, NATIONALITAET, MUTTERSPRACHE, STRASSE, HAUSNUMMER, PLZ, ORT, LAND).
3. Weiter bei Schritt 8 des Hauptszenarios.

### A4: Keine Daten im Zeitraum

**Trigger:** Im gewählten Zeitraum liegen keine Trainings bzw. keine Spiele vor.
**Flow:**

1. Das System zeigt eine Fehlermeldung, dass keine Daten für den Export vorhanden sind.
2. Es wird keine Datei erstellt; der Team-Admin kann den Export mit anderem Zeitraum wiederholen.

### A5: Team ohne Mitglieder

**Trigger:** Beim Anwesenheits- oder Personenexport hat das Team keine Mitglieder.
**Flow:**

1. Das System zeigt eine Fehlermeldung, dass keine Mitglieder vorhanden sind; es wird keine Datei erstellt.

### A6: Fehlende Personendaten beim Export

**Trigger:** Bei einzelnen Mitgliedern fehlen Profilangaben (z. B. AHV-Nummer, Geburtsdatum, Adresse).
**Flow:**

1. Das System bricht den Export nicht ab, sondern füllt fehlende Felder mit Standardwerten oder lässt sie leer: Geschlecht «M», Nationalität und Land «CH», AHV-Nummer/Geburtsdatum/Muttersprache/PLZ leer; die Personennummer (PEID) bleibt immer leer.
2. Ist keine separate Hausnummer erfasst, versucht das System, sie aus dem Feld «Strasse und Nummer» abzuleiten.

### A7: Export schlägt fehl

**Trigger:** Die Daten können nicht geladen oder die Datei nicht erstellt/geteilt werden.
**Flow:**

1. Das System zeigt eine Fehlermeldung; es wird keine Datei bereitgestellt.

### A8: PRO-Modul nicht freigeschaltet

**Trigger:** Der Verein des Teams hat das PRO-Modul nicht aktiviert.
**Flow:**

1. Das System blendet den Bereich «Jugend+Sport Export» auf der Team-Detailseite aus; der Use Case ist nicht verfügbar.

## Postconditions

### Success Postconditions

- Eine CSV-Datei im J+S- bzw. AWK-Format liegt beim Team-Admin vor (Download bzw. geteilt); der Dateiname enthält Exporttyp, Teamname und Zeitraum bzw. Exportdatum.
- Es wurden keine Daten in der App verändert (rein lesender Export).

### Failure Postconditions

- Es wurde keine Datei erstellt; der Team-Admin wurde über die Ursache (keine Daten, keine Mitglieder, Fehler) informiert. Der Datenbestand ist unverändert.

## Business Rules

### BR-001: Sichtbarkeit des Exports

Der Bereich «Jugend+Sport Export» ist nur sichtbar, wenn der Nutzer Team-Admin des Teams oder Club-Admin des Vereins ist und der Verein des Teams das PRO-Modul (`hasFeatureMyClubPro`) aktiviert hat.

### BR-002: Formatvorgaben J+S/AWK

Die Exporte folgen dem vom BASPO vorgegebenen CSV-Format (C-005): Semikolon als Trennzeichen und fest definierte Spaltenreihenfolge pro Exporttyp; Datum und Uhrzeit im Schweizer Format.

### BR-003: Nur Zusagen in der Anwesenheitskontrolle

Der AWK-Export enthält ausschliesslich Teilnahmen mit Zusage-Status; Absagen und unbeantwortete Aufgebote werden nicht exportiert.

### BR-004: Dauerberechnung

Die Dauer eines Trainings wird aus Beginn- und Endzeit in Minuten berechnet; bei fehlenden oder ungültigen Zeitangaben sowie bei Wettkämpfen wird der Standardwert 90 Minuten eingesetzt.

### BR-005: Standardwerte bei fehlenden Personendaten

Fehlende Profilangaben führen nicht zum Abbruch: Geschlecht wird mit «M», Nationalität und Land mit «CH» vorbelegt; übrige fehlende Felder bleiben leer.

### BR-006: Datenschutz

Der Personenexport enthält besonders schützenswerte Daten (AHV-Nummer, Geburtsdatum); die Verarbeitung unterliegt den Datenschutzvorgaben des Vereins (C-009) und steht deshalb nur Admins zur Verfügung.
