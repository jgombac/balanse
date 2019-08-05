import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { Observable, of } from 'rxjs';
import { fillTransactions, transactions, transactionCategoryOptions, commonValues } from '../../mocks/transaction.mock';
import { BaseModel } from '../../models/base.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { 
    fillTransactions();
  }

  getAll(): Observable<Transaction[]> {
    return of(transactions);
  }

  getCategories(): Observable<BaseModel[]> {
    return of(transactionCategoryOptions);
  }

  getCommonValues(): Observable<number[]> {
    return of(commonValues);
  }
}
