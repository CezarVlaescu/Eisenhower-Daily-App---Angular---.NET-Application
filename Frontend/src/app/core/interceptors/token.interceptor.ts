import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private jwtHelper : JwtHelperService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.authService.getToken();
    let req = request;

    if (token !== null && !this.jwtHelper.isTokenExpired(token)){
      req = request.clone({
        headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`)
      })
    }

    return next.handle(req);
  }
}

export const AuthInterceptorProviders = [
  { 
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
]
