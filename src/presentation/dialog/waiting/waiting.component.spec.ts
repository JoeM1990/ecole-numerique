import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingComponent } from './waiting.component';

describe('WaitingComponent', () => {
  let component: WaitingComponent;
  let fixture: ComponentFixture<WaitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitingComponent]
    });
    fixture = TestBed.createComponent(WaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
