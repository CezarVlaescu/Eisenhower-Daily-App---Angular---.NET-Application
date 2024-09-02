import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { TLoginInput, TLoginResponse, TRegisterUserInput, TUserData } from 'src/app/shared/types/SharedTypes';

const userApi = "https://localhost:7048/api/User";
const loginApi = "https://localhost:7048/api/Login";

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {
  constructor(
    http: HttpClient, 
    private httpPrivate: HttpClient,
    private authService: AuthService
  )
  {
    super(userApi, http)
  }

  public userData! : TUserData;

  signIn(data: TLoginInput) : Observable<TLoginResponse> {
    return this.httpPrivate.post<TLoginResponse>(loginApi, data)
  }

  registerUser(data: TRegisterUserInput) : Observable<TLoginResponse> {
    return this.createAsync(data);
  }

  getUserById(): Observable<TUserData | null> {
    const id = this.authService.getUserId();
    if (!id) return of(null);

    return this.getByIdAsync(id).pipe(
      map((user: any) => {
        return {
          username: user.name,
          email: user.email,
          image: user.image
        } as TUserData;
      })
    );
  }
}
