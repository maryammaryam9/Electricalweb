import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingAreasComponent } from './operating-areas.component';

describe('OperatingAreasComponent', () => {
  let component: OperatingAreasComponent;
  let fixture: ComponentFixture<OperatingAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatingAreasComponent]
    });
    fixture = TestBed.createComponent(OperatingAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
