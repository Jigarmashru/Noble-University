import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydataComponent } from './facultydata.component';

describe('FacultydataComponent', () => {
  let component: FacultydataComponent;
  let fixture: ComponentFixture<FacultydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
