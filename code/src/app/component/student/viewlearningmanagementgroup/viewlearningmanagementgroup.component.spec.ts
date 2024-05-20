import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlearningmanagementgroupComponent } from './viewlearningmanagementgroup.component';

describe('ViewlearningmanagementgroupComponent', () => {
  let component: ViewlearningmanagementgroupComponent;
  let fixture: ComponentFixture<ViewlearningmanagementgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlearningmanagementgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlearningmanagementgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
