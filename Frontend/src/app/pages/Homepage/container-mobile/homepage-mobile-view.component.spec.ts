import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMobileViewComponent } from './homepage-mobile-view.component';

describe('HomepageMobileViewComponent', () => {
  let component: HomepageMobileViewComponent;
  let fixture: ComponentFixture<HomepageMobileViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageMobileViewComponent]
    });
    fixture = TestBed.createComponent(HomepageMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
