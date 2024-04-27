import { Component } from '@angular/core';
import { SharedInput, RegisterRequest } from 'src/app/shared/types/authType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   
  registerInput: RegisterRequest;

  constructor() {
    this.registerInput = new RegisterRequest();
    this.registerInput.shared = new SharedInput();
  }

  onSubmit(){

  }
}