import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Device } from '@capacitor/device';
import { IonicModule } from '@ionic/angular';
import { createPluginSpyObj, PluginSpyObj } from 'test/test-helpers';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let deviceSpy: PluginSpyObj<typeof Device>;

  beforeAll(() => {
    deviceSpy = createPluginSpyObj(Device, ['getInfo']);
    deviceSpy.getInfo.and.resolveTo({} as any);
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();

    deviceSpy.resetCalls();
  }));

  it('should get device info after page did view', async () => {
    await component.ionViewDidEnter();

    expect(deviceSpy.getInfo).toHaveBeenCalled();
  });
});
