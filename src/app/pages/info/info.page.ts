import { Component, OnInit } from '@angular/core';
import { Device, DeviceId, DeviceInfo } from '@capacitor/device';
import { Browser, OpenOptions​ } from '@capacitor/browser';
import packagejson from "./../../../../package.json";
import { SwUpdate } from '@angular/service-worker';
@Component({
    selector: 'app-info',
    templateUrl: './info.page.html',
    styleUrls: ['./info.page.scss'],
    standalone: false
})
export class InfoPage implements OnInit {

  public appVersion: string = packagejson.version;
  public buildNumber: string = packagejson.buildNumber;
  deviceId: DeviceId;
  deviceInfo: DeviceInfo;

  constructor(
    private swUpdate: SwUpdate
  ) { }

  async ngOnInit() {
    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();
  }

  async openTCSite() {
    await Browser.open({ url: 'https://my-club.app/terms-and-conditions-de/' });
  };

  async openPPSite() {
    await Browser.open({ url: 'https://my-club.app/privacy-policy-de/',  });
  };

  async checkForUpdates() {
    const update = await this.swUpdate.checkForUpdate();
    console.log(">>> update", update);
    if (update) {
      const resolver = await this.swUpdate.activateUpdate();
      if (resolver) {
        window.location.reload();
      } else {
        console.log("Already on latest version");
      }
    }
  }


}
