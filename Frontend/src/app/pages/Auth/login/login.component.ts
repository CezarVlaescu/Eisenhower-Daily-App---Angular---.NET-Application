import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/auth/user.service';
import { TLoginInput, TLoginResponse, TTaskPoolResponse } from 'src/app/shared/types/SharedTypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginInput! : TLoginInput;
  public isLoginFailed : boolean = false;
  public tasks: TTaskPoolResponse | null = null;
  errorMessage: string = "";

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginInput = {
      email: "",
      password: "",
    }
  }
  
  public logUser(data: TLoginInput): void {
    this.loginInput = {
      ...this.loginInput,
      email: data.email,
      password: data.password
    }

    this.userService.signIn(this.loginInput).subscribe({
      next: (data: TLoginResponse) => {
        this.authService.saveToken(data.token);
        this.isLoginFailed = false;
        this.snackBar.open('Login successful!', '✅', { duration: 3000 });
        this.onLogin();
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
        this.isLoginFailed = true;
        this.snackBar.open(this.errorMessage, '❌');
      }
    })
  }

  private onLogin(){
    return this.route.navigate(['/homepage']);
  }
}
