import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/core/services/transactions/transactions.service';
import { MatTableDataSource } from '@angular/material';
import { Transaction } from 'src/app/core/models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions = new MatTableDataSource<Transaction>();
  displayedColumns = ['date', 'value', 'category', 'status', 'notes'];

  constructor(
    private service: TransactionsService
  ) { }

  ngOnInit() {

    this.service.getAll().subscribe(
      data => {
        this.transactions.data = data;
      },
      error => console.log('Transactions error', error)
    );
  }


}
