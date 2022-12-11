import styled from "styled-components";

const StyledList = styled.ul`
  margin-top: 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { StyledList };
