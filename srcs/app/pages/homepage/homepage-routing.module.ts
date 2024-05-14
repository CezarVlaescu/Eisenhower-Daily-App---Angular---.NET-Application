import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageContainerComponent } from './container/homepage-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageContainerComponent,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('../../features/menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'task',
        loadChildren: () => import('../../features/task-container/task.module').then(m => m.TaskModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
