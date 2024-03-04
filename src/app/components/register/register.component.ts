import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/registerModel';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerModel!: RegisterModel
  
  ngOnInit(): void {}

  constructor(private _registerService : RegisterServiceService){}

  submitUser(){
    return this._registerService.
    registerUser(this.registerModel).
    subscribe(response => console.log("User registered successfully!", response))
  }

}
