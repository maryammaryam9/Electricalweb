import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurchargesComponent } from './ourcharges.component';

describe('OurchargesComponent', () => {
  let component: OurchargesComponent;
  let fixture: ComponentFixture<OurchargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurchargesComponent]
    });
    fixture = TestBed.createComponent(OurchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
