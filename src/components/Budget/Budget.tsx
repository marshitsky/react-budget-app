import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../Spent/Spent";
import { Title } from "../Title/Title";
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
