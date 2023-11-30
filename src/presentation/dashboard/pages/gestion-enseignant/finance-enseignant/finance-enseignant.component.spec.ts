import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEnseignantComponent } from './finance-enseignant.component';

describe('FinanceEnseignantComponent', () => {
  let component: FinanceEnseignantComponent;
  let fixture: ComponentFixture<FinanceEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceEnseignantComponent]
    });
    fixture = TestBed.createComponent(FinanceEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
