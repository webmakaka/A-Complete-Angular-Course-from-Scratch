import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {}

  updateSearchText(inputEL: HTMLInputElement) {
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
