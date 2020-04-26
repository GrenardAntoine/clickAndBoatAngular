import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SailingShipSettingsComponent } from './sailing-ship-settings.component';

describe('SailingShipSettingsComponent', () => {
  let component: SailingShipSettingsComponent;
  let fixture: ComponentFixture<SailingShipSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SailingShipSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SailingShipSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
