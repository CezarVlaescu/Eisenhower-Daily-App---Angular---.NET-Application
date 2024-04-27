import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

const api_URL = 'http://localhost:4200/api';

@Injectable({
  providedIn: 'root'
})
export class GetTokenServiceService {

  constructor(private http: HttpClient) { }

  public getToken() : Observable<any> {
    const endpoint = 'get-token';
    return this.http.get<any>(this.buildUrl(endpoint), {}).pipe(
      catchError(err => {
        console.error(err);
        throw err;
      })
    )
  }

  private buildUrl(partialUrl: string): string {
    return `${api_URL}/${partialUrl}`;
  }
}