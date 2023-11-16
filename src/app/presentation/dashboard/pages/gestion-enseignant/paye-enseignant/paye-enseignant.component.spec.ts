import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeEnseignantComponent } from './paye-enseignant.component';

describe('PayeEnseignantComponent', () => {
  let component: PayeEnseignantComponent;
  let fixture: ComponentFixture<PayeEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayeEnseignantComponent]
    });
    fixture = TestBed.createComponent(PayeEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
