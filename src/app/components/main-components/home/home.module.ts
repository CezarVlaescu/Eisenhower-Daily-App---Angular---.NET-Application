import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './container/home-container.component';

// containers

import { MenuModule } from '../menu/menu.module';
import { TaskModule } from '../task-container/task.module';


@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    TaskModule
  ],
  exports: [
    HomeContainerComponent
  ]
})
export class HomeModule { }
