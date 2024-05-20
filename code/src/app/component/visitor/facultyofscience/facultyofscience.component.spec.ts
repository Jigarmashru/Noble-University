import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofscienceComponent } from './facultyofscience.component';

describe('FacultyofscienceComponent', () => {
  let component: FacultyofscienceComponent;
  let fixture: ComponentFixture<FacultyofscienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofscienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
