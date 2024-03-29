import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const authToken = localStorage.getItem('token'); // to put the service that get the token from backend

    if(authToken){ // if the token is present
      const req = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + authToken)
      }) // attache to the user header
      return next.handle(req);
    }
    else return next.handle(request);
  }
}
