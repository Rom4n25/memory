import { StyledCardContainer } from "./styles/CardContainer";
import Card from "./Card";

const CardContainer = ({ cards, selectCard }) => {
  return (
    <StyledCardContainer>
      {cards.map((card) => (
        <Card key={card} id={card} selectCard={selectCard} />
      ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
