import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuContainerComponent } from './components/container/menu-container.component';

// Menu Elements

import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    MenuContainerComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    AuthModule
  ],
  exports: [
    MenuContainerComponent
  ]
})
export class MenuModule { }
