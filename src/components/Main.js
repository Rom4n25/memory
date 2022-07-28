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

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <StyledMain>
      <Stats points={points} record={record} />
      <CardContainer cards={cards} shuffleCards={shuffleCards} />
    </StyledMain>
  );
};
export default Main;
