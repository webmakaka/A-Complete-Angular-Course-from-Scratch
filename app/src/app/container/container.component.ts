import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from 'src/app/container/product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value;
  }
}
