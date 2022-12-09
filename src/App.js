import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import uniqid from "uniqid";

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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
    {
      src: '',
      text: 'Card 7',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 8',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 9',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 10',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 11',
      id: uniqid(),
      clicked: false
    },
    {
      src: '',
      text: 'Card 12',
      id: uniqid(),
      clicked: false
    },
  ]) 

  const shuffleCards = () => {
    
    // Copy card array to a temporary array
    let shuffledArray = [...card];
    let currentIndex = shuffledArray.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
  
    // Set card array to shuffled array
    setCard(shuffledArray);

  }




  // Every time the card array changes check if the game is over
  useEffect(() => {

    if(gameOver === true) {

      console.log('Game Over');

      // Set Score back to zero
      setScore(0);
  
      // Set Best score if it is a new best score
      if (bestScore < score) setBestScore(score);

      // Set all cards clicked properties back to false
      setCard(c => 
        c.map(obj => {
            return {...obj, clicked: false}
      }))

      // Set game over back to false
      setGameOver(false);
    }

  }, [gameOver]);

  // Every time the score changes shuffle the cards
  useEffect(() => {

    // Copy card array to a temporary array
    let shuffledArray = [...card];
    let currentIndex = shuffledArray.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
  
    // Set card array to shuffled array
    setCard(shuffledArray);
    
  }, [score])

  const handleCardClick = (id) => {

    for(let i = 0; i < card.length; i++) {
      // If the card object is the same as the card clicked
      if (card[i].id === id) {

        // If the card has NOT BEEN CLICKED YET, change its clicked property to true
        if (card[i].clicked === false) {

          setCard(c => 
            c.map(obj => {
              if (obj.id === id) {
      
                // Set clicked to true
                return {...obj, clicked: true}
              }
  
              return obj;
          }))

          // Incriment Score
          setScore(score + 1);
        }
        // Else, set game over to true
        else {
          setGameOver(true);
        }
      }
    }

    /*
    setCard(c => 
      c.map(obj => {
        if (obj.id === id) {

          // This is where there would be some type of game over logic
          if (obj.clicked === true) {

            // Set Game Over to true
            //setGameOver(true);

            //declareGameOver();
          }

          else {

            // Set clicked to true
            return {...obj, clicked: true}
          }
        }

        return obj;
    }))

    If (gameOver === false) {
        // Incriment Score
      setScore(score + 1);

      // Shuffle cards function
      shuffleCards();
    }
    */

    // Run the gameContinue function somehow, but when its called 
    // From this function, it makes all of the clicked: false
    //gameContinue();
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
        {card.map(c => <Card text={c.text} key={c.id} identifier={c.id} cardClick={handleCardClick}/>)}
      </div>
    </div>
  );
}

export default App;
