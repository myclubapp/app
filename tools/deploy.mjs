#!/usr/bin/env node
/**
 * Baut und deployt eine oder mehrere White-Label-Apps.
 *
 *   node tools/deploy.mjs app-unihockey app-volleyball
 *   node tools/deploy.mjs --all
 *   node tools/deploy.mjs prod --skip-build
 *   node tools/deploy.mjs --all --dry-run
 *   node tools/deploy.mjs --list
 *
 * Läuft bewusst sequenziell: alle Konfigurationen schreiben nach www/, parallele
 * Builds würden sich gegenseitig überschreiben.
 */

import { spawnSync } from "node:child_process";
import { ROOT, loadConfig, resolveApps } from "./themes.mjs";

const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith("--")));
const names = argv.filter((a) => !a.startsWith("--"));

const config = loadConfig();
const apps = resolveApps(config);

if (
  flags.has("--help") ||
  (!names.length && !flags.has("--all") && !flags.has("--list"))
) {
  usage();
  process.exit(flags.has("--help") ? 0 : 1);
}

if (flags.has("--list")) {
  for (const app of apps) {
    console.log(
      `  ${app.key.padEnd(24)} → hosting:${app.hostingTarget.padEnd(24)} (${app.hostingSite}.web.app)  ${app.label}`,
    );
  }
  process.exit(0);
}

const selected = flags.has("--all")
  ? apps
  : names.map((name) => {
      const app =
        apps.find((a) => a.key === name) ?? apps.find((a) => a.script === name);
      if (!app) {
        console.error(`Unbekannte App: "${name}"`);
        console.error(`Verfügbar: ${apps.map((a) => a.key).join(", ")}`);
        process.exit(1);
      }
      return app;
    });

const skipBuild = flags.has("--skip-build");
const dryRun = flags.has("--dry-run");

for (const [index, app] of selected.entries()) {
  console.log(
    `\n[${index + 1}/${selected.length}] ${app.label} (${app.hostingSite}.web.app)`,
  );
  if (!skipBuild) {
    run("npx", ["ng", "build", "--configuration", app.configuration]);
  }
  run("npx", ["firebase", "deploy", "--only", `hosting:${app.hostingTarget}`]);
}

console.log(
  `\n✓ ${selected.length} App(s) ${dryRun ? "geplant" : "deployed"}: ${selected.map((a) => a.key).join(", ")}`,
);

function run(command, args) {
  const printable = `${command} ${args.join(" ")}`;
  if (dryRun) {
    console.log(`    (dry-run) ${printable}`);
    return;
  }
  console.log(`    $ ${printable}`);
  const result = spawnSync(command, args, { cwd: ROOT, stdio: "inherit" });
  if (result.status !== 0) {
    console.error(
      `\n✗ Abgebrochen: "${printable}" endete mit ${result.status}`,
    );
    process.exit(result.status ?? 1);
  }
}

function usage() {
  console.log(`Build & Deploy für myclub White-Label-Apps

  node tools/deploy.mjs <app...>     eine oder mehrere Apps (Key oder Script-Alias)
  node tools/deploy.mjs --all        alle Apps aus themes.config.json
  node tools/deploy.mjs --list       verfügbare Apps anzeigen

Optionen
  --skip-build   nur deployen, bestehendes www/ verwenden
  --dry-run      nur ausgeben, was passieren würde
`);
}
