import styled from "styled-components";

const StyledExpenses = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr, 1fr, 1fr);
  gap: 30px;
`;

const StyledInput = styled.input`
  padding-left: 15px;
  height: 50px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999999;
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 390px) {
    padding: 13px 10px;
    font-size: 12px;
  }
`;

const EmptyText = styled.p`
  place-self: center center;
`;

export { StyledExpenses, EmptyText, StyledInput };
