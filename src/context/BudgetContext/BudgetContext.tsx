import { createContext, useContext, useState } from "react";
import { IBudgetContextProviderProps, IBudgetContext } from "../../types/types";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const useBudgetContext = () => useContext(BudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (newBudget) => {
      setBudgetContext((context) => ({
        ...context,
        budget: newBudget,
      }));
    },
  }));
  return budgetContext;
};

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
