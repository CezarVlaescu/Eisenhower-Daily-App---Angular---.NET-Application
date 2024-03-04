import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],

})
export class ComponentsModule { }
