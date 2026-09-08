#!/bin/bash
set -e

# Node 24 (LTS) installieren — package.json "engines" verlangt ^24,
# ein ungepinntes `brew install node` liefert inzwischen Node 26 (EBADENGINE)
export HOMEBREW_NO_AUTO_UPDATE=1
export HOMEBREW_NO_INSTALL_CLEANUP=1
brew install node@24

# node@24 ist keg-only und wird nicht automatisch verlinkt
export PATH="$(brew --prefix node@24)/bin:$PATH"

# npm muss "engines" ebenfalls erfüllen (^11.16.0 || ^12) — das mit
# node@24 gebündelte npm kann älter sein
npm install -g npm@11

node --version
npm --version

# ins Repo-Root wechseln (wo package.json liegt)
cd "$CI_PRIMARY_REPOSITORY_PATH"

# Dependencies installieren (postinstall erzeugt src/environments/build-info.ts)
npm ci

# Buildnummer von Xcode Cloud (CI_BUILD_NUMBER) ins Web-Bundle übernehmen —
# derselbe Wert landet beim Archivieren als CFBundleVersion im Binary.
# Explizit, damit der Schritt im Build-Log sichtbar ist.
node tools/build-number.mjs

# Produktions-Build (myclub-Theme, wie `npm run app:ios`) + Capacitor sync
# (www/ und ios/App/App/public sind nicht eingecheckt)
npm run build:prod
npx cap sync ios

# Xcode Cloud löst Swift-Packages nicht automatisch neu auf, sondern verlangt
# eine zur Package.swift passende, eingecheckte Package.resolved. `cap sync`
# regeneriert ios/App/CapApp-SPM/Package.swift aus der installierten
# @capacitor/ios-Version. Weicht das Ergebnis vom Commit ab, ist auch die
# Package.resolved veraltet und xcodebuild bricht später mit
# "an out-of-date resolved file was detected" ab — deshalb hier früh und mit
# klarer Anleitung scheitern.
if ! git diff --quiet -- ios/App/CapApp-SPM/Package.swift; then
  echo "FEHLER: ios/App/CapApp-SPM/Package.swift ist nicht aktuell (Diff nach 'npx cap sync ios'):" >&2
  git --no-pager diff -- ios/App/CapApp-SPM/Package.swift >&2
  echo >&2
  echo "Lokal beheben: 'npx cap sync ios' ausführen, danach" >&2
  echo "  xcodebuild -resolvePackageDependencies -project ios/App/App.xcodeproj -scheme App" >&2
  echo "(oder in Xcode: File > Packages > Resolve Package Versions) und beide Dateien committen:" >&2
  echo "  ios/App/CapApp-SPM/Package.swift" >&2
  echo "  ios/App/App.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved" >&2
  exit 1
fi
