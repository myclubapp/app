# myclub app | the next generation 🏆

[![Build + Prerender + Deploy](https://github.com/myclubapp/app/actions/workflows/main.yml/badge.svg)](https://github.com/myclubapp/app/actions/workflows/main.yml)
[![Coverage](https://myclubapp.github.io/app/coverage/badge.svg)](https://myclubapp.github.io/app/coverage/)

## 📱 Übersicht

myclub ist die moderne Lösung für Vereinsarbeit, die wieder Freude macht. Mit myclub wird aus Pflicht wieder Passion. Digital. Einfach. Gemeinsam.

Wir bieten eine zentrale Plattform für modernes Vereinsmanagement, die alle Vereinsprozesse in einer einzigen App vereint. Mit myclub organisierst du Trainings, Spiele, Events und vieles mehr – flexibel, intuitiv und jederzeit verfügbar. Wenige Klicks. Volle Kontrolle. Maximaler Überblick.

### 🎯 Hauptfunktionen

- Mitgliederverwaltung
- Unlimitierte Teams
- Unlimitierte Trainings
- Unlimitierte Veranstaltungen
- Mehrsprachigkeit
- WordPress Integration
- Push-Benachrichtigungen
- Open Source

### 💰 Preisstruktur

#### Basis-Abos

- **myclub | micro**: CHF 0.00/Monat (für Vereine bis 20 Mitglieder)
- **myclub | small**: CHF 6.90/Monat (für Vereine ab 20-79 Mitglieder)
- **myclub | medium**: CHF 12.90/Monat (für Vereine ab 80-199 Mitglieder)
- **myclub | large**: CHF 24.90/Monat (für Vereine ab 200 Mitglieder)

#### Zusatzmodule

- **🏆 Meisterschafts-Modul**: CHF 5.90/Monat
  - API-Zugriff Verbandsdaten
  - Verbandnews Integration
  - Maps Integration
  - Ergebnisse & Tabellen

- **🤝 Helfer-Modul**: CHF 4.90/Monat
  - Helfer-Events erstellen
  - Schichtplanung
  - Helfer-Punktesystem
  - Helferpunkte Reporting

- **🚀 myclub PRO**: CHF 7.90/Monat
  - J+S Integration
  - Mitglieder-Beitragsverwaltung
  - Newsletter & Reporting
  - Trainingsplanung

### 🎯 Prinzipien

Unsere Strategie basiert auf fünf Hauptprinzipien:

1. **Für Vorstände**: Administrative Entlastung und Überblick
2. **Für Trainer**: Einfache Planung und Teilnehmerverwaltung
3. **Für Spieler**: Immer informiert durch Push-Benachrichtigungen
4. **Für Eltern**: Transparente Kommunikation und einfache Helfer-Koordination
5. **Für Vereine**: Nachhaltige Strukturen für die digitale Zukunft

Unsere Mission ist es, den administrativen Ballast von den Schultern der 375'000 Ehrenamtlichen in Schweizer Sportvereinen zu nehmen. Damit bleibt mehr Zeit für das, was wirklich zählt: Den Sport.

Unsere Vision ist es, in einer Zeit, in der 40% der Vereine Schwierigkeiten haben, Freiwillige zu finden, digitale Lösungen zu schaffen, die Vereinsarbeit wieder attraktiv machen - für alle Generationen.

## 🚀 Installation & Setup

### Voraussetzungen

- Node.js (v20 oder höher)
- npm
- Ionic CLI
- Angular CLI

### Schnellstart

```bash
# Repository klonen
git clone https://github.com/myclubapp/app.git
cd app

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
ionic serve
```

## 💻 Entwicklung

### Tech Stack

- Ionic Framework 8.8.17
- Capacitor JS 8.5.0
- Angular 22.1.1 & Angular PWA
- Firebase 11.10.0
- RxJS 7.8.2
- TypeScript 6.0.3
- Fontawesome 6.7.2
- Ionicons v5

### Backend

Wir verwenden eine GraphQL API für Sportdaten. Weitere Details finden Sie in diesem [Repository](https://github.com/myclubapp/backend).

### Entwicklungs-Tools Setup

#### Commit Konventionen

Wir verwenden [conventionalcommits](https://www.conventionalcommits.org/en/) für unsere Commit-Nachrichten.

#### Prettier & Husky

Folgen Sie der [Anleitung](npm install --save-dev husky) für die Installation:

```bash
# Installation
npm install --save-dev husky prettier pretty-quick
npx husky init

# Pre-commit Hook in .husky/pre_commit konfigurieren
npx pretty-quick --staged

# This tells your system: "Hey, this file is a script that can be executed."
chmod +x .husky/pre-commit

# make some changes
git add .
git commit -m "your new message"
git push
```

#### Asset-Generierung

```bash
# App Icon & Splash Screen Generator Installation
npm install --global pwa-asset-generator

# Light Mode Assets
pwa-asset-generator ./resources/icon.png -i ./src/index.html -m ./src/manifest.webmanifest --splash-only --dark-mode -p 0%

# Dark Mode Assets
pwa-asset-generator ./resources/icon_dark.png -i ./src/index.html -m ./src/manifest.webmanifest --splash-only -p 0%
```

Zusätzliche Tools:

- Icon Generator für Manifest: [Link](https://manifest-gen.netlify.app/)
- Favicon Generator: [Link](https://www.hoststar.ch/de/tools/favicon-generator)

## 🌍 Internationalisierung

Unterstützte Sprachen:

- 🇨🇭 Deutsch (Schweiz)
- 🇨🇭 Französisch (Schweiz)
- 🇨🇭 Italienisch (Schweiz)
- 🇺🇸 Englisch

## 🚀 Deployment

### Web Deployment

Die App ist als PWA verfügbar unter:

- [my-club.app](https://my-club.app)
- [my-club.web.app](https://my-club.web.app)

### White-Label-Apps: eine Quelle der Wahrheit

Alle Apps (myclub, Verbands-Apps, Vereins-Apps) werden aus **einem** Codebase
gebaut und unterscheiden sich nur durch ihr Theme. Verwaltet wird das
ausschliesslich in [`themes.config.json`](themes.config.json):

```json
"app-vbc-schaffhausen": {
  "label": "VBC Schaffhausen",
  "hostingSite": "vbc-schaffhausen",
  "workflow": "main"
}
```

Daraus generiert `npm run themes:sync` die vier Konfigurationsdateien:

| Datei           | generierter Teil                                   |
| --------------- | -------------------------------------------------- |
| `angular.json`  | `architect.build.configurations`                   |
| `package.json`  | alle Scripts mit Präfix `build:` / `build-deploy:` |
| `firebase.json` | `hosting`                                          |
| `.firebaserc`   | `projects.default` + `targets.*.hosting`           |

> ⚠️ **Diese vier Abschnitte nie von Hand editieren.** Änderungen gehören in
> `themes.config.json`, danach `npm run themes:sync`. Der CI-Job `themes:check`
> lässt den Build rot laufen, wenn generierter Stand und Config auseinanderlaufen.

Nicht generiert und weiterhin von Hand gepflegt: die Base-Options in
`angular.json` (Dev-Build), sowie pro Theme `variables.scss`, `index.html`,
`manifest.webmanifest` und die Assets unter `src/custom-themes/<theme>/`.

### Befehle

```bash
# Übersicht aller Apps mit Hosting-Target und URL
npm run themes:list

# Konfigurationen neu generieren / auf Drift prüfen
npm run themes:sync
npm run themes:check

# Bauen
npm run build:app-unihockey          # oder: npx ng build --configuration app-unihockey

# Bauen + deployen
npm run deploy:apps -- app-unihockey app-volleyball
npm run deploy:apps -- --all
npm run deploy:apps -- --all --dry-run   # zeigt nur, was passieren würde
npm run deploy:apps -- prod --skip-build # bestehendes www/ deployen
```

Das Deploy-CLI läuft bewusst **sequenziell** — alle Konfigurationen schreiben
nach `www/`, parallele Builds würden sich gegenseitig überschreiben. In CI läuft
stattdessen pro App ein eigener Runner (siehe unten).

### Neue Vereins-App anlegen

```bash
npm run theme:new -- app-fc-musterhausen \
  --label "FC Musterhausen" \
  --site fc-musterhausen \
  --primary "#1d4ed8" \
  --secondary "#f59e0b"
```

Das legt `src/custom-themes/app-fc-musterhausen/` aus `empty-template` an,
berechnet die Ionic-Farbvarianten (`-rgb`, `-shade`, `-tint`, `-contrast`) nach
Ionic-Formel, füllt `index.html` und `manifest.webmanifest`, trägt die App in
`themes.config.json` ein und synchronisiert die vier Konfigurationsdateien.

Danach von Hand:

1. Firebase-Site anlegen: `npx firebase hosting:sites:create fc-musterhausen`
2. Assets ersetzen unter `src/custom-themes/app-fc-musterhausen/assets/`
   (`logo.png`, `logo_trans.png`, `bg/`, `favicon/`, `icons/`, `splash/`)
3. Dark Mode in `variables.scss` prüfen — generiert werden nur `primary` und
   `secondary`, Hintergründe bleiben auf den Werten der Vorlage
4. `npm run build:app-fc-musterhausen`

Weitere nützliche Flags: `--short-name`, `--contrast`, `--theme-dir`
(bestehendes Theme mitbenutzen statt ein neues anlegen).

### CI/CD

- **`master`** → [main.yml](.github/workflows/main.yml): Unit Tests +
  Drift-Check, danach ein paralleler Deploy-Job pro App. Die Matrix wird zur
  Laufzeit aus `themes.config.json` abgeleitet (`tools/ci-matrix.mjs main`) —
  eine neue App in der Config bekommt automatisch ihren Job, ohne YAML-Änderung.
- **`beta`** → [beta.yml](.github/workflows/beta.yml): Tests + Deploy auf
  `beta-myclub`.
- Einzelne Apps neu deployen ohne Push: Workflow `main` manuell starten
  (_Run workflow_) und im Feld **apps** z. B. `app-unihockey,app-volleyball`
  eintragen. Leer lassen = alle.

### Native Apps

Für iOS/Android Build:

```bash
ionic capacitor add ios
ionic capacitor add android
```

## 💎 MY-CLUB-PREMIUM

Premium-Version mit:

- Eigene Domain
- Individuelles Design
- Massgeschneiderte Funktionen

### Bestehende Premium Implementierungen

#### 🤝 Beispiele für nationale Sportverbände:

- [swiss unihockey](unihockey.web.app)
- [Swiss Volley](swissvolley.web.app)
- [Handball Schweiz](handballschweiz.web.app)
- [Schweizerischer Turnverband](turnverein.web.app)

#### 🏑 Unihockey

- Kadetten Unihockey Schaffhausen ([kadetten-unihockey.web.app](https://kadetten-unihockey.web.app))
- Beispiel: UHC Winterthur United ([uhc-win-u.web.app](https://uhc-win-u.web.app))
- Beispiel: STV Spreitenbach ([stv-spreitenbach.web.app](https://stv-spreitenbach.web.app))

#### 🏐 Volleyball

- Beispiel: VBC Schaffhausen ([vbc-schaffhausen.web.app](https://vbc-schaffhausen.web.app))

#### 🤾 Handball

- Beispiel: Kadetten Handball Schaffhausen ([kadetten-handball.web.app](https://kadetten-handball.web.app))

#### 🏋️ Turnverein

- Keine Custom Implementierungen

#### 🏀 Basketball / ⚽ Fussball

- Keine Implementierungen. Die früheren Platzhalter-Konfigurationen
  `app-basketball` und `app-fussball` wurden entfernt — es gab weder
  Theme-Ordner noch Hosting-Einträge dazu. Neu aufsetzen mit
  `npm run theme:new`.

## 📚 Dokumentation

Ausführliche Dokumentation finden Sie in unserem [Wiki](link-to-wiki).

## 🤝 Beitragen

1. Fork das Projekt
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

Bitte beachte unsere [Contribution Guidelines](link-to-contributing) und [Code of Conduct](link-to-code-of-conduct).

## 📄 Lizenz

Dieses Projekt ist lizenziert unter der **European Union Public Licence (EUPL) v. 1.2** - siehe die [LICENSE](LICENSE) Datei für Details.
