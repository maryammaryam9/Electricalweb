import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcardpageComponent } from './detailcardpage.component';

describe('DetailcardpageComponent', () => {
  let component: DetailcardpageComponent;
  let fixture: ComponentFixture<DetailcardpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcardpageComponent]
    });
    fixture = TestBed.createComponent(DetailcardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
