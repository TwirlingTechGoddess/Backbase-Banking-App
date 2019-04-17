import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { mergeMap, switchMapTo } from 'rxjs/operators';

import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, delay } from 'rxjs/operators';

export enum filters {
  date = 1,
  beneficiaries = 2,
  amount = 3
}

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  @Output() onFilter = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  public sortByDate = true;
  public sortByBeneficiaries = false;
  public sortByAmount = false;

  @ViewChild('date') date;
  @ViewChild('beneficiaries') beneficiaries;
  @ViewChild('amount') amount;

  constructor() {
  }

  ngOnInit() {
  }

  onSearchInput(val) {
    this.onSearch.emit(val)
  }

  filter(val) {
    this.handleSort(val)
    this.onFilter.emit(val)
  }

  handleSort(type) {
    this.removeClass()
    switch (type) {
      case filters.date:
        this.sortByDate = !this.sortByDate;
        this.date.nativeElement.className = (this.sortByDate ? 'up' : 'down')
        break;
      case filters.beneficiaries:
        this.sortByBeneficiaries = !this.sortByBeneficiaries;
        this.beneficiaries.nativeElement.className = (this.sortByBeneficiaries ? 'up' : 'down')
        break;
      case filters.amount:
        this.sortByAmount = !this.sortByAmount;
        this.amount.nativeElement.className = (this.sortByAmount ? 'up' : 'down')
        break;
    }
  }

  removeClass() {
    this.date.nativeElement.className = ''
    this.beneficiaries.nativeElement.className = ''
    this.amount.nativeElement.className = ''
  }

}