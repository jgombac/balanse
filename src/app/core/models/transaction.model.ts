import { BaseModel } from './base.model';

export interface Transaction {
    id: string;
    date: Date;
    value: number;
    category: TransactionCategory;
    status: TransactionStatus;
    notes?: string;
}

export enum TransactionStatus {
    pending = 0,
    completed = 1
}

export interface TransactionCategory extends BaseModel {
    icon: string;
}
