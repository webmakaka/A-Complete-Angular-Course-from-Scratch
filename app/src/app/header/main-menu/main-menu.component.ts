import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['.//main-menu.component.scss'],
})
export class MainMenuComponent {
  mainMenuItems: string[] = [
    'Home',
    'Products',
    'Sale',
    'New Arrival',
    'Contact',
    'Services',
  ];
}
