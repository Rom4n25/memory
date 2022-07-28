import { StyledCard } from "./styles/Card";

const Card = ({ id, shuffleCards }) => {
  return (
    <StyledCard id={id} onClick={() => shuffleCards()}>
      {id}
    </StyledCard>
  );
};
export default Card;
