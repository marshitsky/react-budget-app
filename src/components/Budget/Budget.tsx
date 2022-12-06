import { BudgetCard, CustomSelect, RemainingCard, SpentCard, Title } from "../../components";

import { BudgetWrapper, StyledBudgetHeader } from "./styles";

export const Budget = () => {
  return (
    <BudgetWrapper>
      <StyledBudgetHeader>
        <Title text="Budget"></Title>
        <CustomSelect />
      </StyledBudgetHeader>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </BudgetWrapper>
  );
};
