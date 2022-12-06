import { IExpense } from "../../types";
import { ExpensesListItem } from "../../components";
import { StyledList } from "./styles";

interface IProps {
  expensesList: IExpense[];
}

export const ExpensesList = ({ expensesList }: IProps) => {
  return (
    <StyledList>
      {expensesList.map(({ name, price, id }) => (
        <ExpensesListItem key={id} name={name} price={price} id={id} />
      ))}
    </StyledList>
  );
};
