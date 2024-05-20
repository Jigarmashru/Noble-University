import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentleaveComponent } from './permanentleave.component';

describe('PermanentleaveComponent', () => {
  let component: PermanentleaveComponent;
  let fixture: ComponentFixture<PermanentleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
