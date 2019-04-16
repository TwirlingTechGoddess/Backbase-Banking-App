import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../core/model/Transaction';
import { TransactionsService } from '../core/services/transactions.service';

@Component({
  selector: 'app-transactions-row',
  templateUrl: './transactions-row.component.html',
  styleUrls: ['./transactions-row.component.css']
})

export class TransactionsRowComponent implements OnInit {

  public transactionsLog
  public transactionsBackup

  @Input('transactions')
  set transctions(transactions){
    this.transactionsLog = this.transactionsBackup = transactions
  }

  


  constructor(private transactionsService: TransactionsService) {};

  ngOnInit() {
    return this.transactionsService.getAll()
      .subscribe(data => {
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
}
