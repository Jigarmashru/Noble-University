import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofliabraryscienceComponent } from './facultyofliabraryscience.component';

describe('FacultyofliabraryscienceComponent', () => {
  let component: FacultyofliabraryscienceComponent;
  let fixture: ComponentFixture<FacultyofliabraryscienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofliabraryscienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofliabraryscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
