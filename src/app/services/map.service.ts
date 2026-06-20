import { ElementRef, Injectable } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import { GoogleMap } from "@capacitor/google-maps";
import { Browser } from "@capacitor/browser";
import {
  Geolocation,
  PermissionStatus,
  Position,
} from "@capacitor/geolocation";
import { environment } from "src/environments/environment";
import { UiService } from "./ui.service";

export interface MapLocation {
  latitude: number | string;
  longitude: number | string;
  location?: string;
  city?: string;
}

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

  async createMap(
    mapId: string,
    mapElement: ElementRef<HTMLElement>,
    location: MapLocation,
  ): Promise<GoogleMap> {
    const map = await GoogleMap.create({
      id: mapId,
      element: mapElement.nativeElement,
      apiKey: environment.googleMapsApiKey,
      config: {
        center: {
          lat: Number(location.latitude),
          lng: Number(location.longitude),
        },
        zoom: 12,
      },
    });

    // Add location marker
    const title =
      location.location && location.city
        ? `${location.location} in ${location.city}`
        : "Location";

    map.addMarker({
      title,
      coordinate: {
        lat: Number(location.latitude),
        lng: Number(location.longitude),
      },
      snippet: title,
    });

    // Try to add current position marker
    try {
      const coordinates: Position = await Geolocation.getCurrentPosition();
      if (coordinates.coords.latitude && coordinates.coords.longitude) {
        map.addMarker({
          title: "Meine Position",
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude,
          },
          isFlat: true,
          snippet: "Meine Position",
        });
      }
    } catch (e) {
      console.log("Could not get current position for map");
    }

    return map;
  }

  async openMapsNavigation(location: MapLocation): Promise<void> {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      if (coordinates.coords.longitude && coordinates.coords.latitude) {
        await Browser.open({
          url: `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}&origin=${coordinates.coords.latitude},${coordinates.coords.longitude}`,
        });
      } else {
        await Browser.open({
          url: `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`,
        });
      }
    } catch (e) {
      // Fallback without origin
      await Browser.open({
        url: `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`,
      });
    }
  }
}
