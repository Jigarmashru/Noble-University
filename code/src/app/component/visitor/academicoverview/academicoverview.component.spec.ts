import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicoverviewComponent } from './academicoverview.component';

describe('AcademicoverviewComponent', () => {
  let component: AcademicoverviewComponent;
  let fixture: ComponentFixture<AcademicoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicoverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
