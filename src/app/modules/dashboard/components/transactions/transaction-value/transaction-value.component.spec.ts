import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionValueComponent } from './transaction-value.component';

describe('TransactionValueComponent', () => {
  let component: TransactionValueComponent;
  let fixture: ComponentFixture<TransactionValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
