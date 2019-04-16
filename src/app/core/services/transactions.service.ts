import { HttpClient } from '@angular/common/http/';
import { Transaction } from './../model/Transaction';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    const data = from(fetch('assets/transations.json'));
    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
     });
      // .do(console.log);
      return
  }
}
