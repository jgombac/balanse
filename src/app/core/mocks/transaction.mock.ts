import { Transaction, TransactionStatus, TransactionCategory } from '../models/transaction.model';
import { BaseModel } from '../models/base.model';

export const transactionCategoryOptions: TransactionCategory[] = [
    { id: randomString(), name: 'Food', icon: 'restaurant_menu' },
    { id: randomString(), name: 'Drinks', icon: 'local_bar' },
    { id: randomString(), name: 'Coffee', icon: 'local_cafe' },
    { id: randomString(), name: 'Tobacco', icon: 'smoking_rooms' },
    { id: randomString(), name: 'Unicef', icon: 'spa' },
    { id: randomString(), name: 'Commute', icon: 'train' }
];

export const commonValues: number[] = [
    1, 1.5, 2, 2.5, 5, 10, 30, 50
];

export const transactions: Transaction[] = [];

function randomString(): string {
    return Math.random().toString(36).substring(7);
}

function randomDate(): Date {
    const start = new Date(2018, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomvalue(): number {
    const min = -70;
    const max = 100
    return Math.random() * (max - min + 1) + min;
}

function randomCategory() {
    const min = 0;
    const max = transactionCategoryOptions.length - 1;
    return transactionCategoryOptions[Math.floor(Math.random() * (max - min + 1) + min)];
}

function randomStatus(): TransactionStatus {
    return Math.random() > 0.3 ? TransactionStatus.completed : TransactionStatus.pending;
}

function randomNotes(): string {
    const lorem = `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt`;
    const min = 5;
    const max = lorem.length - 1;
    const len = Math.random() * (max - min + 1) + min;
    return Math.random() > 0.3 ? '' : lorem.slice(0, len); 
}


export function randomTransaction(): Transaction {
    return { 
        id: randomString(), 
        date: randomDate(), 
        value: randomvalue(),
        category: randomCategory(),
        status: randomStatus(),
        notes: randomNotes(),
    }
}

export function fillTransactions(num = 100) {
    for (let i = 0; i < num; i++) {
        transactions.push(randomTransaction());
    }
}
