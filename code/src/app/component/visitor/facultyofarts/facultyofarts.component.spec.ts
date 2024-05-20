import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofartsComponent } from './facultyofarts.component';

describe('FacultyofartsComponent', () => {
  let component: FacultyofartsComponent;
  let fixture: ComponentFixture<FacultyofartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
