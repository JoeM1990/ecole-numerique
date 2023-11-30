import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceOuvrierComponent } from './finance-ouvrier.component';

describe('FinanceOuvrierComponent', () => {
  let component: FinanceOuvrierComponent;
  let fixture: ComponentFixture<FinanceOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceOuvrierComponent]
    });
    fixture = TestBed.createComponent(FinanceOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
