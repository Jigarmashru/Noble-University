import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalstudiesComponent } from './vocationalstudies.component';

describe('VocationalstudiesComponent', () => {
  let component: VocationalstudiesComponent;
  let fixture: ComponentFixture<VocationalstudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocationalstudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocationalstudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
