import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleaveapplicationComponent } from './addleaveapplication.component';

describe('AddleaveapplicationComponent', () => {
  let component: AddleaveapplicationComponent;
  let fixture: ComponentFixture<AddleaveapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddleaveapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddleaveapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
