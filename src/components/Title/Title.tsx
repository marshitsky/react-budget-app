import { ReactNode } from "react";
import { StyledTitle } from "./styles";

interface IProps {
  text: ReactNode;
}

export const Title = ({ text }: IProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};
