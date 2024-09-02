import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TTask, TTaskPoolResponse } from 'src/app/shared/types/SharedTypes';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends DataService {

  private taskApiRoute: string;

  constructor(
    private authService : AuthService,
    private httpPrivate : HttpClient,
  ) {
    super('', httpPrivate)
    this.taskApiRoute = this.createApiRoute();
  }

  private createApiRoute(): string {
    const userId = this.authService.getUserId();
    return `https://localhost:7048/api/Tasks/${userId}`;
  }

  private checkAndRefreshApiRoute(): void {
    const currentUserId = this.authService.getUserId();
    if (!currentUserId) {
      throw new Error("User ID is null. Cannot perform tasks operations.");
    }
    if (!this.taskApiRoute || !this.taskApiRoute.includes(currentUserId)) {
      this.taskApiRoute = this.createApiRoute();
    }
  }

  override createAsync(data: TTask): Observable<any> {
    this.checkAndRefreshApiRoute();
    return this.httpPrivate.post<any>(this.taskApiRoute, data).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error("Error creating"));
      }),
      tap(() => {
        this.getAllAsync()
      })
    );
 }

  override getAllAsync(): Observable<TTaskPoolResponse> {
      this.checkAndRefreshApiRoute();
      return this.httpPrivate.get<TTaskPoolResponse>(this.taskApiRoute).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error("Error getting the data"));
        })
      );
  }

  override updateAsync(id: string, data: TTask): Observable<any> {
      this.checkAndRefreshApiRoute();
      return this.httpPrivate.put<any>(`${this.taskApiRoute}/${id}`, data).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error("Error updating the data"));
        })
      );
  }

  override deteleAsync(id: string): Observable<any> {
      this.checkAndRefreshApiRoute();
      return this.httpPrivate.delete<any>(`${this.taskApiRoute}/${id}`).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error("Error deleting data"));
        })
      );
  }
}
