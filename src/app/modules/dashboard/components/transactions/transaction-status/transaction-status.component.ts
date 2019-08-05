import { Component, Input } from '@angular/core';
import { TransactionStatus } from 'src/app/core/models/transaction.model';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.scss']
})
export class TransactionStatusComponent {

  @Input() status: TransactionStatus;

  get display() {
    switch (this.status) {
      case TransactionStatus.pending: { return 'Pending'; }
      case TransactionStatus.completed: { return 'Completed'; }
      default: { return 'None'; }
    }
  }

  get color() {
    switch (this.status) {
      case TransactionStatus.pending: { return 'warn'; }
      case TransactionStatus.completed: { return 'primary'; }
      default: { return ''; }
    }
  }

  constructor() { }

}
