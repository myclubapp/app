import { Component, OnInit } from '@angular/core';
import { Device, DeviceId, DeviceInfo } from '@capacitor/device';
import { Browser, OpenOptions​ } from '@capacitor/browser';
import packagejson from "./../../../../package.json";

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

  constructor() { }

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

}
