import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegateComponentComponent } from './delegate-component.component';

describe('DelegateComponentComponent', () => {
  let component: DelegateComponentComponent;
  let fixture: ComponentFixture<DelegateComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelegateComponentComponent]
    });
    fixture = TestBed.createComponent(DelegateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
