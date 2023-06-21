import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  Geolocation,
  Position,
  WatchPositionCallback,
} from '@capacitor/geolocation';
import { IonicModule } from '@ionic/angular';
import { createPluginSpyObj, PluginSpyObj } from 'test/test-helpers';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let geolocationSpy: PluginSpyObj<typeof Geolocation>;
  let geolocationWatchCallback: WatchPositionCallback;

  beforeAll(() => {
    geolocationSpy = createPluginSpyObj(Geolocation, [
      'requestPermissions',
      'watchPosition',
      'clearWatch',
    ]);

    geolocationSpy.watchPosition.and.callFake(
      (_options: PositionOptions, callback: WatchPositionCallback) => {
        geolocationWatchCallback = callback;
        return Promise.resolve('001');
      }
    );
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();

    geolocationSpy.resetCalls();
  }));

  ['denied', 'prompt', 'prompt-with-rationale'].forEach(async (permission) => {
    it(`should show error if precise location permission denied for ${permission}`, async () => {
      component.showPermissionError = false;
      geolocationSpy.requestPermissions.and.resolveTo({
        location: permission as PermissionState,
        coarseLocation: permission as PermissionState,
      });

      await component.ionViewWillEnter();

      expect(component.showPermissionError).toBeTruthy();
      expect(geolocationSpy.watchPosition).not.toHaveBeenCalled();
    });
  });

  it('should start watching if precise location permission is granted', async () => {
    geolocationSpy.requestPermissions.and.resolveTo({
      location: 'granted' as PermissionState,
      coarseLocation: 'granted' as PermissionState,
    });

    await component.ionViewWillEnter();

    expect(component.positionError).toBeUndefined();
    expect(component.showPermissionError).toBeFalsy();
    expect(geolocationSpy.watchPosition).toHaveBeenCalled();
  });

  it('should show position', async () => {
    geolocationSpy.requestPermissions.and.resolveTo({
      location: 'granted' as PermissionState,
      coarseLocation: 'granted' as PermissionState,
    });
    const expectedLocation = {
      coords: { latitude: 11.11, longitude: 22.22, altitude: 5 },
    } as Position;

    await component.ionViewWillEnter();
    geolocationWatchCallback(expectedLocation, undefined);

    expect(component.position).toEqual(expectedLocation);
  });
});
