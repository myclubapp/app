# myclub app | the next generation 🏆

[![Build + Prerender + Deploy](https://github.com/myclubapp/app/actions/workflows/main.yml/badge.svg)](https://github.com/myclubapp/app/actions/workflows/main.yml)

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

- Ionic Framework 8.7.5
- Capacitor JS 7.4.3
- Angular 20.3.3 & Angular PWA
- Firebase 12.3.0
- RxJS 7.8.2
- TypeScript 5.9.3
- Tailwind CSS
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

#### 🏀 Basketball

- Keine Custom Implementierungen

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

Dieses Projekt ist lizenziert unter [LICENSE NAME] - siehe die [LICENSE](link-to-license) Datei für Details.
