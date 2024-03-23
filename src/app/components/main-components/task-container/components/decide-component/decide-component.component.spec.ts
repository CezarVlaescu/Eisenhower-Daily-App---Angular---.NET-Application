import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideComponentComponent } from './decide-component.component';

describe('DecideComponentComponent', () => {
  let component: DecideComponentComponent;
  let fixture: ComponentFixture<DecideComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecideComponentComponent]
    });
    fixture = TestBed.createComponent(DecideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
