import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyofpharmacyComponent } from './facultyofpharmacy.component';

describe('FacultyofpharmacyComponent', () => {
  let component: FacultyofpharmacyComponent;
  let fixture: ComponentFixture<FacultyofpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyofpharmacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyofpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
