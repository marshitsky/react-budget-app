import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: IProps) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {children}
    </StyledButton>
  );
};
