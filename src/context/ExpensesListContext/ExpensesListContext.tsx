import { createContext, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProviderProps } from "../../types/types";

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
