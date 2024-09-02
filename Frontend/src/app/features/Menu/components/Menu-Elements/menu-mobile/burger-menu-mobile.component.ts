import { Component } from '@angular/core';
import { MenuItems } from 'src/app/shared/types/MenuItems';

@Component({
  selector: 'app-burger-menu-mobile',
  templateUrl: './burger-menu-mobile.component.html',
  styleUrls: ['./burger-menu-mobile.component.scss']
})
export class BurgerMenuMobileComponent {
  public menuItems = MenuItems;
}
