import styled from "styled-components";

interface IProps {
  isOverspent: boolean;
}

const StyledRemainingCard = styled.div<IProps>`
  display: grid;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  color: ${({ isOverspent }: IProps) => (isOverspent ? "#000000" : "#FFFFFF")};
  border-radius: 10px;
  background: ${({ isOverspent }: IProps) => (isOverspent ? "#CCD5FF" : "#FF0000")};
  overflow-y: auto;
`;

const RemainingText = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export { StyledRemainingCard, RemainingText };
