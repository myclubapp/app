# Use Case: Vereins-Abo verwalten

## Overview

**Use Case ID:** UC-032  
**Use Case Name:** Vereins-Abo verwalten  
**Primary Actor:** Club-Admin  
**Goal:** Der Club-Admin schliesst für den Verein ein Abo ab, kauft bei Bedarf Zusatzmodule (Add-ons) und behält den Überblick über aktive und inaktive Abos inkl. Rechnungen.  
**Status:** Implemented  
**Requirements:** FR-072, FR-073, FR-074

## Preconditions

- Der Club-Admin ist angemeldet und besitzt Administratorenrechte für den Verein.
- Die Abo-Verwaltung des Vereins ist geöffnet (aus der Vereinsverwaltung oder über das Hinweis-Modal bei inaktivem Abo, siehe UC-033).

## Main Success Scenario

1. Der Club-Admin öffnet die Abo-Verwaltung des Vereins.
2. Das System zeigt die Vereinsinformationen und die aktuelle Mitgliederzahl an.
3. Das System lädt die verfügbaren Abo-Produkte mit ihren aktiven Preisen und zeigt sie nach maximaler Nutzerzahl aufsteigend sortiert an; die Preise sind mit Währung und Betrag ausgewiesen.
4. Das System zeigt die bestehenden Abos des Vereins, getrennt nach aktiven und inaktiven Abos, jeweils mit Produkt und zugehörigen Rechnungen.
5. Der Club-Admin wählt ein Abo-Produkt mit dem gewünschten Preis aus.
6. Das System fragt eine Kaufbestätigung mit Währung und Betrag ab.
7. Der Club-Admin bestätigt den Kauf.
8. Das System zeigt eine Wartemeldung, erstellt eine Checkout-Session für den Verein und öffnet die Stripe-Bezahlseite im Browser.
9. Der Club-Admin schliesst die Zahlung auf der Stripe-Bezahlseite ab.
10. Das Abo wird für den Verein aktiviert und erscheint in der Abo-Verwaltung unter den aktiven Abos.

## Alternative Flows

### A1: Kauf abgebrochen

**Trigger:** Der Club-Admin wählt im Bestätigungsdialog «Abbrechen».
**Flow:**

1. Das System zeigt eine Meldung, dass die Aktion abgebrochen wurde.
2. Es wird keine Checkout-Session erstellt; der Abo-Stand bleibt unverändert.

### A2: Add-on kaufen

**Trigger:** Der Club-Admin wählt ein Zusatzmodul (z. B. Meisterschaft, Helfer, PRO) aus.
**Flow:**

1. Das System zeigt die verfügbaren Zusatzmodule mit ihren aktiven Preisen an.
2. Der Club-Admin wählt ein Modul mit Preis aus und bestätigt den Kaufdialog.
3. Das System erstellt eine Checkout-Session für das Add-on und öffnet die Stripe-Bezahlseite im Browser.
4. Nach erfolgreicher Zahlung ist das Zusatzmodul für den Verein freigeschaltet.

### A3: Abo-Status einsehen

**Trigger:** Der Club-Admin wechselt zwischen den Ansichten «aktiv» und «inaktiv».
**Flow:**

1. Das System zeigt die Abos des gewählten Status mit Produktname und den zugehörigen Rechnungen in chronologischer Reihenfolge.
2. Der Club-Admin prüft den Vertragsstand, ohne einen Kauf auszulösen.

### A4: Keine Produkte verfügbar oder Ladefehler

**Trigger:** Es sind keine aktiven Produkte hinterlegt oder das Laden von Produkten, Preisen oder Abos schlägt fehl.
**Flow:**

1. Das System zeigt eine leere Produkt- bzw. Abo-Liste an.
2. Die übrigen Bereiche der Abo-Verwaltung bleiben bedienbar.

### A5: Checkout-Session liefert keine Bezahlseite

**Trigger:** Die Checkout-Session erhält keine gültige Bezahl-URL.
**Flow:**

1. Das System öffnet keine Bezahlseite; die Wartemeldung bleibt bestehen.
2. Es kommt kein Kauf zustande; der Abo-Stand bleibt unverändert.

## Postconditions

### Success Postconditions

- Das gewählte Abo bzw. Add-on ist über Stripe bezahlt und erscheint unter den aktiven Abos des Vereins.
- Die zugehörigen Rechnungen sind in der Abo-Verwaltung einsehbar.

### Failure Postconditions

- Bei Abbruch oder Fehler wird kein Abo abgeschlossen; bestehende Abos und Rechnungen bleiben unverändert.
- Eine allenfalls erstellte Checkout-Session führt ohne abgeschlossene Zahlung zu keiner Aktivierung.

## Business Rules

### BR-001: Produktkatalog aus Stripe

Angeboten werden ausschliesslich aktive Stripe-Produkte: Basis-Abos (Typ «base», Grössen micro/small/medium/large) und Zusatzmodule (Typ «module»). Es werden nur aktive Preise angezeigt.

### BR-002: Sortierung und Preisdarstellung

Basis-Abos werden nach maximaler Nutzerzahl aufsteigend sortiert; die Preise eines Produkts werden aufsteigend sortiert und mit Währung und zwei Nachkommastellen dargestellt.

### BR-003: Explizite Kaufbestätigung

Jeder Kauf (Abo oder Add-on) erfordert eine explizite Bestätigung des Club-Admins in einem Dialog mit Angabe von Währung und Betrag.

### BR-004: Bezahlung über Stripe-Checkout

Die Bezahlung erfolgt über eine Stripe-Checkout-Session, die im externen Browser geöffnet wird; Promotionscodes sind zugelassen.

### BR-005: Statusabgrenzung aktiv/inaktiv

Ein Abo gilt als aktiv, wenn sein Status «active» ist; alle anderen Status werden als inaktiv geführt und getrennt angezeigt.

### BR-006: Rechnungen pro Abo

Zu jedem Abo sind die zugehörigen Rechnungen einsehbar, chronologisch nach Erstellungsdatum sortiert.
