import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuContainerComponent } from './components/container/menu-container.component';


@NgModule({
  declarations: [
    MenuContainerComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuContainerComponent
  ]
})
export class MenuModule { }
