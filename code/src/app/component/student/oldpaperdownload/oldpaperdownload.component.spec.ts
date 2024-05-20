import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldpaperdownloadComponent } from './oldpaperdownload.component';

describe('OldpaperdownloadComponent', () => {
  let component: OldpaperdownloadComponent;
  let fixture: ComponentFixture<OldpaperdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldpaperdownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldpaperdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
