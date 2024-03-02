import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginModel! : LoginModel;
  
  constructor(private auth : AuthServiceService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
