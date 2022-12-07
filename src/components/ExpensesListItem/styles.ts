import styled from "styled-components";
import closeBtn from "../../assets/icons/closeBtn.svg";

const StyledExpensesListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.4fr 0.1fr;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: 2px solid #ccd5ff;
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 12px 15px;
  }
`;

const StyledItemText = styled.p``;

const StyledItemBadge = styled.span`
  justify-self: center;
  padding: 3px 10px;
  font-size: 12px;
  color: #fff;
  background-color: #23c9ff;
  border-radius: 10px;
  overflow-y: hidden;
`;

const StyledRemoveBtn = styled.button`
  width: 15px;
  height: 15px;
  background: url(${closeBtn});
  border: none;
`;

export { StyledExpensesListItem, StyledItemText, StyledItemBadge, StyledRemoveBtn };
