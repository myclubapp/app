import { Injectable } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import {
  Geolocation,
  PermissionStatus,
  Position,
} from "@capacitor/geolocation";
import { UiService } from "./ui.service";

export interface MapLocation {
  latitude: number | string;
  longitude: number | string;
  location?: string;
  city?: string;
}

/** swisstopo Basemap Vector Tiles (gratis, kein API-Key, geo.admin.ch / BGDI). */
export const SWISSTOPO_STYLE =
  "https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json";

/** Fallback-Markerfarbe (Light-Mode --ion-color-primary), falls die CSS-Variable nicht lesbar ist. */
export const MAP_MARKER_COLOR = "#339BDE";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private uiService: UiService) {}

  async checkGeolocationPermission(): Promise<boolean> {
    // Geolocation permissions are only available on native platforms.
    // On the web the Capacitor plugin throws "Not implemented on web",
    // so we skip the check there and let the map open without it.
    if (!Capacitor.isNativePlatform()) {
      return false;
    }

    try {
      const permission: PermissionStatus = await Geolocation.checkPermissions();

      switch (permission.location) {
        case "granted":
          return true;

        case "prompt":
        case "prompt-with-rationale":
          const newPermission = await Geolocation.requestPermissions();
          return newPermission.location === "granted";

        case "denied":
          await this.showLocationPermissionAlert();
          return false;

        default:
          return false;
      }
    } catch (e) {
      console.error("Error checking geolocation permissions:", e);
      return false;
    }
  }

  private async showLocationPermissionAlert() {
    await this.uiService.showInfoDialog({
      header: "Standort-Berechtigung benötigt",
      message:
        "Um die Karte und Navigationsfunktionen nutzen zu können, wird Zugriff auf Ihren Standort benötigt. Bitte aktivieren Sie die Standort-Berechtigung in den Einstellungen.",
    });
  }

  /**
   * Liest --ion-color-primary aus dem aktiven Theme (Light/Dark) zur Laufzeit.
   * Fällt auf MAP_MARKER_COLOR zurück, wenn die Variable nicht lesbar ist.
   */
  getPrimaryColor(): string {
    if (
      typeof getComputedStyle === "undefined" ||
      typeof document === "undefined"
    ) {
      return MAP_MARKER_COLOR;
    }
    const value = getComputedStyle(document.body)
      .getPropertyValue("--ion-color-primary")
      .trim();
    return value || MAP_MARKER_COLOR;
  }

  /**
   * Aktuelle Position als [longitude, latitude] für einen MapLibre-Marker.
   * Gibt null zurück, wenn die Position nicht ermittelt werden kann.
   */
  async getCurrentPosition(): Promise<[number, number] | null> {
    try {
      const coordinates: Position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = coordinates.coords;
      // Explizite null-Prüfung: 0 ist falsy, aber lat/lng 0 sind gültige
      // Koordinaten (Äquator / Nullmeridian).
      if (latitude != null && longitude != null) {
        return [longitude, latitude];
      }
      return null;
    } catch (e) {
      console.log("Could not get current position for map");
      return null;
    }
  }

  /**
   * Öffnet die Adresse in der nativen Karten-/Navigations-App.
   * Plattform-spezifisch: iOS maps:, Android geo:, Web Google Maps.
   */
  async openMapsNavigation(location: MapLocation): Promise<void> {
    const query =
      location.location || location.city
        ? `${location.location ?? ""} ${location.city ?? ""}`.trim()
        : `${location.latitude},${location.longitude}`;
    const encoded = encodeURIComponent(query);
    const platform = Capacitor.getPlatform();

    if (platform === "ios") {
      window.open(`maps:?q=${encoded}`, "_system");
      return;
    }

    if (platform === "android") {
      window.open(`geo:0,0?q=${encoded}`, "_system");
      return;
    }

    window.open(`https://maps.google.com/?q=${encoded}`, "_system");
  }
}
