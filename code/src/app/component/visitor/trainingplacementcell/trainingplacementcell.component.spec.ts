import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingplacementcellComponent } from './trainingplacementcell.component';

describe('TrainingplacementcellComponent', () => {
  let component: TrainingplacementcellComponent;
  let fixture: ComponentFixture<TrainingplacementcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingplacementcellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingplacementcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
