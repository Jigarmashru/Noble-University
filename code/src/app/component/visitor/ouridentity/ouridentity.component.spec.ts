import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuridentityComponent } from './ouridentity.component';

describe('OuridentityComponent', () => {
  let component: OuridentityComponent;
  let fixture: ComponentFixture<OuridentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuridentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuridentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
