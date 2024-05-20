import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpayfeesComponent } from './allpayfees.component';

describe('AllpayfeesComponent', () => {
  let component: AllpayfeesComponent;
  let fixture: ComponentFixture<AllpayfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpayfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpayfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
