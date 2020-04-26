import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatamaranSettingsComponent } from './catamaran-settings.component';

describe('CatamaranSettingsComponent', () => {
  let component: CatamaranSettingsComponent;
  let fixture: ComponentFixture<CatamaranSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatamaranSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatamaranSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
