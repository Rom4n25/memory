import { StyledCard } from "./styles/Card";

const Card = ({ id, selectCard }) => {
  return (
    <StyledCard onClick={(e) => selectCard(e)}>
      <img
        id={id}
        src={require(`../img/${id}.png`)}
        alt="img"
        width="160"
        height="160"
      ></img>
    </StyledCard>
  );
};
export default Card;
