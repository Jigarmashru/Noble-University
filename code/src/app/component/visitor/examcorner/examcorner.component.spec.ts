import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamcornerComponent } from './examcorner.component';

describe('ExamcornerComponent', () => {
  let component: ExamcornerComponent;
  let fixture: ComponentFixture<ExamcornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamcornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamcornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
