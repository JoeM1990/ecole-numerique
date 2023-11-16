import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionElevesComponent } from './impression-eleves.component';

describe('ImpressionElevesComponent', () => {
  let component: ImpressionElevesComponent;
  let fixture: ComponentFixture<ImpressionElevesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressionElevesComponent]
    });
    fixture = TestBed.createComponent(ImpressionElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
