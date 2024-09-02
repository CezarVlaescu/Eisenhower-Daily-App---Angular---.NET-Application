import { Directive, OnInit, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../services/screen-size.service';

@Directive({
  selector: '[appScreenSize]'
})
export class ScreenSizeDirective implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private hasView = false;

  @Input() appScreenSize!: 'mobile' | 'desktop';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private screenSizeService: ScreenSizeService
  ) { }

  ngOnInit(): void {
    this.subscription = this.screenSizeService.isMobile$.subscribe(isMobile => {
      if ((isMobile && this.appScreenSize === 'mobile') || (!isMobile && this.appScreenSize === 'desktop')) {
        if (!this.hasView) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.hasView = true;
        }
      } else {
        if (this.hasView) {
          this.viewContainer.clear();
          this.hasView = false;
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
