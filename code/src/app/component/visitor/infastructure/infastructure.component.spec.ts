import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfastructureComponent } from './infastructure.component';

describe('InfastructureComponent', () => {
  let component: InfastructureComponent;
  let fixture: ComponentFixture<InfastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfastructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
