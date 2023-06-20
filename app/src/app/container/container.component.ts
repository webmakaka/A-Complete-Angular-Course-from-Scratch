import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
