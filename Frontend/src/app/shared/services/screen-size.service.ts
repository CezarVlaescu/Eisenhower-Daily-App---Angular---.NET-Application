import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private isMobileSubject = new BehaviorSubject<boolean>(this.checkScreenSize());
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => this.onResize());
  }

  private onResize(): void {
    const isMobile = this.checkScreenSize();
    this.isMobileSubject.next(isMobile);
  }

  private checkScreenSize(): boolean {
    return window.innerWidth < 1050;
  }
}

