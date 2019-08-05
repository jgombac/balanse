import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-date',
  templateUrl: './transaction-date.component.html',
  styleUrls: ['./transaction-date.component.scss']
})
export class TransactionDateComponent {

  @Input() date: Date;

  constructor() { }

}
