[![Build + Prerender + Deploy](https://github.com/myclubapp/app/actions/workflows/main.yml/badge.svg)](https://github.com/myclubapp/app/actions/workflows/main.yml)

# myclub app | the next generation
myclub App is the way for floorball, handball & volleyball clubs in switzerland to manage their club. Based on real data from swissunihockey, swiss volley and swiss handball association, we generate real value for the users, so they can focus an what matters most, their success!

## Principles
myclub App's architecture follows these principles:
- mobile first
- always bet on the web
the latest version of the app is always available as PWA. In a second stage we also support iOS and Android Apps.

## Backend Data
We use a GraphQL API for Sports Data. Check this [repository](https://github.com/myclubapp/backend).

# Developer
## Create App Icon & Splash Screen
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Icon generator for manifest https://manifest-gen.netlify.app/
- Favicon generator https://www.hoststar.ch/de/tools/favicon-generator
- npm install --global pwa-asset-generator: 
-- LIGHT: pwa-asset-generator ./resources/icon_dark.png -i ./src/index.html -m ./src/manifest.webmanifest --splash-only --dark-mode -p 0%
-- DARK: pwa-asset-generator ./resources/icon.png -i ./src/index.html -m ./src/manifest.webmanifest --splash-only -p 0%  

## Native
- Run ionic capacitor add to add a native iOS or Android project using Capacitor

## Web
- Run ionic serve within the app dpy

## Installed packages
- Tailwind CSS (npm install -D tailwindcss@latest postcss autoprefixer)
- Capacitor JS (V3)
- Ionicframework (V6)
- Angular PWA (ng add @angular/pwa --project _project-name_)
- Apollo Angular (ng add apollo-angular)
- [Angular Localize](https://angular.io/guide/i18n-common-locale-id) 
-- de-CH 	German (Switzerland)
-- fr-CH 	French (Switzerland)
-- it-CH    Italian (Switzerland)
-- en-US    English
- Angular Fire ng add @angular/fire
- Fontawesome Icons
- Ionicons
