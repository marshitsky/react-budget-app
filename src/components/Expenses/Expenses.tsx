import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context";
import { useInput } from "../../hooks";
import { IExpense } from "../../types";
import { ExpensesList, Title } from "../../components";
import { StyledExpenses, EmptyText, StyledInput } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase())),
    );
  }, [search.value, expenses]);

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <StyledInput {...search} placeholder="search ..." />
      {expenses.length ? (
        <ExpensesList expensesList={filteredExpenses} />
      ) : (
        <EmptyText>Oooops 🙈</EmptyText>
      )}
    </StyledExpenses>
  );
};
