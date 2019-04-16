import { HttpClient } from '@angular/common/http/';
import { Transaction } from './../model/Transaction';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  apiUrl = 'assets/transactions.json'
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<Transaction[]>(this.apiUrl)
  }
}
