#!/usr/bin/env node
/**
 * Buildnummer der App.
 *
 *   node tools/build-number.mjs            src/environments/build-info.ts erzeugen
 *   node tools/build-number.mjs bump [N]   native Buildnummer setzen (+1 oder N)
 *
 * Auf dem Gerät liest AppVersionService Version und Buildnummer zur Laufzeit
 * aus dem nativen Bundle (App.getInfo()) — Xcode Cloud vergibt die
 * iOS-Buildnummer erst beim Archivieren, eine einkompilierte Konstante wäre
 * dort veraltet. Die hier generierte Konstante BUILD_NUMBER ist der Fallback
 * für Browser und Tests. Quelle, in dieser Reihenfolge:
 *
 *   1. CI_BUILD_NUMBER  — von Xcode Cloud gesetzt (auch im Post-Clone-Script);
 *                         muss gewinnen, damit der Wert zur CFBundleVersion
 *                         des Binaries passt
 *   2. native Projekte  — CURRENT_PROJECT_VERSION (alle Konfigurationen in
 *                         project.pbxproj) und versionCode (build.gradle),
 *                         aber nur, wenn alle Stellen übereinstimmen
 *   3. "local"          — kein verlässlicher Wert
 *
 * Läuft in `postinstall`, damit die Datei nach jedem `npm ci` existiert.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PBXPROJ = join(ROOT, "ios/App/App.xcodeproj/project.pbxproj");
const GRADLE = join(ROOT, "android/app/build.gradle");
const OUTPUT = join(ROOT, "src/environments/build-info.ts");

const PBXPROJ_PATTERN = /CURRENT_PROJECT_VERSION = (\d+);/g;
const GRADLE_PATTERN = /versionCode (\d+)/g;

const rel = (path) => relative(ROOT, path);

/** Alle Buildnummern aus den nativen Projekten (leer, wenn nicht ausgecheckt). */
function readNativeBuildNumbers() {
  const read = (path, pattern) =>
    existsSync(path)
      ? Array.from(readFileSync(path, "utf8").matchAll(pattern), (m) => m[1])
      : [];
  return {
    ios: read(PBXPROJ, PBXPROJ_PATTERN),
    android: read(GRADLE, GRADLE_PATTERN),
  };
}

function describe({ ios, android }) {
  return `iOS: ${ios.join("/") || "n/a"}, Android: ${android.join("/") || "n/a"}`;
}

/**
 * Gemeinsame native Buildnummer — undefined, wenn die Projekte fehlen oder
 * voneinander abweichen. Drift soll sichtbar werden, nicht hinter einem
 * Rateversuch verschwinden.
 */
function nativeBuildNumber() {
  const numbers = readNativeBuildNumbers();
  const values = new Set([...numbers.ios, ...numbers.android]);
  if (values.size === 1) return values.values().next().value;
  if (values.size > 1) {
    console.warn(
      `[build-number] native Buildnummern weichen ab (${describe(numbers)}) — ` +
        `verwende "local". Angleichen mit: npm run version:bump -- <N>`,
    );
  }
  return undefined;
}

function resolveBuildNumber() {
  const ci = process.env.CI_BUILD_NUMBER?.trim();
  if (ci) return { value: ci, source: "CI_BUILD_NUMBER" };
  const native = nativeBuildNumber();
  if (native) return { value: native, source: "native Projekte" };
  return { value: "local", source: "Fallback" };
}

function writeBuildInfo() {
  const { value, source } = resolveBuildNumber();
  const content =
    `// GENERIERT von tools/build-number.mjs (Quelle: ${source}).\n` +
    `// Nicht von Hand editieren, nicht committen — wird bei \`npm install\`\n` +
    `// und im Xcode-Cloud-Build neu geschrieben.\n` +
    `export const BUILD_NUMBER = ${JSON.stringify(value)};\n`;

  if (existsSync(OUTPUT) && readFileSync(OUTPUT, "utf8") === content) {
    console.log(
      `[build-number] ${rel(OUTPUT)}: ${value} (${source}, unverändert)`,
    );
    return;
  }
  writeFileSync(OUTPUT, content);
  console.log(`[build-number] ${rel(OUTPUT)}: ${value} (${source})`);
}

function replaceAll(path, pattern, replacement) {
  const before = readFileSync(path, "utf8");
  const after = before.replace(pattern, replacement);
  if (after !== before) writeFileSync(path, after);
}

/**
 * Setzt CURRENT_PROJECT_VERSION (alle Konfigurationen) und versionCode
 * gemeinsam, damit iOS Debug/Release und Android nie auseinanderlaufen.
 * Version (MARKETING_VERSION, versionName, package.json) bleibt Handarbeit.
 */
function bump(arg) {
  const numbers = readNativeBuildNumbers();
  if (numbers.ios.length === 0 || numbers.android.length === 0) {
    fail(`native Projekte nicht gefunden (${rel(PBXPROJ)}, ${rel(GRADLE)})`);
  }

  let next;
  if (arg !== undefined) {
    if (!/^\d+$/.test(arg))
      fail(`ungültige Buildnummer "${arg}" — erwartet eine ganze Zahl`);
    next = arg;
  } else {
    const values = new Set([...numbers.ios, ...numbers.android]);
    if (values.size !== 1) {
      fail(
        `native Buildnummern weichen ab (${describe(numbers)}) — ` +
          `expliziten Wert angeben: npm run version:bump -- <N>`,
      );
    }
    next = String(Number(values.values().next().value) + 1);
  }

  replaceAll(PBXPROJ, PBXPROJ_PATTERN, `CURRENT_PROJECT_VERSION = ${next};`);
  replaceAll(GRADLE, GRADLE_PATTERN, `versionCode ${next}`);
  console.log(
    `[build-number] native Buildnummer ${describe(numbers)} → ${next} ` +
      `(${rel(PBXPROJ)}, ${rel(GRADLE)})`,
  );
  writeBuildInfo();
}

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

function usage() {
  console.log(`Buildnummer der App

  node tools/build-number.mjs             src/environments/build-info.ts erzeugen
                                          (CI_BUILD_NUMBER > native Projekte > "local")
  node tools/build-number.mjs bump        native Buildnummer +1 (iOS + Android)
  node tools/build-number.mjs bump 108    native Buildnummer explizit setzen

  npm run version:bump [-- N]             Alias für bump`);
}

const [command, arg] = process.argv.slice(2);
switch (command) {
  case undefined:
  case "sync":
    writeBuildInfo();
    break;
  case "bump":
    bump(arg);
    break;
  case "--help":
  case "-h":
    usage();
    break;
  default:
    usage();
    fail(`unbekannter Befehl "${command}"`);
}
