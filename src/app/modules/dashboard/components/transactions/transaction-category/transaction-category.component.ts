import { Component, Input } from '@angular/core';
import { BaseModel } from 'src/app/core/models/base.model';
import { TransactionCategory } from 'src/app/core/models/transaction.model';

@Component({
  selector: 'app-transaction-category',
  templateUrl: './transaction-category.component.html',
  styleUrls: ['./transaction-category.component.scss']
})
export class TransactionCategoryComponent{

  @Input() category: TransactionCategory;

  constructor() { }

}
