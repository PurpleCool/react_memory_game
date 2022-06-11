import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';

const cardImages = [
  { src: 'img/helmet-1.png', matched: false },
  { src: 'img/potion-1.png', matched: false },
  { src: 'img/ring-1.png', matched: false },
  { src: 'img/scroll-1.png', matched: false },
  { src: 'img/shield-1.png', matched: false },
  { src: 'img/sword-1.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, idx) => ({ ...card, id: idx }));

    setCards(() => shuffled);
    setTurns(0);
  };

  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (!choiceOne || !choiceTwo) {
      return;
    }

    setDisabled(true);

    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards =>
        prevCards.map(item =>
          item.src === choiceOne.src ? { ...item, matched: true } : item
        )
      );
    }

    setTimeout(resetTurn, 1000);
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <Card
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
