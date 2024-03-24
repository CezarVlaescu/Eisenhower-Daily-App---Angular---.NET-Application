import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';

// container

import { TaskContainerComponent } from './container/task-container.component';

// components

import { DoComponentComponent } from './components/do-component/do-component.component';
import { DecideComponentComponent } from './components/decide-component/decide-component.component';
import { DelegateComponentComponent } from './components/delegate-component/delegate-component.component';
import { DeleteComponentComponent } from './components/delete-component/delete-component.component';
import { AddTaskComponent } from './components/add-task/add-task.component';


@NgModule({
  declarations: [ 
    TaskContainerComponent, 
    DoComponentComponent, 
    DecideComponentComponent, 
    DelegateComponentComponent, 
    DeleteComponentComponent, 
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  exports: [
    TaskContainerComponent,
    DoComponentComponent, 
    DecideComponentComponent, 
    DelegateComponentComponent, 
    DeleteComponentComponent, 
    AddTaskComponent
  ]
})
export class TaskModule { }
