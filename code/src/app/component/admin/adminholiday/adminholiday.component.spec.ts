import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminholidayComponent } from './adminholiday.component';

describe('AdminholidayComponent', () => {
  let component: AdminholidayComponent;
  let fixture: ComponentFixture<AdminholidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminholidayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminholidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
