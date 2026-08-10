#!/usr/bin/env node
/**
 * Legt ein neues White-Label-Theme an: Ordner aus empty-template, Farben
 * berechnet, Eintrag in themes.config.json, anschliessend themes:sync.
 *
 *   node tools/new-theme.mjs app-fc-musterhausen \
 *     --label "FC Musterhausen" \
 *     --site fc-musterhausen \
 *     --primary "#1d4ed8" \
 *     --secondary "#f59e0b"
 *
 * Optionen
 *   --short-name "FCM"     Kurzname im Manifest (Default: --label)
 *   --contrast "#000000"   Kontrastfarbe für Text auf primary/secondary
 *   --theme-dir default    bestehendes Theme mitbenutzen statt neu anlegen
 */

import { cpSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { CONFIG_PATH, ROOT, formatJson, loadConfig } from "./themes.mjs";

/* ------------------------------------------------------------------ Argumente */

const argv = process.argv.slice(2);
const slug = argv.find((a) => !a.startsWith("--"));
const opt = (name, fallback = null) => {
  const index = argv.indexOf(`--${name}`);
  if (index !== -1 && argv[index + 1] && !argv[index + 1].startsWith("--")) {
    return argv[index + 1];
  }
  const inline = argv.find((a) => a.startsWith(`--${name}=`));
  return inline ? inline.slice(name.length + 3) : fallback;
};

if (!slug || argv.includes("--help")) {
  console.log(readFileSync(new URL(import.meta.url), "utf8").split("*/")[0]);
  process.exit(slug ? 0 : 1);
}

if (!/^app-[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  fail(
    `Ungültiger Slug "${slug}". Erwartet: app-<kebab-case>, z. B. app-fc-musterhausen`,
  );
}

const label = opt("label");
const site = opt("site", slug.replace(/^app-/, ""));
const primary = normalizeHex(opt("primary"));
const secondary = normalizeHex(opt("secondary") ?? opt("primary"));
const shortName = opt("short-name", label);
const contrast = normalizeHex(opt("contrast", "#ffffff"));
const themeDir = opt("theme-dir", slug);

if (!label)
  fail('--label fehlt (Anzeigename, z. B. --label "FC Musterhausen")');
if (!primary) fail('--primary fehlt (z. B. --primary "#1d4ed8")');

const config = loadConfig();
if (config.apps[slug]) fail(`"${slug}" steht bereits in themes.config.json`);
for (const [key, app] of Object.entries(config.apps)) {
  if (app.hostingSite === site) {
    fail(`Hosting-Site "${site}" wird bereits von "${key}" verwendet`);
  }
}

/* --------------------------------------------------------------- Theme-Ordner */

const themeRoot = join(ROOT, config.angular.themeRoot, themeDir);
const isNewTheme = themeDir === slug;

if (isNewTheme) {
  if (existsSync(themeRoot))
    fail(`${config.angular.themeRoot}/${themeDir} existiert bereits`);

  const template = join(ROOT, config.angular.themeRoot, "empty-template");
  if (!existsSync(template)) fail(`Vorlage ${template} fehlt`);
  cpSync(template, themeRoot, { recursive: true });

  writeFileSync(
    join(themeRoot, "variables.scss"),
    applyColors(readFileSync(join(themeRoot, "variables.scss"), "utf8")),
  );

  writeFileSync(
    join(themeRoot, "index.html"),
    readFileSync(join(themeRoot, "index.html"), "utf8")
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${label} | the next generation</title>`,
      )
      .replace(
        /(<meta name="theme-color" content=")[^"]*(")/,
        `$1${primary}$2`,
      ),
  );

  const manifest = JSON.parse(
    readFileSync(join(themeRoot, "manifest.webmanifest"), "utf8"),
  );
  manifest.name = `${label} App`;
  manifest.short_name = shortName;
  manifest.theme_color = primary;
  manifest.background_color = primary;
  writeFileSync(
    join(themeRoot, "manifest.webmanifest"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
} else if (!existsSync(themeRoot)) {
  fail(`--theme-dir "${themeDir}" existiert nicht`);
}

/* --------------------------------------------------- Eintrag in themes.config */

config.apps[slug] = { label, hostingSite: site, workflow: "main" };
if (themeDir !== slug) config.apps[slug].themeDir = themeDir;
writeFileSync(CONFIG_PATH, await formatJson(config, CONFIG_PATH));

const sync = spawnSync("node", ["tools/sync-themes.mjs"], {
  cwd: ROOT,
  stdio: "inherit",
});
if (sync.status !== 0) process.exit(sync.status ?? 1);

/* --------------------------------------------------------------- Nächste Schritte */

console.log(`
✓ "${slug}" angelegt (${label})

Noch von Hand zu erledigen:

  1. Firebase-Site anlegen und verknüpfen
       npx firebase hosting:sites:create ${site}
       npx firebase target:apply hosting ${slug} ${site}

  2. Assets ersetzen in ${config.angular.themeRoot}/${themeDir}/assets/
       logo.png, logo_trans.png, bg/, favicon/, icons/, splash/
       npx capacitor-assets generate --assetPath ${config.angular.themeRoot}/${themeDir}/assets

  3. Dark Mode in variables.scss prüfen — generiert wurden nur primary/secondary,
     Hintergründe und Kontraste bleiben auf den Werten der Vorlage.

  4. Bauen und ansehen
       npm run build:${slug}
       node tools/deploy.mjs ${slug} --dry-run
`);

/* ------------------------------------------------------------------- Helfer */

/**
 * Setzt primary/secondary in variables.scss — aber nur ausserhalb von
 * Kommentaren. Die Vorlage enthält auskommentierte Beispielblöcke mit denselben
 * Variablennamen, die unangetastet bleiben müssen.
 */
function applyColors(source) {
  const inComment = commentMask(source);
  const values = {
    primary: colorSet(primary),
    secondary: colorSet(secondary),
  };
  return source.replace(
    /--ion-color-(primary|secondary)(-rgb|-contrast-rgb|-contrast|-shade|-tint)?:\s*[^;]+;/g,
    (match, role, suffix, offset) => {
      if (inComment[offset]) return match;
      const value = values[role][suffix ?? ""];
      return value === undefined
        ? match
        : `--ion-color-${role}${suffix ?? ""}: ${value};`;
    },
  );
}

function colorSet(hex) {
  const rgb = toRgb(hex);
  return {
    "": hex,
    "-rgb": rgb.join(", "),
    "-contrast": contrast,
    "-contrast-rgb": toRgb(contrast).join(", "),
    "-shade": toHex(rgb.map((c) => c * 0.88)),
    "-tint": toHex(rgb.map((c) => c + (255 - c) * 0.1)),
  };
}

function commentMask(source) {
  const mask = new Array(source.length).fill(false);
  let index = 0;
  let block = false;
  let line = false;
  while (index < source.length) {
    if (!block && !line && source[index] === "/" && source[index + 1] === "*") {
      block = true;
      mask[index] = mask[index + 1] = true;
      index += 2;
      continue;
    }
    if (block && source[index] === "*" && source[index + 1] === "/") {
      mask[index] = mask[index + 1] = true;
      block = false;
      index += 2;
      continue;
    }
    if (!block && !line && source[index] === "/" && source[index + 1] === "/") {
      line = true;
    }
    if (line && source[index] === "\n") line = false;
    mask[index] = block || line;
    index++;
  }
  return mask;
}

function normalizeHex(value) {
  if (!value) return null;
  const hex = value.trim().replace(/^#?/, "#").toLowerCase();
  if (/^#[0-9a-f]{3}$/.test(hex)) {
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  if (!/^#[0-9a-f]{6}$/.test(hex)) fail(`Ungültige Farbe: "${value}"`);
  return hex;
}

function toRgb(hex) {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

function toHex(channels) {
  return (
    "#" +
    channels
      .map((c) =>
        Math.max(0, Math.min(255, Math.round(c)))
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
  );
}

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}
