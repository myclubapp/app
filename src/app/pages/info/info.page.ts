import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from "@angular/core";
import { Device, DeviceId, DeviceInfo } from "@capacitor/device";
import { Browser, OpenOptions } from "@capacitor/browser";
import { SwUpdate } from "@angular/service-worker";
import { AppVersionService } from "../../services/app-version.service";
@Component({
  selector: "app-info",
  templateUrl: "./info.page.html",
  styleUrls: ["./info.page.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class InfoPage implements OnInit {
  /** Version/Buildnummer — auf dem Gerät aus dem nativen Bundle, sonst Build-Konstanten. */
  readonly appInfo = inject(AppVersionService).info;
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;

  constructor(public swUpdate: SwUpdate) {}

  async ngOnInit() {
    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();
  }

  async openTCSite() {
    await Browser.open({ url: "https://my-club.app/terms-and-conditions-de/" });
  }

  async openPPSite() {
    await Browser.open({ url: "https://my-club.app/privacy-policy-de/" });
  }

  async checkForUpdates() {
    try {
      const update = await this.swUpdate.checkForUpdate();
      if (update) {
        console.log(">>> update", update);
        const resolver = await this.swUpdate.activateUpdate();
        if (resolver) {
          window.location.reload();
        } else {
          console.log("Already on latest version");
        }
      } else {
        console.log("No update available");
      }
    } catch (error) {
      console.error("Error checking for updates", error);
    }
  }
}
