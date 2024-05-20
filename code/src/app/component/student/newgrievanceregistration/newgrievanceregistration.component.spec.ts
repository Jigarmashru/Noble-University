import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgrievanceregistrationComponent } from './newgrievanceregistration.component';

describe('NewgrievanceregistrationComponent', () => {
  let component: NewgrievanceregistrationComponent;
  let fixture: ComponentFixture<NewgrievanceregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgrievanceregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgrievanceregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
