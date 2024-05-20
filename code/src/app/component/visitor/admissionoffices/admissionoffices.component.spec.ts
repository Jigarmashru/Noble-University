import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionofficesComponent } from './admissionoffices.component';

describe('AdmissionofficesComponent', () => {
  let component: AdmissionofficesComponent;
  let fixture: ComponentFixture<AdmissionofficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionofficesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionofficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
