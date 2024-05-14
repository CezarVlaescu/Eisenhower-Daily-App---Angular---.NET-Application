import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContainerComponent } from './container/menu-container.component';
import { MenuRoutingModule } from './menu-routing.module';


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
