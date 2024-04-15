import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, mergeMap, throwError } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    return this.auth.getTokenAsync().pipe(mergeMap((jtwToken) => {
      if(jtwToken){
        request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${jtwToken}`)
        })
      }
      return next.handle(request);
    }), catchError((error: HttpErrorResponse) => {
        if(error.status === 401) throw new Error("Implement the logout service instand of throwing an Error"); // force logout, implemented service ex. this.auth.Logout() 
        return throwError(() => new Error('Error handling in HTTP Interceptor'));
    }));
  }
}
