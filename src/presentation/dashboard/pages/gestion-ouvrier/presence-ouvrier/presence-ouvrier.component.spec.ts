import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceOuvrierComponent } from './presence-ouvrier.component';

describe('PresenceOuvrierComponent', () => {
  let component: PresenceOuvrierComponent;
  let fixture: ComponentFixture<PresenceOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceOuvrierComponent]
    });
    fixture = TestBed.createComponent(PresenceOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
