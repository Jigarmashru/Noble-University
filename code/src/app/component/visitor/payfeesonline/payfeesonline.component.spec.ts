import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfeesonlineComponent } from './payfeesonline.component';

describe('PayfeesonlineComponent', () => {
  let component: PayfeesonlineComponent;
  let fixture: ComponentFixture<PayfeesonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayfeesonlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayfeesonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
