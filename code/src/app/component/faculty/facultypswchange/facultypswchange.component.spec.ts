import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultypswchangeComponent } from './facultypswchange.component';

describe('FacultypswchangeComponent', () => {
  let component: FacultypswchangeComponent;
  let fixture: ComponentFixture<FacultypswchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultypswchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultypswchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
