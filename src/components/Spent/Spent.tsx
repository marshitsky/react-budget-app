import { useCurrencyContext, useExpensesContext } from "../../context";
import { SpentText, StyledSpentCard } from "./styles";

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const {
    currentCurrency: { value },
  } = useCurrencyContext();
  const getSpentSum = expenses.reduce((totalExpenses, { price }) => totalExpenses + +price, 0);

  return (
    <StyledSpentCard>
      <SpentText>
        Spent so far: {value} {getSpentSum}
      </SpentText>
    </StyledSpentCard>
  );
};
