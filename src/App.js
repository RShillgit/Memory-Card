import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import uniqid from "uniqid";
import githubMark from './images/github-mark.png';
import slugMonster from './images/slug-monster.png';
import babyMonster from './images/baby-monster.png';
import businessMonster from './images/business-monster.png';
import flyingMonster from './images/flying-monster.png';
import goofyMonster from './images/goofy-monster.png';
import hairyMonster from './images/hairy-monster.png';
import happyMonster from './images/happy-monster.png';
import headphoneMonster from './images/headphone-monster.png';
import pumpkinMonster from './images/pumpkin-monster.png';
import saberToothedMonster from './images/saber-toothed-monster.png';
import scaryMonster from './images/scary-monster.png';
import yetiMonster from './images/yeti-monster.png';


const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [card, setCard] = useState([
    {
      src: slugMonster,
      text: 'Slug Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: babyMonster,
      text: 'Baby Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: businessMonster,
      text: 'Business Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: flyingMonster,
      text: 'Flying Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: goofyMonster,
      text: 'Goofy Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: hairyMonster,
      text: 'Hairy Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: happyMonster,
      text: 'Happy Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: headphoneMonster,
      text: 'Headphone Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: pumpkinMonster,
      text: 'Pumpkin Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: saberToothedMonster,
      text: 'Saber Toothed Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: scaryMonster,
      text: 'Scary Monster',
      id: uniqid(),
      clicked: false
    },
    {
      src: yetiMonster,
      text: 'Yeti Monster',
      id: uniqid(),
      clicked: false
    },
  ]) 

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

  }, [gameOver, bestScore, score]);


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
  }

  return (
    <div className="App">

      <div className='header'>
        <h1>Monster Memory</h1>
        <a href="https://github.com/RShillgit/memory-card">
          <img id='github' src={githubMark} alt="gihub"/>
        </a>
      </div>

      <div className='instructions'>
        <h2>Win By Clicking Each Card Once</h2>
      </div>

      <div className='scoreBoard'>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>

      <div className='allCardsContainer'>
        {card.map(c => <Card src={c.src} text={c.text} key={c.id} identifier={c.id} cardClick={handleCardClick}/>)}
      </div>

    </div>
  );
}

export default App;
