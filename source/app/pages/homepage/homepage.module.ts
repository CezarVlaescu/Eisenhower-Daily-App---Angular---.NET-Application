import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageAComponent } from './components/homepage-a/homepage-a.component';
import { HomepageContainerComponent } from './container/homepage-container.component';


@NgModule({
  declarations: [
    HomepageAComponent,
    HomepageContainerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
