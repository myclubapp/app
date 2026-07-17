# Vision — myclub

> **Status:** Reverse-engineered aus dem bestehenden Code (App-Version 2.5.0, Build 235) am 2026-07-17.
> Dieses Dokument ist die Grundlage für den Requirements-Katalog ([requirements.md](requirements.md)),
> das Entity Model ([entity_model.md](entity_model.md)) und die Use Cases ([use_cases.md](use_cases.md)).

## 1. Produktvision

**myclub ist die zentrale Plattform für modernes Vereinsmanagement in der Schweiz — eine App, die alle
Vereinsprozesse vereint: Mitglieder, Teams, Trainings, Spiele, Events, Helfereinsätze und Beiträge.**

Mit myclub wird aus Pflicht wieder Passion. Digital. Einfach. Gemeinsam.

Unsere Mission ist es, den administrativen Ballast von den Schultern der rund 375'000 Ehrenamtlichen in
Schweizer Sportvereinen zu nehmen. In einer Zeit, in der 40 % der Vereine Schwierigkeiten haben,
Freiwillige zu finden, schafft myclub digitale Lösungen, die Vereinsarbeit wieder attraktiv machen —
für alle Generationen.

## 2. Problemstellung

Vereinsarbeit wird heute von Ehrenamtlichen mit einem Flickenteppich aus Excel-Listen, Chat-Gruppen,
E-Mails und Papierformularen organisiert. Das führt zu:

- **Hohem administrativem Aufwand** für Vorstände (Mitgliederlisten, Beitragsrechnungen, Helferlisten,
  J+S-Meldungen an Behörden).
- **Intransparenter Kommunikation**: Wer kommt ans Training? Wer hilft am Heimturnier? Wann ist das
  nächste Spiel?
- **Doppelspurigkeiten** zwischen Vereinsdaten und Verbandsdaten (Spielpläne, Ranglisten, News der
  Sportverbände).
- **Hoher Einstiegshürde für Eltern**, die Termine und Einsätze ihrer Kinder koordinieren müssen, ohne
  selbst aktive Mitglieder zu sein.

## 3. Zielgruppen und Nutzenversprechen

| Zielgruppe | Nutzenversprechen |
| --- | --- |
| **Vorstände (Club-Admins)** | Administrative Entlastung und Überblick: Mitglieder-, Eltern- und Beitrittsverwaltung, Beitragsrechnungen mit Swiss QR-Bill, Helferpunkte-Reporting, Mitglieder-Export, Abo-/Modulverwaltung. |
| **Trainer (Team-Admins)** | Einfache Planung und Teilnehmerverwaltung: Trainings (inkl. Serien), Spiele, Anwesenheitskontrolle, Aufstellungen, Trainingsübungen, J+S-Exporte. |
| **Spieler / Mitglieder** | Immer informiert: News-Feed (Verein + Verband), Push-Benachrichtigungen, Zu-/Absagen für Trainings, Spiele und Events mit wenigen Klicks, eigene Rechnungen einsehen. |
| **Eltern** | Transparente Kommunikation und einfache Koordination: eigene Kinder verknüpfen, für Kinder zu-/absagen, Helfereinsätze übernehmen — ohne selbst Spieler zu sein. |
| **Vereine als Organisation** | Nachhaltige digitale Strukturen: eine Plattform statt Insellösungen, modular nach Bedarf erweiterbar, mehrsprachig (DE/FR/IT/EN), als PWA und native App (iOS/Android) verfügbar. |
| **Sportverbände (Premium/White-Label)** | Eigene gebrandete App auf myclub-Basis (z. B. swiss unihockey, Swiss Volley, Handball Schweiz, Schweizerischer Turnverband) mit integrierten Verbandsdaten. |

## 4. Produktumfang (Module)

myclub ist modular aufgebaut. Die Module werden pro Verein über Feature-Flags freigeschaltet und über
ein Abo-Modell (Stripe) lizenziert.

### 4.1 Basis (Kern)

- **Authentifizierung & Onboarding**: Registrierung mit E-Mail-Verifizierung, Login, Passwort-Reset,
  Verein suchen und Beitritt beantragen (mit Team-Auswahl, optional als Eltern-Account), neuen Verein
  gründen (mehrstufiger Wizard).
- **Mitglieder- & Rollenverwaltung**: Mitglieder, Admins, Eltern und offene Beitrittsanfragen pro Verein
  und Team; frei definierbare Vereinsfunktionen (z. B. Kassier, Materialwart).
- **Profil**: Stammdaten, Profilbild, Sprache, Push- und E-Mail-Einstellungen, Datenschutz-Optionen,
  Kinder-Verwaltung (Eltern-Kind-Verknüpfung).
- **News & Kommunikation**: Vereins-News erstellen und lesen, aggregierter Feed über alle eigenen
  Vereine (inkl. Kinder-Vereine) und Verbands-News, In-App-Benachrichtigungen, Push-Nachrichten.
- **Trainings**: Termine (auch Serien), Zu-/Absagen (auch stellvertretend für Kinder), Anwesenheits-
  verwaltung, Absagen mit Grund, Erinnerungen.
- **Events (Veranstaltungen)**: Vereinsanlässe mit Teilnehmerbedarf, Zu-/Absagen, geschlossene Events.
- **Teams**: unlimitierte Teams mit Logo, Liga, Website; Team-Mitglieder- und Admin-Verwaltung.
- **Vereinslinks**: Linksammlung des Vereins (Web, Bild, PDF), sortierbar.

### 4.2 Meisterschafts-Modul (`hasFeatureChampionship`)

- Spielpläne und Resultate je Team, Zu-/Absagen zu Spielen, manuell erfasste Spiele.
- Ranglisten/Tabellen pro Saison aus Verbandsdaten (API-Zugriff, z. B. Swiss Unihockey).
- Spieldetails mit Aufstellung (Lineup) und Kartenintegration (Spielort).
- Spielvorschau im News-Feed.

### 4.3 Helfer-Modul (`hasFeatureHelferEvent`)

- Helfer-Events mit Schichtplanung (Schicht = Zeitfenster, Punkte, Personalbedarf).
- An-/Abmeldung pro Schicht (auch für Kinder), Admin-Bestätigung mit Punktevergabe.
- Helferpunkte-Konto pro Mitglied, Schwellwerte und Reporting-Zeitraum pro Verein, manuelle Punktebuchung.

### 4.4 myclub PRO (`hasFeatureMyClubPro`)

- **Beitragsverwaltung**: Abrechnungsperioden, Rechnungsgenerierung pro Mitglied (Jahresbeitrag je Team,
  Zuschläge/Abzüge), Rechnungsstatus, Zahlungserinnerungen, Swiss QR-Bill (QR-Einzahlungsschein).
- **J+S-Integration**: CSV-Exporte im Jugend+Sport-/AWK-Format (Trainings, Wettkämpfe, Anwesenheiten,
  Personendaten).
- **Mitglieder-Export**: Excel/CSV mit konfigurierbaren Feldern.
- **Trainingsplanung** (`hasFeatureTrainingExercise`): Übungsbibliothek pro Team, Übungen pro Training.

### 4.5 Abo- und Modulverwaltung

- Abos nach Vereinsgrösse (micro/small/medium/large), Zusatzmodule als Add-ons, Checkout via Stripe.
- Bei inaktivem Abo wird der Zugang für den Verein gesperrt.

## 5. Geschäftsmodell

| Abo | Preis | Zielgruppe |
| --- | --- | --- |
| myclub \| micro | CHF 0.00/Monat | Vereine bis 20 Mitglieder |
| myclub \| small | CHF 6.90/Monat | 20–79 Mitglieder |
| myclub \| medium | CHF 12.90/Monat | 80–199 Mitglieder |
| myclub \| large | CHF 24.90/Monat | ab 200 Mitglieder |

Zusatzmodule: Meisterschaft (CHF 5.90/Monat), Helfer (CHF 4.90/Monat), PRO (CHF 7.90/Monat).
Premium/White-Label-Implementierungen (eigene Domain, individuelles Design, massgeschneiderte
Funktionen) für Verbände und grössere Vereine.

## 6. Rahmenbedingungen und Abgrenzung

### Technischer Rahmen (Ist-Zustand)

- **Frontend**: Ionic 8 / Angular 21 / Capacitor 8; ausgeliefert als PWA ([my-club.app](https://my-club.app)) und native App (iOS, Android); zusätzlich White-Label-Builds pro Verband/Verein.
- **Backend**: Firebase (Auth, Firestore als Hauptdatenbank mit Offline-Persistenz, Storage, Cloud
  Messaging, Analytics, Hosting), Region `europe-west6` (Zürich); Cloud Functions für Versand von
  Rechnungen, Push-Nachrichten und Erinnerungen; GraphQL-API für Verbands-Sportdaten.
- **Zahlungen**: Stripe (Firebase-Extension), Swiss QR-Bill für Mitgliederrechnungen.
- **Verbands-Integrationen**: Swiss Unihockey, Swiss Volley, Handball Schweiz, Schweizerischer
  Turnverband; Vereinstypen darüber hinaus: Sport, Kultur, Andere.
- **Mehrsprachigkeit**: Deutsch, Französisch, Italienisch, Englisch (Profil-Sprache > Gerätesprache > DE).

### Nicht im Umfang (Out of Scope)

- Kein öffentlicher Bereich ohne Konto (alle Inhalte erfordern Login und Vereinszugehörigkeit).
- Keine eigene Chat-/Messaging-Funktion (Kommunikation läuft über News, Push und E-Mail).
- Keine Buchhaltung über die Beitragsverwaltung hinaus (kein Hauptbuch, keine Lohnbuchhaltung).
- Verbandsdaten werden gelesen/integriert, aber nicht in die Verbände zurückgeschrieben.

## 7. Erfolgskriterien

- Ein Verein kann sich ohne Schulung selbst onboarden (Verein gründen, Teams anlegen, Mitglieder
  aufnehmen).
- Trainer erfassen ein Training oder eine Serie in unter einer Minute; Mitglieder sagen mit einem
  Klick zu oder ab.
- Vorstände erstellen die Jahresbeitragsrechnungen inkl. QR-Einzahlungsschein ohne Drittsoftware.
- Helfereinsätze werden über Schichten abgedeckt und Helferpunkte automatisch nachgeführt.
- J+S-Meldungen entstehen als Export aus vorhandenen Anwesenheitsdaten statt manueller Erfassung.
- Die App ist für alle Rollen (Vorstand, Trainer, Mitglied, Eltern) auf Smartphone, Tablet und Web
  gleichermassen nutzbar.
