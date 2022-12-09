import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(1fr, 1fr, 1fr);
  gap: 20px;
`;

const StyledInputForm = styled.input`
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
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  @media (max-width: 390px) {
    padding: 13px 10px;
    font-size: 12px;
  }
`;

const ErrorMessage = styled.p`
  margin-top: -15px;
  font-size: 13px;
  color: red;
`;

export { StyledForm, StyledInputForm, ErrorMessage };
