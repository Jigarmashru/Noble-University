import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorcontactusComponent } from './visitorcontactus.component';

describe('VisitorcontactusComponent', () => {
  let component: VisitorcontactusComponent;
  let fixture: ComponentFixture<VisitorcontactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorcontactusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
