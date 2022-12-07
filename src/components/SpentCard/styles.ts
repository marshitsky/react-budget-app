import styled from "styled-components";

const StyledSpentCard = styled.div`
  display: grid;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background-color: #e7bbe3;
  border-radius: 10px;
  overflow-y: auto;
`;

const SpentText = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export { StyledSpentCard, SpentText };
