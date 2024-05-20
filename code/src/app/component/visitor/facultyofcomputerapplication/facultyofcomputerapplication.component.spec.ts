import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofcomputerapplicationComponent } from './facultyofcomputerapplication.component';

describe('FacultyofcomputerapplicationComponent', () => {
  let component: FacultyofcomputerapplicationComponent;
  let fixture: ComponentFixture<FacultyofcomputerapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofcomputerapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofcomputerapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
