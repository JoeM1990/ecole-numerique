import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeOuvrierComponent } from './paye-ouvrier.component';

describe('PayeOuvrierComponent', () => {
  let component: PayeOuvrierComponent;
  let fixture: ComponentFixture<PayeOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayeOuvrierComponent]
    });
    fixture = TestBed.createComponent(PayeOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
