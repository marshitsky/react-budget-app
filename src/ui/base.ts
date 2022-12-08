import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  place-self: center center;
  flex-direction: column;
  gap: 30px;
  width: clamp(320px, 100%, 425px);
  min-height: 100vh;
  padding: 30px 20px 53px 20px;
  background-color: #ffffff;
`;

export { Wrapper };
