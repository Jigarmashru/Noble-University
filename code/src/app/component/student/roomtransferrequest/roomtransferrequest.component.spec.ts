import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomtransferrequestComponent } from './roomtransferrequest.component';

describe('RoomtransferrequestComponent', () => {
  let component: RoomtransferrequestComponent;
  let fixture: ComponentFixture<RoomtransferrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomtransferrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomtransferrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
