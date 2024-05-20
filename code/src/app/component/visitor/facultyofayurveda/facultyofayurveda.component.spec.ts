import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofayurvedaComponent } from './facultyofayurveda.component';

describe('FacultyofayurvedaComponent', () => {
  let component: FacultyofayurvedaComponent;
  let fixture: ComponentFixture<FacultyofayurvedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofayurvedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofayurvedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
