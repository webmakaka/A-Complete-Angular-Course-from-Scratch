import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged() {}

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
