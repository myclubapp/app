# CLAUDE.md

Hinweise für Claude Code in diesem Repository.

## Was das Projekt ist

Ionic/Angular PWA + Capacitor-App für Schweizer Sportvereine. **Ein Codebase,
viele White-Label-Apps** (myclub, Verbands-Apps, Vereins-Apps) — sie
unterscheiden sich ausschliesslich durch ihr Theme unter
`src/custom-themes/<theme>/` und werden auf je eine eigene Firebase-Hosting-Site
deployed.

## ⚠️ Generierte Konfiguration — nicht von Hand editieren

`themes.config.json` ist die **einzige Quelle der Wahrheit** für alle Apps.
Daraus generiert `npm run themes:sync` diese Abschnitte:

| Datei           | generierter Abschnitt                                   |
| --------------- | ------------------------------------------------------- |
| `angular.json`  | `projects.app.architect.build.configurations`           |
| `package.json`  | alle Scripts mit Präfix `build:` / `build-deploy:`      |
| `firebase.json` | `hosting`                                               |
| `.firebaserc`   | `projects.default` + `targets.myclubmanagement.hosting` |

**Regel:** Wenn eine Änderung eine App betrifft (neue App, andere
Hosting-Site, umbenanntes Theme), gehört sie in `themes.config.json` — danach
`npm run themes:sync` ausführen und die generierten Dateien mitcommitten.
Direkte Edits in den obigen Abschnitten gehen beim nächsten Sync verloren und
lassen `npm run themes:check` in CI fehlschlagen.

Der Rest dieser Dateien wird normal von Hand gepflegt — insbesondere die
`options` (Dev-Build) und die Targets `serve`/`test`/`lint`/`deploy` in
`angular.json`.

### Was pro Theme von Hand gepflegt wird

`src/custom-themes/<theme>/`:

- `variables.scss` — Ionic CSS-Variablen (Light **und** Dark Mode; die Datei
  enthält auskommentierte Beispielblöcke, die absichtlich stehen bleiben)
- `index.html` — Titel, `theme-color`, Splash-Screen-Links
- `manifest.webmanifest` — PWA-Metadaten
- `assets/` — `logo.png`, `logo_trans.png`, `bg/`, `favicon/`, `icons/`, `splash/`

`empty-template` ist die Vorlage für neue Themes, `default` ist das
myclub-Theme (wird von den Konfigurationen `production` **und** `beta` genutzt).

## Werkzeuge

```bash
npm run themes:list                     # alle Apps + Hosting-Target + URL
npm run themes:sync                     # Konfigurationen generieren
npm run themes:check                    # Drift prüfen (Exit 1) — läuft in CI

npm run theme:new -- app-fc-x --label "FC X" --site fc-x --primary "#1d4ed8"

npm run build:app-unihockey
npm run deploy:apps -- app-unihockey     # Build + Firebase Deploy
npm run deploy:apps -- --all --dry-run
```

Quellcode der Tools unter `tools/`:

- `themes.mjs` — gemeinsame Bibliothek (Config laden, Ableitungen berechnen)
- `sync-themes.mjs` — Generator inkl. `--check`
- `new-theme.mjs` — Scaffolder für neue Themes
- `deploy.mjs` — Build/Deploy-CLI
- `ci-matrix.mjs` — GitHub-Actions-Matrix aus der Config

## Fallstricke

- **Builds sind nicht parallelisierbar.** Alle Konfigurationen schreiben nach
  `www/`. `deploy.mjs` läuft deshalb sequenziell; in CI bekommt jede App einen
  eigenen Runner.
- **`production` ≠ `app-myclub`.** Die Angular-Konfiguration heisst
  `production`, das Firebase-Hosting-Target `app-myclub`. Das ist in
  `themes.config.json` über `hostingTarget` abgebildet — nicht "aufräumen".
- **`npm run themes:sync` nach jeder Config-Änderung**, sonst schlägt CI an.
- Generierte JSON-Dateien werden mit dem Prettier des Projekts formatiert,
  damit der husky-Pre-Commit-Hook sie nicht erneut anfasst.

## Konventionen

- Commits nach [Conventional Commits](https://www.conventionalcommits.org/).
- Prettier via husky/pretty-quick im Pre-Commit-Hook — nicht umgehen.
- Code-Bezeichner auf Englisch, Benutzertexte über `@ngx-translate`
  (`src/assets/lang/*.json`, Sprachen: de, fr, it, en). Neue UI-Texte immer in
  **allen vier** Sprachdateien ergänzen.
- Tests: Karma/Jasmine, `npx ng test --no-watch --browsers=ChromeHeadless`.
