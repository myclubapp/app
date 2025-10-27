#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const loaderPath = path.join(
  __dirname,
  "../node_modules/myclub-game-preview/loader/index.js",
);

// Check if the file exists
if (!fs.existsSync(loaderPath)) {
  console.log("myclub-game-preview loader not found, skipping fix");
  process.exit(0);
}

const newContent = `(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,a)}})();
export { defineCustomElements, setNonce } from '../dist/myclub-game-preview/myclub-game-preview.esm.js';
`;

fs.writeFileSync(loaderPath, newContent);
console.log("✅ myclub-game-preview loader fixed!");
