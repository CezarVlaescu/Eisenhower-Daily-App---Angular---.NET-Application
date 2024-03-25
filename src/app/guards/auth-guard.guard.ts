import { CanActivateFn, Router } from '@angular/router';
import { GetTokenServiceService } from '../components/main-components/auth/services/get-token-service.service';
import { inject } from '@angular/core';

export const AuthGuardGuard: CanActivateFn = (route, state) => {
  
  const authTokenService = inject(GetTokenServiceService)
  const getToken = authTokenService.getToken();

  if(getToken != null) return true;
  else{
    inject(Router).navigate(['/auth/login']);
    return false;
  }
};
