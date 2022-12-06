import { createContext, ReactNode, useContext, useState } from "react";

interface IBudgetContextProviderProps {
  children: ReactNode;
}

interface IBudgetContext {
  budget: number;
  setNewBudget: (value: number) => void;
}

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
