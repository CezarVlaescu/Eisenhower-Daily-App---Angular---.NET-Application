import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageAComponent } from './components/homepage-a/homepage-a.component';
import { HomepageContainerComponent } from './container/homepage-container.component';
import { MenuModule } from 'source/app/features/menu/menu.module';
import { TaskModule } from 'source/app/features/task-container/task.module';


@NgModule({
  declarations: [
    HomepageAComponent,
    HomepageContainerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MenuModule,
    TaskModule
  ]
})
export class HomepageModule { }
