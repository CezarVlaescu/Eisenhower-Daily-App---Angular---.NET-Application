import { Component } from '@angular/core';
import { RegisterInput, SharedInput } from '../../types/registerType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   
  registerInput: RegisterInput;

  constructor() {
    this.registerInput = new RegisterInput();
    this.registerInput.sharedInput = new SharedInput();
  }

  onSubmit(){

  }
}
