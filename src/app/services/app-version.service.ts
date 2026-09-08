import { Injectable, InjectionToken, inject, signal } from "@angular/core";
import { App, AppPlugin } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { version } from "../../../package.json";
import { BUILD_NUMBER } from "../../environments/build-info";

export interface AppVersionInfo {
  /** Marketing-Version, z. B. "2.5.4" */
  version: string;
  /** Buildnummer, z. B. "240" — auf dem Gerät die von Xcode Cloud vergebene */
  build: string;
}

/**
 * Zugriff auf das Capacitor-App-Plugin als Token, damit Tests ihn ersetzen
 * können. Bewusst ein schmaler Wrapper statt des Plugin-Proxys: der Proxy
 * beantwortet jede Property (auch `ngOnDestroy`) mit einem Methoden-Wrapper,
 * den Angular sonst beim Zerstören des Injectors aufrufen würde.
 */
export const CAPACITOR_APP = new InjectionToken<Pick<AppPlugin, "getInfo">>(
  "CAPACITOR_APP",
  { providedIn: "root", factory: () => ({ getInfo: () => App.getInfo() }) },
);

/**
 * Version und Buildnummer für die Anzeige (Side-Menu, Info-Seite).
 *
 * Auf dem Gerät kommen beide Werte zur Laufzeit aus dem nativen Bundle
 * (CFBundleShortVersionString/CFBundleVersion bzw. versionName/versionCode):
 * Xcode Cloud vergibt die iOS-Buildnummer erst beim Archivieren, eine
 * einkompilierte Konstante wäre dort veraltet. Im Browser gibt es keine
 * native Schicht — dort bleiben package.json (Version) und die generierte
 * Konstante BUILD_NUMBER (siehe tools/build-number.mjs) der einzige Wert.
 */
@Injectable({ providedIn: "root" })
export class AppVersionService {
  private readonly app = inject(CAPACITOR_APP);
  private readonly state = signal<AppVersionInfo>({
    version,
    build: BUILD_NUMBER,
  });

  /** Aktuelle Version/Buildnummer — auf dem Gerät nach `ready` aus dem nativen Bundle. */
  readonly info = this.state.asReadonly();

  /** Erfüllt, sobald die nativen Werte gelesen wurden (im Browser sofort). */
  readonly ready: Promise<void>;

  constructor() {
    this.ready = this.loadNativeInfo();
  }

  private async loadNativeInfo(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    try {
      const nativeInfo = await this.app.getInfo();
      this.state.set({ version: nativeInfo.version, build: nativeInfo.build });
    } catch (error) {
      // Plugin nicht verfügbar — Build-Konstanten bleiben stehen.
      console.warn("[AppVersionService] App.getInfo() fehlgeschlagen", error);
    }
  }
}
