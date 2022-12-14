import styled from "styled-components";

const StyledBudgetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;
  background-color: #7cc6fe;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  background-color: transparent;
  border: none;
  &::placeholder {
    color: #ffffff;
  }
  &:focus-visible {
    outline: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledBtn = styled.button`
  padding: 5px 20px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    background: rgba(220, 237, 249, 0.7);
  }
  &:disabled {
    &:hover {
      background-color: #fff;
    }
  }
  @media (max-width: 390px) {
    font-size: 13px;
  }
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export { StyledBudgetCard, StyledInput, StyledBtn, StyledText };
