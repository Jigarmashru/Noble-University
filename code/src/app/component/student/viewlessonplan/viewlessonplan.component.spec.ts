import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlessonplanComponent } from './viewlessonplan.component';

describe('ViewlessonplanComponent', () => {
  let component: ViewlessonplanComponent;
  let fixture: ComponentFixture<ViewlessonplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlessonplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlessonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
