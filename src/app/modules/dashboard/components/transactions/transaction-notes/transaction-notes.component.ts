import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-transaction-notes',
  templateUrl: './transaction-notes.component.html',
  styleUrls: ['./transaction-notes.component.scss']
})
export class TransactionNotesComponent {

  @Input() notes: string;

  constructor() { }

}
