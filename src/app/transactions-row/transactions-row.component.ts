import { filters } from './../search-filters/search-filters.component';
import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/model/Transaction';

@Component({
  selector: 'app-transactions-row',
  templateUrl: './transactions-row.component.html',
  styleUrls: ['./transactions-row.component.css']
})

export class TransactionsRowComponent implements OnInit {

  public transactionsLog
  public transactionsBackup

  public sortByDate = true;
  public sortByBeneficiaries = true;
  public sortByAmount = true;


  @Input('transactions')
  set transctions(transactions){
    this.transactionsLog = this.transactionsBackup = transactions
  }

  


  constructor(private transactionsService: TransactionsService) {};

  ngOnInit() {
    return this.transactionsService.getAll().subscribe(data => {
        this.transactionsLog = this.transactionsBackup = data.data
      });
  }

  handleOnSearch(term) {
    console.log(this.transactionsBackup, this.transactionsLog)
    this.transactionsLog = this.transactionsBackup;
    if(term.length === 0) {
      return;
    }
    this.transactionsLog = this.transactionsLog.filter(
      obj => obj.merchant.toLowerCase().indexOf(term) !== -1
    )
  }
  
  handleSort(type) {
    switch(type) {
      case filters.date:
        this.handleSortDate();
        break;
      case filters.beneficiaries:
        this.handleSortBeneficiaries();
        break;
      case filters.amount:
        this.handleSortAmount();
        break;
    }
  }

  handleSortDate(){
    this.sortByDate = !this.sortByDate
    this.transactionsLog = this.transactionsLog.sort(
      (logA: Transaction, logB: Transaction) => {
        if(this.sortByDate){
          return logB.transactionDate - logA.transactionDate
        } else {
          return logA.transactionDate - logB.transactionDate
        }
      }
    )
  }

  handleSortBeneficiaries(){
    this.sortByBeneficiaries = !this.sortByBeneficiaries
    this.transactionsLog = this.transactionsLog.sort(
      (logA: Transaction, logB: Transaction) => {
        if(this.sortByBeneficiaries){
          return (logB.merchant).localeCompare(logA.merchant)
        } else {
          return (logA.merchant).localeCompare(logB.merchant)
        }
      }
    )
  }

  handleSortAmount(){
    this.sortByAmount = !this.sortByAmount
    this.transactionsLog = this.transactionsLog.sort(
      (logA: Transaction, logB: Transaction) => {
        if(this.sortByAmount){
          return parseInt(logB.amount) - parseInt(logA.amount)
        } else {
          return parseInt(logA.amount) - parseInt(logB.amount)
        }
      }
    )
  }
}
