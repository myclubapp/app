# Use Case: Kinder verknüpfen

## Overview

**Use Case ID:** UC-006
**Use Case Name:** Kinder verknüpfen
**Primary Actor:** Elternteil
**Goal:** Ein Elternteil verknüpft per E-Mail-Anfrage bis zu drei Kinder-Konten mit dem eigenen Konto, um deren Vereinsleben koordinieren zu können.
**Status:** Implemented
**Requirements:** FR-016

## Preconditions

- Der Elternteil ist angemeldet und seine E-Mail-Adresse ist verifiziert.
- Das Kind besitzt ein eigenes myclub-Konto mit bekannter E-Mail-Adresse.
- Der Elternteil hat weniger als drei verknüpfte Kinder.

## Main Success Scenario

1. Der Elternteil öffnet die Profilseite.
2. Das System zeigt den Abschnitt "Kinder" mit den bereits verknüpften Kindern und der Aktion "Hinzufügen" (nur sichtbar, solange weniger als drei Kinder verknüpft sind).
3. Der Elternteil wählt "Hinzufügen".
4. Das System prüft die Anzahl der bereits verknüpften Kinder.
5. Das System zeigt den Dialog "Kind hinzufügen" mit einem Eingabefeld für die E-Mail-Adresse des Kindes.
6. Der Elternteil gibt die E-Mail-Adresse des Kindes ein und bestätigt.
7. Das System speichert die Verknüpfungsanfrage mit dem Status "Pending".
8. Das System zeigt die offene Anfrage im Abschnitt "Kinder-Anfragen" mit E-Mail-Adresse und Status "Ausstehend".
9. Die Anfrage wird über die hinterlegte E-Mail-Adresse bestätigt (ausserhalb der App); der Status wechselt auf "Verified".
10. Das System verknüpft das Kind mit dem Elternkonto: Das Kind erscheint in der Kinderliste des Elternteils, der Elternteil erscheint im Profil des Kindes im Abschnitt "Eltern".

## Alternative Flows

### A1: Maximale Anzahl Kinder erreicht

**Trigger:** Der Elternteil löst "Hinzufügen" aus, obwohl bereits drei Kinder verknüpft sind (Schritt 4).
**Flow:**

1. Das System zeigt die Meldung "Maximale Anzahl an Kindern erreicht — Du kannst maximal 3 Kinder hinzufügen."
2. Es wird keine Anfrage erstellt; der Use Case endet.

### A2: Dialog abbrechen

**Trigger:** Der Elternteil bricht den Dialog "Kind hinzufügen" ab (Schritt 6).
**Flow:**

1. Das System verwirft die Eingabe; es wird keine Anfrage erstellt.

### A3: Offene Anfrage löschen

**Trigger:** Der Elternteil wählt bei einer offenen Anfrage die Löschen-Aktion (Schritt 8).
**Flow:**

1. Das System fragt nach: "Möchtest du diese Anfrage wirklich löschen?"
2. Der Elternteil bestätigt.
3. Das System löscht die Anfrage und bestätigt mit "Gespeichert".
4. Bei Abbruch bleibt die Anfrage bestehen.

### A4: Verknüpftes Kind entfernen

**Trigger:** Der Elternteil entfernt ein Kind aus der Kinderliste (Wischgeste, Schritt 2).
**Flow:**

1. Das System fragt nach, ob das Kind wirklich aus dem Profil entfernt werden soll.
2. Der Elternteil bestätigt.
3. Das System entfernt die Verknüpfung und bestätigt die Löschung.
4. Bei einem Fehler zeigt das System eine Fehlermeldung; die Verknüpfung bleibt bestehen.

## Postconditions

### Success Postconditions

- Eine Verknüpfungsanfrage ist gespeichert und für den Elternteil mit Status einsehbar.
- Nach Bestätigung ist das Kind mit dem Elternkonto verknüpft; der Elternteil sieht das Kind in seiner Kinderliste und kann dessen Vereinsleben koordinieren (z. B. für das Kind antworten, FR-017).

### Failure Postconditions

- Bei Abbruch, erreichtem Maximum oder Fehler wird keine (neue) Verknüpfung erstellt; bestehende Verknüpfungen bleiben unverändert.

## Business Rules

### BR-001: Maximal drei Kinder

Pro Elternkonto können höchstens drei Kinder verknüpft werden; massgeblich ist die Anzahl bestätigter Verknüpfungen (offene Anfragen zählen nicht zum Maximum).

### BR-002: Verknüpfung per E-Mail-Anfrage

Die Verknüpfung erfolgt über die E-Mail-Adresse des Kindes und muss bestätigt werden, bevor sie wirksam wird (Status "Pending" → "Verified").

### BR-003: Statusanzeige der Anfragen

Offene Anfragen werden mit Status "Ausstehend", bestätigte mit "Verifiziert" angezeigt und können vom Elternteil gelöscht werden.

### BR-004: Beidseitige Sichtbarkeit

Eine bestätigte Verknüpfung ist beidseitig sichtbar: Das Kind erscheint beim Elternteil unter "Kinder", der Elternteil beim Kind unter "Eltern"; die Elternliste beim Kind ist nicht bearbeitbar.

### BR-005: Entfernen mit Bestätigung

Das Entfernen eines verknüpften Kindes erfordert eine ausdrückliche Bestätigung.
