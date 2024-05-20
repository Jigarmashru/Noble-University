import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofmanagementComponent } from './facultyofmanagement.component';

describe('FacultyofmanagementComponent', () => {
  let component: FacultyofmanagementComponent;
  let fixture: ComponentFixture<FacultyofmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
