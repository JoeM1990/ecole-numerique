import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceElevesComponent } from './finance-eleves.component';

describe('FinanceElevesComponent', () => {
  let component: FinanceElevesComponent;
  let fixture: ComponentFixture<FinanceElevesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceElevesComponent]
    });
    fixture = TestBed.createComponent(FinanceElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
