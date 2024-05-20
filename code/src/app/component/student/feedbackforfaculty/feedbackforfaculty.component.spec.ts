import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackforfacultyComponent } from './feedbackforfaculty.component';

describe('FeedbackforfacultyComponent', () => {
  let component: FeedbackforfacultyComponent;
  let fixture: ComponentFixture<FeedbackforfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackforfacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackforfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
