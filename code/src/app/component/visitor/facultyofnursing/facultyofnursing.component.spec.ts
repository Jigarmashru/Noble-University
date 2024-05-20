import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofnursingComponent } from './facultyofnursing.component';

describe('FacultyofnursingComponent', () => {
  let component: FacultyofnursingComponent;
  let fixture: ComponentFixture<FacultyofnursingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofnursingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofnursingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
