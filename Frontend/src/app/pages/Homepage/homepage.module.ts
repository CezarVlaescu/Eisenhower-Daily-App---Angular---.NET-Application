import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContainerComponent } from './container/homepage-container.component';
import { MenuModule } from 'src/app/features/Menu/menu.module';
import { TasksModule } from 'src/app/features/Tasks/tasks.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageMobileViewComponent } from './container-mobile/homepage-mobile-view.component';

@NgModule({
  declarations: [
    HomepageContainerComponent,
    HomepageMobileViewComponent
  ],
  imports: [
    CommonModule,
    TasksModule,
    MenuModule,
    SharedModule,
    MenuModule
  ],
  exports: [
    HomepageContainerComponent,
    HomepageMobileViewComponent  
  ]
})
export class HomepageModule { }
