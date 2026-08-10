#!/usr/bin/env node
/**
 * Gibt die GitHub-Actions-Matrix für einen Workflow als JSON aus.
 *
 *   node tools/ci-matrix.mjs main
 *   node tools/ci-matrix.mjs main --only app-unihockey,app-volleyball
 *
 * Wird in main.yml als Job-Output verwendet, damit eine neue App in
 * themes.config.json automatisch einen Deploy-Job bekommt — ohne YAML-Änderung.
 */

import { loadConfig, resolveApps } from "./themes.mjs";

const [workflow, ...rest] = process.argv.slice(2);
if (!workflow) {
  console.error("Usage: node tools/ci-matrix.mjs <workflow> [--only a,b]");
  process.exit(1);
}

const onlyIndex = rest.indexOf("--only");
const onlyRaw = onlyIndex === -1 ? "" : (rest[onlyIndex + 1] ?? "");
const only = onlyRaw
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

let matrix = resolveApps(loadConfig())
  .filter((app) => app.workflow === workflow)
  .map(({ key, label, configuration, hostingTarget }) => ({
    key,
    label,
    configuration,
    hostingTarget,
  }));

if (only.length) {
  const unknown = only.filter((key) => !matrix.some((app) => app.key === key));
  if (unknown.length) {
    console.error(
      `Unbekannte App(s) für Workflow "${workflow}": ${unknown.join(", ")}\n` +
        `Verfügbar: ${matrix.map((a) => a.key).join(", ")}`,
    );
    process.exit(1);
  }
  matrix = matrix.filter((app) => only.includes(app.key));
}

if (!matrix.length) {
  console.error(`Kein App-Eintrag mit workflow: "${workflow}"`);
  process.exit(1);
}

console.log(JSON.stringify(matrix));
