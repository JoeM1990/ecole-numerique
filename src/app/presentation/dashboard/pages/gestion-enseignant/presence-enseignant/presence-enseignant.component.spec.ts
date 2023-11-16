import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceEnseignantComponent } from './presence-enseignant.component';

describe('PresenceEnseignantComponent', () => {
  let component: PresenceEnseignantComponent;
  let fixture: ComponentFixture<PresenceEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceEnseignantComponent]
    });
    fixture = TestBed.createComponent(PresenceEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
