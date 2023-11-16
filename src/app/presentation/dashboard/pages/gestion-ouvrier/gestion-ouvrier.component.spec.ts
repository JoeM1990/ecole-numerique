import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOuvrierComponent } from './gestion-ouvrier.component';

describe('GestionOuvrierComponent', () => {
  let component: GestionOuvrierComponent;
  let fixture: ComponentFixture<GestionOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionOuvrierComponent]
    });
    fixture = TestBed.createComponent(GestionOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
