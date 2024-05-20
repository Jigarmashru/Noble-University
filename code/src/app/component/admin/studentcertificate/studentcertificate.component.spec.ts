import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcertificateComponent } from './studentcertificate.component';

describe('StudentcertificateComponent', () => {
  let component: StudentcertificateComponent;
  let fixture: ComponentFixture<StudentcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
