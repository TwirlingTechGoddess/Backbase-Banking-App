import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, delay } from 'rxjs/operators';


@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  @Output() onSearch = new EventEmitter();

  private keyUpSubject = new Subject<string>();
  
  constructor() {
    // const onKeyUpEvent = this.keyUpSubject.pipe(
    //   debounceTime(250)).pipe(
    //   distinctUntilChanged()).pipe(
    //   mergeMap((searchTerm) => of(searchTerm))).pipe(
    //   delay(100)).subscribe(
    //   value => this.onSearch.emit(value))
  }

  ngOnInit() {
  }

  onSearchInput(val) {
    this.onSearch.emit(val)
  }

}
