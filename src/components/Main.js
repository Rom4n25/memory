import { StyledMain } from "./styles/Main";
import CardContainer from "./CardContainer";
import Stats from "./Stats";
import { useEffect, useState } from "react";

const Main = () => {
  const [cards, setCards] = useState([]);
  const [uniqueCards, setUniqueCards] = useState([]);
  const [points, setPoints] = useState(0);
  const [record, setRecord] = useState(0);

  const shuffleCards = () => {
    const list = [];

    while (list.length < 10) {
      let randomNumber = Math.floor(Math.random() * 10);
      if (!list.includes(randomNumber)) list.push(randomNumber);
    }

    setCards(list);
  };

  const selectCard = (e) => {
    if (uniqueCards.includes(e.target.id)) {
      setPoints(0);
      setUniqueCards([]);
    } else {
      uniqueCards.push(e.target.id);
      setPoints(uniqueCards.length);
      if (uniqueCards.length > record) {
        setRecord(uniqueCards.length);
      }
    }
    shuffleCards();
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <StyledMain>
      <Stats points={points} record={record} />
      <CardContainer cards={cards} selectCard={selectCard} />
    </StyledMain>
  );
};
export default Main;
