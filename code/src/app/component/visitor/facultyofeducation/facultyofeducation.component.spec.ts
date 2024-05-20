import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofeducationComponent } from './facultyofeducation.component';

describe('FacultyofeducationComponent', () => {
  let component: FacultyofeducationComponent;
  let fixture: ComponentFixture<FacultyofeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofeducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
