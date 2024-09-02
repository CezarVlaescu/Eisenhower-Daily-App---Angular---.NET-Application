import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    @Inject(String) private ApiUrl: string,
    private http: HttpClient
  ) { }

  createAsync(data: any) : Observable<any> {
    return this.http.post(this.ApiUrl, data).pipe(
      catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error creating"));
    }))
  }

  getAllAsync() : Observable<any> {
    return this.http.get<any>(this.ApiUrl).pipe(
      catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error getting the data"));
    }))
  }

  getByIdAsync(id: any) : Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/${id}`).pipe(
      catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error getting by id"));
    }))
  }

  updateAsync(id: any, data: any) : Observable<any> {
    return this.http.put<any>(`${this.ApiUrl}/${id}`, data).pipe(
      catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error updating the data"));
    }))
  }

  deteleAsync(id: any) : Observable<any> {
    return this.http.delete<any>(`${this.ApiUrl}/${id}`).pipe(
      catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error deleting data"));
    }))
  }
}
