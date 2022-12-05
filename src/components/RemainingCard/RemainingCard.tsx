import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
import { StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const {
    currentCurrency: { value },
  } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const remaining = budget - expenses.reduce((total, { price }) => total + +price, 0);

  return (
    <StyledRemainingCard>
      Remaining: {value} {remaining}
    </StyledRemainingCard>
  );
};
