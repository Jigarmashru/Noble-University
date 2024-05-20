import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorcareerComponent } from './visitorcareer.component';

describe('VisitorcareerComponent', () => {
  let component: VisitorcareerComponent;
  let fixture: ComponentFixture<VisitorcareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorcareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorcareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
