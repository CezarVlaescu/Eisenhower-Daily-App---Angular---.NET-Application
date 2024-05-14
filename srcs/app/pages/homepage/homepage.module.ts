import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageContainerComponent } from './container/homepage-container.component';
import { MenuModule } from 'src/app/features/menu/menu.module';
import { TaskModule } from 'src/app/features/task-container/task.module';


@NgModule({
  declarations: [
    HomepageContainerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MenuModule,
    TaskModule
  ],
  exports : [
    HomepageContainerComponent
  ]
})
export class HomepageModule { }
