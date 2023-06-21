import { Component, NgZone } from '@angular/core';
import { CallbackID, Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public showPermissionError = false;
  public positionError: any;
  public position: Position;

  private callbackId: CallbackID;

  constructor(private ngZone: NgZone) {}

  // TODO: request high precision permission when user is about to enter the page
  // TODO: Show permission error or start watching location depending on permission
  // TODO: Watch position with high accuracy
  // TODO: present either the position or the error
  // TODO: clear watch when user left the page

  async ionViewWillEnter() {
    this.showPermissionError = false;
    this.positionError = undefined;

    const permissionStatus = await Geolocation.requestPermissions({
      permissions: ['location'],
    });
  }

  async ionViewDidEnter() {}

  async ionViewWillLeave() {}

  async ionViewDidLeave() {}

  private async startWatchingLocation(): Promise<void> {
    this.callbackId = await Geolocation.watchPosition(
      {},
      (position, error) => {}
    );
  }
}
