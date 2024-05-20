import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreourprogramsComponent } from './exploreourprograms.component';

describe('ExploreourprogramsComponent', () => {
  let component: ExploreourprogramsComponent;
  let fixture: ComponentFixture<ExploreourprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreourprogramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreourprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
