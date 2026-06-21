# Migrationsplan: Google Maps → SwissTopo (ngx-maplibre-gl)

Branch: `feat/swisstopo-maps`
Angular-Wrapper: [`@maplibre/ngx-maplibre-gl`](https://github.com/maplibre/ngx-maplibre-gl)
Referenz für die SwissTopo-Technik: venova-app (`Just-Schweiz-AG/venova-app`), `src/presentation/components/CustomerMapModal.tsx`

## Ziel

Die Google-Maps-Integration (`@capacitor/google-maps`) durch eine SwissTopo-Karte
ersetzen – auf Basis von **MapLibre GL**, eingebunden über den offiziellen
Angular-Wrapper **ngx-maplibre-gl** (deklarative `<mgl-map>`-Komponenten).

## Warum

- **Kein API-Key nötig** – swisstopo Vector Tiles (geo.admin.ch / BGDI) sind gratis.
- **Amtliches Schweizer Kartenmaterial** statt Google.
- Rendering im Webview (WebGL) statt nativem Plugin → entfernt native iOS/Android-SDK-Konfig
  und die Quirks, wegen denen die Karte heute auf Android deaktiviert ist.
- **ngx-maplibre-gl** statt rohes maplibre-gl: deklarative Angular-Komponenten
  (`<mgl-map>`, `<mgl-marker>`, `<mgl-control>`), automatisches Lifecycle-Handling,
  kein manuelles `ViewChild`/`destroy()` mehr.

## Versionskompatibilität (geprüft)

| Paket | Anforderung | Projekt | Status |
|---|---|---|---|
| `@maplibre/ngx-maplibre-gl` | latest `21.0.2` (folgt Angular-Versionierung) | – | installieren |
| `@angular/core` | `>= 21.0.0` | `21.2.17` | ✅ |
| `maplibre-gl` (peer) | `>= 5.15.0` | – | installieren |
| `rxjs` (peer) | `>= 7.8.1` | vorhanden | ✅ |

## SwissTopo-Technik aus venova (Werte übernehmen)

- Style-URL: `https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json`
- Attribution: „© swisstopo"
- Eigener Standort: via `@capacitor/geolocation` (nicht der mglGeolocate-Browser-Control)
  als eigener Marker – robuster auf Capacitor-Native (so macht es venova).
- Navigation: `openAddressInMaps()` – plattform-spezifisch:
  - iOS: `maps:?q=<adresse>`
  - Android: `geo:0,0?q=<adresse>`
  - Web: `https://maps.google.com/?q=<adresse>`

## Heutige Google-Maps-Stellen (zu ersetzen)

1. `src/app/services/map.service.ts` – `createMap()`, `openMapsNavigation()`, `checkGeolocationPermission()`
2. `src/app/pages/championship/championship-detail/championship-detail.page.{ts,html,scss}` (+ `.module.ts`)
3. `src/app/pages/championship/club-game-preview/club-game-preview.page.{ts,html,scss}` (+ `.module.ts`)
4. Config/Assets: `googleMapsApiKey` in `environment.ts` + `environment.prod.ts`,
   scss `capacitor-google-map`, `assets/license.json`, native SDK-Konfig (iOS/Android)
5. Tests: `*.page.spec.ts` mit MapService/GoogleMap-Mocks

## Architektur-Wechsel: imperativ → deklarativ

**Heute:** `MapService.createMap(mapRef)` erzeugt eine `GoogleMap` in einer `@ViewChild`-ElementRef,
fügt Marker hinzu; Page ruft `setMap()` in `ionViewDidEnter`, `newMap.destroy()` in `ngOnDestroy`.

**Neu:** `<mgl-map>` direkt im Page-Template mit Bindings; Marker als `<mgl-marker>`.
ngx-maplibre-gl übernimmt Erzeugung/Zerstörung automatisch (Map verschwindet mit dem `@if`).
→ `@ViewChild`, `setMap()`, `ionViewDidEnter`-Map-Logik und `ngOnDestroy`-`destroy()` entfallen.

`MapService` schrumpft auf: `openMapsNavigation()` (→ venova-Adressmuster) und optional
`checkGeolocationPermission()` für die Native-Standortabfrage.

## Schritte

### 0. Vorbereitung
- [ ] Branch `feat/swisstopo-maps` (erledigt)

### 1. Dependencies
- [ ] `npm i @maplibre/ngx-maplibre-gl maplibre-gl`
- [ ] MapLibre-CSS global einbinden (`maplibre-gl/dist/maplibre-gl.css` in `global.scss` bzw. `angular.json` styles)
- [ ] `NgxMapLibreGLModule` in den jeweiligen Page-Modulen importieren
      (`championship-detail.module.ts`, `club-game-preview.module.ts`)

### 2. Page-Templates auf `<mgl-map>` umstellen (beide Pages)
- [ ] `<capacitor-google-map #map>` ersetzen durch:
  ```html
  @if (game.latitude && game.longitude) {
    <mgl-map
      class="venue-map"
      [style]="'https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json'"
      [zoom]="[14]"
      [center]="[+game.longitude, +game.latitude]">
      <!-- Spielort -->
      <mgl-marker [lngLat]="[+game.longitude, +game.latitude]"></mgl-marker>
      <!-- eigener Standort (optional, aus @capacitor/geolocation) -->
      @if (ownPosition) {
        <mgl-marker [lngLat]="ownPosition">
          <div class="own-position-marker"></div>
        </mgl-marker>
      }
    </mgl-map>
  }
  ```
- [ ] Android-Bedingung (`!platform.is('android')`) entfernen → Karte überall anzeigen
- [ ] scss: `capacitor-google-map { … }` → `.venue-map { display:block; width:100%; height:300px; }`
      und Stil für `.own-position-marker` (blauer Punkt, aus venova-scss)

### 3. Page-`.ts` aufräumen (beide Pages)
- [ ] `import { GoogleMap } …` und `@ViewChild("map") mapRef`, `newMap: GoogleMap` entfernen
- [ ] `setMap()`, Map-Logik in `ionViewDidEnter`, `newMap.destroy()` in `ngOnDestroy` entfernen
- [ ] Optional `ownPosition: [number, number]` via `@capacitor/geolocation` in `ngOnInit` laden
- [ ] `openMaps(game)` weiter über `MapService` (jetzt Adressmuster)

### 4. `map.service.ts` umbauen
- [ ] `createMap()` entfernen (deklarativ ersetzt)
- [ ] `openMapsNavigation()` → venova `openAddressInMaps()` (iOS `maps:?q=` / Android `geo:0,0?q=` / Web)
- [ ] `checkGeolocationPermission()` beibehalten (für Native-Standort)
- [ ] `@capacitor/google-maps` / `GoogleMap`-Importe entfernen

### 5. Cleanup
- [ ] `googleMapsApiKey` aus `environment.ts` + `environment.prod.ts` entfernen
- [ ] `@capacitor/google-maps` deinstallieren, `npx cap sync`
- [ ] Native Google-Maps-SDK-Konfig prüfen/entfernen (iOS `AppDelegate`/`Info.plist`, Android `AndroidManifest`/`build.gradle`)
- [ ] `assets/license.json` aktualisieren (Google Maps raus, swisstopo/MapLibre rein)
- [ ] Spec-Files anpassen (MapService/GoogleMap-Mocks → ohne createMap)

## Zu berücksichtigen

- **Attribution-Pflicht**: „© swisstopo" muss sichtbar sein (Nutzung gratis, Attribution Bedingung).
- **Offline**: Vector Tiles laden live → ohne Netz leere Karte. Optional venovas Offline-Toast übernehmen
  (via `(mapError)` / Timeout auf `(mapLoad)`).
- **Bundle-Grösse**: maplibre-gl + Wrapper ~200 KB gzip zusätzlich; dafür entfällt das native Plugin.
- **Rendering-Modell**: WebGL-Canvas im Webview statt nativer View hinter Webview → behebt Android-Problematik.
- **Geolocation auf Native**: Den `mglGeolocate`-Control meiden (nutzt Browser-`navigator.geolocation`);
  stattdessen `@capacitor/geolocation` + eigener `<mgl-marker>` (venova-Ansatz, verlässlich auf iOS/Android).
- **Kein Clustering nötig**: nur ein Spielort pro Karte (venova clustert viele Kunden).

## Was wegfällt
- Google-spezifische Layer (Street View, Google POIs, Verkehr) – aktuell nicht genutzt.
- Natives `<capacitor-google-map>` Element + imperative Map-API (`@ViewChild`, `createMap`, `destroy`).

## Entscheidungen
- Karten-Wrapper: **ngx-maplibre-gl** (deklarativ).
- Navigation: **venova-Muster** (`openAddressInMaps`, plattform-spezifisch).
- Umsetzung: vorerst nur dieser Plan; Implementierung auf Freigabe.
