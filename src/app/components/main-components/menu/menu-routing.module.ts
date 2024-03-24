import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuContainerComponent } from './components/container/menu-container.component';

const routes: Routes = [
  {
    path: '',
    component: MenuContainerComponent
  },
  {
    path: 'auth',
    loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
