/**
 * Gemeinsame Bibliothek für die Theme-Tools.
 *
 * themes.config.json ist die einzige Quelle der Wahrheit. Alles hier leitet
 * daraus die Inhalte von angular.json, package.json, firebase.json und
 * .firebaserc ab — geschrieben wird ausschliesslich von sync-themes.mjs.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const CONFIG_PATH = join(ROOT, "themes.config.json");

export function loadConfig() {
  return JSON.parse(readFileSync(CONFIG_PATH, "utf8"));
}

/**
 * Löst die App-Einträge zu vollständigen Datensätzen auf. Wo ein Feld fehlt,
 * gilt der Schlüssel selbst als Default — deshalb braucht ein normales Theme
 * in themes.config.json nur `label` und `hostingSite`.
 */
export function resolveApps(config = loadConfig()) {
  return Object.entries(config.apps).map(([key, app]) => ({
    key,
    label: app.label ?? key,
    configuration: key,
    themeDir: app.themeDir ?? key,
    themeRoot: `${config.angular.themeRoot}/${app.themeDir ?? key}`,
    hostingTarget: app.hostingTarget ?? key,
    hostingSite: app.hostingSite,
    script: app.script ?? key,
    workflow: app.workflow ?? null,
  }));
}

export function findApp(name, config = loadConfig()) {
  const apps = resolveApps(config);
  return (
    apps.find((a) => a.key === name) ??
    apps.find((a) => a.script === name) ??
    null
  );
}

/** Ersetzt {{theme}} rekursiv in einer beliebigen JSON-Struktur. */
function substitute(value, vars) {
  if (typeof value === "string") {
    return value.replace(/\{\{(\w+)\}\}/g, (match, name) =>
      name in vars ? vars[name] : match,
    );
  }
  if (Array.isArray(value)) return value.map((v) => substitute(v, vars));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, substitute(v, vars)]),
    );
  }
  return value;
}

export function buildAngularConfigurations(apps, config) {
  const configurations = {};
  for (const app of apps) {
    configurations[app.configuration] = substitute(
      config.angular.buildConfigurationTemplate,
      { theme: app.themeDir },
    );
  }
  return { ...configurations, ...(config.angular.extraConfigurations ?? {}) };
}

export function buildFirebaseHosting(apps, config) {
  return apps.map((app) => ({
    target: app.hostingTarget,
    ...config.firebase.hostingTemplate,
  }));
}

export function buildFirebaserc(apps, config, existing = {}) {
  const hosting = {};
  for (const app of apps) hosting[app.hostingTarget] = [app.hostingSite];
  return {
    ...existing,
    projects: {
      ...(existing.projects ?? {}),
      default: config.firebase.project,
    },
    targets: {
      ...(existing.targets ?? {}),
      [config.firebase.project]: { hosting },
    },
    etags: existing.etags ?? {},
  };
}

/**
 * Generierte npm-Scripts. Alles was `build:` oder `build-deploy:` heisst,
 * gehört dem Generator — der Rest der Scripts bleibt unangetastet.
 */
export const GENERATED_SCRIPT_PREFIXES = ["build:", "build-deploy:"];

export function buildScripts(apps) {
  const scripts = {};
  for (const app of apps) {
    scripts[`build:${app.script}`] =
      `ng build --configuration ${app.configuration}`;
  }
  for (const app of apps) {
    scripts[`build-deploy:${app.script}`] = `node tools/deploy.mjs ${app.key}`;
  }
  return scripts;
}

export function isGeneratedScript(name) {
  return GENERATED_SCRIPT_PREFIXES.some((prefix) => name.startsWith(prefix));
}

/**
 * Formatiert mit dem Prettier des Projekts, damit der pre-commit-Hook die
 * generierten Dateien nicht nochmals anfasst (sonst schlägt `--check` in CI an).
 */
export async function formatJson(value, filePath) {
  const raw = JSON.stringify(value, null, 2) + "\n";
  try {
    const prettier = await import("prettier");
    const options = (await prettier.resolveConfig(filePath)) ?? {};
    return await prettier.format(raw, { ...options, filepath: filePath });
  } catch {
    return raw;
  }
}

export function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function writeIfChanged(path, content) {
  let current = null;
  try {
    current = readFileSync(path, "utf8");
  } catch {
    /* neue Datei */
  }
  if (current === content) return false;
  writeFileSync(path, content);
  return true;
}

export function rel(path) {
  return relative(ROOT, path) || path;
}
