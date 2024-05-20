import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicleaderComponent } from './academicleader.component';

describe('AcademicleaderComponent', () => {
  let component: AcademicleaderComponent;
  let fixture: ComponentFixture<AcademicleaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicleaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
