import { ReactNode } from "react";
import { Currency } from "../config";

interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

interface IExpense {
  id: string;
  name: string;
  price: number;
}

export type { ICurrency, IExpense };
