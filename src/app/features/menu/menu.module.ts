import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContainerComponent } from './container/menu-container.component';


@NgModule({
  declarations: [
    MenuContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuContainerComponent
  ]
})
export class MenuModule { }
