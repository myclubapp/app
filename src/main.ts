/// <reference types="@angular/localize" />

import { enableProdMode, provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import { defineCustomElements } from "@ionic/pwa-elements/loader";
// import { defineCustomElements as defineCustomElementsGoogleMaps } from 'web-google-maps/dist/loader';
import { defineCustomElements as defineCustomElementsSocialShare } from "web-social-share/dist/loader";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    applicationProviders: [provideZoneChangeDetection()],
  })
  .catch((err) => console.log(err));

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
defineCustomElementsSocialShare(window);
// defineCustomElementsGoogleMaps(window);
