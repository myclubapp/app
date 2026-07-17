# Requirements-Katalog — myclub

> **Quelle:** [vision.md](vision.md) und Reverse Engineering des bestehenden Codes (App-Version 2.5.0, Build 235), Stand 2026-07-17.
> Da der Katalog eine bestehende App dokumentiert, ist der Status der meisten Anforderungen `Implemented`.
> Messbare Zielwerte bei NFRs, die im Code nicht explizit verankert sind, sind als neue Zielwerte mit Status `Open` markiert.

**Rollen:** Gast (nicht authentifiziert), Mitglied, Elternteil, Team-Admin (Trainer), Club-Admin (Vorstand), System (Backend/Cloud Functions).

## 1. Funktionale Requirements (FR)

### 1.1 Authentifizierung & Konto

| ID     | Title                | User Story                                                                                                                                          | Priority | Status      |
| ------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-001 | Registrierung        | Als Gast möchte ich mich mit E-Mail und Passwort registrieren, damit ich ein myclub-Konto erhalte.                                                    | High     | Implemented |
| FR-002 | E-Mail-Verifizierung | Als System möchte ich unverifizierte Konten auf die Verifizierungsseite umleiten, damit nur bestätigte E-Mail-Adressen Zugriff auf Vereinsdaten haben. | High     | Implemented |
| FR-003 | Login/Logout         | Als Gast möchte ich mich an- und abmelden können, damit nur ich auf mein Konto zugreife.                                                              | High     | Implemented |
| FR-004 | Passwort-Reset       | Als Gast möchte ich mein Passwort per E-Mail zurücksetzen, damit ich bei Verlust wieder Zugang erhalte.                                               | High     | Implemented |
| FR-005 | E-Mail ändern        | Als Mitglied möchte ich meine E-Mail-Adresse ändern, damit mein Konto aktuell bleibt.                                                                 | Medium   | In Progress |
| FR-006 | Konto löschen        | Als Mitglied möchte ich mein Konto löschen können, damit meine persönlichen Daten entfernt werden.                                                    | High     | Implemented |

### 1.2 Onboarding & Vereinsbeitritt

| ID     | Title                     | User Story                                                                                                                                                  | Priority | Status      |
| ------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| FR-007 | Verein beitreten          | Als Mitglied möchte ich einen Verein suchen und den Beitritt beantragen (inkl. Team-Auswahl, optional als Elternteil), damit ich Teil des Vereins werde.       | High     | Implemented |
| FR-008 | Verein gründen            | Als Mitglied möchte ich über einen Wizard (Typ → Sportart → Details) einen neuen Verein beantragen, damit mein Verein myclub nutzen kann.                      | High     | Implemented |
| FR-009 | Zuordnung via Kontakt     | Als System möchte ich Vereine anhand der Kontakt-E-Mail-Adresse des Nutzers vorschlagen, damit der Beitritt zum richtigen Verein erleichtert wird.             | Medium   | Implemented |
| FR-010 | Team beitreten            | Als Mitglied möchte ich einem Team meines Vereins beitreten (Antrag), damit ich Trainings und Spiele dieses Teams sehe.                                        | High     | In Progress |

### 1.3 Profil & Eltern

| ID     | Title                    | User Story                                                                                                                                             | Priority | Status      |
| ------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-011 | Profildaten pflegen      | Als Mitglied möchte ich meine Stammdaten (Name, Adresse, Geburtsdatum, Lizenznummer, AHV-Nummer, Nationalität) pflegen, damit der Verein korrekte Daten hat. | High     | Implemented |
| FR-012 | Profilbild               | Als Mitglied möchte ich ein Profilbild hochladen, damit ich in Listen erkennbar bin.                                                                        | Low      | Implemented |
| FR-013 | Sprache wählen           | Als Mitglied möchte ich meine Sprache (DE/FR/IT/EN) wählen, damit die App in meiner Sprache erscheint.                                                      | Medium   | Implemented |
| FR-014 | Benachrichtigungs-Optionen | Als Mitglied möchte ich Push- und E-Mail-Benachrichtigungen pro Typ (News, Verband, Training, Meisterschaft, Event, Helfer) ein-/ausschalten, damit ich nur relevante Meldungen erhalte. | Medium   | Implemented |
| FR-015 | Datenschutz-Optionen     | Als Mitglied möchte ich E-Mail und Telefonnummer für andere Mitglieder verbergen können, damit meine Kontaktdaten geschützt sind.                            | Medium   | Implemented |
| FR-016 | Kinder verknüpfen        | Als Elternteil möchte ich bis zu 3 Kinder per E-Mail-Anfrage mit meinem Konto verknüpfen, damit ich deren Vereinsleben koordinieren kann.                    | High     | Implemented |
| FR-017 | Für Kinder antworten     | Als Elternteil möchte ich für meine Kinder zu- oder absagen (Training, Spiel, Event, Helferschicht), damit ich ihre Teilnahme verwalten kann.                | High     | Implemented |

### 1.4 News & Benachrichtigungen

| ID     | Title                  | User Story                                                                                                                                            | Priority | Status      |
| ------ | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-018 | News-Feed              | Als Mitglied möchte ich einen aggregierten News-Feed aller meiner Vereine (inkl. Vereine meiner Kinder) und Verbände mit Filter (alle/Verein/Verband) sehen, damit ich informiert bleibe. | High     | Implemented |
| FR-019 | News-Detail & Teilen   | Als Mitglied möchte ich News im Detail lesen und teilen, damit ich Inhalte weitergeben kann.                                                               | Medium   | Implemented |
| FR-020 | News erstellen         | Als Club-Admin möchte ich Vereins-News mit Bild erstellen, damit ich Mitglieder informieren kann.                                                          | High     | Implemented |
| FR-021 | In-App-Benachrichtigungen | Als Mitglied möchte ich In-App-Benachrichtigungen mit Gelesen-Status sehen, damit ich nichts verpasse.                                                  | Medium   | Implemented |
| FR-022 | Push-Zustellung        | Als System möchte ich Push-Nachrichten nach Typ (News, Training, Event, Helfer-Event) an die registrierten Geräte senden und beim Antippen zur passenden Seite navigieren, damit Nutzer direkt zum Inhalt gelangen. | High     | Implemented |
| FR-023 | Spielvorschau im Feed  | Als Mitglied möchte ich eine konfigurierbare Spielvorschau (Anzahl Tage) im News-Feed sehen, damit ich kommende Spiele im Blick habe.                      | Low      | Implemented |

### 1.5 Trainings

| ID     | Title                    | User Story                                                                                                                                      | Priority | Status      |
| ------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-024 | Training anlegen         | Als Team-Admin möchte ich Trainings anlegen (einzeln oder als Serie mit Wiederholungsintervall), damit der Trainingsbetrieb geplant ist.          | High     | Implemented |
| FR-025 | Training beantworten     | Als Mitglied möchte ich Trainings zu- oder absagen, damit der Trainer die Teilnehmerzahl kennt.                                                   | High     | Implemented |
| FR-026 | Anwesenheit verwalten    | Als Team-Admin möchte ich Anwesenheiten aller Mitglieder einsehen und stellvertretend ändern, damit die Anwesenheitsliste stimmt.                 | High     | Implemented |
| FR-027 | Training absagen         | Als Team-Admin möchte ich ein Training mit Begründung absagen, damit die Mitglieder informiert sind.                                              | Medium   | Implemented |
| FR-028 | Training kopieren        | Als Team-Admin möchte ich ein Training kopieren, damit ich wiederkehrende Termine schnell erfasse.                                                | Low      | Implemented |
| FR-029 | Trainings-Erinnerung     | Als Team-Admin möchte ich eine Erinnerung an unentschlossene Mitglieder senden, damit Zu-/Absagen rechtzeitig eintreffen.                         | Medium   | Implemented |
| FR-030 | Trainingsübungen         | Als Team-Admin möchte ich eine Übungsbibliothek pro Team pflegen und Übungen einem Training in definierter Reihenfolge zuordnen, damit Trainings inhaltlich geplant sind. | Low      | Implemented |

### 1.6 Events (Veranstaltungen)

| ID     | Title                  | User Story                                                                                                                              | Priority | Status      |
| ------ | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-031 | Event anlegen          | Als Club-Admin möchte ich Vereins-Events mit Teilnehmerbedarf und optional geschlossenem Teilnehmerkreis anlegen, damit Anlässe organisiert sind. | High     | Implemented |
| FR-032 | Event beantworten      | Als Mitglied möchte ich Events zu- oder absagen, damit der Organisator planen kann.                                                        | High     | Implemented |
| FR-033 | Event absagen          | Als Club-Admin möchte ich ein Event mit Begründung absagen, damit Teilnehmer informiert sind.                                              | Medium   | Implemented |
| FR-034 | Event-Erinnerung       | Als Club-Admin möchte ich eine Erinnerung an unentschlossene Mitglieder senden, damit Rückmeldungen eintreffen.                            | Medium   | Implemented |
| FR-035 | Event umwandeln        | Als Club-Admin möchte ich ein Event in ein Helfer-Event umwandeln, damit ich Schichten dafür planen kann.                                  | Low      | Implemented |

### 1.7 Teams

| ID     | Title                   | User Story                                                                                                                    | Priority | Status      |
| ------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| FR-036 | Teamdaten verwalten     | Als Team-Admin möchte ich Teamdaten (Name, Logo, Liga, Website, Portrait) pflegen, damit das Team korrekt dargestellt wird.       | Medium   | In Progress |
| FR-037 | Team-Mitglieder verwalten | Als Team-Admin möchte ich Team-Mitglieder einsehen und entfernen, damit die Teamliste aktuell ist.                              | High     | Implemented |
| FR-038 | Team-Admins verwalten   | Als Team-Admin möchte ich weitere Team-Admins ernennen oder entfernen, damit die Verantwortung verteilt ist.                      | Medium   | Implemented |
| FR-039 | Team-Anfragen verwalten | Als Team-Admin möchte ich Team-Beitrittsanfragen freigeben oder ablehnen, damit nur berechtigte Personen dem Team angehören.      | High     | In Progress |
| FR-040 | Jahresbeitrag festlegen | Als Club-Admin möchte ich pro Team einen Jahresbeitrag (Betrag, Währung) festlegen, damit die Beitragsrechnung berechnet werden kann. | Medium   | Implemented |

### 1.8 Vereinsverwaltung

| ID     | Title                     | User Story                                                                                                                                   | Priority | Status      |
| ------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-041 | Vereinsdaten verwalten    | Als Club-Admin möchte ich Vereinsdaten (Name, Logo, Adresse, Website, Schwellwerte) pflegen, damit der Verein korrekt konfiguriert ist.           | High     | Implemented |
| FR-042 | Mitgliederliste verwalten | Als Club-Admin möchte ich die Mitgliederliste einsehen, Mitglieder entfernen und ihnen Vereinsfunktionen zuweisen, damit die Verwaltung stimmt.    | High     | Implemented |
| FR-043 | Club-Admins verwalten     | Als Club-Admin möchte ich weitere Club-Admins ernennen oder entfernen, damit der Vorstand abgebildet ist.                                         | High     | Implemented |
| FR-044 | Eltern verwalten          | Als Club-Admin möchte ich die Elternliste einsehen und Eltern entfernen oder zu Mitgliedern machen, damit Eltern korrekt geführt sind.            | Medium   | Implemented |
| FR-045 | Beitrittsanfragen verwalten | Als Club-Admin möchte ich Vereins-Beitrittsanfragen (auch Eltern-Anfragen) freigeben oder ablehnen, damit nur berechtigte Personen beitreten.   | High     | Implemented |
| FR-046 | Vereinsfunktionen definieren | Als Club-Admin möchte ich frei definierbare Funktionen (z. B. Kassier, Materialwart) anlegen, damit Zuständigkeiten sichtbar sind.             | Low      | Implemented |
| FR-047 | Vereinslinks verwalten    | Als Club-Admin möchte ich Vereinslinks (Web, Bild, PDF) mit Reihenfolge und Kartenanzeige verwalten, damit wichtige Ressourcen erreichbar sind.   | Low      | Implemented |
| FR-048 | Vereinsstatistiken        | Als Club-Admin möchte ich Vereinsstatistiken (z. B. Durchschnittsalter, Mitgliederzahlen) sehen, damit ich den Verein im Überblick habe.          | Low      | Implemented |
| FR-049 | Mitglieder-Export         | Als Club-Admin möchte ich Mitgliederdaten mit konfigurierbaren Feldern als Excel-Datei exportieren, damit ich sie extern weiterverwenden kann.    | Medium   | Implemented |

### 1.9 Meisterschaft (Modul)

| ID     | Title                 | User Story                                                                                                                              | Priority | Status      |
| ------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| FR-050 | Spielplan einsehen    | Als Mitglied möchte ich kommende und vergangene Spiele meiner Teams sehen, damit ich den Spielbetrieb verfolge.                              | High     | Implemented |
| FR-051 | Spiel beantworten     | Als Mitglied möchte ich Spielaufgeboten zu- oder absagen, damit der Trainer das Aufgebot planen kann.                                        | High     | Implemented |
| FR-052 | Spiel manuell erfassen | Als Team-Admin möchte ich Spiele manuell erfassen, damit auch Spiele ohne Verbandsdaten geführt werden.                                     | Medium   | Implemented |
| FR-053 | Spiel löschen         | Als Team-Admin möchte ich manuell erfasste Spiele löschen, damit der Spielplan korrekt bleibt.                                               | Medium   | Implemented |
| FR-054 | Rangliste einsehen    | Als Mitglied möchte ich die Rangliste/Tabelle pro Saison sehen, damit ich den Stand der Liga kenne.                                          | Medium   | Implemented |
| FR-055 | Spieldetail mit Karte | Als Mitglied möchte ich Spieldetails inkl. Spielort auf einer Karte sehen, damit ich den Austragungsort finde.                               | Medium   | Implemented |
| FR-056 | Aufstellung verwalten | Als Team-Admin möchte ich die Aufstellung (Lineup) eines Spiels mit Reihenfolge verwalten, damit das Aufgebot dokumentiert ist.              | Low      | In Progress |

### 1.10 Helfer (Modul)

| ID     | Title                    | User Story                                                                                                                                | Priority | Status      |
| ------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-057 | Helfer-Event erstellen   | Als Club-Admin möchte ich Helfer-Events mit Schichten (Zeitfenster, Punkte, Personalbedarf) erstellen, damit Helfereinsätze planbar sind.   | High     | Implemented |
| FR-058 | Schicht beantworten      | Als Mitglied möchte ich mich für Schichten an- oder abmelden (auch für meine Kinder), damit der Bedarf gedeckt wird.                        | High     | Implemented |
| FR-059 | Einsatz bestätigen       | Als Club-Admin möchte ich geleistete Schichteinsätze bestätigen und damit Helferpunkte gutschreiben, damit das Punktekonto stimmt.          | High     | Implemented |
| FR-060 | Punktekonto einsehen     | Als Mitglied möchte ich mein Helferpunkte-Konto einsehen, damit ich meinen Stand gegenüber dem Vereins-Soll kenne.                          | Medium   | In Progress |
| FR-061 | Punkte manuell buchen    | Als Club-Admin möchte ich Helferpunkte manuell buchen, damit auch Einsätze ausserhalb von Schichten honoriert werden.                       | Medium   | Implemented |
| FR-062 | Punkte-Reporting         | Als Club-Admin möchte ich ein Helferpunkte-Reporting über einen definierbaren Zeitraum mit Schwellwert sehen, damit ich Soll-Erfüllung prüfe. | Medium   | Implemented |

### 1.11 Beitragsverwaltung (PRO-Modul)

| ID     | Title                    | User Story                                                                                                                                     | Priority | Status      |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| FR-063 | Abrechnungsperiode anlegen | Als Club-Admin möchte ich Abrechnungsperioden (z. B. Jahresbeitrag 2026) anlegen, damit Rechnungen gruppiert sind.                               | High     | Implemented |
| FR-064 | Rechnungen generieren    | Als Club-Admin möchte ich Rechnungen pro Mitglied aus Team-Jahresbeiträgen und Zuschlägen/Abzügen generieren, damit die Beiträge fakturiert werden. | High     | Implemented |
| FR-065 | Rechnung versenden       | Als Club-Admin möchte ich Rechnungen (erneut) versenden, damit Mitglieder die Rechnung per E-Mail erhalten.                                        | High     | Implemented |
| FR-066 | Zahlungserinnerung       | Als Club-Admin möchte ich Zahlungserinnerungen senden, damit offene Rechnungen beglichen werden.                                                   | Medium   | Implemented |
| FR-067 | Rechnung als bezahlt markieren | Als Club-Admin möchte ich Rechnungen als bezahlt markieren (Zahlungsdatum, Zahler), damit der Zahlungsstatus stimmt.                         | High     | Implemented |
| FR-068 | Rechnungspositionen bearbeiten | Als Club-Admin möchte ich Rechnungspositionen einzeln bearbeiten, damit Spezialfälle abgebildet werden.                                      | Medium   | Implemented |
| FR-069 | Swiss QR-Rechnung        | Als Club-Admin möchte ich pro Rechnung einen Swiss-QR-Einzahlungsschein (mit QR-Referenz inkl. Prüfziffer) erzeugen, damit Mitglieder einfach bezahlen. | High     | Implemented |
| FR-070 | Eigene Rechnungen einsehen | Als Mitglied möchte ich meine eigenen Rechnungen inkl. QR-Einzahlungsschein einsehen, damit ich weiss, was ich zu bezahlen habe.                 | High     | Implemented |

### 1.12 J+S-Integration (PRO-Modul)

| ID     | Title       | User Story                                                                                                                                                    | Priority | Status      |
| ------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-071 | J+S-Exporte | Als Team-Admin möchte ich Trainings, Wettkämpfe, Anwesenheiten und Personendaten im J+S-/AWK-CSV-Format exportieren, damit die Meldung an J+S ohne Doppelerfassung erfolgt. | Medium   | Implemented |

### 1.13 Abo- & Modulverwaltung

| ID     | Title              | User Story                                                                                                                             | Priority | Status      |
| ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| FR-072 | Abo abschliessen   | Als Club-Admin möchte ich ein Abo (micro/small/medium/large) via Stripe-Checkout abschliessen, damit der Verein myclub nutzen kann.      | High     | Implemented |
| FR-073 | Add-ons kaufen     | Als Club-Admin möchte ich Zusatzmodule (Meisterschaft, Helfer, PRO) als Add-on kaufen, damit der Verein nur bezahlt, was er braucht.     | High     | Implemented |
| FR-074 | Abo-Status einsehen | Als Club-Admin möchte ich aktive und inaktive Abos inkl. Rechnungen einsehen, damit ich den Vertragsstand kenne.                        | Medium   | Implemented |
| FR-075 | Zugangssperre      | Als System möchte ich bei inaktivem Vereins-Abo den Zugang sperren (Hinweis-Modal), damit nur zahlende Vereine die App nutzen.           | High     | Implemented |

## 2. Nicht-funktionale Requirements (NFR)

| ID      | Title                   | Requirement                                                                                                                    | Category        | Priority | Status      |
| ------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------- | ----------- |
| NFR-001 | Plattformabdeckung      | Eine Codebasis liefert Web/PWA, iOS und Android; alle Funktionen sind auf allen drei Plattformen verfügbar.                        | Portability     | High     | Implemented |
| NFR-002 | Mehrsprachigkeit        | 100 % der UI-Texte liegen in Deutsch, Französisch, Italienisch und Englisch vor (ngx-translate, `src/assets/lang`).                | Usability       | High     | Implemented |
| NFR-003 | Offline-Lesbarkeit      | Zuletzt synchronisierte Daten (News, Termine, Listen) sind ohne Netzverbindung lesbar (Firestore-Offline-Persistenz).              | Availability    | Medium   | Implemented |
| NFR-004 | Transportverschlüsselung | Sämtliche Client-Server-Kommunikation läuft ausschliesslich über TLS (HTTPS/Firebase SDK).                                        | Security        | High     | Implemented |
| NFR-005 | Zugriffsschutz          | Alle Inhalte erfordern ein Konto mit verifizierter E-Mail; Admin-Funktionen erfordern Zugehörigkeit zu `admins` des Vereins/Teams. | Security        | High     | Implemented |
| NFR-006 | Dark Mode               | Die UI folgt automatisch dem System-Theme (hell/dunkel) ohne Neustart.                                                             | Usability       | Low      | Implemented |
| NFR-007 | App-Start               | Kaltstart bis interaktiver News-Feed ≤ 3 Sekunden auf einem 4 Jahre alten Mittelklasse-Smartphone.                                 | Performance     | Medium   | Open        |
| NFR-008 | Listen-Performance      | Listenansichten (Mitglieder, Trainings, News) rendern ≤ 2 Sekunden bei 500 Einträgen.                                             | Performance     | Medium   | Open        |
| NFR-009 | Push-Latenz             | Push-Benachrichtigungen erreichen Geräte ≤ 60 Sekunden nach Auslösung.                                                             | Performance     | Medium   | Open        |
| NFR-010 | Vereinsgrösse           | Ein Verein mit ≥ 500 Mitgliedern, unbegrenzt vielen Teams und Trainings ist ohne Funktionseinschränkung nutzbar.                   | Scalability     | High     | Implemented |
| NFR-011 | Update-Verteilung       | Web-/PWA-Updates stehen nach Deployment beim nächsten App-Start zur Verfügung (Service-Worker-Update-Check mit Nutzerhinweis).     | Maintainability | Medium   | Implemented |

## 3. Constraints (C)

| ID    | Title                  | Constraint                                                                                                                                | Category    | Priority | Status      |
| ----- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- | ----------- |
| C-001 | Frontend-Stack         | Die App wird mit Ionic 8, Angular 21 und Capacitor 8 (TypeScript) entwickelt.                                                                  | Technical   | High     | Implemented |
| C-002 | Backend-Plattform      | Firebase ist die Backend-Plattform: Auth, Firestore (Hauptdatenbank), Storage, Cloud Messaging, Cloud Functions, Hosting; Region `europe-west6`. | Technical   | High     | Implemented |
| C-003 | Zahlungsabwicklung     | Abo-Zahlungen laufen über Stripe mittels Firebase-Extension `firestore-stripe-payments`.                                                       | Technical   | High     | Implemented |
| C-004 | Swiss QR-Bill-Standard | Mitgliederrechnungen erfüllen die SIX Implementation Guidelines für QR-Rechnungen (QR-Referenz mit MOD10-Prüfziffer).                          | Regulatory  | High     | Implemented |
| C-005 | J+S-Formatvorgaben     | J+S-Exporte entsprechen dem vom BASPO vorgegebenen CSV-Format (AWK).                                                                           | Regulatory  | Medium   | Implemented |
| C-006 | Verbands-APIs          | Verbandsdaten (Spielpläne, Ranglisten, News) kommen aus externen Verbands-APIs (u. a. Swiss Unihockey API v2) bzw. dem myclub-GraphQL-Backend.  | Technical   | High     | Implemented |
| C-007 | Browser-Support        | Unterstützt werden die letzten 2 Versionen von Chrome, Firefox, Edge und Safari (inkl. iOS).                                                   | Technical   | Medium   | Implemented |
| C-008 | Lizenz                 | Der Quellcode steht unter der European Union Public Licence (EUPL) v1.2 (Open Source).                                                         | Business    | Medium   | Implemented |
| C-009 | Datenschutz            | Personendaten (inkl. AHV-Nummer, Geburtsdatum) werden nach Schweizer DSG/DSGVO verarbeitet; Speicherung in der Region Zürich (`europe-west6`).  | Regulatory  | High     | Implemented |
| C-010 | Store-Richtlinien      | Die nativen Apps erfüllen die Richtlinien von Apple App Store und Google Play (Review-Prozesse, Push-Berechtigungen, Kontolöschung).            | Operational | High     | Implemented |
| C-011 | White-Label-Builds     | Verbands-/Vereins-Apps werden als separate Angular-Build-Konfigurationen mit eigenem Hosting-Target erzeugt (12 Konfigurationen).               | Technical   | Medium   | Implemented |
| C-012 | Entwicklungsprozess    | Commits folgen Conventional Commits; Formatierung via Prettier/Husky Pre-Commit-Hook.                                                          | Operational | Low      | Implemented |
