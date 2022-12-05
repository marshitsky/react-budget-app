import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context";
import { useInput } from "../../hooks/useInput";
import { IExpense } from "../../types/types";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>([]);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase())),
    );
  }, [search.value, expenses]);

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <input {...search} placeholder="search ..." />
      <ExpensesList expensesList={filteredExpenses} />
    </StyledExpenses>
  );
};
