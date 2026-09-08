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

# Dependencies installieren
npm ci

# Web-Build + Capacitor sync (falls dein dist/ nicht eingecheckt ist)
npm run build
npx cap sync ios

# CocoaPods, falls du Pods statt SPM nutzt
# cd ios/App && pod install