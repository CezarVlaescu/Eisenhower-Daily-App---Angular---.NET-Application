import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuardGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthServiceService);

  return authService.getTokenAsync().pipe(
  map(token => {
    if(token) return true;
    else {
      inject(Router).navigate(['/auth/login']);
      return false;
    }
  }),
  catchError(err => {
    inject(Router).navigate(['/auth/login']);
    return of(false);
  }))
};
