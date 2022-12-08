import { useState } from 'react';
import './App.css';
import Card from './components/card';
import uniqid from "uniqid";
import { click } from '@testing-library/user-event/dist/click';

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [card, setCard] = useState([
    {
      src: '',
      text: 'Card 1',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 2',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 3',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 4',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 5',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 6',
      id: uniqid(),
      clicked: false
    },
  ]) 

  const handleCardClick = (id) => {

    setCard(c => 
      c.map(obj => {
        if (obj.id === id) {
          return {...obj, clicked: true}
        }

        return obj;
    }))
  }

  return (
    <div className="App">

      <div className='header'>
        <h1>Win By Clicking Each Card Once</h1>
      </div>

      <div className='scoreBoard'>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>

      <div className='allCardsContainer'>
        {/* Cards Component */}
        {card.map(c => <Card text={c.text} key={c.id} identifier={c.id} cardClick={handleCardClick}/>)}
      </div>
    </div>
  );
}

export default App;
