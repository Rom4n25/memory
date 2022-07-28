import { StyledCardContainer } from "./styles/CardContainer";
import Card from "./Card";

const CardContainer = ({ cards, shuffleCards }) => {
  return (
    <StyledCardContainer>
      {cards.map((card) => (
        <Card key={card} id={card} shuffleCards={shuffleCards} />
      ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
