# Implementation Guidelines — myclub

> Dieses Dokument wird mit dem Plugin `ai-architect-dev-tools` gepflegt (Skill: `/ai-guidelines`).
> Es ist verbindlich für jede Implementierung — Implementierungspläne (`/ai-implement-use-case`) referenzieren es.
> Stand: 2026-07-17. Ionic- und Angular-Regeln wurden gegen die offizielle Dokumentation (Context7) geprüft;
> Regeln zu ngx-translate, AngularFire und MapLibre basieren auf dem Codebase-Scan.

## UI Components

### Component Library

**Ionic 8 (`@ionic/angular` 8.8.11)** ist die UI-Bibliothek. Alle Views bestehen aus Ionic-Komponenten
(`ion-list`, `ion-item`, `ion-modal`, `ion-toggle`, …); Icons via Ionicons und FontAwesome
(`@fortawesome/angular-fontawesome`). Konfiguration: `src/global.scss` (Ionic-Bundle-CSS) und
`src/theme/variables.scss`.

**Kein Tailwind CSS** — die Angabe im README ist veraltet; es gibt weder eine Dependency noch eine Config.

### Reuse Before Build

Neue UI wird aus Ionic-Komponenten und bestehenden Projekt-Komponenten zusammengesetzt. Eine neue geteilte
Komponente ist nur erlaubt, wenn **keine bestehende Komponente den Bedarf abdeckt** — und braucht
**explizite Freigabe des Projektinhabers** (Projektentscheid, 2026-07-17).

- Neue geteilte Komponenten liegen unter `src/app/components/`
- Seitenspezifische UI bleibt in der jeweiligen Page unter `src/app/pages/`

### Existing Component Inventory

| Component      | Path                                | Purpose / When to use                                                    |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| StatusIcon     | `src/app/components/status-icon`    | Zu-/Absage-Status als Symbol (Trainings, Spiele, Events, Schichten).      |
| UserListItem   | `src/app/components/user-list-item` | Mitglieder-Zeile in Listen (Avatar, Name, Kontext-Infos).                 |

### Standard UI Patterns

| Pattern             | Standard                                                                                                   | Reference Implementation                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Detail-Ansichten    | Modal via `ModalController` mit `presentingElement` (Card-Modal), nicht als eigene Route                    | `src/app/pages/club/club.page.ts`               |
| Erfolg/Fehler-Toast | `UiService.showSuccessToast` / `showErrorToast` — nie `ToastController` direkt in Pages                     | `src/app/services/ui.service.ts`                |
| Formular-Dialoge    | `UiService.showFormDialog` (AlertController-Wrapper); Werte immer aus `data.values` lesen                   | `src/app/pages/helfer/helfer-add/helfer-add.page.ts` (`addSchicht`) |
| Listen-Aktionen     | `ion-item-sliding` mit `ion-item-options` (Start: Status, Ende: destruktive Aktionen)                       | `src/app/pages/training/trainings/trainings.page.html` |
| Gruppierte Listen   | `ion-list [inset]="true"` mit `ion-list-header`                                                            | `src/app/pages/club-invoice-detail/club-invoice-detail.page.html` |

## Styling

- **Approach:** Ionic-Theming über CSS Custom Properties. Globale Tokens in `src/theme/variables.scss`,
  komponentenbezogene Anpassungen über die dokumentierten `--`-Properties der Ionic-Komponenten in der
  jeweiligen `.page.scss`. Dark Mode folgt dem System-Theme.
- **Design tokens / theme:** `src/theme/variables.scss` (Basis) und pro White-Label-Brand
  `src/custom-themes/{brand}/variables.scss` (per Build-Konfiguration in `angular.json` eingebunden).
- **Design reference:** Keine externe Referenz (Projektentscheid, 2026-07-17) — es gilt der Ionic-Standard-Look
  plus die Farbwerte des jeweiligen Brand-Themes.

### Forbidden

Alle Punkte sind Projektentscheide (2026-07-17) und wurden als bestehende Verstösse im Code identifiziert —
Bestand wird bei Gelegenheit bereinigt, neuer Code hält die Regeln strikt ein:

- **Inline-Styles und hartkodierte Farben** (`style="color: #ff8ea3"`, Hex-Werte in Templates/SCSS) —
  immer Ionic-CSS-Variablen bzw. Theme-Tokens verwenden. (Bestehender Verstoss: `news.page.html`)
- **Hartkodierte UI-Texte** — jeder benutzersichtbare String läuft über ngx-translate (siehe unten).
  (Bestehende Verstösse: ~67 deutsche Strings in `src/app/pages/`, z. B. Toasts und Alert-Header)
- **Deutsche Identifier in neuem Code** — neue Felder, Klassen, Methoden und Dateinamen sind Englisch
  gemäss Glossar. Bestehende deutsche Identifier (`Veranstaltung`, `Schicht`, `jahresbeitragWert`) bleiben,
  bis das jeweilige Modul refactored wird.
- **`!important` in SCSS** — stattdessen die CSS-Custom-Properties der Ionic-Komponenten überschreiben.
  (Bestehender Verstoss: `src/global.scss`)
- **Semantische Farben als Dekoration** — `danger`/`warning`/`success` sind Status-Feedback (Validierung,
  Toasts, Alerts) vorbehalten.

## Library-Specific Rules

| Library                  | Version  | Rule                                                                                                                       | Source                          |
| ------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `@ionic/angular`         | 8.8.11   | Theming ausschliesslich über CSS Custom Properties (`variables.scss`, komponentenbezogene `--`-Props) — keine Overrides von Komponenten-Interna, kein `!important`. | Offizielle Docs (Context7)      |
| `@angular/core`          | 21.2.17  | **Standalone Components sind Pflicht für neuen Code**; bestehende NgModules werden aktiv migriert (`ng generate @angular/core:standalone`). Kein explizites `standalone: true` nötig (Default seit v20). | Offizielle Docs (Context7) + Projektentscheid (2026-07-17) |
| `@ngx-translate/core`    | 16.0.4   | Alle UI-Strings über `translate`-Pipe/`TranslateService`; Keys in **allen vier** Locale-Dateien; keine Inline-Fallback-Texte. | Codebase-Scan                   |
| `@angular/fire`          | 20.0.1   | Firestore-Zugriffe nur in Services (`src/app/services/`, `src/app/services/firebase/`) — nie direkt in Pages/Components.     | Codebase-Scan                   |
| `@maplibre/ngx-maplibre-gl` | 21.0.2 | Karten über `MapService` und `src/app/styles/_map.scss` — keine Map-Initialisierung in Pages.                                | Codebase-Scan                   |

**Bekannte Abweichung:** Das Projekt ist durchgängig NgModule-basiert; Angular empfiehlt Standalone.
Beschluss (2026-07-17): **aktive Migration** — neue Pages/Komponenten entstehen standalone, bestehende
Module werden schrittweise migriert (eigenes Arbeitspaket).

## Project Structure & Architecture

| Layer / Folder                    | Contains                                                       | New files go here when …                                  |
| --------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------- |
| `src/app/pages/`                  | Eine Unterordner pro View (`*.page.ts/html/scss/spec.ts`)      | eine neue View/Route entsteht                             |
| `src/app/components/`             | Geteilte UI-Komponenten                                        | UI in ≥2 Pages gebraucht wird **und Freigabe vorliegt**    |
| `src/app/services/`               | App-weite Services (Auth, UI, Export, Karten, Verbands-APIs)   | Logik nicht Firestore-CRUD ist                            |
| `src/app/services/firebase/`      | Firestore-Zugriffsservices pro Domäne (training, event, …)     | neue Firestore-Collections/Domänen erschlossen werden      |
| `src/app/models/`                 | TypeScript-Interfaces der Entitäten (vgl. `docs/entity_model.md`) | eine neue Entität entsteht                             |
| `src/app/guards/`                 | Routen-Guards                                                  | Zugriffsschutz für Routen gebraucht wird                  |
| `src/theme/`, `src/custom-themes/` | Design-Tokens, White-Label-Themes                             | Farb-/Theme-Werte geändert werden                         |
| `src/assets/lang/`                | Locale-Dateien `de/en/fr/it.json`                              | UI-Strings hinzukommen (immer alle vier Dateien)          |

## Naming & Language

### Language Rules

- **Code ist immer Englisch** — Datei- und Ordnernamen, Funktionen, Variablen, Interfaces, Typen,
  Komponenten, Services, CSS-Klassen, i18n-Keys und Test-Dateinamen. Das gilt, obwohl die Arbeitssprache
  des Teams Deutsch ist.
- **Dokumentation** (dieses Dokument, Requirements, Use-Case-Specs) ist Deutsch (Schweizer Rechtschreibung).
- **Domänenbegriffe** im Code folgen dem Glossar unten. Keine Ad-hoc-Übersetzungen — das Glossar wird im
  selben Change erweitert.
- **UI-Strings** nie hartkodieren: jeder benutzersichtbare String läuft über ngx-translate mit Keys in
  **allen** vier Locales (`de`, `en`, `fr`, `it`), ohne Inline-Fallback-Texte. Sprachauflösung:
  Profilsprache > Gerätesprache > `de`.
- **Booleans** heissen `is*` / `has*` / `should*` / `can*` (Bestand: `isAdmin`, `hasFeatureChampionship`).

### Naming Conventions

- **Files:** kebab-case mit Rollen-Suffix — `*.page.ts`, `*.service.ts`, `*.component.ts`, `*.spec.ts`
  (`*.module.ts` läuft mit der Standalone-Migration aus)
- **Klassen/Interfaces:** PascalCase (`ClubInvoiceDetailPage`, `TrainingService`, `Profile`)
- **Observables:** `$`-Suffix (`clubAdminList$`, `getUser$()`)
- **Services:** Domänenname + `Service`; Firestore-Services unter `services/firebase/`

### Glossary

Verbindliche Zuordnung Domänenbegriff (Deutsch) → Code-Begriff (Englisch). Spalte «Bestand im Code» nennt
abweichende Alt-Identifier, die bis zum Refactoring bleiben.

| Domain Term (Deutsch)   | Code Term (English)   | Bestand im Code                          | Notes                                          |
| ----------------------- | --------------------- | ---------------------------------------- | ---------------------------------------------- |
| Verein                  | club                  | Collection `club`                        | Backend-Trigger nutzt teils fälschlich `clubs` |
| Team / Mannschaft       | team                  | Collection `teams`                       |                                                |
| Mitglied                | member                | `members`                                |                                                |
| Vorstand / Club-Admin   | clubAdmin             | `admins` (Sub-Collection), `clubAdmin`   |                                                |
| Trainer / Team-Admin    | teamAdmin             | `admins` (Sub-Collection), `teamAdmin`   |                                                |
| Elternteil              | parent                | `parents`, `isParent`                    |                                                |
| Kind                    | child                 | `children`, teils `kids`                 | `kids` ist Alt-Bestand — neu immer `child(ren)` |
| Beitrittsanfrage        | joinRequest           | `requests`, `clubRequests`               |                                                |
| Training / Probe        | training              | `trainings`                              | «Probe» ist nur ein i18n-Label für Nicht-Sportvereine |
| Veranstaltung / Event   | event                 | Interface `Veranstaltung`, `events`      | Interface-Name ist Alt-Bestand                 |
| Helfer-Event            | helperEvent           | `HelferEvent`, `helferEvents`            | (to confirm)                                   |
| Schicht                 | shift                 | `Schicht`, `schichten`                   | (to confirm)                                   |
| Helferpunkt             | helperPoint           | `helferPunkte`, `HelferPunkt`            | (to confirm)                                   |
| Jahresbeitrag           | annualFee             | `jahresbeitragWert`, `jahresbeitragWaehrung` | (to confirm)                               |
| Abrechnungsperiode      | invoicePeriod         | `invoicePeriods`                         |                                                |
| Rechnung                | invoice               | `invoices`                               | Statuswert `bezahlt` ist Alt-Bestand (statt `paid`) |
| Rechnungsposition       | invoicePosition       | `positions`                              |                                                |
| Zuschlag / Abzug        | surcharge             | `surcharges`                             | negativer Betrag = Abzug                       |
| Zahlungsempfänger       | creditor              | `creditor`                               | Swiss-QR-Bill-Terminologie                     |
| Anwesenheit / Rückmeldung | attendance          | `attendees`, `countAttendees`            |                                                |
| Spiel                   | game                  | `games`                                  |                                                |
| Rangliste / Tabelle     | ranking               | `ranking/{jahr}/table`                   |                                                |
| Aufstellung             | lineup                | `lineup`                                 |                                                |
| Meisterschaft           | championship          | `championship`                           |                                                |
| Übung                   | exercise              | `exercises`                              |                                                |
| Vereinsfunktion         | role                  | `roles`                                  | frei definierbare Etiketten, kein RBAC         |
| Vereinslink             | clubLink              | `links`, `ClubLink`                      |                                                |
| Verband                 | federation            | `type` (z. B. `swissunihockey`), i18n «Verband» | (to confirm)                            |

## State & Data Access

- **State management:** Kein Store-Framework. Zustand lebt in RxJS-Observables der Services
  (AngularFire-Streams mit `shareReplay`); Pages kombinieren sie mit `combineLatest`/`async`-Pipe.
  Lokale UI-Präferenzen über `@capacitor/preferences` (z. B. News-Filter).
- **Data fetching / API calls:** Sämtliche Firestore-Zugriffe in `src/app/services/firebase/*` bzw.
  `firebase.service.ts`; Verbands-APIs in eigenen Services (`swiss-unihockey.service.ts`).
  Schreiblogik, die Backend-Trigger auslöst (z. B. Rechnungsversand über Status `send`), ist im
  Service zu kapseln und im Use Case (`docs/use_cases/`) zu dokumentieren.

## Compliance Checklist

Vor Abschluss jeder Implementierung prüfen:

- [ ] UI aus bestehenden Ionic-/Projekt-Komponenten gebaut — keine neue geteilte Komponente ohne Freigabe
- [ ] Wiederkehrende UI-Konstrukte folgen den Standard UI Patterns (Modals, Toasts, Formular-Dialoge, Listen)
- [ ] Keine verbotenen Praktiken: keine Inline-Styles/Hex-Farben, kein `!important`, keine semantischen Farben als Deko
- [ ] Neue Dateien gemäss Struktur-Tabelle abgelegt; neue Pages/Komponenten sind Standalone
- [ ] Namen englisch, Domänenbegriffe gemäss Glossar; keine neuen deutschen Identifier
- [ ] Keine hartkodierten UI-Strings — i18n-Keys in `de`, `en`, `fr` und `it` vorhanden, ohne Inline-Fallbacks
- [ ] Datenzugriff über Services; kein Firestore-Aufruf in Pages/Components
