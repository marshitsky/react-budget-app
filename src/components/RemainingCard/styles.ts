import styled from "styled-components";

interface IProps {
  isOverspent: boolean;
}

export const StyledRemainingCard = styled.div<IProps>`
  background: ${({ isOverspent }: IProps) => (isOverspent ? "lightBlue" : "Red")};
`;
