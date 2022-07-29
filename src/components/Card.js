import { StyledCard } from "./styles/Card";

const Card = ({ id, selectCard }) => {
  return (
    <StyledCard id={id} onClick={(e) => selectCard(e)}>
      {id}
    </StyledCard>
  );
};
export default Card;
