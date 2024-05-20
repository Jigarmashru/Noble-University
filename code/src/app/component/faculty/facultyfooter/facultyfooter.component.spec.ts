import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyfooterComponent } from './facultyfooter.component';

describe('FacultyfooterComponent', () => {
  let component: FacultyfooterComponent;
  let fixture: ComponentFixture<FacultyfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
