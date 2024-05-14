import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoComponentComponent } from './do-component.component';

describe('DoComponentComponent', () => {
  let component: DoComponentComponent;
  let fixture: ComponentFixture<DoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoComponentComponent]
    });
    fixture = TestBed.createComponent(DoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
