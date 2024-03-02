import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LoginModule
  ],
  providers: [],

})
export class ComponentsModule { }
