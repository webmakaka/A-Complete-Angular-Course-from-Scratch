import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchText: string = 'Womens watch';

  // updateSearchText(event: any) {
  //   this.searchText = event.target.value;
  // }
}
