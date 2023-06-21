import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;
  let imagePickerSpy: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot()],
      // LV REVIEW: Is the applicant supposed to properly create a spy object for ImagePicker? Suppose so, right?!
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get picture if read permission provided', async () => {
    imagePickerSpy.hasReadPermission.and.resolveTo(true);

    await component.ionViewDidEnter();

    expect(imagePickerSpy.getPictures).toHaveBeenCalledWith({
      maximumImagesCount: 5,
    });
  });

  it('should not get pictures autmatically after permision request', async () => {
    imagePickerSpy.hasReadPermission.and.resolveTo(false);
    imagePickerSpy.requestReadPermission.and.resolveTo(true);

    await component.ionViewDidEnter();

    expect(imagePickerSpy.getPictures).not.toHaveBeenCalled();
  });
});
