import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
import { StyledRemainingCard, RemainingText } from "./styles";

export const RemainingCard = () => {
  const {
    currentCurrency: { value },
  } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const remaining = budget - expenses.reduce((total, { price }) => total + price, 0);
  const isOverspent = remaining >= 0;

  return (
    <StyledRemainingCard isOverspent={isOverspent}>
      <RemainingText>
        {isOverspent
          ? `Remaining: ${value} ${remaining}`
          : `Overspending by: ${value} ${Math.abs(remaining)}`}
      </RemainingText>
    </StyledRemainingCard>
  );
};
