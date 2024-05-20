import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcomplaintComponent } from './studentcomplaint.component';

describe('StudentcomplaintComponent', () => {
  let component: StudentcomplaintComponent;
  let fixture: ComponentFixture<StudentcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
