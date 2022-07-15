import { useCallback, useState } from "react";
import { Transaction, TransactionType } from "./types";

const initialTransaction: Transaction = {
  type: TransactionType.Expense,
  description: "",
  amount: 0,
  date: new Date(),
};

type InputProps = {
  name: string;
  type: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, name, type, value, onChange }: InputProps) {
  return (
    <label>
      {label}:
      <input
        id={name}
        name={name}
        data-testid={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function TransactionForm() {
  const [transaction, setTransaction] =
    useState<Transaction>(initialTransaction);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      console.info(transaction);
    },
    [transaction]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const key = e.target.name;
      const value = e.target.value;

      setTransaction((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <Input
          label="Descrição"
          name="description"
          type="text"
          value={transaction.description}
          onChange={handleInputChange}
        />
        <Input
          label="Valor"
          name="amount"
          type="number"
          value={transaction.amount}
          onChange={handleInputChange}
        />

        <input type="submit" data-testid="submit" />
      </form>
    </section>
  );
}

export default TransactionForm;
