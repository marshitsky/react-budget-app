import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context";
import { useDebounce, useInput } from "../../hooks";
import { IExpense } from "../../types";
import { ExpensesList, Title } from "../../components";
import { StyledExpenses, EmptyText, StyledInput } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>(expenses);
  const debouncedValue = useDebounce(search.value, 700);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase())),
    );
  }, [debouncedValue, expenses]);

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <StyledInput {...search} placeholder="search ..." />
      {filteredExpenses.length ? (
        <ExpensesList expensesList={filteredExpenses} />
      ) : (
        <EmptyText>Oooops 🙈</EmptyText>
      )}
    </StyledExpenses>
  );
};
