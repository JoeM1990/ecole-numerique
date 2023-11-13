import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionOuvrierComponent } from './impression-ouvrier.component';

describe('ImpressionOuvrierComponent', () => {
  let component: ImpressionOuvrierComponent;
  let fixture: ComponentFixture<ImpressionOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressionOuvrierComponent]
    });
    fixture = TestBed.createComponent(ImpressionOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
