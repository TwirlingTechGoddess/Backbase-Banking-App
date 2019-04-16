import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { TransactionsRowComponent } from './transactions-row/transactions-row.component';
import { TransactionsService } from './core/services/transactions.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MakeTransferComponent,
    RecentTransactionsComponent,
    SearchFiltersComponent,
    TransactionsRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
