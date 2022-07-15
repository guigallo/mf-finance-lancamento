export type RootComponentProps = {};

export enum TransactionType {
  Expense = "expense",
  Revenue = "revenue",
}

export type Transaction = {
  type: TransactionType;
  description: string;
  amount: number;
  date: Date;
};
