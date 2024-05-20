import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuadvantagesComponent } from './nuadvantages.component';

describe('NuadvantagesComponent', () => {
  let component: NuadvantagesComponent;
  let fixture: ComponentFixture<NuadvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuadvantagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
