import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError} from 'rxjs';
// To Do: environment for API URL 

const api_URL = 'http://localhost:4200/api';

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterServiceService {

  constructor(private http : HttpClient) { }

  public registerUser() : Observable<any> {
    const endpoint = 'register-user';
    return this.http.post<any>(this.buildUrl(endpoint), {}).pipe(
      catchError(err => {
        console.error(err);
        throw err;
      })
    );
  }
  
  private buildUrl(partialUrl: string) : string {
    return `${api_URL}/${partialUrl}`
  }
}