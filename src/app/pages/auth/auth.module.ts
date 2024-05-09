import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

// components

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// modules

import { SharedModule } from 'src/app/shared/shared.module';
import { SharedComponent } from './components/shared/shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    SharedComponent
  ]
})
export class AuthModule { }
