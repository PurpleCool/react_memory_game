import { useState } from 'react/cjs/react.development';
import './App.css'
// import * as helmet_1 from '../public/img/helmet-1.png';
// import * as potion_1 from '../public/img/potion-1.png';
// import * as ring_1   from '../public/img/ring-1.png';
// import * as scroll_1 from '../public/img/scroll-1.png';
// import * as shield_1 from '../public/img/shield-1.png';
// import * as sword_1  from '../public/img/sword-1.png';

const cardImages = [
  { src: 'img/helmet-1.png' },
  { src: 'img/potion-1.png' },
  { src: 'img/ring-1.png'   },
  { src: 'img/scroll-1.png' },
  { src: 'img/shield-1.png' },
  { src: 'img/sword-1.png'  },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      // .map((card, idx) => ({ ...card, id: idx }));
      .map((card, idx) => ({ ...card, id: Math.random() }));

    setCards(() => shuffled);
    setTurns(0);
  }

  console.log('cards', cards);
  console.log('turns', turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App