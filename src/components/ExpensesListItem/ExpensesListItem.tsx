import { useCurrencyContext, useExpensesContext } from "../../context";
import { IExpense } from "../../types";
import { StyledItemBadge, StyledRemoveBtn, StyledItemText, StyledExpensesListItem } from "./styles";

export const ExpensesListItem = ({ name, price, id }: IExpense) => {
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
      <StyledRemoveBtn onClick={handleDelete}></StyledRemoveBtn>
    </StyledExpensesListItem>
  );
};
