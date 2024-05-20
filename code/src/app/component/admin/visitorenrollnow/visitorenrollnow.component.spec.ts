import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorenrollnowComponent } from './visitorenrollnow.component';

describe('VisitorenrollnowComponent', () => {
  let component: VisitorenrollnowComponent;
  let fixture: ComponentFixture<VisitorenrollnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorenrollnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorenrollnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
