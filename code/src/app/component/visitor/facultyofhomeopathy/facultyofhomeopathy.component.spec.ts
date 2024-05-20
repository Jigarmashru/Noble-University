import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofhomeopathyComponent } from './facultyofhomeopathy.component';

describe('FacultyofhomeopathyComponent', () => {
  let component: FacultyofhomeopathyComponent;
  let fixture: ComponentFixture<FacultyofhomeopathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofhomeopathyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofhomeopathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
