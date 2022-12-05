import { ReactNode } from "react";
import { Currency } from "../config";

interface ICurrencyContextProviderProps {
  children: ReactNode;
}

interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

interface ICurrencyContext {
  currentCurrency: ICurrency;
  currencies: ICurrency[];
  setNewCurrency: (option: ICurrency) => void;
}

interface IBudgetContextProviderProps {
  children: ReactNode;
}

interface IBudgetContext {
  budget: number;
  setNewBudget: (value: number) => void;
}

interface IExpense {
  id: string;
  name: string;
  price: number;
}

interface IExpensesContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  removeExpense: (id: string) => void;
}

interface IExpensesContextProviderProps {
  children: ReactNode;
}

export type {
  ICurrencyContextProviderProps,
  ICurrency,
  ICurrencyContext,
  IBudgetContextProviderProps,
  IBudgetContext,
  IExpense,
  IExpensesContext,
  IExpensesContextProviderProps,
};
