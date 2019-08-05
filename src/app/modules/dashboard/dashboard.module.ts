import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardRoutingModule } from './dashboard.routing';
import { OverviewComponent } from './components/overview/overview.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionStatusComponent } from './components/transactions/transaction-status/transaction-status.component';
import { TransactionValueComponent } from './components/transactions/transaction-value/transaction-value.component';
import { CommonModule } from '@angular/common';
import { TransactionCategoryComponent } from './components/transactions/transaction-category/transaction-category.component';
import { TransactionDateComponent } from './components/transactions/transaction-date/transaction-date.component';
import { TransactionNotesComponent } from './components/transactions/transaction-notes/transaction-notes.component';

@NgModule({
    declarations: [
        OverviewComponent,
        TransactionsComponent,
        TransactionStatusComponent,
        TransactionValueComponent,
        TransactionCategoryComponent,
        TransactionDateComponent,
        TransactionNotesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,

        DashboardRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class DashboardModule {}
