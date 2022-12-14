import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput, useToggle } from "../../hooks";
import { StyledBudgetCard, StyledInput, StyledBtn, StyledText } from "./styles";

export const BudgetCard = () => {
  const { budget, setNewBudget } = useBudgetContext();

  const {
    currentCurrency: { value },
  } = useCurrencyContext();

  const inputBudget = useInput();

  const [isBudgetActive, toogleIsBudgetActive] = useToggle(true);

  const handleSave = () => {
    setNewBudget(+inputBudget.value);
    toogleIsBudgetActive();
  };

  const handleEdit = () => toogleIsBudgetActive();

  return (
    <StyledBudgetCard>
      {isBudgetActive ? (
        <>
          <StyledInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
          <StyledBtn onClick={handleSave}>Save</StyledBtn>
        </>
      ) : (
        <>
          <StyledText>
            Budget: {value} {budget}
          </StyledText>
          <StyledBtn onClick={handleEdit}>Edit</StyledBtn>
        </>
      )}
    </StyledBudgetCard>
  );
};
