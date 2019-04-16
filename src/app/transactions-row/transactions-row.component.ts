import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../core/model/Transaction';
import { TransactionsService } from '../core/services/transactions.service';

@Component({
  selector: 'app-transactions-row',
  templateUrl: './transactions-row.component.html',
  styleUrls: ['./transactions-row.component.css']
})
export class TransactionsRowComponent implements OnInit {
  @Input() transactions$: Transaction[];
  constructor(private transactionsService: TransactionsService) {};

  ngOnInit() {
    return this.transactionsService.getAll()
      .subscribe(data => {
        this.transactions$ = data.data
        console.log(this.transactions$)
      });
  }

  handleOnSearch(event) {
    console.log(event)
  }
}
