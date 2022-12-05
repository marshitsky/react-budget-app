import { useCurrencyContext, useExpensesContext } from "../../context";
import { StyledItemBadge, StyledRemoveBtn, StyledItemText, StyledExpensesListItem } from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ExpenseItem = ({ name, price, id }: IProps) => {
  const {
    currentCurrency: { value },
  } = useCurrencyContext();
  const { removeExpense } = useExpensesContext();
  const handleDelete = () => {
    removeExpense(id);
  };

  return (
    <StyledExpensesListItem>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemBadge>
        {value} {price}
      </StyledItemBadge>
      <StyledRemoveBtn onClick={handleDelete}>&times;</StyledRemoveBtn>
    </StyledExpensesListItem>
  );
};
