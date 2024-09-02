import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContainerComponent } from './container/menu-container.component';
import { MenuElementsComponent } from './components/Menu-Elements/menu-elements.component';
import { ProfileComponent } from './components/Profile/profile.component';

import { MatBadgeModule } from '@angular/material/badge';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BurgerMenuMobileComponent } from './components/Menu-Elements/menu-mobile/burger-menu-mobile.component';


@NgModule({
  declarations: [
    MenuContainerComponent,
    MenuElementsComponent,
    ProfileComponent,
    BurgerMenuMobileComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MenuContainerComponent,
    MenuElementsComponent,
    ProfileComponent,
    BurgerMenuMobileComponent
  ]
})

export class MenuModule { }
