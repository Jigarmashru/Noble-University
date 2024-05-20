import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDCComponent } from './edc.component';

describe('EDCComponent', () => {
  let component: EDCComponent;
  let fixture: ComponentFixture<EDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
