import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 50px;
  grid-template-columns: repeat(auto-fill, 180px);
  justify-items: center;
  justify-content: space-around;
  align-items: stretch;
  border-radius: 20px;
  margin-left: 50px;
  margin-right: 50px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
`;
