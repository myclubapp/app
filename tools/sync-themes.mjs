#!/usr/bin/env node
/**
 * Generiert angular.json, package.json, firebase.json und .firebaserc aus
 * themes.config.json.
 *
 *   node tools/sync-themes.mjs            schreibt die Dateien
 *   node tools/sync-themes.mjs --check    prüft nur, Exit 1 bei Drift (für CI)
 *
 * Angefasst wird ausschliesslich der generierte Teil:
 *   angular.json  → architect.build.configurations
 *   package.json  → alle Scripts mit Präfix build: / build-deploy:
 *   firebase.json → hosting
 *   .firebaserc   → projects.default + targets.<projekt>.hosting
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  ROOT,
  buildAngularConfigurations,
  buildFirebaseHosting,
  buildFirebaserc,
  buildScripts,
  formatJson,
  isGeneratedScript,
  loadConfig,
  readJson,
  resolveApps,
  writeIfChanged,
} from "./themes.mjs";

const check = process.argv.includes("--check");
const config = loadConfig();
const apps = resolveApps(config);

/* ---------------------------------------------------------------- Validierung */

const problems = [];
const seenTargets = new Map();
const seenSites = new Map();

for (const app of apps) {
  if (!app.hostingSite) {
    problems.push(`${app.key}: hostingSite fehlt`);
  }
  if (!existsSync(join(ROOT, app.themeRoot))) {
    problems.push(`${app.key}: Theme-Ordner ${app.themeRoot} existiert nicht`);
  }
  for (const file of ["index.html", "manifest.webmanifest", "variables.scss"]) {
    const path = join(ROOT, app.themeRoot, file);
    if (existsSync(join(ROOT, app.themeRoot)) && !existsSync(path)) {
      problems.push(`${app.key}: ${app.themeRoot}/${file} fehlt`);
    }
  }
  const targetOwner = seenTargets.get(app.hostingTarget);
  if (targetOwner) {
    problems.push(
      `${app.key}: hostingTarget "${app.hostingTarget}" wird schon von ${targetOwner} benutzt`,
    );
  }
  seenTargets.set(app.hostingTarget, app.key);

  const siteOwner = seenSites.get(app.hostingSite);
  if (siteOwner) {
    problems.push(
      `${app.key}: hostingSite "${app.hostingSite}" wird schon von ${siteOwner} benutzt`,
    );
  }
  seenSites.set(app.hostingSite, app.key);
}

if (problems.length) {
  console.error("themes.config.json ist nicht konsistent:\n");
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

/* ------------------------------------------------------------------ Generieren */

const targets = [];

// angular.json — nur die Build-Konfigurationen, Base-Options bleiben von Hand gepflegt.
{
  const path = join(ROOT, "angular.json");
  const json = readJson(path);
  const project = json.projects[config.angular.project];
  if (!project) {
    console.error(
      `angular.json enthält kein Projekt "${config.angular.project}"`,
    );
    process.exit(1);
  }
  project.architect.build.configurations = buildAngularConfigurations(
    apps,
    config,
  );
  targets.push({ path, content: await formatJson(json, path) });
}

// package.json — build: / build-deploy: Scripts, an ihrer bisherigen Position.
{
  const path = join(ROOT, "package.json");
  const json = readJson(path);
  const generated = buildScripts(apps);
  const merged = {};
  let inserted = false;
  for (const [name, value] of Object.entries(json.scripts)) {
    if (isGeneratedScript(name)) {
      if (!inserted) {
        Object.assign(merged, generated);
        inserted = true;
      }
      continue;
    }
    merged[name] = value;
  }
  if (!inserted) Object.assign(merged, generated);
  json.scripts = merged;
  targets.push({ path, content: await formatJson(json, path) });
}

// firebase.json — ein Hosting-Eintrag pro App aus dem gemeinsamen Template.
{
  const path = join(ROOT, "firebase.json");
  const json = readJson(path);
  json.hosting = buildFirebaseHosting(apps, config);
  targets.push({ path, content: await formatJson(json, path) });
}

// .firebaserc — Target → Site.
{
  const path = join(ROOT, ".firebaserc");
  const json = readJson(path);
  targets.push({
    path,
    content: await formatJson(buildFirebaserc(apps, config, json), path),
  });
}

/* -------------------------------------------------------------------- Schreiben */

const changed = [];
for (const target of targets) {
  const name = target.path.replace(`${ROOT}/`, "");
  if (check) {
    const current = readFileOrNull(target.path);
    if (current !== target.content) changed.push(name);
  } else if (writeIfChanged(target.path, target.content)) {
    changed.push(name);
  }
}

function readFileOrNull(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

if (check) {
  if (changed.length) {
    console.error(
      `Konfiguration weicht von themes.config.json ab:\n${changed
        .map((n) => `  ✗ ${n}`)
        .join("\n")}\n\nBitte "npm run themes:sync" ausführen und committen.`,
    );
    process.exit(1);
  }
  console.log(`✓ ${apps.length} Apps — alle Konfigurationen sind synchron.`);
} else if (changed.length) {
  console.log(
    `✓ ${apps.length} Apps synchronisiert:\n${changed
      .map((n) => `  · ${n}`)
      .join("\n")}`,
  );
} else {
  console.log(`✓ ${apps.length} Apps — nichts zu tun, alles war aktuell.`);
}
