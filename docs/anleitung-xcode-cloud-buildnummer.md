# Buildnummer aus Xcode Cloud in der App anzeigen

Anleitung, um die Venova-Logik (Capacitor + Vite + React) in ein anderes Projekt zu übernehmen.
Ziel: Auf dem Login-Screen steht z. B. `v1.1.5 (108)`, wobei `108` exakt die Buildnummer ist,
die Xcode Cloud vergeben hat und die auch TestFlight / App Store Connect anzeigen.

## Funktionsprinzip

Xcode Cloud vergibt pro Build eine fortlaufende Integer-Buildnummer (Start bei 1, per
„Next Build Number" änderbar). Diese Nummer

1. steht dem Build als Umgebungsvariable **`CI_BUILD_NUMBER`** zur Verfügung (auch im
   Post-Clone-Script), und
2. wird beim Archivieren als **`CFBundleVersion`** des Binaries verwendet — TestFlight und
   App Store zeigen sie als `1.2.1 (42)`.

Daraus ergeben sich zwei Ebenen, die beide bedient werden müssen:

| Ebene | Quelle | Verwendung |
| --- | --- | --- |
| Native Buildnummer (`CFBundleVersion` / `versionCode`) | Xcode Cloud stampt sie beim Archive; lokal aus `project.pbxproj` | Zur Laufzeit via `App.getInfo()` gelesen → Anzeige auf dem Gerät |
| Web-Bundle-Konstante `__APP_BUILD_NUMBER__` | `CI_BUILD_NUMBER` beim `npm run build` im Post-Clone-Script | Fallback im Browser / in Tests, Sentry `release` + `dist` |

**Kernpunkt:** Der eingecheckte Wert `CURRENT_PROJECT_VERSION` in `project.pbxproj` (und damit
jede Compile-Time-Konstante aus `package.json`) ist auf Xcode Cloud veraltet. Die App darf die
Buildnummer deshalb nicht einkompilieren, sondern muss sie auf dem Gerät zur Laufzeit aus dem
nativen Bundle lesen. Die Vite-Konstante ist nur der Fallback für Web/Tests und der Wert für
Sentry.

## Schritte

### 1. Info.plist auf Build-Settings verweisen (Voraussetzung)

`ios/App/App/Info.plist` muss die Werte aus den Build-Settings beziehen, nicht fest verdrahtet:

```xml
<key>CFBundleShortVersionString</key>
<string>$(MARKETING_VERSION)</string>
<key>CFBundleVersion</key>
<string>$(CURRENT_PROJECT_VERSION)</string>
```

Das Capacitor-Template macht das standardmässig. Version und Buildnummer werden dann in Xcode
unter Target → General → Identity gepflegt und landen als `MARKETING_VERSION` /
`CURRENT_PROJECT_VERSION` in `project.pbxproj` (in **allen** Konfigurationen, Debug + Release).

### 2. Post-Clone-Script für Xcode Cloud anlegen

Xcode Cloud checkt nur das Repo aus; `dist/` ist gitignored. Der Web-Build muss deshalb auf
Xcode Cloud selbst laufen, bevor Xcode archiviert — genau dort ist `CI_BUILD_NUMBER` gesetzt.

Pfad: **`ios/App/ci_scripts/ci_post_clone.sh`**. Der Ordner `ci_scripts` muss im selben
Verzeichnis liegen wie `.xcodeproj` / `.xcworkspace` (bei Capacitor also `ios/App/`), nicht im
Repo-Root. Xcode Cloud erkennt ihn automatisch.

```bash
#!/bin/bash
set -e

# Node passend zu package.json "engines" pinnen — ein ungepinntes `brew install node`
# liefert die neueste Major-Version und bricht mit EBADENGINE ab.
export HOMEBREW_NO_AUTO_UPDATE=1
export HOMEBREW_NO_INSTALL_CLEANUP=1
brew install node@24

# node@24 ist keg-only und wird nicht automatisch verlinkt
export PATH="$(brew --prefix node@24)/bin:$PATH"

# npm-Version ebenfalls an "engines" angleichen
npm install -g npm@11

node --version
npm --version

# ins Repo-Root wechseln (dort liegt package.json)
cd "$CI_PRIMARY_REPOSITORY_PATH"

npm ci
npm run build        # CI_BUILD_NUMBER ist hier gesetzt → fliesst in vite.config.ts
npx cap sync ios     # kopiert dist/ nach ios/App/App/public und aktualisiert Plugins

# nur bei CocoaPods statt SPM:
# cd ios/App && pod install
```

Ausführbar machen und committen (git speichert das Execute-Bit):

```bash
chmod +x ios/App/ci_scripts/ci_post_clone.sh
git add ios/App/ci_scripts/ci_post_clone.sh
```

Ohne Shebang in der ersten Zeile oder ohne Execute-Bit führt Xcode Cloud das Script nicht wie
erwartet aus.

### 3. Buildnummer im Web-Build ableiten (`vite.config.ts`)

`CI_BUILD_NUMBER` muss gewinnen, wenn es gesetzt ist. Lokal dienen die nativen Projekte als
Quelle — aber nur, wenn alle Stellen übereinstimmen; sonst `local`.

```ts
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import { version } from './package.json'; // braucht "resolveJsonModule": true in tsconfig

// Lokal: native Projekte sind die Quelle — nur wenn iOS (alle Konfigurationen) und Android
// übereinstimmen. Drift soll als Warnung sichtbar werden, nicht hinter einem Rateversuch.
function nativeBuildNumber(): string | undefined {
  try {
    const pbx = readFileSync('ios/App/App.xcodeproj/project.pbxproj', 'utf8');
    const ios = Array.from(pbx.matchAll(/CURRENT_PROJECT_VERSION = (\d+);/g), (m) => m[1]);
    const android = readFileSync('android/app/build.gradle', 'utf8').match(
      /versionCode (\d+)/,
    )?.[1];
    const values = new Set(ios);
    if (android !== undefined) values.add(android);
    if (values.size === 1) return values.values().next().value;
    console.warn(
      `[version] native build numbers diverge (iOS: ${ios.join('/') || 'n/a'}, Android: ` +
        `${android ?? 'n/a'}) — using 'local'. Run \`npm run version:bump\` to realign.`,
    );
  } catch {
    // Native Projekte nicht im Checkout — Fallback 'local'.
  }
  return undefined;
}

// Xcode Cloud stampt CFBundleVersion mit seiner Buildnummer und setzt CI_BUILD_NUMBER im
// Post-Clone-Script — dieser Wert muss gewinnen, damit __APP_BUILD_NUMBER__ (und Sentry
// release/dist) zum Binary passen. 'local' markiert einen Build ohne beide Quellen.
const buildNumber = process.env.CI_BUILD_NUMBER ?? nativeBuildNumber() ?? 'local';

export default defineConfig({
  // ...
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __APP_BUILD_NUMBER__: JSON.stringify(buildNumber),
  },
});
```

Minimalvariante ohne den lokalen Abgleich: `process.env.CI_BUILD_NUMBER ?? 'local'`.

### 4. Typdeklaration und Vitest-Pendant

`src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

declare const __APP_VERSION__: string;
declare const __APP_BUILD_NUMBER__: string;
```

`vitest.config.ts` — ohne diese Defines wirft jede Komponente, die die Version anzeigt, im Test
einen `ReferenceError`:

```ts
export default defineConfig({
  // ...
  define: {
    __APP_VERSION__: JSON.stringify('0.0.0-test'),
    __APP_BUILD_NUMBER__: JSON.stringify('0'),
  },
});
```

### 5. Hook: Version zur Laufzeit aus dem nativen Bundle lesen

Voraussetzung: `@capacitor/app` installiert (`npm i @capacitor/app && npx cap sync`).
`App.getInfo()` liefert auf iOS `CFBundleShortVersionString` / `CFBundleVersion`, auf Android
`versionName` / `versionCode`.

```ts
// src/application/hooks/useAppVersion.ts
/**
 * App-Version für die Anzeige (Login, Menü).
 *
 * Auf dem Gerät kommen Version und Buildnummer aus dem nativen Bundle — Xcode Cloud stampt
 * die iOS-Buildnummer pro Build, die Compile-Time-Konstante wäre dort veraltet. Im Web gibt
 * es keine native Schicht, dort bleiben die Vite-Konstanten der einzige (und korrekte) Wert.
 */
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { useEffect, useState } from 'react';

export interface AppVersionInfo {
  version: string;
  build: string;
}

export function useAppVersion(): AppVersionInfo {
  const [info, setInfo] = useState<AppVersionInfo>({
    version: __APP_VERSION__,
    build: __APP_BUILD_NUMBER__,
  });

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    App.getInfo()
      .then(({ version, build }) => setInfo({ version, build }))
      .catch(() => {
        // Plugin nicht verfügbar — Vite-Konstanten bleiben stehen.
      });
  }, []);

  return info;
}
```

### 6. Anzeige auf der Login-Seite

```tsx
import { useAppVersion } from '../../application/hooks/useAppVersion';

export function LoginPage() {
  const appVersion = useAppVersion();
  // ...
  return (
    // ...
    <div className="login-footer">
      <IonText color="medium">
        <small>
          Firma AG{' · '}v{appVersion.version} ({appVersion.build})
        </small>
      </IonText>
    </div>
  );
}
```

Dasselbe Muster für weitere Stellen (z. B. Side-Menu-Footer).

### 7. Xcode Cloud Workflow einrichten

1. In Xcode: Product → Xcode Cloud → Create Workflow (oder Integrate → Create Workflow).
2. Workflow mit **Archive**-Action und Distribution **TestFlight (Internal/External)** bzw.
   App Store anlegen — nur bei diesen Builds ist die Xcode-Cloud-Buildnummer für Tester sichtbar.
3. Start-Bedingung wählen (z. B. Branch `main` oder Tag).
4. Optional **Next Build Number** setzen, wenn bereits Builds mit höheren Nummern existieren
   (z. B. aus früheren lokalen Uploads): App Store Connect → App → Tab *Xcode Cloud* →
   *Settings* → Tab *Build Number* → *Edit* neben *Next Build Number*. Nur Admin / App Manager.
   Für iOS/iPadOS ist eine niedrigere Nummer bei neuer Version zwar erlaubt (Version +
   Buildnummer müssen nur zusammen eindeutig sein), zur Klarheit aber besser oberhalb der letzten
   Nummer starten.
5. Optional Environment-Variablen im Workflow setzen (z. B. `SENTRY_AUTH_TOKEN` als Secret,
   falls Source Maps hochgeladen werden).

### 8. Optional: lokale Buildnummer konsistent halten (Bump-Script)

Lokale Builds (`npm run app:ios`, `npm run app:android`) nehmen weiterhin die eingecheckten
Werte. Damit iOS Debug/Release und Android nie auseinanderlaufen, setzt ein Script alle Stellen
gemeinsam (`CURRENT_PROJECT_VERSION` in allen Konfigurationen, `versionCode`):

```json
"scripts": {
  "version:bump": "node scripts/bump-build-number.mjs"
}
```

```
npm run version:bump          # +1 (verlangt, dass alle Stellen aktuell übereinstimmen)
npm run version:bump -- 108   # expliziten Wert setzen
```

Das Script `scripts/bump-build-number.mjs` aus Venova kann 1:1 kopiert werden; es ersetzt per
Regex `CURRENT_PROJECT_VERSION = N;` in `ios/App/App.xcodeproj/project.pbxproj` und
`versionCode N` in `android/app/build.gradle`. Die **Version** (`package.json` `version`,
`MARKETING_VERSION`, `versionName`) wird weiterhin von Hand gleichgezogen.

### 9. Optional: Sentry `release` / `dist` angleichen

Wenn Sentry im Spiel ist, müssen SDK-Init und Build-Plugin dieselben Werte verwenden, sonst
ordnet Sentry die Source Maps nicht zu:

| Wert | Quelle | Beispiel |
| --- | --- | --- |
| `release` | `<app>@<version>+<buildNumber>` | `my-app@1.1.5+88` |
| `dist` | `buildNumber` | `88` |

```ts
// vite.config.ts (sentryVitePlugin)
release: { name: `my-app@${version}+${buildNumber}`, dist: buildNumber },

// SDK-Init
release: `my-app@${__APP_VERSION__}+${__APP_BUILD_NUMBER__}`,
dist: __APP_BUILD_NUMBER__,   // bewusst fest, nicht von @sentry/capacitor ableiten lassen
```

## Verifikation

1. Commit pushen → Xcode Cloud Build startet, im Build-Log muss die Ausgabe von
   `ci_post_clone.sh` erscheinen (Node-Version, `npm run build`, `cap sync`).
2. Buildnummer im Xcode-Cloud-Tab in App Store Connect notieren (z. B. `42`).
3. Build via TestFlight installieren → Login-Footer zeigt `v<Version> (42)`.
4. Im Browser (`npm run dev`) zeigt der Footer den eingecheckten pbxproj-Wert oder `local`.

## Stolpersteine

- `ci_scripts` im Repo-Root statt neben dem `.xcodeproj` → Script läuft nie.
- Execute-Bit oder Shebang fehlt → Script wird nicht (korrekt) ausgeführt.
- `brew install node` ohne Pin → neuere Major-Version als `engines` erlaubt → `EBADENGINE`.
- Lokale Buildnummer wird nach einem Xcode-Cloud-Build nicht automatisch nachgezogen — sie ist
  nur für lokale iOS- und alle Android-Builds relevant (Android kennt keine Xcode-Cloud-Stampung).
- `App.getInfo()` gibt es nur nativ; im Browser bleibt der Vite-Fallback stehen (deshalb der
  `isNativePlatform()`-Guard und der `catch`).
- Dead-Code-Linter (Knip) meldet den Hook, solange ihn keine Komponente verwendet.
- `import { version } from './package.json'` braucht `resolveJsonModule` in der tsconfig, die
  `vite.config.ts` abdeckt.

## Referenz: Dateien im Venova-Projekt

| Datei | Zweck |
| --- | --- |
| `ios/App/ci_scripts/ci_post_clone.sh` | Node pinnen, `npm ci`, `npm run build`, `cap sync ios` auf Xcode Cloud |
| `vite.config.ts` | `buildNumber = CI_BUILD_NUMBER ?? nativeBuildNumber() ?? 'local'`, `define` |
| `src/vite-env.d.ts` | Typdeklaration der Konstanten |
| `vitest.config.ts` | Test-Defines |
| `src/application/hooks/useAppVersion.ts` | Laufzeit-Lesen via `App.getInfo()` mit Web-Fallback |
| `src/presentation/pages/LoginPage.tsx`, `src/presentation/components/SideMenu.tsx` | Anzeige `v{version} ({build})` |
| `scripts/bump-build-number.mjs` | Lokale Buildnummer in pbxproj + build.gradle synchron setzen |
| `src/monitoring/sentry.ts` | `release` / `dist` aus den Konstanten |
| `docs/monitoring.md` | Doku zu Release/Dist und Buildnummer |
| `ios/App/App/Info.plist` | `$(MARKETING_VERSION)` / `$(CURRENT_PROJECT_VERSION)` |
