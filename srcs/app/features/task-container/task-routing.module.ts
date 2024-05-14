import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components

import { DoComponentComponent } from './components/do-component/do-component.component';
import { DecideComponentComponent } from './components/decide-component/decide-component.component';
import { DelegateComponentComponent } from './components/delegate-component/delegate-component.component';
import { DeleteComponentComponent } from './components/delete-component/delete-component.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: '', component: DoComponentComponent },
  { path: '', component: DecideComponentComponent},
  { path: '', component: DelegateComponentComponent},
  { path: '', component: DeleteComponentComponent},
  { path: 'add-task', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
