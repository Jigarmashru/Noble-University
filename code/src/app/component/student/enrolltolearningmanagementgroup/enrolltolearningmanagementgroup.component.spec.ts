import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolltolearningmanagementgroupComponent } from './enrolltolearningmanagementgroup.component';

describe('EnrolltolearningmanagementgroupComponent', () => {
  let component: EnrolltolearningmanagementgroupComponent;
  let fixture: ComponentFixture<EnrolltolearningmanagementgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolltolearningmanagementgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolltolearningmanagementgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
