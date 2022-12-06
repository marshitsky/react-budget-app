import { IExpense } from "../../types/types";
import { ExpenseItem } from "../ExpensesListItem/ExpensesListItem";
import { EmptyText, StyledList } from "./styles";

interface IProps {
  expensesList: IExpense[];
}

export const ExpensesList = ({ expensesList }: IProps) => {
  return (
    <StyledList>
      {expensesList.map(({ name, price, id }) => (
        <ExpenseItem key={id} name={name} price={price} id={id} />
      ))}
    </StyledList>
  );
};
