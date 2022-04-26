import { useEffect, useState } from 'react/cjs/react.development';
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

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      // .map((card, idx) => ({ ...card, id: idx }));
      .map((card, idx) => ({ ...card, id: Math.random() }));

    setCards(() => shuffled);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      compareChoices();
    }
  }, [choiceOne, choiceTwo]);

  const compareChoices = () => {
    if (choiceOne.src === choiceTwo.src) {
      console.log('equal');
      setCards(prevCards =>
        prevCards.map(item =>
          item.src === choiceOne.src ? { ...item, matched: true } : item
        )
      );
    } else {
      console.log('not equal');
    }

    resetTurn();
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };

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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
