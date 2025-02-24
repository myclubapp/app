# myclub app | the next generation 🏆

[![Build + Prerender + Deploy](https://github.com/myclubapp/app/actions/workflows/main.yml/badge.svg)](https://github.com/myclubapp/app/actions/workflows/main.yml)

## 📱 Übersicht

myclub App ist die moderne Lösung für Unihockey-, Handball-, Volleyball-, Basketball-, Sport- und Turnvereine in der Schweiz. Basierend auf Echtzeit-Daten von swissunihockey, swiss volley und dem swiss handball Verband sowie weiteren Verbändengenerieren wir echten Mehrwert für unsere Nutzer, damit sie sich auf das Wichtigste konzentrieren können - ihren Erfolg!

### 🎯 Prinzipien

- Mobile First
- Web-fokussiert (PWA als primäre Plattform)
- Native Apps für iOS und Android in zweiter Phase

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

- Ionic Framework (v8)
- Capacitor JS (v7)
- Angular v19.1 & Angular PWA
- Firebase 11.3
- RXJS 7.8.1
- Typescipt 5.7.3
- Tailwind CSS
- Fontawesome Icons
- Ionicons v5

### Backend

Wir verwenden eine GraphQL API für Sportdaten. Weitere Details finden Sie in diesem [Repository](https://github.com/myclubapp/backend).

### Entwicklungs-Tools Setup

#### Commit Konventionen

Wir verwenden [conventionalcommits](https://www.conventionalcommits.org/en/) für unsere Commit-Nachrichten.

#### Prettier & Husky

Folgen Sie der [Anleitung](https://typicode.github.io/husky/get-started.html) für die Installation:

```bash
# Installation
npm install --save-dev husky prettier pretty-quick
npx husky init

# Pre-commit Hook in .husky/pre_commit konfigurieren
npx pretty-quick --staged
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

#### 🏑 Unihockey
- Kadetten Unihockey Schaffhausen ([kadetten-unihockey.web.app](https://kadetten-unihockey.web.app))
- UHC Winterthur United ([uhc-win-u.web.app](https://uhc-win-u.web.app)) (White Label im Aufbau)
- STV Spreitenbach ([stv-spreitenbach.web.app](https://stv-spreitenbach.web.app)) (White Label im Aufbau)

#### 🏐 Volleyball
- VBC Schaffhausen ([vbc-schaffhausen.web.app](https://vbc-schaffhausen.web.app)) (White Label im Aufbau)

#### 🤾 Handball
- Kadetten Handball Schaffhausen ([kadetten-handball.web.app](https://kadetten-handball.web.app)) (White Label im Aufbau)

#### 🏋️ Turnverein
- Keine Custom Implementierungen

#### 🏀 Basketball
- Keine Custom Implementierungen

#### 🤝 Verbände
- swissunihockey (White Label im Aufbau)
- swissvolley (White Label im Aufbau)
- swisshandball (White Label im Aufbau)

### Weitere Custom Apps
- Unihockey: [unihockey.web.app](https://unihockey.web.app)

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
