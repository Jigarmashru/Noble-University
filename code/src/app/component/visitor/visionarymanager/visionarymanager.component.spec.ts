import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionarymanagerComponent } from './visionarymanager.component';

describe('VisionarymanagerComponent', () => {
  let component: VisionarymanagerComponent;
  let fixture: ComponentFixture<VisionarymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionarymanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionarymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
