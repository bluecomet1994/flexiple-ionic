import { Component } from '@angular/core';
import { DeviceInfo } from '@capacitor/device';

const ON_ERROR: DeviceInfo = {
  model: 'unknown',
  platform: 'web',
  operatingSystem: 'unknown',
  osVersion: 'unknown',
  manufacturer: 'unknown',
  isVirtual: true,
  webViewVersion: 'unknown',
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public deviceInfo: DeviceInfo;
  public get deviceInfoKeys(): string[] {
    return this.deviceInfo ? Object.keys(this.deviceInfo) : [];
  }

  // TODO: Get device info when the user did enter the page
  // TODO: Utilize ON_ERROR in case there is an error

  async ionViewWillEnter() {}
  async ionViewDidEnter() {}
  async ionViewWillLeave() {}
  async ionViewDidLeave() {}
}
