import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrandomComponent } from './cardrandom.component';

describe('CardrandomComponent', () => {
  let component: CardrandomComponent;
  let fixture: ComponentFixture<CardrandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardrandomComponent]
    });
    fixture = TestBed.createComponent(CardrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
