import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSICComponent } from './nsic.component';

describe('NSICComponent', () => {
  let component: NSICComponent;
  let fixture: ComponentFixture<NSICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NSICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
