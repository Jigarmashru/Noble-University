import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofengineeringComponent } from './facultyofengineering.component';

describe('FacultyofengineeringComponent', () => {
  let component: FacultyofengineeringComponent;
  let fixture: ComponentFixture<FacultyofengineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofengineeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
