import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysteachingupdateComponent } from './todaysteachingupdate.component';

describe('TodaysteachingupdateComponent', () => {
  let component: TodaysteachingupdateComponent;
  let fixture: ComponentFixture<TodaysteachingupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysteachingupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysteachingupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
