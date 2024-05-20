import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyupdateComponent } from './facultyupdate.component';

describe('FacultyupdateComponent', () => {
  let component: FacultyupdateComponent;
  let fixture: ComponentFixture<FacultyupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
