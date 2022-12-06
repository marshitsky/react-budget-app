import { createContext, ReactNode, useContext, useState } from "react";
import { IExpense } from "../../types";

interface IExpensesContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  removeExpense: (id: string) => void;
}

interface IExpensesContextProviderProps {
  children: ReactNode;
}

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setSxpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],
    setNewExpense: (newExpense) => {
      setSxpensesContext((context) => ({
        ...context,
        expenses: [...context.expenses, newExpense],
      }));
    },
    removeExpense: (id) => {
      setSxpensesContext((context) => ({
        ...context,
        expenses: context.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));

  return expensesContext;
};

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
