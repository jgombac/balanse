import { Component, Input } from '@angular/core';
import { colors } from './colors';

@Component({
  selector: 'app-transaction-value',
  templateUrl: './transaction-value.component.html',
  styleUrls: ['./transaction-value.component.scss']
})
export class TransactionValueComponent {


  @Input() value: number;

  get color() {
    if (this.value > 0) { return colors.green; }
    else if (this.value > -10) { return colors.white; }
    else if (this.value > -50) { return colors.yellow; }
    return colors.red;
  }

  constructor() { }

}
