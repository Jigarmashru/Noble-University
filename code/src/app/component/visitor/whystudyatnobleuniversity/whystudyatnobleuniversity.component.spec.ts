import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhystudyatnobleuniversityComponent } from './whystudyatnobleuniversity.component';

describe('WhystudyatnobleuniversityComponent', () => {
  let component: WhystudyatnobleuniversityComponent;
  let fixture: ComponentFixture<WhystudyatnobleuniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhystudyatnobleuniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhystudyatnobleuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
