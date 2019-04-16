import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  @Output() onSearch = new EventEmitter();
  constructor() {
    
  }

  ngOnInit() {
  }

  onSearchInput(val) {
    // console.log(val)
    this.onSearch.emit(val)
  }

}
