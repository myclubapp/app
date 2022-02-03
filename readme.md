[![Build + Prerender + Deploy](https://github.com/myclubapp/app/actions/workflows/main.yml/badge.svg)](https://github.com/myclubapp/app/actions/workflows/main.yml)

# myclub app | the next generation
myclub App is the way for floorball, handball & volleyball clubs in switzerland to manage their club. Based on real data from swissunihockey, swiss volley and swiss handball association, we generate real value for the users, so they can focus an what matters most, their success!

## Principles
myclub App's architecture is follows these principles:
- mobile first
- always bet on the web
the latest version of the app is always available as PWA. In a second stage we also support iOS and Android Apps.

## Backend Data GraphQL API for Sports Data

### Swiss unihockey API
based on this [documentation](https://api-v2.swissunihockey.ch/api/doc/table/overview#return-types)

available [here](https://europe-west6-myclubmanagement.cloudfunctions.net/api/swissunihockey):

### Swiss Volleyball API
based on this [documentation](https://myvolley.volleyball.ch/SwissVolley.wsdl)

available [here](https://europe-west6-myclubmanagement.cloudfunctions.net/api/swissvolley): 

# Developer

## Create App Icon & Splash Screen

- Generate your app icon and splash screens using cordova-res --skip-config --copy

## Native
- Run ionic capacitor add to add a native iOS or Android project using Capacitor

## Web
- Run ionic serve within the app directory to see your app in the browser

## Help
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition

- Go to your new project: cd .\app
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition

## Installed packages
- Tailwind CSS (npm install -D tailwindcss@latest postcss autoprefixer)
- Capacitor JS (V3)
- Ionicframework (V6)
- Angular PWA (ng add @angular/pwa --project _project-name_)
- Apollo Angular (ng add apollo-angular)
