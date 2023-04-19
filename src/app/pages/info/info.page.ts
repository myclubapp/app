import { Component, OnInit } from '@angular/core';
import { Device, DeviceId, DeviceInfo } from '@capacitor/device';
import packagejson from "./../../../../package.json";


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  public appVersion: string = packagejson.version;
  deviceId: DeviceId;
  deviceInfo: DeviceInfo; 

  constructor() { }

  async ngOnInit() {
    this.deviceId = await Device.getId();
    this.deviceInfo = await Device.getInfo();
  }

}
