import { Component } from '@angular/core';
import { MenuItems } from 'src/app/shared/types/MenuItems';

@Component({
  selector: 'app-menu-elements',
  templateUrl: './menu-elements.component.html',
  styleUrls: ['./menu-elements.component.scss']
})
export class MenuElementsComponent {
  public menuItems = MenuItems;
}
