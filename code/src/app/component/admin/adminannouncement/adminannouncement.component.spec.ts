import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminannouncementComponent } from './adminannouncement.component';

describe('AdminannouncementComponent', () => {
  let component: AdminannouncementComponent;
  let fixture: ComponentFixture<AdminannouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminannouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
