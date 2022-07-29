import styled from "styled-components";

export const StyledCard = styled.div`
  border: 5px #ffa700 solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
