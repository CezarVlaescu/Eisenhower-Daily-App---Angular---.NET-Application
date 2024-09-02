import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainerComponent } from './container/tasks-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksMobileViewComponent } from './container-mobile/tasks-mobile-view.component';

@NgModule({
  declarations: [
    TasksContainerComponent,
    TasksMobileViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule
  ],
  exports: [
    TasksContainerComponent,
    TasksMobileViewComponent
  ]
})
export class TasksModule { }
