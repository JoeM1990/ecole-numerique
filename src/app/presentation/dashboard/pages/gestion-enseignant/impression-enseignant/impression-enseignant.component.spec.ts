import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionEnseignantComponent } from './impression-enseignant.component';

describe('ImpressionEnseignantComponent', () => {
  let component: ImpressionEnseignantComponent;
  let fixture: ComponentFixture<ImpressionEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressionEnseignantComponent]
    });
    fixture = TestBed.createComponent(ImpressionEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
